import * as fs from 'fs';
import * as path from 'path';
import { calibratePlayerRating } from './rebalanceAllRatings';
import { Team, Player } from './teamBuilderHelper';
import { LATAM_CLUBS } from './data/clubs_latam';
import { EUROPE_CLUBS } from './data/clubs_europe';
import { NATIONAL_TEAMS_EXTRA } from './data/national_teams';
import { EXTRA_VARIETIES_TEAMS } from './data/extra_varieties';
import { CLUBS_2026_MODERN } from './data/clubs_2026_modern';
import { CLUBS_GOLDEN_ERAS } from './data/clubs_golden_eras';
import { CLUBS_EXTRA_EXPANSION } from './data/clubs_extra_expansion';
import { CLUBS_MORE_EUROPEAN_HISTORY } from './data/clubs_more_european_history';
import { CLUBS_REACH_300 } from './data/clubs_reach_300';
import { MORE_RICH_TEAMS } from './data/more_rich_teams';

console.log('--- RECALIBRATING ALL TEAMS AND RATINGS FROM RAW SOURCES ---');

function calibrateTeam(t: Team): Team {
  const maxRawRating = Math.max(...t.players.map(p => p.rating));
  const isChampionOrHistoric = t.tag?.toLowerCase().includes('campeón') || t.tag?.toLowerCase().includes('final') || t.type === 'worldcup';
  const tier = isChampionOrHistoric ? 'legendary' : (t.tier || 'gold');
  const players = t.players.map((p, idx) => {
    const isStar = !!p.bonus || p.rating >= maxRawRating - 1 || p.rating >= 92;
    const newRating = calibratePlayerRating(p.name, p.rating, t.year, tier, isStar);
    return {
      ...p,
      rating: newRating,
    };
  });
  return {
    ...t,
    players,
  };
}

// 1. Build MASSIVE_TEAMS_DATA
const allTeamsMap = new Map<string, Team>();
const allSources = [
  LATAM_CLUBS,
  EUROPE_CLUBS,
  CLUBS_2026_MODERN,
  CLUBS_GOLDEN_ERAS,
  CLUBS_EXTRA_EXPANSION,
  CLUBS_MORE_EUROPEAN_HISTORY,
  CLUBS_REACH_300,
  NATIONAL_TEAMS_EXTRA,
  EXTRA_VARIETIES_TEAMS,
  MORE_RICH_TEAMS,
];

for (const list of allSources) {
  for (const t of list) {
    allTeamsMap.set(t.id, calibrateTeam(t));
  }
}

const massiveTeams = Array.from(allTeamsMap.values());
const targetPath = path.join(process.cwd(), 'src/data/massiveTeamsData.ts');
const fileHeader = `import { Team } from '../types';

/**
 * Draft 90 Master Historical Teams Database - Calibrated Ratings
 * Total Teams: ${massiveTeams.length}
 */
export const MASSIVE_TEAMS_DATA: Team[] = `;

fs.writeFileSync(targetPath, fileHeader + JSON.stringify(massiveTeams, null, 2) + ';\n', 'utf-8');
console.log(`Generated massiveTeamsData with ${massiveTeams.length} calibrated teams.`);

// 2. Clear out moreTeams.ts so it doesn't cause duplicates
const moreTeamsPath = path.join(process.cwd(), 'src/data/moreTeams.ts');
const moreTeamsHeader = `import { Team } from '../types';

export const ADDITIONAL_TEAMS: Team[] = [];
`;
fs.writeFileSync(moreTeamsPath, moreTeamsHeader, 'utf-8');
console.log(`Cleaned up moreTeams.ts.`);

console.log('--- RECALIBRATION COMPLETE ---');
