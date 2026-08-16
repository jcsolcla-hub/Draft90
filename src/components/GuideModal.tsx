import React, { useState } from 'react';
import { X, BookOpen, Dices, Trophy, Shield, Sparkles, Target, Zap, Award, HelpCircle, Flame } from 'lucide-react';
import { sound } from '../utils/audio';

interface GuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GuideModal: React.FC<GuideModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'basics' | 'rerolls' | 'tactics' | 'tournament' | 'penalties'>('basics');

  if (!isOpen) return null;

  const handleClose = () => {
    sound.playClick();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="w-full max-w-3xl max-h-[90vh] flex flex-col bg-[#072618] border-2 border-[#145938] rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-[#145938] bg-[#041c10]">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-emerald-500/20 border border-emerald-500/40 rounded-xl text-emerald-400">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black font-display text-white uppercase tracking-wider">
                GUÍA OFICIAL · DRAFT 90
              </h2>
              <p className="text-xs text-emerald-300/80 font-mono">
                Manual de juego, tácticas, tiradas y torneo eliminatorio
              </p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-2 text-emerald-300 hover:text-white rounded-lg hover:bg-[#0c3623] transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-1.5 p-2.5 bg-[#03140b] border-b border-[#145938] overflow-x-auto">
          {[
            { id: 'basics', label: '1. ¿Cómo Jugar?', icon: Sparkles },
            { id: 'rerolls', label: '2. Tiradas & Dados', icon: Dices },
            { id: 'tactics', label: '3. Posiciones & Ajuste', icon: Shield },
            { id: 'tournament', label: '4. Torneo KO', icon: Trophy },
            { id: 'penalties', label: '5. Penaltis', icon: Target },
          ].map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  sound.playClick();
                  setActiveTab(tab.id as any);
                }}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold font-display uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                  active
                    ? 'bg-emerald-500 text-white shadow-md'
                    : 'text-emerald-200/70 hover:text-white hover:bg-[#082618]'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Contents */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 text-sm text-emerald-100/90 leading-relaxed font-sans">
          {activeTab === 'basics' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-[#082618] border border-[#145938] flex gap-3.5 items-start">
                <div className="p-2 bg-emerald-500/20 text-emerald-400 rounded-lg shrink-0 mt-0.5">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-bold font-display text-base uppercase mb-1">
                    Objetivo Principal
                  </h3>
                  <p className="text-xs text-emerald-100/80">
                    Construye el mejor XI titular de la historia del fútbol combinando futbolistas legendarios extraídos de clubes y selecciones históricas (1958 - 2026), y supera las 4 rondas eliminatorias para coronarte campeón.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-[#041c10] border border-[#145938]/80 space-y-1.5">
                  <span className="text-amber-400 font-mono font-bold text-xs uppercase block">Paso 1: Tirar y Elegir</span>
                  <p className="text-xs text-emerald-200/80">
                    Cada turno tira el dado para obtener un equipo y año histórico. Selecciona 1 crack de la lista para añadirlo a tu once.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#041c10] border border-[#145938]/80 space-y-1.5">
                  <span className="text-amber-400 font-mono font-bold text-xs uppercase block">Paso 2: Colocar en Campo</span>
                  <p className="text-xs text-emerald-200/80">
                    Pulsa sobre la casilla de la posición adecuada en el césped para asegurar la máxima química y media global.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#041c10] border border-[#145938]/80 space-y-1.5">
                  <span className="text-amber-400 font-mono font-bold text-xs uppercase block">Paso 3: Completar los 11</span>
                  <p className="text-xs text-emerald-200/80">
                    Una vez completados los 11 puestos titulares, el botón de <strong>Simular Torneo</strong> se activará.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#041c10] border border-[#145938]/80 space-y-1.5">
                  <span className="text-amber-400 font-mono font-bold text-xs uppercase block">Paso 4: Conquistar la Copa</span>
                  <p className="text-xs text-emerald-200/80">
                    Disputa Octavos, Cuartos, Semifinales y la Gran Final con simulación de jugadas en tiempo real y penaltis.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'rerolls' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-[#082618] border border-[#145938] flex gap-3.5 items-start">
                <div className="p-2 bg-amber-500/20 text-amber-400 rounded-lg shrink-0 mt-0.5">
                  <Dices className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-bold font-display text-base uppercase mb-1">
                    Sistema de Re-Rolls Estratégicos (3 por partida)
                  </h3>
                  <p className="text-xs text-emerald-100/80">
                    Dispones de <strong>3 Re-Rolls totales por partida</strong> para cambiar de equipo o año si la plantilla actual no se adapta a tus necesidades:
                  </p>
                </div>
              </div>

              <div className="space-y-2.5">
                <div className="p-3 bg-[#041c10] border border-[#145938] rounded-xl flex items-start gap-3">
                  <span className="px-2 py-0.5 rounded bg-amber-500 text-black text-[10px] font-black font-mono mt-0.5">CAMBIAR AÑO</span>
                  <div className="text-xs text-emerald-200/80">
                    Mantiene el mismo club pero busca otra temporada histórica con diferentes jugadores.
                  </div>
                </div>

                <div className="p-3 bg-[#041c10] border border-[#145938] rounded-xl flex items-start gap-3">
                  <span className="px-2 py-0.5 rounded bg-emerald-500 text-white text-[10px] font-black font-mono mt-0.5">CAMBIAR CLUB</span>
                  <div className="text-xs text-emerald-200/80">
                    Mantiene el año pero cambia el club o selección a otro equipo histórico de esa misma edición.
                  </div>
                </div>

                <div className="p-3 bg-[#041c10] border border-[#145938] rounded-xl flex items-start gap-3">
                  <span className="px-2 py-0.5 rounded bg-blue-500 text-white text-[10px] font-black font-mono mt-0.5">+1 TOKEN EXTRA</span>
                  <div className="text-xs text-emerald-200/80">
                    Puedes recargar Re-Rolls viendo un anuncio recompensado para asegurar cracks de 90+ de valoración.
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'tactics' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-[#082618] border border-[#145938] flex gap-3.5 items-start">
                <div className="p-2 bg-emerald-500/20 text-emerald-400 rounded-lg shrink-0 mt-0.5">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-bold font-display text-base uppercase mb-1">
                    Formaciones y Rendimiento de Posición
                  </h3>
                  <p className="text-xs text-emerald-100/80">
                    El rendimiento de un jugador varía según dónde lo coloques en el campo:
                  </p>
                </div>
              </div>

              <div className="space-y-2 text-xs">
                <div className="p-3 rounded-xl bg-[#041c10] border border-emerald-500/40 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-emerald-400" />
                    <span className="font-bold text-white">Posición Primaria / Exacta:</span>
                  </div>
                  <span className="text-emerald-300 font-mono font-bold">100% Media (Rendimiento Óptimo)</span>
                </div>

                <div className="p-3 rounded-xl bg-[#041c10] border border-amber-500/40 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-amber-400" />
                    <span className="font-bold text-white">Posición Secundaria (Compatible):</span>
                  </div>
                  <span className="text-amber-300 font-mono font-bold">-2 a -4 Media</span>
                </div>

                <div className="p-3 rounded-xl bg-[#041c10] border border-red-500/40 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-400" />
                    <span className="font-bold text-white">Fuera de Posición (ej. Delantero de Central):</span>
                  </div>
                  <span className="text-red-300 font-mono font-bold">-8 a -15 Media</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'tournament' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-[#082618] border border-[#145938] flex gap-3.5 items-start">
                <div className="p-2 bg-amber-500/20 text-amber-400 rounded-lg shrink-0 mt-0.5">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-bold font-display text-base uppercase mb-1">
                    Estructura del Torneo Eliminatorio
                  </h3>
                  <p className="text-xs text-emerald-100/80">
                    Enfréntate a los mejores clubes y selecciones de todos los tiempos en cruces a partido único:
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center font-mono">
                <div className="p-3 bg-[#041c10] border border-[#145938] rounded-xl">
                  <span className="text-[10px] text-gray-400 block uppercase">Ronda 1</span>
                  <span className="font-black text-white text-xs">OCTAVOS</span>
                </div>
                <div className="p-3 bg-[#041c10] border border-[#145938] rounded-xl">
                  <span className="text-[10px] text-gray-400 block uppercase">Ronda 2</span>
                  <span className="font-black text-white text-xs">CUARTOS</span>
                </div>
                <div className="p-3 bg-[#041c10] border border-[#145938] rounded-xl">
                  <span className="text-[10px] text-gray-400 block uppercase">Ronda 3</span>
                  <span className="font-black text-white text-xs">SEMIFINAL</span>
                </div>
                <div className="p-3 bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/50 rounded-xl">
                  <span className="text-[10px] text-amber-300 block uppercase">Ronda 4</span>
                  <span className="font-black text-amber-300 text-xs">GRAN FINAL</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'penalties' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-[#082618] border border-[#145938] flex gap-3.5 items-start">
                <div className="p-2 bg-rose-500/20 text-rose-400 rounded-lg shrink-0 mt-0.5">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-bold font-display text-base uppercase mb-1">
                    Reglas de la Tanda de Penaltis
                  </h3>
                  <p className="text-xs text-emerald-100/80">
                    Si el tiempo reglamentario y la prórroga finalizan en empate, el partido se decide desde el punto fatídico:
                  </p>
                </div>
              </div>

              <div className="space-y-2 text-xs">
                <div className="p-3 rounded-xl bg-[#041c10] border border-[#145938]">
                  <strong className="text-white block mb-1">5 Lanzamientos por Equipo:</strong>
                  <span className="text-emerald-200/80">
                    Cada equipo dispara alternativamente 5 penaltis. Gana quien logre mayor ventaja inalcanzable.
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-[#041c10] border border-[#145938]">
                  <strong className="text-white block mb-1">Muerte Súbita:</strong>
                  <span className="text-emerald-200/80">
                    Si tras los 5 lanzamientos persiste el empate, se lanzan tandas de 1 contra 1 hasta que uno marque y el otro falle.
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-[#041c10] border border-[#145938]">
                  <strong className="text-white block mb-1">Disparos y Paradas en Tiempo Real:</strong>
                  <span className="text-emerald-200/80">
                    Tú controlas hacia dónde chutar y hacia dónde lanzarte para detener el penalti del rival.
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#145938] bg-[#041c10] flex items-center justify-between">
          <span className="text-[11px] font-mono text-emerald-300/70">
            DRAFT 90 · Fútbol Histórico
          </span>
          <button
            onClick={handleClose}
            className="px-6 py-2 bg-emerald-500 hover:bg-emerald-400 text-white font-display font-black text-xs uppercase tracking-wider rounded-xl transition cursor-pointer shadow-md"
          >
            ¡ENTENDIDO, A JUGAR!
          </button>
        </div>
      </div>
    </div>
  );
};
