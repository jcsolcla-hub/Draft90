import React, { useState } from 'react';
import { HISTORICAL_TEAMS } from '../data/teamsData';
import { X, Search, Database } from 'lucide-react';
import { sound } from '../utils/audio';

interface DatabaseModalProps {
  onClose: () => void;
}

export const DatabaseModal: React.FC<DatabaseModalProps> = ({ onClose }) => {
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState<'all' | 'worldcup' | 'champions'>('all');

  const filteredTeams = HISTORICAL_TEAMS.filter((team) => {
    const matchesType = typeFilter === 'all' || team.type === typeFilter;
    const matchesSearch =
      team.name.toLowerCase().includes(search.toLowerCase()) ||
      team.tag.toLowerCase().includes(search.toLowerCase()) ||
      team.players.some((p) => p.name.toLowerCase().includes(search.toLowerCase()));
    return matchesType && matchesSearch;
  });

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#121826] border-2 border-[#26334d] rounded-2xl max-w-3xl w-full p-6 shadow-2xl flex flex-col gap-5 my-auto relative max-h-[90vh] overflow-hidden text-white">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#26334d] pb-3">
          <div className="flex items-center gap-2">
            <Database className="w-6 h-6 text-[#ef4444]" />
            <h2 className="font-display font-black text-2xl uppercase tracking-tight text-white">
              ENCICLOPEDIA DE PLANTILLAS HISTÓRICAS
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 bg-[#182234] border border-[#2b3b5c] text-gray-300 hover:text-white rounded-lg cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar equipo, año o jugador (ej: Golovin, Messi, Russia 2018)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#0b0f19] border border-[#2b3b5c] rounded-xl pl-9 pr-4 py-2 font-display font-medium text-xs text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#ef4444]"
            />
          </div>

          <div className="flex items-center bg-[#0b0f19] p-1 rounded-xl border border-[#2b3b5c] w-full sm:w-auto">
            <button
              onClick={() => { sound.playClick(); setTypeFilter('all'); }}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                typeFilter === 'all' ? 'bg-[#ef4444] text-white shadow-sm' : 'text-gray-400 hover:text-white'
              }`}
            >
              Todos
            </button>
            <button
              onClick={() => { sound.playClick(); setTypeFilter('worldcup'); }}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                typeFilter === 'worldcup' ? 'bg-[#ef4444] text-white shadow-sm' : 'text-gray-400 hover:text-white'
              }`}
            >
              🏆 Mundiales
            </button>
            <button
              onClick={() => { sound.playClick(); setTypeFilter('champions'); }}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                typeFilter === 'champions' ? 'bg-[#ef4444] text-white shadow-sm' : 'text-gray-400 hover:text-white'
              }`}
            >
              ⭐ Champions
            </button>
          </div>
        </div>

        {/* Teams List Grid */}
        <div className="overflow-y-auto flex-1 pr-1 grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[450px] custom-scrollbar">
          {filteredTeams.map((team) => (
            <div
              key={team.id}
              className="bg-[#182234] border border-[#2b3b5c] rounded-xl p-4 shadow-md flex flex-col gap-2"
            >
              <div className="flex items-center justify-between border-b border-[#2b3b5c] pb-2">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{team.flag}</span>
                  <div>
                    <h3 className="font-display font-black text-lg text-white leading-none">
                      {team.name}
                    </h3>
                    <span className="text-[10px] font-mono font-bold text-[#ef4444]">
                      {team.tag}
                    </span>
                  </div>
                </div>
                <span className="bg-[#0b0f19] text-gray-300 text-[10px] font-mono font-bold px-2 py-0.5 rounded border border-[#2b3b5c]">
                  {team.players.length} JUGADORES
                </span>
              </div>

              {/* Roster Badges */}
              <div className="flex flex-wrap gap-1.5 mt-1">
                {team.players.map((p) => (
                  <span
                    key={p.id}
                    className="bg-[#0b0f19] border border-[#2b3b5c] px-2 py-0.5 rounded text-[10px] font-mono font-bold text-gray-200"
                  >
                    {p.name} ({p.rating})
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

