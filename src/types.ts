export type Position = 'GK' | 'RB' | 'CB' | 'LB' | 'DM' | 'CM' | 'AM' | 'RW' | 'LW' | 'ST';

export interface Player {
  id: string;
  number: number;
  name: string;
  positions: Position[];
  primaryPos: Position;
  rating: number;
  bonus?: number; // e.g. +1
  nation: string;
  nationCode: string;
  flag: string;
  club: string;
  year: string;
  tournament: 'worldcup' | 'champions';
}

export interface Team {
  id: string;
  name: string;
  shortCode: string;
  type: 'worldcup' | 'champions';
  year: string;
  tag: string; // e.g. "Cup 2018", "Champions 2017"
  flag: string;
  country: string;
  tier?: 'legendary' | 'gold' | 'silver' | 'bronze';
  players: Player[];
}

export type FormationType = '4-3-3' | '4-4-2' | '4-2-3-1' | '3-5-2' | '3-4-3' | '5-3-2';

export interface SlotConfig {
  id: string;
  pos: Position;
  x: number; // 0 to 100 percentage
  y: number; // 0 to 100 percentage
}

export interface PlacedPlayer {
  player: Player;
  targetPos: Position;
  slotIndex: number;
  effectiveRating: number;
  fit: 'exact' | 'secondary' | 'out_of_position';
}

export type TournamentStage = 'draft' | 'octavos' | 'cuartos' | 'semis' | 'final' | 'champion' | 'eliminated';

export interface MatchEvent {
  min: number;
  type: 'kickoff' | 'goal' | 'goalOpp' | 'save' | 'miss' | 'missOpp' | 'foul' | 'half' | 'end' | 'card' | 'penalty';
  text: string;
  player?: string;
}

export interface MatchStats {
  possUser: number;
  possOpp: number;
  shotsUser: number;
  shotsOpp: number;
  sotUser: number;
  sotOpp: number;
  passAccUser: number;
  passAccOpp: number;
  cornersUser: number;
  cornersOpp: number;
  foulsUser: number;
  foulsOpp: number;
  savesUser: number;
  savesOpp: number;
}

export interface MatchResult {
  id: string;
  roundStage: TournamentStage;
  roundName: string; // "Octavos de Final", "Cuartos de Final", "Semifinales", "Gran Final"
  oppTeam: string;
  oppYear: string;
  oppFlag: string;
  userGoals: number;
  oppGoals: number;
  extraTime: boolean;
  penalties: boolean;
  penScore?: { user: number; opp: number };
  won: boolean;
  mvp: {
    name: string;
    rating: number;
    goals: number;
    position: string;
  };
  stats: MatchStats;
  userAvgRating: number;
  pointsEarned: number;
  date: string;
  squadSummary: { name: string; rating: number; pos: Position }[];
}

export interface UserStats {
  played: number;
  won: number;
  lost: number;
  goalsScored: number;
  highestAvgRating: number;
  highestPoints: number;
  totalPoints: number;
  unlockedAchievements: string[];
}

export interface Achievement {
  id: string;
  title: string;
  desc: string;
  icon: string;
}

