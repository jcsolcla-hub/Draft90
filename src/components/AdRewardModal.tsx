import React, { useState, useEffect } from 'react';
import { Tv, Sparkles, CheckCircle, Play, Shield, Calendar, Gift, X, Volume2, Award, Zap } from 'lucide-react';
import { sound } from '../utils/audio';

export type AdRewardType = 'club' | 'year' | 'token';

interface AdRewardModalProps {
  rewardType: AdRewardType;
  isOpen: boolean;
  onClose: () => void;
  onRewardClaimed: (type: AdRewardType) => void;
}

const AD_SPONSORS = [
  {
    brand: 'FOOTBALL VINTAGE CLASSICS',
    headline: 'Botas Legendarias y Camisetas de Época',
    description: 'Revive la época dorada con las equipaciones oficiales de 1958 a 2026.',
    badge: 'COLECCIÓN OFICIAL',
    icon: '👟',
    accentColor: 'from-amber-500 to-orange-600',
    bgBadge: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
  },
  {
    brand: 'DRAFT 90 PRO MATCH ENERGY',
    headline: 'Máxima Potencia para los 90 Minutos',
    description: 'La bebida isotónica oficial de los torneos eliminatorios y tandas de penaltis.',
    badge: 'SPONSOR OFICIAL',
    icon: '⚡',
    accentColor: 'from-emerald-500 to-teal-600',
    bgBadge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
  },
  {
    brand: 'HISTORIC BALLS ARENA',
    headline: 'Balones Cosidos a Mano - Edición Coleccionista',
    description: 'Siente el toque auténtico de los Mundiales y noches mágicas de Champions.',
    badge: 'PRODUCTO LICENCIADO',
    icon: '⚽',
    accentColor: 'from-blue-500 to-indigo-600',
    bgBadge: 'bg-blue-500/20 text-blue-300 border-blue-500/40',
  },
];

export const AdRewardModal: React.FC<AdRewardModalProps> = ({
  rewardType,
  isOpen,
  onClose,
  onRewardClaimed,
}) => {
  const [countdown, setCountdown] = useState(5);
  const [isPlaying, setIsPlaying] = useState(false);
  const [adFinished, setAdFinished] = useState(false);
  const [sponsorIndex, setSponsorIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setCountdown(5);
      setIsPlaying(true);
      setAdFinished(false);
      setSponsorIndex(Math.floor(Math.random() * AD_SPONSORS.length));
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || !isPlaying || adFinished) return;

    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown((prev) => prev - 1);
        sound.playRouletteTick();
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setAdFinished(true);
      setIsPlaying(false);
      sound.playRouletteLand();
    }
  }, [isOpen, isPlaying, countdown, adFinished]);

  if (!isOpen) return null;

  const currentSponsor = AD_SPONSORS[sponsorIndex];

  const getRewardTitle = () => {
    switch (rewardType) {
      case 'club':
        return 'CAMBIO GRATIS DE CLUB / PAÍS';
      case 'year':
        return 'CAMBIO GRATIS DE AÑO HISTÓRICO';
      case 'token':
        return '+1 CAMBIO DE DADO ADICIONAL';
    }
  };

  const getRewardDesc = () => {
    switch (rewardType) {
      case 'club':
        return 'Mantiene el año sorteado y busca otro Club o Selección al instante.';
      case 'year':
        return 'Mantiene el Club o Selección y sortea otro año histórico.';
      case 'token':
        return 'Añade 1 cambio extra a tu contador de la partida actual.';
    }
  };

  const getRewardIcon = () => {
    switch (rewardType) {
      case 'club':
        return <Shield className="w-5 h-5 text-amber-400" />;
      case 'year':
        return <Calendar className="w-5 h-5 text-emerald-400" />;
      case 'token':
        return <Gift className="w-5 h-5 text-teal-400" />;
    }
  };

  const handleClaim = () => {
    sound.playSuccess();
    onRewardClaimed(rewardType);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-md bg-[#051c11] border-2 border-emerald-500 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(16,185,129,0.3)] flex flex-col">
        
        {/* Top Header Bar */}
        <div className="bg-[#03140c] border-b border-emerald-800/80 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1.5 bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[11px] font-mono font-black px-2.5 py-0.5 rounded-full">
              <Tv className="w-3.5 h-3.5 animate-pulse" />
              <span>ANUNCIO RECOMPENSADO</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            {!adFinished ? (
              <span className="text-xs font-mono font-bold text-emerald-300 bg-[#072417] px-2.5 py-1 rounded-lg border border-emerald-700/60 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                Recompensa en {countdown}s
              </span>
            ) : (
              <span className="text-xs font-mono font-black text-emerald-400 bg-emerald-950 px-2.5 py-1 rounded-lg border border-emerald-500 flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                ¡Completado!
              </span>
            )}

            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
              title="Cerrar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Video / Interactive Ad Player Area */}
        <div className="relative bg-gradient-to-b from-[#021008] via-[#041a0e] to-[#021008] p-6 flex flex-col items-center text-center gap-4 overflow-hidden border-b border-emerald-900">
          
          {/* Spotlight Effect */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(16,185,129,0.15),transparent_70%)] pointer-events-none" />

          {/* Progress Bar on top of ad */}
          <div className="w-full bg-[#020b05] h-1.5 rounded-full overflow-hidden border border-emerald-950">
            <div
              className="h-full bg-gradient-to-r from-amber-400 via-emerald-400 to-teal-400 transition-all duration-1000 ease-linear"
              style={{ width: `${Math.min(100, Math.round(((5 - countdown) / 5) * 100))}%` }}
            />
          </div>

          {/* Ad Creative Showcase */}
          <div className="flex flex-col items-center gap-3 my-2 z-10">
            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${currentSponsor.accentColor} p-1 shadow-2xl flex items-center justify-center border-2 border-white/40 transform ${isPlaying ? 'scale-105 transition-transform duration-500' : ''}`}>
              <div className="w-full h-full bg-[#03190e] rounded-xl flex items-center justify-center text-4xl select-none">
                {currentSponsor.icon}
              </div>
            </div>

            <div className="flex flex-col items-center">
              <span className={`text-[10px] font-mono font-black px-2.5 py-0.5 rounded-full border mb-1.5 ${currentSponsor.bgBadge}`}>
                {currentSponsor.badge}
              </span>
              <h3 className="font-display font-black text-xl text-white tracking-wide uppercase">
                {currentSponsor.brand}
              </h3>
              <p className="font-display font-bold text-sm text-amber-300 mt-0.5">
                {currentSponsor.headline}
              </p>
              <p className="text-xs font-mono text-emerald-200/70 max-w-xs mt-1 leading-relaxed">
                {currentSponsor.description}
              </p>
            </div>
          </div>

          {/* Ad Status Overlay */}
          <div className="w-full bg-[#03170d] border border-emerald-800/60 rounded-xl p-3 flex items-center justify-between text-xs font-mono text-emerald-300/90 z-10">
            <div className="flex items-center gap-2">
              <Volume2 className="w-4 h-4 text-emerald-400" />
              <span>Anuncio Interactivo HD</span>
            </div>
            <span className="text-[10px] text-gray-400">Google Ads / AdMob Ready</span>
          </div>
        </div>

        {/* Reward Confirmation Bottom Card */}
        <div className="p-5 bg-[#062416] flex flex-col gap-3">
          <div className="bg-[#03170e] border-2 border-amber-400/60 rounded-2xl p-3.5 flex items-center gap-3.5 shadow-inner">
            <div className="w-12 h-12 rounded-xl bg-amber-400/20 border border-amber-400 flex items-center justify-center shrink-0">
              {getRewardIcon()}
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span className="font-display font-black text-sm text-amber-300 uppercase tracking-tight">
                  {getRewardTitle()}
                </span>
              </div>
              <span className="text-xs font-mono text-emerald-200/80 leading-tight mt-0.5">
                {getRewardDesc()}
              </span>
            </div>
          </div>

          {/* Action Button */}
          {adFinished ? (
            <button
              onClick={handleClaim}
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-black font-display font-black text-base uppercase border-2 border-white shadow-[0_4px_25px_rgba(251,191,36,0.5)] transition-all transform active:scale-95 flex items-center justify-center gap-2.5 cursor-pointer animate-pulse"
            >
              <Award className="w-5 h-5 text-black" />
              <span>¡RECLAMAR RECOMPENSA Y CAMBIAR!</span>
            </button>
          ) : (
            <button
              disabled
              className="w-full py-3.5 px-4 rounded-xl bg-[#03190e] text-gray-400 font-display font-black text-sm uppercase border border-emerald-900 flex items-center justify-center gap-2 cursor-not-allowed opacity-80"
            >
              <div className="w-4 h-4 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin" />
              <span>VIENDO ANUNCIO... ({countdown}s)</span>
            </button>
          )}

          <p className="text-[10px] text-center font-mono text-emerald-400/60">
            Gracias por apoyar Draft 90. Los anuncios nos permiten mantener los servidores y licencias activas.
          </p>
        </div>

      </div>
    </div>
  );
};
