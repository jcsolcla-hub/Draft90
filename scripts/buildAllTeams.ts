import * as fs from 'fs';
import * as path from 'path';
import { LATAM_CLUBS } from './data/clubs_latam';
import { EUROPE_CLUBS } from './data/clubs_europe';
import { NATIONAL_TEAMS_EXTRA } from './data/national_teams';
import { Team } from './teamBuilderHelper';

console.log('Compiling Draft 90 master database...');

const allTeamsMap = new Map<string, Team>();

// Helper to register teams and avoid duplicate IDs
function register(teamsList: Team[], source: string) {
  let count = 0;
  for (const t of teamsList) {
    if (!allTeamsMap.has(t.id)) {
      allTeamsMap.set(t.id, t);
      count++;
    } else {
      // Overwrite or update with latest high fidelity version
      allTeamsMap.set(t.id, t);
    }
  }
  console.log(`Loaded ${count} teams from ${source}.`);
}

// 1. Load Latin American Clubs
register(LATAM_CLUBS, 'LATAM Clubs');

// 2. Load European Clubs
register(EUROPE_CLUBS, 'European Clubs');

// 3. Load National Teams
register(NATIONAL_TEAMS_EXTRA, 'National Teams');

const finalTeams = Array.from(allTeamsMap.values());
console.log(`Total master teams compiled: ${finalTeams.length}`);

// Target file path
const targetPath = path.join(process.cwd(), 'src/data/massiveTeamsData.ts');

const fileHeader = `import { Team } from '../types';

/**
 * Draft 90 Master Historical Teams Database
 * Generated automatically with complete club rosters, key years, and World Cup squads.
 * Total Teams: ${finalTeams.length}
 */
export const MASSIVE_TEAMS_DATA: Team[] = `;

const jsonOutput = JSON.stringify(finalTeams, null, 2);

fs.writeFileSync(targetPath, fileHeader + jsonOutput + ';\n', 'utf-8');

console.log(`Successfully written ${finalTeams.length} teams to ${targetPath}!`);
