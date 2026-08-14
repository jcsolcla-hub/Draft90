import React, { useEffect, useState, useRef } from 'react';
import { Sparkles, Dices, Trophy, Flame } from 'lucide-react';
import { Team } from '../types';
import { HISTORICAL_TEAMS } from '../data/teamsData';
import { isEligibleDraftTeam } from '../utils/draftSelection';
import { sound } from '../utils/audio';

interface TeamRouletteProps {
  targetTeam: Team;
  type: 'full' | 'year' | 'club';
  onComplete: () => void;
}

export const TeamRoulette: React.FC<TeamRouletteProps> = ({
  targetTeam,
  type,
  onComplete,
}) => {
  const [displayTeam, setDisplayTeam] = useState<Team>(targetTeam);
  const [progress, setProgress] = useState(0);
  const [isLanded, setIsLanded] = useState(false);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    const basePool = HISTORICAL_TEAMS.filter(t => isEligibleDraftTeam(t, targetTeam.type === 'worldcup' ? 'worldcup' : 'champions'));
    let pool = basePool;
    if (type === 'year') {
      // Pool of years for this club/country
      const years = ['1958', '1962', '1970', '1974', '1978', '1982', '1986', '1990', '1994', '1998', '2002', '2006', '2010', '2014', '2018', '2022', '2024', '2026'];
      pool = years.map(y => ({
        ...targetTeam,
        year: y,
        tag: `${targetTeam.name} ${y}`
      }));
    } else if (type === 'club') {
      // Pool of other clubs with target year
      pool = basePool.filter(t => t.name !== targetTeam.name);
    }

    if (pool.length === 0) pool = basePool.length > 0 ? basePool : HISTORICAL_TEAMS;

    const totalSteps = 22;
    let currentStep = 0;
    let timeoutId: NodeJS.Timeout;

    const spin = () => {
      currentStep++;
      const currentProgress = currentStep / totalSteps;
      setProgress(currentProgress);

      if (currentStep < totalSteps) {
        // Pick random visual preview
        const randomItem = pool[Math.floor(Math.random() * pool.length)];
        setDisplayTeam(randomItem);
        sound.playRouletteTick();

        // Ease out deceleration: starts fast (45ms) and slows down (up to 320ms)
        const delay = 40 + Math.pow(currentProgress, 2.5) * 280;
        timeoutId = setTimeout(spin, delay);
      } else {
        // Final landing
        setDisplayTeam(targetTeam);
        setIsLanded(true);
        sound.playRouletteLand();

        // Complete callback after celebrating reveal
        timeoutId = setTimeout(() => {
          onCompleteRef.current();
        }, 850);
      }
    };

    timeoutId = setTimeout(spin, 50);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [targetTeam, type]);

  return (
    <div className="relative w-full rounded-2xl overflow-hidden border-2 border-emerald-400 bg-gradient-to-b from-[#06331e] to-[#021c10] p-6 shadow-2xl flex flex-col items-center justify-center text-center gap-4">
      {/* Stadium Spotlight Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(16,185,129,0.25),transparent_70%)] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />

      {/* Header Badge */}
      <div className="flex items-center gap-2 z-10">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-black uppercase tracking-widest bg-emerald-950/90 text-emerald-300 border border-emerald-500/60 shadow-lg">
          <Dices className={`w-3.5 h-3.5 ${!isLanded ? 'animate-spin' : ''}`} />
          <span>
            {type === 'year'
              ? 'GIRANDO RULETA DE AÑOS HISTÓRICOS'
              : type === 'club'
              ? 'GIRANDO RULETA DE CLUBES Y SELECCIONES'
              : 'GIRANDO RULETA DE DRAFT 90'}
          </span>
        </span>
      </div>

      {/* Reel Spinner Box */}
      <div
        className={`w-full max-w-sm py-6 px-4 rounded-xl border-2 transition-all duration-300 flex flex-col items-center justify-center gap-2 z-10 ${
          isLanded
            ? 'bg-gradient-to-br from-emerald-900/90 via-[#0a3822] to-emerald-950 border-amber-400 shadow-[0_0_30px_rgba(251,191,36,0.35)] scale-105'
            : 'bg-[#032014]/90 border-emerald-600/50 shadow-inner'
        }`}
      >
        <div className="text-5xl md:text-6xl drop-shadow-md select-none transform transition-transform duration-150">
          {displayTeam.flag}
        </div>

        <div className="flex flex-col items-center">
          <span className="font-mono text-xs font-bold text-emerald-400/90 tracking-widest">
            {displayTeam.shortCode} · {displayTeam.country}
          </span>
          <h3 className="font-display text-2xl md:text-3xl font-black text-white uppercase tracking-tight line-clamp-1">
            {displayTeam.name}
          </h3>
          <span
            className={`mt-1 font-display font-black text-lg px-3 py-0.5 rounded-full border transition-all ${
              isLanded
                ? 'bg-amber-400 text-black border-white shadow-md'
                : 'bg-emerald-900/80 text-emerald-200 border-emerald-500/40'
            }`}
          >
            {displayTeam.year}
          </span>
        </div>

        {isLanded && (
          <div className="flex items-center gap-1.5 text-amber-300 text-xs font-bold font-mono mt-1 animate-bounce">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>¡EQUIPO SELECCIONADO!</span>
            <Sparkles className="w-4 h-4 text-amber-300" />
          </div>
        )}
      </div>

      {/* Progress ticker bar */}
      <div className="w-full max-w-xs h-2 bg-[#02180d] rounded-full overflow-hidden border border-emerald-800 z-10">
        <div
          className="h-full bg-gradient-to-r from-emerald-500 to-amber-400 transition-all duration-75 rounded-full"
          style={{ width: `${Math.min(100, Math.round(progress * 100))}%` }}
        />
      </div>

      <p className="text-xs font-mono text-emerald-300/80 z-10">
        {!isLanded ? 'Sorteando combinación histórica...' : 'Cargando plantilla y jugadores...'}
      </p>
    </div>
  );
};
