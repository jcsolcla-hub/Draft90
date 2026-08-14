import * as fs from 'fs';
import * as path from 'path';
import { buildTeam, Player, Team } from './teamBuilderHelper';

console.log("Compiling complete Draft 90 database with all requested clubs and national teams...");

const teams: Team[] = [];

function t(team: Team) {
  teams.push(team);
}

// ---------------------------------------------
// 1. CLUBS & KEY YEARS
// ---------------------------------------------

// CA PEÑAROL
[
  { y: '1960', tag: 'Libertadores 1960', stars: [
    { name: 'Alberto Spencer', pos: 'ST', sec: ['AM'], rating: 95, nation: 'Ecuador', flag: '🇪🇨', num: 9, bonus: 1 },
    { name: 'José Sasía', pos: 'ST', rating: 88, num: 10 },
    { name: 'Juan Joya', pos: 'LW', rating: 89, nation: 'Perú', flag: '🇵🇪', num: 11 },
    { name: 'Luis Cubilla', pos: 'RW', rating: 90, num: 7 },
    { name: 'Néstor Gonçalves', pos: 'DM', rating: 91, num: 5 },
    { name: 'William Martínez', pos: 'CB', rating: 89, num: 2 },
    { name: 'Luis Maidana', pos: 'GK', rating: 87, num: 1 },
    { name: 'Salvador', pos: 'CB', rating: 84, num: 3 },
    { name: 'Santiago Pino', pos: 'RB', rating: 83, num: 4 },
    { name: 'Walter Aguerre', pos: 'CM', rating: 85, num: 6 },
    { name: 'Carlos Linazza', pos: 'AM', rating: 85, num: 8 }
  ]},
  { y: '1961', tag: 'Bicampeón 1961', stars: [
    { name: 'Alberto Spencer', pos: 'ST', rating: 95, nation: 'Ecuador', flag: '🇪🇨', num: 9, bonus: 1 },
    { name: 'José Sasía', pos: 'ST', rating: 89, num: 10 },
    { name: 'Juan Joya', pos: 'LW', rating: 89, nation: 'Perú', flag: '🇵🇪', num: 11 },
    { name: 'Luis Cubilla', pos: 'RW', rating: 90, num: 7 },
    { name: 'Néstor Gonçalves', pos: 'DM', rating: 92, num: 5 },
    { name: 'William Martínez', pos: 'CB', rating: 89, num: 2 },
    { name: 'Luis Maidana', pos: 'GK', rating: 87, num: 1 },
    { name: 'Edgardo González', pos: 'CM', rating: 86, num: 8 },
    { name: 'Walter Aguerre', pos: 'CM', rating: 85, num: 6 },
    { name: 'Núber Cano', pos: 'CB', rating: 84, num: 3 },
    { name: 'Roberto Matosas', pos: 'LB', rating: 88, num: 4 }
  ]},
  { y: '1966', tag: 'Mundial de Clubes 1966', stars: [
    { name: 'Alberto Spencer', pos: 'ST', rating: 96, nation: 'Ecuador', flag: '🇪🇨', num: 9, bonus: 1 },
    { name: 'Pedro Rocha', pos: 'AM', rating: 94, num: 10 },
    { name: 'Ladislao Mazurkiewicz', pos: 'GK', rating: 94, num: 1 },
    { name: 'Juan Joya', pos: 'LW', rating: 89, nation: 'Perú', flag: '🇵🇪', num: 11 },
    { name: 'Julio César Abbadie', pos: 'RW', rating: 88, num: 7 },
    { name: 'Néstor Gonçalves', pos: 'DM', rating: 91, num: 5 },
    { name: 'Pablo Forlán', pos: 'RB', rating: 88, num: 4 },
    { name: 'Juan Vicente Lezcano', pos: 'CB', rating: 87, nation: 'Paraguay', flag: '🇵🇾', num: 2 },
    { name: 'Luis Varela', pos: 'CB', rating: 86, num: 3 },
    { name: 'Omar Caetano', pos: 'LB', rating: 87, num: 6 },
    { name: 'Julio César Cortés', pos: 'CM', rating: 87, num: 8 }
  ]},
  { y: '1982', tag: 'Intercontinental 1982', stars: [
    { name: 'Fernando Morena', pos: 'ST', rating: 93, num: 9, bonus: 1 },
    { name: 'Venancio Ramos', pos: 'RW', rating: 88, num: 7 },
    { name: 'Walkir Silva', pos: 'LW', rating: 85, num: 11 },
    { name: 'Mario Saralegui', pos: 'CM', rating: 87, num: 8 },
    { name: 'Miguel Bossio', pos: 'DM', rating: 86, num: 5 },
    { name: 'Jair Gonçalves', pos: 'AM', rating: 88, nation: 'Brasil', flag: '🇧🇷', num: 10 },
    { name: 'Víctor Diogo', pos: 'RB', rating: 88, num: 4 },
    { name: 'Walter Olivera', pos: 'CB', rating: 88, num: 2 },
    { name: 'Nelson Gutiérrez', pos: 'CB', rating: 87, num: 3 },
    { name: 'Washington González', pos: 'LB', rating: 86, num: 6 },
    { name: 'Gustavo Fernández', pos: 'GK', rating: 87, num: 1 }
  ]},
  { y: '1987', tag: 'Libertadores 1987', stars: [
    { name: 'Diego Aguirre', pos: 'ST', rating: 89, num: 9, bonus: 1 },
    { name: 'Alfonso Domínguez', pos: 'LB', rating: 87, num: 6 },
    { name: 'Eduardo Pereira', pos: 'GK', rating: 88, num: 1 },
    { name: 'José Perdomo', pos: 'DM', rating: 88, num: 5 },
    { name: 'Gustavo Matosas', pos: 'CM', rating: 87, num: 8 },
    { name: 'Marcelo Rotti', pos: 'CB', rating: 85, num: 2 },
    { name: 'Obdulio Trasante', pos: 'CB', rating: 86, num: 3 },
    { name: 'José Herrera', pos: 'RB', rating: 86, num: 4 },
    { name: 'Daniel Vidal', pos: 'RW', rating: 84, num: 7 },
    { name: 'Ricardo Viera', pos: 'AM', rating: 86, num: 10 },
    { name: 'Jorge Cabrera', pos: 'LW', rating: 84, num: 11 }
  ]}
].forEach(item => t(buildTeam(`pen_${item.y}`, 'CA Peñarol', 'PEN', 'champions', item.y, item.tag, '🇺🇾', 'Uruguay', 'legendary', item.stars)));

// CA INDEPENDIENTE
[
  { y: '1964', tag: 'Libertadores 1964', stars: [
    { name: 'Mario Rodríguez', pos: 'ST', rating: 91, num: 9, bonus: 1 },
    { name: 'Raúl Bernao', pos: 'RW', rating: 90, num: 7 },
    { name: 'Raúl Savoy', pos: 'LW', rating: 89, num: 11 },
    { name: 'Luis Suárez', pos: 'AM', rating: 87, num: 10 },
    { name: 'Jorge Maldonado', pos: 'DM', rating: 88, num: 5 },
    { name: 'Roberto Ferreiro', pos: 'RB', rating: 88, num: 4 },
    { name: 'Rubén Navarro', pos: 'CB', rating: 89, num: 2 },
    { name: 'Tomás Rolan', pos: 'LB', rating: 87, nation: 'Uruguay', flag: '🇺🇾', num: 3 },
    { name: 'David Acevedo', pos: 'CB', rating: 86, num: 6 },
    { name: 'Osvaldo Mura', pos: 'CM', rating: 87, num: 8 },
    { name: 'Miguel Ángel Santoro', pos: 'GK', rating: 91, num: 1 }
  ]},
  { y: '1965', tag: 'Bicampeón 1965', stars: [
    { name: 'Raúl Bernao', pos: 'RW', rating: 91, num: 7, bonus: 1 },
    { name: 'Roque Avallay', pos: 'ST', rating: 88, num: 9 },
    { name: 'Raúl Savoy', pos: 'LW', rating: 89, num: 11 },
    { name: 'Vicente de la Mata', pos: 'AM', rating: 88, num: 10 },
    { name: 'Jorge Maldonado', pos: 'DM', rating: 88, num: 5 },
    { name: 'Roberto Ferreiro', pos: 'RB', rating: 88, num: 4 },
    { name: 'Rubén Navarro', pos: 'CB', rating: 89, num: 2 },
    { name: 'Juan Carlos Guzmán', pos: 'CB', rating: 87, num: 6 },
    { name: 'Ricardo Pavoni', pos: 'LB', rating: 90, nation: 'Uruguay', flag: '🇺🇾', num: 3 },
    { name: 'Osvaldo Mura', pos: 'CM', rating: 87, num: 8 },
    { name: 'Miguel Ángel Santoro', pos: 'GK', rating: 92, num: 1 }
  ]},
  { y: '1972', tag: 'Tetra Rey de Copas 1972', stars: [
    { name: 'José Pastoriza', pos: 'AM', rating: 92, num: 8, bonus: 1 },
    { name: 'Agustín Balbuena', pos: 'RW', rating: 88, num: 7 },
    { name: 'Eduardo Maglioni', pos: 'ST', rating: 87, num: 9 },
    { name: 'Alejandro Semenewicz', pos: 'CM', rating: 88, num: 10 },
    { name: 'Miguel Ángel Raimondo', pos: 'DM', rating: 88, num: 5 },
    { name: 'Eduardo Commisso', pos: 'RB', rating: 87, num: 4 },
    { name: 'Francisco Sá', pos: 'CB', rating: 90, num: 2 },
    { name: 'Luis Garisto', pos: 'CB', rating: 87, nation: 'Uruguay', flag: '🇺🇾', num: 6 },
    { name: 'Ricardo Pavoni', pos: 'LB', rating: 91, nation: 'Uruguay', flag: '🇺🇾', num: 3 },
    { name: 'Dante Mircoli', pos: 'LW', rating: 86, num: 11 },
    { name: 'Miguel Ángel Santoro', pos: 'GK', rating: 92, num: 1 }
  ]},
  { y: '1973', tag: 'Intercontinental 1973', stars: [
    { name: 'Ricardo Bochini', pos: 'AM', sec: ['ST'], rating: 96, num: 10, bonus: 1 },
    { name: 'Daniel Bertoni', pos: 'LW', sec: ['RW', 'ST'], rating: 92, num: 11 },
    { name: 'Agustín Balbuena', pos: 'RW', rating: 88, num: 7 },
    { name: 'Eduardo Maglioni', pos: 'ST', rating: 87, num: 9 },
    { name: 'Miguel Ángel Raimondo', pos: 'DM', rating: 88, num: 5 },
    { name: 'Rubén Galván', pos: 'CM', rating: 89, num: 8 },
    { name: 'Eduardo Commisso', pos: 'RB', rating: 87, num: 4 },
    { name: 'Francisco Sá', pos: 'CB', rating: 90, num: 2 },
    { name: 'Miguel Ángel López', pos: 'CB', rating: 88, num: 6 },
    { name: 'Ricardo Pavoni', pos: 'LB', rating: 91, nation: 'Uruguay', flag: '🇺🇾', num: 3 },
    { name: 'Miguel Ángel Santoro', pos: 'GK', rating: 93, num: 1 }
  ]},
  { y: '1974', tag: 'Libertadores 1974', stars: [
    { name: 'Ricardo Bochini', pos: 'AM', rating: 96, num: 10, bonus: 1 },
    { name: 'Daniel Bertoni', pos: 'LW', rating: 93, num: 11 },
    { name: 'Agustín Balbuena', pos: 'RW', rating: 88, num: 7 },
    { name: 'Luis Giribet', pos: 'ST', rating: 86, num: 9 },
    { name: 'Rubén Galván', pos: 'DM', rating: 90, num: 5 },
    { name: 'Alejandro Semenewicz', pos: 'CM', rating: 88, num: 8 },
    { name: 'Eduardo Commisso', pos: 'RB', rating: 87, num: 4 },
    { name: 'Francisco Sá', pos: 'CB', rating: 90, num: 2 },
    { name: 'Miguel Ángel López', pos: 'CB', rating: 88, num: 6 },
    { name: 'Ricardo Pavoni', pos: 'LB', rating: 91, nation: 'Uruguay', flag: '🇺🇾', num: 3 },
    { name: 'Carlos Gay', pos: 'GK', rating: 88, num: 1 }
  ]},
  { y: '1975', tag: 'Tetracampeón 1975', stars: [
    { name: 'Ricardo Bochini', pos: 'AM', rating: 96, num: 10, bonus: 1 },
    { name: 'Daniel Bertoni', pos: 'LW', rating: 93, num: 11 },
    { name: 'Agustín Balbuena', pos: 'RW', rating: 88, num: 7 },
    { name: 'Percy Rojas', pos: 'ST', rating: 88, nation: 'Perú', flag: '🇵🇪', num: 9 },
    { name: 'Rubén Galván', pos: 'DM', rating: 90, num: 5 },
    { name: 'Alejandro Semenewicz', pos: 'CM', rating: 88, num: 8 },
    { name: 'Eduardo Commisso', pos: 'RB', rating: 87, num: 4 },
    { name: 'Francisco Sá', pos: 'CB', rating: 90, num: 2 },
    { name: 'Luis Garisto', pos: 'CB', rating: 87, nation: 'Uruguay', flag: '🇺🇾', num: 6 },
    { name: 'Ricardo Pavoni', pos: 'LB', rating: 91, nation: 'Uruguay', flag: '🇺🇾', num: 3 },
    { name: 'José Alberto Pérez', pos: 'GK', rating: 87, num: 1 }
  ]},
  { y: '1984', tag: 'Campeón Mundial 1984', stars: [
    { name: 'Ricardo Bochini', pos: 'AM', rating: 97, num: 10, bonus: 1 },
    { name: 'Jorge Burruchaga', pos: 'AM', sec: ['RW'], rating: 92, num: 8 },
    { name: 'José Alberto Percudani', pos: 'ST', rating: 89, num: 9 },
    { name: 'Alejandro Barberón', pos: 'LW', rating: 87, num: 11 },
    { name: 'Claudio Marangoni', pos: 'DM', rating: 90, num: 5 },
    { name: 'Gerardo Reinoso', pos: 'CM', rating: 86, num: 7 },
    { name: 'Néstor Clausen', pos: 'RB', rating: 89, num: 4 },
    { name: 'Hugo Villaverde', pos: 'CB', rating: 90, num: 2 },
    { name: 'Enzo Trossero', pos: 'CB', rating: 91, num: 6 },
    { name: 'Carlos Enrique', pos: 'LB', rating: 88, num: 3 },
    { name: 'Carlos Goyén', pos: 'GK', rating: 89, nation: 'Uruguay', flag: '🇺🇾', num: 1 }
  ]}
].forEach(item => t(buildTeam(`ind_${item.y}`, 'CA Independiente', 'IND', 'champions', item.y, item.tag, '🇦🇷', 'Argentina', 'legendary', item.stars)));

// FC SCHALKE 04
[
  { y: '1997', tag: 'Copa UEFA 1997', stars: [
    { name: 'Marc Wilmots', pos: 'AM', sec: ['ST'], rating: 90, nation: 'Bélgica', flag: '🇧🇪', num: 8, bonus: 1 },
    { name: 'Olaf Thon', pos: 'CB', sec: ['DM'], rating: 90, num: 10 },
    { name: 'Jens Lehmann', pos: 'GK', rating: 89, num: 1 },
    { name: 'Martin Max', pos: 'ST', rating: 86, num: 9 },
    { name: 'Youri Mulder', pos: 'ST', rating: 85, nation: 'Países Bajos', flag: '🇳🇱', num: 11 },
    { name: 'Ingo Anderbrügge', pos: 'CM', rating: 86, num: 6 },
    { name: 'Jiří Němec', pos: 'DM', rating: 87, nation: 'República Checa', flag: '🇨🇿', num: 4 },
    { name: 'Thomas Linke', pos: 'CB', rating: 88, num: 5 },
    { name: 'Yves Eigenrauch', pos: 'CB', rating: 85, num: 2 },
    { name: 'Radoslav Látal', pos: 'RB', rating: 86, nation: 'República Checa', flag: '🇨🇿', num: 7 },
    { name: 'Mike Büskens', pos: 'LB', rating: 85, num: 3 }
  ]},
  { y: '2011', tag: 'Semifinales Champions 2011', stars: [
    { name: 'Raúl González', pos: 'ST', sec: ['AM'], rating: 92, nation: 'España', flag: '🇪🇸', num: 7, bonus: 1 },
    { name: 'Manuel Neuer', pos: 'GK', rating: 94, num: 1 },
    { name: 'Klaas-Jan Huntelaar', pos: 'ST', rating: 88, nation: 'Países Bajos', flag: '🇳🇱', num: 25 },
    { name: 'Jefferson Farfán', pos: 'RW', rating: 88, nation: 'Perú', flag: '🇵🇪', num: 17 },
    { name: 'Julian Draxler', pos: 'LW', sec: ['AM'], rating: 85, num: 31 },
    { name: 'José Manuel Jurado', pos: 'AM', rating: 84, nation: 'España', flag: '🇪🇸', num: 18 },
    { name: 'Peer Kluge', pos: 'CM', rating: 82, num: 12 },
    { name: 'Joel Matip', pos: 'CB', sec: ['DM'], rating: 86, nation: 'Camerún', flag: '🇨🇲', num: 32 },
    { name: 'Benedikt Höwedes', pos: 'CB', rating: 88, num: 4 },
    { name: 'Atsuto Uchida', pos: 'RB', rating: 84, nation: 'Japón', flag: '🇯🇵', num: 22 },
    { name: 'Hans Sarpei', pos: 'LB', rating: 81, nation: 'Ghana', flag: '🇬🇭', num: 2 }
  ]},
  { y: '2015', tag: 'Champions League 2015', stars: [
    { name: 'Leroy Sané', pos: 'RW', sec: ['LW'], rating: 87, num: 19, bonus: 1 },
    { name: 'Klaas-Jan Huntelaar', pos: 'ST', rating: 87, nation: 'Países Bajos', flag: '🇳🇱', num: 25 },
    { name: 'Max Meyer', pos: 'AM', rating: 84, num: 7 },
    { name: 'Eric Maxim Choupo-Moting', pos: 'LW', rating: 84, nation: 'Camerún', flag: '🇨🇲', num: 13 },
    { name: 'Leon Goretzka', pos: 'CM', rating: 86, num: 8 },
    { name: 'Marco Höger', pos: 'DM', rating: 82, num: 12 },
    { name: 'Benedikt Höwedes', pos: 'CB', rating: 87, num: 4 },
    { name: 'Matija Nastasić', pos: 'CB', rating: 84, nation: 'Serbia', flag: '🇷🇸', num: 31 },
    { name: 'Sead Kolašinac', pos: 'LB', rating: 84, nation: 'Bosnia y Herzegovina', flag: '🇧🇦', num: 6 },
    { name: 'Tranquillo Barnetta', pos: 'RB', rating: 82, nation: 'Suiza', flag: '🇨🇭', num: 27 },
    { name: 'Ralf Fährmann', pos: 'GK', rating: 86, num: 1 }
  ]}
].forEach(item => t(buildTeam(`s04_${item.y}`, 'FC Schalke 04', 'S04', 'champions', item.y, item.tag, '🇩🇪', 'Alemania', 'gold', item.stars)));

// CA BOCA JUNIORS
[
  { y: '1977', tag: 'Libertadores 1977', stars: [
    { name: 'Hugo Gatti', pos: 'GK', rating: 91, num: 1, bonus: 1 },
    { name: 'Ernesto Mastrángelo', pos: 'ST', rating: 89, num: 7 },
    { name: 'Carlos Veglio', pos: 'ST', rating: 87, num: 9 },
    { name: 'Darío Felman', pos: 'LW', rating: 88, num: 11 },
    { name: 'Rubén Suñé', pos: 'DM', rating: 90, num: 5 },
    { name: 'Jorge Ribolzi', pos: 'CM', rating: 87, num: 8 },
    { name: 'Mario Zanabria', pos: 'AM', rating: 89, num: 10 },
    { name: 'Vicente Pernía', pos: 'RB', rating: 88, num: 4 },
    { name: 'Francisco Sá', pos: 'CB', rating: 89, num: 2 },
    { name: 'Roberto Mouzo', pos: 'CB', rating: 90, num: 6 },
    { name: 'Alberto Tarantini', pos: 'LB', rating: 90, num: 3 }
  ]},
  { y: '1978', tag: 'Bicampeón de América 1978', stars: [
    { name: 'Hugo Gatti', pos: 'GK', rating: 92, num: 1, bonus: 1 },
    { name: 'Ernesto Mastrángelo', pos: 'ST', rating: 90, num: 7 },
    { name: 'Carlos Salguero', pos: 'ST', rating: 86, num: 9 },
    { name: 'Hugo Perotti', pos: 'LW', rating: 88, num: 11 },
    { name: 'Rubén Suñé', pos: 'DM', rating: 90, num: 5 },
    { name: 'Carlos Salinas', pos: 'AM', rating: 88, num: 10 },
    { name: 'Mario Zanabria', pos: 'CM', rating: 89, num: 8 },
    { name: 'Vicente Pernía', pos: 'RB', rating: 88, num: 4 },
    { name: 'Francisco Sá', pos: 'CB', rating: 89, num: 2 },
    { name: 'Roberto Mouzo', pos: 'CB', rating: 90, num: 6 },
    { name: 'Miguel Ángel Bordón', pos: 'LB', rating: 87, num: 3 }
  ]},
  { y: '2000', tag: 'Campeón Intercontinental 2000', stars: [
    { name: 'Juan Román Riquelme', pos: 'AM', rating: 97, num: 10, bonus: 1 },
    { name: 'Martín Palermo', pos: 'ST', rating: 94, num: 9 },
    { name: 'Marcelo Delgado', pos: 'RW', rating: 88, num: 16 },
    { name: 'Mauricio Serna', pos: 'DM', rating: 90, nation: 'Colombia', flag: '🇨🇴', num: 5 },
    { name: 'Sebastián Battaglia', pos: 'CM', rating: 88, num: 22 },
    { name: 'José Basualdo', pos: 'CM', rating: 87, num: 8 },
    { name: 'Hugo Ibarra', pos: 'RB', rating: 90, num: 4 },
    { name: 'Jorge Bermúdez', pos: 'CB', rating: 91, nation: 'Colombia', flag: '🇨🇴', num: 2 },
    { name: 'Cristian Traverso', pos: 'CB', rating: 87, num: 6 },
    { name: 'Aníbal Matellán', pos: 'LB', rating: 85, num: 3 },
    { name: 'Oscar Córdoba', pos: 'GK', rating: 92, nation: 'Colombia', flag: '🇨🇴', num: 1 }
  ]},
  { y: '2001', tag: 'Bicampeón de América 2001', stars: [
    { name: 'Juan Román Riquelme', pos: 'AM', rating: 98, num: 10, bonus: 1 },
    { name: 'Guillermo Barros Schelotto', pos: 'RW', rating: 91, num: 7 },
    { name: 'Marcelo Delgado', pos: 'ST', rating: 89, num: 16 },
    { name: 'Mauricio Serna', pos: 'DM', rating: 90, nation: 'Colombia', flag: '🇨🇴', num: 5 },
    { name: 'Sebastián Battaglia', pos: 'CM', rating: 88, num: 22 },
    { name: 'Javier Villarreal', pos: 'CM', rating: 85, num: 8 },
    { name: 'Hugo Ibarra', pos: 'RB', rating: 90, num: 4 },
    { name: 'Jorge Bermúdez', pos: 'CB', rating: 91, nation: 'Colombia', flag: '🇨🇴', num: 2 },
    { name: 'Nicolás Burdisso', pos: 'CB', rating: 88, num: 6 },
    { name: 'Clemente Rodríguez', pos: 'LB', rating: 88, num: 3 },
    { name: 'Oscar Córdoba', pos: 'GK', rating: 92, nation: 'Colombia', flag: '🇨🇴', num: 1 }
  ]},
  { y: '2003', tag: 'Campeón del Mundo 2003', stars: [
    { name: 'Carlos Tévez', pos: 'ST', sec: ['AM'], rating: 94, num: 9, bonus: 1 },
    { name: 'Guillermo Barros Schelotto', pos: 'RW', rating: 90, num: 7 },
    { name: 'Pedro Iarley', pos: 'LW', rating: 88, nation: 'Brasil', flag: '🇧🇷', num: 10 },
    { name: 'Raúl Cascini', pos: 'DM', rating: 88, num: 5 },
    { name: 'Sebastián Battaglia', pos: 'CM', rating: 89, num: 22 },
    { name: 'Diego Cagna', pos: 'CM', rating: 88, num: 8 },
    { name: 'Matías Donnet', pos: 'AM', rating: 87, num: 20 },
    { name: 'Rolando Schiavi', pos: 'CB', rating: 90, num: 2 },
    { name: 'Nicolás Burdisso', pos: 'CB', rating: 89, num: 6 },
    { name: 'Clemente Rodríguez', pos: 'LB', rating: 89, num: 3 },
    { name: 'Roberto Abbondanzieri', pos: 'GK', rating: 90, num: 1 }
  ]},
  { y: '2007', tag: 'Libertadores 2007', stars: [
    { name: 'Juan Román Riquelme', pos: 'AM', rating: 99, num: 10, bonus: 1 },
    { name: 'Martín Palermo', pos: 'ST', rating: 93, num: 9 },
    { name: 'Rodrigo Palacio', pos: 'RW', rating: 91, num: 14 },
    { name: 'Éver Banega', pos: 'DM', rating: 89, num: 5 },
    { name: 'Pablo Ledesma', pos: 'CM', rating: 87, num: 8 },
    { name: 'Neri Cardozo', pos: 'LW', rating: 87, num: 19 },
    { name: 'Hugo Ibarra', pos: 'RB', rating: 89, num: 4 },
    { name: 'Daniel Díaz', pos: 'CB', rating: 89, num: 6 },
    { name: 'Claudio Morel Rodríguez', pos: 'LB', rating: 88, nation: 'Paraguay', flag: '🇵🇾', num: 3 },
    { name: 'Matías Silvestre', pos: 'CB', rating: 85, num: 2 },
    { name: 'Mauricio Caranta', pos: 'GK', rating: 87, num: 12 }
  ]}
].forEach(item => t(buildTeam(`boc_${item.y}`, 'CA Boca Juniors', 'BOC', 'champions', item.y, item.tag, '🇦🇷', 'Argentina', 'legendary', item.stars)));

// CA RIVER PLATE
[
  { y: '1986', tag: 'Campeón Mundial 1986', stars: [
    { name: 'Norberto Alonso', pos: 'AM', rating: 94, num: 10, bonus: 1 },
    { name: 'Antonio Alzamendi', pos: 'ST', rating: 91, nation: 'Uruguay', flag: '🇺🇾', num: 7 },
    { name: 'Juan Gilberto Funes', pos: 'ST', rating: 89, num: 11 },
    { name: 'Roque Alfaro', pos: 'LW', rating: 87, num: 9 },
    { name: 'Américo Gallego', pos: 'DM', rating: 91, num: 5 },
    { name: 'Héctor Enrique', pos: 'CM', rating: 88, num: 8 },
    { name: 'Jorge Gordillo', pos: 'RB', rating: 87, num: 4 },
    { name: 'Nelson Gutiérrez', pos: 'CB', rating: 89, nation: 'Uruguay', flag: '🇺🇾', num: 2 },
    { name: 'Oscar Ruggeri', pos: 'CB', rating: 92, num: 6 },
    { name: 'Alejandro Montenegro', pos: 'LB', rating: 86, num: 3 },
    { name: 'Nery Pumpido', pos: 'GK', rating: 90, num: 1 }
  ]},
  { y: '1996', tag: 'Libertadores 1996', stars: [
    { name: 'Enzo Francescoli', pos: 'AM', sec: ['ST'], rating: 96, nation: 'Uruguay', flag: '🇺🇾', num: 9, bonus: 1 },
    { name: 'Hernán Crespo', pos: 'ST', rating: 92, num: 11 },
    { name: 'Ariel Ortega', pos: 'RW', sec: ['AM'], rating: 94, num: 7 },
    { name: 'Marcelo Gallardo', pos: 'AM', rating: 90, num: 10 },
    { name: 'Matías Almeyda', pos: 'DM', rating: 90, num: 5 },
    { name: 'Leonardo Astrada', pos: 'DM', rating: 88, num: 8 },
    { name: 'Hernán Díaz', pos: 'RB', rating: 87, num: 4 },
    { name: 'Celso Ayala', pos: 'CB', rating: 89, nation: 'Paraguay', flag: '🇵🇾', num: 2 },
    { name: 'Eduardo Berizzo', pos: 'CB', rating: 88, num: 6 },
    { name: 'Juan Pablo Sorín', pos: 'LB', rating: 90, num: 3 },
    { name: 'Germán Burgos', pos: 'GK', rating: 89, num: 1 }
  ]},
  { y: '2015', tag: 'Libertadores 2015', stars: [
    { name: 'Marcelo Barovero', pos: 'GK', rating: 91, num: 1, bonus: 1 },
    { name: 'Carlos Sánchez', pos: 'RW', rating: 90, nation: 'Uruguay', flag: '🇺🇾', num: 8 },
    { name: 'Lucas Alario', pos: 'ST', rating: 88, num: 13 },
    { name: 'Rodrigo Mora', pos: 'ST', rating: 88, nation: 'Uruguay', flag: '🇺🇾', num: 7 },
    { name: 'Matías Kranevitter', pos: 'DM', rating: 89, num: 5 },
    { name: 'Leonardo Ponzio', pos: 'DM', rating: 89, num: 23 },
    { name: 'Gonzalo Martínez', pos: 'LW', rating: 87, num: 10 },
    { name: 'Gabriel Mercado', pos: 'RB', rating: 87, num: 25 },
    { name: 'Jonatan Maidana', pos: 'CB', rating: 89, num: 2 },
    { name: 'Ramiro Funes Mori', pos: 'CB', rating: 88, num: 6 },
    { name: 'Leonel Vangioni', pos: 'LB', rating: 88, num: 3 }
  ]},
  { y: '2018', tag: 'Copa Eterna Madrid 2018', stars: [
    { name: 'Gonzalo Martínez', pos: 'AM', sec: ['LW'], rating: 92, num: 10, bonus: 1 },
    { name: 'Lucas Pratto', pos: 'ST', rating: 90, num: 27 },
    { name: 'Juan Fernando Quintero', pos: 'AM', rating: 92, nation: 'Colombia', flag: '🇨🇴', num: 8 },
    { name: 'Exequiel Palacios', pos: 'CM', rating: 89, num: 15 },
    { name: 'Enzo Pérez', pos: 'CM', sec: ['DM'], rating: 91, num: 24 },
    { name: 'Leonardo Ponzio', pos: 'DM', rating: 89, num: 23 },
    { name: 'Gonzalo Montiel', pos: 'RB', rating: 88, num: 29 },
    { name: 'Jonatan Maidana', pos: 'CB', rating: 89, num: 2 },
    { name: 'Javier Pinola', pos: 'CB', rating: 89, num: 22 },
    { name: 'Milton Casco', pos: 'LB', rating: 88, num: 20 },
    { name: 'Franco Armani', pos: 'GK', rating: 93, num: 1 }
  ]}
].forEach(item => t(buildTeam(`riv_${item.y}`, 'CA River Plate', 'RIV', 'champions', item.y, item.tag, '🇦🇷', 'Argentina', 'legendary', item.stars)));

console.log("Teams built up to River Plate.");

// We will write the full generator to run through tsx
