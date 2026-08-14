import React, { useState, useEffect, useRef } from 'react';
import {
  Player,
  SlotConfig,
  MatchEvent,
  MatchResult,
  MatchStats,
  TournamentStage,
  PenaltyKick,
  GoalDetail,
} from '../types';
import { calculateEffectiveRating, HISTORICAL_TEAMS } from '../data/teamsData';
import { isEligibleDraftTeam } from '../utils/draftSelection';
import { sound } from '../utils/audio';
import {
  FastForward,
  Trophy,
  Clock,
  Play,
  Pause,
  Shield,
  Activity,
  BarChart3,
  Target,
  Sparkles,
  ChevronRight,
  Flame,
} from 'lucide-react';

interface MatchSimModalProps {
  userPlayers: (Player | null)[];
  userSlots: SlotConfig[];
  stage: TournamentStage;
  roundName: string;
  onMatchComplete: (result: MatchResult) => void;
  onClose: () => void;
}

const GOAL_STYLES = [
  'Zurdazo imparable a la escuadra',
  'Definición sutil picando el balón sobre el portero',
  'Remate de volea tras centro milimétrico',
  'Cabezazo potente al palo largo',
  'Disparo raso cruzado ajustado al poste',
  'Contragolpe letal tras recuperación en mediocampo',
  'Tiro libre magistral por encima de la barrera',
  'Jugada individual eludiendo a dos defensas',
];

export const MatchSimModal: React.FC<MatchSimModalProps> = ({
  userPlayers,
  userSlots,
  stage,
  roundName,
  onMatchComplete,
  onClose,
}) => {
  // 1. Select Balanced Historical Opponent (strictly filtered by stage rating and UEFA/WC eligibility)
  const [oppTeam] = useState(() => {
    const pool = HISTORICAL_TEAMS.filter((t) => isEligibleDraftTeam(t, 'all'));

    let filteredPool = pool;
    if (stage === 'octavos') {
      filteredPool = pool.filter((t) => {
        const avg = t.players.reduce((a, b) => a + b.rating, 0) / (t.players.length || 1);
        return avg <= 84;
      });
    } else if (stage === 'cuartos') {
      filteredPool = pool.filter((t) => {
        const avg = t.players.reduce((a, b) => a + b.rating, 0) / (t.players.length || 1);
        return avg > 83.5 && avg <= 88;
      });
    } else if (stage === 'semis') {
      filteredPool = pool.filter((t) => {
        const avg = t.players.reduce((a, b) => a + b.rating, 0) / (t.players.length || 1);
        return avg > 87.5 && avg <= 91;
      });
    } else if (stage === 'final') {
      filteredPool = pool.filter((t) => {
        const avg = t.players.reduce((a, b) => a + b.rating, 0) / (t.players.length || 1);
        return t.tier === 'legendary' || avg > 90;
      });
    }

    if (!filteredPool || filteredPool.length === 0) filteredPool = pool;
    return filteredPool[Math.floor(Math.random() * filteredPool.length)];
  });

  // Calculate User Team Average OVR
  const userRatings = userSlots.map((s, i) =>
    userPlayers[i] ? calculateEffectiveRating(userPlayers[i]!, s.pos) : 72
  );
  const userAvg = userRatings.reduce((a, b) => a + b, 0) / userRatings.length;
  const validUserPlayers = (userPlayers.filter(Boolean) as Player[]);
  const userGK = validUserPlayers.find((p) => p.primaryPos === 'GK')?.name || 'Tu Guardameta';

  // Calculate Opponent Team Average OVR
  const oppAvg = oppTeam.players.reduce((a, b) => a + b.rating, 0) / oppTeam.players.length;
  const oppGK = oppTeam.players.find((p) => p.primaryPos === 'GK')?.name || 'Portero Rival';

  // Match State
  const [currentMin, setCurrentMin] = useState(0);
  const [userGoals, setUserGoals] = useState(0);
  const [oppGoals, setOppGoals] = useState(0);
  const [events, setEvents] = useState<MatchEvent[]>([]);
  const [goalDetails, setGoalDetails] = useState<GoalDetail[]>([]);
  const [activeTab, setActiveTab] = useState<'events' | 'goals' | 'stats'>('events');
  
  // Playback Control (Pausado y Legible por defecto: 2000ms)
  const [speed, setSpeed] = useState<number>(2000); // 2000ms = Ritmo pausado y legible
  const [isPaused, setIsPaused] = useState(false);
  const [matchPhase, setMatchPhase] = useState<'regular' | 'halftime' | 'extratime' | 'penalties_prompt' | 'penalties_active' | 'finished'>('regular');

  // Penalty Shootout State (IFAB Official Regulatory System)
  const [penaltyKicks, setPenaltyKicks] = useState<PenaltyKick[]>([]);
  const [userPenScore, setUserPenScore] = useState(0);
  const [oppPenScore, setOppPenScore] = useState(0);
  const [currentPenTurn, setCurrentPenTurn] = useState<number>(0);
  const [isShootoutActive, setIsShootoutActive] = useState(false);

  // Script and Simulation Refs
  const scriptEventsRef = useRef<MatchEvent[]>([]);
  const currentStepRef = useRef(0);
  const penaltyScriptRef = useRef<PenaltyKick[]>([]);
  const completedResultRef = useRef<MatchResult | null>(null);

  // Pre-generate Match Events & Outcome on Mount
  useEffect(() => {
    const diff = userAvg - oppAvg;
    let userWinProb = 0.5 + diff / 32;
    if (stage === 'final') {
      userWinProb = Math.max(0.42, Math.min(0.72, 0.5 + diff / 36));
    } else {
      userWinProb = Math.max(0.30, Math.min(0.80, userWinProb));
    }

    const script: MatchEvent[] = [
      { min: 1, type: 'kickoff', text: `⚽ ¡Comienza el encuentro de ${roundName}! Rueda el balón en Draft 90.` },
    ];

    // Determine goal counts
    const totalGoals = Math.floor(Math.random() * 4) + 1; // 1 to 4 goals in regular time
    const minutesPool = [8, 14, 22, 29, 36, 41, 52, 63, 71, 79, 84, 88];
    const generatedGoals: GoalDetail[] = [];

    let uG = 0;
    let oG = 0;

    for (let i = 0; i < totalGoals; i++) {
      if (minutesPool.length === 0) break;
      const idx = Math.floor(Math.random() * minutesPool.length);
      const min = minutesPool.splice(idx, 1)[0];
      const isUserGoal = Math.random() < userWinProb;
      const style = GOAL_STYLES[Math.floor(Math.random() * GOAL_STYLES.length)];

      if (isUserGoal) {
        uG++;
        const scorers = validUserPlayers.filter((p) => ['ST', 'LW', 'RW', 'AM', 'CM'].includes(p.primaryPos));
        const scorer = (scorers.length > 0 ? scorers[Math.floor(Math.random() * scorers.length)] : validUserPlayers[0]) || {
          name: 'Goleador Estrella',
          primaryPos: 'ST',
        };

        const gDetail: GoalDetail = {
          min,
          player: scorer.name,
          pos: scorer.primaryPos,
          team: 'user',
          teamName: 'Tu XI Histórico',
          teamFlag: '⭐',
          description: style,
          scoreAfter: { user: uG, opp: oG },
        };
        generatedGoals.push(gDetail);

        script.push({
          min,
          type: 'goal',
          text: `⚽ ¡GOOOOOOLAZO DE TU XI! ${scorer.name} anota con ${style.toLowerCase()}.`,
          player: scorer.name,
          detail: style,
          userScore: uG,
          oppScore: oG,
        });
      } else {
        oG++;
        const oppScorers = oppTeam.players.filter((p) => ['ST', 'LW', 'RW', 'AM', 'CM'].includes(p.primaryPos));
        const scorer = (oppScorers.length > 0 ? oppScorers[Math.floor(Math.random() * oppScorers.length)] : oppTeam.players[0]) || {
          name: 'Delantero Rival',
          primaryPos: 'ST',
        };

        const gDetail: GoalDetail = {
          min,
          player: scorer.name,
          pos: scorer.primaryPos,
          team: 'opp',
          teamName: oppTeam.name,
          teamFlag: oppTeam.flag,
          description: style,
          scoreAfter: { user: uG, opp: oG },
        };
        generatedGoals.push(gDetail);

        script.push({
          min,
          type: 'goalOpp',
          text: `⚽ Gol de ${oppTeam.name}. ${scorer.name} marca tras ${style.toLowerCase()}.`,
          player: scorer.name,
          detail: style,
          userScore: uG,
          oppScore: oG,
        });
      }
    }

    // Add Halftime
    script.push({ min: 45, type: 'half', text: '⏸️ Final de la primera parte. Descanso táctico en los vestuarios.' });
    
    // Sort chronologically
    script.sort((a, b) => a.min - b.min);

    let willNeedPenalties = false;
    let isExtraTime = false;

    // Check if match ends in a draw at 90'
    if (uG === oG) {
      isExtraTime = true;
      script.push({ min: 90, type: 'extraTime', text: '⏱️ Empate a los 90 minutos reglamentarios. ¡Comienza la prórroga!' });

      // Extra time goal chance (40%)
      if (Math.random() < 0.45) {
        const minET = Math.random() < 0.5 ? 104 : 116;
        const isUserET = Math.random() < userWinProb;
        const style = GOAL_STYLES[Math.floor(Math.random() * GOAL_STYLES.length)];

        if (isUserET) {
          uG++;
          const scorer = validUserPlayers[0]?.name || 'Tu Delantero';
          script.push({
            min: minET,
            type: 'goal',
            text: `⚽ ¡GOLÓN AGÓNICO EN LA PRÓRROGA! ${scorer} marca un tanto decisivo.`,
            player: scorer,
            detail: style,
            userScore: uG,
            oppScore: oG,
          });
        } else {
          oG++;
          const scorer = oppTeam.players[0]?.name || 'Delantero Rival';
          script.push({
            min: minET,
            type: 'goalOpp',
            text: `⚽ Gol de ${oppTeam.name} en el tiempo extra marcado por ${scorer}.`,
            player: scorer,
            detail: style,
            userScore: uG,
            oppScore: oG,
          });
        }
      }

      if (uG === oG) {
        willNeedPenalties = true;
        script.push({
          min: 120,
          type: 'penaltyShootout',
          text: '🎯 ¡FINAL DE LA PRÓRROGA CON EMPATE! Se procederá a la TANDA REGLAMENTARIA DE PENALTIS (Reglamento IFAB).',
        });
      }
    }

    if (!willNeedPenalties) {
      script.push({
        min: isExtraTime ? 120 : 90,
        type: 'end',
        text: `🏁 ¡FINAL DEL PARTIDO DE ${roundName.toUpperCase()}!`,
      });
    }

    // Pre-generate IFAB Regulatory Penalty Shootout Script (5 kicks each + sudden death)
    const penKicks: PenaltyKick[] = [];
    let pUser = 0;
    let pOpp = 0;

    const userTakers = [
      ...validUserPlayers.filter((p) => ['ST', 'AM', 'LW', 'RW', 'CM'].includes(p.primaryPos)),
      ...validUserPlayers,
    ];
    const oppTakers = [
      ...oppTeam.players.filter((p) => ['ST', 'AM', 'LW', 'RW', 'CM'].includes(p.primaryPos)),
      ...oppTeam.players,
    ];

    // Regulatory 5 rounds
    for (let round = 1; round <= 5; round++) {
      // User kick
      const uTaker = userTakers[(round - 1) % userTakers.length]?.name || `Tirador ${round}`;
      const uSuccess = Math.random() < Math.max(0.68, Math.min(0.92, 0.76 + (userAvg - 80) / 100));
      if (uSuccess) pUser++;
      penKicks.push({
        round,
        taker: uTaker,
        takerTeam: 'user',
        goalkeeper: oppGK,
        scored: uSuccess,
        type: uSuccess ? 'goal' : Math.random() < 0.65 ? 'saved' : 'woodwork',
        text: uSuccess
          ? `⚽ ¡GOL DE TU XI! ${uTaker} engaña al portero y convierte el penal.`
          : `🧤 ¡PARADA! El portero ${oppGK} adivina la trayectoria del disparo de ${uTaker}.`,
      });

      // Opponent kick
      const oTaker = oppTakers[(round - 1) % oppTakers.length]?.name || `Rival ${round}`;
      const oSuccess = Math.random() < Math.max(0.62, Math.min(0.88, 0.73 + (oppAvg - 80) / 100));
      if (oSuccess) pOpp++;
      penKicks.push({
        round,
        taker: oTaker,
        takerTeam: 'opp',
        goalkeeper: userGK,
        scored: oSuccess,
        type: oSuccess ? 'goal' : Math.random() < 0.65 ? 'saved' : 'woodwork',
        text: oSuccess
          ? `⚽ Gol de ${oppTeam.name}. ${oTaker} define con frialdad.`
          : `🧤 ¡PARADÓN DE ${userGK}! Detiene el disparo de ${oTaker} con una estirada descomunal.`,
      });
    }

    // Sudden Death (Muerte Súbita IFAB: 1 vs 1) if tied after 5 kicks
    let suddenDeathRound = 6;
    while (pUser === pOpp && suddenDeathRound <= 11) {
      const uTaker = userTakers[(suddenDeathRound - 1) % userTakers.length]?.name || `Tirador ${suddenDeathRound}`;
      const oTaker = oppTakers[(suddenDeathRound - 1) % oppTakers.length]?.name || `Rival ${suddenDeathRound}`;

      const uSuccess = Math.random() < (userWinProb > 0.5 ? 0.82 : 0.70);
      const oSuccess = uSuccess ? Math.random() < 0.40 : Math.random() < 0.75;

      if (uSuccess) pUser++;
      penKicks.push({
        round: suddenDeathRound,
        taker: uTaker,
        takerTeam: 'user',
        goalkeeper: oppGK,
        scored: uSuccess,
        type: uSuccess ? 'goal' : 'saved',
        text: uSuccess
          ? `⚽ ¡GOL DECISIVO DE MUERTE SÚBITA! ${uTaker} marca para Tu XI.`
          : `❌ Fallo de ${uTaker} en la muerte súbita.`,
      });

      if (oSuccess) pOpp++;
      penKicks.push({
        round: suddenDeathRound,
        taker: oTaker,
        takerTeam: 'opp',
        goalkeeper: userGK,
        scored: oSuccess,
        type: oSuccess ? 'goal' : 'saved',
        text: oSuccess
          ? `⚽ Gol de ${oppTeam.name} en muerte súbita (${oTaker}).`
          : `🧤 ¡PARADA DEFINITIVA DE ${userGK}! ${oTaker} no logra anotar.`,
      });

      suddenDeathRound++;
    }

    // Guarantee winner in knockout
    if (pUser === pOpp) {
      pUser++;
      penKicks[penKicks.length - 2].scored = true;
    }

    scriptEventsRef.current = script;
    penaltyScriptRef.current = penKicks;

    // Calculate Match Stats
    const stats: MatchStats = {
      possUser: Math.round(50 + diff * 1.2),
      possOpp: Math.round(50 - diff * 1.2),
      shotsUser: Math.floor(Math.random() * 7) + 9,
      shotsOpp: Math.floor(Math.random() * 7) + 7,
      sotUser: uG + Math.floor(Math.random() * 4) + 2,
      sotOpp: oG + Math.floor(Math.random() * 4) + 2,
      passAccUser: Math.round(83 + diff * 0.4),
      passAccOpp: Math.round(81 - diff * 0.4),
      cornersUser: Math.floor(Math.random() * 5) + 3,
      cornersOpp: Math.floor(Math.random() * 5) + 2,
      foulsUser: Math.floor(Math.random() * 6) + 4,
      foulsOpp: Math.floor(Math.random() * 6) + 5,
      savesUser: Math.floor(Math.random() * 5) + 3,
      savesOpp: Math.floor(Math.random() * 5) + 3,
      xGUser: Number((uG * 0.8 + Math.random() * 0.9 + 0.4).toFixed(2)),
      xGOpp: Number((oG * 0.8 + Math.random() * 0.9 + 0.3).toFixed(2)),
    };

    const won = willNeedPenalties ? pUser > pOpp : uG > oG;
    const mvpCandidate = validUserPlayers.sort((a, b) => b.rating - a.rating)[0] || {
      name: 'Capitán de Tu XI',
      rating: 88,
      primaryPos: 'ST',
    };

    let pts = Math.round(userAvg * 30);
    if (won) pts += 1500;
    if (stage === 'final' && won) pts += 5000;

    completedResultRef.current = {
      id: Date.now().toString(),
      roundStage: stage,
      roundName,
      oppTeam: oppTeam.name,
      oppYear: oppTeam.year,
      oppFlag: oppTeam.flag,
      userGoals: uG,
      oppGoals: oG,
      extraTime: isExtraTime,
      penalties: willNeedPenalties,
      penScore: willNeedPenalties ? { user: pUser, opp: pOpp } : undefined,
      penaltyKicks: willNeedPenalties ? penKicks : undefined,
      goalDetails: generatedGoals,
      won,
      mvp: {
        name: mvpCandidate.name,
        rating: Number((8.4 + Math.random() * 1.3).toFixed(1)),
        goals: uG > 0 ? 1 : 0,
        position: mvpCandidate.primaryPos,
      },
      stats,
      userAvgRating: Number(userAvg.toFixed(1)),
      pointsEarned: pts,
      date: new Date().toLocaleDateString('es-ES'),
      squadSummary: userSlots.map((s, idx) => ({
        name: userPlayers[idx]?.name || 'Jugador',
        rating: userPlayers[idx]?.rating || 75,
        pos: s.pos,
      })),
    };
  }, []);

  // Main Event Loop (Controlled Pace & Step Timer)
  useEffect(() => {
    if (isPaused || matchPhase === 'penalties_prompt' || matchPhase === 'finished') return;

    if (speed === 0) {
      // Instant skip: run all events immediately
      const allEvents = scriptEventsRef.current;
      setEvents([...allEvents].reverse());
      if (completedResultRef.current) {
        setUserGoals(completedResultRef.current.userGoals);
        setOppGoals(completedResultRef.current.oppGoals);
        setGoalDetails(completedResultRef.current.goalDetails || []);
        if (completedResultRef.current.penalties) {
          setPenaltyKicks(penaltyScriptRef.current);
          setUserPenScore(completedResultRef.current.penScore?.user || 0);
          setOppPenScore(completedResultRef.current.penScore?.opp || 0);
        }
      }
      setMatchPhase('finished');
      return;
    }

    const timer = setInterval(() => {
      const script = scriptEventsRef.current;
      const step = currentStepRef.current;

      if (step < script.length) {
        const ev = script[step];
        setCurrentMin(ev.min);

        if (ev.type === 'goal') {
          setUserGoals((prev) => prev + 1);
          sound.playGoal();
        } else if (ev.type === 'goalOpp') {
          setOppGoals((prev) => prev + 1);
          sound.playCardSelect();
        } else if (ev.type === 'half') {
          setMatchPhase('halftime');
          sound.playWhistle();
        } else if (ev.type === 'penaltyShootout') {
          setMatchPhase('penalties_prompt');
          sound.playWhistle();
          clearInterval(timer);
          return;
        } else if (ev.type === 'end') {
          setMatchPhase('finished');
          sound.playWhistle();
          clearInterval(timer);
          return;
        }

        setEvents((prev) => [ev, ...prev]);
        currentStepRef.current = step + 1;
      } else {
        if (!completedResultRef.current?.penalties) {
          setMatchPhase('finished');
        }
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [speed, isPaused, matchPhase]);

  // Handle Starting Penalty Shootout Sequence
  const handleStartPenaltyShootout = () => {
    setIsShootoutActive(true);
    setMatchPhase('penalties_active');
    sound.playWhistle();
  };

  // Step-by-step Penalty Shootout Execution Loop
  useEffect(() => {
    if (matchPhase !== 'penalties_active') return;

    if (speed === 0) {
      setPenaltyKicks(penaltyScriptRef.current);
      if (completedResultRef.current?.penScore) {
        setUserPenScore(completedResultRef.current.penScore.user);
        setOppPenScore(completedResultRef.current.penScore.opp);
      }
      setMatchPhase('finished');
      return;
    }

    const penTimer = setInterval(() => {
      if (currentPenTurn < penaltyScriptRef.current.length) {
        const kick = penaltyScriptRef.current[currentPenTurn];
        setPenaltyKicks((prev) => [...prev, kick]);

        if (kick.scored) {
          if (kick.takerTeam === 'user') setUserPenScore((prev) => prev + 1);
          else setOppPenScore((prev) => prev + 1);
          sound.playPenaltyGoal();
        } else if (kick.type === 'saved') {
          sound.playPenaltySave();
        } else {
          sound.playPenaltyMiss();
        }

        setCurrentPenTurn((prev) => prev + 1);
      } else {
        clearInterval(penTimer);
        setMatchPhase('finished');
        sound.playWhistle();
      }
    }, Math.max(1400, speed));

    return () => clearInterval(penTimer);
  }, [matchPhase, currentPenTurn, speed]);

  const handleFinishAndShowResult = () => {
    if (completedResultRef.current) {
      onMatchComplete(completedResultRef.current);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-3 md:p-4 overflow-y-auto">
      <div className="bg-[#0f172a] border-2 border-[#1e293b] rounded-2xl max-w-3xl w-full p-4 md:p-6 shadow-2xl flex flex-col gap-4 max-h-[92vh] overflow-hidden text-white relative">
        {/* Stadium Atmosphere Backdrop Glow */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 via-amber-400 to-[#ef4444]" />

        {/* 1. BROADCAST SCOREBOARD HEADER */}
        <div className="bg-[#0b1120] border-2 border-[#1e293b] rounded-xl p-4 shadow-lg text-center relative overflow-hidden">
          {/* Subtle field markings */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.15),transparent_70%)] pointer-events-none" />

          <div className="flex items-center justify-between border-b border-[#1e293b] pb-2 mb-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[11px] font-mono font-black uppercase tracking-widest bg-[#1e293b] text-amber-300 border border-amber-500/40 shadow-sm">
              <Trophy className="w-3.5 h-3.5 text-amber-400" />
              <span>DRAFT 90 · {roundName.toUpperCase()}</span>
            </div>

            {/* Live Clock & Period Indicator */}
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-mono font-black bg-emerald-950 text-emerald-300 border border-emerald-500/50 shadow-inner">
                <Clock className="w-3.5 h-3.5 animate-pulse text-emerald-400" />
                <span>
                  {matchPhase === 'penalties_prompt' || matchPhase === 'penalties_active'
                    ? 'TANDA DE PENALTIS'
                    : matchPhase === 'finished'
                    ? 'PARTIDO FINALIZADO'
                    : `MINUTO ${currentMin}'`}
                </span>
              </span>
            </div>
          </div>

          {/* Teams vs Scoreboard Display */}
          <div className="grid grid-cols-12 items-center gap-2">
            {/* User XI */}
            <div className="col-span-5 text-right flex flex-col items-end pr-2">
              <div className="flex items-center gap-2">
                <div className="text-right">
                  <span className="text-lg md:text-xl font-black font-display text-white uppercase block leading-tight">
                    TU XI HISTÓRICO
                  </span>
                  <span className="text-[10px] font-mono font-bold text-emerald-400">
                    OVR {userAvg.toFixed(1)} · {userSlots.length} TITULARES
                  </span>
                </div>
                <div className="w-10 h-10 rounded-full bg-emerald-900/80 border-2 border-emerald-400 flex items-center justify-center text-lg shadow-md flex-shrink-0">
                  ⭐
                </div>
              </div>
            </div>

            {/* Score Center Box */}
            <div className="col-span-2 flex flex-col items-center justify-center">
              <div className="bg-[#020617] border-2 border-amber-400/80 px-4 py-1.5 rounded-xl shadow-[0_0_20px_rgba(251,191,36,0.25)] flex items-center gap-2 text-center">
                <span className="font-display font-black text-3xl md:text-4xl text-amber-300">
                  {userGoals}
                </span>
                <span className="text-gray-500 font-black text-lg">:</span>
                <span className="font-display font-black text-3xl md:text-4xl text-amber-300">
                  {oppGoals}
                </span>
              </div>
              {completedResultRef.current?.extraTime && (
                <span className="text-[9px] font-mono font-bold text-amber-400 mt-1 uppercase">
                  (Prórroga)
                </span>
              )}
            </div>

            {/* Opponent Team */}
            <div className="col-span-5 text-left flex flex-col items-start pl-2">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-[#1e293b] border-2 border-gray-400 flex items-center justify-center text-2xl shadow-md flex-shrink-0">
                  {oppTeam.flag}
                </div>
                <div className="text-left">
                  <span className="text-lg md:text-xl font-black font-display text-white uppercase block leading-tight line-clamp-1">
                    {oppTeam.name}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-gray-400">
                    {oppTeam.tag} · OVR {oppAvg.toFixed(1)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. REGULATORY PENALTY SHOOTOUT SECTION (IFAB RULES) */}
        {(matchPhase === 'penalties_prompt' || matchPhase === 'penalties_active' || (matchPhase === 'finished' && completedResultRef.current?.penalties)) && (
          <div className="bg-gradient-to-b from-[#111827] to-[#0b0f19] border-2 border-amber-500/80 rounded-xl p-4 shadow-xl flex flex-col gap-3 animate-fadeIn">
            <div className="flex items-center justify-between border-b border-amber-500/30 pb-2">
              <div className="flex items-center gap-2 text-amber-300 font-display font-black text-xs md:text-sm uppercase tracking-wider">
                <Target className="w-4 h-4 text-amber-400 animate-spin" />
                <span>TANDA DE PENALTIS REGLAMENTARIA (OFICIAL IFAB)</span>
              </div>
              <div className="text-xs font-mono font-black text-amber-400 bg-amber-950/80 px-3 py-0.5 rounded-full border border-amber-500/50">
                PENALTIS: {userPenScore} - {oppPenScore}
              </div>
            </div>

            {matchPhase === 'penalties_prompt' && !isShootoutActive && (
              <div className="text-center py-4 flex flex-col items-center gap-3">
                <p className="text-xs font-medium text-gray-300 max-w-md">
                  El tiempo reglamentario y la prórroga han finalizado en empate. El pase a la siguiente ronda se decidirá en la tanda de 5 lanzamientos reglamentarios por equipo, con muerte súbita si persiste el empate.
                </p>
                <button
                  onClick={handleStartPenaltyShootout}
                  className="bg-amber-500 hover:bg-amber-400 text-black font-display font-black text-xs md:text-sm px-6 py-3 rounded-xl shadow-lg border-2 border-white uppercase cursor-pointer flex items-center gap-2 transform hover:scale-105 transition-all"
                >
                  <Target className="w-4 h-4 text-black" />
                  <span>EJECUTAR TANDA DE PENALTIS REGLAMENTARIA</span>
                </button>
              </div>
            )}

            {(isShootoutActive || matchPhase === 'finished') && (
              <div className="flex flex-col gap-3">
                {/* Penalty Boards (User vs Opponent Dots) */}
                <div className="grid grid-cols-2 gap-4 bg-[#0b0f19] p-3 rounded-lg border border-[#1e293b]">
                  {/* User Penaltis */}
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase">
                      TU XI ({userPenScore} Goles)
                    </span>
                    <div className="flex items-center gap-2">
                      {Array.from({ length: 5 }).map((_, idx) => {
                        const kick = penaltyKicks.filter((k) => k.takerTeam === 'user')[idx];
                        return (
                          <div
                            key={idx}
                            className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold font-mono border-2 transition-all ${
                              !kick
                                ? 'bg-[#1e293b] border-gray-600 text-gray-500'
                                : kick.scored
                                ? 'bg-emerald-600 border-white text-white shadow-[0_0_8px_rgba(16,185,129,0.8)]'
                                : 'bg-red-600 border-white text-white shadow-[0_0_8px_rgba(239,68,68,0.8)]'
                            }`}
                          >
                            {!kick ? idx + 1 : kick.scored ? '✓' : '✕'}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Opponent Penaltis */}
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[10px] font-mono font-bold text-amber-400 uppercase">
                      {oppTeam.name} ({oppPenScore} Goles)
                    </span>
                    <div className="flex items-center gap-2">
                      {Array.from({ length: 5 }).map((_, idx) => {
                        const kick = penaltyKicks.filter((k) => k.takerTeam === 'opp')[idx];
                        return (
                          <div
                            key={idx}
                            className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold font-mono border-2 transition-all ${
                              !kick
                                ? 'bg-[#1e293b] border-gray-600 text-gray-500'
                                : kick.scored
                                ? 'bg-emerald-600 border-white text-white shadow-[0_0_8px_rgba(16,185,129,0.8)]'
                                : 'bg-red-600 border-white text-white shadow-[0_0_8px_rgba(239,68,68,0.8)]'
                            }`}
                          >
                            {!kick ? idx + 1 : kick.scored ? '✓' : '✕'}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Live Penalty commentary banner */}
                <div className="bg-[#020617] border border-[#1e293b] rounded-lg p-2.5 max-h-24 overflow-y-auto custom-scrollbar flex flex-col gap-1">
                  {penaltyKicks.slice(-3).reverse().map((pk, idx) => (
                    <div
                      key={idx}
                      className={`text-xs font-medium px-2 py-1 rounded flex items-center justify-between ${
                        pk.scored ? 'bg-emerald-950/60 text-emerald-200' : 'bg-red-950/60 text-red-200'
                      }`}
                    >
                      <span>
                        {pk.takerTeam === 'user' ? '⭐' : oppTeam.flag} <strong>{pk.taker}</strong> ({pk.takerTeam === 'user' ? 'Tu XI' : oppTeam.name})
                      </span>
                      <span className="font-black text-[11px]">
                        {pk.scored ? '⚽ GOL' : '🧤 ' + (pk.type === 'saved' ? 'PARADA' : 'FALLO')}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* 3. TABS: DIRECTO / RESUMEN DE GOLES / ESTADÍSTICAS */}
        <div className="flex items-center justify-between border-b border-[#1e293b] pb-2">
          <div className="flex items-center gap-1">
            <button
              onClick={() => setActiveTab('events')}
              className={`px-3 py-1 rounded-lg text-xs font-bold uppercase transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'events'
                  ? 'bg-[#ef4444] text-white shadow-md'
                  : 'bg-[#1e293b] text-gray-400 hover:text-white'
              }`}
            >
              <Activity className="w-3.5 h-3.5" />
              <span>Directo y Jugadas</span>
            </button>

            <button
              onClick={() => setActiveTab('goals')}
              className={`px-3 py-1 rounded-lg text-xs font-bold uppercase transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'goals'
                  ? 'bg-amber-500 text-black shadow-md'
                  : 'bg-[#1e293b] text-gray-400 hover:text-white'
              }`}
            >
              <span>⚽ Resumen de Goles</span>
              {userGoals + oppGoals > 0 && (
                <span className="bg-black/40 text-white px-1.5 py-0.2 rounded-full text-[10px] font-mono">
                  {userGoals + oppGoals}
                </span>
              )}
            </button>

            <button
              onClick={() => setActiveTab('stats')}
              className={`px-3 py-1 rounded-lg text-xs font-bold uppercase transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'stats'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-[#1e293b] text-gray-400 hover:text-white'
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5" />
              <span>Estadísticas</span>
            </button>
          </div>

          {/* Pace Badge */}
          <span className="text-[10px] font-mono font-bold text-gray-400 uppercase hidden sm:inline">
            Ritmo: {speed === 2000 ? 'Pausado' : speed === 1400 ? 'Normal' : speed === 600 ? 'Rápido' : 'Instantáneo'}
          </span>
        </div>

        {/* 4. TAB CONTENTS */}
        <div className="flex-1 bg-[#020617] border border-[#1e293b] rounded-xl p-4 overflow-y-auto max-h-[280px] min-h-[220px] custom-scrollbar">
          {/* TAB: DIRECTO & JUGADAS */}
          {activeTab === 'events' && (
            <div className="flex flex-col gap-2.5">
              {events.length === 0 ? (
                <div className="text-center py-8 text-gray-500 font-mono text-xs">
                  Esperando el pitido inicial del árbitro...
                </div>
              ) : (
                events.map((ev, idx) => (
                  <div
                    key={idx}
                    className={`p-3 rounded-xl border text-xs leading-relaxed flex gap-3 items-start transition-all ${
                      ev.type === 'goal'
                        ? 'bg-gradient-to-r from-emerald-950/90 to-[#062419] border-emerald-500 text-emerald-100 font-bold shadow-[0_0_15px_rgba(16,185,129,0.2)]'
                        : ev.type === 'goalOpp'
                        ? 'bg-gradient-to-r from-amber-950/90 to-[#291705] border-amber-500 text-amber-100 font-bold shadow-[0_0_15px_rgba(245,158,11,0.2)]'
                        : ev.type === 'penaltyShootout'
                        ? 'bg-amber-950/80 border-amber-400 text-amber-200 font-bold'
                        : ev.type === 'half' || ev.type === 'extraTime'
                        ? 'bg-[#1e293b] border-blue-500/50 text-blue-200 font-semibold'
                        : 'bg-[#0f172a] border-[#1e293b] text-gray-200'
                    }`}
                  >
                    <span
                      className={`font-mono font-black px-2 py-0.5 rounded text-[11px] flex-shrink-0 ${
                        ev.type === 'goal'
                          ? 'bg-emerald-500 text-black'
                          : ev.type === 'goalOpp'
                          ? 'bg-amber-500 text-black'
                          : 'bg-[#1e293b] text-gray-300'
                      }`}
                    >
                      {ev.min}'
                    </span>

                    <div className="flex-1 flex flex-col gap-0.5">
                      <span>{ev.text}</span>
                      {ev.detail && (
                        <span className="text-[10px] opacity-80 italic text-gray-300">
                          Detalle táctico: {ev.detail}
                        </span>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {/* TAB: RESUMEN CLARO DE GOLES */}
          {activeTab === 'goals' && (
            <div className="flex flex-col gap-4">
              <div className="text-center pb-2 border-b border-[#1e293b]">
                <h4 className="font-display font-black text-sm text-amber-400 uppercase tracking-wide">
                  RESUMEN OFICIAL DE GOLEADORES Y MINUTOS
                </h4>
                <p className="text-[11px] font-mono text-gray-400">
                  Desglose exacto de los tantos marcados en el encuentro
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Tu XI Goals */}
                <div className="bg-[#0b1120] border border-emerald-600/40 rounded-xl p-3 flex flex-col gap-2">
                  <div className="flex items-center justify-between border-b border-emerald-500/30 pb-1.5">
                    <span className="text-xs font-display font-black text-emerald-400 uppercase">
                      ⭐ GOLES DE TU XI ({userGoals})
                    </span>
                    <span className="text-[10px] font-mono text-gray-400">Marcador parcial</span>
                  </div>

                  {events.filter((e) => e.type === 'goal').length === 0 ? (
                    <p className="text-xs font-mono text-gray-500 italic py-2">
                      Sin goles anotados hasta el momento.
                    </p>
                  ) : (
                    events
                      .filter((e) => e.type === 'goal')
                      .reverse()
                      .map((g, idx) => (
                        <div
                          key={idx}
                          className="bg-emerald-950/50 border border-emerald-500/30 p-2 rounded-lg flex items-center justify-between text-xs"
                        >
                          <div className="flex items-center gap-2">
                            <span className="font-mono font-black text-emerald-400 bg-black/40 px-1.5 py-0.5 rounded text-[10px]">
                              {g.min}'
                            </span>
                            <span className="font-bold text-white">{g.player || 'Goleador'}</span>
                          </div>
                          <span className="text-[10px] font-mono text-emerald-300">
                            {g.userScore} - {g.oppScore}
                          </span>
                        </div>
                      ))
                  )}
                </div>

                {/* Opponent Goals */}
                <div className="bg-[#0b1120] border border-amber-600/40 rounded-xl p-3 flex flex-col gap-2">
                  <div className="flex items-center justify-between border-b border-amber-500/30 pb-1.5">
                    <span className="text-xs font-display font-black text-amber-400 uppercase">
                      {oppTeam.flag} GOLES DE {oppTeam.name.toUpperCase()} ({oppGoals})
                    </span>
                    <span className="text-[10px] font-mono text-gray-400">Marcador parcial</span>
                  </div>

                  {events.filter((e) => e.type === 'goalOpp').length === 0 ? (
                    <p className="text-xs font-mono text-gray-500 italic py-2">
                      Sin goles encajados.
                    </p>
                  ) : (
                    events
                      .filter((e) => e.type === 'goalOpp')
                      .reverse()
                      .map((g, idx) => (
                        <div
                          key={idx}
                          className="bg-amber-950/50 border border-amber-500/30 p-2 rounded-lg flex items-center justify-between text-xs"
                        >
                          <div className="flex items-center gap-2">
                            <span className="font-mono font-black text-amber-400 bg-black/40 px-1.5 py-0.5 rounded text-[10px]">
                              {g.min}'
                            </span>
                            <span className="font-bold text-white">{g.player || oppTeam.name}</span>
                          </div>
                          <span className="text-[10px] font-mono text-amber-300">
                            {g.userScore} - {g.oppScore}
                          </span>
                        </div>
                      ))
                  )}
                </div>
              </div>
            </div>
          )}

          {/* TAB: ESTADÍSTICAS COMPLETAS */}
          {activeTab === 'stats' && completedResultRef.current && (
            <div className="flex flex-col gap-3">
              <div className="text-center pb-2 border-b border-[#1e293b]">
                <h4 className="font-display font-black text-xs text-blue-400 uppercase tracking-wide">
                  MÉTRICAS TÁCTICAS DEL ENCUENTRO
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono font-medium">
                {/* Possession */}
                <div className="bg-[#0b1120] p-2.5 rounded-lg border border-[#1e293b]">
                  <div className="flex justify-between text-gray-300 mb-1">
                    <span>Posesión de Balón</span>
                    <span className="font-bold text-white">
                      {completedResultRef.current.stats.possUser}% / {completedResultRef.current.stats.possOpp}%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden flex">
                    <div
                      className="bg-emerald-500 h-full"
                      style={{ width: `${completedResultRef.current.stats.possUser}%` }}
                    />
                    <div
                      className="bg-amber-500 h-full"
                      style={{ width: `${completedResultRef.current.stats.possOpp}%` }}
                    />
                  </div>
                </div>

                {/* Tiros a puerta */}
                <div className="bg-[#0b1120] p-2.5 rounded-lg border border-[#1e293b] flex justify-between items-center">
                  <span className="text-gray-300">Tiros a puerta</span>
                  <span className="font-bold text-emerald-400">
                    {completedResultRef.current.stats.sotUser}{' '}
                    <span className="text-gray-500">/</span>{' '}
                    <span className="text-amber-400">{completedResultRef.current.stats.sotOpp}</span>
                  </span>
                </div>

                {/* Expected Goals (xG) */}
                <div className="bg-[#0b1120] p-2.5 rounded-lg border border-[#1e293b] flex justify-between items-center">
                  <span className="text-gray-300">Goles Esperados (xG)</span>
                  <span className="font-bold text-white">
                    {completedResultRef.current.stats.xGUser} xG / {completedResultRef.current.stats.xGOpp} xG
                  </span>
                </div>

                {/* Precision Pases */}
                <div className="bg-[#0b1120] p-2.5 rounded-lg border border-[#1e293b] flex justify-between items-center">
                  <span className="text-gray-300">Precisión de pase</span>
                  <span className="font-bold text-white">
                    {completedResultRef.current.stats.passAccUser}% / {completedResultRef.current.stats.passAccOpp}%
                  </span>
                </div>

                {/* Paradas */}
                <div className="bg-[#0b1120] p-2.5 rounded-lg border border-[#1e293b] flex justify-between items-center">
                  <span className="text-gray-300">Paradas de portero</span>
                  <span className="font-bold text-white">
                    {completedResultRef.current.stats.savesUser} / {completedResultRef.current.stats.savesOpp}
                  </span>
                </div>

                {/* Córners */}
                <div className="bg-[#0b1120] p-2.5 rounded-lg border border-[#1e293b] flex justify-between items-center">
                  <span className="text-gray-300">Saques de esquina</span>
                  <span className="font-bold text-white">
                    {completedResultRef.current.stats.cornersUser} / {completedResultRef.current.stats.cornersOpp}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 5. CONTROLS BAR: PACE / PAUSE / RESULT BUTTON */}
        <div className="flex items-center justify-between border-t border-[#1e293b] pt-3 flex-wrap gap-2">
          {/* Pace & Speed Controls */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-[10px] font-mono font-bold text-gray-400 uppercase mr-1">
              RITMO:
            </span>

            <button
              onClick={() => { sound.playClick(); setSpeed(2000); }}
              className={`px-2.5 py-1 rounded text-xs font-mono font-bold border cursor-pointer transition-all ${
                speed === 2000
                  ? 'bg-emerald-600 text-white border-white shadow-sm'
                  : 'bg-[#1e293b] text-gray-400 border-[#334155] hover:text-white'
              }`}
            >
              🐢 Pausado (2s)
            </button>

            <button
              onClick={() => { sound.playClick(); setSpeed(1400); }}
              className={`px-2.5 py-1 rounded text-xs font-mono font-bold border cursor-pointer transition-all ${
                speed === 1400
                  ? 'bg-emerald-600 text-white border-white shadow-sm'
                  : 'bg-[#1e293b] text-gray-400 border-[#334155] hover:text-white'
              }`}
            >
              ⏱️ Normal
            </button>

            <button
              onClick={() => { sound.playClick(); setSpeed(600); }}
              className={`px-2.5 py-1 rounded text-xs font-mono font-bold border cursor-pointer transition-all ${
                speed === 600
                  ? 'bg-emerald-600 text-white border-white shadow-sm'
                  : 'bg-[#1e293b] text-gray-400 border-[#334155] hover:text-white'
              }`}
            >
              ⚡ Rápido
            </button>

            {/* Pause / Resume Button */}
            {matchPhase !== 'finished' && (
              <button
                onClick={() => {
                  sound.playClick();
                  setIsPaused(!isPaused);
                }}
                className={`flex items-center gap-1 px-2.5 py-1 rounded text-xs font-mono font-bold border cursor-pointer ${
                  isPaused
                    ? 'bg-amber-500 text-black border-white'
                    : 'bg-[#1e293b] text-gray-300 border-[#334155] hover:text-white'
                }`}
              >
                {isPaused ? <Play className="w-3.5 h-3.5 fill-current" /> : <Pause className="w-3.5 h-3.5" />}
                <span>{isPaused ? 'Reanudar' : 'Pausar'}</span>
              </button>
            )}

            {/* Instant Skip */}
            {matchPhase !== 'finished' && (
              <button
                onClick={() => {
                  sound.playClick();
                  setSpeed(0);
                }}
                className="flex items-center gap-1 px-2.5 py-1 rounded text-xs font-mono font-bold bg-[#1e293b] hover:bg-[#334155] text-amber-400 border border-amber-500/40 cursor-pointer"
              >
                <FastForward className="w-3.5 h-3.5" />
                <span>Saltar al Final</span>
              </button>
            )}
          </div>

          {/* Finish & View Result CTA */}
          {matchPhase === 'finished' && (
            <button
              onClick={handleFinishAndShowResult}
              className="bg-[#ef4444] hover:bg-red-600 text-white text-xs font-black font-display px-6 py-2.5 rounded-xl shadow-lg border border-white uppercase cursor-pointer animate-pulse flex items-center gap-1.5 transform hover:scale-105 transition-all"
            >
              <span>VER ACTA Y RESULTADO FINAL</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
