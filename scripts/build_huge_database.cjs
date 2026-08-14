const fs = require('fs');
const path = require('path');

// Helper to normalize position to valid Position types
function normalizePositions(positions) {
  return positions.map(pos => {
    if (pos === 'LM') return 'LW';
    if (pos === 'RM') return 'RW';
    return pos;
  });
}

// Helper to create team with authentic players
function createTeam(id, name, shortCode, type, year, tag, flag, country, tier, players) {
  return {
    id,
    name,
    shortCode,
    type,
    year: String(year),
    tag,
    flag,
    country,
    tier: tier || 'gold',
    players: players.map((p, idx) => {
      const validPositions = normalizePositions(p.positions);
      return {
        id: `${id}_${idx}_${p.name.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()}`,
        number: p.number || (idx + 1),
        name: p.name,
        positions: validPositions,
        primaryPos: validPositions[0],
        rating: p.rating,
        bonus: p.bonus,
        nation: p.nation || country,
        nationCode: p.nationCode || shortCode.slice(0, 2).toUpperCase(),
        flag: p.flag || flag,
        club: p.club || name,
        year: String(year),
        tournament: type
      };
    })
  };
}

const ALL_TEAMS = [];

// ==========================================
// 1. SELECCIONES HISTÓRICAS (MUNDIALES & EURO)
// ==========================================

// Alemania
ALL_TEAMS.push(createTeam('ger_1954', 'Alemania', 'GER', 'worldcup', 1954, 'Mundial 1954', '🇩🇪', 'Alemania', 'legendary', [
  { name: 'Fritz Walter', positions: ['AM', 'ST'], rating: 94, bonus: 1, number: 10 },
  { name: 'Helmut Rahn', positions: ['RW', 'ST'], rating: 92, number: 12 },
  { name: 'Horst Eckel', positions: ['DM', 'CM'], rating: 88, number: 6 },
  { name: 'Max Morlock', positions: ['AM', 'ST'], rating: 89, number: 13 },
  { name: 'Hans Schäfer', positions: ['LW'], rating: 87, number: 20 },
  { name: 'Ottmar Walter', positions: ['ST'], rating: 87, number: 15 },
  { name: 'Werner Liebrich', positions: ['CB'], rating: 88, number: 10 },
  { name: 'Jupp Posipal', positions: ['CB', 'RB'], rating: 87, number: 7 },
  { name: 'Werner Kohlmeyer', positions: ['LB'], rating: 85, number: 3 },
  { name: 'Toni Turek', positions: ['GK'], rating: 89, number: 1 },
  { name: 'Karl Mai', positions: ['DM', 'CM'], rating: 86, number: 8 }
]));

ALL_TEAMS.push(createTeam('ger_1974', 'Alemania', 'GER', 'worldcup', 1974, 'Mundial 1974', '🇩🇪', 'Alemania', 'legendary', [
  { name: 'Franz Beckenbauer', positions: ['CB', 'DM'], rating: 98, bonus: 1, number: 5 },
  { name: 'Gerd Müller', positions: ['ST'], rating: 96, number: 13 },
  { name: 'Sepp Maier', positions: ['GK'], rating: 94, number: 1 },
  { name: 'Paul Breitner', positions: ['LB', 'CM'], rating: 93, number: 3 },
  { name: 'Wolfgang Overath', positions: ['CM', 'AM'], rating: 91, number: 12 },
  { name: 'Berti Vogts', positions: ['RB'], rating: 91, number: 2 },
  { name: 'Uli Hoeness', positions: ['RW', 'AM'], rating: 89, number: 14 },
  { name: 'Rainer Bonhof', positions: ['DM', 'CM'], rating: 88, number: 16 },
  { name: 'Georg Schwarzenbeck', positions: ['CB'], rating: 88, number: 4 },
  { name: 'Bernd Hölzenbein', positions: ['LW', 'ST'], rating: 87, number: 17 },
  { name: 'Jürgen Grabowski', positions: ['RW'], rating: 88, number: 9 }
]));

ALL_TEAMS.push(createTeam('ger_1990', 'Alemania', 'GER', 'worldcup', 1990, 'Mundial 1990', '🇩🇪', 'Alemania', 'legendary', [
  { name: 'Lothar Matthäus', positions: ['CM', 'DM'], rating: 96, bonus: 1, number: 10 },
  { name: 'Jürgen Klinsmann', positions: ['ST'], rating: 92, number: 18 },
  { name: 'Rudi Völler', positions: ['ST'], rating: 91, number: 9 },
  { name: 'Andreas Brehme', positions: ['LB', 'LM'], rating: 92, number: 3 },
  { name: 'Jürgen Kohler', positions: ['CB'], rating: 91, number: 4 },
  { name: 'Bodo Illgner', positions: ['GK'], rating: 89, number: 1 },
  { name: 'Thomas Hässler', positions: ['RW', 'AM'], rating: 90, number: 8 },
  { name: 'Guido Buchwald', positions: ['CB', 'DM'], rating: 88, number: 6 },
  { name: 'Klaus Augenthaler', positions: ['CB'], rating: 88, number: 5 },
  { name: 'Thomas Berthold', positions: ['RB', 'CB'], rating: 87, number: 14 },
  { name: 'Pierre Littbarski', positions: ['LW', 'AM'], rating: 88, number: 7 }
]));

ALL_TEAMS.push(createTeam('ger_2014', 'Alemania', 'GER', 'worldcup', 2014, 'Mundial 2014', '🇩🇪', 'Alemania', 'legendary', [
  { name: 'Manuel Neuer', positions: ['GK'], rating: 95, bonus: 1, number: 1 },
  { name: 'Toni Kroos', positions: ['CM'], rating: 93, number: 18 },
  { name: 'Thomas Müller', positions: ['RW', 'ST'], rating: 92, number: 13 },
  { name: 'Bastian Schweinsteiger', positions: ['DM', 'CM'], rating: 92, number: 7 },
  { name: 'Philipp Lahm', positions: ['RB', 'DM'], rating: 94, number: 16 },
  { name: 'Mats Hummels', positions: ['CB'], rating: 91, number: 5 },
  { name: 'Mesut Özil', positions: ['AM', 'LW'], rating: 90, number: 8 },
  { name: 'Miroslav Klose', positions: ['ST'], rating: 89, number: 11 },
  { name: 'Jérôme Boateng', positions: ['CB'], rating: 89, number: 20 },
  { name: 'Benedikt Höwedes', positions: ['LB', 'CB'], rating: 85, number: 4 },
  { name: 'Sami Khedira', positions: ['DM', 'CM'], rating: 88, number: 6 }
]));

// Argentina
ALL_TEAMS.push(createTeam('arg_1978', 'Argentina', 'ARG', 'worldcup', 1978, 'Mundial 1978', '🇦🇷', 'Argentina', 'legendary', [
  { name: 'Mario Kempes', positions: ['ST', 'AM'], rating: 96, bonus: 1, number: 10 },
  { name: 'Daniel Passarella', positions: ['CB'], rating: 94, number: 19 },
  { name: 'Ubaldo Fillol', positions: ['GK'], rating: 93, number: 5 },
  { name: 'Osvaldo Ardiles', positions: ['CM'], rating: 90, number: 1 },
  { name: 'Leopoldo Luque', positions: ['ST'], rating: 89, number: 14 },
  { name: 'Alberto Tarantini', positions: ['LB'], rating: 88, number: 20 },
  { name: 'Jorge Olguín', positions: ['RB'], rating: 86, number: 15 },
  { name: 'Luis Galván', positions: ['CB'], rating: 87, number: 7 },
  { name: 'Américo Gallego', positions: ['DM'], rating: 88, number: 6 },
  { name: 'Daniel Bertoni', positions: ['RW', 'LW'], rating: 88, number: 4 },
  { name: 'Oscar Ortiz', positions: ['LW'], rating: 85, number: 16 }
]));

ALL_TEAMS.push(createTeam('arg_1990', 'Argentina', 'ARG', 'worldcup', 1990, 'Mundial 1990', '🇦🇷', 'Argentina', 'gold', [
  { name: 'Diego Maradona', positions: ['AM', 'ST'], rating: 97, bonus: 1, number: 10 },
  { name: 'Claudio Caniggia', positions: ['ST', 'RW'], rating: 90, number: 8 },
  { name: 'Sergio Goycochea', positions: ['GK'], rating: 91, number: 12 },
  { name: 'Oscar Ruggeri', positions: ['CB'], rating: 89, number: 19 },
  { name: 'Jorge Burruchaga', positions: ['AM', 'CM'], rating: 87, number: 7 },
  { name: 'Juan Simón', positions: ['CB'], rating: 85, number: 20 },
  { name: 'José Basualdo', positions: ['CM', 'RB'], rating: 84, number: 4 },
  { name: 'José Serrizuela', positions: ['CB'], rating: 83, number: 18 },
  { name: 'Pedro Troglio', positions: ['CM'], rating: 84, number: 21 },
  { name: 'Roberto Sensini', positions: ['LB', 'CB'], rating: 86, number: 17 },
  { name: 'Gustavo Dezotti', positions: ['ST'], rating: 82, number: 9 }
]));

ALL_TEAMS.push(createTeam('arg_2014', 'Argentina', 'ARG', 'worldcup', 2014, 'Mundial 2014', '🇦🇷', 'Argentina', 'gold', [
  { name: 'Lionel Messi', positions: ['RW', 'AM'], rating: 98, bonus: 1, number: 10 },
  { name: 'Javier Mascherano', positions: ['DM', 'CB'], rating: 92, number: 14 },
  { name: 'Ángel Di María', positions: ['RW', 'CM'], rating: 90, number: 7 },
  { name: 'Sergio Agüero', positions: ['ST'], rating: 89, number: 20 },
  { name: 'Gonzalo Higuaín', positions: ['ST'], rating: 88, number: 9 },
  { name: 'Sergio Romero', positions: ['GK'], rating: 87, number: 1 },
  { name: 'Ezequiel Garay', positions: ['CB'], rating: 87, number: 2 },
  { name: 'Pablo Zabaleta', positions: ['RB'], rating: 86, number: 4 },
  { name: 'Marcos Rojo', positions: ['LB'], rating: 84, number: 16 },
  { name: 'Martín Demichelis', positions: ['CB'], rating: 84, number: 15 },
  { name: 'Lucas Biglia', positions: ['DM', 'CM'], rating: 85, number: 6 }
]));

// Brasil
ALL_TEAMS.push(createTeam('bra_1958', 'Brasil', 'BRA', 'worldcup', 1958, 'Mundial 1958', '🇧🇷', 'Brasil', 'legendary', [
  { name: 'Pelé', positions: ['ST', 'AM'], rating: 97, bonus: 1, number: 10 },
  { name: 'Garrincha', positions: ['RW'], rating: 96, number: 11 },
  { name: 'Didi', positions: ['CM', 'AM'], rating: 95, number: 6 },
  { name: 'Vavá', positions: ['ST'], rating: 90, number: 20 },
  { name: 'Mário Zagallo', positions: ['LW', 'LM'], rating: 90, number: 7 },
  { name: 'Nilton Santos', positions: ['LB'], rating: 94, number: 12 },
  { name: 'Djalma Santos', positions: ['RB'], rating: 94, number: 4 },
  { name: 'Bellini', positions: ['CB'], rating: 90, number: 2 },
  { name: 'Orlando Peçanha', positions: ['CB'], rating: 88, number: 15 },
  { name: 'Zito', positions: ['DM', 'CM'], rating: 89, number: 19 },
  { name: 'Gylmar', positions: ['GK'], rating: 91, number: 3 }
]));

ALL_TEAMS.push(createTeam('bra_1962', 'Brasil', 'BRA', 'worldcup', 1962, 'Mundial 1962', '🇧🇷', 'Brasil', 'legendary', [
  { name: 'Garrincha', positions: ['RW', 'ST'], rating: 98, bonus: 1, number: 7 },
  { name: 'Amarildo', positions: ['ST', 'LW'], rating: 90, number: 20 },
  { name: 'Didi', positions: ['CM'], rating: 93, number: 8 },
  { name: 'Vavá', positions: ['ST'], rating: 91, number: 19 },
  { name: 'Mário Zagallo', positions: ['LW'], rating: 89, number: 21 },
  { name: 'Zito', positions: ['DM', 'CM'], rating: 90, number: 4 },
  { name: 'Djalma Santos', positions: ['RB'], rating: 92, number: 2 },
  { name: 'Nilton Santos', positions: ['LB'], rating: 92, number: 6 },
  { name: 'Mauro Ramos', positions: ['CB'], rating: 89, number: 3 },
  { name: 'Zózimo', positions: ['CB'], rating: 88, number: 5 },
  { name: 'Gylmar', positions: ['GK'], rating: 90, number: 1 }
]));

ALL_TEAMS.push(createTeam('bra_1982', 'Brasil', 'BRA', 'worldcup', 1982, 'Mundial 1982', '🇧🇷', 'Brasil', 'legendary', [
  { name: 'Zico', positions: ['AM', 'ST'], rating: 97, bonus: 1, number: 10 },
  { name: 'Sócrates', positions: ['CM', 'AM'], rating: 95, number: 8 },
  { name: 'Falcão', positions: ['DM', 'CM'], rating: 94, number: 15 },
  { name: 'Éder', positions: ['LW', 'ST'], rating: 90, number: 11 },
  { name: 'Júnior', positions: ['LB', 'CM'], rating: 93, number: 6 },
  { name: 'Leandro', positions: ['RB'], rating: 91, number: 2 },
  { name: 'Toninho Cerezo', positions: ['CM', 'DM'], rating: 90, number: 5 },
  { name: 'Oscar', positions: ['CB'], rating: 88, number: 3 },
  { name: 'Luizinho', positions: ['CB'], rating: 87, number: 4 },
  { name: 'Serginho Chulapa', positions: ['ST'], rating: 85, number: 9 },
  { name: 'Waldir Peres', positions: ['GK'], rating: 83, number: 1 }
]));

ALL_TEAMS.push(createTeam('bra_1994', 'Brasil', 'BRA', 'worldcup', 1994, 'Mundial 1994', '🇧🇷', 'Brasil', 'legendary', [
  { name: 'Romário', positions: ['ST'], rating: 97, bonus: 1, number: 11 },
  { name: 'Bebeto', positions: ['ST', 'AM'], rating: 92, number: 7 },
  { name: 'Dunga', positions: ['DM'], rating: 92, number: 8 },
  { name: 'Mauro Silva', positions: ['DM'], rating: 91, number: 5 },
  { name: 'Cláudio Taffarel', positions: ['GK'], rating: 91, number: 1 },
  { name: 'Jorginho', positions: ['RB'], rating: 90, number: 2 },
  { name: 'Branco', positions: ['LB'], rating: 88, number: 6 },
  { name: 'Aldair', positions: ['CB'], rating: 91, number: 13 },
  { name: 'Márcio Santos', positions: ['CB'], rating: 88, number: 15 },
  { name: 'Zinho', positions: ['LM', 'CM'], rating: 87, number: 9 },
  { name: 'Mazinho', positions: ['RM', 'CM'], rating: 87, number: 17 }
]));

ALL_TEAMS.push(createTeam('bra_2002', 'Brasil', 'BRA', 'worldcup', 2002, 'Mundial 2002', '🇧🇷', 'Brasil', 'legendary', [
  { name: 'Ronaldo Nazário', positions: ['ST'], rating: 98, bonus: 1, number: 9 },
  { name: 'Ronaldinho', positions: ['AM', 'LW'], rating: 96, number: 11 },
  { name: 'Rivaldo', positions: ['AM', 'ST'], rating: 95, number: 10 },
  { name: 'Roberto Carlos', positions: ['LB'], rating: 94, number: 6 },
  { name: 'Cafu', positions: ['RB'], rating: 94, number: 2 },
  { name: 'Lúcio', positions: ['CB'], rating: 90, number: 3 },
  { name: 'Marcos', positions: ['GK'], rating: 89, number: 1 },
  { name: 'Gilberto Silva', positions: ['DM'], rating: 89, number: 8 },
  { name: 'Kléberson', positions: ['CM', 'RM'], rating: 86, number: 15 },
  { name: 'Edmílson', positions: ['CB', 'DM'], rating: 87, number: 5 },
  { name: 'Roque Júnior', positions: ['CB'], rating: 85, number: 4 }
]));

// España
ALL_TEAMS.push(createTeam('esp_2010', 'España', 'ESP', 'worldcup', 2010, 'Mundial 2010', '🇪🇸', 'España', 'legendary', [
  { name: 'Andrés Iniesta', positions: ['CM', 'LW'], rating: 96, bonus: 1, number: 6 },
  { name: 'Xavi Hernández', positions: ['CM'], rating: 96, number: 8 },
  { name: 'Iker Casillas', positions: ['GK'], rating: 95, number: 1 },
  { name: 'David Villa', positions: ['ST', 'LW'], rating: 94, number: 7 },
  { name: 'Sergio Ramos', positions: ['RB', 'CB'], rating: 92, number: 15 },
  { name: 'Carles Puyol', positions: ['CB'], rating: 93, number: 5 },
  { name: 'Gerard Piqué', positions: ['CB'], rating: 91, number: 3 },
  { name: 'Sergio Busquets', positions: ['DM'], rating: 92, number: 16 },
  { name: 'Xabi Alonso', positions: ['CM', 'DM'], rating: 92, number: 14 },
  { name: 'Joan Capdevila', positions: ['LB'], rating: 87, number: 11 },
  { name: 'Pedro Rodríguez', positions: ['RW', 'LW'], rating: 88, number: 18 }
]));

ALL_TEAMS.push(createTeam('esp_2024', 'España', 'ESP', 'worldcup', 2024, 'Euro 2024', '🇪🇸', 'España', 'legendary', [
  { name: 'Rodri Hernández', positions: ['DM', 'CM'], rating: 95, bonus: 1, number: 16 },
  { name: 'Lamine Yamal', positions: ['RW'], rating: 93, number: 19 },
  { name: 'Nico Williams', positions: ['LW'], rating: 91, number: 17 },
  { name: 'Dani Olmo', positions: ['AM', 'LW'], rating: 90, number: 10 },
  { name: 'Fabián Ruiz', positions: ['CM'], rating: 89, number: 8 },
  { name: 'Dani Carvajal', positions: ['RB'], rating: 91, number: 2 },
  { name: 'Marc Cucurella', positions: ['LB'], rating: 88, number: 24 },
  { name: 'Aymeric Laporte', positions: ['CB'], rating: 88, number: 14 },
  { name: 'Robin Le Normand', positions: ['CB'], rating: 87, number: 3 },
  { name: 'Unai Simón', positions: ['GK'], rating: 89, number: 23 },
  { name: 'Álvaro Morata', positions: ['ST'], rating: 87, number: 7 }
]));

// Francia
ALL_TEAMS.push(createTeam('fra_1998', 'Francia', 'FRA', 'worldcup', 1998, 'Mundial 1998', '🇫🇷', 'Francia', 'legendary', [
  { name: 'Zinedine Zidane', positions: ['AM'], rating: 97, bonus: 1, number: 10 },
  { name: 'Thierry Henry', positions: ['ST', 'LW'], rating: 89, number: 12 },
  { name: 'Didier Deschamps', positions: ['DM'], rating: 91, number: 7 },
  { name: 'Marcel Desailly', positions: ['CB', 'DM'], rating: 93, number: 8 },
  { name: 'Lilian Thuram', positions: ['RB', 'CB'], rating: 93, number: 15 },
  { name: 'Laurent Blanc', positions: ['CB'], rating: 91, number: 5 },
  { name: 'Bixente Lizarazu', positions: ['LB'], rating: 91, number: 3 },
  { name: 'Fabien Barthez', positions: ['GK'], rating: 92, number: 16 },
  { name: 'Emmanuel Petit', positions: ['CM', 'DM'], rating: 89, number: 17 },
  { name: 'Youri Djorkaeff', positions: ['AM', 'ST'], rating: 89, number: 6 },
  { name: 'Stéphane Guivarc\'h', positions: ['ST'], rating: 83, number: 9 }
]));

ALL_TEAMS.push(createTeam('fra_2018', 'Francia', 'FRA', 'worldcup', 2018, 'Mundial 2018', '🇫🇷', 'Francia', 'legendary', [
  { name: 'Kylian Mbappé', positions: ['RW', 'ST'], rating: 95, bonus: 1, number: 10 },
  { name: 'Antoine Griezmann', positions: ['AM', 'ST'], rating: 93, number: 7 },
  { name: 'N\'Golo Kanté', positions: ['DM', 'CM'], rating: 94, number: 13 },
  { name: 'Paul Pogba', positions: ['CM'], rating: 91, number: 6 },
  { name: 'Raphaël Varane', positions: ['CB'], rating: 91, number: 4 },
  { name: 'Hugo Lloris', positions: ['GK'], rating: 90, number: 1 },
  { name: 'Samuel Umtiti', positions: ['CB'], rating: 89, number: 5 },
  { name: 'Lucas Hernández', positions: ['LB', 'CB'], rating: 87, number: 21 },
  { name: 'Benjamin Pavard', positions: ['RB'], rating: 86, number: 2 },
  { name: 'Olivier Giroud', positions: ['ST'], rating: 87, number: 9 },
  { name: 'Blaise Matuidi', positions: ['LM', 'CM'], rating: 87, number: 14 }
]));

// Italia
ALL_TEAMS.push(createTeam('ita_1982', 'Italia', 'ITA', 'worldcup', 1982, 'Mundial 1982', '🇮🇹', 'Italia', 'legendary', [
  { name: 'Paolo Rossi', positions: ['ST'], rating: 96, bonus: 1, number: 20 },
  { name: 'Dino Zoff', positions: ['GK'], rating: 95, number: 1 },
  { name: 'Gaetano Scirea', positions: ['CB'], rating: 95, number: 7 },
  { name: 'Claudio Gentile', positions: ['RB', 'CB'], rating: 92, number: 6 },
  { name: 'Antonio Cabrini', positions: ['LB'], rating: 91, number: 4 },
  { name: 'Fulvio Collovati', positions: ['CB'], rating: 89, number: 5 },
  { name: 'Marco Tardelli', positions: ['CM', 'DM'], rating: 93, number: 14 },
  { name: 'Bruno Conti', positions: ['RW', 'LW'], rating: 92, number: 16 },
  { name: 'Giancarlo Antognoni', positions: ['AM'], rating: 90, number: 9 },
  { name: 'Gabriele Oriali', positions: ['DM'], rating: 88, number: 13 },
  { name: 'Francesco Graziani', positions: ['ST'], rating: 87, number: 19 }
]));

ALL_TEAMS.push(createTeam('ita_2006', 'Italia', 'ITA', 'worldcup', 2006, 'Mundial 2006', '🇮🇹', 'Italia', 'legendary', [
  { name: 'Fabio Cannavaro', positions: ['CB'], rating: 96, bonus: 1, number: 5 },
  { name: 'Gianluigi Buffon', positions: ['GK'], rating: 96, number: 1 },
  { name: 'Andrea Pirlo', positions: ['CM', 'DM'], rating: 95, number: 21 },
  { name: 'Francesco Totti', positions: ['AM', 'ST'], rating: 94, number: 10 },
  { name: 'Gianluca Zambrotta', positions: ['RB', 'LB'], rating: 92, number: 19 },
  { name: 'Alessandro Nesta', positions: ['CB'], rating: 93, number: 13 },
  { name: 'Gennaro Gattuso', positions: ['DM'], rating: 91, number: 8 },
  { name: 'Marco Materazzi', positions: ['CB'], rating: 89, number: 23 },
  { name: 'Fabio Grosso', positions: ['LB'], rating: 89, number: 3 },
  { name: 'Luca Toni', positions: ['ST'], rating: 89, number: 9 },
  { name: 'Mauro Camoranesi', positions: ['RW', 'RM'], rating: 88, number: 16 }
]));

// Países Bajos
ALL_TEAMS.push(createTeam('ned_1974', 'Países Bajos', 'NED', 'worldcup', 1974, 'Mundial 1974', '🇳🇱', 'Países Bajos', 'legendary', [
  { name: 'Johan Cruyff', positions: ['ST', 'AM'], rating: 98, bonus: 1, number: 14 },
  { name: 'Johan Neeskens', positions: ['CM', 'DM'], rating: 94, number: 13 },
  { name: 'Rob Rensenbrink', positions: ['LW', 'ST'], rating: 92, number: 15 },
  { name: 'Ruud Krol', positions: ['LB', 'CB'], rating: 93, number: 12 },
  { name: 'Johnny Rep', positions: ['RW', 'ST'], rating: 90, number: 16 },
  { name: 'Arie Haan', positions: ['DM', 'CB'], rating: 89, number: 2 },
  { name: 'Wim van Hanegem', positions: ['CM'], rating: 91, number: 3 },
  { name: 'Wim Suurbier', positions: ['RB'], rating: 88, number: 20 },
  { name: 'Wim Rijsbergen', positions: ['CB'], rating: 87, number: 17 },
  { name: 'Jan Jongbloed', positions: ['GK'], rating: 85, number: 8 },
  { name: 'Wim Jansen', positions: ['DM', 'CM'], rating: 87, number: 6 }
]));

// Portugal
ALL_TEAMS.push(createTeam('por_2016', 'Portugal', 'POR', 'worldcup', 2016, 'Euro 2016', '🇵🇹', 'Portugal', 'gold', [
  { name: 'Cristiano Ronaldo', positions: ['LW', 'ST'], rating: 97, bonus: 1, number: 7 },
  { name: 'Pepe', positions: ['CB'], rating: 93, number: 3 },
  { name: 'Rui Patrício', positions: ['GK'], rating: 90, number: 1 },
  { name: 'Nani', positions: ['RW', 'ST'], rating: 88, number: 17 },
  { name: 'Renato Sanches', positions: ['CM'], rating: 87, number: 16 },
  { name: 'William Carvalho', positions: ['DM'], rating: 87, number: 14 },
  { name: 'João Mário', positions: ['RM', 'CM'], rating: 86, number: 10 },
  { name: 'Adrien Silva', positions: ['CM'], rating: 85, number: 23 },
  { name: 'Raphaël Guerreiro', positions: ['LB'], rating: 87, number: 5 },
  { name: 'Cédric Soares', positions: ['RB'], rating: 84, number: 21 },
  { name: 'José Fonte', positions: ['CB'], rating: 85, number: 4 }
]));

// Croacia
ALL_TEAMS.push(createTeam('cro_2018', 'Croacia', 'CRO', 'worldcup', 2018, 'Mundial 2018', '🇭🇷', 'Croacia', 'gold', [
  { name: 'Luka Modrić', positions: ['CM', 'AM'], rating: 95, bonus: 1, number: 10 },
  { name: 'Ivan Rakitić', positions: ['CM'], rating: 90, number: 7 },
  { name: 'Mario Mandžukić', positions: ['ST'], rating: 89, number: 17 },
  { name: 'Ivan Perišić', positions: ['LW', 'LM'], rating: 89, number: 4 },
  { name: 'Danijel Subašić', positions: ['GK'], rating: 89, number: 23 },
  { name: 'Dejan Lovren', positions: ['CB'], rating: 86, number: 6 },
  { name: 'Domagoj Vida', positions: ['CB'], rating: 86, number: 21 },
  { name: 'Šime Vrsaljko', positions: ['RB'], rating: 86, number: 2 },
  { name: 'Ivan Strinić', positions: ['LB'], rating: 82, number: 3 },
  { name: 'Marcelo Brozović', positions: ['DM'], rating: 87, number: 11 },
  { name: 'Ante Rebić', positions: ['RW', 'ST'], rating: 85, number: 18 }
]));

// Marruecos
ALL_TEAMS.push(createTeam('mar_2022', 'Marruecos', 'MAR', 'worldcup', 2022, 'Mundial 2022', '🇲🇦', 'Marruecos', 'gold', [
  { name: 'Achraf Hakimi', positions: ['RB'], rating: 92, bonus: 1, number: 2 },
  { name: 'Yassine Bounou', positions: ['GK'], rating: 91, number: 1 },
  { name: 'Sofyan Amrabat', positions: ['DM'], rating: 89, number: 4 },
  { name: 'Hakim Ziyech', positions: ['RW'], rating: 89, number: 7 },
  { name: 'Youssef En-Nesyri', positions: ['ST'], rating: 87, number: 19 },
  { name: 'Azzedine Ounahi', positions: ['CM'], rating: 86, number: 8 },
  { name: 'Romain Saïss', positions: ['CB'], rating: 86, number: 6 },
  { name: 'Nayef Aguerd', positions: ['CB'], rating: 86, number: 5 },
  { name: 'Noussair Mazraoui', positions: ['LB', 'RB'], rating: 86, number: 3 },
  { name: 'Sofiane Boufal', positions: ['LW'], rating: 85, number: 17 },
  { name: 'Selim Amallah', positions: ['CM'], rating: 83, number: 15 }
]));

// ==========================================
// 2. MÁS SELECCIONES Y CLUBES
// ==========================================

// Dinamarca 1992
ALL_TEAMS.push(createTeam('den_1992', 'Dinamarca', 'DEN', 'worldcup', 1992, 'Euro 1992', '🇩🇰', 'Dinamarca', 'gold', [
  { name: 'Peter Schmeichel', positions: ['GK'], rating: 94, bonus: 1, number: 1 },
  { name: 'Brian Laudrup', positions: ['RW', 'ST'], rating: 92, number: 11 },
  { name: 'Flemming Povlsen', positions: ['ST'], rating: 87, number: 9 },
  { name: 'Kim Vilfort', positions: ['CM', 'RM'], rating: 86, number: 18 },
  { name: 'John Jensen', positions: ['CM', 'DM'], rating: 86, number: 7 },
  { name: 'Henrik Larsen', positions: ['AM'], rating: 85, number: 13 },
  { name: 'Lars Olsen', positions: ['CB'], rating: 87, number: 4 },
  { name: 'Torben Piechnik', positions: ['CB'], rating: 84, number: 12 },
  { name: 'Kent Nielsen', positions: ['CB'], rating: 84, number: 3 },
  { name: 'John Sivebæk', positions: ['RB'], rating: 85, number: 2 },
  { name: 'Kim Christofte', positions: ['LB', 'DM'], rating: 84, number: 6 }
]));

// Grecia 2004
ALL_TEAMS.push(createTeam('gre_2004', 'Grecia', 'GRE', 'worldcup', 2004, 'Euro 2004', '🇬🇷', 'Grecia', 'gold', [
  { name: 'Theodoros Zagorakis', positions: ['CM', 'DM'], rating: 90, bonus: 1, number: 7 },
  { name: 'Angelos Charisteas', positions: ['ST'], rating: 89, number: 9 },
  { name: 'Antonios Nikopolidis', positions: ['GK'], rating: 90, number: 1 },
  { name: 'Traianos Dellas', positions: ['CB'], rating: 89, number: 5 },
  { name: 'Michalis Kapsis', positions: ['CB'], rating: 87, number: 19 },
  { name: 'Giourkas Seitaridis', positions: ['RB'], rating: 88, number: 2 },
  { name: 'Takis Fyssas', positions: ['LB'], rating: 86, number: 14 },
  { name: 'Kostas Katsouranis', positions: ['DM', 'CM'], rating: 87, number: 21 },
  { name: 'Angelos Basinas', positions: ['DM', 'CM'], rating: 87, number: 6 },
  { name: 'Stelios Giannakopoulos', positions: ['RW', 'LW'], rating: 86, number: 8 },
  { name: 'Zisis Vryzas', positions: ['ST'], rating: 85, number: 15 }
]));

// Turquía 2002
ALL_TEAMS.push(createTeam('tur_2002', 'Turquía', 'TUR', 'worldcup', 2002, 'Mundial 2002', '🇹🇷', 'Turquía', 'gold', [
  { name: 'Rüştü Reçber', positions: ['GK'], rating: 91, bonus: 1, number: 1 },
  { name: 'Hasan Şaş', positions: ['LW', 'RW'], rating: 90, number: 11 },
  { name: 'Hakan Şükür', positions: ['ST'], rating: 89, number: 9 },
  { name: 'İlhan Mansız', positions: ['ST'], rating: 87, number: 17 },
  { name: 'Yıldıray Baştürk', positions: ['AM'], rating: 88, number: 10 },
  { name: 'Tugay Kerimoğlu', positions: ['CM', 'DM'], rating: 88, number: 8 },
  { name: 'Emre Belözoğlu', positions: ['CM'], rating: 87, number: 21 },
  { name: 'Alpay Özalan', positions: ['CB'], rating: 88, number: 3 },
  { name: 'Bülent Korkmaz', positions: ['CB'], rating: 87, number: 4 },
  { name: 'Fatih Akyel', positions: ['RB'], rating: 85, number: 22 },
  { name: 'Ergün Penbe', positions: ['LB'], rating: 85, number: 18 }
]));

// Bélgica 2018
ALL_TEAMS.push(createTeam('bel_2018', 'Bélgica', 'BEL', 'worldcup', 2018, 'Mundial 2018', '🇧🇪', 'Bélgica', 'legendary', [
  { name: 'Eden Hazard', positions: ['LW', 'AM'], rating: 95, bonus: 1, number: 10 },
  { name: 'Kevin De Bruyne', positions: ['CM', 'AM'], rating: 95, number: 7 },
  { name: 'Romelu Lukaku', positions: ['ST'], rating: 91, number: 9 },
  { name: 'Thibaut Courtois', positions: ['GK'], rating: 93, number: 1 },
  { name: 'Vincent Kompany', positions: ['CB'], rating: 91, number: 4 },
  { name: 'Jan Vertonghen', positions: ['CB', 'LB'], rating: 89, number: 5 },
  { name: 'Toby Alderweireld', positions: ['CB', 'RB'], rating: 89, number: 2 },
  { name: 'Axel Witsel', positions: ['DM', 'CM'], rating: 88, number: 6 },
  { name: 'Thomas Meunier', positions: ['RB', 'RM'], rating: 87, number: 15 },
  { name: 'Yannick Carrasco', positions: ['LM', 'LW'], rating: 86, number: 11 },
  { name: 'Dries Mertens', positions: ['RW', 'ST'], rating: 88, number: 14 }
]));

// Chile 2014/2015
ALL_TEAMS.push(createTeam('chi_2015', 'Chile', 'CHI', 'worldcup', 2015, 'Copa América 2015', '🇨🇱', 'Chile', 'gold', [
  { name: 'Alexis Sánchez', positions: ['LW', 'ST'], rating: 93, bonus: 1, number: 7 },
  { name: 'Arturo Vidal', positions: ['CM', 'DM'], rating: 92, number: 8 },
  { name: 'Claudio Bravo', positions: ['GK'], rating: 90, number: 1 },
  { name: 'Gary Medel', positions: ['CB', 'DM'], rating: 88, number: 17 },
  { name: 'Eduardo Vargas', positions: ['ST'], rating: 87, number: 11 },
  { name: 'Charles Aránguiz', positions: ['CM'], rating: 88, number: 20 },
  { name: 'Mauricio Isla', positions: ['RB'], rating: 86, number: 4 },
  { name: 'Eugenio Mena', positions: ['LB'], rating: 84, number: 2 },
  { name: 'Gonzalo Jara', positions: ['CB'], rating: 84, number: 18 },
  { name: 'Marcelo Díaz', positions: ['DM'], rating: 86, number: 21 },
  { name: 'Jorge Valdivia', positions: ['AM'], rating: 88, number: 10 }
]));

// Paraguay 2010
ALL_TEAMS.push(createTeam('par_2010', 'Paraguay', 'PAR', 'worldcup', 2010, 'Mundial 2010', '🇵🇾', 'Paraguay', 'gold', [
  { name: 'Justo Villar', positions: ['GK'], rating: 89, bonus: 1, number: 1 },
  { name: 'Roque Santa Cruz', positions: ['ST'], rating: 87, number: 9 },
  { name: 'Nelson Haedo Valdez', positions: ['ST'], rating: 86, number: 18 },
  { name: 'Óscar Cardozo', positions: ['ST'], rating: 86, number: 7 },
  { name: 'Paulo da Silva', positions: ['CB'], rating: 86, number: 14 },
  { name: 'Antolín Alcaraz', positions: ['CB'], rating: 85, number: 21 },
  { name: 'Carlos Bonet', positions: ['RB'], rating: 84, number: 6 },
  { name: 'Claudio Morel Rodríguez', positions: ['LB'], rating: 85, number: 3 },
  { name: 'Cristian Riveros', positions: ['CM', 'DM'], rating: 85, number: 16 },
  { name: 'Víctor Cáceres', positions: ['DM'], rating: 84, number: 15 },
  { name: 'Enrique Vera', positions: ['CM', 'RM'], rating: 85, number: 13 }
]));

// Perú 1970
ALL_TEAMS.push(createTeam('per_1970', 'Perú', 'PER', 'worldcup', 1970, 'Mundial 1970', '🇵🇪', 'Perú', 'legendary', [
  { name: 'Teófilo Cubillas', positions: ['AM', 'ST'], rating: 95, bonus: 1, number: 10 },
  { name: 'Héctor Chumpitaz', positions: ['CB'], rating: 93, number: 4 },
  { name: 'Hugo Sotil', positions: ['ST', 'LW'], rating: 91, number: 20 },
  { name: 'Roberto Chale', positions: ['CM', 'AM'], rating: 88, number: 6 },
  { name: 'Ramón Mifflin', positions: ['CM', 'DM'], rating: 87, number: 7 },
  { name: 'Alberto Gallardo', positions: ['LW', 'ST'], rating: 88, number: 11 },
  { name: 'Julio Baylón', positions: ['RW'], rating: 86, number: 8 },
  { name: 'Orlando de la Torre', positions: ['CB'], rating: 86, number: 14 },
  { name: 'Eloy Campos', positions: ['RB'], rating: 85, number: 2 },
  { name: 'Nicolás Fuentes', positions: ['LB'], rating: 85, number: 5 },
  { name: 'Luis Rubiños', positions: ['GK'], rating: 85, number: 1 }
]));

// ==========================================
// 3. MÁS CLUBES INTERNACIONALES Y ÉPICAS
// ==========================================

// FC Barcelona 2026 (Actual)
ALL_TEAMS.push(createTeam('fcb_2026', 'FC Barcelona', 'FCB', 'champions', 2026, 'Plantilla 2026', '🇪🇸', 'Spain', 'legendary', [
  { name: 'Lamine Yamal', positions: ['RW'], rating: 95, bonus: 1, number: 19 },
  { name: 'Pedri', positions: ['CM', 'AM'], rating: 93, number: 8 },
  { name: 'Gavi', positions: ['CM', 'DM'], rating: 90, number: 6 },
  { name: 'Robert Lewandowski', positions: ['ST'], rating: 91, number: 9 },
  { name: 'Raphinha', positions: ['LW', 'RW'], rating: 92, number: 11 },
  { name: 'Dani Olmo', positions: ['AM', 'LW'], rating: 90, number: 20 },
  { name: 'Pau Cubarsí', positions: ['CB'], rating: 89, number: 2 },
  { name: 'Ronald Araújo', positions: ['CB', 'RB'], rating: 90, number: 4 },
  { name: 'Jules Koundé', positions: ['RB', 'CB'], rating: 89, number: 23 },
  { name: 'Alejandro Balde', positions: ['LB'], rating: 88, number: 3 },
  { name: 'Marc-André ter Stegen', positions: ['GK'], rating: 90, number: 1 }
]));

// Real Madrid 2024 (Champions 15)
ALL_TEAMS.push(createTeam('rma_2024', 'Real Madrid', 'RMA', 'champions', 2024, 'Champions 2024', '🇪🇸', 'Spain', 'legendary', [
  { name: 'Vinícius Jr', positions: ['LW', 'ST'], rating: 96, bonus: 1, number: 7 },
  { name: 'Jude Bellingham', positions: ['AM', 'CM'], rating: 95, number: 5 },
  { name: 'Rodrygo', positions: ['RW', 'ST'], rating: 91, number: 11 },
  { name: 'Toni Kroos', positions: ['CM'], rating: 93, number: 8 },
  { name: 'Federico Valverde', positions: ['CM', 'RW'], rating: 92, number: 15 },
  { name: 'Eduardo Camavinga', positions: ['DM', 'CM'], rating: 90, number: 12 },
  { name: 'Dani Carvajal', positions: ['RB'], rating: 92, number: 2 },
  { name: 'Antonio Rüdiger', positions: ['CB'], rating: 92, number: 22 },
  { name: 'Nacho Fernández', positions: ['CB'], rating: 87, number: 6 },
  { name: 'Ferland Mendy', positions: ['LB'], rating: 88, number: 23 },
  { name: 'Thibaut Courtois', positions: ['GK'], rating: 94, number: 1 }
]));

// Bayer Leverkusen 2024 (Invictus Alonso)
ALL_TEAMS.push(createTeam('lev_2024', 'Bayer Leverkusen', 'B04', 'champions', 2024, 'Invictus 2024', '🇩🇪', 'Germany', 'legendary', [
  { name: 'Florian Wirtz', positions: ['AM', 'LW'], rating: 94, bonus: 1, number: 10 },
  { name: 'Granit Xhaka', positions: ['CM', 'DM'], rating: 91, number: 34 },
  { name: 'Jeremie Frimpong', positions: ['RB', 'RW'], rating: 91, number: 30 },
  { name: 'Alejandro Grimaldo', positions: ['LB', 'LM'], rating: 91, number: 20 },
  { name: 'Victor Boniface', positions: ['ST'], rating: 88, number: 22 },
  { name: 'Jonathan Tah', positions: ['CB'], rating: 89, number: 4 },
  { name: 'Edmond Tapsoba', positions: ['CB'], rating: 88, number: 12 },
  { name: 'Piero Hincapié', positions: ['CB', 'LB'], rating: 87, number: 3 },
  { name: 'Exequiel Palacios', positions: ['CM'], rating: 88, number: 25 },
  { name: 'Robert Andrich', positions: ['DM', 'CB'], rating: 87, number: 8 },
  { name: 'Lukáš Hrádecký', positions: ['GK'], rating: 88, number: 1 }
]));

// Inter Miami 2024
ALL_TEAMS.push(createTeam('mia_2024', 'Inter Miami', 'MIA', 'champions', 2024, 'Supporters 2024', '🇺🇸', 'USA', 'gold', [
  { name: 'Lionel Messi', positions: ['RW', 'AM'], rating: 96, bonus: 1, number: 10 },
  { name: 'Luis Suárez', positions: ['ST'], rating: 90, number: 9 },
  { name: 'Sergio Busquets', positions: ['DM', 'CM'], rating: 89, number: 5 },
  { name: 'Jordi Alba', positions: ['LB'], rating: 88, number: 18 },
  { name: 'Federico Redondo', positions: ['DM', 'CM'], rating: 84, number: 55 },
  { name: 'Diego Gómez', positions: ['CM', 'AM'], rating: 84, number: 20 },
  { name: 'Robert Taylor', positions: ['LW', 'LM'], rating: 82, number: 16 },
  { name: 'Marcelo Weigandt', positions: ['RB'], rating: 82, number: 57 },
  { name: 'Tomás Avilés', positions: ['CB'], rating: 82, number: 6 },
  { name: 'Nicolás Freire', positions: ['CB'], rating: 81, number: 21 },
  { name: 'Drake Callender', positions: ['GK'], rating: 83, number: 1 }
]));

// Al Nassr 2024
ALL_TEAMS.push(createTeam('nas_2024', 'Al Nassr', 'NAS', 'champions', 2024, 'Temporada 2024', '🇸🇦', 'Saudi Arabia', 'gold', [
  { name: 'Cristiano Ronaldo', positions: ['ST'], rating: 93, bonus: 1, number: 7 },
  { name: 'Sadio Mané', positions: ['LW', 'ST'], rating: 89, number: 10 },
  { name: 'Marcelo Brozović', positions: ['DM', 'CM'], rating: 88, number: 77 },
  { name: 'Aymeric Laporte', positions: ['CB'], rating: 88, number: 27 },
  { name: 'Otávio', positions: ['AM', 'RW'], rating: 87, number: 25 },
  { name: 'Anderson Talisca', positions: ['AM', 'ST'], rating: 87, number: 94 },
  { name: 'Sultan Al-Ghannam', positions: ['RB'], rating: 84, number: 2 },
  { name: 'Alex Telles', positions: ['LB'], rating: 84, number: 15 },
  { name: 'Ali Lajami', positions: ['CB'], rating: 81, number: 78 },
  { name: 'Abdullah Al-Khaibari', positions: ['DM'], rating: 82, number: 17 },
  { name: 'Bento', positions: ['GK'], rating: 85, number: 24 }
]));

// Fluminense 2023 (Campeón Libertadores)
ALL_TEAMS.push(createTeam('flu_2023', 'Fluminense', 'FLU', 'champions', 2023, 'Libertadores 2023', '🇧🇷', 'Brazil', 'gold', [
  { name: 'Germán Cano', positions: ['ST'], rating: 91, bonus: 1, number: 14 },
  { name: 'Marcelo', positions: ['LB', 'CM'], rating: 90, number: 12 },
  { name: 'André', positions: ['DM', 'CM'], rating: 89, number: 7 },
  { name: 'Jhon Arias', positions: ['RW', 'AM'], rating: 89, number: 21 },
  { name: 'Ganso', positions: ['AM'], rating: 88, number: 10 },
  { name: 'Keno', positions: ['LW'], rating: 86, number: 11 },
  { name: 'Nino', positions: ['CB'], rating: 87, number: 33 },
  { name: 'Felipe Melo', positions: ['CB', 'DM'], rating: 85, number: 30 },
  { name: 'Samuel Xavier', positions: ['RB'], rating: 85, number: 2 },
  { name: 'Fábio', positions: ['GK'], rating: 88, number: 1 },
  { name: 'John Kennedy', positions: ['ST'], rating: 86, number: 9 }
]));

// LDU Quito 2008 (Libertadores)
ALL_TEAMS.push(createTeam('ldu_2008', 'LDU Quito', 'LDU', 'champions', 2008, 'Libertadores 2008', '🇪🇨', 'Ecuador', 'gold', [
  { name: 'José Francisco Cevallos', positions: ['GK'], rating: 91, bonus: 1, number: 1 },
  { name: 'Joffre Guerrón', positions: ['RW', 'ST'], rating: 89, number: 19 },
  { name: 'Claudio Bieler', positions: ['ST'], rating: 88, number: 16 },
  { name: 'Damián Manso', positions: ['AM'], rating: 89, number: 21 },
  { name: 'Patricio Urrutia', positions: ['CM', 'DM'], rating: 87, number: 8 },
  { name: 'Enrique Vera', positions: ['CM'], rating: 87, number: 20 },
  { name: 'Norberto Araujo', positions: ['CB'], rating: 87, number: 2 },
  { name: 'Renán Calle', positions: ['CB'], rating: 84, number: 3 },
  { name: 'Jairo Campos', positions: ['CB'], rating: 84, number: 23 },
  { name: 'Paúl Ambrosi', positions: ['LB'], rating: 85, number: 4 },
  { name: 'Neicer Reasco', positions: ['RB'], rating: 85, number: 13 }
]));

// Colo-Colo 1991 (Libertadores)
ALL_TEAMS.push(createTeam('col_1991', 'Colo-Colo', 'COL', 'champions', 1991, 'Libertadores 1991', '🇨🇱', 'Chile', 'gold', [
  { name: 'Marcelo Barticciotto', positions: ['RW', 'ST'], rating: 91, bonus: 1, number: 7 },
  { name: 'Patricio Yáñez', positions: ['RW', 'LW'], rating: 89, number: 17 },
  { name: 'Rubén Martínez', positions: ['ST'], rating: 88, number: 11 },
  { name: 'Jaime Pizarro', positions: ['CM', 'DM'], rating: 90, number: 10 },
  { name: 'Gabriel Mendoza', positions: ['RB', 'RM'], rating: 88, number: 2 },
  { name: 'Miguel Ramírez', positions: ['CB'], rating: 88, number: 3 },
  { name: 'Lizardo Garrido', positions: ['CB'], rating: 88, number: 4 },
  { name: 'Javier Margas', positions: ['CB', 'LB'], rating: 87, number: 5 },
  { name: 'Eduardo Vilches', positions: ['DM', 'CB'], rating: 87, number: 6 },
  { name: 'Daniel Morón', positions: ['GK'], rating: 89, number: 1 },
  { name: 'Rubén Espinoza', positions: ['CM', 'RM'], rating: 86, number: 8 }
]));

// Olimpia 2002 (Libertadores)
ALL_TEAMS.push(createTeam('oli_2002', 'Olimpia', 'OLI', 'champions', 2002, 'Libertadores 2002', '🇵🇾', 'Paraguay', 'gold', [
  { name: 'Ricardo Tavarelli', positions: ['GK'], rating: 90, bonus: 1, number: 1 },
  { name: 'Richart Báez', positions: ['ST'], rating: 88, number: 9 },
  { name: 'Miguel Ángel Benítez', positions: ['ST', 'AM'], rating: 88, number: 11 },
  { name: 'Sergio Órteman', positions: ['CM'], rating: 89, number: 16 },
  { name: 'Julio César Enciso', positions: ['DM'], rating: 88, number: 5 },
  { name: 'Gastón Córdoba', positions: ['LM', 'AM'], rating: 86, number: 10 },
  { name: 'Víctor Quintana', positions: ['CM', 'DM'], rating: 85, number: 15 },
  { name: 'Néstor Isasi', positions: ['RB'], rating: 85, number: 2 },
  { name: 'Julio César Cáceres', positions: ['CB'], rating: 88, number: 3 },
  { name: 'Nelson Zelaya', positions: ['CB'], rating: 86, number: 4 },
  { name: 'Henrique da Silva', positions: ['LB'], rating: 84, number: 14 }
]));

// Peñarol 1982 (Copa Libertadores & Intercontinental)
ALL_TEAMS.push(createTeam('pen_1982', 'Peñarol', 'PEN', 'champions', 1982, 'Intercontinental 1982', '🇺🇾', 'Uruguay', 'legendary', [
  { name: 'Fernando Morena', positions: ['ST'], rating: 95, bonus: 1, number: 9 },
  { name: 'Walkir Silva', positions: ['RW', 'ST'], rating: 87, number: 11 },
  { name: 'Venancio Ramos', positions: ['LW', 'RW'], rating: 89, number: 7 },
  { name: 'Jair Gonçalves', positions: ['AM', 'CM'], rating: 90, number: 10 },
  { name: 'Mario Saralegui', positions: ['CM'], rating: 88, number: 8 },
  { name: 'Miguel Bossio', positions: ['DM'], rating: 88, number: 5 },
  { name: 'Víctor Diogo', positions: ['RB'], rating: 89, number: 4 },
  { name: 'Walter Olivera', positions: ['CB'], rating: 90, number: 2 },
  { name: 'Nelson Gutiérrez', positions: ['CB'], rating: 89, number: 3 },
  { name: 'Washington González', positions: ['LB'], rating: 86, number: 6 },
  { name: 'Gustavo Fernández', positions: ['GK'], rating: 88, number: 1 }
]));

// Write the complete database to massiveTeamsData.ts
const outputPath = path.join(__dirname, '../src/data/massiveTeamsData.ts');
const fileContent = `import { Team } from '../types';

export const MASSIVE_TEAMS_DATA: Team[] = ${JSON.stringify(ALL_TEAMS, null, 2)};
`;

fs.writeFileSync(outputPath, fileContent, 'utf-8');
console.log(`Generated ${ALL_TEAMS.length} full rich teams! Output saved to ${outputPath}`);
