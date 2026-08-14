import { Team, Player } from '../teamBuilderHelper';

export const MORE_RICH_RAW_TEAMS: any[] = [
  // --- CLUBES ESPAÑA Y EUROPA ---
  {
    id: 'rma_2002', name: 'Real Madrid', shortCode: 'RMA', type: 'champions', year: '2002', tag: 'Champions 2002', flag: '🇪🇸', country: 'Spain', tier: 'legendary',
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
    id: 'fcb_1992', name: 'FC Barcelona', shortCode: 'FCB', type: 'champions', year: '1992', tag: 'Champions 1992', flag: '🇪🇸', country: 'Spain', tier: 'legendary',
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
    id: 'vcf_2006', name: 'Villarreal CF', shortCode: 'VCF', type: 'champions', year: '2006', tag: 'Champions 2006', flag: '🇪🇸', country: 'Spain', tier: 'gold',
    players: [
      { name: 'Juan Román Riquelme', pos: ['AM'], rating: 94, bonus: 1, num: 8, nation: 'Argentina', code: 'AR', flag: '🇦🇷', club: 'Villarreal' },
      { name: 'Diego Forlán', pos: ['ST'], rating: 91, num: 5, nation: 'Uruguay', code: 'UY', flag: '🇺🇾', club: 'Villarreal' },
      { name: 'Marcos Senna', pos: ['DM', 'CM'], rating: 89, num: 19, nation: 'España', code: 'ES', flag: '🇪🇸', club: 'Villarreal' },
      { name: 'Juan Pablo Sorín', pos: ['LB', 'LM'], rating: 88, num: 12, nation: 'Argentina', code: 'AR', flag: '🇦🇷', club: 'Villarreal' },
      { name: 'Gonzalo Rodríguez', pos: ['CB'], rating: 86, num: 2, nation: 'Argentina', code: 'AR', flag: '🇦🇷', club: 'Villarreal' },
      { name: 'Quique Álvarez', pos: ['CB'], rating: 84, num: 4, nation: 'España', code: 'ES', flag: '🇪🇸', club: 'Villarreal' },
      { name: 'Javi Venta', pos: ['RB'], rating: 84, num: 17, nation: 'España', code: 'ES', flag: '🇪🇸', club: 'Villarreal' },
      { name: 'Mariano Barbosa', pos: ['GK'], rating: 84, num: 1, nation: 'Argentina', code: 'AR', flag: '🇦🇷', club: 'Villarreal' },
      { name: 'Rodolfo Arruabarrena', pos: ['LB'], rating: 85, num: 3, nation: 'Argentina', code: 'AR', flag: '🇦🇷', club: 'Villarreal' },
      { name: 'Josico', pos: ['DM'], rating: 84, num: 6, nation: 'España', code: 'ES', flag: '🇪🇸', club: 'Villarreal' },
      { name: 'Guillermo Franco', pos: ['ST'], rating: 83, num: 99, nation: 'México', code: 'MX', flag: '🇲🇽', club: 'Villarreal' }
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
    id: 'bay_2020', name: 'Bayern de Múnich', shortCode: 'BAY', type: 'champions', year: '2020', tag: 'Champions 2020', flag: '🇩🇪', country: 'Germany', tier: 'legendary',
    players: [
      { name: 'Robert Lewandowski', pos: ['ST'], rating: 97, bonus: 1, num: 9, nation: 'Polonia', code: 'PL', flag: '🇵🇱', club: 'Bayern' },
      { name: 'Thomas Müller', pos: ['AM', 'RW'], rating: 92, num: 25, nation: 'Alemania', code: 'DE', flag: '🇩🇪', club: 'Bayern' },
      { name: 'Joshua Kimmich', pos: ['DM', 'RB'], rating: 92, num: 6, nation: 'Alemania', code: 'DE', flag: '🇩🇪', club: 'Bayern' },
      { name: 'Thiago Alcántara', pos: ['CM'], rating: 92, num: 6, nation: 'España', code: 'ES', flag: '🇪🇸', club: 'Bayern' },
      { name: 'Manuel Neuer', pos: ['GK'], rating: 93, num: 1, nation: 'Alemania', code: 'DE', flag: '🇩🇪', club: 'Bayern' },
      { name: 'Serge Gnabry', pos: ['RW', 'LW'], rating: 89, num: 7, nation: 'Alemania', code: 'DE', flag: '🇩🇪', club: 'Bayern' },
      { name: 'Kingsley Coman', pos: ['LW', 'RW'], rating: 88, num: 29, nation: 'Francia', code: 'FR', flag: '🇫🇷', club: 'Bayern' },
      { name: 'Alphonso Davies', pos: ['LB'], rating: 90, num: 19, nation: 'Canadá', code: 'CA', flag: '🇨🇦', club: 'Bayern' },
      { name: 'David Alaba', pos: ['CB', 'LB'], rating: 90, num: 27, nation: 'Austria', code: 'AT', flag: '🇦🇹', club: 'Bayern' },
      { name: 'Jérôme Boateng', pos: ['CB'], rating: 86, num: 17, nation: 'Alemania', code: 'DE', flag: '🇩🇪', club: 'Bayern' },
      { name: 'Benjamin Pavard', pos: ['RB', 'CB'], rating: 85, num: 5, nation: 'Francia', code: 'FR', flag: '🇫🇷', club: 'Bayern' }
    ]
  },
  {
    id: 'mil_2007', name: 'AC Milan', shortCode: 'MIL', type: 'champions', year: '2007', tag: 'Champions 2007', flag: '🇮🇹', country: 'Italy', tier: 'legendary',
    players: [
      { name: 'Kaká', pos: ['AM'], rating: 97, bonus: 1, num: 22, nation: 'Brasil', code: 'BR', flag: '🇧🇷', club: 'Milan' },
      { name: 'Andrea Pirlo', pos: ['CM', 'DM'], rating: 93, num: 21, nation: 'Italia', code: 'IT', flag: '🇮🇹', club: 'Milan' },
      { name: 'Clarence Seedorf', pos: ['CM', 'AM'], rating: 92, num: 10, nation: 'Países Bajos', code: 'NL', flag: '🇳🇱', club: 'Milan' },
      { name: 'Gennaro Gattuso', pos: ['DM'], rating: 90, num: 8, nation: 'Italia', code: 'IT', flag: '🇮🇹', club: 'Milan' },
      { name: 'Filippo Inzaghi', pos: ['ST'], rating: 90, num: 9, nation: 'Italia', code: 'IT', flag: '🇮🇹', club: 'Milan' },
      { name: 'Alessandro Nesta', pos: ['CB'], rating: 93, num: 13, nation: 'Italia', code: 'IT', flag: '🇮🇹', club: 'Milan' },
      { name: 'Paolo Maldini', pos: ['CB', 'LB'], rating: 94, num: 3, nation: 'Italia', code: 'IT', flag: '🇮🇹', club: 'Milan' },
      { name: 'Massimo Oddo', pos: ['RB'], rating: 86, num: 44, nation: 'Italia', code: 'IT', flag: '🇮🇹', club: 'Milan' },
      { name: 'Marek Jankulovski', pos: ['LB'], rating: 86, num: 18, nation: 'República Checa', code: 'CZ', flag: '🇨🇿', club: 'Milan' },
      { name: 'Massimo Ambrosini', pos: ['CM', 'DM'], rating: 87, num: 23, nation: 'Italia', code: 'IT', flag: '🇮🇹', club: 'Milan' },
      { name: 'Dida', pos: ['GK'], rating: 89, num: 1, nation: 'Brasil', code: 'BR', flag: '🇧🇷', club: 'Milan' }
    ]
  },
  {
    id: 'asm_2017', name: 'AS Monaco', shortCode: 'ASM', type: 'champions', year: '2017', tag: 'Champions 2017', flag: '🇫🇷', country: 'France', tier: 'gold',
    players: [
      { name: 'Kylian Mbappé', pos: ['ST', 'LW'], rating: 91, bonus: 1, num: 29, nation: 'Francia', code: 'FR', flag: '🇫🇷', club: 'Monaco' },
      { name: 'Radamel Falcao', pos: ['ST'], rating: 91, num: 9, nation: 'Colombia', code: 'CO', flag: '🇨🇴', club: 'Monaco' },
      { name: 'Bernardo Silva', pos: ['RW', 'AM'], rating: 90, num: 10, nation: 'Portugal', code: 'PT', flag: '🇵🇹', club: 'Monaco' },
      { name: 'Thomas Lemar', pos: ['LW', 'AM'], rating: 87, num: 27, nation: 'Francia', code: 'FR', flag: '🇫🇷', club: 'Monaco' },
      { name: 'Fabinho', pos: ['DM', 'RB'], rating: 89, num: 2, nation: 'Brasil', code: 'BR', flag: '🇧🇷', club: 'Monaco' },
      { name: 'Tiemoué Bakayoko', pos: ['DM', 'CM'], rating: 86, num: 14, nation: 'Francia', code: 'FR', flag: '🇫🇷', club: 'Monaco' },
      { name: 'Benjamin Mendy', pos: ['LB'], rating: 86, num: 23, nation: 'Francia', code: 'FR', flag: '🇫🇷', club: 'Monaco' },
      { name: 'Djibril Sidibé', pos: ['RB'], rating: 85, num: 19, nation: 'Francia', code: 'FR', flag: '🇫🇷', club: 'Monaco' },
      { name: 'Kamil Glik', pos: ['CB'], rating: 87, num: 25, nation: 'Polonia', code: 'PL', flag: '🇵🇱', club: 'Monaco' },
      { name: 'Jemerson', pos: ['CB'], rating: 84, num: 5, nation: 'Brasil', code: 'BR', flag: '🇧🇷', club: 'Monaco' },
      { name: 'Danijel Subašić', pos: ['GK'], rating: 86, num: 1, nation: 'Croacia', code: 'HR', flag: '🇭🇷', club: 'Monaco' }
    ]
  },
  {
    id: 'asr_2001', name: 'AS Roma', shortCode: 'ASR', type: 'champions', year: '2001', tag: 'Champions 2001', flag: '🇮🇹', country: 'Italy', tier: 'gold',
    players: [
      { name: 'Francesco Totti', pos: ['AM', 'ST'], rating: 94, bonus: 1, num: 10, nation: 'Italia', code: 'IT', flag: '🇮🇹', club: 'Roma' },
      { name: 'Gabriel Batistuta', pos: ['ST'], rating: 94, num: 18, nation: 'Argentina', code: 'AR', flag: '🇦🇷', club: 'Roma' },
      { name: 'Vincenzo Montella', pos: ['ST'], rating: 88, num: 9, nation: 'Italia', code: 'IT', flag: '🇮🇹', club: 'Roma' },
      { name: 'Damiano Tommasi', pos: ['CM', 'DM'], rating: 87, num: 17, nation: 'Italia', code: 'IT', flag: '🇮🇹', club: 'Roma' },
      { name: 'Emerson', pos: ['DM', 'CM'], rating: 89, num: 11, nation: 'Brasil', code: 'BR', flag: '🇧🇷', club: 'Roma' },
      { name: 'Cafu', pos: ['RB', 'RWB'], rating: 93, num: 2, nation: 'Brasil', code: 'BR', flag: '🇧🇷', club: 'Roma' },
      { name: 'Vincent Candela', pos: ['LB', 'LWB'], rating: 88, num: 32, nation: 'Francia', code: 'FR', flag: '🇫🇷', club: 'Roma' },
      { name: 'Walter Samuel', pos: ['CB'], rating: 91, num: 19, nation: 'Argentina', code: 'AR', flag: '🇦🇷', club: 'Roma' },
      { name: 'Aldair', pos: ['CB'], rating: 90, num: 6, nation: 'Brasil', code: 'BR', flag: '🇧🇷', club: 'Roma' },
      { name: 'Jonathan Zebina', pos: ['CB', 'RB'], rating: 84, num: 15, nation: 'Francia', code: 'FR', flag: '🇫🇷', club: 'Roma' },
      { name: 'Francesco Antonioli', pos: ['GK'], rating: 85, num: 1, nation: 'Italia', code: 'IT', flag: '🇮🇹', club: 'Roma' }
    ]
  },
  {
    id: 'sal_2019', name: 'Red Bull Salzburgo', shortCode: 'RBS', type: 'champions', year: '2019', tag: 'Champions 2019', flag: '🇦🇹', country: 'Austria', tier: 'silver',
    players: [
      { name: 'Erling Haaland', pos: ['ST'], rating: 90, bonus: 1, num: 30, nation: 'Noruega', code: 'NO', flag: '🇳🇴', club: 'Salzburg' },
      { name: 'Dominik Szoboszlai', pos: ['AM', 'LW'], rating: 87, num: 14, nation: 'Hungría', code: 'HU', flag: '🇭🇺', club: 'Salzburg' },
      { name: 'Takumi Minamino', pos: ['RW', 'AM'], rating: 85, num: 18, nation: 'Japón', code: 'JP', flag: '🇯🇵', club: 'Salzburg' },
      { name: 'Hwang Hee-chan', pos: ['ST', 'LW'], rating: 85, num: 9, nation: 'Corea del Sur', code: 'KR', flag: '🇰🇷', club: 'Salzburg' },
      { name: 'Enock Mwepu', pos: ['CM', 'DM'], rating: 82, num: 45, nation: 'Zambia', code: 'ZM', flag: '🇿🇲', club: 'Salzburg' },
      { name: 'Zlatko Junuzovic', pos: ['CM'], rating: 83, num: 16, nation: 'Austria', code: 'AT', flag: '🇦🇹', club: 'Salzburg' },
      { name: 'Andreas Ulmer', pos: ['LB'], rating: 81, num: 17, nation: 'Austria', code: 'AT', flag: '🇦🇹', club: 'Salzburg' },
      { name: 'Rasmus Kristensen', pos: ['RB'], rating: 81, num: 43, nation: 'Dinamarca', code: 'DK', flag: '🇩🇰', club: 'Salzburg' },
      { name: 'Maximilian Wöber', pos: ['CB'], rating: 82, num: 39, nation: 'Austria', code: 'AT', flag: '🇦🇹', club: 'Salzburg' },
      { name: 'André Ramalho', pos: ['CB'], rating: 81, num: 15, nation: 'Brasil', code: 'BR', flag: '🇧🇷', club: 'Salzburg' },
      { name: 'Cican Stankovic', pos: ['GK'], rating: 81, num: 1, nation: 'Austria', code: 'AT', flag: '🇦🇹', club: 'Salzburg' }
    ]
  },
  {
    id: 'bri_2023', name: 'Brighton & Hove Albion', shortCode: 'BHA', type: 'champions', year: '2023', tag: 'Premier 2023', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', country: 'England', tier: 'silver',
    players: [
      { name: 'Kaoru Mitoma', pos: ['LW'], rating: 86, bonus: 1, num: 22, nation: 'Japón', code: 'JP', flag: '🇯🇵', club: 'Brighton' },
      { name: 'Alexis Mac Allister', pos: ['CM', 'AM'], rating: 86, num: 10, nation: 'Argentina', code: 'AR', flag: '🇦🇷', club: 'Brighton' },
      { name: 'Moisés Caicedo', pos: ['DM', 'CM'], rating: 86, num: 25, nation: 'Ecuador', code: 'EC', flag: '🇪🇨', club: 'Brighton' },
      { name: 'Pervis Estupiñán', pos: ['LB'], rating: 84, num: 30, nation: 'Ecuador', code: 'EC', flag: '🇪🇨', club: 'Brighton' },
      { name: 'Lewis Dunk', pos: ['CB'], rating: 84, num: 5, nation: 'Inglaterra', code: 'ENG', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', club: 'Brighton' },
      { name: 'Solly March', pos: ['RW', 'RM'], rating: 83, num: 7, nation: 'Inglaterra', code: 'ENG', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', club: 'Brighton' },
      { name: 'Pascal Groß', pos: ['CM', 'RB'], rating: 84, num: 13, nation: 'Alemania', code: 'DE', flag: '🇩🇪', club: 'Brighton' },
      { name: 'Evan Ferguson', pos: ['ST'], rating: 82, num: 28, nation: 'Irlanda', code: 'IE', flag: '🇮🇪', club: 'Brighton' },
      { name: 'Adam Webster', pos: ['CB'], rating: 82, num: 4, nation: 'Inglaterra', code: 'ENG', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', club: 'Brighton' },
      { name: 'Joël Veltman', pos: ['RB', 'CB'], rating: 82, num: 34, nation: 'Países Bajos', code: 'NL', flag: '🇳🇱', club: 'Brighton' },
      { name: 'Robert Sánchez', pos: ['GK'], rating: 83, num: 1, nation: 'España', code: 'ES', flag: '🇪🇸', club: 'Brighton' }
    ]
  },
  {
    id: 'cry_2022', name: 'Crystal Palace', shortCode: 'CRY', type: 'champions', year: '2022', tag: 'Premier 2022', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', country: 'England', tier: 'bronze',
    players: [
      { name: 'Wilfried Zaha', pos: ['LW', 'ST'], rating: 86, bonus: 1, num: 11, nation: 'Costa de Marfil', code: 'CI', flag: '🇨🇮', club: 'Crystal Palace' },
      { name: 'Eberechi Eze', pos: ['AM', 'LW'], rating: 85, num: 10, nation: 'Inglaterra', code: 'ENG', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', club: 'Crystal Palace' },
      { name: 'Michael Olise', pos: ['RW', 'AM'], rating: 85, num: 7, nation: 'Francia', code: 'FR', flag: '🇫🇷', club: 'Crystal Palace' },
      { name: 'Conor Gallagher', pos: ['CM', 'AM'], rating: 84, num: 23, nation: 'Inglaterra', code: 'ENG', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', club: 'Crystal Palace' },
      { name: 'Marc Guéhi', pos: ['CB'], rating: 83, num: 6, nation: 'Inglaterra', code: 'ENG', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', club: 'Crystal Palace' },
      { name: 'Joachim Andersen', pos: ['CB'], rating: 83, num: 16, nation: 'Dinamarca', code: 'DK', flag: '🇩🇰', club: 'Crystal Palace' },
      { name: 'Tyrick Mitchell', pos: ['LB'], rating: 81, num: 3, nation: 'Inglaterra', code: 'ENG', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', club: 'Crystal Palace' },
      { name: 'Joel Ward', pos: ['RB'], rating: 80, num: 2, nation: 'Inglaterra', code: 'ENG', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', club: 'Crystal Palace' },
      { name: 'Cheikhou Kouyaté', pos: ['DM', 'CB'], rating: 81, num: 8, nation: 'Senegal', code: 'SN', flag: '🇸🇳', club: 'Crystal Palace' },
      { name: 'Odsonne Édouard', pos: ['ST'], rating: 82, num: 22, nation: 'Francia', code: 'FR', flag: '🇫🇷', club: 'Crystal Palace' },
      { name: 'Vicente Guaita', pos: ['GK'], rating: 82, num: 13, nation: 'España', code: 'ES', flag: '🇪🇸', club: 'Crystal Palace' }
    ]
  },
  {
    id: 'civ_2006', name: 'Costa de Marfil', shortCode: 'CIV', type: 'worldcup', year: '2006', tag: 'Cup 2006', flag: '🇨🇮', country: 'Ivory Coast', tier: 'gold',
    players: [
      { name: 'Didier Drogba', pos: ['ST'], rating: 93, bonus: 1, num: 11, nation: 'Costa de Marfil', code: 'CI', flag: '🇨🇮', club: 'Chelsea' },
      { name: 'Yaya Touré', pos: ['CM', 'DM'], rating: 90, num: 19, nation: 'Costa de Marfil', code: 'CI', flag: '🇨🇮', club: 'Olympiacos' },
      { name: 'Kolo Touré', pos: ['CB'], rating: 89, num: 4, nation: 'Costa de Marfil', code: 'CI', flag: '🇨🇮', club: 'Arsenal' },
      { name: 'Didier Zokora', pos: ['DM', 'CB'], rating: 86, num: 5, nation: 'Costa de Marfil', code: 'CI', flag: '🇨🇮', club: 'Saint-Étienne' },
      { name: 'Emmanuel Eboué', pos: ['RB'], rating: 86, num: 21, nation: 'Costa de Marfil', code: 'CI', flag: '🇨🇮', club: 'Arsenal' },
      { name: 'Arthur Boka', pos: ['LB'], rating: 84, num: 3, nation: 'Costa de Marfil', code: 'CI', flag: '🇨🇮', club: 'Strasbourg' },
      { name: 'Bonaventure Kalou', pos: ['AM', 'RW'], rating: 85, num: 8, nation: 'Costa de Marfil', code: 'CI', flag: '🇨🇮', club: 'PSG' },
      { name: 'Aruna Dindane', pos: ['ST', 'LW'], rating: 85, num: 15, nation: 'Costa de Marfil', code: 'CI', flag: '🇨🇮', club: 'Lens' },
      { name: 'Bakari Koné', pos: ['RW', 'ST'], rating: 84, num: 14, nation: 'Costa de Marfil', code: 'CI', flag: '🇨🇮', club: 'Nice' },
      { name: 'Abdoulaye Méïté', pos: ['CB'], rating: 83, num: 6, nation: 'Costa de Marfil', code: 'CI', flag: '🇨🇮', club: 'Marseille' },
      { name: 'Jean-Jacques Tizié', pos: ['GK'], rating: 82, num: 1, nation: 'Costa de Marfil', code: 'CI', flag: '🇨🇮', club: 'Espérance' }
    ]
  },
  {
    id: 'ukr_2006', name: 'Ucrania', shortCode: 'UKR', type: 'worldcup', year: '2006', tag: 'Cup 2006', flag: '🇺🇦', country: 'Ukraine', tier: 'gold',
    players: [
      { name: 'Andriy Shevchenko', pos: ['ST'], rating: 94, bonus: 1, num: 7, nation: 'Ucrania', code: 'UA', flag: '🇺🇦', club: 'Milan' },
      { name: 'Serhiy Rebrov', pos: ['ST', 'AM'], rating: 87, num: 11, nation: 'Ucrania', code: 'UA', flag: '🇺🇦', club: 'Dynamo Kyiv' },
      { name: 'Anatoliy Tymoshchuk', pos: ['DM', 'CB'], rating: 88, num: 4, nation: 'Ucrania', code: 'UA', flag: '🇺🇦', club: 'Shakhtar Donetsk' },
      { name: 'Oleh Husyev', pos: ['RM', 'RB'], rating: 86, num: 9, nation: 'Ucrania', code: 'UA', flag: '🇺🇦', club: 'Dynamo Kyiv' },
      { name: 'Maksym Kalynychenko', pos: ['LM', 'LW'], rating: 85, num: 19, nation: 'Ucrania', code: 'UA', flag: '🇺🇦', club: 'Spartak Moscow' },
      { name: 'Andriy Rusol', pos: ['CB'], rating: 84, num: 6, nation: 'Ucrania', code: 'UA', flag: '🇺🇦', club: 'Dnipro' },
      { name: 'Vladyslav Vashchuk', pos: ['CB'], rating: 84, num: 17, nation: 'Ucrania', code: 'UA', flag: '🇺🇦', club: 'Dynamo Kyiv' },
      { name: 'Andriy Nesmachniy', pos: ['LB'], rating: 84, num: 2, nation: 'Ucrania', code: 'UA', flag: '🇺🇦', club: 'Dynamo Kyiv' },
      { name: 'Oleh Shelayev', pos: ['CM'], rating: 83, num: 8, nation: 'Ucrania', code: 'UA', flag: '🇺🇦', club: 'Dnipro' },
      { name: 'Andriy Voronin', pos: ['ST', 'AM'], rating: 85, num: 10, nation: 'Ucrania', code: 'UA', flag: '🇺🇦', club: 'Bayer Leverkusen' },
      { name: 'Oleksandr Shovkovskiy', pos: ['GK'], rating: 86, num: 1, nation: 'Ucrania', code: 'UA', flag: '🇺🇦', club: 'Dynamo Kyiv' }
    ]
  },
  {
    id: 'wal_2016', name: 'Gales', shortCode: 'WAL', type: 'worldcup', year: '2016', tag: 'Euro 2016', flag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿', country: 'Wales', tier: 'gold',
    players: [
      { name: 'Gareth Bale', pos: ['RW', 'ST'], rating: 94, bonus: 1, num: 11, nation: 'Gales', code: 'WAL', flag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿', club: 'Real Madrid' },
      { name: 'Aaron Ramsey', pos: ['CM', 'AM'], rating: 88, num: 10, nation: 'Gales', code: 'WAL', flag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿', club: 'Arsenal' },
      { name: 'Joe Allen', pos: ['CM', 'DM'], rating: 85, num: 7, nation: 'Gales', code: 'WAL', flag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿', club: 'Liverpool' },
      { name: 'Ashley Williams', pos: ['CB'], rating: 86, num: 6, nation: 'Gales', code: 'WAL', flag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿', club: 'Swansea City' },
      { name: 'James Chester', pos: ['CB'], rating: 83, num: 5, nation: 'Gales', code: 'WAL', flag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿', club: 'West Brom' },
      { name: 'Ben Davies', pos: ['CB', 'LB'], rating: 84, num: 4, nation: 'Gales', code: 'WAL', flag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿', club: 'Tottenham' },
      { name: 'Chris Gunter', pos: ['RB', 'RWB'], rating: 82, num: 2, nation: 'Gales', code: 'WAL', flag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿', club: 'Reading' },
      { name: 'Neil Taylor', pos: ['LB', 'LWB'], rating: 82, num: 3, nation: 'Gales', code: 'WAL', flag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿', club: 'Swansea City' },
      { name: 'Joe Ledley', pos: ['DM', 'CM'], rating: 83, num: 16, nation: 'Gales', code: 'WAL', flag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿', club: 'Crystal Palace' },
      { name: 'Hal Robson-Kanu', pos: ['ST'], rating: 83, num: 9, nation: 'Gales', code: 'WAL', flag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿', club: 'Reading' },
      { name: 'Wayne Hennessey', pos: ['GK'], rating: 83, num: 1, nation: 'Gales', code: 'WAL', flag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿', club: 'Crystal Palace' }
    ]
  },
  {
    id: 'nor_1998', name: 'Noruega', shortCode: 'NOR', type: 'worldcup', year: '1998', tag: 'Cup 1998', flag: '🇳🇴', country: 'Norway', tier: 'silver',
    players: [
      { name: 'Tore André Flo', pos: ['ST'], rating: 88, bonus: 1, num: 9, nation: 'Noruega', code: 'NO', flag: '🇳🇴', club: 'Chelsea' },
      { name: 'Ole Gunnar Solskjær', pos: ['ST'], rating: 88, num: 20, nation: 'Noruega', code: 'NO', flag: '🇳🇴', club: 'Man United' },
      { name: 'Kjetil Rekdal', pos: ['CM', 'DM'], rating: 85, num: 10, nation: 'Noruega', code: 'NO', flag: '🇳🇴', club: 'Hertha BSC' },
      { name: 'Ronny Johnsen', pos: ['CB', 'DM'], rating: 86, num: 5, nation: 'Noruega', code: 'NO', flag: '🇳🇴', club: 'Man United' },
      { name: 'Henning Berg', pos: ['CB', 'RB'], rating: 85, num: 3, nation: 'Noruega', code: 'NO', flag: '🇳🇴', club: 'Man United' },
      { name: 'Dan Eggen', pos: ['CB'], rating: 84, num: 15, nation: 'Noruega', code: 'NO', flag: '🇳🇴', club: 'Celta Vigo' },
      { name: 'Stig Inge Bjørnebye', pos: ['LB'], rating: 85, num: 4, nation: 'Noruega', code: 'NO', flag: '🇳🇴', club: 'Liverpool' },
      { name: 'Vegard Heggem', pos: ['RB'], rating: 83, num: 14, nation: 'Noruega', code: 'NO', flag: '🇳🇴', club: 'Rosenborg' },
      { name: 'Oyvind Leonhardsen', pos: ['CM', 'AM'], rating: 84, num: 8, nation: 'Noruega', code: 'NO', flag: '🇳🇴', club: 'Liverpool' },
      { name: 'Havard Flo', pos: ['LW', 'ST'], rating: 82, num: 7, nation: 'Noruega', code: 'NO', flag: '🇳🇴', club: 'Werder Bremen' },
      { name: 'Frode Grodas', pos: ['GK'], rating: 84, num: 1, nation: 'Noruega', code: 'NO', flag: '🇳🇴', club: 'Tottenham' }
    ]
  },
  {
    id: 'egy_2018', name: 'Egipto', shortCode: 'EGY', type: 'worldcup', year: '2018', tag: 'Cup 2018', flag: '🇪🇬', country: 'Egypt', tier: 'silver',
    players: [
      { name: 'Mohamed Salah', pos: ['RW', 'ST'], rating: 93, bonus: 1, num: 10, nation: 'Egipto', code: 'EG', flag: '🇪🇬', club: 'Liverpool' },
      { name: 'Mohamed Elneny', pos: ['CM', 'DM'], rating: 84, num: 17, nation: 'Egipto', code: 'EG', flag: '🇪🇬', club: 'Arsenal' },
      { name: 'Trézéguet (Mahmoud Hassan)', pos: ['LW', 'LM'], rating: 83, num: 21, nation: 'Egipto', code: 'EG', flag: '🇪🇬', club: 'Kasimpasa' },
      { name: 'Ahmed Hegazi', pos: ['CB'], rating: 83, num: 6, nation: 'Egipto', code: 'EG', flag: '🇪🇬', club: 'West Brom' },
      { name: 'Ali Gabr', pos: ['CB'], rating: 80, num: 2, nation: 'Egipto', code: 'EG', flag: '🇪🇬', club: 'Zamalek' },
      { name: 'Ahmed Fathy', pos: ['RB'], rating: 81, num: 7, nation: 'Egipto', code: 'EG', flag: '🇪🇬', club: 'Al Ahly' },
      { name: 'Mohamed Abdel-Shafy', pos: ['LB'], rating: 80, num: 13, nation: 'Egipto', code: 'EG', flag: '🇪🇬', club: 'Al Fateh' },
      { name: 'Tarek Hamed', pos: ['DM'], rating: 82, num: 8, nation: 'Egipto', code: 'EG', flag: '🇪🇬', club: 'Zamalek' },
      { name: 'Abdallah Said', pos: ['AM'], rating: 82, num: 19, nation: 'Egipto', code: 'EG', flag: '🇪🇬', club: 'KuPS' },
      { name: 'Marwan Mohsen', pos: ['ST'], rating: 79, num: 9, nation: 'Egipto', code: 'EG', flag: '🇪🇬', club: 'Al Ahly' },
      { name: 'Essam El-Hadary', pos: ['GK'], rating: 83, num: 1, nation: 'Egipto', code: 'EG', flag: '🇪🇬', club: 'Al-Taawoun' }
    ]
  },
  {
    id: 'can_2022', name: 'Canadá', shortCode: 'CAN', type: 'worldcup', year: '2022', tag: 'Cup 2022', flag: '🇨🇦', country: 'Canada', tier: 'silver',
    players: [
      { name: 'Alphonso Davies', pos: ['LB', 'LW'], rating: 89, bonus: 1, num: 19, nation: 'Canadá', code: 'CA', flag: '🇨🇦', club: 'Bayern' },
      { name: 'Jonathan David', pos: ['ST'], rating: 86, num: 20, nation: 'Canadá', code: 'CA', flag: '🇨🇦', club: 'Lille' },
      { name: 'Tajon Buchanan', pos: ['RW', 'RM'], rating: 83, num: 11, nation: 'Canadá', code: 'CA', flag: '🇨🇦', club: 'Club Brugge' },
      { name: 'Stephen Eustáquio', pos: ['CM', 'DM'], rating: 84, num: 7, nation: 'Canadá', code: 'CA', flag: '🇨🇦', club: 'Porto' },
      { name: 'Atiba Hutchinson', pos: ['CM', 'DM'], rating: 82, num: 13, nation: 'Canadá', code: 'CA', flag: '🇨🇦', club: 'Besiktas' },
      { name: 'Junior Hoilett', pos: ['LW', 'AM'], rating: 81, num: 10, nation: 'Canadá', code: 'CA', flag: '🇨🇦', club: 'Reading' },
      { name: 'Alistair Johnston', pos: ['RB', 'CB'], rating: 82, num: 2, nation: 'Canadá', code: 'CA', flag: '🇨🇦', club: 'CF Montréal' },
      { name: 'Kamal Miller', pos: ['CB'], rating: 81, num: 4, nation: 'Canadá', code: 'CA', flag: '🇨🇦', club: 'CF Montréal' },
      { name: 'Steven Vitória', pos: ['CB'], rating: 80, num: 5, nation: 'Canadá', code: 'CA', flag: '🇨🇦', club: 'Chaves' },
      { name: 'Richie Laryea', pos: ['RB', 'LB'], rating: 81, num: 22, nation: 'Canadá', code: 'CA', flag: '🇨🇦', club: 'Toronto FC' },
      { name: 'Milan Borjan', pos: ['GK'], rating: 82, num: 18, nation: 'Canadá', code: 'CA', flag: '🇨🇦', club: 'Red Star Belgrade' }
    ]
  },
  {
    id: 'aus_2006', name: 'Australia', shortCode: 'AUS', type: 'worldcup', year: '2006', tag: 'Cup 2006', flag: '🇦🇺', country: 'Australia', tier: 'silver',
    players: [
      { name: 'Tim Cahill', pos: ['AM', 'ST'], rating: 88, bonus: 1, num: 4, nation: 'Australia', code: 'AU', flag: '🇦🇺', club: 'Everton' },
      { name: 'Mark Viduka', pos: ['ST'], rating: 87, num: 9, nation: 'Australia', code: 'AU', flag: '🇦🇺', club: 'Middlesbrough' },
      { name: 'Harry Kewell', pos: ['LW', 'AM'], rating: 87, num: 10, nation: 'Australia', code: 'AU', flag: '🇦🇺', club: 'Liverpool' },
      { name: 'Mark Bresciano', pos: ['CM', 'LM'], rating: 84, num: 23, nation: 'Australia', code: 'AU', flag: '🇦🇺', club: 'Parma' },
      { name: 'Vince Grella', pos: ['DM'], rating: 84, num: 13, nation: 'Australia', code: 'AU', flag: '🇦🇺', club: 'Parma' },
      { name: 'Lucas Neill', pos: ['CB', 'RB'], rating: 85, num: 2, nation: 'Australia', code: 'AU', flag: '🇦🇺', club: 'Blackburn' },
      { name: 'Craig Moore', pos: ['CB'], rating: 84, num: 3, nation: 'Australia', code: 'AU', flag: '🇦🇺', club: 'Newcastle' },
      { name: 'Brett Emerton', pos: ['RM', 'RB'], rating: 84, num: 7, nation: 'Australia', code: 'AU', flag: '🇦🇺', club: 'Blackburn' },
      { name: 'Scott Chipperfield', pos: ['LB', 'LM'], rating: 83, num: 14, nation: 'Australia', code: 'AU', flag: '🇦🇺', club: 'Basel' },
      { name: 'Jason Culina', pos: ['CM'], rating: 82, num: 5, nation: 'Australia', code: 'AU', flag: '🇦🇺', club: 'PSV' },
      { name: 'Mark Schwarzer', pos: ['GK'], rating: 86, num: 1, nation: 'Australia', code: 'AU', flag: '🇦🇺', club: 'Middlesbrough' }
    ]
  },
  {
    id: 'alg_2014', name: 'Argelia', shortCode: 'ALG', type: 'worldcup', year: '2014', tag: 'Cup 2014', flag: '🇩🇿', country: 'Algeria', tier: 'silver',
    players: [
      { name: 'Sofiane Feghouli', pos: ['RW', 'RM'], rating: 86, bonus: 1, num: 10, nation: 'Argelia', code: 'DZ', flag: '🇩🇿', club: 'Valencia' },
      { name: 'Islam Slimani', pos: ['ST'], rating: 85, num: 13, nation: 'Argelia', code: 'DZ', flag: '🇩🇿', club: 'Sporting CP' },
      { name: 'Yacine Brahimi', pos: ['LW', 'AM'], rating: 85, num: 11, nation: 'Argelia', code: 'DZ', flag: '🇩🇿', club: 'Granada' },
      { name: 'Riyad Mahrez', pos: ['RW'], rating: 84, num: 21, nation: 'Argelia', code: 'DZ', flag: '🇩🇿', club: 'Leicester' },
      { name: 'Nabil Bentaleb', pos: ['CM'], rating: 83, num: 14, nation: 'Argelia', code: 'DZ', flag: '🇩🇿', club: 'Tottenham' },
      { name: 'Carl Medjani', pos: ['CB', 'DM'], rating: 82, num: 12, nation: 'Argelia', code: 'DZ', flag: '🇩🇿', club: 'Valenciennes' },
      { name: 'Madjid Bougherra', pos: ['CB'], rating: 82, num: 2, nation: 'Argelia', code: 'DZ', flag: '🇩🇿', club: 'Lekhwiya' },
      { name: 'Faouzi Ghoulam', pos: ['LB'], rating: 84, num: 3, nation: 'Argelia', code: 'DZ', flag: '🇩🇿', club: 'Napoli' },
      { name: 'Aïssa Mandi', pos: ['RB', 'CB'], rating: 83, num: 20, nation: 'Argelia', code: 'DZ', flag: '🇩🇿', club: 'Reims' },
      { name: 'Mehdi Lacen', pos: ['DM'], rating: 81, num: 8, nation: 'Argelia', code: 'DZ', flag: '🇩🇿', club: 'Getafe' },
      { name: 'Raïs M\'Bolhi', pos: ['GK'], rating: 84, num: 23, nation: 'Argelia', code: 'DZ', flag: '🇩🇿', club: 'CSKA Sofia' }
    ]
  },
  {
    id: 'bol_1994', name: 'Bolivia', shortCode: 'BOL', type: 'worldcup', year: '1994', tag: 'Cup 1994', flag: '🇧🇴', country: 'Bolivia', tier: 'bronze',
    players: [
      { name: 'Marco Etcheverry (El Diablo)', pos: ['AM'], rating: 87, bonus: 1, num: 10, nation: 'Bolivia', code: 'BO', flag: '🇧🇴', club: 'Colo-Colo' },
      { name: 'Erwin Sánchez (Platini)', pos: ['AM', 'CM'], rating: 86, num: 21, nation: 'Bolivia', code: 'BO', flag: '🇧🇴', club: 'Boavista' },
      { name: 'Julio César Baldivieso', pos: ['AM'], rating: 84, num: 8, nation: 'Bolivia', code: 'BO', flag: '🇧🇴', club: 'Bolívar' },
      { name: 'Jaime Moreno', pos: ['ST'], rating: 83, num: 9, nation: 'Bolivia', code: 'BO', flag: '🇧🇴', club: 'Blooming' },
      { name: 'Luis Cristaldo', pos: ['LB', 'DM'], rating: 82, num: 4, nation: 'Bolivia', code: 'BO', flag: '🇧🇴', club: 'Bolívar' },
      { name: 'Milton Melgar', pos: ['CM'], rating: 83, num: 6, nation: 'Bolivia', code: 'BO', flag: '🇧🇴', club: 'The Strongest' },
      { name: 'Carlos Borja', pos: ['RB', 'RM'], rating: 82, num: 16, nation: 'Bolivia', code: 'BO', flag: '🇧🇴', club: 'Bolívar' },
      { name: 'Miguel Rimba', pos: ['CB'], rating: 81, num: 3, nation: 'Bolivia', code: 'BO', flag: '🇧🇴', club: 'Bolívar' },
      { name: 'Gustavo Quinteros', pos: ['CB'], rating: 81, num: 5, nation: 'Bolivia', code: 'BO', flag: '🇧🇴', club: 'The Strongest' },
      { name: 'William Ramallo', pos: ['ST'], rating: 82, num: 11, nation: 'Bolivia', code: 'BO', flag: '🇧🇴', club: 'Oriente Petrolero' },
      { name: 'Carlos Trucco', pos: ['GK'], rating: 83, num: 1, nation: 'Bolivia', code: 'BO', flag: '🇧🇴', club: 'Bolívar' }
    ]
  },
  {
    id: 'hon_2010', name: 'Honduras', shortCode: 'HON', type: 'worldcup', year: '2010', tag: 'Cup 2010', flag: '🇭🇳', country: 'Honduras', tier: 'bronze',
    players: [
      { name: 'David Suazo (La Pantera)', pos: ['ST'], rating: 86, bonus: 1, num: 9, nation: 'Honduras', code: 'HN', flag: '🇭🇳', club: 'Genoa' },
      { name: 'Wilson Palacios', pos: ['DM', 'CM'], rating: 85, num: 8, nation: 'Honduras', code: 'HN', flag: '🇭🇳', club: 'Tottenham' },
      { name: 'Maynor Figueroa', pos: ['LB', 'CB'], rating: 84, num: 3, nation: 'Honduras', code: 'HN', flag: '🇭🇳', club: 'Wigan' },
      { name: 'Carlos Pavón', pos: ['ST'], rating: 83, num: 7, nation: 'Honduras', code: 'HN', flag: '🇭🇳', club: 'Real España' },
      { name: 'Amado Guevara', pos: ['CM'], rating: 83, num: 20, nation: 'Honduras', code: 'HN', flag: '🇭🇳', club: 'Motagua' },
      { name: 'Julio César de León (Rambo)', pos: ['AM'], rating: 83, num: 10, nation: 'Honduras', code: 'HN', flag: '🇭🇳', club: 'Torino' },
      { name: 'Edgar Álvarez', pos: ['RM', 'RB'], rating: 82, num: 17, nation: 'Honduras', code: 'HN', flag: '🇭🇳', club: 'Bari' },
      { name: 'Hendry Thomas', pos: ['DM'], rating: 81, num: 6, nation: 'Honduras', code: 'HN', flag: '🇭🇳', club: 'Wigan' },
      { name: 'Osman Chávez', pos: ['CB'], rating: 80, num: 2, nation: 'Honduras', code: 'HN', flag: '🇭🇳', club: 'Platense' },
      { name: 'Mauricio Sabillón', pos: ['RB'], rating: 79, num: 16, nation: 'Honduras', code: 'HN', flag: '🇭🇳', club: 'Hangzhou' },
      { name: 'Noel Valladares', pos: ['GK'], rating: 83, num: 18, nation: 'Honduras', code: 'HN', flag: '🇭🇳', club: 'Olimpia' }
    ]
  },
  {
    id: 'tog_2006', name: 'Togo', shortCode: 'TOG', type: 'worldcup', year: '2006', tag: 'Cup 2006', flag: '🇹🇬', country: 'Togo', tier: 'bronze',
    players: [
      { name: 'Emmanuel Adebayor', pos: ['ST'], rating: 88, bonus: 1, num: 4, nation: 'Togo', code: 'TG', flag: '🇹🇬', club: 'Arsenal' },
      { name: 'Alaixys Romao', pos: ['DM', 'CB'], rating: 82, num: 15, nation: 'Togo', code: 'TG', flag: '🇹🇬', club: 'Louhans-Cuiseaux' },
      { name: 'Mohamed Kader Touré', pos: ['ST', 'RW'], rating: 82, num: 17, nation: 'Togo', code: 'TG', flag: '🇹🇬', club: 'Guingamp' },
      { name: 'Moustapha Salifou', pos: ['AM'], rating: 80, num: 10, nation: 'Togo', code: 'TG', flag: '🇹🇬', club: 'Brest' },
      { name: 'Junior Sènaya', pos: ['ST', 'AM'], rating: 80, num: 11, nation: 'Togo', code: 'TG', flag: '🇹🇬', club: 'YF Juventus' },
      { name: 'Jean-Paul Abalo', pos: ['CB'], rating: 80, num: 3, nation: 'Togo', code: 'TG', flag: '🇹🇬', club: 'APOEL' },
      { name: 'Dare Nibombe', pos: ['CB'], rating: 80, num: 2, nation: 'Togo', code: 'TG', flag: '🇹🇬', club: 'Mons' },
      { name: 'Ludovic Assemoassa', pos: ['RB'], rating: 79, num: 12, nation: 'Togo', code: 'TG', flag: '🇹🇬', club: 'Clermont' },
      { name: 'Robert Malm', pos: ['ST'], rating: 79, num: 9, nation: 'Togo', code: 'TG', flag: '🇹🇬', club: 'Brest' },
      { name: 'Yao Aziawonou', pos: ['CM'], rating: 79, num: 6, nation: 'Togo', code: 'TG', flag: '🇹🇬', club: 'Young Boys' },
      { name: 'Kossi Agassa', pos: ['GK'], rating: 81, num: 16, nation: 'Togo', code: 'TG', flag: '🇹🇬', club: 'Metz' }
    ]
  },
  {
    id: 'hai_1974', name: 'Haití', shortCode: 'HAI', type: 'worldcup', year: '1974', tag: 'Cup 1974', flag: '🇭🇹', country: 'Haiti', tier: 'bronze',
    players: [
      { name: 'Emmanuel Sanon (Manno)', pos: ['ST'], rating: 85, bonus: 1, num: 7, nation: 'Haití', code: 'HT', flag: '🇭🇹', club: 'Don Bosco' },
      { name: 'Henri Francillon', pos: ['GK'], rating: 83, num: 1, nation: 'Haití', code: 'HT', flag: '🇭🇹', club: 'Victory SC' },
      { name: 'Philippe Vorbe', pos: ['CM', 'AM'], rating: 82, num: 8, nation: 'Haití', code: 'HT', flag: '🇭🇹', club: 'Violette AC' },
      { name: 'Guy Saint-Vil', pos: ['ST', 'LW'], rating: 80, num: 11, nation: 'Haití', code: 'HT', flag: '🇭🇹', club: 'RC Haïtien' },
      { name: 'Jean-Claude Désir', pos: ['CM'], rating: 80, num: 10, nation: 'Haití', code: 'HT', flag: '🇭🇹', club: 'Aigle Noir' },
      { name: 'Wilner Nazaire', pos: ['CB'], rating: 80, num: 3, nation: 'Haití', code: 'HT', flag: '🇭🇹', club: 'Valenciennes' },
      { name: 'Arsène Auguste', pos: ['CB'], rating: 79, num: 5, nation: 'Haití', code: 'HT', flag: '🇭🇹', club: 'RC Haïtien' },
      { name: 'Pierre Bayonne', pos: ['RB'], rating: 79, num: 4, nation: 'Haití', code: 'HT', flag: '🇭🇹', club: 'Violette AC' },
      { name: 'Wilfried Louis', pos: ['LB'], rating: 78, num: 2, nation: 'Haití', code: 'HT', flag: '🇭🇹', club: 'Don Bosco' },
      { name: 'Eddy Antoine', pos: ['DM'], rating: 79, num: 6, nation: 'Haití', code: 'HT', flag: '🇭🇹', club: 'RC Haïtien' },
      { name: 'Serge Ducosté', pos: ['CB'], rating: 78, num: 14, nation: 'Haití', code: 'HT', flag: '🇭🇹', club: 'Aigle Noir' }
    ]
  }
];

const mapPos = (p: string): any => {
  if (p === 'LM') return 'LW';
  if (p === 'RM') return 'RW';
  if (p === 'LWB') return 'LB';
  if (p === 'RWB') return 'RB';
  return p;
};

export const MORE_RICH_TEAMS: Team[] = MORE_RICH_RAW_TEAMS.map(team => ({
  id: team.id,
  name: team.name,
  shortCode: team.shortCode,
  type: team.type,
  year: team.year,
  tag: team.tag,
  flag: team.flag,
  country: team.country,
  tier: team.tier || 'silver',
  players: team.players.map((p: any, idx: number) => {
    const validPositions = (p.pos || ['CM']).map(mapPos);
    return {
      id: `${team.id}_${p.num || idx}_${idx}`,
      number: p.num || (idx + 1),
      name: p.name,
      positions: validPositions,
      primaryPos: validPositions[0],
      rating: p.rating,
      bonus: p.bonus,
      nation: p.nation,
      nationCode: p.code,
      flag: p.flag,
      club: p.club,
      year: team.year,
      tournament: team.type
    };
  })
}));
