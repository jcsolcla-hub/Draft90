import { Player, SlotConfig } from '../types';

export const shareSquadOnWhatsApp = (
  placedPlayers: (Player | null)[],
  slots: SlotConfig[],
  formation: string,
  totalPoints: number
) => {
  const playersFilled = placedPlayers.filter((p): p is Player => p !== null);
  const avgRating = playersFilled.length
    ? Math.round(playersFilled.reduce((acc, p) => acc + p.rating, 0) / playersFilled.length)
    : 0;

  const rosterLines = slots
    .map((slot, idx) => {
      const player = placedPlayers[idx];
      if (!player) return `⚽ ${slot.pos}: _(Vacío)_`;
      return `⚽ ${slot.pos}: *${player.name}* (${player.rating}) - ${player.club} '${player.year.slice(-2)}`;
    })
    .join('\n');

  const text =
    `🏆 *¡MI EQUIPAZO EN DRAFT 90!* 🏆\n\n` +
    `⭐ *Media del Equipo:* ${avgRating} OVR (${playersFilled.length}/11 jugadores)\n` +
    `📋 *Formación:* ${formation}\n` +
    `🔥 *Puntos acumulados:* ${totalPoints.toLocaleString()} PTS\n\n` +
    `*Alineación Titular:*\n` +
    `${rosterLines}\n\n` +
    `🎮 ¡Supera mi 11 histórico y gana el torneo aquí gratis! 👉 ${window.location.origin}`;

  const encodedText = encodeURIComponent(text);
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodedText}`;
  window.open(whatsappUrl, '_blank');
};

export const shareTournamentVictoryOnWhatsApp = (
  userTeamName: string,
  avgRating: number,
  score: string,
  oppName: string
) => {
  const text =
    `🥇 *¡CAMPEÓN DE LA GRAN FINAL EN DRAFT 90!* 🏆⚽\n\n` +
    `He ganado el torneo eliminatorio con mi once histórico (${avgRating} OVR).\n` +
    `🔥 *Resultado Final:* ${userTeamName} ${score} ${oppName}\n\n` +
    `¿Eres capaz de armar un once de leyenda y ganar el torneo? ¡Pruébalo gratis! 👉 ${window.location.origin}`;

  const encodedText = encodeURIComponent(text);
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodedText}`;
  window.open(whatsappUrl, '_blank');
};
