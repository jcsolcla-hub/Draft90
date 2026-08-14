import * as fs from 'fs';
import * as path from 'path';
import { calibratePlayerRating } from './rebalanceAllRatings';

export interface Player {
  id: string;
  number: number;
  name: string;
  positions: string[];
  primaryPos: string;
  rating: number;
  bonus?: number;
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
  tag: string;
  flag: string;
  country: string;
  tier?: 'legendary' | 'gold' | 'silver' | 'bronze';
  players: Player[];
}

function normalizePos(pos: string): 'GK' | 'RB' | 'CB' | 'LB' | 'DM' | 'CM' | 'AM' | 'RW' | 'LW' | 'ST' {
  if (pos === 'LM') return 'LW';
  if (pos === 'RM') return 'RW';
  if (pos === 'CF') return 'ST';
  if (pos === 'CAM') return 'AM';
  if (pos === 'CDM') return 'DM';
  if (pos === 'RWB') return 'RB';
  if (pos === 'LWB') return 'LB';
  return pos as any;
}

// Full helper to generate balanced 11 players for any team
export function buildTeam(
  id: string,
  name: string,
  shortCode: string,
  type: 'worldcup' | 'champions',
  year: string,
  tag: string,
  flag: string,
  country: string,
  tier: 'legendary' | 'gold' | 'silver' | 'bronze',
  playerList: Array<{
    name: string;
    pos: string;
    sec?: string[];
    rating: number;
    nation?: string;
    nationCode?: string;
    flag?: string;
    num?: number;
    bonus?: number;
  }>
): Team {
  const players: Player[] = playerList.map((p, idx) => {
    const primary = normalizePos(p.pos);
    const positions = p.sec ? [primary, ...p.sec.map(normalizePos)] : [primary];
    const pNation = p.nation || (type === 'worldcup' ? name : country);
    const pFlag = p.flag || flag;
    const pCode = p.nationCode || shortCode.slice(0, 2).toUpperCase();
    const pNumber = p.num || idx + 1;
    const isStar = !!p.bonus || p.rating >= 93;
    const calibratedRating = calibratePlayerRating(p.name, p.rating, year, tier, isStar);

    return {
      id: `${id}_${idx}_${p.name.toLowerCase().replace(/[^a-z0-9]/g, '')}`,
      number: pNumber,
      name: p.name,
      positions: positions as any,
      primaryPos: primary as any,
      rating: calibratedRating,
      bonus: p.bonus,
      nation: pNation,
      nationCode: pCode,
      flag: pFlag,
      club: name,
      year: year,
      tournament: type,
    };
  });

  return {
    id,
    name,
    shortCode,
    type,
    year,
    tag,
    flag,
    country,
    tier,
    players,
  };
}
