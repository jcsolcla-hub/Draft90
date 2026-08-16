import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { MatchResult, TournamentStage } from '../types';
import { Trophy, Award, RotateCcw, Share2, BarChart2, ArrowRight, MessageCircle } from 'lucide-react';
import { sound } from '../utils/audio';
import { shareTournamentVictoryOnWhatsApp } from '../utils/share';

interface ResultModalProps {
  result: MatchResult;
  onNextRound?: () => void;
  onNewDraft: () => void;
  onOpenCard: () => void;
  onClose: () => void;
}

export const ResultModal: React.FC<ResultModalProps> = ({
  result,
  onNextRound,
  onNewDraft,
  onOpenCard,
  onClose,
}) => {
  useEffect(() => {
    if (result.won) {
      sound.playGoal();
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#ef4444', '#f59e0b', '#3b82f6', '#ffffff'],
      });
    }
  }, [result]);

  const roundTitle = result.roundName || 'Octavos de Final';
  const isFinal = result.roundStage === 'final';

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#121826] border-2 border-[#26334d] rounded-2xl max-w-xl w-full p-6 shadow-2xl flex flex-col gap-5 my-auto text-white">
        {/* Banner */}
        <div className="text-center border-b border-[#26334d] pb-4">
          <div className="text-xs font-black font-display uppercase tracking-widest text-[#ef4444] flex items-center justify-center gap-1.5 mb-1">
            <Trophy className="w-4 h-4 text-amber-400" />
            <span>TORNEO DRAFT 90 · {roundTitle.toUpperCase()}</span>
          </div>

          <h2 className="font-display font-black text-3xl uppercase tracking-tight text-white">
            {result.won
              ? isFinal
                ? '¡CAMPEÓN DEL TORNEO!'
                : `¡VICTORIA Y CLASIFICACIÓN A ${
                    result.roundStage === 'octavos'
                      ? 'CUARTOS DE FINAL'
                      : result.roundStage === 'cuartos'
                      ? 'SEMIFINALES'
                      : 'LA GRAN FINAL'
                  }!`
              : `ELIMINADO EN ${roundTitle.toUpperCase()}`}
          </h2>

          {/* Clean Goals Scorecard */}
          <div className="bg-[#0b0f19] border-2 border-amber-500/30 rounded-xl p-4 my-3 text-center shadow-inner">
            <span className="text-[10px] font-black font-display uppercase tracking-widest text-amber-400 block mb-2">
              MARCADOR Y RESUMEN OFICIAL
            </span>
            <div className="flex items-center justify-between px-2">
              <div className="text-center flex-1">
                <span className="font-display font-black text-base md:text-lg block text-white">TU XI HISTÓRICO</span>
                <span className="text-[10px] font-mono font-bold text-emerald-400">MEDIA {result.userAvgRating}</span>
              </div>
              <div className="bg-[#182234] border-2 border-[#2b3b5c] px-6 py-2 rounded-xl text-amber-400 font-display font-black text-3xl md:text-4xl shadow-md mx-2">
                {result.userGoals} - {result.oppGoals}
              </div>
              <div className="text-center flex-1">
                <span className="font-display font-black text-base md:text-lg block text-white line-clamp-1">{result.oppFlag} {result.oppTeam}</span>
                <span className="text-[10px] font-mono font-bold text-gray-400">AÑO {result.oppYear}</span>
              </div>
            </div>

            {/* Regulatory Penalties Result if occurred */}
            {result.penalties && result.penScore && (
              <div className="mt-3 bg-amber-950/70 border border-amber-500/50 rounded-lg p-2 text-center">
                <span className="text-xs font-mono font-black text-amber-300 uppercase">
                  🎯 TANDA DE PENALTIS REGLAMENTARIA (IFAB): {result.penScore.user} - {result.penScore.opp}
                </span>
                <span className="text-[10px] font-mono text-gray-400 block mt-0.5">
                  {result.penScore.user > result.penScore.opp ? '⭐ Victoria en los penaltis para Tu XI' : `Victoria en penaltis para ${result.oppTeam}`}
                </span>
              </div>
            )}

            {/* Goal Details Breakdown */}
            {result.goalDetails && result.goalDetails.length > 0 && (
              <div className="mt-3 border-t border-[#1e293b] pt-2 flex flex-col gap-1.5 text-left">
                <span className="text-[10px] font-mono font-bold text-gray-400 uppercase text-center block">
                  GOLEADORES DEL ENCUENTRO:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium">
                  {/* User Goals */}
                  <div className="bg-[#121826] p-2 rounded border border-emerald-500/30">
                    <span className="text-[10px] font-bold text-emerald-400 block mb-1">⭐ Tu XI:</span>
                    {result.goalDetails.filter(g => g.team === 'user').length === 0 ? (
                      <span className="text-[10px] text-gray-500 italic">Sin goles en juego</span>
                    ) : (
                      result.goalDetails.filter(g => g.team === 'user').map((g, i) => (
                        <div key={i} className="text-[11px] text-emerald-200">
                          ⚽ {g.min}' {g.player}
                        </div>
                      ))
                    )}
                  </div>

                  {/* Opponent Goals */}
                  <div className="bg-[#121826] p-2 rounded border border-amber-500/30">
                    <span className="text-[10px] font-bold text-amber-400 block mb-1">{result.oppFlag} {result.oppTeam}:</span>
                    {result.goalDetails.filter(g => g.team === 'opp').length === 0 ? (
                      <span className="text-[10px] text-gray-500 italic">Sin goles en juego</span>
                    ) : (
                      result.goalDetails.filter(g => g.team === 'opp').map((g, i) => (
                        <div key={i} className="text-[11px] text-amber-200">
                          ⚽ {g.min}' {g.player}
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* MVP Award Card */}
        <div className="bg-[#182234] border border-[#2b3b5c] rounded-xl p-4 shadow-md flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-amber-500 text-black font-display font-black text-xl flex items-center justify-center border-2 border-white shadow-md">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-black font-display uppercase tracking-widest text-gray-400 block">
                MEJOR JUGADOR DEL PARTIDO (MVP)
              </span>
              <span className="font-display font-black text-lg text-white block">
                {result.mvp.name} ({result.mvp.position})
              </span>
            </div>
          </div>
          <div className="text-right">
            <span className="font-display font-black text-2xl text-amber-400">
              {result.mvp.rating}
            </span>
            <span className="text-[10px] font-mono font-bold text-gray-400 block">VALORACIÓN</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="bg-[#182234] border border-[#2b3b5c] rounded-xl p-4 shadow-md">
          <h3 className="text-xs font-black font-display uppercase tracking-widest text-white mb-3 flex items-center gap-1.5">
            <BarChart2 className="w-4 h-4 text-blue-400" />
            ESTADÍSTICAS DEL ENCUENTRO
          </h3>

          <div className="grid grid-cols-2 gap-3 text-xs font-mono font-bold">
            <div className="flex justify-between border-b border-[#2b3b5c] pb-1">
              <span className="text-gray-400">Posesión:</span>
              <span className="text-white">{result.stats.possUser}% / {result.stats.possOpp}%</span>
            </div>
            <div className="flex justify-between border-b border-[#2b3b5c] pb-1">
              <span className="text-gray-400">Tiros a puerta:</span>
              <span className="text-white">{result.stats.sotUser} / {result.stats.sotOpp}</span>
            </div>
            <div className="flex justify-between border-b border-[#2b3b5c] pb-1">
              <span className="text-gray-400">Precisión pases:</span>
              <span className="text-white">{result.stats.passAccUser}% / {result.stats.passAccOpp}%</span>
            </div>
            <div className="flex justify-between border-b border-[#2b3b5c] pb-1">
              <span className="text-gray-400">Paradas:</span>
              <span className="text-white">{result.stats.savesUser} / {result.stats.savesOpp}</span>
            </div>
          </div>
        </div>

        {/* Points Earned Banner */}
        <div className="bg-amber-500 text-black border border-amber-400 rounded-xl p-3 text-center shadow-lg">
          <span className="text-[10px] font-black font-display uppercase tracking-widest block text-black/80">
            PUNTOS GANADOS
          </span>
          <span className="font-display font-black text-3xl">
            +{result.pointsEarned.toLocaleString()} PTS
          </span>
        </div>

        {/* Elimination Alert Banner if Lost */}
        {!result.won && (
          <div className="bg-red-950/80 border-2 border-red-600 rounded-xl p-3 text-center text-red-200 font-display font-black text-xs uppercase tracking-wider shadow-lg">
            🚨 ¡HAS SIDO ELIMINADO DEL TORNEO! SOLAMENTE PUEDES IR AL DRAFT PARA EMPEZAR DE NUEVO.
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col gap-2.5 border-t border-[#26334d] pt-4">
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => {
                sound.playClick();
                onOpenCard();
              }}
              className="flex items-center justify-center gap-2 bg-[#182234] hover:bg-[#25324d] text-white font-display text-xs font-black py-3 px-4 rounded-xl border border-[#2b3b5c] shadow-md uppercase transition-all cursor-pointer"
            >
              <Share2 className="w-4 h-4 text-[#ef4444]" />
              <span>Generar Carta XI</span>
            </button>

            <button
              onClick={() => {
                sound.playClick();
                shareTournamentVictoryOnWhatsApp(
                  'Mi 11 Histórico',
                  Math.round(result.pointsEarned ? 88 : 84),
                  `${result.userScore} - ${result.oppScore}`,
                  result.oppTeam.name
                );
              }}
              className="flex items-center justify-center gap-2 bg-emerald-700/90 hover:bg-emerald-600 text-white font-display text-xs font-black py-3 px-4 rounded-xl border border-emerald-500/50 shadow-md uppercase transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Compartir WhatsApp</span>
            </button>
          </div>

          {result.won && !isFinal && onNextRound ? (
            <button
              onClick={() => {
                sound.playWhistle();
                onNextRound();
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#ef4444] hover:bg-red-600 text-white font-display text-xs font-black py-3 px-4 rounded-xl border border-white shadow-lg uppercase transition-all animate-pulse cursor-pointer"
            >
              <span>
                {result.roundStage === 'octavos'
                  ? 'PASAR A CUARTOS DE FINAL'
                  : result.roundStage === 'cuartos'
                  ? 'PASAR A SEMIFINALES'
                  : 'PASAR A LA GRAN FINAL'}
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={() => {
                sound.playClick();
                onNewDraft();
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#ef4444] hover:bg-red-600 text-white font-display text-xs font-black py-3 px-4 rounded-xl border border-white shadow-lg uppercase transition-all cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>IR AL DRAFT</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

