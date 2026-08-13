import React from 'react';
import { Volume2, VolumeX, Trophy, Database, RefreshCw, User as UserIcon, LogIn } from 'lucide-react';
import { sound } from '../utils/audio';
import { User } from '../lib/firebase';

interface HeaderProps {
  mode: 'worldcup' | 'champions' | 'all';
  setMode: (mode: 'worldcup' | 'champions' | 'all') => void;
  soundEnabled: boolean;
  setSoundEnabled: (enabled: boolean) => void;
  onOpenHistory: () => void;
  onOpenDatabase: () => void;
  onNewDraft: () => void;
  totalPoints: number;
  totalReRollsLeft: number;
  currentUser: User | null;
  onOpenAuth: () => void;
  onOpenMenu?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  mode,
  setMode,
  soundEnabled,
  setSoundEnabled,
  onOpenHistory,
  onOpenDatabase,
  onNewDraft,
  totalPoints,
  totalReRollsLeft,
  currentUser,
  onOpenAuth,
  onOpenMenu,
}) => {
  const toggleSound = () => {
    sound.enabled = !soundEnabled;
    setSoundEnabled(!soundEnabled);
    if (!soundEnabled) sound.playClick();
  };

  return (
    <header className="w-full flex flex-col border-b-2 border-[#243049] bg-[#121826] sticky top-0 z-30 shadow-md">
      {/* Top Banner */}
      <div className="bg-[#182234] text-[#f1f5f9] px-4 py-1.5 text-xs font-bold font-display uppercase tracking-wider flex items-center justify-between border-b border-[#243049]">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#ef4444] animate-ping" />
          <span className="text-[#ef4444] font-black">DRAFT 90 · MUNDIALES Y CHAMPIONS</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden md:inline text-[11px] font-mono text-gray-400">
            3 RE-ROLLS TOTALES POR PARTIDA ({totalReRollsLeft} DISPONIBLES)
          </span>
          <span className="bg-[#ef4444] text-white px-2.5 py-0.5 rounded text-[10px] font-black font-mono">
            {totalPoints.toLocaleString()} PTS
          </span>
        </div>
      </div>

      {/* Main Header Content */}
      <div className="max-w-7xl w-full mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-3">
        {/* Logo & Brand */}
        <div className="flex items-center gap-3">
          <div 
            onClick={onNewDraft}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="bg-[#ef4444] text-white font-black font-display text-2xl w-10 h-10 flex items-center justify-center rounded-lg border-2 border-[#f1f5f9]/20 shadow-md group-hover:scale-105 transition-transform">
              90
            </div>
            <div>
              <h1 className="font-display font-black text-2xl tracking-tight text-white leading-none">
                DRAFT <span className="text-[#ef4444]">90</span>
              </h1>
              <p className="text-[10px] font-medium text-gray-400 tracking-wider uppercase">
                Football Tactical Draft
              </p>
            </div>
          </div>

          {/* Tournament Mode Selector */}
          <div className="hidden sm:flex items-center ml-4 bg-[#182234] p-1 rounded-xl border border-[#2b3b5c]">
            <button
              onClick={() => { sound.playClick(); setMode('all'); }}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                mode === 'all'
                  ? 'bg-[#ef4444] text-white shadow-sm'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Todos
            </button>
            <button
              onClick={() => { sound.playClick(); setMode('worldcup'); }}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                mode === 'worldcup'
                  ? 'bg-[#ef4444] text-white shadow-sm'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              🏆 Mundial
            </button>
            <button
              onClick={() => { sound.playClick(); setMode('champions'); }}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                mode === 'champions'
                  ? 'bg-[#ef4444] text-white shadow-sm'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              ⭐ Champions
            </button>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* User Auth Button */}
          {onOpenMenu && (
            <button
              onClick={() => { sound.playClick(); onOpenMenu(); }}
              className="flex items-center gap-1.5 bg-[#182234] hover:bg-[#223049] text-white text-xs font-bold px-3 py-1.5 rounded-lg border border-[#2b3b5c] transition-all cursor-pointer"
              title="Menú Principal"
            >
              <span>Menú</span>
            </button>
          )}

          <button
            onClick={() => { sound.playClick(); onOpenAuth(); }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
              currentUser
                ? 'bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border-amber-500/40'
                : 'bg-[#ef4444] hover:bg-red-600 text-white border-white shadow-md'
            }`}
            title={currentUser ? 'Ver perfil' : 'Iniciar sesión'}
          >
            {currentUser?.photoURL ? (
              <img src={currentUser.photoURL} alt="User" className="w-5 h-5 rounded-full object-cover border border-white" />
            ) : currentUser ? (
              <UserIcon className="w-4 h-4 text-amber-400" />
            ) : (
              <LogIn className="w-4 h-4 text-white" />
            )}
            <span className="text-xs font-bold font-display max-w-[100px] truncate">
              {currentUser ? (currentUser.displayName || (currentUser.isAnonymous ? 'Invitado' : 'Perfil')) : 'Entrar'}
            </span>
          </button>

          <button
            onClick={() => { sound.playClick(); onNewDraft(); }}
            className="hidden lg:flex items-center gap-1.5 bg-[#182234] hover:bg-[#223049] text-white text-xs font-bold px-3 py-1.5 rounded-lg border border-[#2b3b5c] transition-all"
            title="Nuevo Draft"
          >
            <RefreshCw className="w-3.5 h-3.5 text-[#ef4444]" />
            <span>Nuevo Draft</span>
          </button>

          <button
            onClick={() => { sound.playClick(); onOpenDatabase(); }}
            className="flex items-center gap-1.5 bg-[#182234] hover:bg-[#223049] text-white text-xs font-bold px-3 py-1.5 rounded-lg border border-[#2b3b5c] transition-all"
            title="Enciclopedia de Plantillas"
          >
            <Database className="w-3.5 h-3.5 text-blue-400" />
            <span className="hidden md:inline">Plantillas</span>
          </button>

          <button
            onClick={() => { sound.playClick(); onOpenHistory(); }}
            className="flex items-center gap-1.5 bg-[#182234] hover:bg-[#223049] text-white text-xs font-bold px-3 py-1.5 rounded-lg border border-[#2b3b5c] transition-all"
            title="Historial y Stats"
          >
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden md:inline">Stats</span>
          </button>

          <button
            onClick={toggleSound}
            className="p-2 bg-[#182234] hover:bg-[#223049] text-white rounded-lg border border-[#2b3b5c] transition-all"
            title={soundEnabled ? "Silenciar audio" : "Activar audio"}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-[#ef4444]" /> : <VolumeX className="w-4 h-4 text-gray-500" />}
          </button>
        </div>
      </div>
    </header>
  );
};

