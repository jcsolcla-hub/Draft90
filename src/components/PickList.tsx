import React, { useState } from 'react';
import { RefreshCw, Check, Dices, Sparkles, Calendar, Shield, Tv, Gift, Award, Zap } from 'lucide-react';
import { Team, Player, SlotConfig } from '../types';
import { sound } from '../utils/audio';
import { TeamRoulette } from './TeamRoulette';
import { AdRewardModal, AdRewardType } from './AdRewardModal';

interface PickListProps {
  currentTeam: Team | null;
  hasRolledForPick: boolean;
  onRollDiceForPick: () => void;
  reRollsLeft: number;
  onReRollTeam: () => void;
  onReRollYear: () => void;
  onFreeReRollTeam: () => void;
  onFreeReRollYear: () => void;
  onAddReRollToken: () => void;
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
  onFreeReRollTeam,
  onFreeReRollYear,
  onAddReRollToken,
  selectedPlayer,
  onSelectPlayer,
  draftedPlayerIds,
  slots,
  placedPlayers,
  onSimulateTournament,
}) => {
  const [rouletteState, setRouletteState] = useState<{
    active: boolean;
    type: 'full' | 'year' | 'club';
    targetTeam?: Team;
  }>({ active: false, type: 'full' });

  const [adModal, setAdModal] = useState<{
    isOpen: boolean;
    rewardType: AdRewardType;
  }>({
    isOpen: false,
    rewardType: 'club',
  });

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
    if (rouletteState.active || isDraftComplete) return;
    sound.playClick();
    onRollDiceForPick();
    setRouletteState({ active: true, type: 'full' });
  };

  const handleReRollClubAction = () => {
    if (reRollsLeft <= 0 || rouletteState.active || isDraftComplete) return;
    sound.playClick();
    onReRollTeam();
    setRouletteState({ active: true, type: 'club' });
  };

  const handleReRollYearAction = () => {
    if (reRollsLeft <= 0 || rouletteState.active || isDraftComplete) return;
    sound.playClick();
    onReRollYear();
    setRouletteState({ active: true, type: 'year' });
  };

  const handleOpenAdForReward = (type: AdRewardType) => {
    if (rouletteState.active || isDraftComplete) return;
    sound.playClick();
    setAdModal({
      isOpen: true,
      rewardType: type,
    });
  };

  const handleRewardClaimed = (type: AdRewardType) => {
    if (type === 'club') {
      onFreeReRollTeam();
      setRouletteState({ active: true, type: 'club' });
    } else if (type === 'year') {
      onFreeReRollYear();
      setRouletteState({ active: true, type: 'year' });
    } else if (type === 'token') {
      onAddReRollToken();
    }
  };

  // STATE SPECIAL: 11 PLAYERS DRAFTED (COMPLETED)
  if (isDraftComplete) {
    return (
      <div className="flex flex-col gap-4 w-full">
        <div className="bg-[#082618] border-2 border-emerald-500 rounded-2xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center text-center gap-4 relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl pointer-events-none" />

          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono font-black uppercase tracking-widest text-emerald-300 bg-[#041c10] border border-emerald-500/60 px-3 py-1 rounded-full shadow-md">
              DRAFT COMPLETADO (11/11)
            </span>
          </div>

          <div className="flex flex-col items-center gap-2 my-2">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-700 border-2 border-white flex items-center justify-center shadow-2xl animate-bounce">
              <span className="text-4xl">⚽</span>
            </div>
            <h2 className="font-display text-2xl font-black text-white uppercase tracking-tight mt-2">
              ¡TU XI TITULAR ESTÁ LISTO!
            </h2>
            <p className="text-xs font-mono text-emerald-200/90 max-w-xs leading-relaxed">
              Has completado los 11 jugadores. Ya no se puede tirar más el dado. Haz clic para simular el partido de tu torneo.
            </p>
          </div>

          <button
            onClick={() => {
              sound.playClick();
              onSimulateTournament();
            }}
            className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-display font-black text-base uppercase border-2 border-white shadow-xl transition-all active:scale-95 flex items-center justify-center gap-3 cursor-pointer animate-pulse"
          >
            <span>🎮 SIMULAR TORNEO / JUGAR PARTIDO</span>
          </button>
        </div>
      </div>
    );
  }

  // STATE A: ROULETTE IS ACTIVELY SPINNING
  if (rouletteState.active && currentTeam) {
    return (
      <div className="flex flex-col gap-4 w-full">
        <TeamRoulette
          targetTeam={currentTeam}
          type={rouletteState.type}
          onComplete={() => setRouletteState({ active: false, type: 'full' })}
        />
      </div>
    );
  }

  // STATE B: WAITING FOR INITIAL DICE ROLL TO REVEAL TEAM
  if (!hasRolledForPick || !currentTeam) {
    return (
      <div className="flex flex-col gap-4 w-full">
        <div className="bg-[#082618] border-2 border-[#145938] rounded-2xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center text-center gap-4 relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-emerald-500/15 rounded-full blur-2xl pointer-events-none" />

          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono font-black uppercase tracking-widest text-amber-300 bg-[#041c10] border border-amber-500/50 px-3 py-1 rounded-full shadow-md">
              ELECCIÓN {currentPickNumber} DE 11
            </span>
          </div>

          <div className="flex flex-col items-center gap-2 my-2">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-700 border-2 border-white flex items-center justify-center shadow-xl animate-bounce">
              <Dices className="w-10 h-10 text-white" />
            </div>
            <h2 className="font-display text-2xl font-black text-white uppercase tracking-tight mt-2">
              TIRA EL DADO PARA TU ELECCIÓN {currentPickNumber}
            </h2>
            <p className="text-xs font-mono text-emerald-200/80 max-w-xs leading-relaxed">
              Haz clic en el dado para activar la ruleta y extraer un País o Club aleatorio con su año histórico.
            </p>
          </div>

          <button
            onClick={handleRollDice}
            className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-display font-black text-base uppercase border-2 border-white shadow-[0_4px_20px_rgba(16,185,129,0.4)] transition-all active:scale-95 flex items-center justify-center gap-3 cursor-pointer"
          >
            <Dices className="w-6 h-6 animate-pulse" />
            <span>🎲 TIRAR DADO (RULETA DE CLUBES)</span>
            <Sparkles className="w-5 h-5 text-amber-300" />
          </button>

          <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-2 pt-2 border-t border-emerald-800/50">
            <span className="text-[10px] font-mono text-emerald-300/80">
              Cambiadores de dado: <strong className="text-amber-400">{reRollsLeft}/3</strong>
            </span>
            <button
              onClick={() => handleOpenAdForReward('token')}
              className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-amber-300 hover:text-white bg-[#031c10] hover:bg-[#072d1a] border border-amber-500/40 px-2.5 py-1 rounded-lg transition-all cursor-pointer"
            >
              <Tv className="w-3 h-3 text-amber-400" />
              <span>+1 Cambio gratis (Ver anuncio)</span>
            </button>
          </div>
        </div>

        {/* REWARDED AD MODAL */}
        <AdRewardModal
          isOpen={adModal.isOpen}
          rewardType={adModal.rewardType}
          onClose={() => setAdModal((prev) => ({ ...prev, isOpen: false }))}
          onRewardClaimed={handleRewardClaimed}
        />
      </div>
    );
  }

  // STATE C: TEAM & YEAR REVEALED - USER CHOOSES 1 PLAYER
  return (
    <div className="flex flex-col gap-4 w-full">
      {/* DRAWN TEAM CARD */}
      <div className="bg-gradient-to-br from-[#082b1c] to-[#041c10] border-2 border-emerald-500/80 rounded-2xl p-5 shadow-[0_8px_30px_rgba(0,0,0,0.5)] relative overflow-hidden flex flex-col gap-3">
        <div className="flex items-center justify-between border-b border-emerald-700/60 pb-2">
          <span className="text-[10px] font-black font-display uppercase tracking-widest text-amber-300 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PAÍS/CLUB Y AÑO EXTRAÍDOS (ELECCIÓN {currentPickNumber}/11)</span>
          </span>
          <span className="text-[10px] font-mono bg-emerald-500 text-white px-2.5 py-0.5 rounded-full font-black border border-white/20">
            SÓLO 1 JUGADOR
          </span>
        </div>

        <div className="flex items-center justify-between gap-2">
          <div className="flex flex-col">
            <div className="flex items-baseline gap-2.5 flex-wrap">
              <span className="text-3xl drop-shadow">{currentTeam.flag}</span>
              <span className="font-mono text-xs font-bold text-emerald-400/90">{currentTeam.shortCode}</span>
              <h2 className="font-display text-2xl md:text-3xl font-black text-white leading-none tracking-tight">
                {currentTeam.name}
              </h2>
            </div>
            <div className="font-display font-black text-sm text-amber-300 mt-1 flex items-center gap-2">
              <span className="bg-emerald-950/80 px-2.5 py-0.5 rounded-md border border-emerald-600/60">
                {currentTeam.tag}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* RE-ROLL & REWARDED ADS CONTROL BOX */}
      <div className="bg-[#082618] border-2 border-[#145938] rounded-2xl p-3.5 shadow-[0_4px_20px_rgba(0,0,0,0.4)] flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-black font-display uppercase tracking-wider text-emerald-300/80">
            ¿NO TE GUSTA EL SORTEO? ({reRollsLeft} CAMBIOS EN PARTIDA)
          </span>
          <span className={`text-[10px] font-bold font-mono px-2.5 py-0.5 rounded-full ${
            reRollsLeft > 0 ? 'bg-amber-400 text-black font-black' : 'bg-emerald-950 text-emerald-600'
          }`}>
            {reRollsLeft}/3 DISPONIBLES
          </span>
        </div>

        {/* Standard Reroll Buttons */}
        <div className="grid grid-cols-2 gap-2">
          {/* Change Club/Country: KEEPS the year, changes club/country */}
          <button
            onClick={handleReRollClubAction}
            disabled={reRollsLeft <= 0 || rouletteState.active}
            className={`flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl font-display text-xs font-black border-2 transition-all uppercase ${
              reRollsLeft > 0
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black border-white shadow-md cursor-pointer active:scale-95'
                : 'bg-emerald-950 text-emerald-700 border-emerald-900 cursor-not-allowed opacity-60'
            }`}
            title="Mantiene el año actual y cambia el club o selección"
          >
            <Shield className="w-4 h-4" />
            <span>CAMBIAR CLUB/PAÍS ({reRollsLeft})</span>
          </button>

          {/* Change Year: KEEPS the club/country, changes year (1958-2026) */}
          <button
            onClick={handleReRollYearAction}
            disabled={reRollsLeft <= 0 || rouletteState.active}
            className={`flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl font-display text-xs font-black border-2 transition-all uppercase ${
              reRollsLeft > 0
                ? 'bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white border-emerald-400 shadow-md cursor-pointer active:scale-95'
                : 'bg-emerald-950 text-emerald-700 border-emerald-900 cursor-not-allowed opacity-60'
            }`}
            title="Mantiene el mismo club/selección y busca otro año histórico (1958-2026)"
          >
            <Calendar className="w-4 h-4 text-emerald-200" />
            <span>CAMBIAR DE AÑO ({reRollsLeft})</span>
          </button>
        </div>

        {/* REWARDED ADS SECTION (UNLIMITED EXTRA ROLLS BY WATCHING AN AD) */}
        <div className="pt-2 border-t border-emerald-800/60 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-black font-display uppercase tracking-widest text-amber-300 flex items-center gap-1">
              <Tv className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span>MIRA UN ANUNCIO PARA CAMBIAR GRATIS</span>
            </span>
            <span className="text-[9px] font-mono text-emerald-300 bg-[#031c10] px-2 py-0.5 rounded border border-emerald-700/50">
              ILIMITADO
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => handleOpenAdForReward('club')}
              disabled={rouletteState.active}
              className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-gradient-to-r from-amber-500/20 to-orange-500/20 hover:from-amber-500/30 hover:to-orange-500/30 text-amber-300 hover:text-white border-2 border-amber-500/60 font-display text-[11px] font-black uppercase transition-all cursor-pointer active:scale-95 shadow-sm"
              title="Mira un vídeo corto para cambiar Club o Selección manteniendo el año"
            >
              <Tv className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>📺 VER ANUNCIO: CLUB</span>
            </button>

            <button
              onClick={() => handleOpenAdForReward('year')}
              disabled={rouletteState.active}
              className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-gradient-to-r from-teal-500/20 to-emerald-500/20 hover:from-teal-500/30 hover:to-emerald-500/30 text-teal-300 hover:text-white border-2 border-teal-500/60 font-display text-[11px] font-black uppercase transition-all cursor-pointer active:scale-95 shadow-sm"
              title="Mira un vídeo corto para cambiar el año manteniendo el Club o Selección"
            >
              <Tv className="w-3.5 h-3.5 text-teal-400 shrink-0" />
              <span>📺 VER ANUNCIO: AÑO</span>
            </button>
          </div>

          <button
            onClick={() => handleOpenAdForReward('token')}
            disabled={rouletteState.active}
            className="w-full py-1.5 px-2 rounded-lg bg-[#041a0e] hover:bg-[#072615] border border-emerald-600/50 text-[10px] font-mono font-bold text-emerald-300 hover:text-white flex items-center justify-center gap-1.5 transition-all cursor-pointer"
            title="Mira un anuncio para recargar +1 cambio en tu contador"
          >
            <Gift className="w-3 h-3 text-amber-400" />
            <span>¿Quieres más tiradas? <strong>Ver anuncio para +1 Cambio de dado</strong></span>
          </button>
        </div>
      </div>

      {/* PICK A PLAYER LIST */}
      <div className="bg-[#082618] border-2 border-[#145938] rounded-2xl p-4 shadow-[0_8px_30px_rgba(0,0,0,0.5)] flex flex-col max-h-[460px]">
        <div className="flex items-center justify-between mb-3 border-b border-emerald-800/60 pb-2">
          <span className="text-xs font-black font-display uppercase tracking-widest text-white flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            SELECCIONA 1 JUGADOR DE LA PLANTILLA
          </span>
          <span className="text-[10px] font-mono font-bold text-emerald-300/80">
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
                className={`flex items-center justify-between p-2.5 rounded-xl border-2 transition-all select-none ${
                  isSelected
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white border-white shadow-lg transform scale-[1.01] cursor-pointer'
                    : isTaken
                    ? 'bg-[#031c11] text-emerald-800 border-emerald-950 opacity-40 cursor-not-allowed'
                    : isOccupied
                    ? 'bg-[#1c0d12] text-gray-400 border-red-900/60 opacity-80 cursor-not-allowed'
                    : 'bg-[#0b3320] hover:bg-[#0f452b] text-white border-[#175e3c] cursor-pointer shadow-sm'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg font-display font-black text-sm flex items-center justify-center border ${
                    isSelected ? 'bg-white text-emerald-700 border-white' : 'bg-[#041c10] text-amber-400 border-emerald-700/60'
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

                    <div className="flex items-center gap-2 text-[10px] font-mono text-emerald-300/70">
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
                            ? 'bg-white/25 text-white border border-white/40'
                            : 'bg-[#041c10] text-emerald-300 border border-[#175e3c]'
                        }`}
                      >
                        {pos}
                      </span>
                    ))}
                  </div>

                  {isTaken && (
                    <span className="text-[10px] font-mono font-bold text-emerald-600 bg-[#041c10] px-2 py-0.5 rounded border border-emerald-900">
                      ELEGIDO
                    </span>
                  )}

                  {isOccupied && !isTaken && (
                    <span className="text-[10px] font-mono font-bold text-red-400 bg-red-950/80 px-2 py-0.5 rounded border border-red-800/80 flex items-center gap-1">
                      <span>✕</span> OCUPADO
                    </span>
                  )}

                  {isSelected && (
                    <span className="bg-white text-emerald-700 p-1 rounded-full shadow-md">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* REWARDED AD MODAL (Simulated & SDK-Ready for Google AdSense / AdMob) */}
      <AdRewardModal
        isOpen={adModal.isOpen}
        rewardType={adModal.rewardType}
        onClose={() => setAdModal((prev) => ({ ...prev, isOpen: false }))}
        onRewardClaimed={handleRewardClaimed}
      />
    </div>
  );
};



