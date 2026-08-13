import React, { useState } from 'react';
import { MatchResult, Player, SlotConfig } from '../types';
import { X, Copy, Check } from 'lucide-react';
import { sound } from '../utils/audio';

interface SquadCardModalProps {
  userPlayers: (Player | null)[];
  userSlots: SlotConfig[];
  result?: MatchResult | null;
  onClose: () => void;
}

export const SquadCardModal: React.FC<SquadCardModalProps> = ({
  userPlayers,
  userSlots,
  result,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);
  const [squadTitle, setSquadTitle] = useState('MI ONCE HISTÓRICO DRAFT 90');

  const filledPlayers = userSlots
    .map((s, i) => ({ slot: s, player: userPlayers[i] }))
    .filter((item) => item.player !== null);

  const avgRating = result?.userAvgRating || (
    filledPlayers.reduce((a, b) => a + (b.player?.rating || 75), 0) / (filledPlayers.length || 1)
  ).toFixed(1);

  const handleCopy = () => {
    sound.playClick();
    const text = `🏆 ${squadTitle} (Media: ${avgRating})\n\n` +
      filledPlayers.map((item) => `• ${item.slot.pos}: ${item.player?.name} (${item.player?.rating} OVR - ${item.player?.nation})`).join('\n') +
      `\n\nJugado en Draft 90 Game!`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#121826] border-2 border-[#26334d] rounded-2xl max-w-lg w-full p-6 shadow-2xl flex flex-col gap-5 my-auto relative text-white">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-[#182234] border border-[#2b3b5c] text-gray-300 hover:text-white rounded-lg shadow-md cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Vintage Trading Card Container */}
        <div className="bg-[#182234] border-2 border-[#2b3b5c] rounded-xl p-5 shadow-dark-retro flex flex-col gap-4 relative overflow-hidden">
          {/* Card Top Banner */}
          <div className="bg-[#ef4444] text-white p-3.5 -mx-5 -mt-5 mb-1 border-b-2 border-white/20 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-black font-display text-xl bg-[#0b0f19] text-white px-2 py-0.5 rounded border border-white/30">
                90
              </span>
              <div>
                <span className="text-[10px] font-mono font-bold uppercase block opacity-90">SQUAD DRAFT CARD</span>
                <span className="font-display font-black text-sm uppercase tracking-tight">DREAM TEAM HISTÓRICO</span>
              </div>
            </div>
            <div className="text-right">
              <span className="font-display font-black text-3xl text-amber-300 block leading-none">
                {avgRating}
              </span>
              <span className="text-[9px] font-mono font-bold uppercase">VALORACIÓN</span>
            </div>
          </div>

          {/* Editable Squad Name */}
          <div className="flex flex-col gap-1">
            <label className="text-[10px] font-mono font-bold text-gray-400 uppercase">
              TÍTULO DEL EQUIPO
            </label>
            <input
              type="text"
              value={squadTitle}
              onChange={(e) => setSquadTitle(e.target.value)}
              className="font-display font-black text-xl text-white bg-[#0b0f19] border border-[#2b3b5c] rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#ef4444]"
            />
          </div>

          {/* Lineup Table */}
          <div className="grid grid-cols-2 gap-2 text-xs font-mono font-bold bg-[#0b0f19] p-3 rounded-lg border border-[#2b3b5c]">
            {filledPlayers.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between bg-[#182234] px-2.5 py-1.5 rounded border border-[#2b3b5c]">
                <span className="text-[#ef4444] text-[10px] font-black">{item.slot.pos}</span>
                <span className="font-display font-bold text-white truncate ml-1">{item.player?.name}</span>
                <span className="text-amber-400 text-[10px] font-bold ml-1">{item.player?.rating}</span>
              </div>
            ))}
          </div>

          <div className="text-center text-[10px] font-mono font-bold text-gray-400 uppercase border-t border-[#2b3b5c] pt-2">
            DRAFT 90 FOOTBALL GAME · {new Date().toLocaleDateString('es-ES')}
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex gap-3">
          <button
            onClick={handleCopy}
            className="flex-1 flex items-center justify-center gap-2 bg-[#ef4444] hover:bg-red-600 text-white font-display text-xs font-black py-3 px-4 rounded-xl shadow-lg uppercase transition-all cursor-pointer"
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? '¡COPIADO AL PORTAPAPELES!' : 'COPIAR RESUMEN DEL XI'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

