// Calibrated realistic overall rating (OVR) matching true player quality:
// Raw ratings in builder scripts: 74 - 96
// Scaled ratings:
// - Elite Historical GOATs in Peak Years: 94 - 96
// - Top Superstars & Ballon d'Or winners in prime: 88 - 92
// - World class key starters in legendary teams: 84 - 88
// - Very good / high level starters: 80 - 83
// - Solid reliable starters in top 5 leagues: 76 - 79
// - Decent / regular starters in mid-table clubs & normal squads: 71 - 75
// - Lesser / modest players in underdogs or lower-ranked teams: 65 - 70

export interface StarOverride {
  names: string[];
  year?: string;
  rating: number;
}

export const PEAK_GOATS: StarOverride[] = [
  // --- LIONEL MESSI ---
  { names: ['lionel messi', 'messi'], year: '2012', rating: 96 },
  { names: ['lionel messi', 'messi'], year: '2015', rating: 95 },
  { names: ['lionel messi', 'messi'], year: '2011', rating: 95 },
  { names: ['lionel messi', 'messi'], year: '2009', rating: 94 },
  { names: ['lionel messi', 'messi'], year: '2019', rating: 94 },
  { names: ['lionel messi', 'messi'], year: '2022', rating: 93 },
  { names: ['lionel messi', 'messi'], year: '2024', rating: 88 },
  { names: ['lionel messi', 'messi'], year: '2025', rating: 87 },
  { names: ['lionel messi', 'messi'], year: '2026', rating: 86 },
  { names: ['lionel messi', 'messi'], rating: 93 },

  // --- CRISTIANO RONALDO ---
  { names: ['cristiano ronaldo', 'c. ronaldo'], year: '2014', rating: 95 },
  { names: ['cristiano ronaldo', 'c. ronaldo'], year: '2017', rating: 95 },
  { names: ['cristiano ronaldo', 'c. ronaldo'], year: '2016', rating: 94 },
  { names: ['cristiano ronaldo', 'c. ronaldo'], year: '2008', rating: 94 },
  { names: ['cristiano ronaldo', 'c. ronaldo'], year: '2018', rating: 94 },
  { names: ['cristiano ronaldo', 'c. ronaldo'], year: '2012', rating: 94 },
  { names: ['cristiano ronaldo', 'c. ronaldo'], year: '2021', rating: 89 },
  { names: ['cristiano ronaldo', 'c. ronaldo'], year: '2024', rating: 86 },
  { names: ['cristiano ronaldo', 'c. ronaldo'], year: '2025', rating: 85 },
  { names: ['cristiano ronaldo', 'c. ronaldo'], year: '2026', rating: 84 },
  { names: ['cristiano ronaldo', 'c. ronaldo'], rating: 93 },

  // --- DIEGO MARADONA ---
  { names: ['diego maradona', 'diego armando maradona', 'maradona'], year: '1986', rating: 96 },
  { names: ['diego maradona', 'diego armando maradona', 'maradona'], year: '1989', rating: 94 },
  { names: ['diego maradona', 'diego armando maradona', 'maradona'], year: '1990', rating: 92 },
  { names: ['diego maradona', 'diego armando maradona', 'maradona'], rating: 93 },

  // --- PELÉ ---
  { names: ['pelé', 'pele', 'edson arantes do nascimento'], year: '1970', rating: 96 },
  { names: ['pelé', 'pele', 'edson arantes do nascimento'], year: '1958', rating: 93 },
  { names: ['pelé', 'pele', 'edson arantes do nascimento'], year: '1962', rating: 94 },
  { names: ['pelé', 'pele', 'edson arantes do nascimento'], rating: 94 },

  // --- RONALDO NAZÁRIO (EL FENÓMENO) ---
  { names: ['ronaldo nazário', 'ronaldo nazario', 'ronaldo (fenómeno)', 'ronaldo fenómeno', 'ronaldo (el fenómeno)'], year: '1997', rating: 95 },
  { names: ['ronaldo nazário', 'ronaldo nazario', 'ronaldo (fenómeno)', 'ronaldo fenómeno', 'ronaldo (el fenómeno)'], year: '1998', rating: 95 },
  { names: ['ronaldo nazário', 'ronaldo nazario', 'ronaldo (fenómeno)', 'ronaldo fenómeno', 'ronaldo (el fenómeno)'], year: '2002', rating: 94 },
  { names: ['ronaldo nazário', 'ronaldo nazario', 'ronaldo (fenómeno)', 'ronaldo fenómeno', 'ronaldo (el fenómeno)'], year: '2003', rating: 91 },
  { names: ['ronaldo nazário', 'ronaldo nazario', 'ronaldo (fenómeno)', 'ronaldo fenómeno', 'ronaldo (el fenómeno)'], rating: 93 },

  // --- ZINEDINE ZIDANE ---
  { names: ['zinedine zidane', 'zidane'], year: '1998', rating: 94 },
  { names: ['zinedine zidane', 'zidane'], year: '2000', rating: 94 },
  { names: ['zinedine zidane', 'zidane'], year: '2002', rating: 93 },
  { names: ['zinedine zidane', 'zidane'], year: '2006', rating: 92 },
  { names: ['zinedine zidane', 'zidane'], rating: 92 },

  // --- RONALDINHO ---
  { names: ['ronaldinho', 'ronaldinho gaúcho', 'ronaldinho gaucho'], year: '2005', rating: 94 },
  { names: ['ronaldinho', 'ronaldinho gaúcho', 'ronaldinho gaucho'], year: '2006', rating: 94 },
  { names: ['ronaldinho', 'ronaldinho gaúcho', 'ronaldinho gaucho'], year: '2002', rating: 90 },
  { names: ['ronaldinho', 'ronaldinho gaúcho', 'ronaldinho gaucho'], rating: 92 },

  // --- JOHAN CRUYFF ---
  { names: ['johan cruyff'], year: '1974', rating: 95 },
  { names: ['johan cruyff'], year: '1972', rating: 94 },
  { names: ['johan cruyff'], rating: 93 },

  // --- FRANZ BECKENBAUER ---
  { names: ['franz beckenbauer', 'beckenbauer'], year: '1974', rating: 94 },
  { names: ['franz beckenbauer', 'beckenbauer'], rating: 93 },

  // --- ALFREDO DI STÉFANO & FERENC PUSKÁS ---
  { names: ['alfredo di stéfano', 'di stéfano', 'di stefano'], year: '1960', rating: 94 },
  { names: ['alfredo di stéfano', 'di stéfano', 'di stefano'], rating: 93 },
  { names: ['ferenc puskás', 'ferenc puskas', 'puskás'], year: '1954', rating: 94 },
  { names: ['ferenc puskás', 'ferenc puskas', 'puskás'], rating: 93 },

  // --- GERD MÜLLER, MARCO VAN BASTEN, MICHEL PLATINI ---
  { names: ['gerd müller', 'gerd muller'], year: '1974', rating: 93 },
  { names: ['gerd müller', 'gerd muller'], rating: 92 },
  { names: ['michel platini', 'platini'], year: '1984', rating: 94 },
  { names: ['michel platini', 'platini'], rating: 92 },
  { names: ['marco van basten', 'van basten'], year: '1988', rating: 94 },
  { names: ['marco van basten', 'van basten'], year: '1989', rating: 93 },
  { names: ['marco van basten', 'van basten'], rating: 92 },

  // --- ANDRÉS INIESTA & XAVI HERNÁNDEZ ---
  { names: ['andrés iniesta', 'andres iniesta', 'iniesta'], year: '2010', rating: 92 },
  { names: ['andrés iniesta', 'andres iniesta', 'iniesta'], year: '2012', rating: 92 },
  { names: ['andrés iniesta', 'andres iniesta', 'iniesta'], year: '2015', rating: 90 },
  { names: ['andrés iniesta', 'andres iniesta', 'iniesta'], rating: 89 },
  { names: ['xavi hernández', 'xavi hernandez', 'xavi'], year: '2010', rating: 92 },
  { names: ['xavi hernández', 'xavi hernandez', 'xavi'], year: '2011', rating: 92 },
  { names: ['xavi hernández', 'xavi hernandez', 'xavi'], rating: 89 },

  // --- LUKA MODRIC, KARIM BENZEMA, ROBERT LEWANDOWSKI ---
  { names: ['luka modrić', 'luka modric', 'modric', 'modrić'], year: '2018', rating: 92 },
  { names: ['luka modrić', 'luka modric', 'modric', 'modrić'], year: '2017', rating: 90 },
  { names: ['luka modrić', 'luka modric', 'modric', 'modrić'], rating: 88 },
  { names: ['karim benzema', 'benzema'], year: '2022', rating: 92 },
  { names: ['karim benzema', 'benzema'], rating: 88 },
  { names: ['robert lewandowski', 'lewandowski'], year: '2020', rating: 92 },
  { names: ['robert lewandowski', 'lewandowski'], year: '2021', rating: 91 },
  { names: ['robert lewandowski', 'lewandowski'], rating: 88 },

  // --- ERLING HAALAND & KYLIAN MBAPPÉ ---
  { names: ['erling haaland', 'haaland'], year: '2023', rating: 91 },
  { names: ['erling haaland', 'haaland'], year: '2024', rating: 90 },
  { names: ['erling haaland', 'haaland'], year: '2025', rating: 90 },
  { names: ['erling haaland', 'haaland'], year: '2026', rating: 91 },
  { names: ['kylian mbappé', 'kylian mbappe', 'mbappé', 'mbappe'], year: '2022', rating: 92 },
  { names: ['kylian mbappé', 'kylian mbappe', 'mbappé', 'mbappe'], year: '2018', rating: 88 },
  { names: ['kylian mbappé', 'kylian mbappe', 'mbappé', 'mbappe'], year: '2024', rating: 91 },
  { names: ['kylian mbappé', 'kylian mbappe', 'mbappé', 'mbappe'], year: '2025', rating: 91 },
  { names: ['kylian mbappé', 'kylian mbappe', 'mbappé', 'mbappe'], year: '2026', rating: 91 },

  // --- NEYMAR, SUÁREZ, BALE, SALAH, DE BRUYNE ---
  { names: ['neymar jr', 'neymar', 'neymar jr.'], year: '2015', rating: 91 },
  { names: ['neymar jr', 'neymar', 'neymar jr.'], year: '2017', rating: 91 },
  { names: ['neymar jr', 'neymar', 'neymar jr.'], rating: 88 },
  { names: ['luis suárez', 'luis suarez'], year: '2016', rating: 92 },
  { names: ['luis suárez', 'luis suarez'], year: '2015', rating: 91 },
  { names: ['luis suárez', 'luis suarez'], rating: 88 },
  { names: ['gareth bale', 'bale'], year: '2014', rating: 89 },
  { names: ['gareth bale', 'bale'], year: '2016', rating: 90 },
  { names: ['kevin de bruyne', 'de bruyne'], year: '2023', rating: 91 },
  { names: ['kevin de bruyne', 'de bruyne'], rating: 89 },
  { names: ['mohamed salah', 'salah'], year: '2019', rating: 90 },
  { names: ['mohamed salah', 'salah'], rating: 88 },
  { names: ['vinícius júnior', 'vinicius jr', 'vinicius junior', 'vinícius jr.'], year: '2024', rating: 91 },
  { names: ['jude bellingham', 'bellingham'], year: '2024', rating: 90 },
  { names: ['rodri (balón de oro)', 'rodri'], year: '2024', rating: 91 },
  { names: ['lamine yamal'], year: '2024', rating: 86 },
  { names: ['lamine yamal'], year: '2025', rating: 88 },
  { names: ['lamine yamal'], year: '2026', rating: 89 },

  // --- THIERRY HENRY, BERGKAMP, ROONEY ---
  { names: ['thierry henry', 'henry'], year: '2004', rating: 93 },
  { names: ['thierry henry', 'henry'], year: '2006', rating: 91 },
  { names: ['thierry henry', 'henry'], rating: 89 },
  { names: ['dennis bergkamp', 'bergkamp'], year: '1998', rating: 90 },
  { names: ['wayne rooney', 'rooney'], year: '2008', rating: 90 },

  // --- MALDINI, BARESI, RAMOS, VAN DIJK, PUYOL, CANNAVARO ---
  { names: ['paolo maldini', 'maldini'], year: '1994', rating: 92 },
  { names: ['paolo maldini', 'maldini'], year: '2003', rating: 91 },
  { names: ['paolo maldini', 'maldini'], rating: 89 },
  { names: ['franco baresi', 'baresi'], year: '1989', rating: 93 },
  { names: ['franco baresi', 'baresi'], rating: 91 },
  { names: ['fabio cannavaro', 'cannavaro'], year: '2006', rating: 92 },
  { names: ['sergio ramos', 'ramos'], year: '2017', rating: 90 },
  { names: ['sergio ramos', 'ramos'], year: '2014', rating: 89 },
  { names: ['virgil van dijk', 'van dijk'], year: '2019', rating: 90 },
  { names: ['carles puyol', 'puyol'], year: '2010', rating: 89 },
  { names: ['roberto carlos'], year: '2002', rating: 90 },
  { names: ['cafú', 'cafu'], year: '2002', rating: 89 },
  { names: ['dani alves', 'alves'], year: '2011', rating: 89 },

  // --- GOALKEEPERS ---
  { names: ['gianluigi buffon', 'buffon'], year: '2006', rating: 92 },
  { names: ['gianluigi buffon', 'buffon'], rating: 89 },
  { names: ['iker casillas', 'casillas'], year: '2010', rating: 92 },
  { names: ['iker casillas', 'casillas'], year: '2008', rating: 90 },
  { names: ['iker casillas', 'casillas'], year: '2012', rating: 91 },
  { names: ['iker casillas', 'casillas'], rating: 88 },
  { names: ['manuel neuer', 'neuer'], year: '2014', rating: 92 },
  { names: ['manuel neuer', 'neuer'], year: '2013', rating: 90 },
  { names: ['manuel neuer', 'neuer'], year: '2020', rating: 90 },
  { names: ['manuel neuer', 'neuer'], rating: 88 },
  { names: ['lev yashin', 'yashin'], year: '1963', rating: 92 },
  { names: ['lev yashin', 'yashin'], rating: 90 },
  { names: ['thibaut courtois', 'courtois'], year: '2022', rating: 90 },
  { names: ['alisson becker', 'alisson'], year: '2019', rating: 89 },
  { names: ['emiliano martínez (dibu)', 'emiliano martínez', 'dibu martínez'], year: '2022', rating: 84 },

  // --- BAGGIO, ROMÁRIO, RIVALDO, KAKÁ, NEDVED, SHEVCHENKO, FIGO ---
  { names: ['roberto baggio', 'baggio'], year: '1994', rating: 93 },
  { names: ['romário', 'romario'], year: '1994', rating: 94 },
  { names: ['rivaldo'], year: '1999', rating: 93 },
  { names: ['rivaldo'], year: '2002', rating: 91 },
  { names: ['kaká', 'kaka'], year: '2007', rating: 93 },
  { names: ['pavel nedvěd', 'pavel nedved', 'nedved'], year: '2003', rating: 91 },
  { names: ['andriy shevchenko', 'shevchenko'], year: '2004', rating: 92 },
  { names: ['andriy shevchenko', 'shevchenko'], year: '2003', rating: 91 },
  { names: ['luís figo', 'luis figo', 'figo'], year: '2000', rating: 92 },
  { names: ['george best', 'best'], year: '1968', rating: 93 },
  { names: ['eusébio', 'eusebio'], year: '1962', rating: 94 },
  { names: ['eusébio', 'eusebio'], year: '1966', rating: 94 },
  { names: ['zico'], year: '1982', rating: 93 },
  { names: ['sócrates', 'socrates'], year: '1982', rating: 90 },
  { names: ['garrincha'], year: '1962', rating: 94 },
  { names: ['lothar matthäus', 'matthäus', 'matthaus'], year: '1990', rating: 93 },
  { names: ['ruud gullit', 'gullit'], year: '1989', rating: 92 },
  { names: ['frank rijkaard', 'rijkaard'], year: '1989', rating: 91 },
  { names: ['hristo stoichkov', 'stoichkov'], year: '1994', rating: 92 },
  { names: ['michael laudrup', 'laudrup'], year: '1992', rating: 91 },
  { names: ['gabriel batistuta (batigol)', 'gabriel batistuta', 'batistuta'], year: '1998', rating: 91 },
  { names: ['gabriel batistuta (batigol)', 'gabriel batistuta', 'batistuta'], year: '1999', rating: 91 },
  { names: ['juan román riquelme', 'riquelme'], year: '2000', rating: 90 },
  { names: ['juan román riquelme', 'riquelme'], year: '2007', rating: 90 },
  { names: ['juan román riquelme', 'riquelme'], year: '2006', rating: 89 },
];

function isGoatMatch(playerName: string, goatNames: string[]): boolean {
  const p = playerName.toLowerCase().trim();
  for (const n of goatNames) {
    const target = n.toLowerCase().trim();
    if (p === target) return true;
    if (target === 'cruyff' && p.includes('jordi')) return false;
    if (target === 'müller' && (p.includes('thomas') || p.includes('t. müller') || p.includes('t. muller'))) return false;
    if (target === 'hazard' && p.includes('thorgan')) return false;
    if (target === 'alcántara' && p.includes('rafa')) return false;
    if (target === 'suárez' && (p.includes('denis') || p.includes('damián') || p.includes('mario') || p.includes('jeffrén'))) return false;
    if (target === 'hernández' && (p.includes('lucas') || p.includes('theo') || p.includes('chicharito') || p.includes('pablo'))) return false;
    if (target === 'silva' && !target.includes(' ') && (p.includes('thiago') || p.includes('antónio') || p.includes('rafa') || p.includes('bernardo') || p.includes('david'))) return false;

    // Check words in candidate
    const words = p.split(/[\s\-()]+/).filter(Boolean);
    if (words.includes(target)) return true;
    if (p.includes(target) && target.includes(' ')) return true;
  }
  return false;
}

export function calibratePlayerRating(
  name: string,
  rawRating: number,
  year: string,
  teamTier: 'legendary' | 'gold' | 'silver' | 'bronze' = 'gold',
  isTeamStar: boolean = false
): number {
  // 1. Check exact GOAT peak overrides
  for (const goat of PEAK_GOATS) {
    if (isGoatMatch(name, goat.names)) {
      if (!goat.year || goat.year === year) {
        return goat.rating;
      }
    }
  }

  // 2. Star of a team / standout player in that year
  if (isTeamStar || rawRating >= 92) {
    if (teamTier === 'legendary') {
      const mapped = 85 + Math.round((rawRating - 92) * 0.75);
      return Math.min(88, Math.max(84, mapped));
    }
    const mapped = 81 + Math.round((rawRating - 88) * 0.6);
    return Math.min(85, Math.max(80, mapped));
  }

  // 3. High quality starters in top teams (rawRating 88-91) -> 80 - 84
  if (rawRating >= 88) {
    const mapped = 80 + Math.round((rawRating - 88) * 0.8);
    return Math.min(84, Math.max(80, mapped));
  }

  // 4. Standard starters in top league teams (rawRating 83-87) -> 76 - 79
  if (rawRating >= 83) {
    const mapped = 76 + Math.round((rawRating - 83) * 0.75);
    return Math.min(79, Math.max(76, mapped));
  }

  // 5. Solid starters in mid-tier clubs & standard national teams (rawRating 79-82) -> 71 - 75
  if (rawRating >= 79) {
    const mapped = 71 + Math.round((rawRating - 79) * 0.8);
    return Math.min(75, Math.max(71, mapped));
  }

  // 6. Modest / minor squads / underdog nations (rawRating 74-78) -> 66 - 70
  if (rawRating >= 74) {
    const mapped = 66 + Math.round((rawRating - 74) * 0.8);
    return Math.min(70, Math.max(66, mapped));
  }

  // 7. Lowest tier / minor players (62 - 65)
  return Math.min(65, Math.max(60, rawRating - 10));
}
