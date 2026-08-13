import React from 'react';
import { UserStats, MatchResult } from '../types';
import { X, Trophy } from 'lucide-react';

interface HistoryModalProps {
  stats: UserStats;
  history: MatchResult[];
  onClose: () => void;
}

export const HistoryModal: React.FC<HistoryModalProps> = ({
  stats,
  history,
  onClose,
}) => {
  const winRate = stats.played > 0 ? Math.round((stats.won / stats.played) * 100) : 0;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#121826] border-2 border-[#26334d] rounded-2xl max-w-2xl w-full p-6 shadow-2xl flex flex-col gap-6 my-auto relative max-h-[90vh] overflow-hidden text-white">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#26334d] pb-3">
          <div className="flex items-center gap-2">
            <Trophy className="w-6 h-6 text-amber-400" />
            <h2 className="font-display font-black text-2xl uppercase tracking-tight text-white">
              ESTADÍSTICAS Y TROFEOS
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 bg-[#182234] border border-[#2b3b5c] text-gray-300 hover:text-white rounded-lg cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* User Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="bg-[#182234] border border-[#2b3b5c] p-3 rounded-xl shadow-md text-center">
            <span className="text-[10px] font-black font-display text-gray-400 uppercase block">PARTIDOS</span>
            <span className="font-display font-black text-2xl text-white">{stats.played}</span>
          </div>

          <div className="bg-[#182234] border border-[#2b3b5c] p-3 rounded-xl shadow-md text-center">
            <span className="text-[10px] font-black font-display text-gray-400 uppercase block">VICTORIAS</span>
            <span className="font-display font-black text-2xl text-[#ef4444]">{stats.won}</span>
          </div>

          <div className="bg-[#182234] border border-[#2b3b5c] p-3 rounded-xl shadow-md text-center">
            <span className="text-[10px] font-black font-display text-gray-400 uppercase block">% VICTORIAS</span>
            <span className="font-display font-black text-2xl text-blue-400">{winRate}%</span>
          </div>

          <div className="bg-[#182234] border border-[#2b3b5c] p-3 rounded-xl shadow-md text-center">
            <span className="text-[10px] font-black font-display text-gray-400 uppercase block">PUNTOS TOTALES</span>
            <span className="font-display font-black text-2xl text-amber-400">{stats.totalPoints.toLocaleString()}</span>
          </div>
        </div>

        {/* Match Log History */}
        <div className="flex flex-col gap-2 flex-1 overflow-hidden">
          <h3 className="text-xs font-black font-display uppercase tracking-widest text-white">
            HISTORIAL DE PARTIDOS
          </h3>

          <div className="bg-[#0b0f19] border border-[#26334d] rounded-xl p-3 overflow-y-auto max-h-[300px] flex flex-col gap-2 custom-scrollbar">
            {history.length > 0 ? (
              history.map((m) => (
                <div
                  key={m.id}
                  className="flex items-center justify-between p-3 bg-[#182234] border border-[#2b3b5c] rounded-lg text-xs font-mono font-bold"
                >
                  <div className="flex items-center gap-2.5">
                    <span className={`px-2 py-0.5 rounded text-[10px] ${m.won ? 'bg-emerald-600 text-white' : 'bg-red-600 text-white'}`}>
                      {m.won ? 'VICTORIA' : 'DERROTA'}
                    </span>
                    <span className="text-white">vs {m.oppFlag} {m.oppTeam} ({m.oppYear})</span>
                    {m.roundName && (
                      <span className="text-[10px] font-sans text-amber-400 bg-amber-950/60 px-1.5 py-0.5 rounded border border-amber-800/60">
                        {m.roundName}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="font-display font-black text-sm text-[#ef4444]">
                      {m.userGoals} - {m.oppGoals}
                    </span>
                    <span className="text-gray-400 text-[10px]">{m.date}</span>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-xs font-medium text-gray-400 py-6">
                Aún no has jugado partidos. ¡Completa tu primer draft para entrar en la historia!
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

