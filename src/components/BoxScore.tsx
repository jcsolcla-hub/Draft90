import React from 'react';
import { SlotConfig, Player } from '../types';
import { calculateEffectiveRating, POSITIONS_MAP } from '../data/teamsData';
import { Play } from 'lucide-react';
import { sound } from '../utils/audio';

interface BoxScoreProps {
  slots: SlotConfig[];
  placedPlayers: (Player | null)[];
  onSimulateMatch: () => void;
  onClearSlot: (index: number) => void;
}

export const BoxScore: React.FC<BoxScoreProps> = ({
  slots,
  placedPlayers,
  onSimulateMatch,
  onClearSlot,
}) => {
  const totalPlaced = placedPlayers.filter(Boolean).length;
  const isComplete = totalPlaced >= 11;

  // Calculate average rating
  const effectiveRatings = slots.map((slot, i) => {
    const player = placedPlayers[i];
    if (!player) return 0;
    return calculateEffectiveRating(player, slot.pos);
  });

  const filledRatings = effectiveRatings.filter((r) => r > 0);
  const avgRating = filledRatings.length > 0
    ? (filledRatings.reduce((a, b) => a + b, 0) / filledRatings.length).toFixed(1)
    : '0.0';

  // Calculate Attack vs Defense Ratings
  const attackRatings = slots
    .map((slot, i) => ({ slot, player: placedPlayers[i] }))
    .filter((item) => item.player && POSITIONS_MAP[item.slot.pos].group === 'ATT')
    .map((item) => calculateEffectiveRating(item.player!, item.slot.pos));

  const defenseRatings = slots
    .map((slot, i) => ({ slot, player: placedPlayers[i] }))
    .filter((item) => item.player && (POSITIONS_MAP[item.slot.pos].group === 'DEF' || POSITIONS_MAP[item.slot.pos].group === 'GK'))
    .map((item) => calculateEffectiveRating(item.player!, item.slot.pos));

  const avgAttack = attackRatings.length > 0
    ? Math.round(attackRatings.reduce((a, b) => a + b, 0) / attackRatings.length)
    : 0;

  const avgDefense = defenseRatings.length > 0
    ? Math.round(defenseRatings.reduce((a, b) => a + b, 0) / defenseRatings.length)
    : 0;

  return (
    <div className="bg-[#121826] border-2 border-[#26334d] rounded-xl p-4 shadow-dark-retro flex flex-col gap-4 w-full">
      {/* Box Score Title Header */}
      <div className="flex items-center justify-between border-b-2 border-[#26334d] pb-2">
        <span className="text-xs font-black font-display uppercase tracking-widest text-white">
          BOX SCORE · DRAFT
        </span>
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-black bg-[#ef4444] text-white px-2 py-0.5 rounded">
            {totalPlaced}/11
          </span>
        </div>
      </div>

      {/* Attack vs Defense Gauges */}
      <div className="flex flex-col gap-2 bg-[#182234] border border-[#2b3b5c] p-3 rounded-lg">
        <div className="flex items-center justify-between text-[11px] font-bold font-display uppercase">
          <span className="text-[#ef4444]">ATTACK {avgAttack > 0 ? avgAttack : ''}</span>
          <span className="text-blue-400">DEFENSE {avgDefense > 0 ? avgDefense : ''}</span>
        </div>
        <div className="w-full bg-[#0b0f19] h-2.5 rounded-full overflow-hidden flex border border-[#2b3b5c]">
          <div
            className="bg-[#ef4444] h-full transition-all duration-300"
            style={{ width: `${avgAttack}%` }}
          />
          <div
            className="bg-blue-500 h-full transition-all duration-300"
            style={{ width: `${avgDefense}%` }}
          />
        </div>
      </div>

      {/* Position Roster List */}
      <div className="flex flex-col divide-y divide-[#26334d] bg-[#182234] border border-[#2b3b5c] rounded-lg overflow-hidden text-xs">
        {slots.map((slot, index) => {
          const player = placedPlayers[index];
          return (
            <div
              key={slot.id}
              className="flex items-center justify-between px-3 py-1.5 hover:bg-[#202c42] transition-colors"
            >
              <span className="font-mono font-bold text-gray-400 w-8">
                {slot.pos}
              </span>

              {player ? (
                <div
                  onClick={() => {
                    sound.playClick();
                    onClearSlot(index);
                  }}
                  className="flex items-center justify-between flex-1 ml-2 cursor-pointer group"
                  title="Toca para quitar jugador"
                >
                  <span className="font-display font-bold text-white group-hover:text-[#ef4444] truncate">
                    {player.name}
                  </span>
                  <div className="flex items-center gap-1.5 font-mono font-black text-xs text-amber-400">
                    <span>{calculateEffectiveRating(player, slot.pos)}</span>
                    <span className="text-[10px] text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">✕</span>
                  </div>
                </div>
              ) : (
                <span className="text-gray-600 font-mono italic flex-1 ml-2">
                  —
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* Average Overall Rating Card & Action Button */}
      <div className="bg-[#0b0f19] text-white rounded-lg p-4 border-2 border-[#2b3b5c] flex flex-col items-center justify-center gap-2">
        <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-gray-400">
          MEDIA GENERAL DEL XI
        </div>
        <div className="font-display font-black text-4xl text-amber-400">
          {avgRating}
        </div>

        <button
          onClick={() => {
            if (isComplete) {
              sound.playWhistle();
              onSimulateMatch();
            }
          }}
          disabled={!isComplete}
          className={`w-full mt-1 py-3 px-4 rounded-lg font-display text-sm font-black tracking-wider uppercase border border-white/20 transition-all flex items-center justify-center gap-2 ${
            isComplete
              ? 'bg-[#ef4444] hover:bg-red-600 text-white shadow-lg cursor-pointer active:scale-95 animate-pulse'
              : 'bg-gray-800 text-gray-500 border-gray-700 cursor-not-allowed opacity-60'
          }`}
        >
          <Play className="w-4 h-4 fill-current" />
          <span>{isComplete ? 'JUGAR OCTAVOS DE FINAL ⚽' : `COMPLETA EL XI (${totalPlaced}/11)`}</span>
        </button>
      </div>
    </div>
  );
};

