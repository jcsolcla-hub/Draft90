const fs = require('fs');
const path = require('path');

// Real teams dataset with authentic famous players (1 or max 2 positions per player)
const MASSIVE_REAL_TEAMS = [
  // --- CLUBES ESPAÑA Y EUROPA ---
  {
    id: 'rma_2002', name: 'Real Madrid', shortCode: 'RMA', type: 'champions', year: '2002', tag: 'Champions 2002', flag: '🇪🇸', country: 'Spain', tier: 'gold',
    players: [
      { name: 'Zinedine Zidane', pos: ['AM', 'CM'], rating: 96, bonus: 1, num: 5, nation: 'Francia', code: 'FR', flag: '🇫🇷', club: 'Real Madrid' },
      { name: 'Raúl González', pos: ['ST', 'AM'], rating: 93, num: 7, nation: 'España', code: 'ES', flag: '🇪🇸', club: 'Real Madrid' },
      { name: 'Luís Figo', pos: ['RW', 'AM'], rating: 93, num: 10, nation: 'Portugal', code: 'PT', flag: '🇵🇹', club: 'Real Madrid' },
      { name: 'Roberto Carlos', pos: ['LB'], rating: 93, num: 3, nation: 'Brasil', code: 'BR', flag: '🇧🇷', club: 'Real Madrid' },
      { name: 'Fernando Hierro', pos: ['CB', 'DM'], rating: 90, num: 4, nation: 'España', code: 'ES', flag: '🇪🇸', club: 'Real Madrid' },
      { name: 'Iker Casillas', pos: ['GK'], rating: 90, num: 1, nation: 'España', code: 'ES', flag: '🇪🇸', club: 'Real Madrid' },
      { name: 'Claude Makélélé', pos: ['DM'], rating: 89, num: 24, nation: 'Francia', code: 'FR', flag: '🇫🇷', club: 'Real Madrid' },
      { name: 'Fernando Morientes', pos: ['ST'], rating: 86, num: 9, nation: 'España', code: 'ES', flag: '🇪🇸', club: 'Real Madrid' },
      { name: 'Míchel Salgado', pos: ['RB'], rating: 85, num: 2, nation: 'España', code: 'ES', flag: '🇪🇸', club: 'Real Madrid' },
      { name: 'Guti', pos: ['CM', 'AM'], rating: 86, num: 14, nation: 'España', code: 'ES', flag: '🇪🇸', club: 'Real Madrid' },
      { name: 'Iván Helguera', pos: ['CB', 'DM'], rating: 86, num: 6, nation: 'España', code: 'ES', flag: '🇪🇸', club: 'Real Madrid' }
    ]
  },
  {
    id: 'fcb_1992', name: 'FC Barcelona', shortCode: 'FCB', type: 'champions', year: '1992', tag: 'Champions 1992', flag: '🇪🇸', country: 'Spain', tier: 'gold',
    players: [
      { name: 'Hristo Stoichkov', pos: ['ST', 'LW'], rating: 93, bonus: 1, num: 8, nation: 'Bulgaria', code: 'BG', flag: '🇧🇬', club: 'FC Barcelona' },
      { name: 'Ronald Koeman', pos: ['CB', 'DM'], rating: 91, num: 4, nation: 'Países Bajos', code: 'NL', flag: '🇳🇱', club: 'FC Barcelona' },
      { name: 'Michael Laudrup', pos: ['AM', 'LW'], rating: 93, num: 9, nation: 'Dinamarca', code: 'DK', flag: '🇩🇰', club: 'FC Barcelona' },
      { name: 'Pep Guardiola', pos: ['DM', 'CM'], rating: 88, num: 3, nation: 'España', code: 'ES', flag: '🇪🇸', club: 'FC Barcelona' },
      { name: 'Andoni Zubizarreta', pos: ['GK'], rating: 88, num: 1, nation: 'España', code: 'ES', flag: '🇪🇸', club: 'FC Barcelona' },
      { name: 'Bakero', pos: ['AM', 'CM'], rating: 87, num: 6, nation: 'España', code: 'ES', flag: '🇪🇸', club: 'FC Barcelona' },
      { name: 'Txiki Begiristain', pos: ['LW', 'RW'], rating: 86, num: 11, nation: 'España', code: 'ES', flag: '🇪🇸', club: 'FC Barcelona' },
      { name: 'Albert Ferrer', pos: ['RB'], rating: 84, num: 2, nation: 'España', code: 'ES', flag: '🇪🇸', club: 'FC Barcelona' },
      { name: 'Eusebio Sacristán', pos: ['CM'], rating: 84, num: 10, nation: 'España', code: 'ES', flag: '🇪🇸', club: 'FC Barcelona' },
      { name: 'Nando', pos: ['CB'], rating: 83, num: 5, nation: 'España', code: 'ES', flag: '🇪🇸', club: 'FC Barcelona' },
      { name: 'Juan Carlos', pos: ['LB'], rating: 82, num: 12, nation: 'España', code: 'ES', flag: '🇪🇸', club: 'FC Barcelona' }
    ]
  },
  {
    id: 'dep_2000', name: 'Deportivo La Coruña', shortCode: 'DEP', type: 'champions', year: '2000', tag: 'Champions 2000', flag: '🇪🇸', country: 'Spain', tier: 'gold',
    players: [
      { name: 'Djalminha', pos: ['AM'], rating: 91, bonus: 1, num: 8, nation: 'Brasil', code: 'BR', flag: '🇧🇷', club: 'Deportivo' },
      { name: 'Roy Makaay', pos: ['ST'], rating: 90, num: 7, nation: 'Países Bajos', code: 'NL', flag: '🇳🇱', club: 'Deportivo' },
      { name: 'Fran', pos: ['LW', 'AM'], rating: 88, num: 10, nation: 'España', code: 'ES', flag: '🇪🇸', club: 'Deportivo' },
      { name: 'Mauro Silva', pos: ['DM'], rating: 91, num: 6, nation: 'Brasil', code: 'BR', flag: '🇧🇷', club: 'Deportivo' },
      { name: 'Juan Carlos Valerón', pos: ['AM', 'CM'], rating: 89, num: 21, nation: 'España', code: 'ES', flag: '🇪🇸', club: 'Deportivo' },
      { name: 'Noureddine Naybet', pos: ['CB'], rating: 87, num: 4, nation: 'Marruecos', code: 'MA', flag: '🇲🇦', club: 'Deportivo' },
      { name: 'Donato', pos: ['CB', 'DM'], rating: 86, num: 5, nation: 'España', code: 'ES', flag: '🇪🇸', club: 'Deportivo' },
      { name: 'Manuel Pablo', pos: ['RB'], rating: 86, num: 2, nation: 'España', code: 'ES', flag: '🇪🇸', club: 'Deportivo' },
      { name: 'Enrique Romero', pos: ['LB'], rating: 84, num: 3, nation: 'España', code: 'ES', flag: '🇪🇸', club: 'Deportivo' },
      { name: 'Jacques Songo\'o', pos: ['GK'], rating: 85, num: 1, nation: 'Camerún', code: 'CM', flag: '🇨🇲', club: 'Deportivo' },
      { name: 'Victor Sánchez', pos: ['RW'], rating: 84, num: 18, nation: 'España', code: 'ES', flag: '🇪🇸', club: 'Deportivo' }
    ]
  },
  {
    id: 'vil_2021', name: 'Villarreal CF', shortCode: 'VIL', type: 'champions', year: '2021', tag: 'Champions 2021', flag: '🇪🇸', country: 'Spain', tier: 'silver',
    players: [
      { name: 'Gerard Moreno', pos: ['ST', 'RW'], rating: 88, bonus: 1, num: 7, nation: 'España', code: 'ES', flag: '🇪🇸', club: 'Villarreal' },
      { name: 'Dani Parejo', pos: ['CM'], rating: 86, num: 5, nation: 'España', code: 'ES', flag: '🇪🇸', club: 'Villarreal' },
      { name: 'Pau Torres', pos: ['CB'], rating: 86, num: 4, nation: 'España', code: 'ES', flag: '🇪🇸', club: 'Villarreal' },
      { name: 'Raúl Albiol', pos: ['CB'], rating: 84, num: 3, nation: 'España', code: 'ES', flag: '🇪🇸', club: 'Villarreal' },
      { name: 'Étienne Capoue', pos: ['DM'], rating: 84, num: 6, nation: 'Francia', code: 'FR', flag: '🇫🇷', club: 'Villarreal' },
      { name: 'Francis Coquelin', pos: ['DM', 'CM'], rating: 82, num: 19, nation: 'Francia', code: 'FR', flag: '🇫🇷', club: 'Villarreal' },
      { name: 'Alfonso Pedraza', pos: ['LB'], rating: 82, num: 24, nation: 'España', code: 'ES', flag: '🇪🇸', club: 'Villarreal' },
      { name: 'Juan Foyth', pos: ['RB', 'CB'], rating: 83, num: 8, nation: 'Argentina', code: 'AR', flag: '🇦🇷', club: 'Villarreal' },
      { name: 'Gerónimo Rulli', pos: ['GK'], rating: 84, num: 13, nation: 'Argentina', code: 'AR', flag: '🇦🇷', club: 'Villarreal' },
      { name: 'Yeremy Pino', pos: ['RW', 'LW'], rating: 81, num: 21, nation: 'España', code: 'ES', flag: '🇪🇸', club: 'Villarreal' },
      { name: 'Manu Trigueros', pos: ['CM'], rating: 82, num: 14, nation: 'España', code: 'ES', flag: '🇪🇸', club: 'Villarreal' }
    ]
  },
  {
    id: 'gir_2024', name: 'Girona FC', shortCode: 'GIR', type: 'champions', year: '2024', tag: 'Champions 2024', flag: '🇪🇸', country: 'Spain', tier: 'bronze',
    players: [
      { name: 'Artem Dovbyk', pos: ['ST'], rating: 85, bonus: 1, num: 9, nation: 'Ucrania', code: 'UA', flag: '🇺🇦', club: 'Girona' },
      { name: 'Sávio (Savinho)', pos: ['LW', 'RW'], rating: 85, num: 16, nation: 'Brasil', code: 'BR', flag: '🇧🇷', club: 'Girona' },
      { name: 'Viktor Tsygankov', pos: ['RW', 'AM'], rating: 84, num: 8, nation: 'Ucrania', code: 'UA', flag: '🇺🇦', club: 'Girona' },
      { name: 'Aleix García', pos: ['CM', 'DM'], rating: 85, num: 14, nation: 'España', code: 'ES', flag: '🇪🇸', club: 'Girona' },
      { name: 'Yángel Herrera', pos: ['CM'], rating: 82, num: 21, nation: 'Venezuela', code: 'VE', flag: '🇻🇪', club: 'Girona' },
      { name: 'Iván Martín', pos: ['CM', 'AM'], rating: 81, num: 23, nation: 'España', code: 'ES', flag: '🇪🇸', club: 'Girona' },
      { name: 'Miguel Gutiérrez', pos: ['LB'], rating: 83, num: 3, nation: 'España', code: 'ES', flag: '🇪🇸', club: 'Girona' },
      { name: 'Yan Couto', pos: ['RB', 'RW'], rating: 82, num: 20, nation: 'Brasil', code: 'BR', flag: '🇧🇷', club: 'Girona' },
      { name: 'Daley Blind', pos: ['CB', 'LB'], rating: 82, num: 17, nation: 'Países Bajos', code: 'NL', flag: '🇳🇱', club: 'Girona' },
      { name: 'David López', pos: ['CB', 'DM'], rating: 80, num: 5, nation: 'España', code: 'ES', flag: '🇪🇸', club: 'Girona' },
      { name: 'Paulo Gazzaniga', pos: ['GK'], rating: 82, num: 13, nation: 'Argentina', code: 'AR', flag: '🇦🇷', club: 'Girona' }
    ]
  },

  // --- PREMIER LEAGUE ---
  {
    id: 'mci_2023', name: 'Manchester City', shortCode: 'MCI', type: 'champions', year: '2023', tag: 'Champions 2023', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', country: 'England', tier: 'legendary',
    players: [
      { name: 'Erling Haaland', pos: ['ST'], rating: 96, bonus: 1, num: 9, nation: 'Noruega', code: 'NO', flag: '🇳🇴', club: 'Man City' },
      { name: 'Kevin De Bruyne', pos: ['AM', 'CM'], rating: 97, num: 17, nation: 'Bélgica', code: 'BE', flag: '🇧🇪', club: 'Man City' },
      { name: 'Rodri', pos: ['DM', 'CM'], rating: 96, num: 16, nation: 'España', code: 'ES', flag: '🇪🇸', club: 'Man City' },
      { name: 'Bernardo Silva', pos: ['RW', 'CM'], rating: 92, num: 20, nation: 'Portugal', code: 'PT', flag: '🇵🇹', club: 'Man City' },
      { name: 'Ilkay Gündogan', pos: ['CM', 'AM'], rating: 91, num: 8, nation: 'Alemania', code: 'DE', flag: '🇩🇪', club: 'Man City' },
      { name: 'Jack Grealish', pos: ['LW'], rating: 88, num: 10, nation: 'Inglaterra', code: 'ENG', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', club: 'Man City' },
      { name: 'Ruben Dias', pos: ['CB'], rating: 92, num: 3, nation: 'Portugal', code: 'PT', flag: '🇵🇹', club: 'Man City' },
      { name: 'John Stones', pos: ['CB', 'DM'], rating: 90, num: 5, nation: 'Inglaterra', code: 'ENG', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', club: 'Man City' },
      { name: 'Kyle Walker', pos: ['RB'], rating: 89, num: 2, nation: 'Inglaterra', code: 'ENG', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', club: 'Man City' },
      { name: 'Manuel Akanji', pos: ['CB', 'LB'], rating: 87, num: 25, nation: 'Suiza', code: 'CH', flag: '🇨🇭', club: 'Man City' },
      { name: 'Ederson', pos: ['GK'], rating: 90, num: 31, nation: 'Brasil', code: 'BR', flag: '🇧🇷', club: 'Man City' }
    ]
  },
  {
    id: 'mun_1999', name: 'Manchester United', shortCode: 'MUN', type: 'champions', year: '1999', tag: 'Champions 1999', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', country: 'England', tier: 'legendary',
    players: [
      { name: 'Peter Schmeichel', pos: ['GK'], rating: 94, bonus: 1, num: 1, nation: 'Dinamarca', code: 'DK', flag: '🇩🇰', club: 'Man United' },
      { name: 'David Beckham', pos: ['RW', 'RM'], rating: 93, num: 7, nation: 'Inglaterra', code: 'ENG', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', club: 'Man United' },
      { name: 'Roy Keane', pos: ['CM', 'DM'], rating: 93, num: 16, nation: 'Irlanda', code: 'IE', flag: '🇮🇪', club: 'Man United' },
      { name: 'Paul Scholes', pos: ['CM', 'AM'], rating: 93, num: 18, nation: 'Inglaterra', code: 'ENG', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', club: 'Man United' },
      { name: 'Ryan Giggs', pos: ['LW'], rating: 93, num: 11, nation: 'Gales', code: 'WAL', flag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿', club: 'Man United' },
      { name: 'Dwight Yorke', pos: ['ST'], rating: 90, num: 19, nation: 'Trinidad y Tobago', code: 'TT', flag: '🇹🇹', club: 'Man United' },
      { name: 'Andy Cole', pos: ['ST'], rating: 89, num: 9, nation: 'Inglaterra', code: 'ENG', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', club: 'Man United' },
      { name: 'Jaap Stam', pos: ['CB'], rating: 92, num: 6, nation: 'Países Bajos', code: 'NL', flag: '🇳🇱', club: 'Man United' },
      { name: 'Ronny Johnsen', pos: ['CB'], rating: 85, num: 5, nation: 'Noruega', code: 'NO', flag: '🇳🇴', club: 'Man United' },
      { name: 'Gary Neville', pos: ['RB'], rating: 88, num: 2, nation: 'Inglaterra', code: 'ENG', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', club: 'Man United' },
      { name: 'Denis Irwin', pos: ['LB'], rating: 87, num: 3, nation: 'Irlanda', code: 'IE', flag: '🇮🇪', club: 'Man United' }
    ]
  },
  {
    id: 'tot_2019', name: 'Tottenham Hotspur', shortCode: 'TOT', type: 'champions', year: '2019', tag: 'Champions 2019', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', country: 'England', tier: 'gold',
    players: [
      { name: 'Harry Kane', pos: ['ST'], rating: 93, bonus: 1, num: 10, nation: 'Inglaterra', code: 'ENG', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', club: 'Tottenham' },
      { name: 'Son Heung-min', pos: ['LW', 'ST'], rating: 91, num: 7, nation: 'Corea del Sur', code: 'KR', flag: '🇰🇷', club: 'Tottenham' },
      { name: 'Christian Eriksen', pos: ['AM', 'CM'], rating: 89, num: 23, nation: 'Dinamarca', code: 'DK', flag: '🇩🇰', club: 'Tottenham' },
      { name: 'Dele Alli', pos: ['AM', 'ST'], rating: 87, num: 20, nation: 'Inglaterra', code: 'ENG', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', club: 'Tottenham' },
      { name: 'Moussa Sissoko', pos: ['CM'], rating: 84, num: 17, nation: 'Francia', code: 'FR', flag: '🇫🇷', club: 'Tottenham' },
      { name: 'Harry Winks', pos: ['CM', 'DM'], rating: 82, num: 8, nation: 'Inglaterra', code: 'ENG', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', club: 'Tottenham' },
      { name: 'Toby Alderweireld', pos: ['CB'], rating: 88, num: 4, nation: 'Bélgica', code: 'BE', flag: '🇧🇪', club: 'Tottenham' },
      { name: 'Jan Vertonghen', pos: ['CB', 'LB'], rating: 88, num: 5, nation: 'Bélgica', code: 'BE', flag: '🇧🇪', club: 'Tottenham' },
      { name: 'Kieran Trippier', pos: ['RB'], rating: 85, num: 2, nation: 'Inglaterra', code: 'ENG', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', club: 'Tottenham' },
      { name: 'Danny Rose', pos: ['LB'], rating: 83, num: 3, nation: 'Inglaterra', code: 'ENG', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', club: 'Tottenham' },
      { name: 'Hugo Lloris', pos: ['GK'], rating: 89, num: 1, nation: 'Francia', code: 'FR', flag: '🇫🇷', club: 'Tottenham' }
    ]
  },
  {
    id: 'wes_2023', name: 'West Ham United', shortCode: 'WHU', type: 'champions', year: '2023', tag: 'Champions 2023', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', country: 'England', tier: 'silver',
    players: [
      { name: 'Declan Rice', pos: ['DM', 'CM'], rating: 88, bonus: 1, num: 4, nation: 'Inglaterra', code: 'ENG', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', club: 'West Ham' },
      { name: 'Lucas Paquetá', pos: ['AM', 'CM'], rating: 86, num: 11, nation: 'Brasil', code: 'BR', flag: '🇧🇷', club: 'West Ham' },
      { name: 'Jarrod Bowen', pos: ['RW', 'ST'], rating: 85, num: 20, nation: 'Inglaterra', code: 'ENG', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', club: 'West Ham' },
      { name: 'Michail Antonio', pos: ['ST'], rating: 83, num: 9, nation: 'Jamaica', code: 'JM', flag: '🇯🇲', club: 'West Ham' },
      { name: 'Saïd Benrahma', pos: ['LW'], rating: 82, num: 22, nation: 'Argelia', code: 'DZ', flag: '🇩🇿', club: 'West Ham' },
      { name: 'Tomas Soucek', pos: ['CM', 'DM'], rating: 84, num: 28, nation: 'República Checa', code: 'CZ', flag: '🇨🇿', club: 'West Ham' },
      { name: 'Kurt Zouma', pos: ['CB'], rating: 83, num: 4, nation: 'Francia', code: 'FR', flag: '🇫🇷', club: 'West Ham' },
      { name: 'Nayef Aguerd', pos: ['CB'], rating: 83, num: 27, nation: 'Marruecos', code: 'MA', flag: '🇲🇦', club: 'West Ham' },
      { name: 'Vladimir Coufal', pos: ['RB'], rating: 82, num: 5, nation: 'República Checa', code: 'CZ', flag: '🇨🇿', club: 'West Ham' },
      { name: 'Emerson Palmieri', pos: ['LB'], rating: 81, num: 33, nation: 'Italia', code: 'IT', flag: '🇮🇹', club: 'West Ham' },
      { name: 'Lukasz Fabianski', pos: ['GK'], rating: 83, num: 1, nation: 'Polonia', code: 'PL', flag: '🇵🇱', club: 'West Ham' }
    ]
  },

  // --- SERIE A Y LIGUE 1 ---
  {
    id: 'juv_1996', name: 'Juventus FC', shortCode: 'JUV', type: 'champions', year: '1996', tag: 'Champions 1996', flag: '🇮🇹', country: 'Italy', tier: 'legendary',
    players: [
      { name: 'Alessandro Del Piero', pos: ['ST', 'AM'], rating: 94, bonus: 1, num: 10, nation: 'Italia', code: 'IT', flag: '🇮🇹', club: 'Juventus' },
      { name: 'Gianluca Vialli', pos: ['ST'], rating: 90, num: 9, nation: 'Italia', code: 'IT', flag: '🇮🇹', club: 'Juventus' },
      { name: 'Fabrizio Ravanelli', pos: ['ST', 'LW'], rating: 88, num: 11, nation: 'Italia', code: 'IT', flag: '🇮🇹', club: 'Juventus' },
      { name: 'Didier Deschamps', pos: ['DM', 'CM'], rating: 91, num: 14, nation: 'Francia', code: 'FR', flag: '🇫🇷', club: 'Juventus' },
      { name: 'Antonio Conte', pos: ['CM'], rating: 87, num: 8, nation: 'Italia', code: 'IT', flag: '🇮🇹', club: 'Juventus' },
      { name: 'Paulo Sousa', pos: ['CM'], rating: 86, num: 6, nation: 'Portugal', code: 'PT', flag: '🇵🇹', club: 'Juventus' },
      { name: 'Ciro Ferrara', pos: ['CB'], rating: 90, num: 2, nation: 'Italia', code: 'IT', flag: '🇮🇹', club: 'Juventus' },
      { name: 'Pietro Vierchowod', pos: ['CB'], rating: 88, num: 5, nation: 'Italia', code: 'IT', flag: '🇮🇹', club: 'Juventus' },
      { name: 'Moreno Torricelli', pos: ['RB'], rating: 85, num: 3, nation: 'Italia', code: 'IT', flag: '🇮🇹', club: 'Juventus' },
      { name: 'Gianluca Pessotto', pos: ['LB'], rating: 85, num: 17, nation: 'Italia', code: 'IT', flag: '🇮🇹', club: 'Juventus' },
      { name: 'Angelo Peruzzi', pos: ['GK'], rating: 90, num: 1, nation: 'Italia', code: 'IT', flag: '🇮🇹', club: 'Juventus' }
    ]
  },
  {
    id: 'rom_2001', name: 'AS Roma', shortCode: 'ROM', type: 'champions', year: '2001', tag: 'Champions 2001', flag: '🇮🇹', country: 'Italy', tier: 'gold',
    players: [
      { name: 'Francesco Totti', pos: ['AM', 'ST'], rating: 95, bonus: 1, num: 10, nation: 'Italia', code: 'IT', flag: '🇮🇹', club: 'Roma' },
      { name: 'Gabriel Batistuta', pos: ['ST'], rating: 93, num: 20, nation: 'Argentina', code: 'AR', flag: '🇦🇷', club: 'Roma' },
      { name: 'Vincenzo Montella', pos: ['ST'], rating: 88, num: 9, nation: 'Italia', code: 'IT', flag: '🇮🇹', club: 'Roma' },
      { name: 'Cafu', pos: ['RB'], rating: 92, num: 2, nation: 'Brasil', code: 'BR', flag: '🇧🇷', club: 'Roma' },
      { name: 'Vincent Candela', pos: ['LB'], rating: 87, num: 32, nation: 'Francia', code: 'FR', flag: '🇫🇷', club: 'Roma' },
      { name: 'Damiano Tommasi', pos: ['DM', 'CM'], rating: 86, num: 17, nation: 'Italia', code: 'IT', flag: '🇮🇹', club: 'Roma' },
      { name: 'Emerson', pos: ['CM', 'DM'], rating: 88, num: 11, nation: 'Brasil', code: 'BR', flag: '🇧🇷', club: 'Roma' },
      { name: 'Walter Samuel', pos: ['CB'], rating: 89, num: 19, nation: 'Argentina', code: 'AR', flag: '🇦🇷', club: 'Roma' },
      { name: 'Aldair', pos: ['CB'], rating: 88, num: 6, nation: 'Brasil', code: 'BR', flag: '🇧🇷', club: 'Roma' },
      { name: 'Jonathan Zebina', pos: ['CB', 'RB'], rating: 83, num: 15, nation: 'Francia', code: 'FR', flag: '🇫🇷', club: 'Roma' },
      { name: 'Francesco Antonioli', pos: ['GK'], rating: 84, num: 1, nation: 'Italia', code: 'IT', flag: '🇮🇹', club: 'Roma' }
    ]
  },
  {
    id: 'mon_2017', name: 'AS Monaco', shortCode: 'ASM', type: 'champions', year: '2017', tag: 'Champions 2017', flag: '🇫🇷', country: 'France', tier: 'gold',
    players: [
      { name: 'Kylian Mbappé', pos: ['ST', 'LW'], rating: 92, bonus: 1, num: 29, nation: 'Francia', code: 'FR', flag: '🇫🇷', club: 'Monaco' },
      { name: 'Radamel Falcao', pos: ['ST'], rating: 90, num: 9, nation: 'Colombia', code: 'CO', flag: '🇨🇴', club: 'Monaco' },
      { name: 'Bernardo Silva', pos: ['RW', 'AM'], rating: 89, num: 10, nation: 'Portugal', code: 'PT', flag: '🇵🇹', club: 'Monaco' },
      { name: 'Thomas Lemar', pos: ['LW', 'AM'], rating: 87, num: 27, nation: 'Francia', code: 'FR', flag: '🇫🇷', club: 'Monaco' },
      { name: 'Fabinho', pos: ['DM', 'RB'], rating: 88, num: 2, nation: 'Brasil', code: 'BR', flag: '🇧🇷', club: 'Monaco' },
      { name: 'Tiemoué Bakayoko', pos: ['DM', 'CM'], rating: 85, num: 14, nation: 'Francia', code: 'FR', flag: '🇫🇷', club: 'Monaco' },
      { name: 'Benjamin Mendy', pos: ['LB'], rating: 86, num: 23, nation: 'Francia', code: 'FR', flag: '🇫🇷', club: 'Monaco' },
      { name: 'Djibril Sidibé', pos: ['RB'], rating: 84, num: 19, nation: 'Francia', code: 'FR', flag: '🇫🇷', club: 'Monaco' },
      { name: 'Kamil Glik', pos: ['CB'], rating: 86, num: 25, nation: 'Polonia', code: 'PL', flag: '🇵🇱', club: 'Monaco' },
      { name: 'Jemerson', pos: ['CB'], rating: 83, num: 5, nation: 'Brasil', code: 'BR', flag: '🇧🇷', club: 'Monaco' },
      { name: 'Danijel Subašić', pos: ['GK'], rating: 86, num: 1, nation: 'Croacia', code: 'HR', flag: '🇭🇷', club: 'Monaco' }
    ]
  },

  // --- RESTO DE EUROPA Y AMÉRICA ---
  {
    id: 'aja_1995', name: 'AFC Ajax', shortCode: 'AJX', type: 'champions', year: '1995', tag: 'Champions 1995', flag: '🇳🇱', country: 'Netherlands', tier: 'legendary',
    players: [
      { name: 'Jari Litmanen', pos: ['AM', 'ST'], rating: 93, bonus: 1, num: 10, nation: 'Finlandia', code: 'FI', flag: '🇫🇮', club: 'Ajax' },
      { name: 'Patrick Kluivert', pos: ['ST'], rating: 90, num: 15, nation: 'Países Bajos', code: 'NL', flag: '🇳🇱', club: 'Ajax' },
      { name: 'Clarence Seedorf', pos: ['CM', 'AM'], rating: 91, num: 8, nation: 'Países Bajos', code: 'NL', flag: '🇳🇱', club: 'Ajax' },
      { name: 'Edgar Davids', pos: ['DM', 'CM'], rating: 91, num: 6, nation: 'Países Bajos', code: 'NL', flag: '🇳🇱', club: 'Ajax' },
      { name: 'Frank de Boer', pos: ['CB', 'LB'], rating: 90, num: 4, nation: 'Países Bajos', code: 'NL', flag: '🇳🇱', club: 'Ajax' },
      { name: 'Danny Blind', pos: ['CB', 'DM'], rating: 89, num: 3, nation: 'Países Bajos', code: 'NL', flag: '🇳🇱', club: 'Ajax' },
      { name: 'Michael Reiziger', pos: ['RB'], rating: 87, num: 2, nation: 'Países Bajos', code: 'NL', flag: '🇳🇱', club: 'Ajax' },
      { name: 'Frank Rijkaard', pos: ['CB', 'DM'], rating: 93, num: 5, nation: 'Países Bajos', code: 'NL', flag: '🇳🇱', club: 'Ajax' },
      { name: 'Finidi George', pos: ['RW'], rating: 87, num: 7, nation: 'Nigeria', code: 'NG', flag: '🇳🇬', club: 'Ajax' },
      { name: 'Marc Overmars', pos: ['LW'], rating: 90, num: 11, nation: 'Países Bajos', code: 'NL', flag: '🇳🇱', club: 'Ajax' },
      { name: 'Edwin van der Sar', pos: ['GK'], rating: 92, num: 1, nation: 'Países Bajos', code: 'NL', flag: '🇳🇱', club: 'Ajax' }
    ]
  },
  {
    id: 'ben_1962', name: 'SL Benfica', shortCode: 'BEN', type: 'champions', year: '1962', tag: 'Champions 1962', flag: '🇵🇹', country: 'Portugal', tier: 'legendary',
    players: [
      { name: 'Eusébio', pos: ['ST', 'AM'], rating: 97, bonus: 1, num: 10, nation: 'Portugal', code: 'PT', flag: '🇵🇹', club: 'Benfica' },
      { name: 'Mário Coluna', pos: ['CM', 'AM'], rating: 92, num: 8, nation: 'Portugal', code: 'PT', flag: '🇵🇹', club: 'Benfica' },
      { name: 'José Águas', pos: ['ST'], rating: 89, num: 9, nation: 'Portugal', code: 'PT', flag: '🇵🇹', club: 'Benfica' },
      { name: 'José Augusto', pos: ['RW'], rating: 88, num: 7, nation: 'Portugal', code: 'PT', flag: '🇵🇹', club: 'Benfica' },
      { name: 'António Simões', pos: ['LW'], rating: 87, num: 11, nation: 'Portugal', code: 'PT', flag: '🇵🇹', club: 'Benfica' },
      { name: 'Fernando Cruz', pos: ['LB'], rating: 85, num: 3, nation: 'Portugal', code: 'PT', flag: '🇵🇹', club: 'Benfica' },
      { name: 'Mário Lino', pos: ['RB'], rating: 84, num: 2, nation: 'Portugal', code: 'PT', flag: '🇵🇹', club: 'Benfica' },
      { name: 'Germano', pos: ['CB'], rating: 88, num: 4, nation: 'Portugal', code: 'PT', flag: '🇵🇹', club: 'Benfica' },
      { name: 'Angelo Martins', pos: ['CB'], rating: 84, num: 5, nation: 'Portugal', code: 'PT', flag: '🇵🇹', club: 'Benfica' },
      { name: 'Costa Pereira', pos: ['GK'], rating: 87, num: 1, nation: 'Portugal', code: 'PT', flag: '🇵🇹', club: 'Benfica' },
      { name: 'Dominic Cavem', pos: ['CM'], rating: 83, num: 6, nation: 'Portugal', code: 'PT', flag: '🇵🇹', club: 'Benfica' }
    ]
  },
  {
    id: 'gal_2000', name: 'Galatasaray SK', shortCode: 'GAL', type: 'champions', year: '2000', tag: 'Champions 2000', flag: '🇹🇷', country: 'Turkey', tier: 'gold',
    players: [
      { name: 'Gheorghe Hagi', pos: ['AM'], rating: 94, bonus: 1, num: 10, nation: 'Rumanía', code: 'RO', flag: '🇷🇴', club: 'Galatasaray' },
      { name: 'Hakan Şükür', pos: ['ST'], rating: 89, num: 9, nation: 'Turquía', code: 'TR', flag: '🇹🇷', club: 'Galatasaray' },
      { name: 'Cláudio Taffarel', pos: ['GK'], rating: 90, num: 1, nation: 'Brasil', code: 'BR', flag: '🇧🇷', club: 'Galatasaray' },
      { name: 'Gheorghe Popescu', pos: ['CB', 'DM'], rating: 88, num: 6, nation: 'Rumanía', code: 'RO', flag: '🇷🇴', club: 'Galatasaray' },
      { name: 'Okan Buruk', pos: ['RW', 'CM'], rating: 84, num: 7, nation: 'Turquía', code: 'TR', flag: '🇹🇷', club: 'Galatasaray' },
      { name: 'Suat Kaya', pos: ['DM'], rating: 83, num: 8, nation: 'Turquía', code: 'TR', flag: '🇹🇷', club: 'Galatasaray' },
      { name: 'Ümit Davala', pos: ['RB', 'RW'], rating: 85, num: 22, nation: 'Turquía', code: 'TR', flag: '🇹🇷', club: 'Galatasaray' },
      { name: 'Hakan Ünsal', pos: ['LB'], rating: 83, num: 5, nation: 'Turquía', code: 'TR', flag: '🇹🇷', club: 'Galatasaray' },
      { name: 'Bülent Korkmaz', pos: ['CB'], rating: 86, num: 3, nation: 'Turquía', code: 'TR', flag: '🇹🇷', club: 'Galatasaray' },
      { name: 'Arif Erdem', pos: ['ST', 'AM'], rating: 83, num: 6, nation: 'Turquía', code: 'TR', flag: '🇹🇷', club: 'Galatasaray' },
      { name: 'Ergün Penbe', pos: ['CM', 'LB'], rating: 83, num: 67, nation: 'Turquía', code: 'TR', flag: '🇹🇷', club: 'Galatasaray' }
    ]
  },
  {
    id: 'cel_2003', name: 'Celtic FC', shortCode: 'CEL', type: 'champions', year: '2003', tag: 'Champions 2003', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', country: 'Scotland', tier: 'silver',
    players: [
      { name: 'Henrik Larsson', pos: ['ST'], rating: 91, bonus: 1, num: 7, nation: 'Suecia', code: 'SE', flag: '🇸🇪', club: 'Celtic' },
      { name: 'Chris Sutton', pos: ['ST'], rating: 85, num: 9, nation: 'Inglaterra', code: 'ENG', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', club: 'Celtic' },
      { name: 'Stiliyan Petrov', pos: ['CM'], rating: 85, num: 19, nation: 'Bulgaria', code: 'BG', flag: '🇧🇬', club: 'Celtic' },
      { name: 'Neil Lennon', pos: ['DM'], rating: 84, num: 18, nation: 'Irlanda del Norte', code: 'NIR', flag: '🇬🇧', club: 'Celtic' },
      { name: 'Alan Thompson', pos: ['LM', 'LW'], rating: 83, num: 8, nation: 'Inglaterra', code: 'ENG', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', club: 'Celtic' },
      { name: 'Paul Lambert', pos: ['CM'], rating: 84, num: 14, nation: 'Escocia', code: 'SCO', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', club: 'Celtic' },
      { name: 'Bobo Balde', pos: ['CB'], rating: 83, num: 6, nation: 'Guinea', code: 'GN', flag: '🇬🇳', club: 'Celtic' },
      { name: 'Joos Valgaeren', pos: ['CB'], rating: 82, num: 5, nation: 'Bélgica', code: 'BE', flag: '🇧🇪', club: 'Celtic' },
      { name: 'Johan Mjällby', pos: ['CB'], rating: 83, num: 35, nation: 'Suecia', code: 'SE', flag: '🇸🇪', club: 'Celtic' },
      { name: 'Didier Agathe', pos: ['RB', 'RW'], rating: 82, num: 17, nation: 'Francia', code: 'FR', flag: '🇫🇷', club: 'Celtic' },
      { name: 'Robert Douglas', pos: ['GK'], rating: 81, num: 20, nation: 'Escocia', code: 'SCO', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', club: 'Celtic' }
    ]
  },
  {
    id: 'pen_1982', name: 'CA Peñarol', shortCode: 'PEN', type: 'champions', year: '1982', tag: 'Champions 1982', flag: '🇺🇾', country: 'Uruguay', tier: 'gold',
    players: [
      { name: 'Fernando Morena', pos: ['ST'], rating: 91, bonus: 1, num: 9, nation: 'Uruguay', code: 'UY', flag: '🇺🇾', club: 'Peñarol' },
      { name: 'Venancio Ramos', pos: ['RW'], rating: 86, num: 7, nation: 'Uruguay', code: 'UY', flag: '🇺🇾', club: 'Peñarol' },
      { name: 'Jair Gonçalves', pos: ['AM'], rating: 86, num: 10, nation: 'Brasil', code: 'BR', flag: '🇧🇷', club: 'Peñarol' },
      { name: 'Walkir Silva', pos: ['LW'], rating: 84, num: 11, nation: 'Uruguay', code: 'UY', flag: '🇺🇾', club: 'Peñarol' },
      { name: 'Nelson Gutiérrez', pos: ['CB'], rating: 86, num: 3, nation: 'Uruguay', code: 'UY', flag: '🇺🇾', club: 'Peñarol' },
      { name: 'Walter Olivera', pos: ['CB'], rating: 87, num: 4, nation: 'Uruguay', code: 'UY', flag: '🇺🇾', club: 'Peñarol' },
      { name: 'Víctor Hugo Diogo', pos: ['RB'], rating: 85, num: 2, nation: 'Uruguay', code: 'UY', flag: '🇺🇾', club: 'Peñarol' },
      { name: 'Washington Olivera', pos: ['LB'], rating: 83, num: 6, nation: 'Uruguay', code: 'UY', flag: '🇺🇾', club: 'Peñarol' },
      { name: 'Miguel Bossio', pos: ['DM'], rating: 84, num: 5, nation: 'Uruguay', code: 'UY', flag: '🇺🇾', club: 'Peñarol' },
      { name: 'Saralegui', pos: ['CM'], rating: 84, num: 8, nation: 'Uruguay', code: 'UY', flag: '🇺🇾', club: 'Peñarol' },
      { name: 'Gustavo Fernández', pos: ['GK'], rating: 83, num: 1, nation: 'Uruguay', code: 'UY', flag: '🇺🇾', club: 'Peñarol' }
    ]
  },
  {
    id: 'ame_2006', name: 'Club América', shortCode: 'AME', type: 'champions', year: '2006', tag: 'Champions 2006', flag: '🇲🇽', country: 'Mexico', tier: 'silver',
    players: [
      { name: 'Cuauhtémoc Blanco', pos: ['AM', 'ST'], rating: 89, bonus: 1, num: 10, nation: 'México', code: 'MX', flag: '🇲🇽', club: 'Club América' },
      { name: 'Claudio López (Piojo)', pos: ['ST', 'LW'], rating: 86, num: 7, nation: 'Argentina', code: 'AR', flag: '🇦🇷', club: 'Club América' },
      { name: 'Guillermo Ochoa', pos: ['GK'], rating: 87, num: 1, nation: 'México', code: 'MX', flag: '🇲🇽', club: 'Club América' },
      { name: 'Pável Pardo', pos: ['CM', 'DM'], rating: 85, num: 8, nation: 'México', code: 'MX', flag: '🇲🇽', club: 'Club América' },
      { name: 'Germán Villa', pos: ['DM'], rating: 83, num: 18, nation: 'México', code: 'MX', flag: '🇲🇽', club: 'Club América' },
      { name: 'Duilio Davino', pos: ['CB'], rating: 83, num: 3, nation: 'México', code: 'MX', flag: '🇲🇽', club: 'Club América' },
      { name: 'Ricardo Rojas', pos: ['CB'], rating: 82, num: 16, nation: 'Chile', code: 'CL', flag: '🇨🇱', club: 'Club América' },
      { name: 'José Antonio Castro', pos: ['RB'], rating: 81, num: 2, nation: 'México', code: 'MX', flag: '🇲🇽', club: 'Club América' },
      { name: 'Óscar Rojas', pos: ['LB'], rating: 80, num: 15, nation: 'México', code: 'MX', flag: '🇲🇽', club: 'Club América' },
      { name: 'Irenio Soares', pos: ['AM'], rating: 81, num: 11, nation: 'Brasil', code: 'BR', flag: '🇧🇷', club: 'Club América' },
      { name: 'Kléber Boas', pos: ['ST'], rating: 83, num: 23, nation: 'Brasil', code: 'BR', flag: '🇧🇷', club: 'Club América' }
    ]
  },

  // --- MÁS SELECCIONES NACIONALES DEL MUNDO ---
  {
    id: 'uru_2010', name: 'Uruguay', shortCode: 'URU', type: 'worldcup', year: '2010', tag: 'Cup 2010', flag: '🇺🇾', country: 'Uruguay', tier: 'gold',
    players: [
      { name: 'Diego Forlán', pos: ['ST', 'AM'], rating: 93, bonus: 1, num: 10, nation: 'Uruguay', code: 'UY', flag: '🇺🇾', club: 'Atlético Madrid' },
      { name: 'Luis Suárez', pos: ['ST'], rating: 90, num: 9, nation: 'Uruguay', code: 'UY', flag: '🇺🇾', club: 'Ajax' },
      { name: 'Edinson Cavani', pos: ['ST', 'LW'], rating: 88, num: 21, nation: 'Uruguay', code: 'UY', flag: '🇺🇾', club: 'Palermo' },
      { name: 'Diego Lugano', pos: ['CB'], rating: 88, num: 2, nation: 'Uruguay', code: 'UY', flag: '🇺🇾', club: 'Fenerbahçe' },
      { name: 'Diego Godín', pos: ['CB'], rating: 87, num: 3, nation: 'Uruguay', code: 'UY', flag: '🇺🇾', club: 'Villarreal' },
      { name: 'Fernando Muslera', pos: ['GK'], rating: 86, num: 1, nation: 'Uruguay', code: 'UY', flag: '🇺🇾', club: 'Lazio' },
      { name: 'Egidio Arévalo Ríos', pos: ['DM'], rating: 85, num: 17, nation: 'Uruguay', code: 'UY', flag: '🇺🇾', club: 'Peñarol' },
      { name: 'Diego Pérez (Ruso)', pos: ['CM', 'DM'], rating: 84, num: 15, nation: 'Uruguay', code: 'UY', flag: '🇺🇾', club: 'Monaco' },
      { name: 'Maxi Pereira', pos: ['RB'], rating: 85, num: 16, nation: 'Uruguay', code: 'UY', flag: '🇺🇾', club: 'Benfica' },
      { name: 'Jorge Fucile', pos: ['LB'], rating: 83, num: 4, nation: 'Uruguay', code: 'UY', flag: '🇺🇾', club: 'Porto' },
      { name: 'Álvaro Pereira', pos: ['LM', 'LB'], rating: 84, num: 11, nation: 'Uruguay', code: 'UY', flag: '🇺🇾', club: 'Porto' }
    ]
  },
  {
    id: 'chi_2015', name: 'Chile', shortCode: 'CHI', type: 'worldcup', year: '2015', tag: 'Cup 2015', flag: '🇨🇱', country: 'Chile', tier: 'gold',
    players: [
      { name: 'Alexis Sánchez', pos: ['LW', 'ST'], rating: 92, bonus: 1, num: 7, nation: 'Chile', code: 'CL', flag: '🇨🇱', club: 'Arsenal' },
      { name: 'Arturo Vidal', pos: ['CM', 'AM'], rating: 92, num: 8, nation: 'Chile', code: 'CL', flag: '🇨🇱', club: 'Juventus' },
      { name: 'Claudio Bravo', pos: ['GK'], rating: 89, num: 1, nation: 'Chile', code: 'CL', flag: '🇨🇱', club: 'Barcelona' },
      { name: 'Eduardo Vargas', pos: ['ST'], rating: 86, num: 11, nation: 'Chile', code: 'CL', flag: '🇨🇱', club: 'QPR' },
      { name: 'Gary Medel', pos: ['CB', 'DM'], rating: 87, num: 17, nation: 'Chile', code: 'CL', flag: '🇨🇱', club: 'Inter' },
      { name: 'Gonzalo Jara', pos: ['CB'], rating: 83, num: 18, nation: 'Chile', code: 'CL', flag: '🇨🇱', club: 'Mainz' },
      { name: 'Mauricio Isla', pos: ['RB'], rating: 84, num: 4, nation: 'Chile', code: 'CL', flag: '🇨🇱', club: 'QPR' },
      { name: 'Eugenio Mena', pos: ['LB'], rating: 82, num: 2, nation: 'Chile', code: 'CL', flag: '🇨🇱', club: 'Cruzeiro' },
      { name: 'Marcelo Díaz', pos: ['DM'], rating: 85, num: 21, nation: 'Chile', code: 'CL', flag: '🇨🇱', club: 'Hamburger SV' },
      { name: 'Charles Aránguiz', pos: ['CM'], rating: 86, num: 20, nation: 'Chile', code: 'CL', flag: '🇨🇱', club: 'Internacional' },
      { name: 'Jorge Valdivia', pos: ['AM'], rating: 87, num: 10, nation: 'Chile', code: 'CL', flag: '🇨🇱', club: 'Palmeiras' }
    ]
  },
  {
    id: 'cro_2018', name: 'Croacia', shortCode: 'CRO', type: 'worldcup', year: '2018', tag: 'Cup 2018', flag: '🇭🇷', country: 'Croatia', tier: 'legendary',
    players: [
      { name: 'Luka Modrić', pos: ['CM', 'AM'], rating: 96, bonus: 1, num: 10, nation: 'Croacia', code: 'HR', flag: '🇭🇷', club: 'Real Madrid' },
      { name: 'Ivan Rakitić', pos: ['CM'], rating: 91, num: 7, nation: 'Croacia', code: 'HR', flag: '🇭🇷', club: 'Barcelona' },
      { name: 'Mario Mandžukić', pos: ['ST'], rating: 89, num: 17, nation: 'Croacia', code: 'HR', flag: '🇭🇷', club: 'Juventus' },
      { name: 'Ivan Perišić', pos: ['LW', 'LM'], rating: 89, num: 4, nation: 'Croacia', code: 'HR', flag: '🇭🇷', club: 'Inter' },
      { name: 'Marcelo Brozović', pos: ['DM', 'CM'], rating: 87, num: 11, nation: 'Croacia', code: 'HR', flag: '🇭🇷', club: 'Inter' },
      { name: 'Danijel Subašić', pos: ['GK'], rating: 88, num: 23, nation: 'Croacia', code: 'HR', flag: '🇭🇷', club: 'Monaco' },
      { name: 'Dejan Lovren', pos: ['CB'], rating: 85, num: 6, nation: 'Croacia', code: 'HR', flag: '🇭🇷', club: 'Liverpool' },
      { name: 'Domagoj Vida', pos: ['CB'], rating: 85, num: 21, nation: 'Croacia', code: 'HR', flag: '🇭🇷', club: 'Beşiktaş' },
      { name: 'Šime Vrsaljko', pos: ['RB'], rating: 84, num: 2, nation: 'Croacia', code: 'HR', flag: '🇭🇷', club: 'Atlético Madrid' },
      { name: 'Ivan Strinić', pos: ['LB'], rating: 81, num: 3, nation: 'Croacia', code: 'HR', flag: '🇭🇷', club: 'Sampdoria' },
      { name: 'Ante Rebić', pos: ['RW', 'ST'], rating: 84, num: 18, nation: 'Croacia', code: 'HR', flag: '🇭🇷', club: 'Eintracht Frankfurt' }
    ]
  },
  {
    id: 'bel_2018', name: 'Bélgica', shortCode: 'BEL', type: 'worldcup', year: '2018', tag: 'Cup 2018', flag: '🇧🇪', country: 'Belgium', tier: 'legendary',
    players: [
      { name: 'Eden Hazard', pos: ['LW', 'AM'], rating: 94, bonus: 1, num: 10, nation: 'Bélgica', code: 'BE', flag: '🇧🇪', club: 'Chelsea' },
      { name: 'Kevin De Bruyne', pos: ['AM', 'CM'], rating: 94, num: 7, nation: 'Bélgica', code: 'BE', flag: '🇧🇪', club: 'Man City' },
      { name: 'Romelu Lukaku', pos: ['ST'], rating: 90, num: 9, nation: 'Bélgica', code: 'BE', flag: '🇧🇪', club: 'Man United' },
      { name: 'Thibaut Courtois', pos: ['GK'], rating: 92, num: 1, nation: 'Bélgica', code: 'BE', flag: '🇧🇪', club: 'Chelsea' },
      { name: 'Dries Mertens', pos: ['RW', 'ST'], rating: 88, num: 14, nation: 'Bélgica', code: 'BE', flag: '🇧🇪', club: 'Napoli' },
      { name: 'Axel Witsel', pos: ['DM', 'CM'], rating: 86, num: 6, nation: 'Bélgica', code: 'BE', flag: '🇧🇪', club: 'Tianjin' },
      { name: 'Marouane Fellaini', pos: ['CM'], rating: 84, num: 8, nation: 'Bélgica', code: 'BE', flag: '🇧🇪', club: 'Man United' },
      { name: 'Vincent Kompany', pos: ['CB'], rating: 88, num: 4, nation: 'Bélgica', code: 'BE', flag: '🇧🇪', club: 'Man City' },
      { name: 'Jan Vertonghen', pos: ['CB', 'LB'], rating: 87, num: 5, nation: 'Bélgica', code: 'BE', flag: '🇧🇪', club: 'Tottenham' },
      { name: 'Toby Alderweireld', pos: ['CB', 'RB'], rating: 87, num: 2, nation: 'Bélgica', code: 'BE', flag: '🇧🇪', club: 'Tottenham' },
      { name: 'Thomas Meunier', pos: ['RB'], rating: 84, num: 15, nation: 'Bélgica', code: 'BE', flag: '🇧🇪', club: 'PSG' }
    ]
  },
  {
    id: 'sen_2002', name: 'Senegal', shortCode: 'SEN', type: 'worldcup', year: '2002', tag: 'Cup 2002', flag: '🇸🇳', country: 'Senegal', tier: 'silver',
    players: [
      { name: 'El Hadji Diouf', pos: ['ST', 'RW'], rating: 88, bonus: 1, num: 11, nation: 'Senegal', code: 'SN', flag: '🇸🇳', club: 'Lens' },
      { name: 'Papa Bouba Diop', pos: ['DM', 'CM'], rating: 85, num: 19, nation: 'Senegal', code: 'SN', flag: '🇸🇳', club: 'Lens' },
      { name: 'Aliou Cissé', pos: ['DM', 'CB'], rating: 83, num: 6, nation: 'Senegal', code: 'SN', flag: '🇸🇳', club: 'Montpellier' },
      { name: 'Henri Camara', pos: ['ST', 'LW'], rating: 84, num: 7, nation: 'Senegal', code: 'SN', flag: '🇸🇳', club: 'Sedan' },
      { name: 'Khalilou Fadiga', pos: ['AM'], rating: 85, num: 10, nation: 'Senegal', code: 'SN', flag: '🇸🇳', club: 'Auxerre' },
      { name: 'Tony Sylva', pos: ['GK'], rating: 83, num: 1, nation: 'Senegal', code: 'SN', flag: '🇸🇳', club: 'Monaco' },
      { name: 'Lamine Diatta', pos: ['CB'], rating: 82, num: 13, nation: 'Senegal', code: 'SN', flag: '🇸🇳', club: 'Rennes' },
      { name: 'Ferdinand Coly', pos: ['RB'], rating: 82, num: 17, nation: 'Senegal', code: 'SN', flag: '🇸🇳', club: 'Lens' },
      { name: 'Omar Daf', pos: ['LB'], rating: 81, num: 2, nation: 'Senegal', code: 'SN', flag: '🇸🇳', club: 'Sochaux' },
      { name: 'Alassane N\'Dour', pos: ['CM'], rating: 80, num: 14, nation: 'Senegal', code: 'SN', flag: '🇸🇳', club: 'Saint-Étienne' },
      { name: 'Salif Diao', pos: ['DM'], rating: 82, num: 15, nation: 'Senegal', code: 'SN', flag: '🇸🇳', club: 'Sedan' }
    ]
  },
  {
    id: 'nig_1994', name: 'Nigeria', shortCode: 'NGA', type: 'worldcup', year: '1994', tag: 'Cup 1994', flag: '🇳🇬', country: 'Nigeria', tier: 'silver',
    players: [
      { name: 'Jay-Jay Okocha', pos: ['AM'], rating: 90, bonus: 1, num: 10, nation: 'Nigeria', code: 'NG', flag: '🇳🇬', club: 'Eintracht Frankfurt' },
      { name: 'Rashidi Yekini', pos: ['ST'], rating: 88, num: 9, nation: 'Nigeria', code: 'NG', flag: '🇳🇬', club: 'Vitoria Setubal' },
      { name: 'Daniel Amokachi', pos: ['ST', 'AM'], rating: 85, num: 14, nation: 'Nigeria', code: 'NG', flag: '🇳🇬', club: 'Club Brugge' },
      { name: 'Finidi George', pos: ['RW'], rating: 87, num: 7, nation: 'Nigeria', code: 'NG', flag: '🇳🇬', club: 'Ajax' },
      { name: 'Emmanuel Amunike', pos: ['LW'], rating: 86, num: 11, nation: 'Nigeria', code: 'NG', flag: '🇳🇬', club: 'Zamalek' },
      { name: 'Sunday Oliseh', pos: ['DM'], rating: 85, num: 15, nation: 'Nigeria', code: 'NG', flag: '🇳🇬', club: 'RFC Liège' },
      { name: 'Stephen Keshi', pos: ['CB'], rating: 86, num: 4, nation: 'Nigeria', code: 'NG', flag: '🇳🇬', club: 'Molenbeek' },
      { name: 'Uche Okechukwu', pos: ['CB'], rating: 84, num: 5, nation: 'Nigeria', code: 'NG', flag: '🇳🇬', club: 'Fenerbahçe' },
      { name: 'Chidi Nwanu', pos: ['CB'], rating: 82, num: 2, nation: 'Nigeria', code: 'NG', flag: '🇳🇬', club: 'Anderlecht' },
      { name: 'Michael Emenalo', pos: ['LB'], rating: 81, num: 3, nation: 'Nigeria', code: 'NG', flag: '🇳🇬', club: 'Eintracht Trier' },
      { name: 'Peter Rufai', pos: ['GK'], rating: 83, num: 1, nation: 'Nigeria', code: 'NG', flag: '🇳🇬', club: 'Go Ahead Eagles' }
    ]
  },
  {
    id: 'gre_2004', name: 'Grecia', shortCode: 'GRE', type: 'worldcup', year: '2004', tag: 'Cup 2004', flag: '🇬🇷', country: 'Greece', tier: 'gold',
    players: [
      { name: 'Angelos Charisteas', pos: ['ST'], rating: 88, bonus: 1, num: 9, nation: 'Grecia', code: 'GR', flag: '🇬🇷', club: 'Werder Bremen' },
      { name: 'Theodoros Zagorakis', pos: ['CM', 'DM'], rating: 89, num: 7, nation: 'Grecia', code: 'GR', flag: '🇬🇷', club: 'AEK Atenas' },
      { name: 'Traianos Dellas', pos: ['CB'], rating: 88, num: 5, nation: 'Grecia', code: 'GR', flag: '🇬🇷', club: 'Roma' },
      { name: 'Antonios Nikopolidis', pos: ['GK'], rating: 88, num: 1, nation: 'Grecia', code: 'GR', flag: '🇬🇷', club: 'Panathinaikos' },
      { name: 'Giourkas Seitaridis', pos: ['RB'], rating: 86, num: 2, nation: 'Grecia', code: 'GR', flag: '🇬🇷', club: 'Panathinaikos' },
      { name: 'Takis Fyssas', pos: ['LB'], rating: 83, num: 14, nation: 'Grecia', code: 'GR', flag: '🇬🇷', club: 'Benfica' },
      { name: 'Michalis Kapsis', pos: ['CB'], rating: 84, num: 19, nation: 'Grecia', code: 'GR', flag: '🇬🇷', club: 'AEK Atenas' },
      { name: 'Angelos Basinas', pos: ['DM'], rating: 85, num: 6, nation: 'Grecia', code: 'GR', flag: '🇬🇷', club: 'Panathinaikos' },
      { name: 'Katsouranis', pos: ['CM', 'DM'], rating: 85, num: 21, nation: 'Grecia', code: 'GR', flag: '🇬🇷', club: 'AEK Atenas' },
      { name: 'Stelios Giannakopoulos', pos: ['RM', 'RW'], rating: 84, num: 8, nation: 'Grecia', code: 'GR', flag: '🇬🇷', club: 'Bolton' },
      { name: 'Zisis Vryzas', pos: ['ST'], rating: 82, num: 15, nation: 'Grecia', code: 'GR', flag: '🇬🇷', club: 'Fiorentina' }
    ]
  }
];

// Helper to format into Team[]
const teamsList = MASSIVE_REAL_TEAMS.map(team => {
  return {
    id: team.id,
    name: team.name,
    shortCode: team.shortCode,
    type: team.type,
    year: team.year,
    tag: team.tag,
    flag: team.flag,
    country: team.country,
    tier: team.tier || 'silver',
    players: team.players.map((p, idx) => ({
      id: `${team.id}_${p.num}_${idx}`,
      number: p.num,
      name: p.name,
      positions: p.pos,
      primaryPos: p.pos[0],
      rating: p.rating,
      bonus: p.bonus,
      nation: p.nation,
      nationCode: p.code,
      flag: p.flag,
      club: p.club,
      year: team.year,
      tournament: team.type
    }))
  };
});

const fileHeader = `import { Team } from '../types';\n\nexport const MASSIVE_TEAMS_DATA: Team[] = `;
const fileContent = fileHeader + JSON.stringify(teamsList, null, 2) + `;\n`;

const outputPath = path.join(__dirname, '..', 'src', 'data', 'massiveTeamsData.ts');
fs.writeFileSync(outputPath, fileContent, 'utf-8');

console.log(`Generated ${teamsList.length} rich custom teams! Written to ${outputPath}`);
