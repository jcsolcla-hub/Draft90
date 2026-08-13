import React from 'react';
import { SlotConfig, Player, FormationType, Position } from '../types';
import { evaluatePositionFit } from '../data/teamsData';
import { sound } from '../utils/audio';

interface PitchProps {
  slots: SlotConfig[];
  placedPlayers: (Player | null)[];
  selectedPlayer: Player | null;
  onSlotClick: (slotIndex: number, targetPos: Position) => void;
  formation: FormationType;
  onFormationChange: (formation: FormationType) => void;
  onSimulateTournament?: () => void;
}

export const Pitch: React.FC<PitchProps> = ({
  slots,
  placedPlayers,
  selectedPlayer,
  onSlotClick,
  formation,
  onFormationChange,
  onSimulateTournament,
}) => {
  const formationsList: FormationType[] = ['4-3-3', '4-4-2', '4-2-3-1', '3-5-2', '3-4-3', '5-3-2'];
  const totalPlaced = placedPlayers.filter(Boolean).length;
  const isDraftComplete = totalPlaced === 11;

  return (
    <div className="flex flex-col items-center w-full gap-3">
      {/* Tactical Formation Switcher */}
      <div className="flex items-center justify-center flex-wrap gap-1.5 bg-[#121826] border-2 border-[#26334d] p-2 rounded-xl shadow-dark-retro w-full">
        <span className="text-[10px] font-black font-display uppercase tracking-wider text-gray-400 mr-1">
          FORMACIÓN TÁCTICA:
        </span>
        {formationsList.map((f) => (
          <button
            key={f}
            onClick={() => {
              sound.playClick();
              onFormationChange(f);
            }}
            className={`px-3 py-1 rounded-lg text-xs font-display font-bold transition-all border ${
              formation === f
                ? 'bg-[#ef4444] text-white border-white shadow-md'
                : 'bg-[#182234] text-gray-300 border-[#2b3b5c] hover:border-gray-400'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Main Pitch Field Stage */}
      <div className="relative w-full aspect-[0.78] max-w-[500px] pitch-bg border-4 border-[#26334d] rounded-2xl shadow-dark-retro-lg overflow-hidden select-none">
        {/* Field Lines & Marking Graphics */}
        <div className="absolute inset-0 pointer-events-none opacity-50">
          {/* Touchline Border */}
          <div className="absolute inset-3 border-2 border-emerald-400/80 rounded-lg shadow-[0_0_10px_rgba(52,211,153,0.3)]" />
          {/* Halfway Line */}
          <div className="absolute left-3 right-3 top-1/2 -translate-y-1/2 h-0.5 bg-emerald-400/80" />
          {/* Center Circle */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 border-2 border-emerald-400/80 rounded-full" />
          {/* Center Spot */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-emerald-400 rounded-full" />
          {/* Top Penalty Box */}
          <div className="absolute left-1/2 top-3 -translate-x-1/2 w-48 h-24 border-2 border-t-0 border-emerald-400/80" />
          <div className="absolute left-1/2 top-3 -translate-x-1/2 w-24 h-10 border-2 border-t-0 border-emerald-400/80" />
          {/* Bottom Penalty Box */}
          <div className="absolute left-1/2 bottom-3 -translate-x-1/2 w-48 h-24 border-2 border-b-0 border-emerald-400/80" />
          <div className="absolute left-1/2 bottom-3 -translate-x-1/2 w-24 h-10 border-2 border-b-0 border-emerald-400/80" />
        </div>

        {/* Slot Interactive Elements */}
        {slots.map((slot, index) => {
          const placedPlayer = placedPlayers[index];
          let isTargetable = false;
          let fitQuality: 'exact' | 'secondary' | 'out_of_position' | null = null;

          if (selectedPlayer && !placedPlayer) {
            fitQuality = evaluatePositionFit(selectedPlayer.positions, slot.pos);
            isTargetable = fitQuality === 'exact' || fitQuality === 'secondary';
          }

          return (
            <div
              key={slot.id}
              style={{ left: `${slot.x}%`, top: `${slot.y}%` }}
              onClick={() => {
                if (isTargetable || placedPlayer) {
                  sound.playCardSelect();
                  onSlotClick(index, slot.pos);
                }
              }}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center cursor-pointer group"
            >
              {placedPlayer ? (
                /* FILLED SLOT BADGE (Uniform color for all players) */
                <div className="flex flex-col items-center">
                  <div className="w-11 h-11 md:w-12 md:h-12 rounded-full border-2 border-white bg-[#ef4444] text-white flex flex-col items-center justify-center shadow-lg shadow-red-500/30 transition-transform group-hover:scale-110">
                    <span className="font-display font-black text-sm md:text-base leading-none">
                      {placedPlayer.rating}
                    </span>
                    <span className="text-[9px] font-mono font-bold uppercase tracking-tight opacity-90 leading-none mt-0.5">
                      {slot.pos}
                    </span>
                  </div>

                  {/* Player Name Tag */}
                  <div className="mt-1 bg-[#0b0f19] text-white px-2 py-0.5 rounded-md border border-[#2b3b5c] text-[10px] font-bold font-display tracking-tight text-center max-w-[85px] truncate shadow-md">
                    {placedPlayer.name}
                  </div>
                </div>
              ) : isTargetable ? (
                /* TARGETABLE ANIMATED SLOT */
                <div className="flex flex-col items-center animate-target">
                  <div className="w-12 h-12 md:w-13 md:h-13 rounded-full bg-[#ef4444] text-white border-2 border-white flex items-center justify-center shadow-xl font-display font-black text-sm">
                    {slot.pos}
                  </div>
                  <span className="mt-0.5 bg-[#ef4444] text-white px-2 py-0.2 rounded text-[9px] font-black font-mono">
                    ELEGIR
                  </span>
                </div>
              ) : (
                /* UNFILLED DASHED SLOT */
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 md:w-11 md:h-11 rounded-full border-2 border-dashed border-emerald-400/80 bg-black/60 backdrop-blur-xs flex items-center justify-center text-emerald-300 font-display font-black text-xs hover:border-white hover:text-white transition-colors">
                    {slot.pos}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Selected Player Instruction Bar or Completion Simulation Bar */}
      {selectedPlayer && !isDraftComplete && (
        <div className="bg-[#ef4444] text-white font-display text-xs font-bold px-4 py-2.5 rounded-xl border-2 border-white shadow-lg text-center animate-bounce w-full">
          SELECCIONADO: {selectedPlayer.name.toUpperCase()} ({selectedPlayer.rating} OVR) — TOCA UNA POSICIÓN LIBRE EN EL CAMPO
        </div>
      )}

      {isDraftComplete && (
        <button
          onClick={() => {
            sound.playClick();
            if (onSimulateTournament) onSimulateTournament();
          }}
          className="w-full py-3.5 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-display font-black text-sm uppercase border-2 border-white shadow-xl transition-all active:scale-95 flex items-center justify-center gap-3 cursor-pointer animate-pulse"
        >
          <span>🎮 PLANTILLA COMPLETADA — CLICK PARA SIMULAR PARTIDO</span>
        </button>
      )}
    </div>
  );
};

