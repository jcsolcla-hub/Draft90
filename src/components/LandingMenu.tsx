import React, { useState } from 'react';
import { Shield, Sparkles, User as UserIcon, Play, LogIn, Trophy, Dices, Users, Award } from 'lucide-react';
import { User, signInWithGoogle, signInAnonymously } from '../lib/firebase';
import { sound } from '../utils/audio';

interface LandingMenuProps {
  currentUser: User | null;
  onStartGame: () => void;
  onOpenAuth: () => void;
}

export const LandingMenu: React.FC<LandingMenuProps> = ({
  currentUser,
  onStartGame,
  onOpenAuth,
}) => {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleGoogleLogin = async () => {
    sound.playClick();
    setLoading(true);
    setErrorMsg(null);
    try {
      await signInWithGoogle();
      onStartGame();
    } catch (err: any) {
      setErrorMsg(err?.message || 'Error al iniciar sesión con Google.');
    } finally {
      setLoading(false);
    }
  };

  const handleAnonLogin = async () => {
    sound.playClick();
    setLoading(true);
    setErrorMsg(null);
    try {
      await signInAnonymously();
      onStartGame();
    } catch (err: any) {
      setErrorMsg(err?.message || 'Error al iniciar sesión anónima.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0f19] text-white flex flex-col justify-between items-center p-4 md:p-8 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Top Bar */}
      <header className="w-full max-w-5xl flex items-center justify-between z-10 py-2">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#ef4444] to-[#f97316] flex items-center justify-center font-black text-xl shadow-lg">
            90
          </div>
          <span className="font-display font-black text-xl tracking-wider uppercase text-white">
            DRAFT <span className="text-[#ef4444]">90</span>
          </span>
        </div>

        {currentUser ? (
          <div className="flex items-center gap-3 bg-[#182234] border border-[#2b3b5c] px-3 py-1.5 rounded-full shadow-md">
            {currentUser.photoURL ? (
              <img
                src={currentUser.photoURL}
                alt="Avatar"
                className="w-7 h-7 rounded-full border border-red-500"
              />
            ) : (
              <UserIcon className="w-5 h-5 text-gray-300" />
            )}
            <span className="text-xs font-mono font-bold text-gray-200">
              {currentUser.displayName || (currentUser.isAnonymous ? 'Anónimo' : 'Entrenador')}
            </span>
            <button
              onClick={onOpenAuth}
              className="text-[10px] text-gray-400 hover:text-white underline cursor-pointer ml-1"
            >
              Perfil
            </button>
          </div>
        ) : (
          <button
            onClick={onOpenAuth}
            className="flex items-center gap-2 bg-[#182234] hover:bg-[#23314a] border border-[#2b3b5c] px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer shadow-md"
          >
            <LogIn className="w-4 h-4 text-emerald-400" />
            INICIAR SESIÓN
          </button>
        )}
      </header>

      {/* Main Hero Card */}
      <main className="w-full max-w-3xl my-auto z-10 flex flex-col items-center text-center gap-8 py-8">
        <div className="flex flex-col items-center gap-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono font-bold tracking-wider">
            <Trophy className="w-4 h-4 text-yellow-400" /> SIMULADOR DE DRAFT TÁCTICO & FUTBOL
          </span>

          <h1 className="text-4xl md:text-6xl font-display font-black tracking-tight uppercase leading-tight text-white drop-shadow-md">
            DRAFTEA TU 11 Y CONQUISTA EL <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400">TORNEO</span>
          </h1>

          <p className="max-w-xl text-sm md:text-base text-gray-300 font-sans leading-relaxed">
            Obtén países y clubes históricos aleatorios tirando el dado, elige a tus estrellas de cada año y disputa las eliminatorias hasta la gran final.
          </p>
        </div>

        {errorMsg && (
          <div className="bg-red-500/10 border border-red-500/40 text-red-300 px-4 py-2 rounded-xl text-xs font-mono max-w-md">
            {errorMsg}
          </div>
        )}

        {/* Action Buttons */}
        <div className="w-full max-w-md flex flex-col gap-3">
          {currentUser ? (
            <button
              onClick={() => {
                sound.playSuccess();
                onStartGame();
              }}
              className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white font-display font-black text-xl uppercase tracking-wider shadow-2xl hover:scale-[1.02] transition-all cursor-pointer flex items-center justify-center gap-3 border border-red-400/40"
            >
              <Play className="w-6 h-6 fill-white" />
              EMPEZAR DRAFT
            </button>
          ) : (
            <>
              <button
                onClick={handleGoogleLogin}
                disabled={loading}
                className="w-full py-3.5 px-6 rounded-2xl bg-white hover:bg-gray-100 text-gray-900 font-display font-bold text-base transition-all cursor-pointer flex items-center justify-center gap-3 shadow-xl hover:scale-[1.01] border border-gray-300"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
                INICIAR SESIÓN CON GOOGLE
              </button>

              <div className="flex items-center gap-3 my-1">
                <div className="flex-1 h-px bg-[#26334d]" />
                <span className="text-[10px] font-mono text-gray-500 uppercase">o también</span>
                <div className="flex-1 h-px bg-[#26334d]" />
              </div>

              <button
                onClick={handleAnonLogin}
                disabled={loading}
                className="w-full py-3.5 px-6 rounded-2xl bg-[#182234] hover:bg-[#202d44] text-white font-display font-bold text-base transition-all cursor-pointer flex items-center justify-center gap-3 border border-[#2b3b5c] shadow-lg hover:scale-[1.01]"
              >
                <UserIcon className="w-5 h-5 text-gray-400" />
                JUGAR COMO INVITADO (ANÓNIMO)
              </button>
            </>
          )}
        </div>

        {/* Features highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mt-4 text-left">
          <div className="p-4 rounded-xl bg-[#121826] border border-[#26334d] flex flex-col gap-2">
            <Dices className="w-6 h-6 text-orange-400" />
            <h3 className="font-display font-bold text-sm text-white">Tirada de Dado Única</h3>
            <p className="text-xs text-gray-400">
              Tira el dado para revelar un país y año aleatorio. ¡Tira para elegir tu jugador!
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#121826] border border-[#26334d] flex flex-col gap-2">
            <Users className="w-6 h-6 text-blue-400" />
            <h3 className="font-display font-bold text-sm text-white">Clubes y Selecciones</h3>
            <p className="text-xs text-gray-400">
              Desde el Real Madrid o Barça hasta Villarreal, Celta, Deportivo, Málaga, Lille, Brighton o Togo.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#121826] border border-[#26334d] flex flex-col gap-2">
            <Trophy className="w-6 h-6 text-yellow-400" />
            <h3 className="font-display font-bold text-sm text-white">Cuadro de Torneo KO</h3>
            <p className="text-xs text-gray-400">
              Completa los 11 jugadores y simula los partidos desde Octavos de Final hasta la Copa.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full max-w-5xl text-center text-xs font-mono text-gray-500 py-4 border-t border-[#182234] z-10">
        DRAFT 90 FOOTBALL GAME · AUTENTICACIÓN FIREBASE & COPA KO
      </footer>
    </div>
  );
};
