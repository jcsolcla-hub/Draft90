import React, { useState } from 'react';
import { RefreshCw, Check, Dices, Sparkles } from 'lucide-react';
import { Team, Player, SlotConfig } from '../types';
import { sound } from '../utils/audio';

interface PickListProps {
  currentTeam: Team | null;
  hasRolledForPick: boolean;
  onRollDiceForPick: () => void;
  reRollsLeft: number;
  onReRollTeam: () => void;
  onReRollYear: () => void;
  selectedPlayer: Player | null;
  onSelectPlayer: (player: Player) => void;
  draftedPlayerIds: Set<string>;
  slots: SlotConfig[];
  placedPlayers: (Player | null)[];
  onSimulateTournament: () => void;
}

export const PickList: React.FC<PickListProps> = ({
  currentTeam,
  hasRolledForPick,
  onRollDiceForPick,
  reRollsLeft,
  onReRollTeam,
  onReRollYear,
  selectedPlayer,
  onSelectPlayer,
  draftedPlayerIds,
  slots,
  placedPlayers,
  onSimulateTournament,
}) => {
  const [isRolling, setIsRolling] = useState(false);

  const totalPlaced = placedPlayers.filter(Boolean).length;
  const isDraftComplete = totalPlaced === 11;
  const currentPickNumber = Math.min(11, totalPlaced + 1);

  // Helper to check if ALL positions this player can play are occupied on the pitch
  const isPositionOccupied = (player: Player): boolean => {
    const matchingSlots = slots
      .map((slot, index) => ({ slot, index }))
      .filter(({ slot }) => player.positions.includes(slot.pos));

    if (matchingSlots.length === 0) return true;
    return matchingSlots.every(({ index }) => placedPlayers[index] !== null);
  };

  const handleRollDice = () => {
    if (isRolling || isDraftComplete) return;
    sound.playClick();
    setIsRolling(true);
    setTimeout(() => {
      onRollDiceForPick();
      setIsRolling(false);
    }, 450);
  };

  const handleReRollWithDice = () => {
    if (reRollsLeft <= 0 || isRolling || isDraftComplete) return;
    sound.playClick();
    setIsRolling(true);
    setTimeout(() => {
      onReRollTeam();
      setIsRolling(false);
    }, 450);
  };

  // STATE SPECIAL: 11 PLAYERS DRAFTED (COMPLETED)
  if (isDraftComplete) {
    return (
      <div className="flex flex-col gap-4 w-full">
        <div className="bg-[#121826] border-2 border-emerald-500/50 rounded-xl p-6 shadow-dark-retro flex flex-col items-center justify-center text-center gap-4 relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono font-black uppercase tracking-widest text-emerald-400 bg-emerald-950/80 border border-emerald-600/50 px-3 py-1 rounded-full">
              DRAFT COMPLETADO (11/11)
            </span>
          </div>

          <div className="flex flex-col items-center gap-2 my-2">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-800 border-2 border-white flex items-center justify-center shadow-2xl animate-bounce">
              <span className="text-4xl">⚽</span>
            </div>
            <h2 className="font-display text-2xl font-black text-white uppercase tracking-tight mt-2">
              ¡TU XI TITULAR ESTÁ LISTO!
            </h2>
            <p className="text-xs font-mono text-gray-300 max-w-xs leading-relaxed">
              Has completado los 11 jugadores. Ya no se puede tirar más el dado. Haz clic para simular el partido de tu torneo.
            </p>
          </div>

          <button
            onClick={() => {
              sound.playClick();
              onSimulateTournament();
            }}
            className="w-full py-4 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-display font-black text-base uppercase border-2 border-white shadow-xl transition-all active:scale-95 flex items-center justify-center gap-3 cursor-pointer animate-pulse"
          >
            <span>🎮 SIMULAR TORNEO / JUGAR PARTIDO</span>
          </button>
        </div>
      </div>
    );
  }

  // STATE A: WAITING FOR DICE ROLL TO REVEAL NEXT TEAM & YEAR
  if (!hasRolledForPick || !currentTeam) {
    return (
      <div className="flex flex-col gap-4 w-full">
        <div className="bg-[#121826] border-2 border-[#26334d] rounded-xl p-6 shadow-dark-retro flex flex-col items-center justify-center text-center gap-4 relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-red-600/10 rounded-full blur-2xl pointer-events-none" />

          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono font-black uppercase tracking-widest text-amber-400 bg-amber-950/80 border border-amber-600/50 px-3 py-1 rounded-full">
              ELECCIÓN {currentPickNumber} DE 11
            </span>
          </div>

          <div className="flex flex-col items-center gap-2 my-2">
            <div
              className={`w-20 h-20 rounded-2xl bg-gradient-to-br from-[#ef4444] to-red-800 border-2 border-white flex items-center justify-center shadow-xl transition-all duration-500 ${
                isRolling ? 'rotate-[360deg] scale-110 shadow-red-500/50' : 'animate-bounce'
              }`}
            >
              <Dices className="w-10 h-10 text-white" />
            </div>
            <h2 className="font-display text-2xl font-black text-white uppercase tracking-tight mt-2">
              TIRA EL DADO PARA TU ELECCIÓN {currentPickNumber}
            </h2>
            <p className="text-xs font-mono text-gray-400 max-w-xs leading-relaxed">
              Haz clic en el dado para extraer un País o Club aleatorio y su año histórico.
            </p>
          </div>

          <button
            onClick={handleRollDice}
            disabled={isRolling}
            className="w-full py-4 px-6 rounded-xl bg-[#ef4444] hover:bg-red-600 text-white font-display font-black text-base uppercase border-2 border-white shadow-xl transition-all active:scale-95 flex items-center justify-center gap-3 cursor-pointer"
          >
            <Dices className={`w-6 h-6 ${isRolling ? 'animate-spin' : ''}`} />
            <span>{isRolling ? 'GIRANDO DADO...' : '🎲 TIRAR DADO (PAÍS/CLUB Y AÑO)'}</span>
            <Sparkles className="w-5 h-5 text-amber-300" />
          </button>

          <div className="text-[10px] font-mono text-gray-500">
            Cambiadores de dado disponibles en partida: <span className="text-amber-400 font-bold">{reRollsLeft}/3</span>
          </div>
        </div>
      </div>
    );
  }

  // STATE B: TEAM & YEAR REVEALED - USER CHOOSES 1 PLAYER
  return (
    <div className="flex flex-col gap-4 w-full">
      {/* DRAWN TEAM CARD */}
      <div className="bg-[#121826] border-2 border-[#26334d] rounded-xl p-5 shadow-dark-retro relative overflow-hidden flex flex-col gap-3">
        <div className="flex items-center justify-between border-b border-[#26334d] pb-2">
          <span className="text-[10px] font-black font-display uppercase tracking-widest text-amber-400 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PAÍS/CLUB Y AÑO EXTRAÍDOS (ELECCIÓN {currentPickNumber}/11)</span>
          </span>
          <span className="text-[10px] font-mono bg-[#ef4444] text-white px-2 py-0.5 rounded font-black">
            SÓLO 1 JUGADOR
          </span>
        </div>

        <div className="flex items-center justify-between gap-2">
          <div className="flex flex-col">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl">{currentTeam.flag}</span>
              <span className="font-mono text-sm font-bold text-gray-400">{currentTeam.shortCode}</span>
              <h2 className="font-display text-2xl md:text-3xl font-black text-white leading-none tracking-tight">
                {currentTeam.name}
              </h2>
            </div>
            <div className="font-display font-bold text-sm text-[#ef4444] mt-1">
              <span>{currentTeam.tag}</span>
            </div>
          </div>
        </div>
      </div>

      {/* RE-ROLL CONTROL BOX (3 TOTAL PER GAME) */}
      <div className="bg-[#121826] border-2 border-[#26334d] rounded-xl p-3.5 shadow-dark-retro">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-black font-display uppercase tracking-wider text-gray-400">
            ¿NO TE GUSTA EL PAÍS/CLUB? ({reRollsLeft} CAMBIOS RESTANTES)
          </span>
          <span className={`text-[10px] font-bold font-mono px-2.5 py-0.5 rounded ${
            reRollsLeft > 0 ? 'bg-[#ef4444] text-white' : 'bg-gray-700 text-gray-400'
          }`}>
            {reRollsLeft}/3 DISPONIBLES
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={handleReRollWithDice}
            disabled={reRollsLeft <= 0 || isRolling}
            className={`flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg font-display text-xs font-bold border-2 transition-all uppercase ${
              reRollsLeft > 0
                ? 'bg-[#ef4444] hover:bg-red-600 text-white border-white cursor-pointer'
                : 'bg-gray-900 text-gray-600 border-gray-800 cursor-not-allowed'
            }`}
          >
            <Dices className={`w-4 h-4 ${isRolling ? 'animate-spin' : ''}`} />
            <span>🎲 CAMBIAR PAÍS/CLUB</span>
          </button>

          <button
            onClick={() => {
              if (reRollsLeft > 0) {
                sound.playClick();
                onReRollYear();
              }
            }}
            disabled={reRollsLeft <= 0}
            className={`flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg font-display text-xs font-bold border-2 transition-all uppercase ${
              reRollsLeft > 0
                ? 'bg-[#182234] hover:bg-[#25324d] text-white border-[#2b3b5c] cursor-pointer'
                : 'bg-gray-900 text-gray-600 border-gray-800 cursor-not-allowed'
            }`}
          >
            <RefreshCw className="w-4 h-4 text-[#ef4444]" />
            <span>CAMBIAR DE AÑO</span>
          </button>
        </div>
      </div>

      {/* PICK A PLAYER LIST */}
      <div className="bg-[#121826] border-2 border-[#26334d] rounded-xl p-4 shadow-dark-retro flex flex-col max-h-[460px]">
        <div className="flex items-center justify-between mb-3 border-b border-[#26334d] pb-2">
          <span className="text-xs font-black font-display uppercase tracking-widest text-white flex items-center gap-1">
            SELECCIONA 1 JUGADOR
          </span>
          <span className="text-[10px] font-medium text-gray-400">
            {currentTeam.players.length} disponibles
          </span>
        </div>

        {/* Scrollable Roster */}
        <div className="overflow-y-auto pr-1 flex flex-col gap-2 custom-scrollbar">
          {currentTeam.players.map((player) => {
            const isTaken = draftedPlayerIds.has(player.id);
            const isSelected = selectedPlayer?.id === player.id;
            const isOccupied = !isTaken && isPositionOccupied(player);

            return (
              <div
                key={player.id}
                onClick={() => {
                  if (!isTaken && !isOccupied) {
                    sound.playCardSelect();
                    onSelectPlayer(player);
                  }
                }}
                className={`flex items-center justify-between p-2.5 rounded-lg border-2 transition-all select-none ${
                  isSelected
                    ? 'bg-[#ef4444] text-white border-white shadow-lg transform scale-[1.01] cursor-pointer'
                    : isTaken
                    ? 'bg-[#0f172a] text-gray-500 border-gray-800 opacity-40 cursor-not-allowed'
                    : isOccupied
                    ? 'bg-[#170e13] text-gray-400 border-red-900/60 opacity-80 cursor-not-allowed'
                    : 'bg-[#182234] hover:bg-[#25324d] text-white border-[#2b3b5c] cursor-pointer'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-md font-display font-black text-sm flex items-center justify-center border ${
                    isSelected ? 'bg-white text-[#ef4444] border-white' : 'bg-[#0b0f19] text-amber-400 border-[#2b3b5c]'
                  }`}>
                    {player.rating}
                  </div>

                  <div className="flex flex-col">
                    <div className="flex items-center gap-1.5">
                      <span className="font-display font-bold text-sm tracking-tight text-white">
                        {player.name}
                      </span>
                      {player.bonus && (
                        <span className="bg-amber-400 text-black text-[9px] font-black px-1.5 py-0.2 rounded">
                          +{player.bonus} OVR
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2 text-[10px] font-mono text-gray-400">
                      <span>{player.flag} {player.nation}</span>
                      <span>•</span>
                      <span>#{player.number}</span>
                    </div>
                  </div>
                </div>

                {/* Status Badges */}
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    {player.positions.map((pos) => (
                      <span
                        key={pos}
                        className={`text-[9px] font-mono font-black px-1.5 py-0.5 rounded ${
                          isSelected
                            ? 'bg-white/20 text-white'
                            : 'bg-[#0b0f19] text-[#ef4444] border border-[#2b3b5c]'
                        }`}
                      >
                        {pos}
                      </span>
                    ))}
                  </div>

                  {isTaken && (
                    <span className="text-[10px] font-mono font-bold text-gray-500 bg-gray-900 px-2 py-0.5 rounded">
                      ELEGIDO
                    </span>
                  )}

                  {isOccupied && !isTaken && (
                    <span className="text-[10px] font-mono font-bold text-red-400 bg-red-950/80 px-2 py-0.5 rounded border border-red-800/80 flex items-center gap-1">
                      <span>✕</span> OCUPADO
                    </span>
                  )}

                  {isSelected && (
                    <span className="bg-white text-[#ef4444] p-1 rounded-full">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};


