import { Team, FormationType, SlotConfig, Position, Player } from '../types';
import { ADDITIONAL_TEAMS } from './moreTeams';
import { MASSIVE_TEAMS_DATA } from './massiveTeamsData';
import { calibratePlayerRating } from '../utils/ratingCalibrator';

export const POSITIONS_MAP: Record<Position, { label: string; group: 'GK' | 'DEF' | 'MID' | 'ATT' }> = {
  GK: { label: 'GK', group: 'GK' },
  RB: { label: 'RB', group: 'DEF' },
  CB: { label: 'CB', group: 'DEF' },
  LB: { label: 'LB', group: 'DEF' },
  DM: { label: 'DM', group: 'MID' },
  CM: { label: 'CM', group: 'MID' },
  AM: { label: 'AM', group: 'MID' },
  RW: { label: 'RW', group: 'ATT' },
  LW: { label: 'LW', group: 'ATT' },
  ST: { label: 'ST', group: 'ATT' },
};

// Formations definitions mapped to coordinates (x% left, y% top) on the field
export const FORMATIONS: Record<FormationType, SlotConfig[]> = {
  '4-3-3': [
    { id: 'f_gk', pos: 'GK', x: 50, y: 88 },
    { id: 'f_lb', pos: 'LB', x: 18, y: 72 },
    { id: 'f_cb1', pos: 'CB', x: 38, y: 76 },
    { id: 'f_cb2', pos: 'CB', x: 62, y: 76 },
    { id: 'f_rb', pos: 'RB', x: 82, y: 72 },
    { id: 'f_cm1', pos: 'CM', x: 30, y: 52 },
    { id: 'f_dm', pos: 'DM', x: 50, y: 58 },
    { id: 'f_cm2', pos: 'CM', x: 70, y: 52 },
    { id: 'f_lw', pos: 'LW', x: 22, y: 26 },
    { id: 'f_st', pos: 'ST', x: 50, y: 18 },
    { id: 'f_rw', pos: 'RW', x: 78, y: 26 },
  ],
  '4-4-2': [
    { id: 'f_gk', pos: 'GK', x: 50, y: 88 },
    { id: 'f_lb', pos: 'LB', x: 18, y: 72 },
    { id: 'f_cb1', pos: 'CB', x: 38, y: 76 },
    { id: 'f_cb2', pos: 'CB', x: 62, y: 76 },
    { id: 'f_rb', pos: 'RB', x: 82, y: 72 },
    { id: 'f_lm', pos: 'LW', x: 18, y: 48 },
    { id: 'f_cm1', pos: 'CM', x: 38, y: 54 },
    { id: 'f_cm2', pos: 'CM', x: 62, y: 54 },
    { id: 'f_rm', pos: 'RW', x: 82, y: 48 },
    { id: 'f_st1', pos: 'ST', x: 38, y: 20 },
    { id: 'f_st2', pos: 'ST', x: 62, y: 20 },
  ],
  '4-2-3-1': [
    { id: 'f_gk', pos: 'GK', x: 50, y: 88 },
    { id: 'f_lb', pos: 'LB', x: 18, y: 72 },
    { id: 'f_cb1', pos: 'CB', x: 38, y: 76 },
    { id: 'f_cb2', pos: 'CB', x: 62, y: 76 },
    { id: 'f_rb', pos: 'RB', x: 82, y: 72 },
    { id: 'f_dm1', pos: 'DM', x: 36, y: 58 },
    { id: 'f_dm2', pos: 'DM', x: 64, y: 58 },
    { id: 'f_lw', pos: 'LW', x: 20, y: 36 },
    { id: 'f_am', pos: 'AM', x: 50, y: 36 },
    { id: 'f_rw', pos: 'RW', x: 80, y: 36 },
    { id: 'f_st', pos: 'ST', x: 50, y: 16 },
  ],
  '3-5-2': [
    { id: 'f_gk', pos: 'GK', x: 50, y: 88 },
    { id: 'f_cb1', pos: 'CB', x: 28, y: 76 },
    { id: 'f_cb2', pos: 'CB', x: 50, y: 80 },
    { id: 'f_cb3', pos: 'CB', x: 72, y: 76 },
    { id: 'f_lm', pos: 'LB', x: 14, y: 50 },
    { id: 'f_dm', pos: 'DM', x: 36, y: 56 },
    { id: 'f_am', pos: 'AM', x: 50, y: 42 },
    { id: 'f_cm', pos: 'CM', x: 64, y: 56 },
    { id: 'f_rm', pos: 'RB', x: 86, y: 50 },
    { id: 'f_st1', pos: 'ST', x: 38, y: 18 },
    { id: 'f_st2', pos: 'ST', x: 62, y: 18 },
  ],
  '3-4-3': [
    { id: 'f_gk', pos: 'GK', x: 50, y: 88 },
    { id: 'f_cb1', pos: 'CB', x: 28, y: 76 },
    { id: 'f_cb2', pos: 'CB', x: 50, y: 80 },
    { id: 'f_cb3', pos: 'CB', x: 72, y: 76 },
    { id: 'f_lm', pos: 'LB', x: 16, y: 52 },
    { id: 'f_cm1', pos: 'CM', x: 38, y: 56 },
    { id: 'f_cm2', pos: 'CM', x: 62, y: 56 },
    { id: 'f_rm', pos: 'RB', x: 84, y: 52 },
    { id: 'f_lw', pos: 'LW', x: 22, y: 22 },
    { id: 'f_st', pos: 'ST', x: 50, y: 16 },
    { id: 'f_rw', pos: 'RW', x: 78, y: 22 },
  ],
  '5-3-2': [
    { id: 'f_gk', pos: 'GK', x: 50, y: 88 },
    { id: 'f_lb', pos: 'LB', x: 12, y: 68 },
    { id: 'f_cb1', pos: 'CB', x: 30, y: 78 },
    { id: 'f_cb2', pos: 'CB', x: 50, y: 82 },
    { id: 'f_cb3', pos: 'CB', x: 70, y: 78 },
    { id: 'f_rb', pos: 'RB', x: 88, y: 68 },
    { id: 'f_cm1', pos: 'CM', x: 32, y: 50 },
    { id: 'f_dm', pos: 'DM', x: 50, y: 54 },
    { id: 'f_cm2', pos: 'CM', x: 68, y: 50 },
    { id: 'f_st1', pos: 'ST', x: 38, y: 18 },
    { id: 'f_st2', pos: 'ST', x: 62, y: 18 },
  ],
};

// Check if player position fits slot position
export function evaluatePositionFit(playerPos: Position[], slotPos: Position): 'exact' | 'secondary' | 'out_of_position' {
  if (playerPos.includes(slotPos)) return 'exact';
  const slotGroup = POSITIONS_MAP[slotPos].group;
  const isSameGroup = playerPos.some(p => POSITIONS_MAP[p].group === slotGroup);
  if (isSameGroup) return 'secondary';
  return 'out_of_position';
}

export function calculateEffectiveRating(player: Player, slotPos: Position): number {
  const fit = evaluatePositionFit(player.positions, slotPos);
  let base = player.rating + (player.bonus || 0);
  if (fit === 'secondary') base -= 4;
  if (fit === 'out_of_position') base -= 12;
  return Math.max(35, Math.min(99, base));
}

// Full Historical Teams Dataset featuring ALL requested countries and clubs!
const BASE_HISTORICAL_TEAMS: Team[] = [
  // --- PAÍSES (NATIONAL TEAMS) ---
  {
    id: 'de_2014', name: 'Alemania', shortCode: 'DE', type: 'worldcup', year: '2014', tag: 'Cup 2014', flag: '🇩🇪', country: 'Germany',
    players: [
      { id: 'de_1', number: 1, name: 'Neuer', positions: ['GK'], primaryPos: 'GK', rating: 94, bonus: 1, nation: 'Alemania', nationCode: 'DE', flag: '🇩🇪', club: 'Bayern', year: '2014', tournament: 'worldcup' },
      { id: 'de_13', number: 13, name: 'T. Müller', positions: ['ST', 'RW'], primaryPos: 'ST', rating: 93, nation: 'Alemania', nationCode: 'DE', flag: '🇩🇪', club: 'Bayern', year: '2014', tournament: 'worldcup' },
      { id: 'de_8', number: 8, name: 'Kroos', positions: ['CM', 'DM'], primaryPos: 'CM', rating: 85, nation: 'Alemania', nationCode: 'DE', flag: '🇩🇪', club: 'Bayern', year: '2014', tournament: 'worldcup' },
      { id: 'de_16', number: 16, name: 'Lahm', positions: ['RB', 'DM'], primaryPos: 'RB', rating: 86, nation: 'Alemania', nationCode: 'DE', flag: '🇩🇪', club: 'Bayern', year: '2014', tournament: 'worldcup' },
      { id: 'de_5', number: 5, name: 'Hummels', positions: ['CB'], primaryPos: 'CB', rating: 84, nation: 'Alemania', nationCode: 'DE', flag: '🇩🇪', club: 'Dortmund', year: '2014', tournament: 'worldcup' },
      { id: 'de_7', number: 7, name: 'Schweinsteiger', positions: ['CM', 'DM'], primaryPos: 'CM', rating: 84, nation: 'Alemania', nationCode: 'DE', flag: '🇩🇪', club: 'Bayern', year: '2014', tournament: 'worldcup' },
      { id: 'de_11', number: 11, name: 'Klose', positions: ['ST'], primaryPos: 'ST', rating: 80, nation: 'Alemania', nationCode: 'DE', flag: '🇩🇪', club: 'Lazio', year: '2014', tournament: 'worldcup' },
      { id: 'de_10', number: 10, name: 'Götze', positions: ['AM', 'LW'], primaryPos: 'AM', rating: 81, nation: 'Alemania', nationCode: 'DE', flag: '🇩🇪', club: 'Bayern', year: '2014', tournament: 'worldcup' },
      { id: 'de_20', number: 20, name: 'Boateng', positions: ['CB'], primaryPos: 'CB', rating: 83, nation: 'Alemania', nationCode: 'DE', flag: '🇩🇪', club: 'Bayern', year: '2014', tournament: 'worldcup' },
      { id: 'de_4', number: 4, name: 'Höwedes', positions: ['LB', 'CB'], primaryPos: 'LB', rating: 78, nation: 'Alemania', nationCode: 'DE', flag: '🇩🇪', club: 'Schalke', year: '2014', tournament: 'worldcup' },
      { id: 'de_6', number: 6, name: 'Khedira', positions: ['DM', 'CM'], primaryPos: 'DM', rating: 79, nation: 'Alemania', nationCode: 'DE', flag: '🇩🇪', club: 'Real Madrid', year: '2014', tournament: 'worldcup' },
    ]
  },
  {
    id: 'sa_1994', name: 'Arabia Saudita', shortCode: 'SA', type: 'worldcup', year: '1994', tag: 'Cup 1994', flag: '🇸🇦', country: 'Saudi Arabia',
    players: [
      { id: 'sa_10', number: 10, name: 'Saeed Al-Owairan', positions: ['AM', 'ST'], primaryPos: 'AM', rating: 86, bonus: 1, nation: 'Arabia Saudita', nationCode: 'SA', flag: '🇸🇦', club: 'Al-Shabab', year: '1994', tournament: 'worldcup' },
      { id: 'sa_9', number: 9, name: 'Majed Abdullah', positions: ['ST'], primaryPos: 'ST', rating: 77, nation: 'Arabia Saudita', nationCode: 'SA', flag: '🇸🇦', club: 'Al-Nassr', year: '1994', tournament: 'worldcup' },
      { id: 'sa_1', number: 1, name: 'Al-Deayea', positions: ['GK'], primaryPos: 'GK', rating: 77, nation: 'Arabia Saudita', nationCode: 'SA', flag: '🇸🇦', club: 'Al-Tai', year: '1994', tournament: 'worldcup' },
      { id: 'sa_8', number: 8, name: 'Fahad Al-Bishi', positions: ['CM', 'AM'], primaryPos: 'CM', rating: 75, nation: 'Arabia Saudita', nationCode: 'SA', flag: '🇸🇦', club: 'Al-Nassr', year: '1994', tournament: 'worldcup' },
      { id: 'sa_4', number: 4, name: 'Abdullah Zubromawi', positions: ['CB'], primaryPos: 'CB', rating: 73, nation: 'Arabia Saudita', nationCode: 'SA', flag: '🇸🇦', club: 'Al-Ahli', year: '1994', tournament: 'worldcup' },
      { id: 'sa_2', number: 2, name: 'Al-Jahani', positions: ['RB'], primaryPos: 'RB', rating: 74, nation: 'Arabia Saudita', nationCode: 'SA', flag: '🇸🇦', club: 'Al-Ittihad', year: '1994', tournament: 'worldcup' },
      { id: 'sa_13', number: 13, name: 'Mohamed Al-Jawad', positions: ['LB'], primaryPos: 'LB', rating: 73, nation: 'Arabia Saudita', nationCode: 'SA', flag: '🇸🇦', club: 'Al-Ahli', year: '1994', tournament: 'worldcup' },
      { id: 'sa_16', number: 16, name: 'Khamis Al-Owairan', positions: ['DM'], primaryPos: 'DM', rating: 73, nation: 'Arabia Saudita', nationCode: 'SA', flag: '🇸🇦', club: 'Al-Hilal', year: '1994', tournament: 'worldcup' },
      { id: 'sa_7', number: 7, name: 'Fuad Anwar', positions: ['CM', 'DM'], primaryPos: 'CM', rating: 75, nation: 'Arabia Saudita', nationCode: 'SA', flag: '🇸🇦', club: 'Al-Shabab', year: '1994', tournament: 'worldcup' },
      { id: 'sa_12', number: 12, name: 'Sami Al-Jaber', positions: ['ST', 'RW'], primaryPos: 'ST', rating: 76, nation: 'Arabia Saudita', nationCode: 'SA', flag: '🇸🇦', club: 'Al-Hilal', year: '1994', tournament: 'worldcup' },
      { id: 'sa_5', number: 5, name: 'Ahmad Jamil', positions: ['CB'], primaryPos: 'CB', rating: 74, nation: 'Arabia Saudita', nationCode: 'SA', flag: '🇸🇦', club: 'Al-Ittihad', year: '1994', tournament: 'worldcup' },
    ]
  },
  {
    id: 'dz_2014', name: 'Argelia', shortCode: 'DZ', type: 'worldcup', year: '2014', tag: 'Cup 2014', flag: '🇩🇿', country: 'Algeria',
    players: [
      { id: 'dz_10', number: 10, name: 'Feghouli', positions: ['RW', 'AM'], primaryPos: 'RW', rating: 86, bonus: 1, nation: 'Argelia', nationCode: 'DZ', flag: '🇩🇿', club: 'Valencia', year: '2014', tournament: 'worldcup' },
      { id: 'dz_13', number: 13, name: 'Slimani', positions: ['ST'], primaryPos: 'ST', rating: 77, nation: 'Argelia', nationCode: 'DZ', flag: '🇩🇿', club: 'Sporting CP', year: '2014', tournament: 'worldcup' },
      { id: 'dz_11', number: 11, name: 'Brahimi', positions: ['LW', 'AM'], primaryPos: 'LW', rating: 77, nation: 'Argelia', nationCode: 'DZ', flag: '🇩🇿', club: 'Granada', year: '2014', tournament: 'worldcup' },
      { id: 'dz_23', number: 23, name: 'M\'Bolhi', positions: ['GK'], primaryPos: 'GK', rating: 80, nation: 'Argelia', nationCode: 'DZ', flag: '🇩🇿', club: 'CSKA Sofia', year: '2014', tournament: 'worldcup' },
      { id: 'dz_12', number: 12, name: 'Medjani', positions: ['CB', 'DM'], primaryPos: 'CB', rating: 75, nation: 'Argelia', nationCode: 'DZ', flag: '🇩🇿', club: 'Valenciennes', year: '2014', tournament: 'worldcup' },
      { id: 'dz_14', number: 14, name: 'Bentaleb', positions: ['CM', 'DM'], primaryPos: 'CM', rating: 75, nation: 'Argelia', nationCode: 'DZ', flag: '🇩🇿', club: 'Tottenham', year: '2014', tournament: 'worldcup' },
      { id: 'dz_22', number: 22, name: 'Mostefa', positions: ['RB', 'DM'], primaryPos: 'RB', rating: 74, nation: 'Argelia', nationCode: 'DZ', flag: '🇩🇿', club: 'Ajaccio', year: '2014', tournament: 'worldcup' },
      { id: 'dz_3', number: 3, name: 'Ghoulam', positions: ['LB'], primaryPos: 'LB', rating: 76, nation: 'Argelia', nationCode: 'DZ', flag: '🇩🇿', club: 'Napoli', year: '2014', tournament: 'worldcup' },
      { id: 'dz_2', number: 2, name: 'Bougherra', positions: ['CB'], primaryPos: 'CB', rating: 74, nation: 'Argelia', nationCode: 'DZ', flag: '🇩🇿', club: 'Lekhwiya', year: '2014', tournament: 'worldcup' },
      { id: 'dz_8', number: 8, name: 'Lacen', positions: ['CM', 'DM'], primaryPos: 'CM', rating: 73, nation: 'Argelia', nationCode: 'DZ', flag: '🇩🇿', club: 'Getafe', year: '2014', tournament: 'worldcup' },
      { id: 'dz_15', number: 15, name: 'Soudani', positions: ['ST', 'RW'], primaryPos: 'ST', rating: 75, nation: 'Argelia', nationCode: 'DZ', flag: '🇩🇿', club: 'Dinamo Zagreb', year: '2014', tournament: 'worldcup' },
    ]
  },
  {
    id: 'arg_2022', name: 'Argentina', shortCode: 'AR', type: 'worldcup', year: '2022', tag: 'Cup 2022', flag: '🇦🇷', country: 'Argentina',
    players: [
      { id: 'arg_10', number: 10, name: 'Messi', positions: ['AM', 'RW'], primaryPos: 'RW', rating: 94, bonus: 1, nation: 'Argentina', nationCode: 'AR', flag: '🇦🇷', club: 'PSG', year: '2022', tournament: 'worldcup' },
      { id: 'arg_11', number: 11, name: 'Di María', positions: ['RW', 'LW'], primaryPos: 'RW', rating: 83, nation: 'Argentina', nationCode: 'AR', flag: '🇦🇷', club: 'Juventus', year: '2022', tournament: 'worldcup' },
      { id: 'arg_9', number: 9, name: 'J. Álvarez', positions: ['ST', 'LW'], primaryPos: 'ST', rating: 80, nation: 'Argentina', nationCode: 'AR', flag: '🇦🇷', club: 'Man City', year: '2022', tournament: 'worldcup' },
      { id: 'arg_23', number: 23, name: 'E. Martínez', positions: ['GK'], primaryPos: 'GK', rating: 84, nation: 'Argentina', nationCode: 'AR', flag: '🇦🇷', club: 'Aston Villa', year: '2022', tournament: 'worldcup' },
      { id: 'arg_7', number: 7, name: 'De Paul', positions: ['CM', 'DM'], primaryPos: 'CM', rating: 81, nation: 'Argentina', nationCode: 'AR', flag: '🇦🇷', club: 'Atlético Madrid', year: '2022', tournament: 'worldcup' },
      { id: 'arg_20', number: 20, name: 'Mac Allister', positions: ['CM', 'AM'], primaryPos: 'CM', rating: 80, nation: 'Argentina', nationCode: 'AR', flag: '🇦🇷', club: 'Brighton', year: '2022', tournament: 'worldcup' },
      { id: 'arg_24', number: 24, name: 'E. Fernández', positions: ['DM', 'CM'], primaryPos: 'DM', rating: 80, nation: 'Argentina', nationCode: 'AR', flag: '🇦🇷', club: 'Benfica', year: '2022', tournament: 'worldcup' },
      { id: 'arg_19', number: 19, name: 'Otamendi', positions: ['CB'], primaryPos: 'CB', rating: 78, nation: 'Argentina', nationCode: 'AR', flag: '🇦🇷', club: 'Benfica', year: '2022', tournament: 'worldcup' },
      { id: 'arg_13', number: 13, name: 'C. Romero', positions: ['CB'], primaryPos: 'CB', rating: 81, nation: 'Argentina', nationCode: 'AR', flag: '🇦🇷', club: 'Tottenham', year: '2022', tournament: 'worldcup' },
      { id: 'arg_26', number: 26, name: 'Molina', positions: ['RB'], primaryPos: 'RB', rating: 77, nation: 'Argentina', nationCode: 'AR', flag: '🇦🇷', club: 'Atlético Madrid', year: '2022', tournament: 'worldcup' },
      { id: 'arg_8', number: 8, name: 'Acuña', positions: ['LB'], primaryPos: 'LB', rating: 78, nation: 'Argentina', nationCode: 'AR', flag: '🇦🇷', club: 'Sevilla', year: '2022', tournament: 'worldcup' },
    ]
  },
  {
    id: 'au_2006', name: 'Australia', shortCode: 'AU', type: 'worldcup', year: '2006', tag: 'Cup 2006', flag: '🇦🇺', country: 'Australia',
    players: [
      { id: 'au_4', number: 4, name: 'Tim Cahill', positions: ['AM', 'ST'], primaryPos: 'AM', rating: 86, bonus: 1, nation: 'Australia', nationCode: 'AU', flag: '🇦🇺', club: 'Everton', year: '2006', tournament: 'worldcup' },
      { id: 'au_9', number: 9, name: 'Mark Viduka', positions: ['ST'], primaryPos: 'ST', rating: 78, nation: 'Australia', nationCode: 'AU', flag: '🇦🇺', club: 'Middlesbrough', year: '2006', tournament: 'worldcup' },
      { id: 'au_10', number: 10, name: 'Harry Kewell', positions: ['LW', 'AM'], primaryPos: 'LW', rating: 78, nation: 'Australia', nationCode: 'AU', flag: '🇦🇺', club: 'Liverpool', year: '2006', tournament: 'worldcup' },
      { id: 'au_1', number: 1, name: 'Mark Schwarzer', positions: ['GK'], primaryPos: 'GK', rating: 77, nation: 'Australia', nationCode: 'AU', flag: '🇦🇺', club: 'Middlesbrough', year: '2006', tournament: 'worldcup' },
      { id: 'au_23', number: 23, name: 'Bresciano', positions: ['CM', 'LW'], primaryPos: 'CM', rating: 76, nation: 'Australia', nationCode: 'AU', flag: '🇦🇺', club: 'Parma', year: '2006', tournament: 'worldcup' },
      { id: 'au_7', number: 7, name: 'Emerton', positions: ['RB', 'RW'], primaryPos: 'RB', rating: 75, nation: 'Australia', nationCode: 'AU', flag: '🇦🇺', club: 'Blackburn', year: '2006', tournament: 'worldcup' },
      { id: 'au_2', number: 2, name: 'Lucas Neill', positions: ['CB', 'RB'], primaryPos: 'CB', rating: 77, nation: 'Australia', nationCode: 'AU', flag: '🇦🇺', club: 'Blackburn', year: '2006', tournament: 'worldcup' },
      { id: 'au_3', number: 3, name: 'Craig Moore', positions: ['CB'], primaryPos: 'CB', rating: 75, nation: 'Australia', nationCode: 'AU', flag: '🇦🇺', club: 'Newcastle', year: '2006', tournament: 'worldcup' },
      { id: 'au_14', number: 14, name: 'Scott Chipperfield', positions: ['LB'], primaryPos: 'LB', rating: 74, nation: 'Australia', nationCode: 'AU', flag: '🇦🇺', club: 'Basel', year: '2006', tournament: 'worldcup' },
      { id: 'au_13', number: 13, name: 'Vince Grella', positions: ['DM'], primaryPos: 'DM', rating: 75, nation: 'Australia', nationCode: 'AU', flag: '🇦🇺', club: 'Parma', year: '2006', tournament: 'worldcup' },
      { id: 'au_15', number: 15, name: 'John Aloisi', positions: ['ST'], primaryPos: 'ST', rating: 75, nation: 'Australia', nationCode: 'AU', flag: '🇦🇺', club: 'Alavés', year: '2006', tournament: 'worldcup' },
    ]
  },
  {
    id: 'at_1998', name: 'Austria', shortCode: 'AT', type: 'worldcup', year: '1998', tag: 'Cup 1998', flag: '🇦🇹', country: 'Austria',
    players: [
      { id: 'at_9', number: 9, name: 'Toni Polster', positions: ['ST'], primaryPos: 'ST', rating: 86, bonus: 1, nation: 'Austria', nationCode: 'AT', flag: '🇦🇹', club: 'Köln', year: '1998', tournament: 'worldcup' },
      { id: 'at_10', number: 10, name: 'Andreas Herzog', positions: ['AM', 'CM'], primaryPos: 'AM', rating: 79, nation: 'Austria', nationCode: 'AT', flag: '🇦🇹', club: 'Werder Bremen', year: '1998', tournament: 'worldcup' },
      { id: 'at_1', number: 1, name: 'Konsel', positions: ['GK'], primaryPos: 'GK', rating: 77, nation: 'Austria', nationCode: 'AT', flag: '🇦🇹', club: 'Roma', year: '1998', tournament: 'worldcup' },
      { id: 'at_19', number: 19, name: 'Ivica Vastić', positions: ['ST', 'AM'], primaryPos: 'ST', rating: 76, nation: 'Austria', nationCode: 'AT', flag: '🇦🇹', club: 'Sturm Graz', year: '1998', tournament: 'worldcup' },
      { id: 'at_5', number: 5, name: 'Feiersinger', positions: ['CB'], primaryPos: 'CB', rating: 76, nation: 'Austria', nationCode: 'AT', flag: '🇦🇹', club: 'Dortmund', year: '1998', tournament: 'worldcup' },
      { id: 'at_3', number: 3, name: 'Schöttel', positions: ['CB'], primaryPos: 'CB', rating: 74, nation: 'Austria', nationCode: 'AT', flag: '🇦🇹', club: 'Rapid Wien', year: '1998', tournament: 'worldcup' },
      { id: 'at_4', number: 4, name: 'Pfeffer', positions: ['CB'], primaryPos: 'CB', rating: 73, nation: 'Austria', nationCode: 'AT', flag: '🇦🇹', club: 'Austria Wien', year: '1998', tournament: 'worldcup' },
      { id: 'at_2', number: 2, name: 'Markus Schopp', positions: ['RB', 'RW'], primaryPos: 'RB', rating: 74, nation: 'Austria', nationCode: 'AT', flag: '🇦🇹', club: 'Sturm Graz', year: '1998', tournament: 'worldcup' },
      { id: 'at_8', number: 8, name: 'Pfeifenberger', positions: ['LW', 'ST'], primaryPos: 'LW', rating: 75, nation: 'Austria', nationCode: 'AT', flag: '🇦🇹', club: 'Werder Bremen', year: '1998', tournament: 'worldcup' },
      { id: 'at_17', number: 17, name: 'Mählich', positions: ['DM', 'CM'], primaryPos: 'DM', rating: 74, nation: 'Austria', nationCode: 'AT', flag: '🇦🇹', club: 'Sturm Graz', year: '1998', tournament: 'worldcup' },
      { id: 'at_15', number: 15, name: 'Wetl', positions: ['LB'], primaryPos: 'LB', rating: 73, nation: 'Austria', nationCode: 'AT', flag: '🇦🇹', club: 'Rapid Wien', year: '1998', tournament: 'worldcup' },
    ]
  },
  {
    id: 'be_2018', name: 'Bélgica', shortCode: 'BE', type: 'worldcup', year: '2018', tag: 'Cup 2018', flag: '🇧🇪', country: 'Belgium',
    players: [
      { id: 'be_7', number: 7, name: 'De Bruyne', positions: ['CM', 'AM'], primaryPos: 'CM', rating: 87, bonus: 1, nation: 'Bélgica', nationCode: 'BE', flag: '🇧🇪', club: 'Man City', year: '2018', tournament: 'worldcup' },
      { id: 'be_10', number: 10, name: 'E. Hazard', positions: ['LW', 'AM'], primaryPos: 'LW', rating: 86, nation: 'Bélgica', nationCode: 'BE', flag: '🇧🇪', club: 'Chelsea', year: '2018', tournament: 'worldcup' },
      { id: 'be_9', number: 9, name: 'Lukaku', positions: ['ST'], primaryPos: 'ST', rating: 84, nation: 'Bélgica', nationCode: 'BE', flag: '🇧🇪', club: 'Man Utd', year: '2018', tournament: 'worldcup' },
      { id: 'be_1', number: 1, name: 'Courtois', positions: ['GK'], primaryPos: 'GK', rating: 85, nation: 'Bélgica', nationCode: 'BE', flag: '🇧🇪', club: 'Chelsea', year: '2018', tournament: 'worldcup' },
      { id: 'be_4', number: 4, name: 'Kompany', positions: ['CB'], primaryPos: 'CB', rating: 83, nation: 'Bélgica', nationCode: 'BE', flag: '🇧🇪', club: 'Man City', year: '2018', tournament: 'worldcup' },
      { id: 'be_5', number: 5, name: 'Vertonghen', positions: ['CB', 'LB'], primaryPos: 'CB', rating: 81, nation: 'Bélgica', nationCode: 'BE', flag: '🇧🇪', club: 'Tottenham', year: '2018', tournament: 'worldcup' },
      { id: 'be_2', number: 2, name: 'Alderweireld', positions: ['CB', 'RB'], primaryPos: 'CB', rating: 81, nation: 'Bélgica', nationCode: 'BE', flag: '🇧🇪', club: 'Tottenham', year: '2018', tournament: 'worldcup' },
      { id: 'be_15', number: 15, name: 'Meunier', positions: ['RB'], primaryPos: 'RB', rating: 77, nation: 'Bélgica', nationCode: 'BE', flag: '🇧🇪', club: 'PSG', year: '2018', tournament: 'worldcup' },
      { id: 'be_6', number: 6, name: 'Witsel', positions: ['DM', 'CM'], primaryPos: 'DM', rating: 79, nation: 'Bélgica', nationCode: 'BE', flag: '🇧🇪', club: 'Tianjin', year: '2018', tournament: 'worldcup' },
      { id: 'be_8', number: 8, name: 'Fellaini', positions: ['CM', 'AM'], primaryPos: 'CM', rating: 77, nation: 'Bélgica', nationCode: 'BE', flag: '🇧🇪', club: 'Man Utd', year: '2018', tournament: 'worldcup' },
      { id: 'be_14', number: 14, name: 'Mertens', positions: ['ST', 'RW'], primaryPos: 'RW', rating: 80, nation: 'Bélgica', nationCode: 'BE', flag: '🇧🇪', club: 'Napoli', year: '2018', tournament: 'worldcup' },
    ]
  },
  {
    id: 'bo_1994', name: 'Bolivia', shortCode: 'BO', type: 'worldcup', year: '1994', tag: 'Cup 1994', flag: '🇧🇴', country: 'Bolivia',
    players: [
      { id: 'bo_10', number: 10, name: 'Marco Etcheverry', positions: ['AM', 'LW'], primaryPos: 'AM', rating: 86, bonus: 1, nation: 'Bolivia', nationCode: 'BO', flag: '🇧🇴', club: 'Colo-Colo', year: '1994', tournament: 'worldcup' },
      { id: 'bo_9', number: 9, name: 'Jaime Moreno', positions: ['ST'], primaryPos: 'ST', rating: 75, nation: 'Bolivia', nationCode: 'BO', flag: '🇧🇴', club: 'Santa Fe', year: '1994', tournament: 'worldcup' },
      { id: 'bo_1', number: 1, name: 'Carlos Trucco', positions: ['GK'], primaryPos: 'GK', rating: 75, nation: 'Bolivia', nationCode: 'BO', flag: '🇧🇴', club: 'Bolívar', year: '1994', tournament: 'worldcup' },
      { id: 'bo_16', number: 16, name: 'Luis Cristaldo', positions: ['CM', 'LB'], primaryPos: 'CM', rating: 74, nation: 'Bolivia', nationCode: 'BO', flag: '🇧🇴', club: 'Bolívar', year: '1994', tournament: 'worldcup' },
      { id: 'bo_5', number: 5, name: 'Gustavo Quinteros', positions: ['CB'], primaryPos: 'CB', rating: 74, nation: 'Bolivia', nationCode: 'BO', flag: '🇧🇴', club: 'The Strongest', year: '1994', tournament: 'worldcup' },
      { id: 'bo_3', number: 3, name: 'Marco Sandy', positions: ['CB'], primaryPos: 'CB', rating: 73, nation: 'Bolivia', nationCode: 'BO', flag: '🇧🇴', club: 'Bolívar', year: '1994', tournament: 'worldcup' },
      { id: 'bo_4', number: 4, name: 'Miguel Rimba', positions: ['RB'], primaryPos: 'RB', rating: 74, nation: 'Bolivia', nationCode: 'BO', flag: '🇧🇴', club: 'Bolívar', year: '1994', tournament: 'worldcup' },
      { id: 'bo_15', number: 15, name: 'Vladimir Soria', positions: ['DM'], primaryPos: 'DM', rating: 73, nation: 'Bolivia', nationCode: 'BO', flag: '🇧🇴', club: 'Bolívar', year: '1994', tournament: 'worldcup' },
      { id: 'bo_21', number: 21, name: 'Erwin Sánchez', positions: ['AM', 'CM'], primaryPos: 'AM', rating: 77, nation: 'Bolivia', nationCode: 'BO', flag: '🇧🇴', club: 'Boavista', year: '1994', tournament: 'worldcup' },
      { id: 'bo_18', number: 18, name: 'William Ramallo', positions: ['ST'], primaryPos: 'ST', rating: 74, nation: 'Bolivia', nationCode: 'BO', flag: '🇧🇴', club: 'Oriente Petrolero', year: '1994', tournament: 'worldcup' },
      { id: 'bo_2', number: 2, name: 'Juan Manuel Peña', positions: ['CB'], primaryPos: 'CB', rating: 75, nation: 'Bolivia', nationCode: 'BO', flag: '🇧🇴', club: 'Santa Fe', year: '1994', tournament: 'worldcup' },
    ]
  },
  {
    id: 'ba_2014', name: 'Bosnia y Herzegovina', shortCode: 'BA', type: 'worldcup', year: '2014', tag: 'Cup 2014', flag: '🇧🇦', country: 'Bosnia and Herzegovina',
    players: [
      { id: 'ba_11', number: 11, name: 'Edin Džeko', positions: ['ST'], primaryPos: 'ST', rating: 86, bonus: 1, nation: 'Bosnia', nationCode: 'BA', flag: '🇧🇦', club: 'Man City', year: '2014', tournament: 'worldcup' },
      { id: 'ba_10', number: 10, name: 'Zvjezdan Misimović', positions: ['AM'], primaryPos: 'AM', rating: 77, nation: 'Bosnia', nationCode: 'BA', flag: '🇧🇦', club: 'Guizhou', year: '2014', tournament: 'worldcup' },
      { id: 'ba_8', number: 8, name: 'Miralem Pjanić', positions: ['CM', 'AM'], primaryPos: 'CM', rating: 80, nation: 'Bosnia', nationCode: 'BA', flag: '🇧🇦', club: 'Roma', year: '2014', tournament: 'worldcup' },
      { id: 'ba_1', number: 1, name: 'Asmir Begović', positions: ['GK'], primaryPos: 'GK', rating: 77, nation: 'Bosnia', nationCode: 'BA', flag: '🇧🇦', club: 'Stoke City', year: '2014', tournament: 'worldcup' },
      { id: 'ba_4', number: 4, name: 'Emir Spahić', positions: ['CB'], primaryPos: 'CB', rating: 76, nation: 'Bosnia', nationCode: 'BA', flag: '🇧🇦', club: 'Bayer Leverkusen', year: '2014', tournament: 'worldcup' },
      { id: 'ba_16', number: 16, name: 'Senad Lulić', positions: ['LB', 'LW'], primaryPos: 'LB', rating: 76, nation: 'Bosnia', nationCode: 'BA', flag: '🇧🇦', club: 'Lazio', year: '2014', tournament: 'worldcup' },
      { id: 'ba_13', number: 13, name: 'Muhamed Bešić', positions: ['DM', 'CB'], primaryPos: 'DM', rating: 74, nation: 'Bosnia', nationCode: 'BA', flag: '🇧🇦', club: 'Ferencváros', year: '2014', tournament: 'worldcup' },
      { id: 'ba_9', number: 9, name: 'Vedad Ibišević', positions: ['ST'], primaryPos: 'ST', rating: 76, nation: 'Bosnia', nationCode: 'BA', flag: '🇧🇦', club: 'Stuttgart', year: '2014', tournament: 'worldcup' },
      { id: 'ba_14', number: 14, name: 'Tino-Sven Sušić', positions: ['CM'], primaryPos: 'CM', rating: 74, nation: 'Bosnia', nationCode: 'BA', flag: '🇧🇦', club: 'Hajduk Split', year: '2014', tournament: 'worldcup' },
      { id: 'ba_2', number: 2, name: 'Avdija Vršajević', positions: ['RB'], primaryPos: 'RB', rating: 73, nation: 'Bosnia', nationCode: 'BA', flag: '🇧🇦', club: 'Hajduk Split', year: '2014', tournament: 'worldcup' },
      { id: 'ba_15', number: 15, name: 'Toni Šunjić', positions: ['CB'], primaryPos: 'CB', rating: 74, nation: 'Bosnia', nationCode: 'BA', flag: '🇧🇦', club: 'Zorya', year: '2014', tournament: 'worldcup' },
    ]
  },
  {
    id: 'br_2002', name: 'Brasil', shortCode: 'BR', type: 'worldcup', year: '2002', tag: 'Cup 2002', flag: '🇧🇷', country: 'Brazil',
    players: [
      { id: 'br_9', number: 9, name: 'Ronaldo Nazário', positions: ['ST'], primaryPos: 'ST', rating: 95, bonus: 1, nation: 'Brasil', nationCode: 'BR', flag: '🇧🇷', club: 'Inter Milan', year: '2002', tournament: 'worldcup' },
      { id: 'br_11', number: 11, name: 'Rivaldo', positions: ['AM', 'ST'], primaryPos: 'AM', rating: 93, nation: 'Brasil', nationCode: 'BR', flag: '🇧🇷', club: 'Barcelona', year: '2002', tournament: 'worldcup' },
      { id: 'br_10', number: 10, name: 'Ronaldinho', positions: ['AM', 'LW'], primaryPos: 'AM', rating: 91, nation: 'Brasil', nationCode: 'BR', flag: '🇧🇷', club: 'PSG', year: '2002', tournament: 'worldcup' },
      { id: 'br_2', number: 2, name: 'Cafu', positions: ['RB'], primaryPos: 'RB', rating: 86, nation: 'Brasil', nationCode: 'BR', flag: '🇧🇷', club: 'Roma', year: '2002', tournament: 'worldcup' },
      { id: 'br_6', number: 6, name: 'Roberto Carlos', positions: ['LB'], primaryPos: 'LB', rating: 86, nation: 'Brasil', nationCode: 'BR', flag: '🇧🇷', club: 'Real Madrid', year: '2002', tournament: 'worldcup' },
      { id: 'br_3', number: 3, name: 'Lúcio', positions: ['CB'], primaryPos: 'CB', rating: 83, nation: 'Brasil', nationCode: 'BR', flag: '🇧🇷', club: 'Bayer Leverkusen', year: '2002', tournament: 'worldcup' },
      { id: 'br_8', number: 8, name: 'Gilberto Silva', positions: ['DM', 'CM'], primaryPos: 'DM', rating: 80, nation: 'Brasil', nationCode: 'BR', flag: '🇧🇷', club: 'Atlético Mineiro', year: '2002', tournament: 'worldcup' },
      { id: 'br_5', number: 5, name: 'Edmílson', positions: ['CB', 'DM'], primaryPos: 'CB', rating: 78, nation: 'Brasil', nationCode: 'BR', flag: '🇧🇷', club: 'Lyon', year: '2002', tournament: 'worldcup' },
      { id: 'br_4', number: 4, name: 'Roque Júnior', positions: ['CB'], primaryPos: 'CB', rating: 77, nation: 'Brasil', nationCode: 'BR', flag: '🇧🇷', club: 'AC Milan', year: '2002', tournament: 'worldcup' },
      { id: 'br_1', number: 1, name: 'Marcos', positions: ['GK'], primaryPos: 'GK', rating: 79, nation: 'Brasil', nationCode: 'BR', flag: '🇧🇷', club: 'Palmeiras', year: '2002', tournament: 'worldcup' },
      { id: 'br_15', number: 15, name: 'Kléberson', positions: ['CM'], primaryPos: 'CM', rating: 77, nation: 'Brasil', nationCode: 'BR', flag: '🇧🇷', club: 'Atlético Paranaense', year: '2002', tournament: 'worldcup' },
    ]
  },
  {
    id: 'bg_1994', name: 'Bulgaria', shortCode: 'BG', type: 'worldcup', year: '1994', tag: 'Cup 1994', flag: '🇧🇬', country: 'Bulgaria',
    players: [
      { id: 'bg_8', number: 8, name: 'Hristo Stoichkov', positions: ['ST', 'LW'], primaryPos: 'ST', rating: 87, bonus: 1, nation: 'Bulgaria', nationCode: 'BG', flag: '🇧🇬', club: 'Barcelona', year: '1994', tournament: 'worldcup' },
      { id: 'bg_9', number: 9, name: 'Yordan Letchkov', positions: ['CM', 'AM'], primaryPos: 'CM', rating: 80, nation: 'Bulgaria', nationCode: 'BG', flag: '🇧🇬', club: 'HSV', year: '1994', tournament: 'worldcup' },
      { id: 'bg_10', number: 10, name: 'Nasko Sirakov', positions: ['AM', 'ST'], primaryPos: 'AM', rating: 78, nation: 'Bulgaria', nationCode: 'BG', flag: '🇧🇬', club: 'Levski Sofia', year: '1994', tournament: 'worldcup' },
      { id: 'bg_1', number: 1, name: 'Borislav Mihaylov', positions: ['GK'], primaryPos: 'GK', rating: 78, nation: 'Bulgaria', nationCode: 'BG', flag: '🇧🇬', club: 'Mulhouse', year: '1994', tournament: 'worldcup' },
      { id: 'bg_3', number: 3, name: 'Trifon Ivanov', positions: ['CB'], primaryPos: 'CB', rating: 79, nation: 'Bulgaria', nationCode: 'BG', flag: '🇧🇬', club: 'Neuchâtel Xamax', year: '1994', tournament: 'worldcup' },
      { id: 'bg_2', number: 2, name: 'Emil Kremenliev', positions: ['RB'], primaryPos: 'RB', rating: 74, nation: 'Bulgaria', nationCode: 'BG', flag: '🇧🇬', club: 'Levski Sofia', year: '1994', tournament: 'worldcup' },
      { id: 'bg_4', number: 4, name: 'Tzanko Tzvetanov', positions: ['LB'], primaryPos: 'LB', rating: 74, nation: 'Bulgaria', nationCode: 'BG', flag: '🇧🇬', club: 'Levski Sofia', year: '1994', tournament: 'worldcup' },
      { id: 'bg_6', number: 6, name: 'Zlatko Yankov', positions: ['DM'], primaryPos: 'DM', rating: 76, nation: 'Bulgaria', nationCode: 'BG', flag: '🇧🇬', club: 'Levski Sofia', year: '1994', tournament: 'worldcup' },
      { id: 'bg_7', number: 7, name: 'Emil Kostadinov', positions: ['RW', 'ST'], primaryPos: 'RW', rating: 80, nation: 'Bulgaria', nationCode: 'BG', flag: '🇧🇬', club: 'Porto', year: '1994', tournament: 'worldcup' },
      { id: 'bg_11', number: 11, name: 'Daniel Borimirov', positions: ['CM', 'RW'], primaryPos: 'CM', rating: 75, nation: 'Bulgaria', nationCode: 'BG', flag: '🇧🇬', club: 'Levski Sofia', year: '1994', tournament: 'worldcup' },
      { id: 'bg_5', number: 5, name: 'Petar Hubchev', positions: ['CB'], primaryPos: 'CB', rating: 77, nation: 'Bulgaria', nationCode: 'BG', flag: '🇧🇬', club: 'HSV', year: '1994', tournament: 'worldcup' },
    ]
  },
  {
    id: 'cm_1990', name: 'Camerún', shortCode: 'CM', type: 'worldcup', year: '1990', tag: 'Cup 1990', flag: '🇨🇲', country: 'Cameroon',
    players: [
      { id: 'cm_9', number: 9, name: 'Roger Milla', positions: ['ST'], primaryPos: 'ST', rating: 86, bonus: 1, nation: 'Camerún', nationCode: 'CM', flag: '🇨🇲', club: 'Saint-Pierroise', year: '1990', tournament: 'worldcup' },
      { id: 'cm_16', number: 16, name: 'Thomas N\'Kono', positions: ['GK'], primaryPos: 'GK', rating: 85, nation: 'Camerún', nationCode: 'CM', flag: '🇨🇲', club: 'Espanyol', year: '1990', tournament: 'worldcup' },
      { id: 'cm_7', number: 7, name: 'François Omam-Biyik', positions: ['ST'], primaryPos: 'ST', rating: 78, nation: 'Camerún', nationCode: 'CM', flag: '🇨🇲', club: 'Rennes', year: '1990', tournament: 'worldcup' },
      { id: 'cm_6', number: 6, name: 'Emmanuel Kundé', positions: ['CB', 'DM'], primaryPos: 'CB', rating: 76, nation: 'Camerún', nationCode: 'CM', flag: '🇨🇲', club: 'Prévessin', year: '1990', tournament: 'worldcup' },
      { id: 'cm_14', number: 14, name: 'Stephen Tataw', positions: ['RB'], primaryPos: 'RB', rating: 75, nation: 'Camerún', nationCode: 'CM', flag: '🇨🇲', club: 'TKC Yaoundé', year: '1990', tournament: 'worldcup' },
      { id: 'cm_8', number: 8, name: 'Emile M\'Bouh', positions: ['DM', 'CM'], primaryPos: 'DM', rating: 78, nation: 'Camerún', nationCode: 'CM', flag: '🇨🇲', club: 'Chênois', year: '1990', tournament: 'worldcup' },
      { id: 'cm_10', number: 10, name: 'Louis-Paul M\'Fédé', positions: ['AM', 'LW'], primaryPos: 'AM', rating: 80, nation: 'Camerún', nationCode: 'CM', flag: '🇨🇲', club: 'Canon Yaoundé', year: '1990', tournament: 'worldcup' },
      { id: 'cm_20', number: 20, name: 'Cyrille Makanaky', positions: ['RW', 'AM'], primaryPos: 'RW', rating: 77, nation: 'Camerún', nationCode: 'CM', flag: '🇨🇲', club: 'Toulon', year: '1990', tournament: 'worldcup' },
      { id: 'cm_5', number: 5, name: 'Bertin Ebwellé', positions: ['LB'], primaryPos: 'LB', rating: 74, nation: 'Camerún', nationCode: 'CM', flag: '🇨🇲', club: 'Tonnerre Yaoundé', year: '1990', tournament: 'worldcup' },
      { id: 'cm_17', number: 17, name: 'Victor Ndip', positions: ['CB'], primaryPos: 'CB', rating: 74, nation: 'Camerún', nationCode: 'CM', flag: '🇨🇲', club: 'Canon Yaoundé', year: '1990', tournament: 'worldcup' },
      { id: 'cm_21', number: 21, name: 'Emmanuel Maboang', positions: ['CM', 'ST'], primaryPos: 'CM', rating: 73, nation: 'Camerún', nationCode: 'CM', flag: '🇨🇲', club: 'Canon Yaoundé', year: '1990', tournament: 'worldcup' },
    ]
  },
  {
    id: 'ca_2022', name: 'Canadá', shortCode: 'CA', type: 'worldcup', year: '2022', tag: 'Cup 2022', flag: '🇨🇦', country: 'Canada',
    players: [
      { id: 'ca_19', number: 19, name: 'Alphonso Davies', positions: ['LB', 'LW'], primaryPos: 'LB', rating: 86, bonus: 1, nation: 'Canadá', nationCode: 'CA', flag: '🇨🇦', club: 'Bayern', year: '2022', tournament: 'worldcup' },
      { id: 'ca_20', number: 20, name: 'Jonathan David', positions: ['ST'], primaryPos: 'ST', rating: 77, nation: 'Canadá', nationCode: 'CA', flag: '🇨🇦', club: 'Lille', year: '2022', tournament: 'worldcup' },
      { id: 'ca_7', number: 7, name: 'Stephen Eustáquio', positions: ['DM', 'CM'], primaryPos: 'DM', rating: 75, nation: 'Canadá', nationCode: 'CA', flag: '🇨🇦', club: 'Porto', year: '2022', tournament: 'worldcup' },
      { id: 'ca_18', number: 18, name: 'Milan Borjan', positions: ['GK'], primaryPos: 'GK', rating: 74, nation: 'Canadá', nationCode: 'CA', flag: '🇨🇦', club: 'Red Star Belgrade', year: '2022', tournament: 'worldcup' },
      { id: 'ca_11', number: 11, name: 'Tajon Buchanan', positions: ['RW', 'RB'], primaryPos: 'RW', rating: 74, nation: 'Canadá', nationCode: 'CA', flag: '🇨🇦', club: 'Club Brugge', year: '2022', tournament: 'worldcup' },
      { id: 'ca_13', number: 13, name: 'Atiba Hutchinson', positions: ['CM', 'DM'], primaryPos: 'CM', rating: 73, nation: 'Canadá', nationCode: 'CA', flag: '🇨🇦', club: 'Besiktas', year: '2022', tournament: 'worldcup' },
      { id: 'ca_4', number: 4, name: 'Kamal Miller', positions: ['CB'], primaryPos: 'CB', rating: 74, nation: 'Canadá', nationCode: 'CA', flag: '🇨🇦', club: 'CF Montréal', year: '2022', tournament: 'worldcup' },
      { id: 'ca_5', number: 5, name: 'Steven Vitória', positions: ['CB'], primaryPos: 'CB', rating: 74, nation: 'Canadá', nationCode: 'CA', flag: '🇨🇦', club: 'Chaves', year: '2022', tournament: 'worldcup' },
      { id: 'ca_22', number: 22, name: 'Richie Laryea', positions: ['RB', 'LB'], primaryPos: 'RB', rating: 74, nation: 'Canadá', nationCode: 'CA', flag: '🇨🇦', club: 'Toronto FC', year: '2022', tournament: 'worldcup' },
      { id: 'ca_17', number: 17, name: 'Cyle Larin', positions: ['ST', 'LW'], primaryPos: 'ST', rating: 74, nation: 'Canadá', nationCode: 'CA', flag: '🇨🇦', club: 'Club Brugge', year: '2022', tournament: 'worldcup' },
      { id: 'ca_8', number: 8, name: 'Liam Fraser', positions: ['CM'], primaryPos: 'CM', rating: 71, nation: 'Canadá', nationCode: 'CA', flag: '🇨🇦', club: 'Deinze', year: '2022', tournament: 'worldcup' },
    ]
  },
  {
    id: 'qa_2022', name: 'Catar', shortCode: 'QA', type: 'worldcup', year: '2022', tag: 'Cup 2022', flag: '🇶🇦', country: 'Qatar',
    players: [
      { id: 'qa_11', number: 11, name: 'Akram Afif', positions: ['LW', 'AM'], primaryPos: 'LW', rating: 86, bonus: 1, nation: 'Catar', nationCode: 'QA', flag: '🇶🇦', club: 'Al-Sadd', year: '2022', tournament: 'worldcup' },
      { id: 'qa_19', number: 19, name: 'Almoez Ali', positions: ['ST'], primaryPos: 'ST', rating: 75, nation: 'Catar', nationCode: 'QA', flag: '🇶🇦', club: 'Al-Duhail', year: '2022', tournament: 'worldcup' },
      { id: 'qa_10', number: 10, name: 'Hassan Al-Haydos', positions: ['RW', 'AM'], primaryPos: 'RW', rating: 74, nation: 'Catar', nationCode: 'QA', flag: '🇶🇦', club: 'Al-Sadd', year: '2022', tournament: 'worldcup' },
      { id: 'qa_22', number: 22, name: 'Meshaal Barsham', positions: ['GK'], primaryPos: 'GK', rating: 74, nation: 'Catar', nationCode: 'QA', flag: '🇶🇦', club: 'Al-Sadd', year: '2022', tournament: 'worldcup' },
      { id: 'qa_3', number: 3, name: 'Abdelkarim Hassan', positions: ['LB', 'CB'], primaryPos: 'LB', rating: 73, nation: 'Catar', nationCode: 'QA', flag: '🇶🇦', club: 'Al-Sadd', year: '2022', tournament: 'worldcup' },
      { id: 'qa_16', number: 16, name: 'Boualem Khoukhi', positions: ['CB', 'DM'], primaryPos: 'CB', rating: 74, nation: 'Catar', nationCode: 'QA', flag: '🇶🇦', club: 'Al-Sadd', year: '2022', tournament: 'worldcup' },
      { id: 'qa_6', number: 6, name: 'Abdulaziz Hatem', positions: ['CM'], primaryPos: 'CM', rating: 74, nation: 'Catar', nationCode: 'QA', flag: '🇶🇦', club: 'Al-Rayyan', year: '2022', tournament: 'worldcup' },
      { id: 'qa_12', number: 12, name: 'Karim Boudiaf', positions: ['DM'], primaryPos: 'DM', rating: 74, nation: 'Catar', nationCode: 'QA', flag: '🇶🇦', club: 'Al-Duhail', year: '2022', tournament: 'worldcup' },
      { id: 'qa_2', number: 2, name: 'Ró-Ró', positions: ['RB', 'CB'], primaryPos: 'RB', rating: 74, nation: 'Catar', nationCode: 'QA', flag: '🇶🇦', club: 'Al-Sadd', year: '2022', tournament: 'worldcup' },
      { id: 'qa_15', number: 15, name: 'Bassam Al-Rawi', positions: ['CB'], primaryPos: 'CB', rating: 73, nation: 'Catar', nationCode: 'QA', flag: '🇶🇦', club: 'Al-Duhail', year: '2022', tournament: 'worldcup' },
      { id: 'qa_14', number: 14, name: 'Homam Ahmed', positions: ['LB'], primaryPos: 'LB', rating: 72, nation: 'Catar', nationCode: 'QA', flag: '🇶🇦', club: 'Al-Gharafa', year: '2022', tournament: 'worldcup' },
    ]
  },

  // --- CLUBES (CHAMPIONS LEAGUE CLUBS) ---
  {
    id: 'rma_2017', name: 'Real Madrid CF', shortCode: 'RMA', type: 'champions', year: '2017', tag: 'Champions 2017', flag: '🇪🇸', country: 'Spain',
    players: [
      { id: 'rma_7', number: 7, name: 'C. Ronaldo', positions: ['ST', 'LW'], primaryPos: 'ST', rating: 97, bonus: 1, nation: 'Portugal', nationCode: 'PT', flag: '🇵🇹', club: 'Real Madrid', year: '2017', tournament: 'champions' },
      { id: 'rma_10', number: 10, name: 'Modrić', positions: ['CM', 'AM'], primaryPos: 'CM', rating: 91, nation: 'Croacia', nationCode: 'HR', flag: '🇭🇷', club: 'Real Madrid', year: '2017', tournament: 'champions' },
      { id: 'rma_8', number: 8, name: 'Kroos', positions: ['CM', 'DM'], primaryPos: 'CM', rating: 86, nation: 'Alemania', nationCode: 'DE', flag: '🇩🇪', club: 'Real Madrid', year: '2017', tournament: 'champions' },
      { id: 'rma_4', number: 4, name: 'S. Ramos', positions: ['CB'], primaryPos: 'CB', rating: 92, nation: 'España', nationCode: 'ES', flag: '🇪🇸', club: 'Real Madrid', year: '2017', tournament: 'champions' },
      { id: 'rma_12', number: 12, name: 'Marcelo', positions: ['LB'], primaryPos: 'LB', rating: 86, nation: 'Brasil', nationCode: 'BR', flag: '🇧🇷', club: 'Real Madrid', year: '2017', tournament: 'champions' },
      { id: 'rma_9', number: 9, name: 'Benzema', positions: ['ST'], primaryPos: 'ST', rating: 89, nation: 'Francia', nationCode: 'FR', flag: '🇫🇷', club: 'Real Madrid', year: '2017', tournament: 'champions' },
      { id: 'rma_11', number: 11, name: 'Bale', positions: ['RW', 'LW'], primaryPos: 'RW', rating: 85, nation: 'Gales', nationCode: 'WAL', flag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿', club: 'Real Madrid', year: '2017', tournament: 'champions' },
      { id: 'rma_2', number: 2, name: 'Carvajal', positions: ['RB'], primaryPos: 'RB', rating: 83, nation: 'España', nationCode: 'ES', flag: '🇪🇸', club: 'Real Madrid', year: '2017', tournament: 'champions' },
      { id: 'rma_14', number: 14, name: 'Casemiro', positions: ['DM', 'CM'], primaryPos: 'DM', rating: 84, nation: 'Brasil', nationCode: 'BR', flag: '🇧🇷', club: 'Real Madrid', year: '2017', tournament: 'champions' },
      { id: 'rma_1', number: 1, name: 'Keylor Navas', positions: ['GK'], primaryPos: 'GK', rating: 84, nation: 'Costa Rica', nationCode: 'CR', flag: '🇨🇷', club: 'Real Madrid', year: '2017', tournament: 'champions' },
      { id: 'rma_22', number: 22, name: 'Isco', positions: ['AM', 'CM'], primaryPos: 'AM', rating: 83, nation: 'España', nationCode: 'ES', flag: '🇪🇸', club: 'Real Madrid', year: '2017', tournament: 'champions' },
    ]
  },
  {
    id: 'fcb_2011', name: 'FC Barcelona', shortCode: 'FCB', type: 'champions', year: '2011', tag: 'Champions 2011', flag: '🇪🇸', country: 'Spain',
    players: [
      { id: 'fcb_10', number: 10, name: 'Messi', positions: ['RW', 'ST'], primaryPos: 'ST', rating: 96, bonus: 1, nation: 'Argentina', nationCode: 'AR', flag: '🇦🇷', club: 'Barcelona', year: '2011', tournament: 'champions' },
      { id: 'fcb_6', number: 6, name: 'Xavi', positions: ['CM'], primaryPos: 'CM', rating: 93, nation: 'España', nationCode: 'ES', flag: '🇪🇸', club: 'Barcelona', year: '2011', tournament: 'champions' },
      { id: 'fcb_8', number: 8, name: 'Iniesta', positions: ['CM', 'AM'], primaryPos: 'CM', rating: 90, nation: 'España', nationCode: 'ES', flag: '🇪🇸', club: 'Barcelona', year: '2011', tournament: 'champions' },
      { id: 'fcb_7', number: 7, name: 'David Villa', positions: ['ST', 'LW'], primaryPos: 'LW', rating: 86, nation: 'España', nationCode: 'ES', flag: '🇪🇸', club: 'Barcelona', year: '2011', tournament: 'champions' },
      { id: 'fcb_17', number: 17, name: 'Pedro', positions: ['RW', 'LW'], primaryPos: 'RW', rating: 81, nation: 'España', nationCode: 'ES', flag: '🇪🇸', club: 'Barcelona', year: '2011', tournament: 'champions' },
      { id: 'fcb_16', number: 16, name: 'Busquets', positions: ['DM', 'CM'], primaryPos: 'DM', rating: 86, nation: 'España', nationCode: 'ES', flag: '🇪🇸', club: 'Barcelona', year: '2011', tournament: 'champions' },
      { id: 'fcb_2', number: 2, name: 'Dani Alves', positions: ['RB'], primaryPos: 'RB', rating: 86, nation: 'Brasil', nationCode: 'BR', flag: '🇧🇷', club: 'Barcelona', year: '2011', tournament: 'champions' },
      { id: 'fcb_3', number: 3, name: 'Piqué', positions: ['CB'], primaryPos: 'CB', rating: 85, nation: 'España', nationCode: 'ES', flag: '🇪🇸', club: 'Barcelona', year: '2011', tournament: 'champions' },
      { id: 'fcb_5', number: 5, name: 'Puyol', positions: ['CB', 'RB'], primaryPos: 'CB', rating: 86, nation: 'España', nationCode: 'ES', flag: '🇪🇸', club: 'Barcelona', year: '2011', tournament: 'champions' },
      { id: 'fcb_22', number: 22, name: 'Abidal', positions: ['LB', 'CB'], primaryPos: 'LB', rating: 80, nation: 'Francia', nationCode: 'FR', flag: '🇫🇷', club: 'Barcelona', year: '2011', tournament: 'champions' },
      { id: 'fcb_1', number: 1, name: 'Valdés', positions: ['GK'], primaryPos: 'GK', rating: 83, nation: 'España', nationCode: 'ES', flag: '🇪🇸', club: 'Barcelona', year: '2011', tournament: 'champions' },
    ]
  },
  {
    id: 'mil_2007', name: 'AC Milan', shortCode: 'MIL', type: 'champions', year: '2007', tag: 'Champions 2007', flag: '🇮🇹', country: 'Italy',
    players: [
      { id: 'mil_22', number: 22, name: 'Kaká', positions: ['AM', 'ST'], primaryPos: 'AM', rating: 94, bonus: 1, nation: 'Brasil', nationCode: 'BR', flag: '🇧🇷', club: 'AC Milan', year: '2007', tournament: 'champions' },
      { id: 'mil_21', number: 21, name: 'Pirlo', positions: ['CM', 'DM'], primaryPos: 'CM', rating: 86, nation: 'Italia', nationCode: 'IT', flag: '🇮🇹', club: 'AC Milan', year: '2007', tournament: 'champions' },
      { id: 'mil_10', number: 10, name: 'Seedorf', positions: ['CM', 'AM'], primaryPos: 'CM', rating: 84, nation: 'Países Bajos', nationCode: 'NL', flag: '🇳🇱', club: 'AC Milan', year: '2007', tournament: 'champions' },
      { id: 'mil_8', number: 8, name: 'Gattuso', positions: ['DM', 'CM'], primaryPos: 'DM', rating: 83, nation: 'Italia', nationCode: 'IT', flag: '🇮🇹', club: 'AC Milan', year: '2007', tournament: 'champions' },
      { id: 'mil_13', number: 13, name: 'Nesta', positions: ['CB'], primaryPos: 'CB', rating: 86, nation: 'Italia', nationCode: 'IT', flag: '🇮🇹', club: 'AC Milan', year: '2007', tournament: 'champions' },
      { id: 'mil_3', number: 3, name: 'Maldini', positions: ['CB', 'LB'], primaryPos: 'CB', rating: 90, nation: 'Italia', nationCode: 'IT', flag: '🇮🇹', club: 'AC Milan', year: '2007', tournament: 'champions' },
      { id: 'mil_2', number: 2, name: 'Cafu', positions: ['RB'], primaryPos: 'RB', rating: 81, nation: 'Brasil', nationCode: 'BR', flag: '🇧🇷', club: 'AC Milan', year: '2007', tournament: 'champions' },
      { id: 'mil_9', number: 9, name: 'Inzaghi', positions: ['ST'], primaryPos: 'ST', rating: 81, nation: 'Italia', nationCode: 'IT', flag: '🇮🇹', club: 'AC Milan', year: '2007', tournament: 'champions' },
      { id: 'mil_18', number: 18, name: 'Jankulovski', positions: ['LB'], primaryPos: 'LB', rating: 78, nation: 'República Checa', nationCode: 'CZ', flag: '🇨🇿', club: 'AC Milan', year: '2007', tournament: 'champions' },
      { id: 'mil_44', number: 44, name: 'Oddo', positions: ['RB'], primaryPos: 'RB', rating: 77, nation: 'Italia', nationCode: 'IT', flag: '🇮🇹', club: 'AC Milan', year: '2007', tournament: 'champions' },
      { id: 'mil_1', number: 1, name: 'Dida', positions: ['GK'], primaryPos: 'GK', rating: 84, nation: 'Brasil', nationCode: 'BR', flag: '🇧🇷', club: 'AC Milan', year: '2007', tournament: 'champions' },
    ]
  },
  {
    id: 'bay_2013', name: 'Bayern de Múnich', shortCode: 'BAY', type: 'champions', year: '2013', tag: 'Champions 2013', flag: '🇩🇪', country: 'Germany',
    players: [
      { id: 'bay_7', number: 7, name: 'Ribéry', positions: ['LW', 'AM'], primaryPos: 'LW', rating: 87, bonus: 1, nation: 'Francia', nationCode: 'FR', flag: '🇫🇷', club: 'Bayern', year: '2013', tournament: 'champions' },
      { id: 'bay_10', number: 10, name: 'Robben', positions: ['RW', 'ST'], primaryPos: 'RW', rating: 86, nation: 'Países Bajos', nationCode: 'NL', flag: '🇳🇱', club: 'Bayern', year: '2013', tournament: 'champions' },
      { id: 'bay_31', number: 31, name: 'Schweinsteiger', positions: ['CM', 'DM'], primaryPos: 'CM', rating: 85, nation: 'Alemania', nationCode: 'DE', flag: '🇩🇪', club: 'Bayern', year: '2013', tournament: 'champions' },
      { id: 'bay_21', number: 21, name: 'Lahm', positions: ['RB', 'DM'], primaryPos: 'RB', rating: 86, nation: 'Alemania', nationCode: 'DE', flag: '🇩🇪', club: 'Bayern', year: '2013', tournament: 'champions' },
      { id: 'bay_1', number: 1, name: 'Neuer', positions: ['GK'], primaryPos: 'GK', rating: 92, nation: 'Alemania', nationCode: 'DE', flag: '🇩🇪', club: 'Bayern', year: '2013', tournament: 'champions' },
      { id: 'bay_8', number: 8, name: 'Javi Martínez', positions: ['DM', 'CB'], primaryPos: 'DM', rating: 83, nation: 'España', nationCode: 'ES', flag: '🇪🇸', club: 'Bayern', year: '2013', tournament: 'champions' },
      { id: 'bay_25', number: 25, name: 'T. Müller', positions: ['AM', 'ST'], primaryPos: 'AM', rating: 93, nation: 'Alemania', nationCode: 'DE', flag: '🇩🇪', club: 'Bayern', year: '2013', tournament: 'champions' },
      { id: 'bay_9', number: 9, name: 'Mandžukić', positions: ['ST'], primaryPos: 'ST', rating: 81, nation: 'Croacia', nationCode: 'HR', flag: '🇭🇷', club: 'Bayern', year: '2013', tournament: 'champions' },
      { id: 'bay_27', number: 27, name: 'Alaba', positions: ['LB', 'CB'], primaryPos: 'LB', rating: 81, nation: 'Austria', nationCode: 'AT', flag: '🇦🇹', club: 'Bayern', year: '2013', tournament: 'champions' },
      { id: 'bay_4', number: 4, name: 'Dante', positions: ['CB'], primaryPos: 'CB', rating: 80, nation: 'Brasil', nationCode: 'BR', flag: '🇧🇷', club: 'Bayern', year: '2013', tournament: 'champions' },
      { id: 'bay_17', number: 17, name: 'J. Boateng', positions: ['CB'], primaryPos: 'CB', rating: 81, nation: 'Alemania', nationCode: 'DE', flag: '🇩🇪', club: 'Bayern', year: '2013', tournament: 'champions' },
    ]
  },
  {
    id: 'mci_2023', name: 'Manchester City', shortCode: 'MCI', type: 'champions', year: '2023', tag: 'Champions 2023', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', country: 'England',
    players: [
      { id: 'mci_9', number: 9, name: 'Haaland', positions: ['ST'], primaryPos: 'ST', rating: 93, bonus: 1, nation: 'Noruega', nationCode: 'NO', flag: '🇳🇴', club: 'Man City', year: '2023', tournament: 'champions' },
      { id: 'mci_17', number: 17, name: 'De Bruyne', positions: ['CM', 'AM'], primaryPos: 'CM', rating: 88, nation: 'Bélgica', nationCode: 'BE', flag: '🇧🇪', club: 'Man City', year: '2023', tournament: 'champions' },
      { id: 'mci_16', number: 16, name: 'Rodri', positions: ['DM', 'CM'], primaryPos: 'DM', rating: 86, nation: 'España', nationCode: 'ES', flag: '🇪🇸', club: 'Man City', year: '2023', tournament: 'champions' },
      { id: 'mci_8', number: 8, name: 'Gündoğan', positions: ['CM', 'AM'], primaryPos: 'CM', rating: 84, nation: 'Alemania', nationCode: 'DE', flag: '🇩🇪', club: 'Man City', year: '2023', tournament: 'champions' },
      { id: 'mci_20', number: 20, name: 'Bernardo Silva', positions: ['RW', 'CM'], primaryPos: 'RW', rating: 85, nation: 'Portugal', nationCode: 'PT', flag: '🇵🇹', club: 'Man City', year: '2023', tournament: 'champions' },
      { id: 'mci_10', number: 10, name: 'Grealish', positions: ['LW'], primaryPos: 'LW', rating: 81, nation: 'Inglaterra', nationCode: 'ENG', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', club: 'Man City', year: '2023', tournament: 'champions' },
      { id: 'mci_3', number: 3, name: 'Rúben Dias', positions: ['CB'], primaryPos: 'CB', rating: 85, nation: 'Portugal', nationCode: 'PT', flag: '🇵🇹', club: 'Man City', year: '2023', tournament: 'champions' },
      { id: 'mci_25', number: 25, name: 'Akanji', positions: ['CB', 'RB'], primaryPos: 'CB', rating: 80, nation: 'Suiza', nationCode: 'CH', flag: '🇨🇭', club: 'Man City', year: '2023', tournament: 'champions' },
      { id: 'mci_5', number: 5, name: 'Stones', positions: ['CB', 'DM'], primaryPos: 'CB', rating: 83, nation: 'Inglaterra', nationCode: 'ENG', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', club: 'Man City', year: '2023', tournament: 'champions' },
      { id: 'mci_2', number: 2, name: 'Walker', positions: ['RB', 'CB'], primaryPos: 'RB', rating: 83, nation: 'Inglaterra', nationCode: 'ENG', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', club: 'Man City', year: '2023', tournament: 'champions' },
      { id: 'mci_31', number: 31, name: 'Ederson', positions: ['GK'], primaryPos: 'GK', rating: 84, nation: 'Brasil', nationCode: 'BR', flag: '🇧🇷', club: 'Man City', year: '2023', tournament: 'champions' },
    ]
  },
  {
    id: 'psg_2021', name: 'Paris Saint-Germain', shortCode: 'PSG', type: 'champions', year: '2021', tag: 'Champions 2021', flag: '🇫🇷', country: 'France',
    players: [
      { id: 'psg_7', number: 7, name: 'Mbappé', positions: ['LW', 'ST'], primaryPos: 'LW', rating: 88, bonus: 1, nation: 'Francia', nationCode: 'FR', flag: '🇫🇷', club: 'PSG', year: '2021', tournament: 'champions' },
      { id: 'psg_10', number: 10, name: 'Neymar Jr', positions: ['LW', 'AM'], primaryPos: 'LW', rating: 90, nation: 'Brasil', nationCode: 'BR', flag: '🇧🇷', club: 'PSG', year: '2021', tournament: 'champions' },
      { id: 'psg_11', number: 11, name: 'Di María', positions: ['RW', 'AM'], primaryPos: 'RW', rating: 83, nation: 'Argentina', nationCode: 'AR', flag: '🇦🇷', club: 'PSG', year: '2021', tournament: 'champions' },
      { id: 'psg_6', number: 6, name: 'Verratti', positions: ['CM', 'DM'], primaryPos: 'CM', rating: 84, nation: 'Italia', nationCode: 'IT', flag: '🇮🇹', club: 'PSG', year: '2021', tournament: 'champions' },
      { id: 'psg_5', number: 5, name: 'Marquinhos', positions: ['CB', 'DM'], primaryPos: 'CB', rating: 84, nation: 'Brasil', nationCode: 'BR', flag: '🇧🇷', club: 'PSG', year: '2021', tournament: 'champions' },
      { id: 'psg_3', number: 3, name: 'Kimpembe', positions: ['CB'], primaryPos: 'CB', rating: 78, nation: 'Francia', nationCode: 'FR', flag: '🇫🇷', club: 'PSG', year: '2021', tournament: 'champions' },
      { id: 'psg_1', number: 1, name: 'Navas', positions: ['GK'], primaryPos: 'GK', rating: 84, nation: 'Costa Rica', nationCode: 'CR', flag: '🇨🇷', club: 'PSG', year: '2021', tournament: 'champions' },
      { id: 'psg_8', number: 8, name: 'Paredes', positions: ['DM', 'CM'], primaryPos: 'DM', rating: 77, nation: 'Argentina', nationCode: 'AR', flag: '🇦🇷', club: 'PSG', year: '2021', tournament: 'champions' },
      { id: 'psg_24', number: 24, name: 'Florenzi', positions: ['RB'], primaryPos: 'RB', rating: 76, nation: 'Italia', nationCode: 'IT', flag: '🇮🇹', club: 'PSG', year: '2021', tournament: 'champions' },
      { id: 'psg_22', number: 22, name: 'Diallo', positions: ['LB', 'CB'], primaryPos: 'LB', rating: 75, nation: 'Senegal', nationCode: 'SN', flag: '🇸🇳', club: 'PSG', year: '2021', tournament: 'champions' },
      { id: 'psg_18', number: 18, name: 'Kean', positions: ['ST'], primaryPos: 'ST', rating: 76, nation: 'Italia', nationCode: 'IT', flag: '🇮🇹', club: 'PSG', year: '2021', tournament: 'champions' },
    ]
  },
  {
    id: 'aja_1995', name: 'AFC Ajax', shortCode: 'AJX', type: 'champions', year: '1995', tag: 'Champions 1995', flag: '🇳🇱', country: 'Netherlands',
    players: [
      { id: 'aja_10', number: 10, name: 'Jari Litmanen', positions: ['AM', 'ST'], primaryPos: 'AM', rating: 86, bonus: 1, nation: 'Finlandia', nationCode: 'FI', flag: '🇫🇮', club: 'Ajax', year: '1995', tournament: 'champions' },
      { id: 'aja_11', number: 11, name: 'Marc Overmars', positions: ['LW', 'RW'], primaryPos: 'LW', rating: 84, nation: 'Países Bajos', nationCode: 'NL', flag: '🇳🇱', club: 'Ajax', year: '1995', tournament: 'champions' },
      { id: 'aja_4', number: 4, name: 'Frank de Boer', positions: ['CB', 'LB'], primaryPos: 'CB', rating: 84, nation: 'Países Bajos', nationCode: 'NL', flag: '🇳🇱', club: 'Ajax', year: '1995', tournament: 'champions' },
      { id: 'aja_3', number: 3, name: 'Danny Blind', positions: ['CB'], primaryPos: 'CB', rating: 81, nation: 'Países Bajos', nationCode: 'NL', flag: '🇳🇱', club: 'Ajax', year: '1995', tournament: 'champions' },
      { id: 'aja_2', number: 2, name: 'Michael Reiziger', positions: ['RB'], primaryPos: 'RB', rating: 79, nation: 'Países Bajos', nationCode: 'NL', flag: '🇳🇱', club: 'Ajax', year: '1995', tournament: 'champions' },
      { id: 'aja_6', number: 6, name: 'Frank Rijkaard', positions: ['DM', 'CB'], primaryPos: 'DM', rating: 86, nation: 'Países Bajos', nationCode: 'NL', flag: '🇳🇱', club: 'Ajax', year: '1995', tournament: 'champions' },
      { id: 'aja_8', number: 8, name: 'Edgar Davids', positions: ['CM', 'DM'], primaryPos: 'CM', rating: 83, nation: 'Países Bajos', nationCode: 'NL', flag: '🇳🇱', club: 'Ajax', year: '1995', tournament: 'champions' },
      { id: 'aja_7', number: 7, name: 'Finidi George', positions: ['RW'], primaryPos: 'RW', rating: 80, nation: 'Nigeria', nationCode: 'NG', flag: '🇳🇬', club: 'Ajax', year: '1995', tournament: 'champions' },
      { id: 'aja_9', number: 9, name: 'Patrick Kluivert', positions: ['ST'], primaryPos: 'ST', rating: 83, nation: 'Países Bajos', nationCode: 'NL', flag: '🇳🇱', club: 'Ajax', year: '1995', tournament: 'champions' },
      { id: 'aja_1', number: 1, name: 'Edwin van der Sar', positions: ['GK'], primaryPos: 'GK', rating: 85, nation: 'Países Bajos', nationCode: 'NL', flag: '🇳🇱', club: 'Ajax', year: '1995', tournament: 'champions' },
      { id: 'aja_5', number: 5, name: 'Clarence Seedorf', positions: ['CM', 'AM'], primaryPos: 'CM', rating: 84, nation: 'Países Bajos', nationCode: 'NL', flag: '🇳🇱', club: 'Ajax', year: '1995', tournament: 'champions' },
    ]
  },
  {
    id: 'ars_2004', name: 'Arsenal FC', shortCode: 'ARS', type: 'champions', year: '2004', tag: 'Invincibles 2004', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', country: 'England',
    players: [
      { id: 'ars_14', number: 14, name: 'Thierry Henry', positions: ['ST', 'LW'], primaryPos: 'ST', rating: 94, bonus: 1, nation: 'Francia', nationCode: 'FR', flag: '🇫🇷', club: 'Arsenal', year: '2004', tournament: 'champions' },
      { id: 'ars_10', number: 10, name: 'Dennis Bergkamp', positions: ['ST', 'AM'], primaryPos: 'AM', rating: 86, nation: 'Países Bajos', nationCode: 'NL', flag: '🇳🇱', club: 'Arsenal', year: '2004', tournament: 'champions' },
      { id: 'ars_7', number: 7, name: 'Robert Pirès', positions: ['LW', 'AM'], primaryPos: 'LW', rating: 85, nation: 'Francia', nationCode: 'FR', flag: '🇫🇷', club: 'Arsenal', year: '2004', tournament: 'champions' },
      { id: 'ars_8', number: 8, name: 'Freddie Ljungberg', positions: ['RW', 'AM'], primaryPos: 'RW', rating: 83, nation: 'Suecia', nationCode: 'SE', flag: '🇸🇪', club: 'Arsenal', year: '2004', tournament: 'champions' },
      { id: 'ars_4', number: 4, name: 'Patrick Vieira', positions: ['CM', 'DM'], primaryPos: 'CM', rating: 87, nation: 'Francia', nationCode: 'FR', flag: '🇫🇷', club: 'Arsenal', year: '2004', tournament: 'champions' },
      { id: 'ars_19', number: 19, name: 'Gilberto Silva', positions: ['DM'], primaryPos: 'DM', rating: 81, nation: 'Brasil', nationCode: 'BR', flag: '🇧🇷', club: 'Arsenal', year: '2004', tournament: 'champions' },
      { id: 'ars_3', number: 3, name: 'Ashley Cole', positions: ['LB'], primaryPos: 'LB', rating: 85, nation: 'Inglaterra', nationCode: 'ENG', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', club: 'Arsenal', year: '2004', tournament: 'champions' },
      { id: 'ars_12', number: 12, name: 'Lauren', positions: ['RB'], primaryPos: 'RB', rating: 79, nation: 'Camerún', nationCode: 'CM', flag: '🇨🇲', club: 'Arsenal', year: '2004', tournament: 'champions' },
      { id: 'ars_23', number: 23, name: 'Sol Campbell', positions: ['CB'], primaryPos: 'CB', rating: 85, nation: 'Inglaterra', nationCode: 'ENG', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', club: 'Arsenal', year: '2004', tournament: 'champions' },
      { id: 'ars_28', number: 28, name: 'Kolo Touré', positions: ['CB'], primaryPos: 'CB', rating: 80, nation: 'Costa de Marfil', nationCode: 'CI', flag: '🇨🇮', club: 'Arsenal', year: '2004', tournament: 'champions' },
      { id: 'ars_1', number: 1, name: 'Jens Lehmann', positions: ['GK'], primaryPos: 'GK', rating: 81, nation: 'Alemania', nationCode: 'DE', flag: '🇩🇪', club: 'Arsenal', year: '2004', tournament: 'champions' },
    ]
  },
  {
    id: 'atm_2014', name: 'Atlético de Madrid', shortCode: 'ATM', type: 'champions', year: '2014', tag: 'Champions 2014', flag: '🇪🇸', country: 'Spain',
    players: [
      { id: 'atm_19', number: 19, name: 'Diego Costa', positions: ['ST'], primaryPos: 'ST', rating: 86, bonus: 1, nation: 'España', nationCode: 'ES', flag: '🇪🇸', club: 'Atlético Madrid', year: '2014', tournament: 'champions' },
      { id: 'atm_6', number: 6, name: 'Koke', positions: ['CM', 'AM'], primaryPos: 'CM', rating: 81, nation: 'España', nationCode: 'ES', flag: '🇪🇸', club: 'Atlético Madrid', year: '2014', tournament: 'champions' },
      { id: 'atm_10', number: 10, name: 'Arda Turan', positions: ['AM', 'RW'], primaryPos: 'AM', rating: 80, nation: 'Turquía', nationCode: 'TR', flag: '🇹🇷', club: 'Atlético Madrid', year: '2014', tournament: 'champions' },
      { id: 'atm_14', number: 14, name: 'Gabi', positions: ['DM', 'CM'], primaryPos: 'DM', rating: 80, nation: 'España', nationCode: 'ES', flag: '🇪🇸', club: 'Atlético Madrid', year: '2014', tournament: 'champions' },
      { id: 'atm_2', number: 2, name: 'Godín', positions: ['CB'], primaryPos: 'CB', rating: 85, nation: 'Uruguay', nationCode: 'UY', flag: '🇺🇾', club: 'Atlético Madrid', year: '2014', tournament: 'champions' },
      { id: 'atm_23', number: 23, name: 'Miranda', positions: ['CB'], primaryPos: 'CB', rating: 81, nation: 'Brasil', nationCode: 'BR', flag: '🇧🇷', club: 'Atlético Madrid', year: '2014', tournament: 'champions' },
      { id: 'atm_20', number: 20, name: 'Juanfran', positions: ['RB'], primaryPos: 'RB', rating: 79, nation: 'España', nationCode: 'ES', flag: '🇪🇸', club: 'Atlético Madrid', year: '2014', tournament: 'champions' },
      { id: 'atm_3', number: 3, name: 'Filipe Luís', positions: ['LB'], primaryPos: 'LB', rating: 81, nation: 'Brasil', nationCode: 'BR', flag: '🇧🇷', club: 'Atlético Madrid', year: '2014', tournament: 'champions' },
      { id: 'atm_13', number: 13, name: 'Thibaut Courtois', positions: ['GK'], primaryPos: 'GK', rating: 84, nation: 'Bélgica', nationCode: 'BE', flag: '🇧🇪', club: 'Atlético Madrid', year: '2014', tournament: 'champions' },
      { id: 'atm_8', number: 8, name: 'Raúl García', positions: ['CM', 'ST'], primaryPos: 'CM', rating: 77, nation: 'España', nationCode: 'ES', flag: '🇪🇸', club: 'Atlético Madrid', year: '2014', tournament: 'champions' },
      { id: 'atm_7', number: 7, name: 'Adrian López', positions: ['ST', 'LW'], primaryPos: 'ST', rating: 76, nation: 'España', nationCode: 'ES', flag: '🇪🇸', club: 'Atlético Madrid', year: '2014', tournament: 'champions' },
    ]
  },
  {
    id: 'b04_2024', name: 'Bayer 04 Leverkusen', shortCode: 'B04', type: 'champions', year: '2024', tag: 'Champions 2024', flag: '🇩🇪', country: 'Germany',
    players: [
      { id: 'b04_10', number: 10, name: 'Florian Wirtz', positions: ['AM', 'LW'], primaryPos: 'AM', rating: 86, bonus: 1, nation: 'Alemania', nationCode: 'DE', flag: '🇩🇪', club: 'Bayer Leverkusen', year: '2024', tournament: 'champions' },
      { id: 'b04_30', number: 30, name: 'Jeremie Frimpong', positions: ['RB', 'RW'], primaryPos: 'RB', rating: 80, nation: 'Países Bajos', nationCode: 'NL', flag: '🇳🇱', club: 'Bayer Leverkusen', year: '2024', tournament: 'champions' },
      { id: 'b04_20', number: 20, name: 'Álex Grimaldo', positions: ['LB', 'LW'], primaryPos: 'LB', rating: 81, nation: 'España', nationCode: 'ES', flag: '🇪🇸', club: 'Bayer Leverkusen', year: '2024', tournament: 'champions' },
      { id: 'b04_34', number: 34, name: 'Granit Xhaka', positions: ['CM', 'DM'], primaryPos: 'CM', rating: 81, nation: 'Suiza', nationCode: 'CH', flag: '🇨🇭', club: 'Bayer Leverkusen', year: '2024', tournament: 'champions' },
      { id: 'b04_22', number: 22, name: 'Victor Boniface', positions: ['ST'], primaryPos: 'ST', rating: 78, nation: 'Nigeria', nationCode: 'NG', flag: '🇳🇬', club: 'Bayer Leverkusen', year: '2024', tournament: 'champions' },
      { id: 'b04_4', number: 4, name: 'Jonathan Tah', positions: ['CB'], primaryPos: 'CB', rating: 80, nation: 'Alemania', nationCode: 'DE', flag: '🇩🇪', club: 'Bayer Leverkusen', year: '2024', tournament: 'champions' },
      { id: 'b04_12', number: 12, name: 'Edmond Tapsoba', positions: ['CB'], primaryPos: 'CB', rating: 78, nation: 'Burkina Faso', nationCode: 'BF', flag: '🇧🇫', club: 'Bayer Leverkusen', year: '2024', tournament: 'champions' },
      { id: 'b04_3', number: 3, name: 'Piero Hincapié', positions: ['CB', 'LB'], primaryPos: 'CB', rating: 77, nation: 'Ecuador', nationCode: 'EC', flag: '🇪🇨', club: 'Bayer Leverkusen', year: '2024', tournament: 'champions' },
      { id: 'b04_25', number: 25, name: 'Exequiel Palacios', positions: ['CM', 'DM'], primaryPos: 'CM', rating: 78, nation: 'Argentina', nationCode: 'AR', flag: '🇦🇷', club: 'Bayer Leverkusen', year: '2024', tournament: 'champions' },
      { id: 'b04_1', number: 1, name: 'Lukas Hradecky', positions: ['GK'], primaryPos: 'GK', rating: 79, nation: 'Finlandia', nationCode: 'FI', flag: '🇫🇮', club: 'Bayer Leverkusen', year: '2024', tournament: 'champions' },
      { id: 'b04_7', number: 7, name: 'Jonas Hofmann', positions: ['RW', 'AM'], primaryPos: 'RW', rating: 77, nation: 'Alemania', nationCode: 'DE', flag: '🇩🇪', club: 'Bayer Leverkusen', year: '2024', tournament: 'champions' },
    ]
  },
  {
    id: 'bvb_2013', name: 'Borussia Dortmund', shortCode: 'BVB', type: 'champions', year: '2013', tag: 'Champions 2013', flag: '🇩🇪', country: 'Germany',
    players: [
      { id: 'bvb_9', number: 9, name: 'Lewandowski', positions: ['ST'], primaryPos: 'ST', rating: 89, bonus: 1, nation: 'Polonia', nationCode: 'PL', flag: '🇵🇱', club: 'Dortmund', year: '2013', tournament: 'champions' },
      { id: 'bvb_11', number: 11, name: 'Marco Reus', positions: ['LW', 'AM'], primaryPos: 'LW', rating: 84, nation: 'Alemania', nationCode: 'DE', flag: '🇩🇪', club: 'Dortmund', year: '2013', tournament: 'champions' },
      { id: 'bvb_10', number: 10, name: 'Götze', positions: ['AM', 'RW'], primaryPos: 'AM', rating: 83, nation: 'Alemania', nationCode: 'DE', flag: '🇩🇪', club: 'Dortmund', year: '2013', tournament: 'champions' },
      { id: 'bvb_8', number: 8, name: 'Gündoğan', positions: ['CM', 'DM'], primaryPos: 'CM', rating: 81, nation: 'Alemania', nationCode: 'DE', flag: '🇩🇪', club: 'Dortmund', year: '2013', tournament: 'champions' },
      { id: 'bvb_15', number: 15, name: 'Hummels', positions: ['CB'], primaryPos: 'CB', rating: 84, nation: 'Alemania', nationCode: 'DE', flag: '🇩🇪', club: 'Dortmund', year: '2013', tournament: 'champions' },
      { id: 'bvb_4', number: 4, name: 'Neven Subotić', positions: ['CB'], primaryPos: 'CB', rating: 79, nation: 'Serbia', nationCode: 'RS', flag: '🇷🇸', club: 'Dortmund', year: '2013', tournament: 'champions' },
      { id: 'bvb_26', number: 26, name: 'Piszczek', positions: ['RB'], primaryPos: 'RB', rating: 80, nation: 'Polonia', nationCode: 'PL', flag: '🇵🇱', club: 'Dortmund', year: '2013', tournament: 'champions' },
      { id: 'bvb_29', number: 29, name: 'Schmelzer', positions: ['LB'], primaryPos: 'LB', rating: 77, nation: 'Alemania', nationCode: 'DE', flag: '🇩🇪', club: 'Dortmund', year: '2013', tournament: 'champions' },
      { id: 'bvb_6', number: 6, name: 'Sven Bender', positions: ['DM', 'CB'], primaryPos: 'DM', rating: 77, nation: 'Alemania', nationCode: 'DE', flag: '🇩🇪', club: 'Dortmund', year: '2013', tournament: 'champions' },
      { id: 'bvb_16', number: 16, name: 'Błaszczykowski', positions: ['RW'], primaryPos: 'RW', rating: 79, nation: 'Polonia', nationCode: 'PL', flag: '🇵🇱', club: 'Dortmund', year: '2013', tournament: 'champions' },
      { id: 'bvb_1', number: 1, name: 'Roman Weidenfeller', positions: ['GK'], primaryPos: 'GK', rating: 81, nation: 'Alemania', nationCode: 'DE', flag: '🇩🇪', club: 'Dortmund', year: '2013', tournament: 'champions' },
    ]
  },
  {
    id: 'gir_2024', name: 'Girona FC', shortCode: 'GIR', type: 'champions', year: '2024', tag: 'Champions 2024', flag: '🇪🇸', country: 'Spain',
    players: [
      { id: 'gir_9', number: 9, name: 'Artem Dovbyk', positions: ['ST'], primaryPos: 'ST', rating: 86, bonus: 1, nation: 'Ucrania', nationCode: 'UA', flag: '🇺🇦', club: 'Girona', year: '2024', tournament: 'champions' },
      { id: 'gir_8', number: 8, name: 'Viktor Tsygankov', positions: ['RW', 'AM'], primaryPos: 'RW', rating: 77, nation: 'Ucrania', nationCode: 'UA', flag: '🇺🇦', club: 'Girona', year: '2024', tournament: 'champions' },
      { id: 'gir_16', number: 16, name: 'Sávio (Savinho)', positions: ['LW', 'RW'], primaryPos: 'LW', rating: 78, nation: 'Brasil', nationCode: 'BR', flag: '🇧🇷', club: 'Girona', year: '2024', tournament: 'champions' },
      { id: 'gir_14', number: 14, name: 'Aleix García', positions: ['CM', 'DM'], primaryPos: 'CM', rating: 79, nation: 'España', nationCode: 'ES', flag: '🇪🇸', club: 'Girona', year: '2024', tournament: 'champions' },
      { id: 'gir_23', number: 23, name: 'Iván Martín', positions: ['CM', 'AM'], primaryPos: 'CM', rating: 76, nation: 'España', nationCode: 'ES', flag: '🇪🇸', club: 'Girona', year: '2024', tournament: 'champions' },
      { id: 'gir_13', number: 13, name: 'Paulo Gazzaniga', positions: ['GK'], primaryPos: 'GK', rating: 77, nation: 'Argentina', nationCode: 'AR', flag: '🇦🇷', club: 'Girona', year: '2024', tournament: 'champions' },
      { id: 'gir_25', number: 25, name: 'Eric García', positions: ['CB', 'RB'], primaryPos: 'CB', rating: 76, nation: 'España', nationCode: 'ES', flag: '🇪🇸', club: 'Girona', year: '2024', tournament: 'champions' },
      { id: 'gir_5', number: 5, name: 'David López', positions: ['CB', 'DM'], primaryPos: 'CB', rating: 76, nation: 'España', nationCode: 'ES', flag: '🇪🇸', club: 'Girona', year: '2024', tournament: 'champions' },
      { id: 'gir_20', number: 20, name: 'Yan Couto', positions: ['RB', 'RW'], primaryPos: 'RB', rating: 77, nation: 'Brasil', nationCode: 'BR', flag: '🇧🇷', club: 'Girona', year: '2024', tournament: 'champions' },
      { id: 'gir_3', number: 3, name: 'Miguel Gutiérrez', positions: ['LB'], primaryPos: 'LB', rating: 77, nation: 'España', nationCode: 'ES', flag: '🇪🇸', club: 'Girona', year: '2024', tournament: 'champions' },
      { id: 'gir_7', number: 7, name: 'Cristhian Stuani', positions: ['ST'], primaryPos: 'ST', rating: 75, nation: 'Uruguay', nationCode: 'UY', flag: '🇺🇾', club: 'Girona', year: '2024', tournament: 'champions' },
    ]
  },
  {
    id: 'por_2004', name: 'FC Porto', shortCode: 'POR', type: 'champions', year: '2004', tag: 'Champions 2004', flag: '🇵🇹', country: 'Portugal',
    players: [
      { id: 'por_10', number: 10, name: 'Deco', positions: ['AM', 'CM'], primaryPos: 'AM', rating: 87, bonus: 1, nation: 'Portugal', nationCode: 'PT', flag: '🇵🇹', club: 'Porto', year: '2004', tournament: 'champions' },
      { id: 'por_2', number: 2, name: 'Paulo Ferreira', positions: ['RB'], primaryPos: 'RB', rating: 80, nation: 'Portugal', nationCode: 'PT', flag: '🇵🇹', club: 'Porto', year: '2004', tournament: 'champions' },
      { id: 'por_99', number: 99, name: 'Vítor Baía', positions: ['GK'], primaryPos: 'GK', rating: 84, nation: 'Portugal', nationCode: 'PT', flag: '🇵🇹', club: 'Porto', year: '2004', tournament: 'champions' },
      { id: 'por_4', number: 4, name: 'Ricardo Carvalho', positions: ['CB'], primaryPos: 'CB', rating: 86, nation: 'Portugal', nationCode: 'PT', flag: '🇵🇹', club: 'Porto', year: '2004', tournament: 'champions' },
      { id: 'por_19', number: 19, name: 'Nuno Valente', positions: ['LB'], primaryPos: 'LB', rating: 78, nation: 'Portugal', nationCode: 'PT', flag: '🇵🇹', club: 'Porto', year: '2004', tournament: 'champions' },
      { id: 'por_6', number: 6, name: 'Costinha', positions: ['DM'], primaryPos: 'DM', rating: 80, nation: 'Portugal', nationCode: 'PT', flag: '🇵🇹', club: 'Porto', year: '2004', tournament: 'champions' },
      { id: 'por_18', number: 18, name: 'Maniche', positions: ['CM'], primaryPos: 'CM', rating: 81, nation: 'Portugal', nationCode: 'PT', flag: '🇵🇹', club: 'Porto', year: '2004', tournament: 'champions' },
      { id: 'por_11', number: 11, name: 'Derlei', positions: ['ST', 'LW'], primaryPos: 'ST', rating: 79, nation: 'Brasil', nationCode: 'BR', flag: '🇧🇷', club: 'Porto', year: '2004', tournament: 'champions' },
      { id: 'por_19_2', number: 77, name: 'Benni McCarthy', positions: ['ST'], primaryPos: 'ST', rating: 80, nation: 'Sudáfrica', nationCode: 'ZA', flag: '🇿🇦', club: 'Porto', year: '2004', tournament: 'champions' },
      { id: 'por_23', number: 23, name: 'Pedro Mendes', positions: ['CM'], primaryPos: 'CM', rating: 77, nation: 'Portugal', nationCode: 'PT', flag: '🇵🇹', club: 'Porto', year: '2004', tournament: 'champions' },
      { id: 'por_14', number: 14, name: 'Pedro Emanuel', positions: ['CB'], primaryPos: 'CB', rating: 77, nation: 'Portugal', nationCode: 'PT', flag: '🇵🇹', club: 'Porto', year: '2004', tournament: 'champions' },
    ]
  }
];

function calibrateBaseTeam(t: Team): Team {
  const maxRawRating = Math.max(...(t.players?.map(p => p.rating) || [75]));
  const isChampionOrHistoric = t.tag?.toLowerCase().includes('campeón') || t.tag?.toLowerCase().includes('final') || t.type === 'worldcup';
  const tier = isChampionOrHistoric ? 'legendary' : (t.tier || 'gold');
  const players = (t.players || []).map(p => {
    const isStar = !!p.bonus || p.rating >= maxRawRating - 1 || p.rating >= 92;
    return {
      ...p,
      rating: calibratePlayerRating(p.name, p.rating, t.year, tier, isStar)
    };
  });
  return {
    ...t,
    players
  };
}

const RAW_COMBINED_TEAMS: Team[] = [
  ...BASE_HISTORICAL_TEAMS.map(calibrateBaseTeam),
  ...ADDITIONAL_TEAMS,
  ...MASSIVE_TEAMS_DATA
];
const uniqueTeamsMap = new Map<string, Team>();
for (const t of RAW_COMBINED_TEAMS) {
  if (t && t.id) {
    uniqueTeamsMap.set(t.id, t);
  }
}

export const HISTORICAL_TEAMS: Team[] = Array.from(uniqueTeamsMap.values());

// Smart random team selector with anti-repetition across games and sessions
export {
  getSmartRandomTeam as getRandomTeam,
  getTeamSameClubDifferentYear,
  getTeamSameYearDifferentClub,
} from '../utils/draftSelection';

