import * as fs from 'fs';
import * as path from 'path';
import { calibratePlayerRating } from './rebalanceAllRatings';

const teamsDataPath = path.join(process.cwd(), 'src/data/teamsData.ts');
let content = fs.readFileSync(teamsDataPath, 'utf-8');

// Match player objects in teamsData and calibrate their ratings
// Example: rating: 92,
// We can use a regex to match player lines with name and rating
const playerRegex = /(\{\s*id:\s*'([^']+)',\s*number:\s*(\d+),\s*name:\s*'([^']+)',\s*positions:[^,]+,\s*primaryPos:\s*'([^']+)',\s*rating:\s*(\d+),(?:[^}]*year:\s*'(\d+)',)?(?:[^}]*tournament:\s*'([^']+)',)?\s*\}\s*)/g;

let updatedCount = 0;

// Better yet, let's load BASE_HISTORICAL_TEAMS or recalibrate via AST/regex
const lines = content.split('\n');
let currentTeamYear = '2024';
let currentTeamTier: 'legendary' | 'gold' | 'silver' | 'bronze' = 'gold';

const newLines = lines.map(line => {
  const yearMatch = line.match(/year:\s*'(\d+)'/);
  if (yearMatch) {
    currentTeamYear = yearMatch[1];
  }
  const tierMatch = line.match(/tier:\s*'([^']+)'/);
  if (tierMatch) {
    currentTeamTier = tierMatch[1] as any;
  }

  // Check if player line
  const pMatch = line.match(/name:\s*'([^']+)',.*?rating:\s*(\d+)/);
  if (pMatch) {
    const pName = pMatch[1];
    const rawRating = parseInt(pMatch[2], 10);
    const isBonus = line.includes('bonus:');
    const isStar = isBonus || rawRating >= 93;
    const newRating = calibratePlayerRating(pName, rawRating, currentTeamYear, currentTeamTier, isStar);

    if (newRating !== rawRating) {
      updatedCount++;
      return line.replace(/rating:\s*\d+/, `rating: ${newRating}`);
    }
  }
  return line;
});

fs.writeFileSync(teamsDataPath, newLines.join('\n'), 'utf-8');
console.log(`Calibrated ${updatedCount} players in src/data/teamsData.ts!`);
