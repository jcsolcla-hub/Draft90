import { Team } from '../types';

export const ADDITIONAL_TEAMS: Team[] = [
  // --- MUNDIALES (SELECCIONES) ---
  {
    id: 'arg_1986', name: 'Argentina', shortCode: 'ARG', type: 'worldcup', year: '1986', tag: 'Cup 1986', flag: '🇦🇷', country: 'Argentina', tier: 'legendary',
    players: [
      { id: 'arg_10_86', number: 10, name: 'Diego Maradona', positions: ['AM', 'ST'], primaryPos: 'AM', rating: 99, bonus: 1, nation: 'Argentina', nationCode: 'AR', flag: '🇦🇷', club: 'Napoli', year: '1986', tournament: 'worldcup' },
      { id: 'arg_11_86', number: 11, name: 'Jorge Valdano', positions: ['ST', 'LW'], primaryPos: 'ST', rating: 88, nation: 'Argentina', nationCode: 'AR', flag: '🇦🇷', club: 'Real Madrid', year: '1986', tournament: 'worldcup' },
      { id: 'arg_7_86', number: 7, name: 'Jorge Burruchaga', positions: ['AM', 'RW'], primaryPos: 'AM', rating: 87, nation: 'Argentina', nationCode: 'AR', flag: '🇦🇷', club: 'Nantes', year: '1986', tournament: 'worldcup' },
      { id: 'arg_2_86', number: 2, name: 'Sergio Batista', positions: ['DM', 'CM'], primaryPos: 'DM', rating: 85, nation: 'Argentina', nationCode: 'AR', flag: '🇦🇷', club: 'Argentinos Jrs', year: '1986', tournament: 'worldcup' },
      { id: 'arg_19_86', number: 19, name: 'Oscar Ruggeri', positions: ['CB'], primaryPos: 'CB', rating: 88, nation: 'Argentina', nationCode: 'AR', flag: '🇦🇷', club: 'River Plate', year: '1986', tournament: 'worldcup' },
      { id: 'arg_9_86', number: 9, name: 'José Luis Cuciuffo', positions: ['CB', 'RB'], primaryPos: 'CB', rating: 83, nation: 'Argentina', nationCode: 'AR', flag: '🇦🇷', club: 'Vélez', year: '1986', tournament: 'worldcup' },
      { id: 'arg_18_86', number: 18, name: 'Nery Pumpido', positions: ['GK'], primaryPos: 'GK', rating: 86, nation: 'Argentina', nationCode: 'AR', flag: '🇦🇷', club: 'River Plate', year: '1986', tournament: 'worldcup' },
      { id: 'arg_14_86', number: 14, name: 'Ricardo Giusti', positions: ['CM', 'RB'], primaryPos: 'CM', rating: 84, nation: 'Argentina', nationCode: 'AR', flag: '🇦🇷', club: 'Independiente', year: '1986', tournament: 'worldcup' },
      { id: 'arg_16_86', number: 16, name: 'Julio Olarticoechea', positions: ['LB', 'LW'], primaryPos: 'LB', rating: 84, nation: 'Argentina', nationCode: 'AR', flag: '🇦🇷', club: 'Boca Juniors', year: '1986', tournament: 'worldcup' },
      { id: 'arg_5_86', number: 5, name: 'José Luis Brown', positions: ['CB'], primaryPos: 'CB', rating: 85, nation: 'Argentina', nationCode: 'AR', flag: '🇦🇷', club: 'Atlético Nacional', year: '1986', tournament: 'worldcup' },
      { id: 'arg_12_86', number: 12, name: 'Héctor Enrique', positions: ['CM', 'RW'], primaryPos: 'CM', rating: 83, nation: 'Argentina', nationCode: 'AR', flag: '🇦🇷', club: 'River Plate', year: '1986', tournament: 'worldcup' },
    ]
  },
  {
    id: 'arg_2022', name: 'Argentina', shortCode: 'ARG', type: 'worldcup', year: '2022', tag: 'Cup 2022', flag: '🇦🇷', country: 'Argentina',
    players: [
      { id: 'arg_10_22', number: 10, name: 'Lionel Messi', positions: ['RW', 'AM'], primaryPos: 'RW', rating: 97, bonus: 1, nation: 'Argentina', nationCode: 'AR', flag: '🇦🇷', club: 'PSG', year: '2022', tournament: 'worldcup' },
      { id: 'arg_9_22', number: 9, name: 'Julián Álvarez', positions: ['ST', 'LW'], primaryPos: 'ST', rating: 88, nation: 'Argentina', nationCode: 'AR', flag: '🇦🇷', club: 'Man City', year: '2022', tournament: 'worldcup' },
      { id: 'arg_11_22', number: 11, name: 'Ángel Di María', positions: ['RW', 'LW'], primaryPos: 'RW', rating: 89, nation: 'Argentina', nationCode: 'AR', flag: '🇦🇷', club: 'Juventus', year: '2022', tournament: 'worldcup' },
      { id: 'arg_24_22', number: 24, name: 'Enzo Fernández', positions: ['CM', 'DM'], primaryPos: 'CM', rating: 87, nation: 'Argentina', nationCode: 'AR', flag: '🇦🇷', club: 'Benfica', year: '2022', tournament: 'worldcup' },
      { id: 'arg_20_22', number: 20, name: 'Alexis Mac Allister', positions: ['CM', 'AM'], primaryPos: 'CM', rating: 86, nation: 'Argentina', nationCode: 'AR', flag: '🇦🇷', club: 'Brighton', year: '2022', tournament: 'worldcup' },
      { id: 'arg_7_22', number: 7, name: 'Rodrigo De Paul', positions: ['CM', 'RB'], primaryPos: 'CM', rating: 86, nation: 'Argentina', nationCode: 'AR', flag: '🇦🇷', club: 'Atlético Madrid', year: '2022', tournament: 'worldcup' },
      { id: 'arg_23_22', number: 23, name: 'Emiliano Martínez', positions: ['GK'], primaryPos: 'GK', rating: 90, nation: 'Argentina', nationCode: 'AR', flag: '🇦🇷', club: 'Aston Villa', year: '2022', tournament: 'worldcup' },
      { id: 'arg_19_22', number: 19, name: 'Nicolás Otamendi', positions: ['CB'], primaryPos: 'CB', rating: 86, nation: 'Argentina', nationCode: 'AR', flag: '🇦🇷', club: 'Benfica', year: '2022', tournament: 'worldcup' },
      { id: 'arg_13_22', number: 13, name: 'Cristian Romero', positions: ['CB'], primaryPos: 'CB', rating: 87, nation: 'Argentina', nationCode: 'AR', flag: '🇦🇷', club: 'Tottenham', year: '2022', tournament: 'worldcup' },
      { id: 'arg_26_22', number: 26, name: 'Nahuel Molina', positions: ['RB'], primaryPos: 'RB', rating: 83, nation: 'Argentina', nationCode: 'AR', flag: '🇦🇷', club: 'Atlético Madrid', year: '2022', tournament: 'worldcup' },
      { id: 'arg_8_22', number: 8, name: 'Marcos Acuña', positions: ['LB'], primaryPos: 'LB', rating: 83, nation: 'Argentina', nationCode: 'AR', flag: '🇦🇷', club: 'Sevilla', year: '2022', tournament: 'worldcup' },
    ]
  },
  {
    id: 'bra_1970', name: 'Brasil', shortCode: 'BRA', type: 'worldcup', year: '1970', tag: 'Cup 1970', flag: '🇧🇷', country: 'Brazil',
    players: [
      { id: 'bra_10_70', number: 10, name: 'Pelé', positions: ['ST', 'AM'], primaryPos: 'ST', rating: 99, bonus: 1, nation: 'Brasil', nationCode: 'BR', flag: '🇧🇷', club: 'Santos', year: '1970', tournament: 'worldcup' },
      { id: 'bra_7_70', number: 7, name: 'Jairzinho', positions: ['RW', 'ST'], primaryPos: 'RW', rating: 94, nation: 'Brasil', nationCode: 'BR', flag: '🇧🇷', club: 'Botafogo', year: '1970', tournament: 'worldcup' },
      { id: 'bra_11_70', number: 11, name: 'Rivelino', positions: ['LW', 'AM'], primaryPos: 'LW', rating: 92, nation: 'Brasil', nationCode: 'BR', flag: '🇧🇷', club: 'Corinthians', year: '1970', tournament: 'worldcup' },
      { id: 'bra_9_70', number: 9, name: 'Tostão', positions: ['ST', 'AM'], primaryPos: 'ST', rating: 91, nation: 'Brasil', nationCode: 'BR', flag: '🇧🇷', club: 'Cruzeiro', year: '1970', tournament: 'worldcup' },
      { id: 'bra_8_70', number: 8, name: 'Gérson', positions: ['CM', 'AM'], primaryPos: 'CM', rating: 93, nation: 'Brasil', nationCode: 'BR', flag: '🇧🇷', club: 'São Paulo', year: '1970', tournament: 'worldcup' },
      { id: 'bra_5_70', number: 5, name: 'Clodoaldo', positions: ['DM', 'CM'], primaryPos: 'DM', rating: 88, nation: 'Brasil', nationCode: 'BR', flag: '🇧🇷', club: 'Santos', year: '1970', tournament: 'worldcup' },
      { id: 'bra_4_70', number: 4, name: 'Carlos Alberto', positions: ['RB', 'CB'], primaryPos: 'RB', rating: 94, nation: 'Brasil', nationCode: 'BR', flag: '🇧🇷', club: 'Santos', year: '1970', tournament: 'worldcup' },
      { id: 'bra_16_70', number: 16, name: 'Everaldo', positions: ['LB'], primaryPos: 'LB', rating: 85, nation: 'Brasil', nationCode: 'BR', flag: '🇧🇷', club: 'Grêmio', year: '1970', tournament: 'worldcup' },
      { id: 'bra_2_70', number: 2, name: 'Brito', positions: ['CB'], primaryPos: 'CB', rating: 86, nation: 'Brasil', nationCode: 'BR', flag: '🇧🇷', club: 'Flamengo', year: '1970', tournament: 'worldcup' },
      { id: 'bra_3_70', number: 3, name: 'Piazza', positions: ['CB', 'DM'], primaryPos: 'CB', rating: 86, nation: 'Brasil', nationCode: 'BR', flag: '🇧🇷', club: 'Cruzeiro', year: '1970', tournament: 'worldcup' },
      { id: 'bra_1_70', number: 1, name: 'Félix', positions: ['GK'], primaryPos: 'GK', rating: 85, nation: 'Brasil', nationCode: 'BR', flag: '🇧🇷', club: 'Fluminense', year: '1970', tournament: 'worldcup' },
    ]
  },
  {
    id: 'bra_2002', name: 'Brasil', shortCode: 'BRA', type: 'worldcup', year: '2002', tag: 'Cup 2002', flag: '🇧🇷', country: 'Brazil',
    players: [
      { id: 'bra_9_02', number: 9, name: 'Ronaldo Nazário', positions: ['ST'], primaryPos: 'ST', rating: 97, bonus: 1, nation: 'Brasil', nationCode: 'BR', flag: '🇧🇷', club: 'Inter Milan', year: '2002', tournament: 'worldcup' },
      { id: 'bra_11_02', number: 11, name: 'Ronaldinho Gaucho', positions: ['AM', 'LW'], primaryPos: 'AM', rating: 95, nation: 'Brasil', nationCode: 'BR', flag: '🇧🇷', club: 'PSG', year: '2002', tournament: 'worldcup' },
      { id: 'bra_10_02', number: 10, name: 'Rivaldo', positions: ['AM', 'ST'], primaryPos: 'AM', rating: 94, nation: 'Brasil', nationCode: 'BR', flag: '🇧🇷', club: 'Barcelona', year: '2002', tournament: 'worldcup' },
      { id: 'bra_2_02', number: 2, name: 'Cafú', positions: ['RB'], primaryPos: 'RB', rating: 92, nation: 'Brasil', nationCode: 'BR', flag: '🇧🇷', club: 'Roma', year: '2002', tournament: 'worldcup' },
      { id: 'bra_6_02', number: 6, name: 'Roberto Carlos', positions: ['LB'], primaryPos: 'LB', rating: 93, nation: 'Brasil', nationCode: 'BR', flag: '🇧🇷', club: 'Real Madrid', year: '2002', tournament: 'worldcup' },
      { id: 'bra_15_02', number: 15, name: 'Kléberson', positions: ['CM'], primaryPos: 'CM', rating: 85, nation: 'Brasil', nationCode: 'BR', flag: '🇧🇷', club: 'Atlético Paranaense', year: '2002', tournament: 'worldcup' },
      { id: 'bra_8_02', number: 8, name: 'Gilberto Silva', positions: ['DM'], primaryPos: 'DM', rating: 87, nation: 'Brasil', nationCode: 'BR', flag: '🇧🇷', club: 'Atlético Mineiro', year: '2002', tournament: 'worldcup' },
      { id: 'bra_3_02', number: 3, name: 'Lúcio', positions: ['CB'], primaryPos: 'CB', rating: 89, nation: 'Brasil', nationCode: 'BR', flag: '🇧🇷', club: 'Bayer Leverkusen', year: '2002', tournament: 'worldcup' },
      { id: 'bra_4_02', number: 4, name: 'Rogue Júnior', positions: ['CB'], primaryPos: 'CB', rating: 84, nation: 'Brasil', nationCode: 'BR', flag: '🇧🇷', club: 'Milan', year: '2002', tournament: 'worldcup' },
      { id: 'bra_5_02', number: 5, name: 'Edmílson', positions: ['CB', 'DM'], primaryPos: 'CB', rating: 85, nation: 'Brasil', nationCode: 'BR', flag: '🇧🇷', club: 'Lyon', year: '2002', tournament: 'worldcup' },
      { id: 'bra_1_02', number: 1, name: 'Marcos', positions: ['GK'], primaryPos: 'GK', rating: 88, nation: 'Brasil', nationCode: 'BR', flag: '🇧🇷', club: 'Palmeiras', year: '2002', tournament: 'worldcup' },
    ]
  },
  {
    id: 'esp_2010', name: 'España', shortCode: 'ESP', type: 'worldcup', year: '2010', tag: 'Cup 2010', flag: '🇪🇸', country: 'Spain',
    players: [
      { id: 'esp_6_10', number: 6, name: 'Andrés Iniesta', positions: ['AM', 'CM'], primaryPos: 'AM', rating: 96, bonus: 1, nation: 'España', nationCode: 'ES', flag: '🇪🇸', club: 'Barcelona', year: '2010', tournament: 'worldcup' },
      { id: 'esp_8_10', number: 8, name: 'Xavi Hernández', positions: ['CM'], primaryPos: 'CM', rating: 96, nation: 'España', nationCode: 'ES', flag: '🇪🇸', club: 'Barcelona', year: '2010', tournament: 'worldcup' },
      { id: 'esp_1_10', number: 1, name: 'Iker Casillas', positions: ['GK'], primaryPos: 'GK', rating: 95, nation: 'España', nationCode: 'ES', flag: '🇪🇸', club: 'Real Madrid', year: '2010', tournament: 'worldcup' },
      { id: 'esp_7_10', number: 7, name: 'David Villa', positions: ['ST', 'LW'], primaryPos: 'ST', rating: 92, nation: 'España', nationCode: 'ES', flag: '🇪🇸', club: 'Valencia', year: '2010', tournament: 'worldcup' },
      { id: 'esp_14_10', number: 14, name: 'Xabi Alonso', positions: ['DM', 'CM'], primaryPos: 'DM', rating: 90, nation: 'España', nationCode: 'ES', flag: '🇪🇸', club: 'Real Madrid', year: '2010', tournament: 'worldcup' },
      { id: 'esp_16_10', number: 16, name: 'Sergio Busquets', positions: ['DM'], primaryPos: 'DM', rating: 91, nation: 'España', nationCode: 'ES', flag: '🇪🇸', club: 'Barcelona', year: '2010', tournament: 'worldcup' },
      { id: 'esp_15_10', number: 15, name: 'Sergio Ramos', positions: ['RB', 'CB'], primaryPos: 'RB', rating: 92, nation: 'España', nationCode: 'ES', flag: '🇪🇸', club: 'Real Madrid', year: '2010', tournament: 'worldcup' },
      { id: 'esp_5_10', number: 5, name: 'Carles Puyol', positions: ['CB'], primaryPos: 'CB', rating: 92, nation: 'España', nationCode: 'ES', flag: '🇪🇸', club: 'Barcelona', year: '2010', tournament: 'worldcup' },
      { id: 'esp_3_10', number: 3, name: 'Gerard Piqué', positions: ['CB'], primaryPos: 'CB', rating: 90, nation: 'España', nationCode: 'ES', flag: '🇪🇸', club: 'Barcelona', year: '2010', tournament: 'worldcup' },
      { id: 'esp_11_10', number: 11, name: 'Joan Capdevila', positions: ['LB'], primaryPos: 'LB', rating: 85, nation: 'España', nationCode: 'ES', flag: '🇪🇸', club: 'Villarreal', year: '2010', tournament: 'worldcup' },
      { id: 'esp_18_10', number: 18, name: 'Pedro Rodríguez', positions: ['RW', 'LW'], primaryPos: 'RW', rating: 86, nation: 'España', nationCode: 'ES', flag: '🇪🇸', club: 'Barcelona', year: '2010', tournament: 'worldcup' },
    ]
  },
  {
    id: 'fra_1998', name: 'Francia', shortCode: 'FRA', type: 'worldcup', year: '1998', tag: 'Cup 1998', flag: '🇫🇷', country: 'France',
    players: [
      { id: 'fra_10_98', number: 10, name: 'Zinedine Zidane', positions: ['AM', 'CM'], primaryPos: 'AM', rating: 97, bonus: 1, nation: 'Francia', nationCode: 'FR', flag: '🇫🇷', club: 'Juventus', year: '1998', tournament: 'worldcup' },
      { id: 'fra_6_98', number: 6, name: 'Yuri Djorkaeff', positions: ['AM', 'ST'], primaryPos: 'AM', rating: 88, nation: 'Francia', nationCode: 'FR', flag: '🇫🇷', club: 'Inter Milan', year: '1998', tournament: 'worldcup' },
      { id: 'fra_7_98', number: 7, name: 'Didier Deschamps', positions: ['DM'], primaryPos: 'DM', rating: 89, nation: 'Francia', nationCode: 'FR', flag: '🇫🇷', club: 'Juventus', year: '1998', tournament: 'worldcup' },
      { id: 'fra_17_98', number: 17, name: 'Emmanuel Petit', positions: ['DM', 'CM'], primaryPos: 'DM', rating: 87, nation: 'Francia', nationCode: 'FR', flag: '🇫🇷', club: 'Arsenal', year: '1998', tournament: 'worldcup' },
      { id: 'fra_15_98', number: 15, name: 'Lilian Thuram', positions: ['RB', 'CB'], primaryPos: 'RB', rating: 92, nation: 'Francia', nationCode: 'FR', flag: '🇫🇷', club: 'Parma', year: '1998', tournament: 'worldcup' },
      { id: 'fra_8_98', number: 8, name: 'Marcel Desailly', positions: ['CB', 'DM'], primaryPos: 'CB', rating: 92, nation: 'Francia', nationCode: 'FR', flag: '🇫🇷', club: 'AC Milan', year: '1998', tournament: 'worldcup' },
      { id: 'fra_5_98', number: 5, name: 'Laurent Blanc', positions: ['CB'], primaryPos: 'CB', rating: 90, nation: 'Francia', nationCode: 'FR', flag: '🇫🇷', club: 'Marseille', year: '1998', tournament: 'worldcup' },
      { id: 'fra_3_98', number: 3, name: 'Bixente Lizarazu', positions: ['LB'], primaryPos: 'LB', rating: 89, nation: 'Francia', nationCode: 'FR', flag: '🇫🇷', club: 'Bayern Munich', year: '1998', tournament: 'worldcup' },
      { id: 'fra_16_98', number: 16, name: 'Fabien Barthez', positions: ['GK'], primaryPos: 'GK', rating: 89, nation: 'Francia', nationCode: 'FR', flag: '🇫🇷', club: 'Monaco', year: '1998', tournament: 'worldcup' },
      { id: 'fra_9_98', number: 9, name: 'Stéphane Guivarc\'h', positions: ['ST'], primaryPos: 'ST', rating: 82, nation: 'Francia', nationCode: 'FR', flag: '🇫🇷', club: 'Auxerre', year: '1998', tournament: 'worldcup' },
      { id: 'fra_12_98', number: 12, name: 'Thierry Henry', positions: ['LW', 'ST'], primaryPos: 'LW', rating: 86, nation: 'Francia', nationCode: 'FR', flag: '🇫🇷', club: 'Monaco', year: '1998', tournament: 'worldcup' },
    ]
  },
  {
    id: 'fra_2018', name: 'Francia', shortCode: 'FRA', type: 'worldcup', year: '2018', tag: 'Cup 2018', flag: '🇫🇷', country: 'France',
    players: [
      { id: 'fra_10_18', number: 10, name: 'Kylian Mbappé', positions: ['RW', 'ST'], primaryPos: 'RW', rating: 95, bonus: 1, nation: 'Francia', nationCode: 'FR', flag: '🇫🇷', club: 'PSG', year: '2018', tournament: 'worldcup' },
      { id: 'fra_7_18', number: 7, name: 'Antoine Griezmann', positions: ['AM', 'ST'], primaryPos: 'AM', rating: 92, nation: 'Francia', nationCode: 'FR', flag: '🇫🇷', club: 'Atlético Madrid', year: '2018', tournament: 'worldcup' },
      { id: 'fra_6_18', number: 6, name: 'Paul Pogba', positions: ['CM', 'AM'], primaryPos: 'CM', rating: 90, nation: 'Francia', nationCode: 'FR', flag: '🇫🇷', club: 'Man United', year: '2018', tournament: 'worldcup' },
      { id: 'fra_13_18', number: 13, name: 'N\'Golo Kanté', positions: ['DM', 'CM'], primaryPos: 'DM', rating: 93, nation: 'Francia', nationCode: 'FR', flag: '🇫🇷', club: 'Chelsea', year: '2018', tournament: 'worldcup' },
      { id: 'fra_4_18', number: 4, name: 'Raphaël Varane', positions: ['CB'], primaryPos: 'CB', rating: 90, nation: 'Francia', nationCode: 'FR', flag: '🇫🇷', club: 'Real Madrid', year: '2018', tournament: 'worldcup' },
      { id: 'fra_5_18', number: 5, name: 'Samuel Umtiti', positions: ['CB'], primaryPos: 'CB', rating: 87, nation: 'Francia', nationCode: 'FR', flag: '🇫🇷', club: 'Barcelona', year: '2018', tournament: 'worldcup' },
      { id: 'fra_2_18', number: 2, name: 'Benjamin Pavard', positions: ['RB', 'CB'], primaryPos: 'RB', rating: 85, nation: 'Francia', nationCode: 'FR', flag: '🇫🇷', club: 'Stuttgart', year: '2018', tournament: 'worldcup' },
      { id: 'fra_21_18', number: 21, name: 'Lucas Hernández', positions: ['LB', 'CB'], primaryPos: 'LB', rating: 86, nation: 'Francia', nationCode: 'FR', flag: '🇫🇷', club: 'Atlético Madrid', year: '2018', tournament: 'worldcup' },
      { id: 'fra_1_18', number: 1, name: 'Hugo Lloris', positions: ['GK'], primaryPos: 'GK', rating: 89, nation: 'Francia', nationCode: 'FR', flag: '🇫🇷', club: 'Tottenham', year: '2018', tournament: 'worldcup' },
      { id: 'fra_9_18', number: 9, name: 'Olivier Giroud', positions: ['ST'], primaryPos: 'ST', rating: 85, nation: 'Francia', nationCode: 'FR', flag: '🇫🇷', club: 'Chelsea', year: '2018', tournament: 'worldcup' },
      { id: 'fra_14_18', number: 14, name: 'Blaise Matuidi', positions: ['CM', 'LW'], primaryPos: 'CM', rating: 86, nation: 'Francia', nationCode: 'FR', flag: '🇫🇷', club: 'Juventus', year: '2018', tournament: 'worldcup' },
    ]
  },
  {
    id: 'ita_2006', name: 'Italia', shortCode: 'ITA', type: 'worldcup', year: '2006', tag: 'Cup 2006', flag: '🇮🇹', country: 'Italy',
    players: [
      { id: 'ita_5_06', number: 5, name: 'Fabio Cannavaro', positions: ['CB'], primaryPos: 'CB', rating: 96, bonus: 1, nation: 'Italia', nationCode: 'IT', flag: '🇮🇹', club: 'Juventus', year: '2006', tournament: 'worldcup' },
      { id: 'ita_21_06', number: 21, name: 'Andrea Pirlo', positions: ['CM', 'DM'], primaryPos: 'CM', rating: 94, nation: 'Italia', nationCode: 'IT', flag: '🇮🇹', club: 'Milan', year: '2006', tournament: 'worldcup' },
      { id: 'ita_1_06', number: 1, name: 'Gianluigi Buffon', positions: ['GK'], primaryPos: 'GK', rating: 96, nation: 'Italia', nationCode: 'IT', flag: '🇮🇹', club: 'Juventus', year: '2006', tournament: 'worldcup' },
      { id: 'ita_10_06', number: 10, name: 'Francesco Totti', positions: ['AM', 'ST'], primaryPos: 'AM', rating: 92, nation: 'Italia', nationCode: 'IT', flag: '🇮🇹', club: 'Roma', year: '2006', tournament: 'worldcup' },
      { id: 'ita_8_06', number: 8, name: 'Gennaro Gattuso', positions: ['DM'], primaryPos: 'DM', rating: 89, nation: 'Italia', nationCode: 'IT', flag: '🇮🇹', club: 'Milan', year: '2006', tournament: 'worldcup' },
      { id: 'ita_3_06', number: 3, name: 'Gianluca Zambrotta', positions: ['RB', 'LB'], primaryPos: 'RB', rating: 90, nation: 'Italia', nationCode: 'IT', flag: '🇮🇹', club: 'Juventus', year: '2006', tournament: 'worldcup' },
      { id: 'ita_23_06', number: 23, name: 'Marco Materazzi', positions: ['CB'], primaryPos: 'CB', rating: 87, nation: 'Italia', nationCode: 'IT', flag: '🇮🇹', club: 'Inter Milan', year: '2006', tournament: 'worldcup' },
      { id: 'ita_19_06', number: 19, name: 'Fabio Grosso', positions: ['LB'], primaryPos: 'LB', rating: 86, nation: 'Italia', nationCode: 'IT', flag: '🇮🇹', club: 'Palermo', year: '2006', tournament: 'worldcup' },
      { id: 'ita_16_06', number: 16, name: 'Mauro Camoranesi', positions: ['RW', 'CM'], primaryPos: 'RW', rating: 86, nation: 'Italia', nationCode: 'IT', flag: '🇮🇹', club: 'Juventus', year: '2006', tournament: 'worldcup' },
      { id: 'ita_9_06', number: 9, name: 'Luca Toni', positions: ['ST'], primaryPos: 'ST', rating: 88, nation: 'Italia', nationCode: 'IT', flag: '🇮🇹', club: 'Fiorentina', year: '2006', tournament: 'worldcup' },
      { id: 'ita_7_06', number: 7, name: 'Alessandro Del Piero', positions: ['ST', 'LW'], primaryPos: 'ST', rating: 91, nation: 'Italia', nationCode: 'IT', flag: '🇮🇹', club: 'Juventus', year: '2006', tournament: 'worldcup' },
    ]
  },
  {
    id: 'cro_2018', name: 'Croacia', shortCode: 'CRO', type: 'worldcup', year: '2018', tag: 'Cup 2018', flag: '🇭🇷', country: 'Croatia',
    players: [
      { id: 'cro_10_18', number: 10, name: 'Luka Modrić', positions: ['CM', 'AM'], primaryPos: 'CM', rating: 96, bonus: 1, nation: 'Croacia', nationCode: 'HR', flag: '🇭🇷', club: 'Real Madrid', year: '2018', tournament: 'worldcup' },
      { id: 'cro_7_18', number: 7, name: 'Ivan Rakitić', positions: ['CM', 'DM'], primaryPos: 'CM', rating: 89, nation: 'Croacia', nationCode: 'HR', flag: '🇭🇷', club: 'Barcelona', year: '2018', tournament: 'worldcup' },
      { id: 'cro_17_18', number: 17, name: 'Mario Mandžukić', positions: ['ST', 'LW'], primaryPos: 'ST', rating: 87, nation: 'Croacia', nationCode: 'HR', flag: '🇭🇷', club: 'Juventus', year: '2018', tournament: 'worldcup' },
      { id: 'cro_4_18', number: 4, name: 'Ivan Perišić', positions: ['LW', 'AM'], primaryPos: 'LW', rating: 88, nation: 'Croacia', nationCode: 'HR', flag: '🇭🇷', club: 'Inter Milan', year: '2018', tournament: 'worldcup' },
      { id: 'cro_11_18', number: 11, name: 'Marcelo Brozović', positions: ['DM', 'CM'], primaryPos: 'DM', rating: 86, nation: 'Croacia', nationCode: 'HR', flag: '🇭🇷', club: 'Inter Milan', year: '2018', tournament: 'worldcup' },
      { id: 'cro_23_18', number: 23, name: 'Danijel Subašić', positions: ['GK'], primaryPos: 'GK', rating: 87, nation: 'Croacia', nationCode: 'HR', flag: '🇭🇷', club: 'Monaco', year: '2018', tournament: 'worldcup' },
      { id: 'cro_6_18', number: 6, name: 'Dejan Lovren', positions: ['CB'], primaryPos: 'CB', rating: 84, nation: 'Croacia', nationCode: 'HR', flag: '🇭🇷', club: 'Liverpool', year: '2018', tournament: 'worldcup' },
      { id: 'cro_21_18', number: 21, name: 'Domagoj Vida', positions: ['CB'], primaryPos: 'CB', rating: 84, nation: 'Croacia', nationCode: 'HR', flag: '🇭🇷', club: 'Beşiktaş', year: '2018', tournament: 'worldcup' },
      { id: 'cro_2_18', number: 2, name: 'Šime Vrsaljko', positions: ['RB'], primaryPos: 'RB', rating: 83, nation: 'Croacia', nationCode: 'HR', flag: '🇭🇷', club: 'Atlético Madrid', year: '2018', tournament: 'worldcup' },
      { id: 'cro_3_18', number: 3, name: 'Ivan Strinić', positions: ['LB'], primaryPos: 'LB', rating: 80, nation: 'Croacia', nationCode: 'HR', flag: '🇭🇷', club: 'Sampdoria', year: '2018', tournament: 'worldcup' },
      { id: 'cro_18_18', number: 18, name: 'Ante Rebić', positions: ['RW', 'ST'], primaryPos: 'RW', rating: 84, nation: 'Croacia', nationCode: 'HR', flag: '🇭🇷', club: 'Eintracht Frankfurt', year: '2018', tournament: 'worldcup' },
    ]
  },
  {
    id: 'ned_1974', name: 'Países Bajos', shortCode: 'NED', type: 'worldcup', year: '1974', tag: 'Cup 1974', flag: '🇳🇱', country: 'Netherlands',
    players: [
      { id: 'ned_14_74', number: 14, name: 'Johan Cruyff', positions: ['ST', 'AM'], primaryPos: 'ST', rating: 98, bonus: 1, nation: 'Países Bajos', nationCode: 'NL', flag: '🇳🇱', club: 'Barcelona', year: '1974', tournament: 'worldcup' },
      { id: 'ned_12_74', number: 12, name: 'Ruud Krol', positions: ['LB', 'CB'], primaryPos: 'LB', rating: 92, nation: 'Países Bajos', nationCode: 'NL', flag: '🇳🇱', club: 'Ajax', year: '1974', tournament: 'worldcup' },
      { id: 'ned_13_74', number: 13, name: 'Johan Neeskens', positions: ['CM', 'DM'], primaryPos: 'CM', rating: 93, nation: 'Países Bajos', nationCode: 'NL', flag: '🇳🇱', club: 'Ajax', year: '1974', tournament: 'worldcup' },
      { id: 'ned_15_74', number: 15, name: 'Rob Rensenbrink', positions: ['LW', 'ST'], primaryPos: 'LW', rating: 90, nation: 'Países Bajos', nationCode: 'NL', flag: '🇳🇱', club: 'Anderlecht', year: '1974', tournament: 'worldcup' },
      { id: 'ned_16_74', number: 16, name: 'Johnny Rep', positions: ['RW', 'ST'], primaryPos: 'RW', rating: 89, nation: 'Países Bajos', nationCode: 'NL', flag: '🇳🇱', club: 'Ajax', year: '1974', tournament: 'worldcup' },
      { id: 'ned_3_74', number: 3, name: 'Wim van Hanegem', positions: ['CM'], primaryPos: 'CM', rating: 91, nation: 'Países Bajos', nationCode: 'NL', flag: '🇳🇱', club: 'Feyenoord', year: '1974', tournament: 'worldcup' },
      { id: 'ned_20_74', number: 20, name: 'Wim Suurbier', positions: ['RB'], primaryPos: 'RB', rating: 87, nation: 'Países Bajos', nationCode: 'NL', flag: '🇳🇱', club: 'Ajax', year: '1974', tournament: 'worldcup' },
      { id: 'ned_17_74', number: 17, name: 'Wim Rijsbergen', positions: ['CB'], primaryPos: 'CB', rating: 85, nation: 'Países Bajos', nationCode: 'NL', flag: '🇳🇱', club: 'Feyenoord', year: '1974', tournament: 'worldcup' },
      { id: 'ned_2_74', number: 2, name: 'Arie Haan', positions: ['CB', 'CM'], primaryPos: 'CB', rating: 88, nation: 'Países Bajos', nationCode: 'NL', flag: '🇳🇱', club: 'Ajax', year: '1974', tournament: 'worldcup' },
      { id: 'ned_8_74', number: 8, name: 'Jan Jongbloed', positions: ['GK'], primaryPos: 'GK', rating: 83, nation: 'Países Bajos', nationCode: 'NL', flag: '🇳🇱', club: 'FC Amsterdam', year: '1974', tournament: 'worldcup' },
      { id: 'ned_6_74', number: 6, name: 'Wim Jansen', positions: ['DM', 'CM'], primaryPos: 'DM', rating: 86, nation: 'Países Bajos', nationCode: 'NL', flag: '🇳🇱', club: 'Feyenoord', year: '1974', tournament: 'worldcup' },
    ]
  },
  {
    id: 'mar_2022', name: 'Marruecos', shortCode: 'MAR', type: 'worldcup', year: '2022', tag: 'Cup 2022', flag: '🇲🇦', country: 'Morocco',
    players: [
      { id: 'mar_2_22', number: 2, name: 'Achraf Hakimi', positions: ['RB', 'RW'], primaryPos: 'RB', rating: 90, bonus: 1, nation: 'Marruecos', nationCode: 'MA', flag: '🇲🇦', club: 'PSG', year: '2022', tournament: 'worldcup' },
      { id: 'mar_7_22', number: 7, name: 'Hakim Ziyech', positions: ['RW', 'AM'], primaryPos: 'RW', rating: 87, nation: 'Marruecos', nationCode: 'MA', flag: '🇲🇦', club: 'Chelsea', year: '2022', tournament: 'worldcup' },
      { id: 'mar_4_22', number: 4, name: 'Sofyan Amrabat', positions: ['DM', 'CM'], primaryPos: 'DM', rating: 88, nation: 'Marruecos', nationCode: 'MA', flag: '🇲🇦', club: 'Fiorentina', year: '2022', tournament: 'worldcup' },
      { id: 'mar_1_22', number: 1, name: 'Yassine Bounou (Bono)', positions: ['GK'], primaryPos: 'GK', rating: 91, nation: 'Marruecos', nationCode: 'MA', flag: '🇲🇦', club: 'Sevilla', year: '2022', tournament: 'worldcup' },
      { id: 'mar_19_22', number: 19, name: 'Youssef En-Nesyri', positions: ['ST'], primaryPos: 'ST', rating: 86, nation: 'Marruecos', nationCode: 'MA', flag: '🇲🇦', club: 'Sevilla', year: '2022', tournament: 'worldcup' },
      { id: 'mar_6_22', number: 6, name: 'Romain Saïss', positions: ['CB'], primaryPos: 'CB', rating: 85, nation: 'Marruecos', nationCode: 'MA', flag: '🇲🇦', club: 'Beşiktaş', year: '2022', tournament: 'worldcup' },
      { id: 'mar_5_22', number: 5, name: 'Nayef Aguerd', positions: ['CB'], primaryPos: 'CB', rating: 85, nation: 'Marruecos', nationCode: 'MA', flag: '🇲🇦', club: 'West Ham', year: '2022', tournament: 'worldcup' },
      { id: 'mar_25_22', number: 25, name: 'Yahia Attiyat Allah', positions: ['LB'], primaryPos: 'LB', rating: 82, nation: 'Marruecos', nationCode: 'MA', flag: '🇲🇦', club: 'Wydad', year: '2022', tournament: 'worldcup' },
      { id: 'mar_8_22', number: 8, name: 'Azzedine Ounahi', positions: ['CM', 'AM'], primaryPos: 'CM', rating: 86, nation: 'Marruecos', nationCode: 'MA', flag: '🇲🇦', club: 'Angers', year: '2022', tournament: 'worldcup' },
      { id: 'mar_17_22', number: 17, name: 'Sofiane Boufal', positions: ['LW', 'AM'], primaryPos: 'LW', rating: 84, nation: 'Marruecos', nationCode: 'MA', flag: '🇲🇦', club: 'Angers', year: '2022', tournament: 'worldcup' },
      { id: 'mar_15_22', number: 15, name: 'Selim Amallah', positions: ['CM'], primaryPos: 'CM', rating: 81, nation: 'Marruecos', nationCode: 'MA', flag: '🇲🇦', club: 'Standard Liège', year: '2022', tournament: 'worldcup' },
    ]
  },

  // --- CHAMPIONS LEAGUE (CLUBES HISTÓRICOS) ---
  {
    id: 'rma_2017', name: 'Real Madrid CF', shortCode: 'RMA', type: 'champions', year: '2017', tag: 'Champions 2017', flag: '🇪🇸', country: 'Spain', tier: 'legendary',
    players: [
      { id: 'rma_7_17', number: 7, name: 'Cristiano Ronaldo', positions: ['ST', 'LW'], primaryPos: 'ST', rating: 97, bonus: 1, nation: 'Portugal', nationCode: 'PT', flag: '🇵🇹', club: 'Real Madrid', year: '2017', tournament: 'champions' },
      { id: 'rma_8_17', number: 8, name: 'Toni Kroos', positions: ['CM'], primaryPos: 'CM', rating: 93, nation: 'Alemania', nationCode: 'DE', flag: '🇩🇪', club: 'Real Madrid', year: '2017', tournament: 'champions' },
      { id: 'rma_10_17', number: 10, name: 'Luka Modrić', positions: ['CM', 'AM'], primaryPos: 'CM', rating: 95, nation: 'Croacia', nationCode: 'HR', flag: '🇭🇷', club: 'Real Madrid', year: '2017', tournament: 'champions' },
      { id: 'rma_14_17', number: 14, name: 'Casemiro', positions: ['DM'], primaryPos: 'DM', rating: 91, nation: 'Brasil', nationCode: 'BR', flag: '🇧🇷', club: 'Real Madrid', year: '2017', tournament: 'champions' },
      { id: 'rma_4_17', number: 4, name: 'Sergio Ramos', positions: ['CB'], primaryPos: 'CB', rating: 94, nation: 'España', nationCode: 'ES', flag: '🇪🇸', club: 'Real Madrid', year: '2017', tournament: 'champions' },
      { id: 'rma_12_17', number: 12, name: 'Marcelo', positions: ['LB'], primaryPos: 'LB', rating: 93, nation: 'Brasil', nationCode: 'BR', flag: '🇧🇷', club: 'Real Madrid', year: '2017', tournament: 'champions' },
      { id: 'rma_2_17', number: 2, name: 'Dani Carvajal', positions: ['RB'], primaryPos: 'RB', rating: 89, nation: 'España', nationCode: 'ES', flag: '🇪🇸', club: 'Real Madrid', year: '2017', tournament: 'champions' },
      { id: 'rma_5_17', number: 5, name: 'Raphaël Varane', positions: ['CB'], primaryPos: 'CB', rating: 89, nation: 'Francia', nationCode: 'FR', flag: '🇫🇷', club: 'Real Madrid', year: '2017', tournament: 'champions' },
      { id: 'rma_1_17', number: 1, name: 'Keylor Navas', positions: ['GK'], primaryPos: 'GK', rating: 91, nation: 'Costa Rica', nationCode: 'CR', flag: '🇨🇷', club: 'Real Madrid', year: '2017', tournament: 'champions' },
      { id: 'rma_9_17', number: 9, name: 'Karim Benzema', positions: ['ST'], primaryPos: 'ST', rating: 91, nation: 'Francia', nationCode: 'FR', flag: '🇫🇷', club: 'Real Madrid', year: '2017', tournament: 'champions' },
      { id: 'rma_22_17', number: 22, name: 'Isco Alarcón', positions: ['AM', 'LW'], primaryPos: 'AM', rating: 90, nation: 'España', nationCode: 'ES', flag: '🇪🇸', club: 'Real Madrid', year: '2017', tournament: 'champions' },
    ]
  },
  {
    id: 'bar_2009', name: 'FC Barcelona', shortCode: 'BAR', type: 'champions', year: '2009', tag: 'Champions 2009', flag: '🇪🇸', country: 'Spain', tier: 'legendary',
    players: [
      { id: 'bar_10_09', number: 10, name: 'Lionel Messi', positions: ['RW', 'ST'], primaryPos: 'RW', rating: 99, bonus: 1, nation: 'Argentina', nationCode: 'AR', flag: '🇦🇷', club: 'Barcelona', year: '2009', tournament: 'champions' },
      { id: 'bar_6_09', number: 6, name: 'Xavi Hernández', positions: ['CM'], primaryPos: 'CM', rating: 96, nation: 'España', nationCode: 'ES', flag: '🇪🇸', club: 'Barcelona', year: '2009', tournament: 'champions' },
      { id: 'bar_8_09', number: 8, name: 'Andrés Iniesta', positions: ['AM', 'CM'], primaryPos: 'AM', rating: 96, nation: 'España', nationCode: 'ES', flag: '🇪🇸', club: 'Barcelona', year: '2009', tournament: 'champions' },
      { id: 'bar_9_09', number: 9, name: 'Samuel Eto\'o', positions: ['ST', 'RW'], primaryPos: 'ST', rating: 93, nation: 'Camerún', nationCode: 'CM', flag: '🇨🇲', club: 'Barcelona', year: '2009', tournament: 'champions' },
      { id: 'bar_14_09', number: 14, name: 'Thierry Henry', positions: ['LW', 'ST'], primaryPos: 'LW', rating: 92, nation: 'Francia', nationCode: 'FR', flag: '🇫🇷', club: 'Barcelona', year: '2009', tournament: 'champions' },
      { id: 'bar_28_09', number: 28, name: 'Sergio Busquets', positions: ['DM'], primaryPos: 'DM', rating: 88, nation: 'España', nationCode: 'ES', flag: '🇪🇸', club: 'Barcelona', year: '2009', tournament: 'champions' },
      { id: 'bar_20_09', number: 20, name: 'Dani Alves', positions: ['RB'], primaryPos: 'RB', rating: 93, nation: 'Brasil', nationCode: 'BR', flag: '🇧🇷', club: 'Barcelona', year: '2009', tournament: 'champions' },
      { id: 'bar_5_09', number: 5, name: 'Carles Puyol', positions: ['CB'], primaryPos: 'CB', rating: 93, nation: 'España', nationCode: 'ES', flag: '🇪🇸', club: 'Barcelona', year: '2009', tournament: 'champions' },
      { id: 'bar_3_09', number: 3, name: 'Gerard Piqué', positions: ['CB'], primaryPos: 'CB', rating: 89, nation: 'España', nationCode: 'ES', flag: '🇪🇸', club: 'Barcelona', year: '2009', tournament: 'champions' },
      { id: 'bar_16_09', number: 16, name: 'Sylvinho', positions: ['LB'], primaryPos: 'LB', rating: 82, nation: 'Brasil', nationCode: 'BR', flag: '🇧🇷', club: 'Barcelona', year: '2009', tournament: 'champions' },
      { id: 'bar_1_09', number: 1, name: 'Víctor Valdés', positions: ['GK'], primaryPos: 'GK', rating: 89, nation: 'España', nationCode: 'ES', flag: '🇪🇸', club: 'Barcelona', year: '2009', tournament: 'champions' },
    ]
  },
  {
    id: 'bay_2020', name: 'Bayern de Múnich', shortCode: 'BAY', type: 'champions', year: '2020', tag: 'Champions 2020', flag: '🇩🇪', country: 'Germany',
    players: [
      { id: 'bay_9_20', number: 9, name: 'Robert Lewandowski', positions: ['ST'], primaryPos: 'ST', rating: 97, bonus: 1, nation: 'Polonia', nationCode: 'PL', flag: '🇵🇱', club: 'Bayern', year: '2020', tournament: 'champions' },
      { id: 'bay_25_20', number: 25, name: 'Thomas Müller', positions: ['AM', 'ST'], primaryPos: 'AM', rating: 92, nation: 'Alemania', nationCode: 'DE', flag: '🇩🇪', club: 'Bayern', year: '2020', tournament: 'champions' },
      { id: 'bay_1_20', number: 1, name: 'Manuel Neuer', positions: ['GK'], primaryPos: 'GK', rating: 95, nation: 'Alemania', nationCode: 'DE', flag: '🇩🇪', club: 'Bayern', year: '2020', tournament: 'champions' },
      { id: 'bay_6_20', number: 6, name: 'Thiago Alcántara', positions: ['CM', 'DM'], primaryPos: 'CM', rating: 93, nation: 'España', nationCode: 'ES', flag: '🇪🇸', club: 'Bayern', year: '2020', tournament: 'champions' },
      { id: 'bay_19_20', number: 19, name: 'Alphonso Davies', positions: ['LB', 'LW'], primaryPos: 'LB', rating: 90, nation: 'Canadá', nationCode: 'CA', flag: '🇨🇦', club: 'Bayern', year: '2020', tournament: 'champions' },
      { id: 'bay_32_20', number: 32, name: 'Joshua Kimmich', positions: ['RB', 'DM'], primaryPos: 'RB', rating: 92, nation: 'Alemania', nationCode: 'DE', flag: '🇩🇪', club: 'Bayern', year: '2020', tournament: 'champions' },
      { id: 'bay_22_20', number: 22, name: 'Serge Gnabry', positions: ['RW', 'LW'], primaryPos: 'RW', rating: 89, nation: 'Alemania', nationCode: 'DE', flag: '🇩🇪', club: 'Bayern', year: '2020', tournament: 'champions' },
      { id: 'bay_29_20', number: 29, name: 'Kingsley Coman', positions: ['LW', 'RW'], primaryPos: 'LW', rating: 88, nation: 'Francia', nationCode: 'FR', flag: '🇫🇷', club: 'Bayern', year: '2020', tournament: 'champions' },
      { id: 'bay_27_20', number: 27, name: 'David Alaba', positions: ['CB', 'LB'], primaryPos: 'CB', rating: 90, nation: 'Austria', nationCode: 'AT', flag: '🇦🇹', club: 'Bayern', year: '2020', tournament: 'champions' },
      { id: 'bay_17_20', number: 17, name: 'Jérôme Boateng', positions: ['CB'], primaryPos: 'CB', rating: 87, nation: 'Alemania', nationCode: 'DE', flag: '🇩🇪', club: 'Bayern', year: '2020', tournament: 'champions' },
      { id: 'bay_18_20', number: 18, name: 'Leon Goretzka', positions: ['CM', 'DM'], primaryPos: 'CM', rating: 89, nation: 'Alemania', nationCode: 'DE', flag: '🇩🇪', club: 'Bayern', year: '2020', tournament: 'champions' },
    ]
  },
  {
    id: 'mci_2023', name: 'Manchester City', shortCode: 'MCI', type: 'champions', year: '2023', tag: 'Champions 2023', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', country: 'England',
    players: [
      { id: 'mci_17_23', number: 17, name: 'Kevin De Bruyne', positions: ['AM', 'CM'], primaryPos: 'AM', rating: 97, bonus: 1, nation: 'Bélgica', nationCode: 'BE', flag: '🇧🇪', club: 'Man City', year: '2023', tournament: 'champions' },
      { id: 'mci_9_23', number: 9, name: 'Erling Haaland', positions: ['ST'], primaryPos: 'ST', rating: 96, nation: 'Noruega', nationCode: 'NO', flag: '🇳🇴', club: 'Man City', year: '2023', tournament: 'champions' },
      { id: 'mci_16_23', number: 16, name: 'Rodri Hernández', positions: ['DM'], primaryPos: 'DM', rating: 95, nation: 'España', nationCode: 'ES', flag: '🇪🇸', club: 'Man City', year: '2023', tournament: 'champions' },
      { id: 'mci_8_23', number: 8, name: 'Ilkay Gündogan', positions: ['CM', 'AM'], primaryPos: 'CM', rating: 91, nation: 'Alemania', nationCode: 'DE', flag: '🇩🇪', club: 'Man City', year: '2023', tournament: 'champions' },
      { id: 'mci_10_23', number: 10, name: 'Jack Grealish', positions: ['LW', 'AM'], primaryPos: 'LW', rating: 88, nation: 'Inglaterra', nationCode: 'ENG', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', club: 'Man City', year: '2023', tournament: 'champions' },
      { id: 'mci_20_23', number: 20, name: 'Bernardo Silva', positions: ['RW', 'CM'], primaryPos: 'RW', rating: 92, nation: 'Portugal', nationCode: 'PT', flag: '🇵🇹', club: 'Man City', year: '2023', tournament: 'champions' },
      { id: 'mci_3_23', number: 3, name: 'Rúben Dias', positions: ['CB'], primaryPos: 'CB', rating: 92, nation: 'Portugal', nationCode: 'PT', flag: '🇵🇹', club: 'Man City', year: '2023', tournament: 'champions' },
      { id: 'mci_25_23', number: 25, name: 'Manuel Akanji', positions: ['CB', 'LB'], primaryPos: 'CB', rating: 87, nation: 'Suiza', nationCode: 'CH', flag: '🇨🇭', club: 'Man City', year: '2023', tournament: 'champions' },
      { id: 'mci_5_23', number: 5, name: 'John Stones', positions: ['CB', 'DM'], primaryPos: 'CB', rating: 90, nation: 'Inglaterra', nationCode: 'ENG', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', club: 'Man City', year: '2023', tournament: 'champions' },
      { id: 'mci_2_23', number: 2, name: 'Kyle Walker', positions: ['RB', 'CB'], primaryPos: 'RB', rating: 89, nation: 'Inglaterra', nationCode: 'ENG', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', club: 'Man City', year: '2023', tournament: 'champions' },
      { id: 'mci_31_23', number: 31, name: 'Ederson Moraes', positions: ['GK'], primaryPos: 'GK', rating: 90, nation: 'Brasil', nationCode: 'BR', flag: '🇧🇷', club: 'Man City', year: '2023', tournament: 'champions' },
    ]
  },
  {
    id: 'liv_2005', name: 'Liverpool FC', shortCode: 'LIV', type: 'champions', year: '2005', tag: 'Champions 2005', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', country: 'England',
    players: [
      { id: 'liv_8_05', number: 8, name: 'Steven Gerrard', positions: ['CM', 'AM'], primaryPos: 'CM', rating: 96, bonus: 1, nation: 'Inglaterra', nationCode: 'ENG', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', club: 'Liverpool', year: '2005', tournament: 'champions' },
      { id: 'liv_14_05', number: 14, name: 'Xabi Alonso', positions: ['CM', 'DM'], primaryPos: 'CM', rating: 91, nation: 'España', nationCode: 'ES', flag: '🇪🇸', club: 'Liverpool', year: '2005', tournament: 'champions' },
      { id: 'liv_10_05', number: 10, name: 'Luis García', positions: ['RW', 'AM'], primaryPos: 'RW', rating: 87, nation: 'España', nationCode: 'ES', flag: '🇪🇸', club: 'Liverpool', year: '2005', tournament: 'champions' },
      { id: 'liv_23_05', number: 23, name: 'Jamie Carragher', positions: ['CB'], primaryPos: 'CB', rating: 88, nation: 'Inglaterra', nationCode: 'ENG', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', club: 'Liverpool', year: '2005', tournament: 'champions' },
      { id: 'liv_1_05', number: 1, name: 'Jerzy Dudek', positions: ['GK'], primaryPos: 'GK', rating: 86, nation: 'Polonia', nationCode: 'PL', flag: '🇵🇱', club: 'Liverpool', year: '2005', tournament: 'champions' },
      { id: 'liv_5_05', number: 5, name: 'Milan Baroš', positions: ['ST'], primaryPos: 'ST', rating: 85, nation: 'República Checa', nationCode: 'CZ', flag: '🇨🇿', club: 'Liverpool', year: '2005', tournament: 'champions' },
      { id: 'liv_6_05', number: 6, name: 'John Arne Riise', positions: ['LB', 'LW'], primaryPos: 'LB', rating: 86, nation: 'Noruega', nationCode: 'NO', flag: '🇳🇴', club: 'Liverpool', year: '2005', tournament: 'champions' },
      { id: 'liv_3_05', number: 3, name: 'Steve Finnan', positions: ['RB'], primaryPos: 'RB', rating: 83, nation: 'Irlanda', nationCode: 'IE', flag: '🇮🇪', club: 'Liverpool', year: '2005', tournament: 'champions' },
      { id: 'liv_4_05', number: 4, name: 'Sami Hyypiä', positions: ['CB'], primaryPos: 'CB', rating: 88, nation: 'Finlandia', nationCode: 'FI', flag: '🇫🇮', club: 'Liverpool', year: '2005', tournament: 'champions' },
      { id: 'liv_16_05', number: 16, name: 'Dietmar Hamann', positions: ['DM'], primaryPos: 'DM', rating: 85, nation: 'Alemania', nationCode: 'DE', flag: '🇩🇪', club: 'Liverpool', year: '2005', tournament: 'champions' },
      { id: 'liv_7_05', number: 7, name: 'Harry Kewell', positions: ['LW', 'AM'], primaryPos: 'LW', rating: 84, nation: 'Australia', nationCode: 'AU', flag: '🇦🇺', club: 'Liverpool', year: '2005', tournament: 'champions' },
    ]
  },
  {
    id: 'mil_2007', name: 'AC Milan', shortCode: 'MIL', type: 'champions', year: '2007', tag: 'Champions 2007', flag: '🇮🇹', country: 'Italy',
    players: [
      { id: 'mil_22_07', number: 22, name: 'Kaká', positions: ['AM', 'ST'], primaryPos: 'AM', rating: 97, bonus: 1, nation: 'Brasil', nationCode: 'BR', flag: '🇧🇷', club: 'AC Milan', year: '2007', tournament: 'champions' },
      { id: 'mil_21_07', number: 21, name: 'Andrea Pirlo', positions: ['CM', 'DM'], primaryPos: 'CM', rating: 95, nation: 'Italia', nationCode: 'IT', flag: '🇮🇹', club: 'AC Milan', year: '2007', tournament: 'champions' },
      { id: 'mil_8_07', number: 8, name: 'Gennaro Gattuso', positions: ['DM'], primaryPos: 'DM', rating: 90, nation: 'Italia', nationCode: 'IT', flag: '🇮🇹', club: 'AC Milan', year: '2007', tournament: 'champions' },
      { id: 'mil_10_07', number: 10, name: 'Clarence Seedorf', positions: ['CM', 'AM'], primaryPos: 'CM', rating: 92, nation: 'Países Bajos', nationCode: 'NL', flag: '🇳🇱', club: 'AC Milan', year: '2007', tournament: 'champions' },
      { id: 'mil_3_07', number: 3, name: 'Paolo Maldini', positions: ['CB', 'LB'], primaryPos: 'CB', rating: 95, nation: 'Italia', nationCode: 'IT', flag: '🇮🇹', club: 'AC Milan', year: '2007', tournament: 'champions' },
      { id: 'mil_13_07', number: 13, name: 'Alessandro Nesta', positions: ['CB'], primaryPos: 'CB', rating: 94, nation: 'Italia', nationCode: 'IT', flag: '🇮🇹', club: 'AC Milan', year: '2007', tournament: 'champions' },
      { id: 'mil_9_07', number: 9, name: 'Filippo Inzaghi', positions: ['ST'], primaryPos: 'ST', rating: 89, nation: 'Italia', nationCode: 'IT', flag: '🇮🇹', club: 'AC Milan', year: '2007', tournament: 'champions' },
      { id: 'mil_44_07', number: 44, name: 'Massimo Oddo', positions: ['RB'], primaryPos: 'RB', rating: 84, nation: 'Italia', nationCode: 'IT', flag: '🇮🇹', club: 'AC Milan', year: '2007', tournament: 'champions' },
      { id: 'mil_18_07', number: 18, name: 'Marek Jankulovski', positions: ['LB'], primaryPos: 'LB', rating: 83, nation: 'República Checa', nationCode: 'CZ', flag: '🇨🇿', club: 'AC Milan', year: '2007', tournament: 'champions' },
      { id: 'mil_1_07', number: 1, name: 'Dida', positions: ['GK'], primaryPos: 'GK', rating: 88, nation: 'Brasil', nationCode: 'BR', flag: '🇧🇷', club: 'AC Milan', year: '2007', tournament: 'champions' },
      { id: 'mil_23_07', number: 23, name: 'Massimo Ambrosini', positions: ['DM', 'CM'], primaryPos: 'DM', rating: 85, nation: 'Italia', nationCode: 'IT', flag: '🇮🇹', club: 'AC Milan', year: '2007', tournament: 'champions' },
    ]
  },

  // --- NUEVOS CLUBES Y SELECCIONES (Villarreal, Celta, Deportivo, Málaga, Lugo, Lille, Brighton, Crystal Palace, Togo, Haiti, Qatar, Honduras, Bolivia) ---
  {
    id: 'vcf_2006', name: 'Villarreal CF', shortCode: 'VCF', type: 'champions', year: '2006', tag: 'Champions 2006', flag: '🇪🇸', country: 'Spain', tier: 'silver',
    players: [
      { id: 'vcf_8_06', number: 8, name: 'Juan Román Riquelme', positions: ['AM', 'CM'], primaryPos: 'AM', rating: 89, bonus: 1, nation: 'Argentina', nationCode: 'AR', flag: '🇦🇷', club: 'Villarreal', year: '2006', tournament: 'champions' },
      { id: 'vcf_5_06', number: 5, name: 'Diego Forlán', positions: ['ST'], primaryPos: 'ST', rating: 88, nation: 'Uruguay', nationCode: 'UY', flag: '🇺🇾', club: 'Villarreal', year: '2006', tournament: 'champions' },
      { id: 'vcf_19_06', number: 19, name: 'Marcos Senna', positions: ['DM', 'CM'], primaryPos: 'DM', rating: 86, nation: 'España', nationCode: 'ES', flag: '🇪🇸', club: 'Villarreal', year: '2006', tournament: 'champions' },
      { id: 'vcf_3_06', number: 3, name: 'Rodolfo Arruabarrena', positions: ['LB'], primaryPos: 'LB', rating: 82, nation: 'Argentina', nationCode: 'AR', flag: '🇦🇷', club: 'Villarreal', year: '2006', tournament: 'champions' },
      { id: 'vcf_1_06', number: 1, name: 'Sebastián Viera', positions: ['GK'], primaryPos: 'GK', rating: 84, nation: 'Uruguay', nationCode: 'UY', flag: '🇺🇾', club: 'Villarreal', year: '2006', tournament: 'champions' },
      { id: 'vcf_2_06', number: 2, name: 'Gonzalo Rodríguez', positions: ['CB'], primaryPos: 'CB', rating: 84, nation: 'Argentina', nationCode: 'AR', flag: '🇦🇷', club: 'Villarreal', year: '2006', tournament: 'champions' },
      { id: 'vcf_6_06', number: 6, name: 'Josico', positions: ['DM'], primaryPos: 'DM', rating: 80, nation: 'España', nationCode: 'ES', flag: '🇪🇸', club: 'Villarreal', year: '2006', tournament: 'champions' },
      { id: 'vcf_17_06', number: 17, name: 'Javi Venta', positions: ['RB'], primaryPos: 'RB', rating: 80, nation: 'España', nationCode: 'ES', flag: '🇪🇸', club: 'Villarreal', year: '2006', tournament: 'champions' },
      { id: 'vcf_12_06', number: 12, name: 'Juan Pablo Sorín', positions: ['LB', 'LW'], primaryPos: 'LB', rating: 85, nation: 'Argentina', nationCode: 'AR', flag: '🇦🇷', club: 'Villarreal', year: '2006', tournament: 'champions' },
      { id: 'vcf_9_06', number: 9, name: 'Guillermo Franco', positions: ['ST'], primaryPos: 'ST', rating: 81, nation: 'México', nationCode: 'MX', flag: '🇲🇽', club: 'Villarreal', year: '2006', tournament: 'champions' },
      { id: 'vcf_23_06', number: 23, name: 'José Mari', positions: ['RW', 'ST'], primaryPos: 'RW', rating: 81, nation: 'España', nationCode: 'ES', flag: '🇪🇸', club: 'Villarreal', year: '2006', tournament: 'champions' },
    ]
  },
  {
    id: 'cel_2001', name: 'Celta de Vigo', shortCode: 'CEL', type: 'champions', year: '2001', tag: 'La Liga 2001', flag: '🇪🇸', country: 'Spain', tier: 'silver',
    players: [
      { id: 'cel_10_01', number: 10, name: 'Alexander Mostovoi', positions: ['AM', 'CM'], primaryPos: 'AM', rating: 88, bonus: 1, nation: 'Rusia', nationCode: 'RU', flag: '🇷🇺', club: 'Celta', year: '2001', tournament: 'champions' },
      { id: 'cel_8_01', number: 8, name: 'Valery Karpin', positions: ['RW', 'AM'], primaryPos: 'RW', rating: 86, nation: 'Rusia', nationCode: 'RU', flag: '🇷🇺', club: 'Celta', year: '2001', tournament: 'champions' },
      { id: 'cel_11_01', number: 11, name: 'Gustavo López', positions: ['LW'], primaryPos: 'LW', rating: 84, nation: 'Argentina', nationCode: 'AR', flag: '🇦🇷', club: 'Celta', year: '2001', tournament: 'champions' },
      { id: 'cel_9_01', number: 9, name: 'Catanha', positions: ['ST'], primaryPos: 'ST', rating: 83, nation: 'España', nationCode: 'ES', flag: '🇪🇸', club: 'Celta', year: '2001', tournament: 'champions' },
      { id: 'cel_5_01', number: 5, name: 'Everton Giovanella', positions: ['DM'], primaryPos: 'DM', rating: 81, nation: 'Brasil', nationCode: 'BR', flag: '🇧🇷', club: 'Celta', year: '2001', tournament: 'champions' },
      { id: 'cel_4_01', number: 4, name: 'Fernando Cáceres', positions: ['CB'], primaryPos: 'CB', rating: 83, nation: 'Argentina', nationCode: 'AR', flag: '🇦🇷', club: 'Celta', year: '2001', tournament: 'champions' },
      { id: 'cel_2_01', number: 2, name: 'Míchel Salgado', positions: ['RB'], primaryPos: 'RB', rating: 82, nation: 'España', nationCode: 'ES', flag: '🇪🇸', club: 'Celta', year: '2001', tournament: 'champions' },
      { id: 'cel_3_01', number: 3, name: 'Juanfran García', positions: ['LB'], primaryPos: 'LB', rating: 82, nation: 'España', nationCode: 'ES', flag: '🇪🇸', club: 'Celta', year: '2001', tournament: 'champions' },
      { id: 'cel_1_01', number: 1, name: 'Pablo Cavallero', positions: ['GK'], primaryPos: 'GK', rating: 82, nation: 'Argentina', nationCode: 'AR', flag: '🇦🇷', club: 'Celta', year: '2001', tournament: 'champions' },
      { id: 'cel_22_01', number: 22, name: 'Edu', positions: ['ST', 'AM'], primaryPos: 'ST', rating: 82, nation: 'Brasil', nationCode: 'BR', flag: '🇧🇷', club: 'Celta', year: '2001', tournament: 'champions' },
      { id: 'cel_14_01', number: 14, name: 'Yago Alonso', positions: ['CB'], primaryPos: 'CB', rating: 80, nation: 'España', nationCode: 'ES', flag: '🇪🇸', club: 'Celta', year: '2001', tournament: 'champions' },
    ]
  },
  {
    id: 'dep_2000', name: 'Deportivo La Coruña', shortCode: 'DEP', type: 'champions', year: '2000', tag: 'Super Depor', flag: '🇪🇸', country: 'Spain', tier: 'silver',
    players: [
      { id: 'dep_21_00', number: 21, name: 'Juan Carlos Valerón', positions: ['AM', 'CM'], primaryPos: 'AM', rating: 89, bonus: 1, nation: 'España', nationCode: 'ES', flag: '🇪🇸', club: 'Deportivo', year: '2000', tournament: 'champions' },
      { id: 'dep_9_00', number: 9, name: 'Roy Makaay', positions: ['ST'], primaryPos: 'ST', rating: 88, nation: 'Países Bajos', nationCode: 'NL', flag: '🇳🇱', club: 'Deportivo', year: '2000', tournament: 'champions' },
      { id: 'dep_10_00', number: 10, name: 'Fran González', positions: ['LW'], primaryPos: 'LW', rating: 85, nation: 'España', nationCode: 'ES', flag: '🇪🇸', club: 'Deportivo', year: '2000', tournament: 'champions' },
      { id: 'dep_8_00', number: 8, name: 'Djalminha', positions: ['AM', 'ST'], primaryPos: 'AM', rating: 88, nation: 'Brasil', nationCode: 'BR', flag: '🇧🇷', club: 'Deportivo', year: '2000', tournament: 'champions' },
      { id: 'dep_6_00', number: 6, name: 'Mauro Silva', positions: ['DM'], primaryPos: 'DM', rating: 88, nation: 'Brasil', nationCode: 'BR', flag: '🇧🇷', club: 'Deportivo', year: '2000', tournament: 'champions' },
      { id: 'dep_4_00', number: 4, name: 'Noureddine Naybet', positions: ['CB'], primaryPos: 'CB', rating: 86, nation: 'Marruecos', nationCode: 'MA', flag: '🇲🇦', club: 'Deportivo', year: '2000', tournament: 'champions' },
      { id: 'dep_2_00', number: 2, name: 'Manuel Pablo', positions: ['RB'], primaryPos: 'RB', rating: 84, nation: 'España', nationCode: 'ES', flag: '🇪🇸', club: 'Deportivo', year: '2000', tournament: 'champions' },
      { id: 'dep_3_00', number: 3, name: 'Enrique Romero', positions: ['LB'], primaryPos: 'LB', rating: 82, nation: 'España', nationCode: 'ES', flag: '🇪🇸', club: 'Deportivo', year: '2000', tournament: 'champions' },
      { id: 'dep_1_00', number: 1, name: 'José Francisco Molina', positions: ['GK'], primaryPos: 'GK', rating: 86, nation: 'España', nationCode: 'ES', flag: '🇪🇸', club: 'Deportivo', year: '2000', tournament: 'champions' },
      { id: 'dep_11_00', number: 11, name: 'Diego Tristán', positions: ['ST'], primaryPos: 'ST', rating: 88, nation: 'España', nationCode: 'ES', flag: '🇪🇸', club: 'Deportivo', year: '2000', tournament: 'champions' },
      { id: 'dep_12_00', number: 12, name: 'Donato Gama', positions: ['CB', 'DM'], primaryPos: 'CB', rating: 85, nation: 'España', nationCode: 'ES', flag: '🇪🇸', club: 'Deportivo', year: '2000', tournament: 'champions' },
    ]
  },
  {
    id: 'mal_2013', name: 'Málaga CF', shortCode: 'MAL', type: 'champions', year: '2013', tag: 'Champions 2013', flag: '🇪🇸', country: 'Spain', tier: 'silver',
    players: [
      { id: 'mal_22_13', number: 22, name: 'Isco Alarcón', positions: ['AM', 'LW'], primaryPos: 'AM', rating: 88, bonus: 1, nation: 'España', nationCode: 'ES', flag: '🇪🇸', club: 'Málaga', year: '2013', tournament: 'champions' },
      { id: 'mal_7_13', number: 7, name: 'Joaquín Sánchez', positions: ['RW'], primaryPos: 'RW', rating: 85, nation: 'España', nationCode: 'ES', flag: '🇪🇸', club: 'Málaga', year: '2013', tournament: 'champions' },
      { id: 'mal_24_13', number: 24, name: 'Roque Santa Cruz', positions: ['ST'], primaryPos: 'ST', rating: 82, nation: 'Paraguay', nationCode: 'PY', flag: '🇵🇾', club: 'Málaga', year: '2013', tournament: 'champions' },
      { id: 'mal_8_13', number: 8, name: 'Jérémy Toulalan', positions: ['DM', 'CM'], primaryPos: 'DM', rating: 84, nation: 'Francia', nationCode: 'FR', flag: '🇫🇷', club: 'Málaga', year: '2013', tournament: 'champions' },
      { id: 'mal_6_13', number: 6, name: 'Ignacio Camacho', positions: ['DM', 'CM'], primaryPos: 'DM', rating: 82, nation: 'España', nationCode: 'ES', flag: '🇪🇸', club: 'Málaga', year: '2013', tournament: 'champions' },
      { id: 'mal_5_13', number: 5, name: 'Martin Demichelis', positions: ['CB'], primaryPos: 'CB', rating: 84, nation: 'Argentina', nationCode: 'AR', flag: '🇦🇷', club: 'Málaga', year: '2013', tournament: 'champions' },
      { id: 'mal_3_13', number: 3, name: 'Weligton', positions: ['CB'], primaryPos: 'CB', rating: 82, nation: 'Brasil', nationCode: 'BR', flag: '🇧🇷', club: 'Málaga', year: '2013', tournament: 'champions' },
      { id: 'mal_2_13', number: 2, name: 'Jesús Gámez', positions: ['RB'], primaryPos: 'RB', rating: 81, nation: 'España', nationCode: 'ES', flag: '🇪🇸', club: 'Málaga', year: '2013', tournament: 'champions' },
      { id: 'mal_18_13', number: 18, name: 'Nacho Monreal', positions: ['LB'], primaryPos: 'LB', rating: 83, nation: 'España', nationCode: 'ES', flag: '🇪🇸', club: 'Málaga', year: '2013', tournament: 'champions' },
      { id: 'mal_13_13', number: 13, name: 'Willy Caballero', positions: ['GK'], primaryPos: 'GK', rating: 86, nation: 'Argentina', nationCode: 'AR', flag: '🇦🇷', club: 'Málaga', year: '2013', tournament: 'champions' },
      { id: 'mal_11_13', number: 11, name: 'Javier Saviola', positions: ['ST', 'AM'], primaryPos: 'ST', rating: 83, nation: 'Argentina', nationCode: 'AR', flag: '🇦🇷', club: 'Málaga', year: '2013', tournament: 'champions' },
    ]
  },
  {
    id: 'lug_2015', name: 'CD Lugo', shortCode: 'LUG', type: 'champions', year: '2015', tag: 'Segunda 2015', flag: '🇪🇸', country: 'Spain', tier: 'bronze',
    players: [
      { id: 'lug_10_15', number: 10, name: 'Iriome González', positions: ['RW'], primaryPos: 'RW', rating: 75, bonus: 1, nation: 'España', nationCode: 'ES', flag: '🇪🇸', club: 'CD Lugo', year: '2015', tournament: 'champions' },
      { id: 'lug_8_15', number: 8, name: 'Fernando Seoane', positions: ['DM', 'CM'], primaryPos: 'DM', rating: 76, nation: 'España', nationCode: 'ES', flag: '🇪🇸', club: 'CD Lugo', year: '2015', tournament: 'champions' },
      { id: 'lug_5_15', number: 5, name: 'Carlos Pita', positions: ['CM'], primaryPos: 'CM', rating: 76, nation: 'España', nationCode: 'ES', flag: '🇪🇸', club: 'CD Lugo', year: '2015', tournament: 'champions' },
      { id: 'lug_9_15', number: 9, name: 'Pablo Caballero', positions: ['ST'], primaryPos: 'ST', rating: 75, nation: 'Argentina', nationCode: 'AR', flag: '🇦🇷', club: 'CD Lugo', year: '2015', tournament: 'champions' },
      { id: 'lug_7_15', number: 7, name: 'David Ferreiro', positions: ['LW'], primaryPos: 'LW', rating: 75, nation: 'España', nationCode: 'ES', flag: '🇪🇸', club: 'CD Lugo', year: '2015', tournament: 'champions' },
      { id: 'lug_14_15', number: 14, name: 'Víctor Díaz', positions: ['RB', 'CB'], primaryPos: 'RB', rating: 74, nation: 'España', nationCode: 'ES', flag: '🇪🇸', club: 'CD Lugo', year: '2015', tournament: 'champions' },
      { id: 'lug_3_15', number: 3, name: 'Manu Rodríguez', positions: ['LB'], primaryPos: 'LB', rating: 74, nation: 'España', nationCode: 'ES', flag: '🇪🇸', club: 'CD Lugo', year: '2015', tournament: 'champions' },
      { id: 'lug_4_15', number: 4, name: 'Israel Puerto', positions: ['CB'], primaryPos: 'CB', rating: 73, nation: 'España', nationCode: 'ES', flag: '🇪🇸', club: 'CD Lugo', year: '2015', tournament: 'champions' },
      { id: 'lug_22_15', number: 22, name: 'Lolo Pavón', positions: ['CB'], primaryPos: 'CB', rating: 73, nation: 'España', nationCode: 'ES', flag: '🇪🇸', club: 'CD Lugo', year: '2015', tournament: 'champions' },
      { id: 'lug_1_15', number: 1, name: 'José Juan', positions: ['GK'], primaryPos: 'GK', rating: 75, nation: 'España', nationCode: 'ES', flag: '🇪🇸', club: 'CD Lugo', year: '2015', tournament: 'champions' },
      { id: 'lug_18_15', number: 18, name: 'Iago Díaz', positions: ['AM', 'RW'], primaryPos: 'AM', rating: 74, nation: 'España', nationCode: 'ES', flag: '🇪🇸', club: 'CD Lugo', year: '2015', tournament: 'champions' },
    ]
  },
  {
    id: 'lil_2011', name: 'Lille OSC', shortCode: 'LIL', type: 'champions', year: '2011', tag: 'Ligue 1 2011', flag: '🇫🇷', country: 'France', tier: 'silver',
    players: [
      { id: 'lil_26_11', number: 26, name: 'Eden Hazard', positions: ['LW', 'AM'], primaryPos: 'LW', rating: 90, bonus: 1, nation: 'Bélgica', nationCode: 'BE', flag: '🇧🇪', club: 'Lille', year: '2011', tournament: 'champions' },
      { id: 'lil_27_11', number: 27, name: 'Gervinho', positions: ['RW', 'ST'], primaryPos: 'RW', rating: 85, nation: 'Costa de Marfil', nationCode: 'CI', flag: '🇨🇮', club: 'Lille', year: '2011', tournament: 'champions' },
      { id: 'lil_8_11', number: 8, name: 'Moussa Sow', positions: ['ST'], primaryPos: 'ST', rating: 84, nation: 'Senegal', nationCode: 'SN', flag: '🇸🇳', club: 'Lille', year: '2011', tournament: 'champions' },
      { id: 'lil_4_11', number: 4, name: 'Yohan Cabaye', positions: ['CM', 'DM'], primaryPos: 'CM', rating: 85, nation: 'Francia', nationCode: 'FR', flag: '🇫🇷', club: 'Lille', year: '2011', tournament: 'champions' },
      { id: 'lil_24_11', number: 24, name: 'Rio Mavuba', positions: ['DM'], primaryPos: 'DM', rating: 84, nation: 'Francia', nationCode: 'FR', flag: '🇫🇷', club: 'Lille', year: '2011', tournament: 'champions' },
      { id: 'lil_2_11', number: 2, name: 'Mathieu Debuchy', positions: ['RB'], primaryPos: 'RB', rating: 84, nation: 'Francia', nationCode: 'FR', flag: '🇫🇷', club: 'Lille', year: '2011', tournament: 'champions' },
      { id: 'lil_23_11', number: 23, name: 'Adil Rami', positions: ['CB'], primaryPos: 'CB', rating: 84, nation: 'Francia', nationCode: 'FR', flag: '🇫🇷', club: 'Lille', year: '2011', tournament: 'champions' },
      { id: 'lil_22_11', number: 22, name: 'Aurelien Chedjou', positions: ['CB'], primaryPos: 'CB', rating: 83, nation: 'Camerún', nationCode: 'CM', flag: '🇨🇲', club: 'Lille', year: '2011', tournament: 'champions' },
      { id: 'lil_18_11', number: 18, name: 'Franck Béria', positions: ['LB'], primaryPos: 'LB', rating: 81, nation: 'Francia', nationCode: 'FR', flag: '🇫🇷', club: 'Lille', year: '2011', tournament: 'champions' },
      { id: 'lil_1_11', number: 1, name: 'Mickaël Landreau', positions: ['GK'], primaryPos: 'GK', rating: 84, nation: 'Francia', nationCode: 'FR', flag: '🇫🇷', club: 'Lille', year: '2011', tournament: 'champions' },
      { id: 'lil_7_11', number: 7, name: 'Florent Balmont', positions: ['CM'], primaryPos: 'CM', rating: 81, nation: 'Francia', nationCode: 'FR', flag: '🇫🇷', club: 'Lille', year: '2011', tournament: 'champions' },
    ]
  },
  {
    id: 'bri_2023', name: 'Brighton & Hove Albion', shortCode: 'BRI', type: 'champions', year: '2023', tag: 'Premier 2023', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', country: 'England', tier: 'silver',
    players: [
      { id: 'bri_10_23', number: 10, name: 'Alexis Mac Allister', positions: ['CM', 'AM'], primaryPos: 'CM', rating: 86, bonus: 1, nation: 'Argentina', nationCode: 'AR', flag: '🇦🇷', club: 'Brighton', year: '2023', tournament: 'champions' },
      { id: 'bri_25_23', number: 25, name: 'Moisés Caicedo', positions: ['DM', 'CM'], primaryPos: 'DM', rating: 86, nation: 'Ecuador', nationCode: 'EC', flag: '🇪🇨', club: 'Brighton', year: '2023', tournament: 'champions' },
      { id: 'bri_22_23', number: 22, name: 'Kaoru Mitoma', positions: ['LW'], primaryPos: 'LW', rating: 85, nation: 'Japón', nationCode: 'JP', flag: '🇯🇵', club: 'Brighton', year: '2023', tournament: 'champions' },
      { id: 'bri_13_23', number: 13, name: 'Pascal Groß', positions: ['CM', 'RB'], primaryPos: 'CM', rating: 83, nation: 'Alemania', nationCode: 'DE', flag: '🇩🇪', club: 'Brighton', year: '2023', tournament: 'champions' },
      { id: 'bri_28_23', number: 28, name: 'Evan Ferguson', positions: ['ST'], primaryPos: 'ST', rating: 82, nation: 'Irlanda', nationCode: 'IE', flag: '🇮🇪', club: 'Brighton', year: '2023', tournament: 'champions' },
      { id: 'bri_5_23', number: 5, name: 'Lewis Dunk', positions: ['CB'], primaryPos: 'CB', rating: 84, nation: 'Inglaterra', nationCode: 'ENG', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', club: 'Brighton', year: '2023', tournament: 'champions' },
      { id: 'bri_30_23', number: 30, name: 'Pervis Estupiñán', positions: ['LB'], primaryPos: 'LB', rating: 83, nation: 'Ecuador', nationCode: 'EC', flag: '🇪🇨', club: 'Brighton', year: '2023', tournament: 'champions' },
      { id: 'bri_34_23', number: 34, name: 'Joel Veltman', positions: ['RB', 'CB'], primaryPos: 'RB', rating: 81, nation: 'Países Bajos', nationCode: 'NL', flag: '🇳🇱', club: 'Brighton', year: '2023', tournament: 'champions' },
      { id: 'bri_4_23', number: 4, name: 'Adam Webster', positions: ['CB'], primaryPos: 'CB', rating: 80, nation: 'Inglaterra', nationCode: 'ENG', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', club: 'Brighton', year: '2023', tournament: 'champions' },
      { id: 'bri_23_23', number: 23, name: 'Jason Steele', positions: ['GK'], primaryPos: 'GK', rating: 81, nation: 'Inglaterra', nationCode: 'ENG', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', club: 'Brighton', year: '2023', tournament: 'champions' },
      { id: 'bri_7_23', number: 7, name: 'Solly March', positions: ['RW'], primaryPos: 'RW', rating: 82, nation: 'Inglaterra', nationCode: 'ENG', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', club: 'Brighton', year: '2023', tournament: 'champions' },
    ]
  },
  {
    id: 'cry_2022', name: 'Crystal Palace', shortCode: 'CRY', type: 'champions', year: '2022', tag: 'Premier 2022', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', country: 'England', tier: 'silver',
    players: [
      { id: 'cry_11_22', number: 11, name: 'Wilfried Zaha', positions: ['LW', 'ST'], primaryPos: 'LW', rating: 86, bonus: 1, nation: 'Costa de Marfil', nationCode: 'CI', flag: '🇨🇮', club: 'Crystal Palace', year: '2022', tournament: 'champions' },
      { id: 'cry_10_22', number: 10, name: 'Eberechi Eze', positions: ['AM', 'CM'], primaryPos: 'AM', rating: 84, nation: 'Inglaterra', nationCode: 'ENG', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', club: 'Crystal Palace', year: '2022', tournament: 'champions' },
      { id: 'cry_7_22', number: 7, name: 'Michael Olise', positions: ['RW', 'AM'], primaryPos: 'RW', rating: 84, nation: 'Francia', nationCode: 'FR', flag: '🇫🇷', club: 'Crystal Palace', year: '2022', tournament: 'champions' },
      { id: 'cry_6_22', number: 6, name: 'Marc Guéhi', positions: ['CB'], primaryPos: 'CB', rating: 83, nation: 'Inglaterra', nationCode: 'ENG', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', club: 'Crystal Palace', year: '2022', tournament: 'champions' },
      { id: 'cry_16_22', number: 16, name: 'Joachim Andersen', positions: ['CB'], primaryPos: 'CB', rating: 83, nation: 'Dinamarca', nationCode: 'DK', flag: '🇩🇰', club: 'Crystal Palace', year: '2022', tournament: 'champions' },
      { id: 'cry_28_22', number: 28, name: 'Cheick Doucouré', positions: ['DM', 'CM'], primaryPos: 'DM', rating: 82, nation: 'Mali', nationCode: 'ML', flag: '🇲🇱', club: 'Crystal Palace', year: '2022', tournament: 'champions' },
      { id: 'cry_3_22', number: 3, name: 'Tyrick Mitchell', positions: ['LB'], primaryPos: 'LB', rating: 81, nation: 'Inglaterra', nationCode: 'ENG', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', club: 'Crystal Palace', year: '2022', tournament: 'champions' },
      { id: 'cry_2_22', number: 2, name: 'Joel Ward', positions: ['RB'], primaryPos: 'RB', rating: 79, nation: 'Inglaterra', nationCode: 'ENG', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', club: 'Crystal Palace', year: '2022', tournament: 'champions' },
      { id: 'cry_13_22', number: 13, name: 'Vicente Guaita', positions: ['GK'], primaryPos: 'GK', rating: 82, nation: 'España', nationCode: 'ES', flag: '🇪🇸', club: 'Crystal Palace', year: '2022', tournament: 'champions' },
      { id: 'cry_9_22', number: 9, name: 'Jordan Ayew', positions: ['RW', 'ST'], primaryPos: 'RW', rating: 80, nation: 'Ghana', nationCode: 'GH', flag: '🇬🇭', club: 'Crystal Palace', year: '2022', tournament: 'champions' },
      { id: 'cry_14_22', number: 14, name: 'Jean-Philippe Mateta', positions: ['ST'], primaryPos: 'ST', rating: 80, nation: 'Francia', nationCode: 'FR', flag: '🇫🇷', club: 'Crystal Palace', year: '2022', tournament: 'champions' },
    ]
  },
  {
    id: 'tog_2006', name: 'Togo', shortCode: 'TOG', type: 'worldcup', year: '2006', tag: 'Cup 2006', flag: '🇹🇬', country: 'Togo', tier: 'bronze',
    players: [
      { id: 'tog_4_06', number: 4, name: 'Emmanuel Adebayor', positions: ['ST'], primaryPos: 'ST', rating: 86, bonus: 1, nation: 'Togo', nationCode: 'TG', flag: '🇹🇬', club: 'Arsenal', year: '2006', tournament: 'worldcup' },
      { id: 'tog_10_06', number: 10, name: 'Cherif Coubadja', positions: ['AM', 'ST'], primaryPos: 'AM', rating: 76, nation: 'Togo', nationCode: 'TG', flag: '🇹🇬', club: 'Metz', year: '2006', tournament: 'worldcup' },
      { id: 'tog_3_06', number: 3, name: 'Jean-Paul Abalo', positions: ['CB'], primaryPos: 'CB', rating: 75, nation: 'Togo', nationCode: 'TG', flag: '🇹🇬', club: 'Amiens', year: '2006', tournament: 'worldcup' },
      { id: 'tog_5_06', number: 5, name: 'Massamasso Tchangai', positions: ['CB'], primaryPos: 'CB', rating: 75, nation: 'Togo', nationCode: 'TG', flag: '🇹🇬', club: 'Benevento', year: '2006', tournament: 'worldcup' },
      { id: 'tog_15_06', number: 15, name: 'Alaixys Romao', positions: ['DM', 'CM'], primaryPos: 'DM', rating: 77, nation: 'Togo', nationCode: 'TG', flag: '🇹🇬', club: 'Grenoble', year: '2006', tournament: 'worldcup' },
      { id: 'tog_16_06', number: 16, name: 'Kossi Agassa', positions: ['GK'], primaryPos: 'GK', rating: 76, nation: 'Togo', nationCode: 'TG', flag: '🇹🇬', club: 'Metz', year: '2006', tournament: 'worldcup' },
      { id: 'tog_2_06', number: 2, name: 'Daré Nibombé', positions: ['CB'], primaryPos: 'CB', rating: 74, nation: 'Togo', nationCode: 'TG', flag: '🇹🇬', club: 'Mons', year: '2006', tournament: 'worldcup' },
      { id: 'tog_18_06', number: 18, name: 'Junior Senaya', positions: ['ST', 'RW'], primaryPos: 'ST', rating: 74, nation: 'Togo', nationCode: 'TG', flag: '🇹🇬', club: 'Yverdon', year: '2006', tournament: 'worldcup' },
      { id: 'tog_21_06', number: 21, name: 'Franck Atsou', positions: ['LB'], primaryPos: 'LB', rating: 73, nation: 'Togo', nationCode: 'TG', flag: '🇹🇬', club: 'Al-Hilal', year: '2006', tournament: 'worldcup' },
      { id: 'tog_8_06', number: 8, name: 'Kuami Agboh', positions: ['CM'], primaryPos: 'CM', rating: 74, nation: 'Togo', nationCode: 'TG', flag: '🇹🇬', club: 'Beveren', year: '2006', tournament: 'worldcup' },
      { id: 'tog_11_06', number: 11, name: 'Thomas Dossevi', positions: ['LW', 'ST'], primaryPos: 'LW', rating: 75, nation: 'Togo', nationCode: 'TG', flag: '🇹🇬', club: 'Valenciennes', year: '2006', tournament: 'worldcup' },
    ]
  },
  {
    id: 'hai_1974', name: 'Haití', shortCode: 'HAI', type: 'worldcup', year: '1974', tag: 'Cup 1974', flag: '🇭🇹', country: 'Haiti', tier: 'bronze',
    players: [
      { id: 'hai_11_74', number: 11, name: 'Emmanuel Sanon', positions: ['ST', 'LW'], primaryPos: 'ST', rating: 80, bonus: 1, nation: 'Haití', nationCode: 'HT', flag: '🇭🇹', club: 'Don Bosco', year: '1974', tournament: 'worldcup' },
      { id: 'hai_8_74', number: 8, name: 'Philippe Vorbe', positions: ['CM', 'AM'], primaryPos: 'CM', rating: 75, nation: 'Haití', nationCode: 'HT', flag: '🇭🇹', club: 'Violette', year: '1974', tournament: 'worldcup' },
      { id: 'hai_1_74', number: 1, name: 'Henri Francillon', positions: ['GK'], primaryPos: 'GK', rating: 76, nation: 'Haití', nationCode: 'HT', flag: '🇭🇹', club: 'Victory SC', year: '1974', tournament: 'worldcup' },
      { id: 'hai_3_74', number: 3, name: 'Arsène Auguste', positions: ['CB'], primaryPos: 'CB', rating: 74, nation: 'Haití', nationCode: 'HT', flag: '🇭🇹', club: 'Racing Haïtien', year: '1974', tournament: 'worldcup' },
      { id: 'hai_5_74', number: 5, name: 'Wilner Nazaire', positions: ['CB'], primaryPos: 'CB', rating: 74, nation: 'Haití', nationCode: 'HT', flag: '🇭🇹', club: 'Valenciennes', year: '1974', tournament: 'worldcup' },
      { id: 'hai_7_74', number: 7, name: 'Jean-Claude Antoine', positions: ['RW'], primaryPos: 'RW', rating: 73, nation: 'Haití', nationCode: 'HT', flag: '🇭🇹', club: 'Racing Haïtien', year: '1974', tournament: 'worldcup' },
      { id: 'hai_13_74', number: 13, name: 'Serge Ducosté', positions: ['LB'], primaryPos: 'LB', rating: 73, nation: 'Haití', nationCode: 'HT', flag: '🇭🇹', club: 'Aigle Noir', year: '1974', tournament: 'worldcup' },
      { id: 'hai_14_74', number: 14, name: 'Wilner Bayonne', positions: ['RB'], primaryPos: 'RB', rating: 73, nation: 'Haití', nationCode: 'HT', flag: '🇭🇹', club: 'Violette', year: '1974', tournament: 'worldcup' },
      { id: 'hai_9_74', number: 9, name: 'Guy Saint-Vil', positions: ['ST'], primaryPos: 'ST', rating: 74, nation: 'Haití', nationCode: 'HT', flag: '🇭🇹', club: 'Racing Haïtien', year: '1974', tournament: 'worldcup' },
      { id: 'hai_10_74', number: 10, name: 'Claude Barthélemy', positions: ['AM'], primaryPos: 'AM', rating: 73, nation: 'Haití', nationCode: 'HT', flag: '🇭🇹', club: 'Racing Haïtien', year: '1974', tournament: 'worldcup' },
      { id: 'hai_12_74', number: 12, name: 'Ernst Jean-Baptiste', positions: ['DM'], primaryPos: 'DM', rating: 73, nation: 'Haití', nationCode: 'HT', flag: '🇭🇹', club: 'Violette', year: '1974', tournament: 'worldcup' },
    ]
  },
  {
    id: 'qat_2022', name: 'Qatar', shortCode: 'QAT', type: 'worldcup', year: '2022', tag: 'Cup 2022', flag: '🇶🇦', country: 'Qatar', tier: 'bronze',
    players: [
      { id: 'qat_11_22', number: 11, name: 'Akram Afif', positions: ['LW', 'AM'], primaryPos: 'LW', rating: 82, bonus: 1, nation: 'Qatar', nationCode: 'QA', flag: '🇶🇦', club: 'Al-Sadd', year: '2022', tournament: 'worldcup' },
      { id: 'qat_19_22', number: 19, name: 'Almoez Ali', positions: ['ST', 'RW'], primaryPos: 'ST', rating: 78, nation: 'Qatar', nationCode: 'QA', flag: '🇶🇦', club: 'Al-Duhail', year: '2022', tournament: 'worldcup' },
      { id: 'qat_10_22', number: 10, name: 'Hassan Al-Haydos', positions: ['AM', 'RW'], primaryPos: 'AM', rating: 78, nation: 'Qatar', nationCode: 'QA', flag: '🇶🇦', club: 'Al-Sadd', year: '2022', tournament: 'worldcup' },
      { id: 'qat_6_22', number: 6, name: 'Abdulaziz Hatem', positions: ['CM'], primaryPos: 'CM', rating: 75, nation: 'Qatar', nationCode: 'QA', flag: '🇶🇦', club: 'Al-Rayyan', year: '2022', tournament: 'worldcup' },
      { id: 'qat_12_22', number: 12, name: 'Karim Boudiaf', positions: ['DM', 'CM'], primaryPos: 'DM', rating: 76, nation: 'Qatar', nationCode: 'QA', flag: '🇶🇦', club: 'Al-Duhail', year: '2022', tournament: 'worldcup' },
      { id: 'qat_3_22', number: 3, name: 'Abdelkarim Hassan', positions: ['LB', 'CB'], primaryPos: 'LB', rating: 77, nation: 'Qatar', nationCode: 'QA', flag: '🇶🇦', club: 'Al-Sadd', year: '2022', tournament: 'worldcup' },
      { id: 'qat_2_22', number: 2, name: 'Pedro Miguel', positions: ['RB', 'CB'], primaryPos: 'RB', rating: 76, nation: 'Qatar', nationCode: 'QA', flag: '🇶🇦', club: 'Al-Sadd', year: '2022', tournament: 'worldcup' },
      { id: 'qat_16_22', number: 16, name: 'Boualem Khoukhi', positions: ['CB', 'DM'], primaryPos: 'CB', rating: 76, nation: 'Qatar', nationCode: 'QA', flag: '🇶🇦', club: 'Al-Sadd', year: '2022', tournament: 'worldcup' },
      { id: 'qat_15_22', number: 15, name: 'Bassam Al-Rawi', positions: ['CB'], primaryPos: 'CB', rating: 75, nation: 'Qatar', nationCode: 'QA', flag: '🇶🇦', club: 'Al-Duhail', year: '2022', tournament: 'worldcup' },
      { id: 'qat_22_22', number: 22, name: 'Meschal Barsham', positions: ['GK'], primaryPos: 'GK', rating: 76, nation: 'Qatar', nationCode: 'QA', flag: '🇶🇦', club: 'Al-Sadd', year: '2022', tournament: 'worldcup' },
      { id: 'qat_14_22', number: 14, name: 'Homam Ahmed', positions: ['LB'], primaryPos: 'LB', rating: 74, nation: 'Qatar', nationCode: 'QA', flag: '🇶🇦', club: 'Al-Gharafa', year: '2022', tournament: 'worldcup' },
    ]
  },
  {
    id: 'hon_2010', name: 'Honduras', shortCode: 'HON', type: 'worldcup', year: '2010', tag: 'Cup 2010', flag: '🇭🇳', country: 'Honduras', tier: 'bronze',
    players: [
      { id: 'hon_9_10', number: 9, name: 'David Suazo', positions: ['ST'], primaryPos: 'ST', rating: 83, bonus: 1, nation: 'Honduras', nationCode: 'HN', flag: '🇭🇳', club: 'Genoa', year: '2010', tournament: 'worldcup' },
      { id: 'hon_8_10', number: 8, name: 'Wilson Palacios', positions: ['CM', 'DM'], primaryPos: 'CM', rating: 82, nation: 'Honduras', nationCode: 'HN', flag: '🇭🇳', club: 'Tottenham', year: '2010', tournament: 'worldcup' },
      { id: 'hon_20_10', number: 20, name: 'Amado Guevara', positions: ['AM', 'CM'], primaryPos: 'AM', rating: 79, nation: 'Honduras', nationCode: 'HN', flag: '🇭🇳', club: 'Motagua', year: '2010', tournament: 'worldcup' },
      { id: 'hon_3_10', number: 3, name: 'Maynor Figueroa', positions: ['LB', 'CB'], primaryPos: 'LB', rating: 81, nation: 'Honduras', nationCode: 'HN', flag: '🇭🇳', club: 'Wigan', year: '2010', tournament: 'worldcup' },
      { id: 'hon_7_10', number: 7, name: 'Emilio Izaguirre', positions: ['LB'], primaryPos: 'LB', rating: 80, nation: 'Honduras', nationCode: 'HN', flag: '🇭🇳', club: 'Celtic', year: '2010', tournament: 'worldcup' },
      { id: 'hon_13_10', number: 13, name: 'Carlo Costly', positions: ['ST'], primaryPos: 'ST', rating: 78, nation: 'Honduras', nationCode: 'HN', flag: '🇭🇳', club: 'Vaslui', year: '2010', tournament: 'worldcup' },
      { id: 'hon_18_10', number: 18, name: 'Noel Valladares', positions: ['GK'], primaryPos: 'GK', rating: 79, nation: 'Honduras', nationCode: 'HN', flag: '🇭🇳', club: 'Olimpia', year: '2010', tournament: 'worldcup' },
      { id: 'hon_2_10', number: 2, name: 'Osman Chávez', positions: ['CB'], primaryPos: 'CB', rating: 76, nation: 'Honduras', nationCode: 'HN', flag: '🇭🇳', club: 'Platense', year: '2010', tournament: 'worldcup' },
      { id: 'hon_5_10', number: 5, name: 'Víctor Bernárdez', positions: ['CB'], primaryPos: 'CB', rating: 76, nation: 'Honduras', nationCode: 'HN', flag: '🇭🇳', club: 'Anderlecht', year: '2010', tournament: 'worldcup' },
      { id: 'hon_17_10', number: 17, name: 'Edgar Álvarez', positions: ['RW', 'RB'], primaryPos: 'RW', rating: 78, nation: 'Honduras', nationCode: 'HN', flag: '🇭🇳', club: 'Bari', year: '2010', tournament: 'worldcup' },
      { id: 'hon_10_10', number: 10, name: 'Julio César de León', positions: ['AM'], primaryPos: 'AM', rating: 77, nation: 'Honduras', nationCode: 'HN', flag: '🇭🇳', club: 'Torino', year: '2010', tournament: 'worldcup' },
    ]
  },
  {
    id: 'bol_1994', name: 'Bolivia', shortCode: 'BOL', type: 'worldcup', year: '1994', tag: 'Cup 1994', flag: '🇧🇴', country: 'Bolivia', tier: 'bronze',
    players: [
      { id: 'bol_10_94', number: 10, name: 'Marco Etcheverry', positions: ['AM', 'ST'], primaryPos: 'AM', rating: 84, bonus: 1, nation: 'Bolivia', nationCode: 'BO', flag: '🇧🇴', club: 'Colo-Colo', year: '1994', tournament: 'worldcup' },
      { id: 'bol_21_94', number: 21, name: 'Erwin Sánchez', positions: ['CM', 'AM'], primaryPos: 'CM', rating: 82, nation: 'Bolivia', nationCode: 'BO', flag: '🇧🇴', club: 'Boavista', year: '1994', tournament: 'worldcup' },
      { id: 'bol_18_94', number: 18, name: 'Luis Cristaldo', positions: ['LB', 'DM'], primaryPos: 'LB', rating: 78, nation: 'Bolivia', nationCode: 'BO', flag: '🇧🇴', club: 'Bolívar', year: '1994', tournament: 'worldcup' },
      { id: 'bol_16_94', number: 16, name: 'Julio César Baldivieso', positions: ['AM'], primaryPos: 'AM', rating: 80, nation: 'Bolivia', nationCode: 'BO', flag: '🇧🇴', club: 'Bolívar', year: '1994', tournament: 'worldcup' },
      { id: 'bol_1_94', number: 1, name: 'Carlos Trucco', positions: ['GK'], primaryPos: 'GK', rating: 80, nation: 'Bolivia', nationCode: 'BO', flag: '🇧🇴', club: 'Bolívar', year: '1994', tournament: 'worldcup' },
      { id: 'bol_3_94', number: 3, name: 'Marco Sandy', positions: ['CB'], primaryPos: 'CB', rating: 78, nation: 'Bolivia', nationCode: 'BO', flag: '🇧🇴', club: 'Bolívar', year: '1994', tournament: 'worldcup' },
      { id: 'bol_4_94', number: 4, name: 'Miguel Rimba', positions: ['CB'], primaryPos: 'CB', rating: 77, nation: 'Bolivia', nationCode: 'BO', flag: '🇧🇴', club: 'Bolívar', year: '1994', tournament: 'worldcup' },
      { id: 'bol_2_94', number: 2, name: 'Carlos Borja', positions: ['RB'], primaryPos: 'RB', rating: 77, nation: 'Bolivia', nationCode: 'BO', flag: '🇧🇴', club: 'Bolívar', year: '1994', tournament: 'worldcup' },
      { id: 'bol_6_94', number: 6, name: 'Milton Melgar', positions: ['CM', 'DM'], primaryPos: 'CM', rating: 78, nation: 'Bolivia', nationCode: 'BO', flag: '🇧🇴', club: 'The Strongest', year: '1994', tournament: 'worldcup' },
      { id: 'bol_9_94', number: 9, name: 'William Ramallo', positions: ['ST'], primaryPos: 'ST', rating: 78, nation: 'Bolivia', nationCode: 'BO', flag: '🇧🇴', club: 'Oriente Petrolero', year: '1994', tournament: 'worldcup' },
      { id: 'bol_5_94', number: 5, name: 'Gustavo Quinteros', positions: ['CB'], primaryPos: 'CB', rating: 77, nation: 'Bolivia', nationCode: 'BO', flag: '🇧🇴', club: 'The Strongest', year: '1994', tournament: 'worldcup' },
    ]
  },
  // --- EXPANDED NATIONS & CLUBS ---
  {
    id: 'alg_2014', name: 'Argelia', shortCode: 'ALG', type: 'worldcup', year: '2014', tag: 'Cup 2014', flag: '🇩🇿', country: 'Algeria', tier: 'bronze',
    players: [
      { id: 'alg_1', number: 8, name: 'Sofiane Feghouli', positions: ['RW', 'AM'], primaryPos: 'RW', rating: 82, bonus: 1, nation: 'Argelia', nationCode: 'DZ', flag: '🇩🇿', club: 'Valencia', year: '2014', tournament: 'worldcup' },
      { id: 'alg_2', number: 11, name: 'Yacine Brahimi', positions: ['LW', 'AM'], primaryPos: 'LW', rating: 83, nation: 'Argelia', nationCode: 'DZ', flag: '🇩🇿', club: 'Granada', year: '2014', tournament: 'worldcup' },
      { id: 'alg_3', number: 13, name: 'Riyad Mahrez', positions: ['RW'], primaryPos: 'RW', rating: 81, nation: 'Argelia', nationCode: 'DZ', flag: '🇩🇿', club: 'Leicester', year: '2014', tournament: 'worldcup' },
      { id: 'alg_4', number: 23, name: 'Raïs M\'Bolhi', positions: ['GK'], primaryPos: 'GK', rating: 80, nation: 'Argelia', nationCode: 'DZ', flag: '🇩🇿', club: 'CSKA Sofia', year: '2014', tournament: 'worldcup' },
      { id: 'alg_5', number: 2, name: 'Madjid Bougherra', positions: ['CB'], primaryPos: 'CB', rating: 78, nation: 'Argelia', nationCode: 'DZ', flag: '🇩🇿', club: 'Lekhwiya', year: '2014', tournament: 'worldcup' },
      { id: 'alg_6', number: 5, name: 'Rafik Halliche', positions: ['CB'], primaryPos: 'CB', rating: 77, nation: 'Argelia', nationCode: 'DZ', flag: '🇩🇿', club: 'Académica', year: '2014', tournament: 'worldcup' },
      { id: 'alg_7', number: 3, name: 'Faouzi Ghoulam', positions: ['LB'], primaryPos: 'LB', rating: 80, nation: 'Argelia', nationCode: 'DZ', flag: '🇩🇿', club: 'Napoli', year: '2014', tournament: 'worldcup' },
      { id: 'alg_8', number: 20, name: 'Aïssa Mandi', positions: ['RB', 'CB'], primaryPos: 'RB', rating: 78, nation: 'Argelia', nationCode: 'DZ', flag: '🇩🇿', club: 'Reims', year: '2014', tournament: 'worldcup' },
      { id: 'alg_9', number: 14, name: 'Nabil Bentaleb', positions: ['CM', 'DM'], primaryPos: 'CM', rating: 79, nation: 'Argelia', nationCode: 'DZ', flag: '🇩🇿', club: 'Tottenham', year: '2014', tournament: 'worldcup' },
      { id: 'alg_10', number: 12, name: 'Carl Medjani', positions: ['DM', 'CB'], primaryPos: 'DM', rating: 77, nation: 'Argelia', nationCode: 'DZ', flag: '🇩🇿', club: 'Valenciennes', year: '2014', tournament: 'worldcup' },
      { id: 'alg_11', number: 15, name: 'El Arabi Soudani', positions: ['ST'], primaryPos: 'ST', rating: 79, nation: 'Argelia', nationCode: 'DZ', flag: '🇩🇿', club: 'Dinamo Zagreb', year: '2014', tournament: 'worldcup' },
    ]
  },
  {
    id: 'aus_2006', name: 'Australia', shortCode: 'AUS', type: 'worldcup', year: '2006', tag: 'Cup 2006', flag: '🇦🇺', country: 'Australia', tier: 'bronze',
    players: [
      { id: 'aus_1', number: 4, name: 'Tim Cahill', positions: ['ST', 'AM'], primaryPos: 'ST', rating: 84, bonus: 1, nation: 'Australia', nationCode: 'AU', flag: '🇦🇺', club: 'Everton', year: '2006', tournament: 'worldcup' },
      { id: 'aus_2', number: 9, name: 'Mark Viduka', positions: ['ST'], primaryPos: 'ST', rating: 83, nation: 'Australia', nationCode: 'AU', flag: '🇦🇺', club: 'Middlesbrough', year: '2006', tournament: 'worldcup' },
      { id: 'aus_3', number: 10, name: 'Harry Kewell', positions: ['LW', 'AM'], primaryPos: 'LW', rating: 84, nation: 'Australia', nationCode: 'AU', flag: '🇦🇺', club: 'Liverpool', year: '2006', tournament: 'worldcup' },
      { id: 'aus_4', number: 1, name: 'Mark Schwarzer', positions: ['GK'], primaryPos: 'GK', rating: 82, nation: 'Australia', nationCode: 'AU', flag: '🇦🇺', club: 'Middlesbrough', year: '2006', tournament: 'worldcup' },
      { id: 'aus_5', number: 2, name: 'Lucas Neill', positions: ['RB', 'CB'], primaryPos: 'RB', rating: 80, nation: 'Australia', nationCode: 'AU', flag: '🇦🇺', club: 'Blackburn', year: '2006', tournament: 'worldcup' },
      { id: 'aus_6', number: 3, name: 'Craig Moore', positions: ['CB'], primaryPos: 'CB', rating: 78, nation: 'Australia', nationCode: 'AU', flag: '🇦🇺', club: 'Newcastle', year: '2006', tournament: 'worldcup' },
      { id: 'aus_7', number: 14, name: 'Scott Chipperfield', positions: ['LB', 'LW'], primaryPos: 'LB', rating: 77, nation: 'Australia', nationCode: 'AU', flag: '🇦🇺', club: 'Basel', year: '2006', tournament: 'worldcup' },
      { id: 'aus_8', number: 5, name: 'Jason Culina', positions: ['CM', 'DM'], primaryPos: 'CM', rating: 78, nation: 'Australia', nationCode: 'AU', flag: '🇦🇺', club: 'PSV', year: '2006', tournament: 'worldcup' },
      { id: 'aus_9', number: 13, name: 'Vince Grella', positions: ['DM'], primaryPos: 'DM', rating: 79, nation: 'Australia', nationCode: 'AU', flag: '🇦🇺', club: 'Parma', year: '2006', tournament: 'worldcup' },
      { id: 'aus_10', number: 7, name: 'Brett Emerton', positions: ['RW', 'CM'], primaryPos: 'RW', rating: 80, nation: 'Australia', nationCode: 'AU', flag: '🇦🇺', club: 'Blackburn', year: '2006', tournament: 'worldcup' },
      { id: 'aus_11', number: 23, name: 'Mark Bresciano', positions: ['AM', 'LW'], primaryPos: 'AM', rating: 80, nation: 'Australia', nationCode: 'AU', flag: '🇦🇺', club: 'Parma', year: '2006', tournament: 'worldcup' },
    ]
  },
  {
    id: 'bul_1994', name: 'Bulgaria', shortCode: 'BUL', type: 'worldcup', year: '1994', tag: 'Cup 1994', flag: '🇧🇬', country: 'Bulgaria', tier: 'silver',
    players: [
      { id: 'bul_1', number: 8, name: 'Hristo Stoichkov', positions: ['ST', 'LW'], primaryPos: 'ST', rating: 91, bonus: 1, nation: 'Bulgaria', nationCode: 'BG', flag: '🇧🇬', club: 'Barcelona', year: '1994', tournament: 'worldcup' },
      { id: 'bul_2', number: 10, name: 'Nasko Sirakov', positions: ['AM', 'ST'], primaryPos: 'AM', rating: 82, nation: 'Bulgaria', nationCode: 'BG', flag: '🇧🇬', club: 'Levski Sofia', year: '1994', tournament: 'worldcup' },
      { id: 'bul_3', number: 20, name: 'Krasimir Balakov', positions: ['CM', 'AM'], primaryPos: 'CM', rating: 86, nation: 'Bulgaria', nationCode: 'BG', flag: '🇧🇬', club: 'Sporting CP', year: '1994', tournament: 'worldcup' },
      { id: 'bul_4', number: 9, name: 'Yordan Letchkov', positions: ['CM', 'AM'], primaryPos: 'CM', rating: 84, nation: 'Bulgaria', nationCode: 'BG', flag: '🇧🇬', club: 'HSV', year: '1994', tournament: 'worldcup' },
      { id: 'bul_5', number: 7, name: 'Emil Kostadinov', positions: ['RW', 'ST'], primaryPos: 'RW', rating: 84, nation: 'Bulgaria', nationCode: 'BG', flag: '🇧🇬', club: 'Porto', year: '1994', tournament: 'worldcup' },
      { id: 'bul_6', number: 1, name: 'Borislav Mikhailov', positions: ['GK'], primaryPos: 'GK', rating: 82, nation: 'Bulgaria', nationCode: 'BG', flag: '🇧🇬', club: 'Mulhouse', year: '1994', tournament: 'worldcup' },
      { id: 'bul_7', number: 3, name: 'Trifon Ivanov', positions: ['CB'], primaryPos: 'CB', rating: 83, nation: 'Bulgaria', nationCode: 'BG', flag: '🇧🇬', club: 'Xamax', year: '1994', tournament: 'worldcup' },
      { id: 'bul_8', number: 2, name: 'Emil Kremenliev', positions: ['RB'], primaryPos: 'RB', rating: 77, nation: 'Bulgaria', nationCode: 'BG', flag: '🇧🇬', club: 'Levski Sofia', year: '1994', tournament: 'worldcup' },
      { id: 'bul_9', number: 4, name: 'Tzanko Tzvetanov', positions: ['LB'], primaryPos: 'LB', rating: 77, nation: 'Bulgaria', nationCode: 'BG', flag: '🇧🇬', club: 'Levski Sofia', year: '1994', tournament: 'worldcup' },
      { id: 'bul_10', number: 5, name: 'Petar Hubchev', positions: ['CB', 'DM'], primaryPos: 'CB', rating: 80, nation: 'Bulgaria', nationCode: 'BG', flag: '🇧🇬', club: 'Hamburg', year: '1994', tournament: 'worldcup' },
      { id: 'bul_11', number: 6, name: 'Zlatko Yankov', positions: ['DM'], primaryPos: 'DM', rating: 78, nation: 'Bulgaria', nationCode: 'BG', flag: '🇧🇬', club: 'Levski Sofia', year: '1994', tournament: 'worldcup' },
    ]
  },
  {
    id: 'can_2022', name: 'Canadá', shortCode: 'CAN', type: 'worldcup', year: '2022', tag: 'Cup 2022', flag: '🇨🇦', country: 'Canada', tier: 'bronze',
    players: [
      { id: 'can_1', number: 19, name: 'Alphonso Davies', positions: ['LB', 'LW'], primaryPos: 'LB', rating: 85, bonus: 1, nation: 'Canadá', nationCode: 'CA', flag: '🇨🇦', club: 'Bayern Munich', year: '2022', tournament: 'worldcup' },
      { id: 'can_2', number: 20, name: 'Jonathan David', positions: ['ST', 'AM'], primaryPos: 'ST', rating: 82, nation: 'Canadá', nationCode: 'CA', flag: '🇨🇦', club: 'Lille', year: '2022', tournament: 'worldcup' },
      { id: 'can_3', number: 7, name: 'Stephen Eustáquio', positions: ['CM', 'DM'], primaryPos: 'CM', rating: 79, nation: 'Canadá', nationCode: 'CA', flag: '🇨🇦', club: 'Porto', year: '2022', tournament: 'worldcup' },
      { id: 'can_4', number: 18, name: 'Milan Borjan', positions: ['GK'], primaryPos: 'GK', rating: 77, nation: 'Canadá', nationCode: 'CA', flag: '🇨🇦', club: 'Red Star', year: '2022', tournament: 'worldcup' },
      { id: 'can_5', number: 4, name: 'Kamal Miller', positions: ['CB', 'LB'], primaryPos: 'CB', rating: 76, nation: 'Canadá', nationCode: 'CA', flag: '🇨🇦', club: 'CF Montréal', year: '2022', tournament: 'worldcup' },
      { id: 'can_6', number: 5, name: 'Steven Vitória', positions: ['CB'], primaryPos: 'CB', rating: 75, nation: 'Canadá', nationCode: 'CA', flag: '🇨🇦', club: 'Chaves', year: '2022', tournament: 'worldcup' },
      { id: 'can_7', number: 2, name: 'Alistair Johnston', positions: ['RB', 'CB'], primaryPos: 'RB', rating: 77, nation: 'Canadá', nationCode: 'CA', flag: '🇨🇦', club: 'CF Montréal', year: '2022', tournament: 'worldcup' },
      { id: 'can_8', number: 13, name: 'Atiba Hutchinson', positions: ['DM', 'CM'], primaryPos: 'DM', rating: 77, nation: 'Canadá', nationCode: 'CA', flag: '🇨🇦', club: 'Beşiktaş', year: '2022', tournament: 'worldcup' },
      { id: 'can_9', number: 11, name: 'Tajon Buchanan', positions: ['RW', 'RB'], primaryPos: 'RW', rating: 78, nation: 'Canadá', nationCode: 'CA', flag: '🇨🇦', club: 'Club Brugge', year: '2022', tournament: 'worldcup' },
      { id: 'can_10', number: 17, name: 'Cyle Larin', positions: ['ST', 'LW'], primaryPos: 'ST', rating: 78, nation: 'Canadá', nationCode: 'CA', flag: '🇨🇦', club: 'Club Brugge', year: '2022', tournament: 'worldcup' },
      { id: 'can_11', number: 8, name: 'Liam Fraser', positions: ['CM'], primaryPos: 'CM', rating: 72, nation: 'Canadá', nationCode: 'CA', flag: '🇨🇦', club: 'Deinze', year: '2022', tournament: 'worldcup' },
    ]
  },
  {
    id: 'civ_2006', name: 'Costa de Marfil', shortCode: 'CIV', type: 'worldcup', year: '2006', tag: 'Cup 2006', flag: '🇨🇮', country: 'Ivory Coast', tier: 'silver',
    players: [
      { id: 'civ_1', number: 11, name: 'Didier Drogba', positions: ['ST'], primaryPos: 'ST', rating: 89, bonus: 1, nation: 'Costa de Marfil', nationCode: 'CI', flag: '🇨🇮', club: 'Chelsea', year: '2006', tournament: 'worldcup' },
      { id: 'civ_2', number: 19, name: 'Yaya Touré', positions: ['CM', 'DM'], primaryPos: 'CM', rating: 86, nation: 'Costa de Marfil', nationCode: 'CI', flag: '🇨🇮', club: 'Olympiacos', year: '2006', tournament: 'worldcup' },
      { id: 'civ_3', number: 4, name: 'Kolo Touré', positions: ['CB'], primaryPos: 'CB', rating: 86, nation: 'Costa de Marfil', nationCode: 'CI', flag: '🇨🇮', club: 'Arsenal', year: '2006', tournament: 'worldcup' },
      { id: 'civ_4', number: 5, name: 'Didier Zokora', positions: ['DM', 'CB'], primaryPos: 'DM', rating: 81, nation: 'Costa de Marfil', nationCode: 'CI', flag: '🇨🇮', club: 'Saint-Étienne', year: '2006', tournament: 'worldcup' },
      { id: 'civ_5', number: 1, name: 'Jean-Jacques Tizié', positions: ['GK'], primaryPos: 'GK', rating: 76, nation: 'Costa de Marfil', nationCode: 'CI', flag: '🇨🇮', club: 'Espérance', year: '2006', tournament: 'worldcup' },
      { id: 'civ_6', number: 6, name: 'Blaise Kouassi', positions: ['CB'], primaryPos: 'CB', rating: 75, nation: 'Costa de Marfil', nationCode: 'CI', flag: '🇨🇮', club: 'Troyes', year: '2006', tournament: 'worldcup' },
      { id: 'civ_7', number: 21, name: 'Emmanuel Eboué', positions: ['RB'], primaryPos: 'RB', rating: 82, nation: 'Costa de Marfil', nationCode: 'CI', flag: '🇨🇮', club: 'Arsenal', year: '2006', tournament: 'worldcup' },
      { id: 'civ_8', number: 3, name: 'Arthur Boka', positions: ['LB'], primaryPos: 'LB', rating: 79, nation: 'Costa de Marfil', nationCode: 'CI', flag: '🇨🇮', club: 'Strasbourg', year: '2006', tournament: 'worldcup' },
      { id: 'civ_9', number: 18, name: 'Abdul Kader Keïta', positions: ['RW'], primaryPos: 'RW', rating: 80, nation: 'Costa de Marfil', nationCode: 'CI', flag: '🇨🇮', club: 'Lille', year: '2006', tournament: 'worldcup' },
      { id: 'civ_10', number: 15, name: 'Aruna Dindane', positions: ['ST', 'RW'], primaryPos: 'ST', rating: 80, nation: 'Costa de Marfil', nationCode: 'CI', flag: '🇨🇮', club: 'Lens', year: '2006', tournament: 'worldcup' },
      { id: 'civ_11', number: 14, name: 'Bakari Koné', positions: ['LW', 'ST'], primaryPos: 'LW', rating: 79, nation: 'Costa de Marfil', nationCode: 'CI', flag: '🇨🇮', club: 'Nice', year: '2006', tournament: 'worldcup' },
    ]
  },
  {
    id: 'egy_2018', name: 'Egipto', shortCode: 'EGY', type: 'worldcup', year: '2018', tag: 'Cup 2018', flag: '🇪🇬', country: 'Egypt', tier: 'bronze',
    players: [
      { id: 'egy_1', number: 10, name: 'Mohamed Salah', positions: ['RW', 'ST'], primaryPos: 'RW', rating: 91, bonus: 1, nation: 'Egipto', nationCode: 'EG', flag: '🇪🇬', club: 'Liverpool', year: '2018', tournament: 'worldcup' },
      { id: 'egy_2', number: 17, name: 'Mohamed Elneny', positions: ['CM', 'DM'], primaryPos: 'CM', rating: 79, nation: 'Egipto', nationCode: 'EG', flag: '🇪🇬', club: 'Arsenal', year: '2018', tournament: 'worldcup' },
      { id: 'egy_3', number: 21, name: 'Trezeguet', positions: ['LW'], primaryPos: 'LW', rating: 78, nation: 'Egipto', nationCode: 'EG', flag: '🇪🇬', club: 'Kasımpaşa', year: '2018', tournament: 'worldcup' },
      { id: 'egy_4', number: 1, name: 'Essam El-Hadary', positions: ['GK'], primaryPos: 'GK', rating: 78, nation: 'Egipto', nationCode: 'EG', flag: '🇪🇬', club: 'Taawoun', year: '2018', tournament: 'worldcup' },
      { id: 'egy_5', number: 6, name: 'Ahmed Hegazi', positions: ['CB'], primaryPos: 'CB', rating: 78, nation: 'Egipto', nationCode: 'EG', flag: '🇪🇬', club: 'West Brom', year: '2018', tournament: 'worldcup' },
      { id: 'egy_6', number: 2, name: 'Ali Gabr', positions: ['CB'], primaryPos: 'CB', rating: 74, nation: 'Egipto', nationCode: 'EG', flag: '🇪🇬', club: 'West Brom', year: '2018', tournament: 'worldcup' },
      { id: 'egy_7', number: 7, name: 'Ahmed Fathi', positions: ['RB', 'CM'], primaryPos: 'RB', rating: 76, nation: 'Egipto', nationCode: 'EG', flag: '🇪🇬', club: 'Ahly', year: '2018', tournament: 'worldcup' },
      { id: 'egy_8', number: 13, name: 'Mohamed Abdel-Shafy', positions: ['LB'], primaryPos: 'LB', rating: 74, nation: 'Egipto', nationCode: 'EG', flag: '🇪🇬', club: 'Fateh', year: '2018', tournament: 'worldcup' },
      { id: 'egy_9', number: 8, name: 'Tarek Hamed', positions: ['DM'], primaryPos: 'DM', rating: 76, nation: 'Egipto', nationCode: 'EG', flag: '🇪🇬', club: 'Zamalek', year: '2018', tournament: 'worldcup' },
      { id: 'egy_10', number: 19, name: 'Abdallah El Said', positions: ['AM'], primaryPos: 'AM', rating: 76, nation: 'Egipto', nationCode: 'EG', flag: '🇪🇬', club: 'KuPS', year: '2018', tournament: 'worldcup' },
      { id: 'egy_11', number: 9, name: 'Marwan Mohsen', positions: ['ST'], primaryPos: 'ST', rating: 73, nation: 'Egipto', nationCode: 'EG', flag: '🇪🇬', club: 'Ahly', year: '2018', tournament: 'worldcup' },
    ]
  },
  {
    id: 'wal_2016', name: 'Gales', shortCode: 'WAL', type: 'worldcup', year: '2016', tag: 'Euro 2016', flag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿', country: 'Wales', tier: 'silver',
    players: [
      { id: 'wal_1', number: 11, name: 'Gareth Bale', positions: ['RW', 'ST'], primaryPos: 'RW', rating: 91, bonus: 1, nation: 'Gales', nationCode: 'WAL', flag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿', club: 'Real Madrid', year: '2016', tournament: 'worldcup' },
      { id: 'wal_2', number: 10, name: 'Aaron Ramsey', positions: ['CM', 'AM'], primaryPos: 'CM', rating: 85, nation: 'Gales', nationCode: 'WAL', flag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿', club: 'Arsenal', year: '2016', tournament: 'worldcup' },
      { id: 'wal_3', number: 7, name: 'Joe Allen', positions: ['CM', 'DM'], primaryPos: 'CM', rating: 81, nation: 'Gales', nationCode: 'WAL', flag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿', club: 'Liverpool', year: '2016', tournament: 'worldcup' },
      { id: 'wal_4', number: 1, name: 'Wayne Hennessey', positions: ['GK'], primaryPos: 'GK', rating: 79, nation: 'Gales', nationCode: 'WAL', flag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿', club: 'Crystal Palace', year: '2016', tournament: 'worldcup' },
      { id: 'wal_5', number: 6, name: 'Ashley Williams', positions: ['CB'], primaryPos: 'CB', rating: 82, nation: 'Gales', nationCode: 'WAL', flag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿', club: 'Swansea', year: '2016', tournament: 'worldcup' },
      { id: 'wal_6', number: 4, name: 'Ben Davies', positions: ['CB', 'LB'], primaryPos: 'CB', rating: 80, nation: 'Gales', nationCode: 'WAL', flag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿', club: 'Tottenham', year: '2016', tournament: 'worldcup' },
      { id: 'wal_7', number: 5, name: 'James Chester', positions: ['CB'], primaryPos: 'CB', rating: 78, nation: 'Gales', nationCode: 'WAL', flag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿', club: 'WBA', year: '2016', tournament: 'worldcup' },
      { id: 'wal_8', number: 2, name: 'Chris Gunter', positions: ['RB'], primaryPos: 'RB', rating: 77, nation: 'Gales', nationCode: 'WAL', flag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿', club: 'Reading', year: '2016', tournament: 'worldcup' },
      { id: 'wal_9', number: 3, name: 'Neil Taylor', positions: ['LB'], primaryPos: 'LB', rating: 77, nation: 'Gales', nationCode: 'WAL', flag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿', club: 'Swansea', year: '2016', tournament: 'worldcup' },
      { id: 'wal_10', number: 16, name: 'Joe Ledley', positions: ['DM', 'CM'], primaryPos: 'DM', rating: 78, nation: 'Gales', nationCode: 'WAL', flag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿', club: 'Crystal Palace', year: '2016', tournament: 'worldcup' },
      { id: 'wal_11', number: 9, name: 'Hal Robson-Kanu', positions: ['ST', 'RW'], primaryPos: 'ST', rating: 76, nation: 'Gales', nationCode: 'WAL', flag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿', club: 'Reading', year: '2016', tournament: 'worldcup' },
    ]
  },
  {
    id: 'gre_2004', name: 'Grecia', shortCode: 'GRE', type: 'worldcup', year: '2004', tag: 'Euro 2004', flag: '🇬🇷', country: 'Greece', tier: 'silver',
    players: [
      { id: 'gre_1', number: 7, name: 'Theodoros Zagorakis', positions: ['CM', 'DM'], primaryPos: 'CM', rating: 85, bonus: 1, nation: 'Grecia', nationCode: 'GR', flag: '🇬🇷', club: 'AEK Athens', year: '2004', tournament: 'worldcup' },
      { id: 'gre_2', number: 15, name: 'Angelos Charisteas', positions: ['ST'], primaryPos: 'ST', rating: 83, nation: 'Grecia', nationCode: 'GR', flag: '🇬🇷', club: 'Werder Bremen', year: '2004', tournament: 'worldcup' },
      { id: 'gre_3', number: 10, name: 'Giorgos Karagounis', positions: ['CM', 'AM'], primaryPos: 'CM', rating: 83, nation: 'Grecia', nationCode: 'GR', flag: '🇬🇷', club: 'Inter', year: '2004', tournament: 'worldcup' },
      { id: 'gre_4', number: 1, name: 'Antonios Nikopolidis', positions: ['GK'], primaryPos: 'GK', rating: 84, nation: 'Grecia', nationCode: 'GR', flag: '🇬🇷', club: 'Panathinaikos', year: '2004', tournament: 'worldcup' },
      { id: 'gre_5', number: 19, name: 'Michalis Kapsis', positions: ['CB'], primaryPos: 'CB', rating: 81, nation: 'Grecia', nationCode: 'GR', flag: '🇬🇷', club: 'AEK Athens', year: '2004', tournament: 'worldcup' },
      { id: 'gre_6', number: 5, name: 'Traianos Dellas', positions: ['CB'], primaryPos: 'CB', rating: 83, nation: 'Grecia', nationCode: 'GR', flag: '🇬🇷', club: 'Roma', year: '2004', tournament: 'worldcup' },
      { id: 'gre_7', number: 2, name: 'Giourkas Seitaridis', positions: ['RB'], primaryPos: 'RB', rating: 84, nation: 'Grecia', nationCode: 'GR', flag: '🇬🇷', club: 'Panathinaikos', year: '2004', tournament: 'worldcup' },
      { id: 'gre_8', number: 14, name: 'Takis Fyssas', positions: ['LB'], primaryPos: 'LB', rating: 80, nation: 'Grecia', nationCode: 'GR', flag: '🇬🇷', club: 'Benfica', year: '2004', tournament: 'worldcup' },
      { id: 'gre_9', number: 6, name: 'Angelos Basinas', positions: ['DM', 'CM'], primaryPos: 'DM', rating: 81, nation: 'Grecia', nationCode: 'GR', flag: '🇬🇷', club: 'Panathinaikos', year: '2004', tournament: 'worldcup' },
      { id: 'gre_10', number: 20, name: 'Zisis Vryzas', positions: ['ST'], primaryPos: 'ST', rating: 80, nation: 'Grecia', nationCode: 'GR', flag: '🇬🇷', club: 'Fiorentina', year: '2004', tournament: 'worldcup' },
      { id: 'gre_11', number: 21, name: 'Katsouranis', positions: ['CM', 'CB'], primaryPos: 'CM', rating: 82, nation: 'Grecia', nationCode: 'GR', flag: '🇬🇷', club: 'AEK Athens', year: '2004', tournament: 'worldcup' },
    ]
  },
  {
    id: 'hun_1954', name: 'Hungría', shortCode: 'HUN', type: 'worldcup', year: '1954', tag: 'Cup 1954', flag: '🇭🇺', country: 'Hungary', tier: 'gold',
    players: [
      { id: 'hun_1', number: 10, name: 'Ferenc Puskás', positions: ['ST', 'AM'], primaryPos: 'ST', rating: 96, bonus: 1, nation: 'Hungría', nationCode: 'HU', flag: '🇭🇺', club: 'Honvéd', year: '1954', tournament: 'worldcup' },
      { id: 'hun_2', number: 8, name: 'Sándor Kocsis', positions: ['ST'], primaryPos: 'ST', rating: 93, nation: 'Hungría', nationCode: 'HU', flag: '🇭🇺', club: 'Honvéd', year: '1954', tournament: 'worldcup' },
      { id: 'hun_3', number: 9, name: 'Nándor Hidegkuti', positions: ['AM', 'ST'], primaryPos: 'AM', rating: 91, nation: 'Hungría', nationCode: 'HU', flag: '🇭🇺', club: 'MTK', year: '1954', tournament: 'worldcup' },
      { id: 'hun_4', number: 11, name: 'Zoltán Czibor', positions: ['LW'], primaryPos: 'LW', rating: 90, nation: 'Hungría', nationCode: 'HU', flag: '🇭🇺', club: 'Honvéd', year: '1954', tournament: 'worldcup' },
      { id: 'hun_5', number: 5, name: 'József Bozsik', positions: ['CM', 'DM'], primaryPos: 'CM', rating: 92, nation: 'Hungría', nationCode: 'HU', flag: '🇭🇺', club: 'Honvéd', year: '1954', tournament: 'worldcup' },
      { id: 'hun_6', number: 1, name: 'Gyula Grosics', positions: ['GK'], primaryPos: 'GK', rating: 91, nation: 'Hungría', nationCode: 'HU', flag: '🇭🇺', club: 'Honvéd', year: '1954', tournament: 'worldcup' },
      { id: 'hun_7', number: 2, name: 'Jenő Buzánszky', positions: ['RB'], primaryPos: 'RB', rating: 85, nation: 'Hungría', nationCode: 'HU', flag: '🇭🇺', club: 'Dorog', year: '1954', tournament: 'worldcup' },
      { id: 'hun_8', number: 3, name: 'Gyula Lóránt', positions: ['CB'], primaryPos: 'CB', rating: 87, nation: 'Hungría', nationCode: 'HU', flag: '🇭🇺', club: 'Honvéd', year: '1954', tournament: 'worldcup' },
      { id: 'hun_9', number: 4, name: 'Mihály Lantos', positions: ['LB'], primaryPos: 'LB', rating: 85, nation: 'Hungría', nationCode: 'HU', flag: '🇭🇺', club: 'MTK', year: '1954', tournament: 'worldcup' },
      { id: 'hun_10', number: 6, name: 'József Zakariás', positions: ['DM', 'CB'], primaryPos: 'DM', rating: 86, nation: 'Hungría', nationCode: 'HU', flag: '🇭🇺', club: 'MTK', year: '1954', tournament: 'worldcup' },
      { id: 'hun_11', number: 7, name: 'József Tóth', positions: ['RW'], primaryPos: 'RW', rating: 84, nation: 'Hungría', nationCode: 'HU', flag: '🇭🇺', club: 'Csepel', year: '1954', tournament: 'worldcup' },
    ]
  },
  {
    id: 'nor_1998', name: 'Noruega', shortCode: 'NOR', type: 'worldcup', year: '1998', tag: 'Cup 1998', flag: '🇳🇴', country: 'Norway', tier: 'bronze',
    players: [
      { id: 'nor_1', number: 9, name: 'Tore André Flo', positions: ['ST'], primaryPos: 'ST', rating: 84, bonus: 1, nation: 'Noruega', nationCode: 'NO', flag: '🇳🇴', club: 'Chelsea', year: '1998', tournament: 'worldcup' },
      { id: 'nor_2', number: 20, name: 'Ole Gunnar Solskjær', positions: ['ST', 'RW'], primaryPos: 'ST', rating: 83, nation: 'Noruega', nationCode: 'NO', flag: '🇳🇴', club: 'Man United', year: '1998', tournament: 'worldcup' },
      { id: 'nor_3', number: 10, name: 'Kjetil Rekdal', positions: ['CM', 'DM'], primaryPos: 'CM', rating: 81, nation: 'Noruega', nationCode: 'NO', flag: '🇳🇴', club: 'Hertha Berlin', year: '1998', tournament: 'worldcup' },
      { id: 'nor_4', number: 1, name: 'Frode Grodås', positions: ['GK'], primaryPos: 'GK', rating: 78, nation: 'Noruega', nationCode: 'NO', flag: '🇳🇴', club: 'Tottenham', year: '1998', tournament: 'worldcup' },
      { id: 'nor_5', number: 3, name: 'Ronny Johnsen', positions: ['CB', 'DM'], primaryPos: 'CB', rating: 82, nation: 'Noruega', nationCode: 'NO', flag: '🇳🇴', club: 'Man United', year: '1998', tournament: 'worldcup' },
      { id: 'nor_6', number: 4, name: 'Henning Berg', positions: ['CB', 'RB'], primaryPos: 'CB', rating: 81, nation: 'Noruega', nationCode: 'NO', flag: '🇳🇴', club: 'Man United', year: '1998', tournament: 'worldcup' },
      { id: 'nor_7', number: 2, name: 'Tore Pedersen', positions: ['RB'], primaryPos: 'RB', rating: 76, nation: 'Noruega', nationCode: 'NO', flag: '🇳🇴', club: 'Blackburn', year: '1998', tournament: 'worldcup' },
      { id: 'nor_8', number: 5, name: 'Stig Inge Bjørnebye', positions: ['LB'], primaryPos: 'LB', rating: 79, nation: 'Noruega', nationCode: 'NO', flag: '🇳🇴', club: 'Liverpool', year: '1998', tournament: 'worldcup' },
      { id: 'nor_9', number: 8, name: 'Øyvind Leonhardsen', positions: ['CM'], primaryPos: 'CM', rating: 78, nation: 'Noruega', nationCode: 'NO', flag: '🇳🇴', club: 'Liverpool', year: '1998', tournament: 'worldcup' },
      { id: 'nor_10', number: 21, name: 'Vidar Riseth', positions: ['CM', 'CB'], primaryPos: 'CM', rating: 76, nation: 'Noruega', nationCode: 'NO', flag: '🇳🇴', club: 'LASK', year: '1998', tournament: 'worldcup' },
      { id: 'nor_11', number: 7, name: 'Erik Mykland', positions: ['AM', 'CM'], primaryPos: 'AM', rating: 79, nation: 'Noruega', nationCode: 'NO', flag: '🇳🇴', club: 'Panathinaikos', year: '1998', tournament: 'worldcup' },
    ]
  },
  {
    id: 'swe_1994', name: 'Suecia', shortCode: 'SWE', type: 'worldcup', year: '1994', tag: 'Cup 1994', flag: '🇸🇪', country: 'Sweden', tier: 'silver',
    players: [
      { id: 'swe_1', number: 11, name: 'Tomas Brolin', positions: ['AM', 'ST'], primaryPos: 'AM', rating: 87, bonus: 1, nation: 'Suecia', nationCode: 'SE', flag: '🇸🇪', club: 'Parma', year: '1994', tournament: 'worldcup' },
      { id: 'swe_2', number: 10, name: 'Martin Dahlin', positions: ['ST'], primaryPos: 'ST', rating: 86, nation: 'Suecia', nationCode: 'SE', flag: '🇸🇪', club: 'Mönchengladbach', year: '1994', tournament: 'worldcup' },
      { id: 'swe_3', number: 19, name: 'Kennet Andersson', positions: ['ST'], primaryPos: 'ST', rating: 85, nation: 'Suecia', nationCode: 'SE', flag: '🇸🇪', club: 'Lille', year: '1994', tournament: 'worldcup' },
      { id: 'swe_4', number: 1, name: 'Thomas Ravelli', positions: ['GK'], primaryPos: 'GK', rating: 85, nation: 'Suecia', nationCode: 'SE', flag: '🇸🇪', club: 'IFK Göteborg', year: '1994', tournament: 'worldcup' },
      { id: 'swe_5', number: 3, name: 'Patrik Andersson', positions: ['CB'], primaryPos: 'CB', rating: 85, nation: 'Suecia', nationCode: 'SE', flag: '🇸🇪', club: 'Mönchengladbach', year: '1994', tournament: 'worldcup' },
      { id: 'swe_6', number: 4, name: 'Joachim Björklund', positions: ['CB'], primaryPos: 'CB', rating: 82, nation: 'Suecia', nationCode: 'SE', flag: '🇸🇪', club: 'IFK Göteborg', year: '1994', tournament: 'worldcup' },
      { id: 'swe_7', number: 2, name: 'Roland Nilsson', positions: ['RB'], primaryPos: 'RB', rating: 81, nation: 'Suecia', nationCode: 'SE', flag: '🇸🇪', club: 'Sheffield Weds', year: '1994', tournament: 'worldcup' },
      { id: 'swe_8', number: 5, name: 'Roger Ljung', positions: ['LB'], primaryPos: 'LB', rating: 80, nation: 'Suecia', nationCode: 'SE', flag: '🇸🇪', club: 'Duisburg', year: '1994', tournament: 'worldcup' },
      { id: 'swe_9', number: 6, name: 'Stefan Schwarz', positions: ['DM', 'CM'], primaryPos: 'DM', rating: 83, nation: 'Suecia', nationCode: 'SE', flag: '🇸🇪', club: 'Benfica', year: '1994', tournament: 'worldcup' },
      { id: 'swe_10', number: 9, name: 'Jonas Thern', positions: ['CM'], primaryPos: 'CM', rating: 83, nation: 'Suecia', nationCode: 'SE', flag: '🇸🇪', club: 'Napoli', year: '1994', tournament: 'worldcup' },
      { id: 'swe_11', number: 8, name: 'Klas Ingesson', positions: ['CM', 'RW'], primaryPos: 'CM', rating: 81, nation: 'Suecia', nationCode: 'SE', flag: '🇸🇪', club: 'PSV', year: '1994', tournament: 'worldcup' },
    ]
  },
  {
    id: 'tur_2002', name: 'Turquía', shortCode: 'TUR', type: 'worldcup', year: '2002', tag: 'Cup 2002', flag: '🇹🇷', country: 'Turkey', tier: 'silver',
    players: [
      { id: 'tur_1', number: 1, name: 'Rüştü Reçber', positions: ['GK'], primaryPos: 'GK', rating: 87, bonus: 1, nation: 'Turquía', nationCode: 'TR', flag: '🇹🇷', club: 'Fenerbahçe', year: '2002', tournament: 'worldcup' },
      { id: 'tur_2', number: 9, name: 'Hakan Şükür', positions: ['ST'], primaryPos: 'ST', rating: 86, nation: 'Turquía', nationCode: 'TR', flag: '🇹🇷', club: 'Parma', year: '2002', tournament: 'worldcup' },
      { id: 'tur_3', number: 11, name: 'Hasan Şaş', positions: ['RW', 'LW'], primaryPos: 'RW', rating: 86, nation: 'Turquía', nationCode: 'TR', flag: '🇹🇷', club: 'Galatasaray', year: '2002', tournament: 'worldcup' },
      { id: 'tur_4', number: 10, name: 'Yıldıray Baştürk', positions: ['AM', 'CM'], primaryPos: 'AM', rating: 85, nation: 'Turquía', nationCode: 'TR', flag: '🇹🇷', club: 'Bayer Leverkusen', year: '2002', tournament: 'worldcup' },
      { id: 'tur_5', number: 3, name: 'Bülent Korkmaz', positions: ['CB'], primaryPos: 'CB', rating: 84, nation: 'Turquía', nationCode: 'TR', flag: '🇹🇷', club: 'Galatasaray', year: '2002', tournament: 'worldcup' },
      { id: 'tur_6', number: 4, name: 'Fatih Akyel', positions: ['RB', 'CB'], primaryPos: 'RB', rating: 81, nation: 'Turquía', nationCode: 'TR', flag: '🇹🇷', club: 'Fenerbahçe', year: '2002', tournament: 'worldcup' },
      { id: 'tur_7', number: 18, name: 'Ergün Penbe', positions: ['LB', 'CM'], primaryPos: 'LB', rating: 80, nation: 'Turquía', nationCode: 'TR', flag: '🇹🇷', club: 'Galatasaray', year: '2002', tournament: 'worldcup' },
      { id: 'tur_8', number: 8, name: 'Tugay Kerimoğlu', positions: ['CM', 'DM'], primaryPos: 'CM', rating: 84, nation: 'Turquía', nationCode: 'TR', flag: '🇹🇷', club: 'Blackburn', year: '2002', tournament: 'worldcup' },
      { id: 'tur_9', number: 21, name: 'Emre Belözoğlu', positions: ['CM', 'AM'], primaryPos: 'CM', rating: 83, nation: 'Turquía', nationCode: 'TR', flag: '🇹🇷', club: 'Inter', year: '2002', tournament: 'worldcup' },
      { id: 'tur_10', number: 22, name: 'Ümit Davala', positions: ['RB', 'RW'], primaryPos: 'RB', rating: 83, nation: 'Turquía', nationCode: 'TR', flag: '🇹🇷', club: 'Milan', year: '2002', tournament: 'worldcup' },
      { id: 'tur_11', number: 17, name: 'Ilhan Mansız', positions: ['ST'], primaryPos: 'ST', rating: 83, nation: 'Turquía', nationCode: 'TR', flag: '🇹🇷', club: 'Beşiktaş', year: '2002', tournament: 'worldcup' },
    ]
  },
  {
    id: 'ukr_2006', name: 'Ucrania', shortCode: 'UKR', type: 'worldcup', year: '2006', tag: 'Cup 2006', flag: '🇺🇦', country: 'Ukraine', tier: 'silver',
    players: [
      { id: 'ukr_1', number: 7, name: 'Andriy Shevchenko', positions: ['ST'], primaryPos: 'ST', rating: 91, bonus: 1, nation: 'Ucrania', nationCode: 'UA', flag: '🇺🇦', club: 'AC Milan', year: '2006', tournament: 'worldcup' },
      { id: 'ukr_2', number: 11, name: 'Serhiy Rebrov', positions: ['ST', 'AM'], primaryPos: 'ST', rating: 83, nation: 'Ucrania', nationCode: 'UA', flag: '🇺🇦', club: 'Dynamo Kyiv', year: '2006', tournament: 'worldcup' },
      { id: 'ukr_3', number: 4, name: 'Anatoliy Tymoshchuk', positions: ['DM', 'CM'], primaryPos: 'DM', rating: 85, nation: 'Ucrania', nationCode: 'UA', flag: '🇺🇦', club: 'Shakhtar', year: '2006', tournament: 'worldcup' },
      { id: 'ukr_4', number: 1, name: 'Oleksandr Shovkovskyi', positions: ['GK'], primaryPos: 'GK', rating: 83, nation: 'Ucrania', nationCode: 'UA', flag: '🇺🇦', club: 'Dynamo Kyiv', year: '2006', tournament: 'worldcup' },
      { id: 'ukr_5', number: 2, name: 'Andriy Rusol', positions: ['CB'], primaryPos: 'CB', rating: 80, nation: 'Ucrania', nationCode: 'UA', flag: '🇺🇦', club: 'Dnipro', year: '2006', tournament: 'worldcup' },
      { id: 'ukr_6', number: 6, name: 'Andriy Nesmachnyi', positions: ['LB'], primaryPos: 'LB', rating: 79, nation: 'Ucrania', nationCode: 'UA', flag: '🇺🇦', club: 'Dynamo Kyiv', year: '2006', tournament: 'worldcup' },
      { id: 'ukr_7', number: 5, name: 'Volodymyr Yezerskyi', positions: ['RB', 'CB'], primaryPos: 'RB', rating: 78, nation: 'Ucrania', nationCode: 'UA', flag: '🇺🇦', club: 'Dnipro', year: '2006', tournament: 'worldcup' },
      { id: 'ukr_8', number: 19, name: 'Maksym Kalynychenko', positions: ['AM', 'LW'], primaryPos: 'AM', rating: 81, nation: 'Ucrania', nationCode: 'UA', flag: '🇺🇦', club: 'Spartak Moscow', year: '2006', tournament: 'worldcup' },
      { id: 'ukr_9', number: 14, name: 'Andriy Husin', positions: ['CM', 'DM'], primaryPos: 'CM', rating: 80, nation: 'Ucrania', nationCode: 'UA', flag: '🇺🇦', club: 'Krylia Sovetov', year: '2006', tournament: 'worldcup' },
      { id: 'ukr_10', number: 8, name: 'Oleh Shelayev', positions: ['CM'], primaryPos: 'CM', rating: 78, nation: 'Ucrania', nationCode: 'UA', flag: '🇺🇦', club: 'Dnipro', year: '2006', tournament: 'worldcup' },
      { id: 'ukr_11', number: 10, name: 'Andriy Voronin', positions: ['ST', 'AM'], primaryPos: 'ST', rating: 81, nation: 'Ucrania', nationCode: 'UA', flag: '🇺🇦', club: 'Bayer Leverkusen', year: '2006', tournament: 'worldcup' },
    ]
  },
  {
    id: 'asm_2017', name: 'AS Monaco', shortCode: 'ASM', type: 'champions', year: '2017', tag: 'Ligue 1 2017', flag: '🇲🇨', country: 'Monaco', tier: 'silver',
    players: [
      { id: 'asm_1', number: 29, name: 'Kylian Mbappé', positions: ['ST', 'RW'], primaryPos: 'ST', rating: 88, bonus: 1, nation: 'Francia', nationCode: 'FR', flag: '🇫🇷', club: 'Monaco', year: '2017', tournament: 'champions' },
      { id: 'asm_2', number: 9, name: 'Radamel Falcao', positions: ['ST'], primaryPos: 'ST', rating: 87, nation: 'Colombia', nationCode: 'CO', flag: '🇨🇴', club: 'Monaco', year: '2017', tournament: 'champions' },
      { id: 'asm_3', number: 10, name: 'Bernardo Silva', positions: ['RW', 'AM'], primaryPos: 'RW', rating: 86, nation: 'Portugal', nationCode: 'PT', flag: '🇵🇹', club: 'Monaco', year: '2017', tournament: 'champions' },
      { id: 'asm_4', number: 27, name: 'Thomas Lemar', positions: ['LW', 'AM'], primaryPos: 'LW', rating: 85, nation: 'Francia', nationCode: 'FR', flag: '🇫🇷', club: 'Monaco', year: '2017', tournament: 'champions' },
      { id: 'asm_5', number: 14, name: 'Tiemoué Bakayoko', positions: ['DM', 'CM'], primaryPos: 'DM', rating: 83, nation: 'Francia', nationCode: 'FR', flag: '🇫🇷', club: 'Monaco', year: '2017', tournament: 'champions' },
      { id: 'asm_6', number: 2, name: 'Fabinho', positions: ['DM', 'RB'], primaryPos: 'DM', rating: 85, nation: 'Brasil', nationCode: 'BR', flag: '🇧🇷', club: 'Monaco', year: '2017', tournament: 'champions' },
      { id: 'asm_7', number: 25, name: 'Kamil Glik', positions: ['CB'], primaryPos: 'CB', rating: 84, nation: 'Polonia', nationCode: 'PL', flag: '🇵🇱', club: 'Monaco', year: '2017', tournament: 'champions' },
      { id: 'asm_8', number: 5, name: 'Jemerson', positions: ['CB'], primaryPos: 'CB', rating: 81, nation: 'Brasil', nationCode: 'BR', flag: '🇧🇷', club: 'Monaco', year: '2017', tournament: 'champions' },
      { id: 'asm_9', number: 19, name: 'Djibril Sidibé', positions: ['RB'], primaryPos: 'RB', rating: 82, nation: 'Francia', nationCode: 'FR', flag: '🇫🇷', club: 'Monaco', year: '2017', tournament: 'champions' },
      { id: 'asm_10', number: 23, name: 'Benjamin Mendy', positions: ['LB'], primaryPos: 'LB', rating: 83, nation: 'Francia', nationCode: 'FR', flag: '🇫🇷', club: 'Monaco', year: '2017', tournament: 'champions' },
      { id: 'asm_11', number: 1, name: 'Danijel Subašić', positions: ['GK'], primaryPos: 'GK', rating: 85, nation: 'Croacia', nationCode: 'HR', flag: '🇭🇷', club: 'Monaco', year: '2017', tournament: 'champions' },
    ]
  },
  {
    id: 'asr_2001', name: 'AS Roma', shortCode: 'ASR', type: 'champions', year: '2001', tag: 'Serie A 2001', flag: '🇮🇹', country: 'Italy', tier: 'silver',
    players: [
      { id: 'asr_1', number: 10, name: 'Francesco Totti', positions: ['AM', 'ST'], primaryPos: 'AM', rating: 92, bonus: 1, nation: 'Italia', nationCode: 'IT', flag: '🇮🇹', club: 'Roma', year: '2001', tournament: 'champions' },
      { id: 'asr_2', number: 18, name: 'Gabriel Batistuta', positions: ['ST'], primaryPos: 'ST', rating: 91, nation: 'Argentina', nationCode: 'AR', flag: '🇦🇷', club: 'Roma', year: '2001', tournament: 'champions' },
      { id: 'asr_3', number: 9, name: 'Vincenzo Montella', positions: ['ST'], primaryPos: 'ST', rating: 86, nation: 'Italia', nationCode: 'IT', flag: '🇮🇹', club: 'Roma', year: '2001', tournament: 'champions' },
      { id: 'asr_4', number: 2, name: 'Cafú', positions: ['RB'], primaryPos: 'RB', rating: 90, nation: 'Brasil', nationCode: 'BR', flag: '🇧🇷', club: 'Roma', year: '2001', tournament: 'champions' },
      { id: 'asr_5', number: 32, name: 'Vincent Candela', positions: ['LB'], primaryPos: 'LB', rating: 86, nation: 'Francia', nationCode: 'FR', flag: '🇫🇷', club: 'Roma', year: '2001', tournament: 'champions' },
      { id: 'asr_6', number: 19, name: 'Walter Samuel', positions: ['CB'], primaryPos: 'CB', rating: 88, nation: 'Argentina', nationCode: 'AR', flag: '🇦🇷', club: 'Roma', year: '2001', tournament: 'champions' },
      { id: 'asr_7', number: 15, name: 'Jonathan Zebina', positions: ['CB', 'RB'], primaryPos: 'CB', rating: 81, nation: 'Francia', nationCode: 'FR', flag: '🇫🇷', club: 'Roma', year: '2001', tournament: 'champions' },
      { id: 'asr_8', number: 8, name: 'Hidetoshi Nakata', positions: ['AM', 'CM'], primaryPos: 'AM', rating: 85, nation: 'Japón', nationCode: 'JP', flag: '🇯🇵', club: 'Roma', year: '2001', tournament: 'champions' },
      { id: 'asr_9', number: 11, name: 'Emerson', positions: ['DM', 'CM'], primaryPos: 'DM', rating: 87, nation: 'Brasil', nationCode: 'BR', flag: '🇧🇷', club: 'Roma', year: '2001', tournament: 'champions' },
      { id: 'asr_10', number: 17, name: 'Damiano Tommasi', positions: ['CM', 'DM'], primaryPos: 'CM', rating: 84, nation: 'Italia', nationCode: 'IT', flag: '🇮🇹', club: 'Roma', year: '2001', tournament: 'champions' },
      { id: 'asr_11', number: 1, name: 'Francesco Antonioli', positions: ['GK'], primaryPos: 'GK', rating: 82, nation: 'Italia', nationCode: 'IT', flag: '🇮🇹', club: 'Roma', year: '2001', tournament: 'champions' },
    ]
  },
  {
    id: 'lei_2016', name: 'Leicester City FC', shortCode: 'LEI', type: 'champions', year: '2016', tag: 'Miracle 2016', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', country: 'England', tier: 'silver',
    players: [
      { id: 'lei_1', number: 9, name: 'Jamie Vardy', positions: ['ST'], primaryPos: 'ST', rating: 87, bonus: 1, nation: 'Inglaterra', nationCode: 'ENG', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', club: 'Leicester', year: '2016', tournament: 'champions' },
      { id: 'lei_2', number: 26, name: 'Riyad Mahrez', positions: ['RW', 'AM'], primaryPos: 'RW', rating: 88, nation: 'Argelia', nationCode: 'DZ', flag: '🇩🇿', club: 'Leicester', year: '2016', tournament: 'champions' },
      { id: 'lei_3', number: 14, name: 'N\'Golo Kanté', positions: ['DM', 'CM'], primaryPos: 'DM', rating: 89, nation: 'Francia', nationCode: 'FR', flag: '🇫🇷', club: 'Leicester', year: '2016', tournament: 'champions' },
      { id: 'lei_4', number: 4, name: 'Danny Drinkwater', positions: ['CM'], primaryPos: 'CM', rating: 82, nation: 'Inglaterra', nationCode: 'ENG', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', club: 'Leicester', year: '2016', tournament: 'champions' },
      { id: 'lei_5', number: 11, name: 'Marc Albrighton', positions: ['LW', 'AM'], primaryPos: 'LW', rating: 81, nation: 'Inglaterra', nationCode: 'ENG', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', club: 'Leicester', year: '2016', tournament: 'champions' },
      { id: 'lei_6', number: 5, name: 'Wes Morgan', positions: ['CB'], primaryPos: 'CB', rating: 83, nation: 'Jamaica', nationCode: 'JM', flag: '🇯🇲', club: 'Leicester', year: '2016', tournament: 'champions' },
      { id: 'lei_7', number: 6, name: 'Robert Huth', positions: ['CB'], primaryPos: 'CB', rating: 82, nation: 'Alemania', nationCode: 'DE', flag: '🇩🇪', club: 'Leicester', year: '2016', tournament: 'champions' },
      { id: 'lei_8', number: 17, name: 'Danny Simpson', positions: ['RB'], primaryPos: 'RB', rating: 79, nation: 'Inglaterra', nationCode: 'ENG', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', club: 'Leicester', year: '2016', tournament: 'champions' },
      { id: 'lei_9', number: 28, name: 'Christian Fuchs', positions: ['LB'], primaryPos: 'LB', rating: 81, nation: 'Austria', nationCode: 'AT', flag: '🇦🇹', club: 'Leicester', year: '2016', tournament: 'champions' },
      { id: 'lei_10', number: 1, name: 'Kasper Schmeichel', positions: ['GK'], primaryPos: 'GK', rating: 86, nation: 'Dinamarca', nationCode: 'DK', flag: '🇩🇰', club: 'Leicester', year: '2016', tournament: 'champions' },
      { id: 'lei_11', number: 20, name: 'Shinji Okazaki', positions: ['ST', 'AM'], primaryPos: 'ST', rating: 80, nation: 'Japón', nationCode: 'JP', flag: '🇯🇵', club: 'Leicester', year: '2016', tournament: 'champions' },
    ]
  },
  {
    id: 'tot_2019', name: 'Tottenham Hotspur', shortCode: 'TOT', type: 'champions', year: '2019', tag: 'Final 2019', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', country: 'England', tier: 'silver',
    players: [
      { id: 'tot_1', number: 10, name: 'Harry Kane', positions: ['ST'], primaryPos: 'ST', rating: 90, bonus: 1, nation: 'Inglaterra', nationCode: 'ENG', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', club: 'Tottenham', year: '2019', tournament: 'champions' },
      { id: 'tot_2', number: 7, name: 'Son Heung-min', positions: ['LW', 'ST'], primaryPos: 'LW', rating: 89, nation: 'Corea del Sur', nationCode: 'KR', flag: '🇰🇷', club: 'Tottenham', year: '2019', tournament: 'champions' },
      { id: 'tot_3', number: 23, name: 'Christian Eriksen', positions: ['AM', 'CM'], primaryPos: 'AM', rating: 88, nation: 'Dinamarca', nationCode: 'DK', flag: '🇩🇰', club: 'Tottenham', year: '2019', tournament: 'champions' },
      { id: 'tot_4', number: 20, name: 'Dele Alli', positions: ['AM', 'CM'], primaryPos: 'AM', rating: 85, nation: 'Inglaterra', nationCode: 'ENG', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', club: 'Tottenham', year: '2019', tournament: 'champions' },
      { id: 'tot_5', number: 17, name: 'Moussa Sissoko', positions: ['CM', 'RW'], primaryPos: 'CM', rating: 82, nation: 'Francia', nationCode: 'FR', flag: '🇫🇷', club: 'Tottenham', year: '2019', tournament: 'champions' },
      { id: 'tot_6', number: 8, name: 'Harry Winks', positions: ['CM', 'DM'], primaryPos: 'CM', rating: 80, nation: 'Inglaterra', nationCode: 'ENG', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', club: 'Tottenham', year: '2019', tournament: 'champions' },
      { id: 'tot_7', number: 4, name: 'Toby Alderweireld', positions: ['CB'], primaryPos: 'CB', rating: 87, nation: 'Bélgica', nationCode: 'BE', flag: '🇧🇪', club: 'Tottenham', year: '2019', tournament: 'champions' },
      { id: 'tot_8', number: 5, name: 'Jan Vertonghen', positions: ['CB', 'LB'], primaryPos: 'CB', rating: 87, nation: 'Bélgica', nationCode: 'BE', flag: '🇧🇪', club: 'Tottenham', year: '2019', tournament: 'champions' },
      { id: 'tot_9', number: 2, name: 'Kieran Trippier', positions: ['RB'], primaryPos: 'RB', rating: 83, nation: 'Inglaterra', nationCode: 'ENG', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', club: 'Tottenham', year: '2019', tournament: 'champions' },
      { id: 'tot_10', number: 3, name: 'Danny Rose', positions: ['LB'], primaryPos: 'LB', rating: 82, nation: 'Inglaterra', nationCode: 'ENG', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', club: 'Tottenham', year: '2019', tournament: 'champions' },
      { id: 'tot_11', number: 1, name: 'Hugo Lloris', positions: ['GK'], primaryPos: 'GK', rating: 88, nation: 'Francia', nationCode: 'FR', flag: '🇫🇷', club: 'Tottenham', year: '2019', tournament: 'champions' },
    ]
  },
  {
    id: 'sal_2019', name: 'Red Bull Salzburgo', shortCode: 'RBS', type: 'champions', year: '2019', tag: 'Champions 2019', flag: '🇦🇹', country: 'Austria', tier: 'bronze',
    players: [
      { id: 'sal_1', number: 30, name: 'Erling Haaland', positions: ['ST'], primaryPos: 'ST', rating: 85, bonus: 1, nation: 'Noruega', nationCode: 'NO', flag: '🇳🇴', club: 'Salzburg', year: '2019', tournament: 'champions' },
      { id: 'sal_2', number: 18, name: 'Takumi Minamino', positions: ['AM', 'RW'], primaryPos: 'AM', rating: 81, nation: 'Japón', nationCode: 'JP', flag: '🇯🇵', club: 'Salzburg', year: '2019', tournament: 'champions' },
      { id: 'sal_3', number: 9, name: 'Hwang Hee-chan', positions: ['ST', 'LW'], primaryPos: 'ST', rating: 80, nation: 'Corea del Sur', nationCode: 'KR', flag: '🇰🇷', club: 'Salzburg', year: '2019', tournament: 'champions' },
      { id: 'sal_4', number: 14, name: 'Dominik Szoboszlai', positions: ['AM', 'CM'], primaryPos: 'AM', rating: 82, nation: 'Hungría', nationCode: 'HU', flag: '🇭🇺', club: 'Salzburg', year: '2019', tournament: 'champions' },
      { id: 'sal_5', number: 16, name: 'Zlatko Junuzović', positions: ['CM'], primaryPos: 'CM', rating: 78, nation: 'Austria', nationCode: 'AT', flag: '🇦🇹', club: 'Salzburg', year: '2019', tournament: 'champions' },
      { id: 'sal_6', number: 45, name: 'Enoch Mwepu', positions: ['CM', 'DM'], primaryPos: 'CM', rating: 78, nation: 'Zambia', nationCode: 'ZM', flag: '🇿🇲', club: 'Salzburg', year: '2019', tournament: 'champions' },
      { id: 'sal_7', number: 39, name: 'Maximilian Wöber', positions: ['CB', 'LB'], primaryPos: 'CB', rating: 77, nation: 'Austria', nationCode: 'AT', flag: '🇦🇹', club: 'Salzburg', year: '2019', tournament: 'champions' },
      { id: 'sal_8', number: 6, name: 'Jérôme Onguéné', positions: ['CB'], primaryPos: 'CB', rating: 76, nation: 'Camerún', nationCode: 'CM', flag: '🇨🇲', club: 'Salzburg', year: '2019', tournament: 'champions' },
      { id: 'sal_9', number: 43, name: 'Rasmus Kristensen', positions: ['RB'], primaryPos: 'RB', rating: 77, nation: 'Dinamarca', nationCode: 'DK', flag: '🇩🇰', club: 'Salzburg', year: '2019', tournament: 'champions' },
      { id: 'sal_10', number: 17, name: 'Andreas Ulmer', positions: ['LB'], primaryPos: 'LB', rating: 76, nation: 'Austria', nationCode: 'AT', flag: '🇦🇹', club: 'Salzburg', year: '2019', tournament: 'champions' },
      { id: 'sal_11', number: 1, name: 'Cican Stankovic', positions: ['GK'], primaryPos: 'GK', rating: 77, nation: 'Austria', nationCode: 'AT', flag: '🇦🇹', club: 'Salzburg', year: '2019', tournament: 'champions' },
    ]
  }
];

