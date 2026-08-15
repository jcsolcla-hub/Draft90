import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { PickList } from './components/PickList';
import { Pitch } from './components/Pitch';
import { BoxScore } from './components/BoxScore';
import { MatchSimModal } from './components/MatchSimModal';
import { ResultModal } from './components/ResultModal';
import { SquadCardModal } from './components/SquadCardModal';
import { HistoryModal } from './components/HistoryModal';
import { DatabaseModal } from './components/DatabaseModal';
import { AuthModal } from './components/AuthModal';
import { LandingMenu } from './components/LandingMenu';

import { Team, Player, FormationType, MatchResult, UserStats, TournamentStage } from './types';
import {
  FORMATIONS,
  getRandomTeam,
  getTeamSameClubDifferentYear,
  getTeamSameYearDifferentClub,
  HISTORICAL_TEAMS,
} from './data/teamsData';
import { sound } from './utils/audio';
import { auth, onAuthStateChanged, User } from './lib/firebase';

export default function App() {
  const [hasEnteredGame, setHasEnteredGame] = useState(false);
  const [mode, setMode] = useState<'worldcup' | 'champions' | 'all'>('all');
  const [formation, setFormation] = useState<FormationType>('4-3-3');
  const [currentTeam, setCurrentTeam] = useState<Team | null>(null);
  const [drawnTeamIds, setDrawnTeamIds] = useState<string[]>([]);
  const [hasRolledForPick, setHasRolledForPick] = useState(false);
  const [reRollsLeft, setReRollsLeft] = useState(3); // 3 TOTAL PER GAME
  const [placedPlayers, setPlacedPlayers] = useState<(Player | null)[]>(Array(11).fill(null));
  const [draftedPlayerIds, setDraftedPlayerIds] = useState<Set<string>>(new Set());
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Firebase Auth State
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  // Tournament Knockout State (Octavos -> Cuartos -> Semis -> Final)
  const [tournamentStage, setTournamentStage] = useState<TournamentStage>('octavos');

  // Modals state
  const [activeModal, setActiveModal] = useState<'none' | 'match_sim' | 'result' | 'card' | 'history' | 'database'>('none');
  const [lastMatchResult, setLastMatchResult] = useState<MatchResult | null>(null);

  // Subscribe to Firebase Auth
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

  // Persistence User Stats & History
  const [userStats, setUserStats] = useState<UserStats>(() => {
    try {
      const saved = localStorage.getItem('draft90_user_stats');
      if (saved) return JSON.parse(saved);
    } catch {}
    return {
      played: 0,
      won: 0,
      lost: 0,
      goalsScored: 0,
      highestAvgRating: 0,
      highestPoints: 0,
      totalPoints: 0,
      unlockedAchievements: [],
    };
  });

  const [matchHistory, setMatchHistory] = useState<MatchResult[]>(() => {
    try {
      const saved = localStorage.getItem('draft90_match_history');
      if (saved) return JSON.parse(saved);
    } catch {}
    return [];
  });

  // Save to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('draft90_user_stats', JSON.stringify(userStats));
    } catch {}
  }, [userStats]);

  useEffect(() => {
    try {
      localStorage.setItem('draft90_match_history', JSON.stringify(matchHistory));
    } catch {}
  }, [matchHistory]);

  // Initial load: Pick a smart fresh random team without repeating
  useEffect(() => {
    const initialTeam = getRandomTeam(mode);
    setCurrentTeam(initialTeam);
    setDrawnTeamIds([initialTeam.id]);
  }, []);

  // Update mode filter and draw new team
  const handleModeChange = (newMode: 'worldcup' | 'champions' | 'all') => {
    setMode(newMode);
    setHasRolledForPick(false);
  };

  // Main Dice Roll Action to Draw Next Team & Year (Never repeats teams in same draft session!)
  const handleRollDiceForPick = () => {
    const nextTeam = getRandomTeam(mode, currentTeam?.id, drawnTeamIds);
    setCurrentTeam(nextTeam);
    setDrawnTeamIds((prev) => [...prev, nextTeam.id]);
    setHasRolledForPick(true);
    setSelectedPlayer(null);
  };

  // Re-roll: Change Country/Club (KEEPS the exact year, changes club/country)
  const handleReRollTeam = () => {
    if (reRollsLeft <= 0 || !currentTeam) return;
    setReRollsLeft((prev) => prev - 1);
    setSelectedPlayer(null);
    const nextTeam = getTeamSameYearDifferentClub(currentTeam, mode, drawnTeamIds);
    setCurrentTeam(nextTeam);
    setDrawnTeamIds((prev) => [...prev, nextTeam.id]);
  };

  // Rewarded Ad Re-roll: Change Country/Club for FREE (KEEPS the exact year, changes club/country without consuming tokens)
  const handleFreeReRollTeam = () => {
    if (!currentTeam) return;
    setSelectedPlayer(null);
    const nextTeam = getTeamSameYearDifferentClub(currentTeam, mode, drawnTeamIds);
    setCurrentTeam(nextTeam);
    setDrawnTeamIds((prev) => [...prev, nextTeam.id]);
  };

  // Re-roll: Change Year (KEEPS the exact club/country, changes year from 1958 to 2026)
  const handleReRollYear = () => {
    if (reRollsLeft <= 0 || !currentTeam) return;
    setReRollsLeft((prev) => prev - 1);
    setSelectedPlayer(null);
    const nextTeam = getTeamSameClubDifferentYear(currentTeam, drawnTeamIds);
    setCurrentTeam(nextTeam);
    setDrawnTeamIds((prev) => [...prev, nextTeam.id]);
  };

  // Rewarded Ad Re-roll: Change Year for FREE (KEEPS the exact club/country, changes year without consuming tokens)
  const handleFreeReRollYear = () => {
    if (!currentTeam) return;
    setSelectedPlayer(null);
    const nextTeam = getTeamSameClubDifferentYear(currentTeam, drawnTeamIds);
    setCurrentTeam(nextTeam);
    setDrawnTeamIds((prev) => [...prev, nextTeam.id]);
  };

  // Rewarded Ad: Add +1 reroll token to the current draft
  const handleAddReRollToken = () => {
    setReRollsLeft((prev) => prev + 1);
  };

  // Player Selection & Slot Placement
  const handleSelectPlayer = (player: Player) => {
    if (selectedPlayer?.id === player.id) {
      setSelectedPlayer(null);
    } else {
      setSelectedPlayer(player);
    }
  };

  const handleSlotClick = (slotIndex: number, targetPos: string) => {
    if (selectedPlayer) {
      // Place selected player in slot
      const nextPlaced = [...placedPlayers];
      nextPlaced[slotIndex] = selectedPlayer;
      setPlacedPlayers(nextPlaced);

      const nextDrafted = new Set(draftedPlayerIds);
      nextDrafted.add(selectedPlayer.id);
      setDraftedPlayerIds(nextDrafted);

      setSelectedPlayer(null);
      setHasRolledForPick(false); // Require rolling dice for next pick!
    } else if (placedPlayers[slotIndex]) {
      // Remove player from slot
      const playerToRemove = placedPlayers[slotIndex]!;
      const nextPlaced = [...placedPlayers];
      nextPlaced[slotIndex] = null;
      setPlacedPlayers(nextPlaced);

      const nextDrafted = new Set(draftedPlayerIds);
      nextDrafted.delete(playerToRemove.id);
      setDraftedPlayerIds(nextDrafted);
    }
  };

  const handleClearSlot = (index: number) => {
    const playerToRemove = placedPlayers[index];
    if (!playerToRemove) return;
    const nextPlaced = [...placedPlayers];
    nextPlaced[index] = null;
    setPlacedPlayers(nextPlaced);

    const nextDrafted = new Set(draftedPlayerIds);
    nextDrafted.delete(playerToRemove.id);
    setDraftedPlayerIds(nextDrafted);
  };

  const handleNewDraft = () => {
    setPlacedPlayers(Array(11).fill(null));
    setDraftedPlayerIds(new Set());
    setSelectedPlayer(null);
    setReRollsLeft(3); // Reset to 3 total rerolls for new tournament/draft
    setTournamentStage('octavos');
    setHasRolledForPick(false);
    
    // Draw a fresh non-repeating initial team for the new draft
    const freshTeam = getRandomTeam(mode, currentTeam?.id);
    setCurrentTeam(freshTeam);
    setDrawnTeamIds([freshTeam.id]);
  };

  const handleNextRound = () => {
    setActiveModal('none');
    if (tournamentStage === 'octavos') {
      setTournamentStage('cuartos');
    } else if (tournamentStage === 'cuartos') {
      setTournamentStage('semis');
    } else if (tournamentStage === 'semis') {
      setTournamentStage('final');
    } else {
      handleNewDraft();
    }
  };

  const handleMatchComplete = (result: MatchResult) => {
    setLastMatchResult(result);

    // Update Stats
    setUserStats((prev) => ({
      played: prev.played + 1,
      won: result.won ? prev.won + 1 : prev.won,
      lost: !result.won ? prev.lost + 1 : prev.lost,
      goalsScored: prev.goalsScored + result.userGoals,
      highestAvgRating: Math.max(prev.highestAvgRating, result.userAvgRating),
      highestPoints: Math.max(prev.highestPoints, result.pointsEarned),
      totalPoints: prev.totalPoints + result.pointsEarned,
      unlockedAchievements: prev.unlockedAchievements,
    }));

    setMatchHistory((prev) => [result, ...prev]);
    setActiveModal('result');
  };

  const currentSlots = FORMATIONS[formation];

  const getStageName = (stage: TournamentStage): string => {
    switch (stage) {
      case 'octavos': return 'Octavos de Final';
      case 'cuartos': return 'Cuartos de Final';
      case 'semis': return 'Semifinales';
      case 'final': return 'La Gran Final';
    }
  };

  if (!hasEnteredGame) {
    return (
      <>
        <LandingMenu
          currentUser={currentUser}
          onStartGame={() => setHasEnteredGame(true)}
          onOpenAuth={() => setIsAuthModalOpen(true)}
        />
        <AuthModal
          isOpen={isAuthModalOpen}
          onClose={() => setIsAuthModalOpen(false)}
          currentUser={currentUser}
        />
      </>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#0b0f19] text-white selection:bg-[#ef4444] selection:text-white pb-12 font-sans">
      {/* Header */}
      <Header
        mode={mode}
        setMode={handleModeChange}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
        onOpenHistory={() => setActiveModal('history')}
        onOpenDatabase={() => setActiveModal('database')}
        onNewDraft={handleNewDraft}
        totalPoints={userStats.totalPoints}
        totalReRollsLeft={reRollsLeft}
        currentUser={currentUser}
        onOpenAuth={() => setIsAuthModalOpen(true)}
        onOpenMenu={() => setHasEnteredGame(false)}
      />

      {/* Main 3-Column Horizontal Layout */}
      <main className="max-w-7xl w-full mx-auto px-3 sm:px-4 py-6 flex-1">
        {/* Tournament Bracket Stage Banner */}
        <div className="mb-6 bg-[#121826] border-2 border-[#26334d] p-3 rounded-xl shadow-dark-retro flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="text-xl">🏆</span>
            <div>
              <span className="text-[10px] font-mono font-bold uppercase text-gray-400 block">
                ETAPA DEL TORNEO
              </span>
              <span className="font-display font-black text-lg text-white uppercase">
                {getStageName(tournamentStage)}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 flex-wrap">
            {(['octavos', 'cuartos', 'semis', 'final'] as TournamentStage[]).map((st) => (
              <span
                key={st}
                className={`text-[10px] font-mono font-black px-2.5 py-1 rounded-md border uppercase ${
                  tournamentStage === st
                    ? 'bg-[#ef4444] text-white border-white shadow-md animate-pulse'
                    : 'bg-[#182234] text-gray-400 border-[#2b3b5c]'
                }`}
              >
                {st}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column (~4 cols): Pick List & Re-roll */}
          <div className="lg:col-span-4 flex flex-col order-1 lg:order-1">
            <PickList
              currentTeam={currentTeam}
              hasRolledForPick={hasRolledForPick}
              onRollDiceForPick={handleRollDiceForPick}
              reRollsLeft={reRollsLeft}
              onReRollTeam={handleReRollTeam}
              onReRollYear={handleReRollYear}
              onFreeReRollTeam={handleFreeReRollTeam}
              onFreeReRollYear={handleFreeReRollYear}
              onAddReRollToken={handleAddReRollToken}
              selectedPlayer={selectedPlayer}
              onSelectPlayer={handleSelectPlayer}
              draftedPlayerIds={draftedPlayerIds}
              slots={currentSlots}
              placedPlayers={placedPlayers}
              onSimulateTournament={() => setActiveModal('match_sim')}
            />
          </div>

          {/* Center Column (~5 cols): Football Pitch Field */}
          <div className="lg:col-span-5 flex flex-col items-center order-2 lg:order-2">
            <Pitch
              slots={currentSlots}
              placedPlayers={placedPlayers}
              selectedPlayer={selectedPlayer}
              onSlotClick={(index, pos) => handleSlotClick(index, pos)}
              formation={formation}
              onFormationChange={setFormation}
              onSimulateTournament={() => setActiveModal('match_sim')}
            />
          </div>

          {/* Right Column (~3 cols): Box Score & Roster */}
          <div className="lg:col-span-3 flex flex-col order-3 lg:order-3">
            <BoxScore
              slots={currentSlots}
              placedPlayers={placedPlayers}
              onSimulateMatch={() => setActiveModal('match_sim')}
              onClearSlot={handleClearSlot}
            />
          </div>
        </div>
      </main>

      {/* Bottom Footer Credits */}
      <footer className="max-w-7xl w-full mx-auto px-4 text-center text-xs font-mono font-bold text-gray-500 border-t border-[#26334d] pt-6">
        <p>DRAFT 90 FOOTBALL GAME · TORNEOS DE MUNDIALES Y CHAMPIONS LEAGUE</p>
        <p className="mt-1 text-[10px] text-gray-600">
          Draft táctico con tiradas únicas y cruces eliminatorios.
        </p>
      </footer>

      {/* MODALS */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        currentUser={currentUser}
      />

      {activeModal === 'match_sim' && (
        <MatchSimModal
          userPlayers={placedPlayers}
          userSlots={currentSlots}
          stage={tournamentStage}
          roundName={getStageName(tournamentStage)}
          onMatchComplete={handleMatchComplete}
          onClose={() => setActiveModal('none')}
        />
      )}

      {activeModal === 'result' && lastMatchResult && (
        <ResultModal
          result={lastMatchResult}
          onNextRound={handleNextRound}
          onNewDraft={() => {
            setActiveModal('none');
            handleNewDraft();
          }}
          onOpenCard={() => setActiveModal('card')}
          onClose={() => setActiveModal('none')}
        />
      )}

      {activeModal === 'card' && (
        <SquadCardModal
          userPlayers={placedPlayers}
          userSlots={currentSlots}
          result={lastMatchResult}
          onClose={() => setActiveModal('none')}
        />
      )}

      {activeModal === 'history' && (
        <HistoryModal
          stats={userStats}
          history={matchHistory}
          onClose={() => setActiveModal('none')}
        />
      )}

      {activeModal === 'database' && (
        <DatabaseModal onClose={() => setActiveModal('none')} />
      )}
    </div>
  );
}

