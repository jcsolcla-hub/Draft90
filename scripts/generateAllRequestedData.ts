import * as fs from 'fs';
import * as path from 'path';

// Load templates and definitions
import { buildTeam, Player, Team } from './teamBuilderHelper';

console.log("Generating full requested dataset for Draft 90...");

const allGeneratedTeams: Team[] = [];

// Helper to push team
function addTeam(t: Team) {
  allGeneratedTeams.push(t);
}

// ==========================================
// 1. HISTORICAL CLUBS WITH KEY YEARS
// ==========================================

// --- CA PEÑAROL (Uruguay) ---
const penarolYears = [
  {
    year: '1960',
    tag: 'Libertadores 1960',
    stars: [
      { name: 'Alberto Spencer', pos: 'ST', sec: ['AM'], rating: 94, nation: 'Ecuador', nationCode: 'EC', flag: '🇪🇨', num: 9, bonus: 1 },
      { name: 'José Sasía', pos: 'ST', sec: ['LW'], rating: 88, num: 10 },
      { name: 'Juan Joya', pos: 'LW', sec: ['RW'], rating: 89, nation: 'Perú', nationCode: 'PE', flag: '🇵🇪', num: 11 },
      { name: 'Luis Cubilla', pos: 'RW', sec: ['AM'], rating: 90, num: 7 },
      { name: 'Néstor Gonçalves', pos: 'DM', sec: ['CM'], rating: 91, num: 5 },
      { name: 'William Martínez', pos: 'CB', sec: ['RB'], rating: 89, num: 2 },
      { name: 'Luis Maidana', pos: 'GK', rating: 87, num: 1 },
      { name: 'Salvador', pos: 'CB', rating: 84, num: 3 },
      { name: 'Santiago Pino', pos: 'RB', rating: 83, num: 4 },
      { name: 'Walter Aguerre', pos: 'CM', rating: 85, num: 6 },
      { name: 'Carlos Linazza', pos: 'AM', rating: 85, num: 8 },
    ]
  },
  {
    year: '1961',
    tag: 'Bicampeón 1961',
    stars: [
      { name: 'Alberto Spencer', pos: 'ST', sec: ['AM'], rating: 95, nation: 'Ecuador', nationCode: 'EC', flag: '🇪🇨', num: 9, bonus: 1 },
      { name: 'José Sasía', pos: 'ST', sec: ['LW'], rating: 89, num: 10 },
      { name: 'Juan Joya', pos: 'LW', rating: 89, nation: 'Perú', nationCode: 'PE', flag: '🇵🇪', num: 11 },
      { name: 'Luis Cubilla', pos: 'RW', rating: 90, num: 7 },
      { name: 'Néstor Gonçalves', pos: 'DM', rating: 92, num: 5 },
      { name: 'William Martínez', pos: 'CB', rating: 89, num: 2 },
      { name: 'Luis Maidana', pos: 'GK', rating: 87, num: 1 },
      { name: 'Edgardo González', pos: 'CM', rating: 86, num: 8 },
      { name: 'Walter Aguerre', pos: 'CM', rating: 85, num: 6 },
      { name: 'Núber Cano', pos: 'CB', rating: 84, num: 3 },
      { name: 'Roberto Matosas', pos: 'LB', sec: ['CB'], rating: 88, num: 4 },
    ]
  },
  {
    year: '1966',
    tag: 'Campeón Intercontinental 1966',
    stars: [
      { name: 'Alberto Spencer', pos: 'ST', rating: 96, nation: 'Ecuador', nationCode: 'EC', flag: '🇪🇨', num: 9, bonus: 1 },
      { name: 'Pedro Rocha', pos: 'AM', sec: ['CM', 'ST'], rating: 94, num: 10 },
      { name: 'Ladislao Mazurkiewicz', pos: 'GK', rating: 94, num: 1 },
      { name: 'Juan Joya', pos: 'LW', rating: 89, nation: 'Perú', nationCode: 'PE', flag: '🇵🇪', num: 11 },
      { name: 'Julio César Abbadie', pos: 'RW', rating: 88, num: 7 },
      { name: 'Néstor Gonçalves', pos: 'DM', rating: 91, num: 5 },
      { name: 'Pablo Forlán', pos: 'RB', sec: ['CB'], rating: 88, num: 4 },
      { name: 'Juan Vicente Lezcano', pos: 'CB', rating: 87, nation: 'Paraguay', nationCode: 'PY', flag: '🇵🇾', num: 2 },
      { name: 'Luis Varela', pos: 'CB', rating: 86, num: 3 },
      { name: 'Omar Caetano', pos: 'LB', rating: 87, num: 6 },
      { name: 'Julio César Cortés', pos: 'CM', rating: 87, num: 8 },
    ]
  },
  {
    year: '1982',
    tag: 'Campeón Mundial 1982',
    stars: [
      { name: 'Fernando Morena', pos: 'ST', rating: 93, num: 9, bonus: 1 },
      { name: 'Venancio Ramos', pos: 'RW', rating: 88, num: 7 },
      { name: 'Walkir Silva', pos: 'LW', rating: 85, num: 11 },
      { name: 'Mario Saralegui', pos: 'CM', sec: ['AM'], rating: 87, num: 8 },
      { name: 'Miguel Bossio', pos: 'DM', rating: 86, num: 5 },
      { name: 'Jair Gonçalves', pos: 'AM', rating: 88, nation: 'Brasil', nationCode: 'BR', flag: '🇧🇷', num: 10 },
      { name: 'Víctor Diogo', pos: 'RB', rating: 88, num: 4 },
      { name: 'Walter Olivera', pos: 'CB', rating: 88, num: 2 },
      { name: 'Nelson Gutiérrez', pos: 'CB', rating: 87, num: 3 },
      { name: 'Washington González', pos: 'LB', rating: 86, num: 6 },
      { name: 'Gustavo Fernández', pos: 'GK', rating: 87, num: 1 },
    ]
  },
  {
    year: '1987',
    tag: 'Libertadores 1987',
    stars: [
      { name: 'Diego Aguirre', pos: 'ST', rating: 89, num: 9, bonus: 1 },
      { name: 'Alfonso Domínguez', pos: 'LB', rating: 87, num: 6 },
      { name: 'Eduardo Pereira', pos: 'GK', rating: 88, num: 1 },
      { name: 'José Perdomo', pos: 'DM', rating: 88, num: 5 },
      { name: 'Gustavo Matosas', pos: 'CM', sec: ['CB'], rating: 87, num: 8 },
      { name: 'Marcelo Rotti', pos: 'CB', rating: 85, num: 2 },
      { name: 'Obdulio Trasante', pos: 'CB', rating: 86, num: 3 },
      { name: 'José Herrera', pos: 'RB', rating: 86, num: 4 },
      { name: 'Daniel Vidal', pos: 'RW', rating: 84, num: 7 },
      { name: 'Ricardo Viera', pos: 'AM', rating: 86, num: 10 },
      { name: 'Jorge Cabrera', pos: 'LW', rating: 84, num: 11 },
    ]
  }
];

penarolYears.forEach(y => {
  addTeam(buildTeam(
    `pen_${y.year}`, 'CA Peñarol', 'PEN', 'champions', y.year, y.tag, '🇺🇾', 'Uruguay', 'legendary', y.stars
  ));
});

console.log("Peñarol added.");
