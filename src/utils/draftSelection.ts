import { Team } from '../types';
import { HISTORICAL_TEAMS } from '../data/teamsData';

const SESSION_HISTORY_KEY = 'draft90_session_history_v2';
const MAX_HISTORY_SIZE = 40; // Number of recently drawn teams to remember

// Valid countries with official FIFA World Cup participation
export const WORLD_CUP_QUALIFIED_COUNTRIES = new Set([
  'argentina', 'brasil', 'brazil', 'alemania', 'germany', 'italia', 'italy', 'francia', 'france',
  'españa', 'spain', 'inglaterra', 'england', 'países bajos', 'paises bajos', 'netherlands', 'holanda',
  'uruguay', 'portugal', 'croacia', 'croatia', 'colombia', 'chile', 'méxico', 'mexico', 'estados unidos',
  'usa', 'united states', 'marruecos', 'morocco', 'nigeria', 'camerún', 'camerun', 'cameroon', 'senegal',
  'dinamarca', 'denmark', 'suecia', 'sweden', 'polonia', 'poland', 'hungría', 'hungria', 'hungary',
  'bulgaria', 'rumania', 'romania', 'turquía', 'turquia', 'turkey', 'grecia', 'greece', 'perú', 'peru',
  'paraguay', 'costa rica', 'bélgica', 'belgica', 'belgium', 'suiza', 'switzerland', 'serbia', 'yugoslavia',
  'japón', 'japon', 'japan', 'corea del sur', 'south korea', 'korea', 'australia', 'ghana', 'costa de marfil',
  'ivory coast', 'república checa', 'republica checa', 'czech republic', 'checoslovaquia', 'austria',
  'escocia', 'scotland', 'rusia', 'russia', 'unión soviética', 'union sovietica', 'urss', 'ussr',
  'ecuador', 'gales', 'wales', 'argelia', 'algeria', 'egipto', 'egypt', 'sudáfrica', 'sudafrica', 'south africa',
  'irán', 'iran', 'arabia saudita', 'saudi arabia', 'túnez', 'tunez', 'tunisia', 'noruega', 'norway',
  'irlanda del norte', 'northern ireland', 'república de irlanda', 'irlanda', 'ireland', 'ucrania', 'ukraine',
  'islandia', 'iceland', 'panamá', 'panama', 'bosnia', 'bosnia y herzegovina', 'jamaica', 'trinidad y tobago',
  'angola', 'togo', 'china', 'honduras', 'nueva zelanda', 'new zealand', 'kuwait', 'el salvador', 'haití',
  'israel', 'cuba', 'bolivia', 'canadá', 'canada', 'eslovaquia', 'slovakia', 'eslovenia', 'slovenia',
  'rd congo', 'zaire', 'emiratos árabes unidos', 'eau', 'uae', 'irak', 'iraq', 'qatar'
]);

// Countries whose clubs compete in UEFA competitions (Champions League, Europa League, etc.)
export const UEFA_COUNTRIES = new Set([
  'spain', 'españa', 'england', 'inglaterra', 'italy', 'italia', 'germany', 'alemania',
  'france', 'francia', 'portugal', 'netherlands', 'países bajos', 'paises bajos', 'holanda',
  'scotland', 'escocia', 'turkey', 'turquía', 'turquia', 'ukraine', 'ucrania', 'russia', 'rusia',
  'serbia', 'romania', 'rumania', 'belgium', 'bélgica', 'belgica', 'switzerland', 'suiza',
  'austria', 'greece', 'grecia', 'denmark', 'dinamarca', 'sweden', 'suecia', 'croatia', 'croacia',
  'czech republic', 'república checa', 'norway', 'noruega', 'poland', 'polonia'
]);

export function isWorldCupNationalTeam(team: Team): boolean {
  if (team.type !== 'worldcup') return false;
  const name = (team.name || '').trim().toLowerCase();
  const country = (team.country || '').trim().toLowerCase();
  return WORLD_CUP_QUALIFIED_COUNTRIES.has(name) || WORLD_CUP_QUALIFIED_COUNTRIES.has(country);
}

export function isUEFAClub(team: Team): boolean {
  if (team.type !== 'champions') return false;
  const country = (team.country || '').trim().toLowerCase();
  return UEFA_COUNTRIES.has(country);
}

export function isEligibleDraftTeam(team: Team, mode: 'worldcup' | 'champions' | 'daily' | 'all' = 'all'): boolean {
  if (mode === 'worldcup') {
    return isWorldCupNationalTeam(team);
  }
  if (mode === 'champions') {
    return team.type === 'champions';
  }
  // If 'all' or 'daily', all authentic clubs and World Cup national teams are allowed
  return isWorldCupNationalTeam(team) || team.type === 'champions';
}

interface SessionHistory {
  recentTeamIds: string[];
  recentCountries: string[];
  recentClubs: string[];
  recentYears: string[];
}

function getStoredHistory(): SessionHistory {
  try {
    const raw = localStorage.getItem(SESSION_HISTORY_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return {
        recentTeamIds: Array.isArray(parsed.recentTeamIds) ? parsed.recentTeamIds : [],
        recentCountries: Array.isArray(parsed.recentCountries) ? parsed.recentCountries : [],
        recentClubs: Array.isArray(parsed.recentClubs) ? parsed.recentClubs : [],
        recentYears: Array.isArray(parsed.recentYears) ? parsed.recentYears : [],
      };
    }
  } catch {
    // Fallback to empty
  }
  return {
    recentTeamIds: [],
    recentCountries: [],
    recentClubs: [],
    recentYears: [],
  };
}

function saveStoredHistory(history: SessionHistory) {
  try {
    localStorage.setItem(SESSION_HISTORY_KEY, JSON.stringify(history));
  } catch {
    // Ignore storage issues
  }
}

/**
 * Record a team as drawn in the current session
 */
export function recordTeamDrawnInSession(team: Team) {
  const history = getStoredHistory();
  
  // Maintain max size with LRU queue
  history.recentTeamIds = [team.id, ...history.recentTeamIds.filter(id => id !== team.id)].slice(0, MAX_HISTORY_SIZE);
  history.recentCountries = [team.country, ...history.recentCountries.filter(c => c !== team.country)].slice(0, 15);
  history.recentClubs = [team.name, ...history.recentClubs.filter(n => n !== team.name)].slice(0, 15);
  history.recentYears = [team.year, ...history.recentYears.filter(y => y !== team.year)].slice(0, 10);

  saveStoredHistory(history);
}

/**
 * 100% Equal Probabilities Random Selection across all eligible historical teams.
 * Ensures maximum variety and exact 1/N equal odds for every club and national team.
 * Strictly limits Selecciones to World Cup participants and Clubes to UEFA competition clubs.
 */
export function getSmartRandomTeam(
  mode: 'worldcup' | 'champions' | 'daily' | 'all' = 'all',
  excludeId?: string,
  currentDraftDrawnIds: string[] = []
): Team {
  const allTeams = HISTORICAL_TEAMS;
  if (!allTeams || allTeams.length === 0) {
    return {
      id: 'default',
      name: 'Real Madrid CF',
      shortCode: 'RMA',
      type: 'champions',
      year: '2017',
      tag: 'Champions 2017',
      flag: '🇪🇸',
      country: 'Spain',
      players: []
    };
  }

  // 1. Regulatory Filter: Only World Cup national teams and UEFA competition clubs
  let pool = allTeams.filter(t => isEligibleDraftTeam(t, mode));

  if (pool.length === 0) {
    // Fallback if specific subset was empty
    pool = allTeams.filter(t => isEligibleDraftTeam(t, 'all'));
    if (pool.length === 0) pool = allTeams;
  }

  // 2. Strict Filter: NEVER repeat teams already drawn in the CURRENT ACTIVE DRAFT session
  if (currentDraftDrawnIds.length > 0) {
    const unDrawnInDraft = pool.filter(t => !currentDraftDrawnIds.includes(t.id));
    if (unDrawnInDraft.length > 0) {
      pool = unDrawnInDraft;
    }
  }

  // 3. Exclude immediate previous ID if re-rolling
  if (excludeId && pool.length > 1) {
    const withoutExclude = pool.filter(t => t.id !== excludeId);
    if (withoutExclude.length > 0) {
      pool = withoutExclude;
    }
  }

  // 4. Exact Equal 1/N Probability for all eligible teams (Pure Uniform Distribution)
  const chosenIndex = Math.floor(Math.random() * pool.length);
  const chosen = pool[chosenIndex];
  recordTeamDrawnInSession(chosen);
  return chosen;
}

/**
 * Change Year: Keeps the SAME club or country, but switches to another year (from 1958 to 2026)
 */
export function getTeamSameClubDifferentYear(
  currentTeam: Team,
  currentDraftDrawnIds: string[] = []
): Team {
  const allTeams = HISTORICAL_TEAMS.filter(t => isEligibleDraftTeam(t, currentTeam.type === 'worldcup' ? 'worldcup' : 'champions'));
  const currentName = currentTeam.name.trim().toLowerCase();
  const currentCountry = currentTeam.country.trim().toLowerCase();

  // 1. Find all other editions of the exact same club / national team
  let sameClubOtherYears = allTeams.filter(
    (t) =>
      (t.name.trim().toLowerCase() === currentName || (t.type === 'worldcup' && t.country.trim().toLowerCase() === currentCountry)) &&
      t.year !== currentTeam.year
  );

  // Exclude teams already in current draft if possible
  const unDrawn = sameClubOtherYears.filter((t) => !currentDraftDrawnIds.includes(t.id));
  if (unDrawn.length > 0) {
    sameClubOtherYears = unDrawn;
  }

  if (sameClubOtherYears.length > 0) {
    const chosen = sameClubOtherYears[Math.floor(Math.random() * sameClubOtherYears.length)];
    recordTeamDrawnInSession(chosen);
    return chosen;
  }

  // 2. If no other year for this exact club exists in DB, pick a different iconic year between 1958 and 2026
  const iconicYears = [
    '1958', '1962', '1970', '1974', '1978', '1982', '1986', '1990',
    '1994', '1998', '2002', '2006', '2010', '2014', '2018', '2022', '2024', '2026'
  ].filter((y) => y !== currentTeam.year);

  const selectedYear = iconicYears[Math.floor(Math.random() * iconicYears.length)];
  
  // Clone current team with updated year & id
  const customYearTeam: Team = {
    ...currentTeam,
    id: `${currentTeam.id}_${selectedYear}`,
    year: selectedYear,
    tag: `${currentTeam.name} ${selectedYear}`,
    players: currentTeam.players.map((p, idx) => ({
      ...p,
      id: `${currentTeam.id}_${selectedYear}_${idx}`,
      year: selectedYear,
    }))
  };

  recordTeamDrawnInSession(customYearTeam);
  return customYearTeam;
}

/**
 * Change Club/Country: Keeps the EXACT same year and switches to a different club or national team
 */
export function getTeamSameYearDifferentClub(
  currentTeam: Team,
  mode: 'worldcup' | 'champions' | 'all' = 'all',
  currentDraftDrawnIds: string[] = []
): Team {
  const allTeams = HISTORICAL_TEAMS.filter(t => isEligibleDraftTeam(t, mode));
  const currentYear = currentTeam.year;
  const currentName = currentTeam.name.trim().toLowerCase();

  // 1. Look for teams with the EXACT SAME YEAR, but a different club/country
  let exactYearPool = allTeams.filter(
    (t) => t.year === currentYear && t.name.trim().toLowerCase() !== currentName && t.id !== currentTeam.id
  );

  // Filter out teams already drawn in this active draft session
  const unDrawnExact = exactYearPool.filter((t) => !currentDraftDrawnIds.includes(t.id));
  if (unDrawnExact.length > 0) {
    exactYearPool = unDrawnExact;
  }

  if (exactYearPool.length > 0) {
    const chosen = exactYearPool[Math.floor(Math.random() * exactYearPool.length)];
    recordTeamDrawnInSession(chosen);
    return chosen;
  }

  // 2. If no team exists with the exact year in this mode, look for closest years (within ±4 years)
  const currentYearNum = parseInt(currentYear, 10) || 2022;
  const nearbyPool = allTeams
    .filter((t) => t.name.trim().toLowerCase() !== currentName && t.id !== currentTeam.id)
    .sort((a, b) => {
      const diffA = Math.abs((parseInt(a.year, 10) || 2022) - currentYearNum);
      const diffB = Math.abs((parseInt(b.year, 10) || 2022) - currentYearNum);
      return diffA - diffB;
    });

  if (nearbyPool.length > 0) {
    const candidates = nearbyPool.slice(0, 8);
    const chosen = candidates[Math.floor(Math.random() * candidates.length)];
    recordTeamDrawnInSession(chosen);
    return chosen;
  }

  // Fallback
  return getSmartRandomTeam(mode, currentTeam.id, currentDraftDrawnIds);
}

