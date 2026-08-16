import React, { useState } from 'react';
import { Volume2, VolumeX, Trophy, Database, RefreshCw, User as UserIcon, LogIn, LogOut, BookOpen, MessageCircle } from 'lucide-react';
import { sound } from '../utils/audio';
import { User, logoutUser } from '../lib/firebase';

interface HeaderProps {
  mode: 'worldcup' | 'champions' | 'all';
  setMode: (mode: 'worldcup' | 'champions' | 'all') => void;
  soundEnabled: boolean;
  setSoundEnabled: (enabled: boolean) => void;
  onOpenHistory: () => void;
  onOpenDatabase: () => void;
  onOpenGuide: () => void;
  onShareWhatsApp: () => void;
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
  onOpenGuide,
  onShareWhatsApp,
  onNewDraft,
  totalPoints,
  totalReRollsLeft,
  currentUser,
  onOpenAuth,
  onOpenMenu,
}) => {
  const [loggingOut, setLoggingOut] = useState(false);

  const toggleSound = () => {
    sound.enabled = !soundEnabled;
    setSoundEnabled(!soundEnabled);
    if (!soundEnabled) sound.playClick();
  };

  const handleDirectLogout = async (e: React.MouseEvent) => {
    e.stopPropagation();
    sound.playClick();
    setLoggingOut(true);
    try {
      await logoutUser();
    } catch (err) {
      console.error('Error logging out:', err);
    } finally {
      setLoggingOut(false);
    }
  };

  return (
    <header className="w-full flex flex-col border-b-2 border-[#145938] bg-[#072618] sticky top-0 z-30 shadow-lg">
      {/* Top Banner */}
      <div className="bg-[#041c10] text-[#f1f5f9] px-4 py-1.5 text-xs font-bold font-display uppercase tracking-wider flex items-center justify-between border-b border-[#145938]/80">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-emerald-400 font-black">DRAFT 90 · MUNDIALES Y CHAMPIONS LEAGUE</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden md:inline text-[11px] font-mono text-emerald-200/80">
            3 RE-ROLLS TOTALES POR PARTIDA ({totalReRollsLeft} DISPONIBLES)
          </span>
          <span className="bg-amber-400 text-black px-2.5 py-0.5 rounded-full text-[10px] font-black font-mono shadow-sm">
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
            <div className="bg-gradient-to-br from-emerald-500 to-teal-700 text-white font-black font-display text-2xl w-10 h-10 flex items-center justify-center rounded-xl border-2 border-white/40 shadow-md group-hover:scale-105 transition-transform">
              90
            </div>
            <div>
              <h1 className="font-display font-black text-2xl tracking-tight text-white leading-none">
                DRAFT <span className="text-emerald-400">90</span>
              </h1>
              <p className="text-[10px] font-medium text-emerald-300/80 tracking-wider uppercase">
                Football Tactical Draft
              </p>
            </div>
          </div>

          {/* Tournament Mode Selector */}
          <div className="hidden sm:flex items-center ml-4 bg-[#041c10] p-1 rounded-xl border border-[#145938]">
            <button
              onClick={() => { sound.playClick(); setMode('all'); }}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                mode === 'all'
                  ? 'bg-emerald-500 text-white shadow-sm'
                  : 'text-emerald-300/70 hover:text-white'
              }`}
            >
              Todos
            </button>
            <button
              onClick={() => { sound.playClick(); setMode('worldcup'); }}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                mode === 'worldcup'
                  ? 'bg-emerald-500 text-white shadow-sm'
                  : 'text-emerald-300/70 hover:text-white'
              }`}
            >
              🏆 Mundial
            </button>
            <button
              onClick={() => { sound.playClick(); setMode('champions'); }}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                mode === 'champions'
                  ? 'bg-emerald-500 text-white shadow-sm'
                  : 'text-emerald-300/70 hover:text-white'
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
              className="flex items-center gap-1.5 bg-[#082b1c] hover:bg-[#0c3d28] text-white text-xs font-bold px-3 py-1.5 rounded-lg border border-[#145938] transition-all cursor-pointer shadow-sm"
              title="Menú Principal"
            >
              <span>Menú</span>
            </button>
          )}

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => { sound.playClick(); onOpenAuth(); }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                currentUser
                  ? 'bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border-amber-500/50'
                  : 'bg-emerald-500 hover:bg-emerald-600 text-white border-white shadow-md'
              }`}
              title={currentUser ? 'Ver perfil' : 'Iniciar sesión'}
            >
              {currentUser?.photoURL ? (
                <img src={currentUser.photoURL} alt="User" className="w-5 h-5 rounded-full object-cover border border-white" />
              ) : currentUser ? (
                <UserIcon className="w-4 h-4 text-amber-300" />
              ) : (
                <LogIn className="w-4 h-4 text-white" />
              )}
              <span className="text-xs font-bold font-display max-w-[100px] truncate">
                {currentUser ? (currentUser.displayName || (currentUser.isAnonymous ? 'Invitado' : 'Perfil')) : 'Entrar'}
              </span>
            </button>

            {currentUser && (
              <button
                onClick={handleDirectLogout}
                disabled={loggingOut}
                className="flex items-center gap-1 bg-red-950/60 hover:bg-red-900/80 text-red-300 hover:text-white text-xs font-bold px-2.5 py-1.5 rounded-lg border border-red-800/60 transition-all cursor-pointer shadow-sm"
                title="Cerrar sesión"
              >
                <LogOut className="w-3.5 h-3.5 text-red-400" />
                <span className="hidden sm:inline text-[11px]">Salir</span>
              </button>
            )}
          </div>

          <button
            onClick={() => { sound.playClick(); onOpenGuide(); }}
            className="flex items-center gap-1.5 bg-[#082b1c] hover:bg-[#0c3d28] text-amber-300 hover:text-amber-200 text-xs font-bold px-3 py-1.5 rounded-lg border border-amber-500/40 transition-all cursor-pointer shadow-sm"
            title="Guía oficial de juego y reglas"
          >
            <BookOpen className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden sm:inline">Guía</span>
          </button>

          <button
            onClick={() => { sound.playClick(); onShareWhatsApp(); }}
            className="flex items-center gap-1.5 bg-emerald-700/80 hover:bg-emerald-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg border border-emerald-500/50 transition-all cursor-pointer shadow-sm"
            title="Compartir plantilla en WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">WhatsApp</span>
          </button>

          <button
            onClick={() => { sound.playClick(); onNewDraft(); }}
            className="hidden lg:flex items-center gap-1.5 bg-[#082b1c] hover:bg-[#0c3d28] text-white text-xs font-bold px-3 py-1.5 rounded-lg border border-[#145938] transition-all"
            title="Nuevo Draft"
          >
            <RefreshCw className="w-3.5 h-3.5 text-emerald-400" />
            <span>Nuevo Draft</span>
          </button>

          <button
            onClick={() => { sound.playClick(); onOpenDatabase(); }}
            className="flex items-center gap-1.5 bg-[#082b1c] hover:bg-[#0c3d28] text-white text-xs font-bold px-3 py-1.5 rounded-lg border border-[#145938] transition-all"
            title="Enciclopedia de Plantillas"
          >
            <Database className="w-3.5 h-3.5 text-teal-300" />
            <span className="hidden md:inline">Plantillas</span>
          </button>

          <button
            onClick={() => { sound.playClick(); onOpenHistory(); }}
            className="flex items-center gap-1.5 bg-[#082b1c] hover:bg-[#0c3d28] text-white text-xs font-bold px-3 py-1.5 rounded-lg border border-[#145938] transition-all"
            title="Historial y Stats"
          >
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden md:inline">Stats</span>
          </button>

          <button
            onClick={toggleSound}
            className="p-2 bg-[#082b1c] hover:bg-[#0c3d28] text-white rounded-lg border border-[#145938] transition-all"
            title={soundEnabled ? "Silenciar audio" : "Activar audio"}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-emerald-400" /> : <VolumeX className="w-4 h-4 text-emerald-700" />}
          </button>
        </div>
      </div>
    </header>
  );
};

