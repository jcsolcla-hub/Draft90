import React, { useState, useEffect } from 'react';
import { Player, SlotConfig, MatchEvent, MatchResult, MatchStats, TournamentStage } from '../types';
import { calculateEffectiveRating, HISTORICAL_TEAMS } from '../data/teamsData';
import { sound } from '../utils/audio';
import { FastForward, Trophy, Clock } from 'lucide-react';

interface MatchSimModalProps {
  userPlayers: (Player | null)[];
  userSlots: SlotConfig[];
  stage: TournamentStage;
  roundName: string;
  onMatchComplete: (result: MatchResult) => void;
  onClose: () => void;
}

export const MatchSimModal: React.FC<MatchSimModalProps> = ({
  userPlayers,
  userSlots,
  stage,
  roundName,
  onMatchComplete,
  onClose,
}) => {
  // Select Opponent based on historical teams and current stage
  const [oppTeam] = useState(() => {
    const pool = HISTORICAL_TEAMS;

    // Filter teams by tier/rating corresponding to the tournament stage
    let filteredPool = pool;
    if (stage === 'octavos') {
      filteredPool = pool.filter((t) => {
        const avg = t.players.reduce((a, b) => a + b.rating, 0) / (t.players.length || 1);
        return avg <= 83.5;
      });
    } else if (stage === 'cuartos') {
      filteredPool = pool.filter((t) => {
        const avg = t.players.reduce((a, b) => a + b.rating, 0) / (t.players.length || 1);
        return avg > 83.5 && avg <= 87.5;
      });
    } else if (stage === 'semis') {
      filteredPool = pool.filter((t) => {
        const avg = t.players.reduce((a, b) => a + b.rating, 0) / (t.players.length || 1);
        return avg > 87.5 && avg <= 90.5;
      });
    } else if (stage === 'final') {
      filteredPool = pool.filter((t) => {
        const avg = t.players.reduce((a, b) => a + b.rating, 0) / (t.players.length || 1);
        return t.tier === 'legendary' || avg > 90.5;
      });
    }

    if (!filteredPool || filteredPool.length === 0) filteredPool = pool;
    return filteredPool[Math.floor(Math.random() * filteredPool.length)];
  });

  const [currentMin, setCurrentMin] = useState(0);
  const [userGoals, setUserGoals] = useState(0);
  const [oppGoals, setOppGoals] = useState(0);
  const [events, setEvents] = useState<MatchEvent[]>([]);
  const [isFinished, setIsFinished] = useState(false);
  const [speed, setSpeed] = useState<number>(1400); // ms per goal event (slower live rhythm)

  // Calculate User Team Average OVR
  const userRatings = userSlots.map((s, i) => userPlayers[i] ? calculateEffectiveRating(userPlayers[i]!, s.pos) : 70);
  const userAvg = userRatings.reduce((a, b) => a + b, 0) / userRatings.length;

  // Calculate Opponent Team Average OVR
  const oppAvg = oppTeam.players.reduce((a, b) => a + b.rating, 0) / oppTeam.players.length;

  useEffect(() => {
    // Generate Match Script with ONLY GOALS and match key milestones
    const scriptEvents: MatchEvent[] = [
      { min: 0, type: 'kickoff', text: `⚽ ¡Comienza el partido de ${roundName} en Draft 90!` }
    ];

    let uG = 0;
    let oG = 0;
    const minutesPool = Array.from({ length: 88 }, (_, i) => i + 2);

    // Advantage factor based on team rating comparison
    const diff = userAvg - oppAvg;

    // Bounded win probability: in the final, opponent is top tier but winnable ("ganable")
    let userProbability = 0.5 + diff / 30;
    if (stage === 'final') {
      userProbability = Math.max(0.42, Math.min(0.72, 0.5 + diff / 35));
    } else {
      userProbability = Math.max(0.30, Math.min(0.80, userProbability));
    }

    // Determine goal counts directly (ONLY GOALS shown during match)
    const totalGoals = Math.floor(Math.random() * 4) + 2; // 2 to 5 total goals in match
    const validPlayers = userPlayers.filter(Boolean) as Player[];

    for (let i = 0; i < totalGoals; i++) {
      if (minutesPool.length === 0) break;
      const idx = Math.floor(Math.random() * minutesPool.length);
      const min = minutesPool.splice(idx, 1)[0];

      const isUserGoal = Math.random() < userProbability;

      if (isUserGoal) {
        uG++;
        const randomPlayer = validPlayers[Math.floor(Math.random() * validPlayers.length)]?.name || 'Tu XI';
        scriptEvents.push({
          min,
          type: 'goal',
          text: `⚽ ¡GOOOOOOLAZO DE TU XI! ${randomPlayer} marca tras una gran jugada.`,
          player: randomPlayer,
        });
      } else {
        oG++;
        const randomOpponent = oppTeam.players[Math.floor(Math.random() * oppTeam.players.length)]?.name || 'Rival';
        scriptEvents.push({
          min,
          type: 'goalOpp',
          text: `⚽ Gol de ${oppTeam.name}. ${randomOpponent} anota el tanto.`,
          player: randomOpponent,
        });
      }
    }

    scriptEvents.sort((a, b) => a.min - b.min);
    scriptEvents.push({ min: 45, type: 'half', text: '⏸️ Tiempo de descanso. Los equipos van a vestuarios.' });

    let isExtraTime = false;
    let isPenalties = false;
    let penUser = 0;
    let penOpp = 0;

    if (uG === oG) {
      isExtraTime = true;
      scriptEvents.push({ min: 90, type: 'half', text: '⏱️ Tablas a los 90 minutos. ¡Comienza la prórroga!' });

      if (Math.random() < userProbability) {
        uG++;
        const p = validPlayers[0]?.name || 'Tu delantero';
        scriptEvents.push({ min: 108, type: 'goal', text: `⚽ ¡GOLÓN EN LA PRÓRROGA! ${p} anota un gol decisivo.` });
      } else {
        oG++;
        scriptEvents.push({ min: 114, type: 'goalOpp', text: `⚽ Gol del ${oppTeam.name} en el tiempo suplementario.` });
      }

      if (uG === oG) {
        isPenalties = true;
        penUser = Math.floor(Math.random() * 3) + 3;
        penOpp = penUser === 5 ? 4 : penUser + (Math.random() < userProbability ? 1 : -1);
        if (penUser === penOpp) penUser++;

        scriptEvents.push({
          min: 120,
          type: 'penalty',
          text: `🎯 TANDA DE PENALTIS FINALIZADA: ${penUser} - ${penOpp}`,
        });
      }
    }

    scriptEvents.push({ min: isExtraTime ? 120 : 90, type: 'end', text: `🏁 ¡FINAL DEL PARTIDO DE ${roundName.toUpperCase()}!` });

    // Live Ticker Animation
    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep >= scriptEvents.length) {
        clearInterval(interval);
        setIsFinished(true);

        // Build Match Result Object
        const won = isPenalties ? penUser > penOpp : uG > oG;
        const mvpPlayer = validPlayers.sort((a, b) => b.rating - a.rating)[0];

        const stats: MatchStats = {
          possUser: Math.round(50 + diff * 1.2),
          possOpp: Math.round(50 - diff * 1.2),
          shotsUser: Math.floor(Math.random() * 8) + 8,
          shotsOpp: Math.floor(Math.random() * 8) + 6,
          sotUser: uG + Math.floor(Math.random() * 4) + 2,
          sotOpp: oG + Math.floor(Math.random() * 4) + 2,
          passAccUser: Math.round(82 + diff * 0.5),
          passAccOpp: Math.round(80 - diff * 0.5),
          cornersUser: Math.floor(Math.random() * 6) + 3,
          cornersOpp: Math.floor(Math.random() * 6) + 2,
          foulsUser: Math.floor(Math.random() * 7) + 4,
          foulsOpp: Math.floor(Math.random() * 7) + 5,
          savesUser: Math.floor(Math.random() * 5) + 3,
          savesOpp: Math.floor(Math.random() * 5) + 2,
        };

        let pts = Math.round(userAvg * 30);
        if (won) pts += 1500;
        if (stage === 'final' && won) pts += 5000;

        const result: MatchResult = {
          id: Date.now().toString(),
          roundStage: stage,
          roundName,
          oppTeam: oppTeam.name,
          oppYear: oppTeam.year,
          oppFlag: oppTeam.flag,
          userGoals: uG,
          oppGoals: oG,
          extraTime: isExtraTime,
          penalties: isPenalties,
          penScore: isPenalties ? { user: penUser, opp: penOpp } : undefined,
          won,
          mvp: {
            name: mvpPlayer?.name || 'Tu Capitán',
            rating: Number((8.5 + Math.random() * 1.2).toFixed(1)),
            goals: uG > 0 ? 1 : 0,
            position: mvpPlayer?.primaryPos || 'ST',
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

        if (won) sound.playGoal();
        onMatchComplete(result);
        return;
      }

      const ev = scriptEvents[currentStep];
      setCurrentMin(ev.min);
      if (ev.type === 'goal') setUserGoals((prev) => prev + 1);
      if (ev.type === 'goalOpp') setOppGoals((prev) => prev + 1);
      setEvents((prev) => [ev, ...prev]);
      currentStep++;
    }, speed);

    return () => clearInterval(interval);
  }, [speed]);

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#121826] border-2 border-[#26334d] rounded-2xl max-w-2xl w-full p-6 shadow-2xl flex flex-col gap-6 max-h-[90vh] overflow-hidden text-white">
        {/* Stadium & Tournament Header */}
        <div className="text-center border-b border-[#26334d] pb-4">
          <div className="text-xs font-black font-display uppercase tracking-widest text-[#ef4444] flex items-center justify-center gap-1.5">
            <Trophy className="w-4 h-4 text-amber-400" />
            <span>TORNEO DRAFT 90 · {roundName.toUpperCase()}</span>
          </div>

          {/* Scoreboard */}
          <div className="flex items-center justify-center gap-6 mt-3">
            <div className="text-center flex-1">
              <span className="text-xl md:text-2xl font-black font-display block text-white">TU XI HISTÓRICO</span>
              <span className="text-xs font-mono font-bold text-gray-400">MEDIA {userAvg.toFixed(1)}</span>
            </div>

            <div className="bg-[#0b0f19] text-white px-6 py-2.5 rounded-xl border border-[#26334d] flex items-center gap-4 shadow-inner">
              <span className="font-display font-black text-4xl text-amber-400">{userGoals}</span>
              <span className="text-xl font-mono text-gray-500">-</span>
              <span className="font-display font-black text-4xl text-amber-400">{oppGoals}</span>
            </div>

            <div className="text-center flex-1">
              <span className="text-xl md:text-2xl font-black font-display block text-white">{oppTeam.flag} {oppTeam.name}</span>
              <span className="text-xs font-mono font-bold text-gray-400">{oppTeam.tag}</span>
            </div>
          </div>

          {/* Match Clock Indicator */}
          <div className="mt-3 inline-flex items-center gap-2 bg-amber-500 text-black px-3 py-1 rounded-full text-xs font-black font-mono shadow-md">
            <Clock className="w-3.5 h-3.5" />
            <span>MINUTO {currentMin}'</span>
          </div>
        </div>

        {/* Live Commentary Feed (ONLY GOALS) */}
        <div className="flex flex-col gap-2 flex-1">
          <div className="flex items-center justify-between text-[10px] font-mono font-bold text-gray-400 px-1">
            <span>RETRANSMISIÓN EN DIRECTO</span>
            <span className="text-emerald-400 bg-emerald-950/80 border border-emerald-600/50 px-2 py-0.5 rounded font-black">
              ⚽ SÓLO GOLES Y GOLEADORES
            </span>
          </div>

          <div className="flex-1 bg-[#0b0f19] border border-[#26334d] rounded-xl p-4 overflow-y-auto max-h-[280px] flex flex-col gap-2 custom-scrollbar">
            {events.map((ev, idx) => (
              <div
                key={idx}
                className={`p-3 rounded-lg border text-xs font-medium flex gap-3 items-start ${
                  ev.type === 'goal'
                    ? 'bg-red-950/80 border-red-600 font-bold text-red-200'
                    : ev.type === 'goalOpp'
                    ? 'bg-amber-950/80 border-amber-600 font-bold text-amber-200'
                    : 'bg-[#182234] border-[#26334d] text-gray-200'
                }`}
              >
                <span className="font-mono font-black text-[#ef4444] w-8 flex-shrink-0">
                  {ev.min}'
                </span>
                <span className="flex-1 leading-relaxed">{ev.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Speed Controls & Skip Button */}
        <div className="flex items-center justify-between border-t border-[#26334d] pt-4 flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono font-bold text-gray-400 uppercase">VELOCIDAD:</span>
            <button
              onClick={() => setSpeed(1400)}
              className={`px-2.5 py-1 rounded text-xs font-mono font-bold border ${
                speed === 1400 ? 'bg-[#ef4444] text-white border-white' : 'bg-[#182234] text-gray-400 border-[#2b3b5c]'
              }`}
            >
              1x Normal
            </button>
            <button
              onClick={() => setSpeed(600)}
              className={`px-2.5 py-1 rounded text-xs font-mono font-bold border ${
                speed === 600 ? 'bg-[#ef4444] text-white border-white' : 'bg-[#182234] text-gray-400 border-[#2b3b5c]'
              }`}
            >
              2x Rápido
            </button>
            <button
              onClick={() => {
                setSpeed(40);
                sound.playClick();
              }}
              className={`flex items-center gap-1 px-2.5 py-1 rounded text-xs font-mono font-bold border ${
                speed === 40 ? 'bg-amber-500 text-black border-white' : 'bg-[#182234] text-gray-400 border-[#2b3b5c]'
              }`}
            >
              <FastForward className="w-3.5 h-3.5" />
              <span>Instantáneo</span>
            </button>
          </div>

          {isFinished && (
            <button
              onClick={onClose}
              className="bg-[#ef4444] hover:bg-red-600 text-white text-xs font-black px-6 py-2.5 rounded-lg shadow-lg animate-pulse uppercase cursor-pointer"
            >
              VER RESULTADO
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

