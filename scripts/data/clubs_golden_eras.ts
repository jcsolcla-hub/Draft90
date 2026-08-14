import { buildTeam, Team } from '../teamBuilderHelper';

export const CLUBS_GOLDEN_ERAS: Team[] = [];

function add(t: Team) {
  CLUBS_GOLDEN_ERAS.push(t);
}

// ==========================================
// HISTORICAL GOLDEN ERAS & CLASSIC EUROPEAN CLUBS
// ==========================================

// 1. REAL MADRID 1960 (Pentacampeón Copa de Europa 1960)
add(buildTeam('rma_1960', 'Real Madrid', 'RMA', 'champions', '1960', 'Campeón Copa de Europa 1960', '🇪🇸', 'España', 'legendary', [
  { name: 'Alfredo Di Stéfano', pos: 'ST', rating: 97, bonus: 1 },
  { name: 'Ferenc Puskás', pos: 'ST', rating: 97 },
  { name: 'Francisco Gento', pos: 'LW', rating: 95 },
  { name: 'Luis del Sol', pos: 'CM', rating: 91 },
  { name: 'José María Vidal', pos: 'DM', rating: 87 },
  { name: 'José María Zárraga', pos: 'CM', rating: 89 },
  { name: 'Marquitos', pos: 'CB', rating: 89 },
  { name: 'José Santamaría', pos: 'CB', rating: 93 },
  { name: 'Pachín', pos: 'LB', rating: 87 },
  { name: 'Canário', pos: 'RW', rating: 88 },
  { name: 'Rogelio Domínguez', pos: 'GK', rating: 88 }
]));

// 2. SL BENFICA 1962 (Bicampeón de Europa)
add(buildTeam('slb_1962', 'SL Benfica', 'SLB', 'champions', '1962', 'Bicampeón de Europa 1962', '🇵🇹', 'Portugal', 'legendary', [
  { name: 'Eusébio', pos: 'ST', rating: 97, bonus: 1 },
  { name: 'José Águas', pos: 'ST', rating: 92 },
  { name: 'Mário Coluna', pos: 'CM', rating: 94 },
  { name: 'José Augusto', pos: 'RW', rating: 90 },
  { name: 'António Simões', pos: 'LW', rating: 90 },
  { name: 'Domiciano Cavém', pos: 'DM', rating: 88 },
  { name: 'Fernando Cruz', pos: 'LB', rating: 88 },
  { name: 'Germano', pos: 'CB', rating: 92 },
  { name: 'Ângelo Martins', pos: 'RB', rating: 87 },
  { name: 'Mário João', pos: 'CB', rating: 86 },
  { name: 'Costa Pereira', pos: 'GK', rating: 89 }
]));

// 3. INTER DE MILÁN 1965 (La Grande Inter de Helenio Herrera)
add(buildTeam('int_1965', 'Inter de Milán', 'INT', 'champions', '1965', 'Bicampeón de Europa 1965', '🇮🇹', 'Italia', 'legendary', [
  { name: 'Sandro Mazzola', pos: 'AM', rating: 95, bonus: 1 },
  { name: 'Luis Suárez Miramontes', pos: 'CM', rating: 95 },
  { name: 'Jair da Costa', pos: 'RW', rating: 90 },
  { name: 'Mario Corso', pos: 'LW', rating: 91 },
  { name: 'Gianfranco Bedin', pos: 'DM', rating: 88 },
  { name: 'Giacinto Facchetti', pos: 'LB', rating: 96 },
  { name: 'Armando Picchi', pos: 'CB', rating: 93 },
  { name: 'Aristide Guarneri', pos: 'CB', rating: 90 },
  { name: 'Tarcisio Burgnich', pos: 'RB', rating: 92 },
  { name: 'Joaquín Peiró', pos: 'ST', rating: 89 },
  { name: 'Giuliano Sarti', pos: 'GK', rating: 90 }
]));

// 4. CELTIC GLASGOW 1967 (Lisbon Lions)
add(buildTeam('cel_1967', 'Celtic FC', 'CEL', 'champions', '1967', 'Campeón Copa de Europa 1967', '🏴󠁧󠁢󠁳󠁣󠁴󠁿', 'Escocia', 'legendary', [
  { name: 'Jimmy Johnstone (Jinky)', pos: 'RW', rating: 94, bonus: 1 },
  { name: 'Stevie Chalmers', pos: 'ST', rating: 89 },
  { name: 'Willie Wallace', pos: 'ST', rating: 88 },
  { name: 'Bobby Lennox', pos: 'LW', rating: 90 },
  { name: 'Bertie Auld', pos: 'CM', rating: 89 },
  { name: 'Bobby Murdoch', pos: 'CM', rating: 91 },
  { name: 'Tommy Gemmell', pos: 'LB', rating: 92 },
  { name: 'Billy McNeill', pos: 'CB', rating: 93 },
  { name: 'John Clark', pos: 'CB', rating: 88 },
  { name: 'Jim Craig', pos: 'RB', rating: 87 },
  { name: 'Ronnie Simpson', pos: 'GK', rating: 88 }
]));

// 5. MANCHESTER UNITED 1968 (Campeón Copa de Europa 1968)
add(buildTeam('mun_1968', 'Manchester United', 'MUN', 'champions', '1968', 'Campeón Copa de Europa 1968', '🏴󠁧󠁢󠁥󠁮󠁧󠁿', 'Inglaterra', 'legendary', [
  { name: 'George Best', pos: 'RW', rating: 96, bonus: 1 },
  { name: 'Bobby Charlton', pos: 'AM', rating: 96 },
  { name: 'Brian Kidd', pos: 'ST', rating: 88 },
  { name: 'John Aston', pos: 'LW', rating: 88 },
  { name: 'Pat Crerand', pos: 'CM', rating: 89 },
  { name: 'Nobby Stiles', pos: 'DM', rating: 90 },
  { name: 'Tony Dunne', pos: 'LB', rating: 89 },
  { name: 'Bill Foulkes', pos: 'CB', rating: 90 },
  { name: 'David Sadler', pos: 'CB', rating: 87 },
  { name: 'Shay Brennan', pos: 'RB', rating: 86 },
  { name: 'Alex Stepney', pos: 'GK', rating: 88 }
]));

// 6. FEYENOORD 1970 (Campeón Copa de Europa 1970)
add(buildTeam('fey_1970', 'Feyenoord Rotterdam', 'FEY', 'champions', '1970', 'Campeón Copa de Europa 1970', '🇳🇱', 'Países Bajos', 'legendary', [
  { name: 'Ove Kindvall', pos: 'ST', rating: 92, bonus: 1 },
  { name: 'Wim van Hanegem', pos: 'CM', rating: 94 },
  { name: 'Coen Moulijn', pos: 'LW', rating: 91 },
  { name: 'Henk Wery', pos: 'RW', rating: 88 },
  { name: 'Wim Jansen', pos: 'DM', rating: 90 },
  { name: 'Franz Hasil', pos: 'CM', rating: 88 },
  { name: 'Theo van Duivenbode', pos: 'LB', rating: 87 },
  { name: 'Rinus Israël', pos: 'CB', rating: 91 },
  { name: 'Theo Laseroms', pos: 'CB', rating: 88 },
  { name: 'Piet Romeijn', pos: 'RB', rating: 86 },
  { name: 'Eddy Treijtel', pos: 'GK', rating: 88 }
]));

// 7. AJAX 1972 (Tricampeón de Europa / Fútbol Total)
add(buildTeam('aja_1972', 'AFC Ajax', 'AJA', 'champions', '1972', 'Fútbol Total 1972', '🇳🇱', 'Países Bajos', 'legendary', [
  { name: 'Johan Cruyff', pos: 'ST', rating: 97, bonus: 1 },
  { name: 'Piet Keizer', pos: 'LW', rating: 93 },
  { name: 'Sjaak Swart', pos: 'RW', rating: 90 },
  { name: 'Johan Neeskens', pos: 'CM', rating: 94 },
  { name: 'Gerrie Mühren', pos: 'CM', rating: 90 },
  { name: 'Arie Haan', pos: 'DM', rating: 92 },
  { name: 'Ruud Krol', pos: 'LB', rating: 94 },
  { name: 'Horst Blankenburg', pos: 'CB', rating: 90 },
  { name: 'Barry Hulshoff', pos: 'CB', rating: 90 },
  { name: 'Wim Suurbier', pos: 'RB', rating: 91 },
  { name: 'Heinz Stuy', pos: 'GK', rating: 89 }
]));

// 8. BAYERN MÜNCHEN 1975 (Tricampeón de Europa)
add(buildTeam('bay_1975', 'Bayern de Múnich', 'BAY', 'champions', '1975', 'Tricampeón de Europa 1975', '🇩🇪', 'Alemania', 'legendary', [
  { name: 'Gerd Müller', pos: 'ST', rating: 97, bonus: 1 },
  { name: 'Uli Hoeneß', pos: 'RW', rating: 92 },
  { name: 'Karl-Heinz Rummenigge', pos: 'LW', rating: 91 },
  { name: 'Franz Roth', pos: 'CM', rating: 89 },
  { name: 'Jupp Kapellmann', pos: 'CM', rating: 88 },
  { name: 'Bernd Dürnberger', pos: 'DM', rating: 87 },
  { name: 'Franz Beckenbauer', pos: 'CB', rating: 96 },
  { name: 'Hans-Georg Schwarzenbeck', pos: 'CB', rating: 91 },
  { name: 'Björn Andersson', pos: 'RB', rating: 86 },
  { name: 'Udo Horsmann', pos: 'LB', rating: 86 },
  { name: 'Sepp Maier', pos: 'GK', rating: 94 }
]));

// 9. LIVERPOOL 1977 (Campeón Copa de Europa 1977)
add(buildTeam('liv_1977', 'Liverpool FC', 'LIV', 'champions', '1977', 'Campeón Copa de Europa 1977', '🏴󠁧󠁢󠁥󠁮󠁧󠁿', 'Inglaterra', 'legendary', [
  { name: 'Kevin Keegan', pos: 'ST', rating: 95, bonus: 1 },
  { name: 'John Toshack', pos: 'ST', rating: 89 },
  { name: 'Steve Heighway', pos: 'LW', rating: 89 },
  { name: 'Ian Callaghan', pos: 'RW', rating: 89 },
  { name: 'Terry McDermott', pos: 'CM', rating: 90 },
  { name: 'Jimmy Case', pos: 'CM', rating: 88 },
  { name: 'Joey Jones', pos: 'LB', rating: 86 },
  { name: 'Emlyn Hughes', pos: 'CB', rating: 92 },
  { name: 'Tommy Smith', pos: 'CB', rating: 89 },
  { name: 'Phil Neal', pos: 'RB', rating: 91 },
  { name: 'Ray Clemence', pos: 'GK', rating: 92 }
]));

// 10. NOTTINGHAM FOREST 1979 (Bicampeón de Europa de Clough)
add(buildTeam('nfo_1979', 'Nottingham Forest', 'NFO', 'champions', '1979', 'Campeón Copa de Europa 1979', '🏴󠁧󠁢󠁥󠁮󠁧󠁿', 'Inglaterra', 'legendary', [
  { name: 'Trevor Francis', pos: 'ST', rating: 92, bonus: 1 },
  { name: 'Garry Birtles', pos: 'ST', rating: 89 },
  { name: 'John Robertson', pos: 'LW', rating: 92 },
  { name: 'Ian Bowyer', pos: 'CM', rating: 87 },
  { name: 'John McGovern', pos: 'CM', rating: 88 },
  { name: 'Martin O\'Neill', pos: 'RW', rating: 87 },
  { name: 'Frank Clark', pos: 'LB', rating: 86 },
  { name: 'Larry Lloyd', pos: 'CB', rating: 88 },
  { name: 'Kenny Burns', pos: 'CB', rating: 89 },
  { name: 'Viv Anderson', pos: 'RB', rating: 89 },
  { name: 'Peter Shilton', pos: 'GK', rating: 94 }
]));

// 11. ASTON VILLA 1982 (Campeón Copa de Europa 1982)
add(buildTeam('avl_1982', 'Aston Villa', 'AVL', 'champions', '1982', 'Campeón Copa de Europa 1982', '🏴󠁧󠁢󠁥󠁮󠁧󠁿', 'Inglaterra', 'legendary', [
  { name: 'Peter Withe', pos: 'ST', rating: 90, bonus: 1 },
  { name: 'Gary Shaw', pos: 'ST', rating: 89 },
  { name: 'Tony Morley', pos: 'LW', rating: 89 },
  { name: 'Gordon Cowans', pos: 'CM', rating: 89 },
  { name: 'Dennis Mortimer', pos: 'CM', rating: 89 },
  { name: 'Des Bremner', pos: 'RW', rating: 87 },
  { name: 'Gary Williams', pos: 'LB', rating: 86 },
  { name: 'Allan Evans', pos: 'CB', rating: 88 },
  { name: 'Ken McNaught', pos: 'CB', rating: 88 },
  { name: 'Kenny Swain', pos: 'RB', rating: 87 },
  { name: 'Jimmy Rimmer', pos: 'GK', rating: 88 }
]));

// 12. HAMBURGER SV 1983 (Campeón Copa de Europa 1983)
add(buildTeam('hsv_1983', 'Hamburger SV', 'HSV', 'champions', '1983', 'Campeón Copa de Europa 1983', '🇩🇪', 'Alemania', 'legendary', [
  { name: 'Horst Hrubesch', pos: 'ST', rating: 92, bonus: 1 },
  { name: 'Felix Magath', pos: 'AM', rating: 93 },
  { name: 'Lars Bastrup', pos: 'ST', rating: 87 },
  { name: 'Wolfgang Rolff', pos: 'DM', rating: 88 },
  { name: 'Jürgen Groh', pos: 'CM', rating: 87 },
  { name: 'Jimmy Hartwig', pos: 'CM', rating: 87 },
  { name: 'Bernd Wehmeyer', pos: 'LB', rating: 86 },
  { name: 'Ditmar Jakobs', pos: 'CB', rating: 89 },
  { name: 'Holger Hieronymus', pos: 'CB', rating: 88 },
  { name: 'Manfred Kaltz', pos: 'RB', rating: 92 },
  { name: 'Uli Stein', pos: 'GK', rating: 89 }
]));

// 13. LIVERPOOL 1984 (Campeón Copa de Europa 1984)
add(buildTeam('liv_1984', 'Liverpool FC', 'LIV', 'champions', '1984', 'Campeón Copa de Europa 1984', '🏴󠁧󠁢󠁥󠁮󠁧󠁿', 'Inglaterra', 'legendary', [
  { name: 'Ian Rush', pos: 'ST', rating: 95, bonus: 1 },
  { name: 'Kenny Dalglish', pos: 'ST', rating: 95 },
  { name: 'Graeme Souness', pos: 'CM', rating: 93 },
  { name: 'Sammy Lee', pos: 'RW', rating: 88 },
  { name: 'Craig Johnston', pos: 'LW', rating: 87 },
  { name: 'Ronnie Whelan', pos: 'CM', rating: 89 },
  { name: 'Alan Kennedy', pos: 'LB', rating: 88 },
  { name: 'Alan Hansen', pos: 'CB', rating: 93 },
  { name: 'Mark Lawrenson', pos: 'CB', rating: 92 },
  { name: 'Phil Neal', pos: 'RB', rating: 90 },
  { name: 'Bruce Grobbelaar', pos: 'GK', rating: 89 }
]));

// 14. JUVENTUS 1985 (Campeón Copa de Europa 1985)
add(buildTeam('juv_1985', 'Juventus FC', 'JUV', 'champions', '1985', 'Campeón Copa de Europa 1985', '🇮🇹', 'Italia', 'legendary', [
  { name: 'Michel Platini', pos: 'AM', rating: 97, bonus: 1 },
  { name: 'Paolo Rossi', pos: 'ST', rating: 93 },
  { name: 'Zbigniew Boniek', pos: 'ST', rating: 93 },
  { name: 'Marco Tardelli', pos: 'CM', rating: 92 },
  { name: 'Massimo Bonini', pos: 'DM', rating: 89 },
  { name: 'Massimo Briaschi', pos: 'RW', rating: 86 },
  { name: 'Antonio Cabrini', pos: 'LB', rating: 93 },
  { name: 'Gaetano Scirea', pos: 'CB', rating: 96 },
  { name: 'Sergio Brio', pos: 'CB', rating: 88 },
  { name: 'Luciano Favero', pos: 'RB', rating: 87 },
  { name: 'Stefano Tacconi', pos: 'GK', rating: 90 }
]));

// 15. STEAUA BUCAREST 1986 (Campeón Copa de Europa 1986)
add(buildTeam('ste_1986', 'Steaua Bucarest', 'STE', 'champions', '1986', 'Campeón Copa de Europa 1986', '🇷🇴', 'Rumania', 'legendary', [
  { name: 'Marius Lăcătuș', pos: 'RW', rating: 92, bonus: 1 },
  { name: 'Victor Pițurcă', pos: 'ST', rating: 90 },
  { name: 'Gavril Balint', pos: 'LW', rating: 89 },
  { name: 'László Bölöni', pos: 'CM', rating: 92 },
  { name: 'Mihail Majearu', pos: 'CM', rating: 88 },
  { name: 'Tudorel Stoica', pos: 'DM', rating: 89 },
  { name: 'Ilie Bărbulescu', pos: 'LB', rating: 87 },
  { name: 'Miodrag Belodedici', pos: 'CB', rating: 92 },
  { name: 'Adrian Bumbescu', pos: 'CB', rating: 88 },
  { name: 'Ștefan Iovan', pos: 'RB', rating: 89 },
  { name: 'Helmut Duckadam', pos: 'GK', rating: 91 }
]));

// 16. FC PORTO 1987 (Campeón Copa de Europa 1987)
add(buildTeam('fcp_1987', 'FC Porto', 'FCP', 'champions', '1987', 'Campeón Copa de Europa 1987', '🇵🇹', 'Portugal', 'legendary', [
  { name: 'Rabah Madjer', pos: 'ST', rating: 94, bonus: 1 },
  { name: 'Paulo Futre', pos: 'LW', rating: 93 },
  { name: 'Fernando Gomes', pos: 'ST', rating: 92 },
  { name: 'António André', pos: 'DM', rating: 88 },
  { name: 'António Sousa', pos: 'CM', rating: 89 },
  { name: 'Jaime Magalhães', pos: 'RW', rating: 88 },
  { name: 'Augusto Inácio', pos: 'LB', rating: 87 },
  { name: 'Celso', pos: 'CB', rating: 88 },
  { name: 'Eduardo Luís', pos: 'CB', rating: 87 },
  { name: 'João Pinto', pos: 'RB', rating: 90 },
  { name: 'Józef Młynarczyk', pos: 'GK', rating: 89 }
]));

// 17. PSV EINDHOVEN 1988 (Campeón Triplete Copa de Europa 1988)
add(buildTeam('psv_1988', 'PSV Eindhoven', 'PSV', 'champions', '1988', 'Campeón Copa de Europa 1988', '🇳🇱', 'Países Bajos', 'legendary', [
  { name: 'Wim Kieft', pos: 'ST', rating: 90, bonus: 1 },
  { name: 'Hans Gillhaus', pos: 'ST', rating: 88 },
  { name: 'Gerald Vanenburg', pos: 'RW', rating: 91 },
  { name: 'Søren Lerby', pos: 'CM', rating: 91 },
  { name: 'Berry van Aerle', pos: 'DM', rating: 88 },
  { name: 'Edward Linskens', pos: 'CM', rating: 87 },
  { name: 'Jan Heintze', pos: 'LB', rating: 88 },
  { name: 'Ronald Koeman', pos: 'CB', rating: 95 },
  { name: 'Ivan Nielsen', pos: 'CB', rating: 88 },
  { name: 'Eric Gerets', pos: 'RB', rating: 92 },
  { name: 'Hans van Breukelen', pos: 'GK', rating: 91 }
]));

// 18. AC MILAN 1989 (Bicampeón de Europa de Sacchi)
add(buildTeam('acm_1989', 'AC Milan', 'ACM', 'champions', '1989', 'Bicampeón de Europa 1989', '🇮🇹', 'Italia', 'legendary', [
  { name: 'Marco van Basten', pos: 'ST', rating: 96, bonus: 1 },
  { name: 'Ruud Gullit', pos: 'AM', rating: 95 },
  { name: 'Frank Rijkaard', pos: 'DM', rating: 95 },
  { name: 'Roberto Donadoni', pos: 'RW', rating: 92 },
  { name: 'Carlo Ancelotti', pos: 'CM', rating: 91 },
  { name: 'Angelo Colombo', pos: 'LM', rating: 87 },
  { name: 'Paolo Maldini', pos: 'LB', rating: 96 },
  { name: 'Franco Baresi', pos: 'CB', rating: 96 },
  { name: 'Alessandro Costacurta', pos: 'CB', rating: 92 },
  { name: 'Mauro Tassotti', pos: 'RB', rating: 91 },
  { name: 'Giovanni Galli', pos: 'GK', rating: 89 }
]));

// 19. SAMPDORIA 1991 (Scudetto y Finalista Copa de Europa 1992)
add(buildTeam('sam_1991', 'UC Sampdoria', 'SAM', 'champions', '1991', 'Campeón Serie A 1991', '🇮🇹', 'Italia', 'legendary', [
  { name: 'Gianluca Vialli', pos: 'ST', rating: 94, bonus: 1 },
  { name: 'Roberto Mancini', pos: 'ST', rating: 93 },
  { name: 'Attilio Lombardo', pos: 'RW', rating: 90 },
  { name: 'Toninho Cerezo', pos: 'CM', rating: 91 },
  { name: 'Fausto Pari', pos: 'DM', rating: 87 },
  { name: 'Srečko Katanec', pos: 'LM', rating: 89 },
  { name: 'Moreno Mannini', pos: 'RB', rating: 88 },
  { name: 'Pietro Vierchowod', pos: 'CB', rating: 93 },
  { name: 'Marco Lanna', pos: 'CB', rating: 87 },
  { name: 'Ivano Bonetti', pos: 'LB', rating: 86 },
  { name: 'Gianluca Pagliuca', pos: 'GK', rating: 92 }
]));

// 20. OLYMPIQUE MARSEILLE 1993 (Campeón Champions League 1993)
add(buildTeam('om_1993', 'Olympique de Marsella', 'OM', 'champions', '1993', 'Campeón Champions League 1993', '🇫🇷', 'Francia', 'legendary', [
  { name: 'Rudi Völler', pos: 'ST', rating: 92, bonus: 1 },
  { name: 'Alen Bokšić', pos: 'ST', rating: 91 },
  { name: 'Abedi Pelé', pos: 'AM', rating: 92 },
  { name: 'Didier Deschamps', pos: 'DM', rating: 92 },
  { name: 'Franck Sauzée', pos: 'CM', rating: 90 },
  { name: 'Jean-Jacques Eydelie', pos: 'CM', rating: 86 },
  { name: 'Éric Di Meco', pos: 'LB', rating: 87 },
  { name: 'Marcel Desailly', pos: 'CB', rating: 93 },
  { name: 'Basile Boli', pos: 'CB', rating: 91 },
  { name: 'Jocelyn Angloma', pos: 'RB', rating: 90 },
  { name: 'Fabien Barthez', pos: 'GK', rating: 90 }
]));

// 21. AJAX 1995 (Campeón Champions League Invicto 1995)
add(buildTeam('aja_1995', 'AFC Ajax', 'AJA', 'champions', '1995', 'Campeón Champions Invicto 1995', '🇳🇱', 'Países Bajos', 'legendary', [
  { name: 'Patrick Kluivert', pos: 'ST', rating: 91, bonus: 1 },
  { name: 'Jari Litmanen', pos: 'AM', rating: 94 },
  { name: 'Marc Overmars', pos: 'LW', rating: 92 },
  { name: 'Finidi George', pos: 'RW', rating: 90 },
  { name: 'Clarence Seedorf', pos: 'CM', rating: 91 },
  { name: 'Edgar Davids', pos: 'DM', rating: 92 },
  { name: 'Frank Rijkaard', pos: 'DM', rating: 93 },
  { name: 'Frank de Boer', pos: 'CB', rating: 92 },
  { name: 'Danny Blind', pos: 'CB', rating: 92 },
  { name: 'Michael Reiziger', pos: 'RB', rating: 89 },
  { name: 'Edwin van der Sar', pos: 'GK', rating: 93 }
]));

// 22. JUVENTUS 1996 (Campeón Champions League 1996)
add(buildTeam('juv_1996', 'Juventus FC', 'JUV', 'champions', '1996', 'Campeón Champions League 1996', '🇮🇹', 'Italia', 'legendary', [
  { name: 'Gianluca Vialli', pos: 'ST', rating: 93, bonus: 1 },
  { name: 'Fabrizio Ravanelli', pos: 'ST', rating: 91 },
  { name: 'Alessandro Del Piero', pos: 'ST', rating: 93 },
  { name: 'Paulo Sousa', pos: 'CM', rating: 91 },
  { name: 'Didier Deschamps', pos: 'DM', rating: 92 },
  { name: 'Antonio Conte', pos: 'CM', rating: 90 },
  { name: 'Gianluca Pessotto', pos: 'LB', rating: 88 },
  { name: 'Pietro Vierchowod', pos: 'CB', rating: 92 },
  { name: 'Ciro Ferrara', pos: 'CB', rating: 92 },
  { name: 'Moreno Torricelli', pos: 'RB', rating: 89 },
  { name: 'Angelo Peruzzi', pos: 'GK', rating: 92 }
]));

// 23. BORUSSIA DORTMUND 1997 (Campeón Champions League 1997)
add(buildTeam('bvb_1997', 'Borussia Dortmund', 'BVB', 'champions', '1997', 'Campeón Champions League 1997', '🇩🇪', 'Alemania', 'legendary', [
  { name: 'Karl-Heinz Riedle', pos: 'ST', rating: 92, bonus: 1 },
  { name: 'Stéphane Chapuisat', pos: 'ST', rating: 90 },
  { name: 'Andreas Möller', pos: 'AM', rating: 93 },
  { name: 'Lars Ricken', pos: 'AM', rating: 88 },
  { name: 'Paulo Sousa', pos: 'CM', rating: 90 },
  { name: 'Paul Lambert', pos: 'DM', rating: 89 },
  { name: 'Jörg Heinrich', pos: 'LB', rating: 88 },
  { name: 'Matthias Sammer', pos: 'CB', rating: 95 },
  { name: 'Jürgen Kohler', pos: 'CB', rating: 92 },
  { name: 'Stefan Reuter', pos: 'RB', rating: 90 },
  { name: 'Stefan Klos', pos: 'GK', rating: 89 }
]));

// 24. REAL MADRID 1998 (La Séptima 1998)
add(buildTeam('rma_1998', 'Real Madrid', 'RMA', 'champions', '1998', 'Campeón La Séptima 1998', '🇪🇸', 'España', 'legendary', [
  { name: 'Predrag Mijatović', pos: 'ST', rating: 92, bonus: 1 },
  { name: 'Raúl González', pos: 'ST', rating: 93 },
  { name: 'Fernando Morientes', pos: 'ST', rating: 89 },
  { name: 'Clarence Seedorf', pos: 'CM', rating: 91 },
  { name: 'Fernando Redondo', pos: 'DM', rating: 94 },
  { name: 'Christian Karembeu', pos: 'CM', rating: 88 },
  { name: 'Roberto Carlos', pos: 'LB', rating: 94 },
  { name: 'Fernando Hierro', pos: 'CB', rating: 93 },
  { name: 'Manuel Sanchís', pos: 'CB', rating: 90 },
  { name: 'Christian Panucci', pos: 'RB', rating: 89 },
  { name: 'Bodo Illgner', pos: 'GK', rating: 89 }
]));

// 25. VALENCIA CF 2001 (Finalista Champions 2001)
add(buildTeam('val_2001', 'Valencia CF', 'VAL', 'champions', '2001', 'Finalista Champions 2001', '🇪🇸', 'España', 'legendary', [
  { name: 'John Carew', pos: 'ST', rating: 89 },
  { name: 'Pablo Aimar', pos: 'AM', rating: 92, bonus: 1 },
  { name: 'Kily González', pos: 'LM', rating: 90 },
  { name: 'Gaizka Mendieta', pos: 'RM', rating: 93 },
  { name: 'Rubén Baraja', pos: 'CM', rating: 90 },
  { name: 'David Albelda', pos: 'DM', rating: 89 },
  { name: 'Amedeo Carboni', pos: 'LB', rating: 88 },
  { name: 'Mauricio Pellegrino', pos: 'CB', rating: 88 },
  { name: 'Roberto Ayala', pos: 'CB', rating: 93 },
  { name: 'Jocelyn Angloma', pos: 'RB', rating: 89 },
  { name: 'Santiago Cañizares', pos: 'GK', rating: 92 }
]));

// 26. DEPORTIVO LA CORUÑA 2004 (Semifinalista Champions 2004)
add(buildTeam('dep_2004', 'Deportivo de La Coruña', 'DEP', 'champions', '2004', 'Súper Dépor 2004', '🇪🇸', 'España', 'legendary', [
  { name: 'Walter Pandiani', pos: 'ST', rating: 89 },
  { name: 'Albert Luque', pos: 'LW', rating: 88 },
  { name: 'Juan Carlos Valerón', pos: 'AM', rating: 93, bonus: 1 },
  { name: 'Víctor Sánchez', pos: 'RW', rating: 88 },
  { name: 'Mauro Silva', pos: 'DM', rating: 92 },
  { name: 'Sergio González', pos: 'CM', rating: 88 },
  { name: 'Joan Capdevila', pos: 'LB', rating: 88 },
  { name: 'Noureddine Naybet', pos: 'CB', rating: 90 },
  { name: 'Jorge Andrade', pos: 'CB', rating: 89 },
  { name: 'Manuel Pablo', pos: 'RB', rating: 88 },
  { name: 'José Francisco Molina', pos: 'GK', rating: 89 }
]));

// 27. ARSENAL 2004 (Los Invencibles Premier League 2004)
add(buildTeam('ars_2004', 'Arsenal FC', 'ARS', 'champions', '2004', 'Los Invencibles 2004', '🏴󠁧󠁢󠁥󠁮󠁧󠁿', 'Inglaterra', 'legendary', [
  { name: 'Thierry Henry', pos: 'ST', rating: 96, bonus: 1 },
  { name: 'Dennis Bergkamp', pos: 'ST', rating: 94 },
  { name: 'Robert Pires', pos: 'LM', rating: 92 },
  { name: 'Freddie Ljungberg', pos: 'RM', rating: 90 },
  { name: 'Patrick Vieira', pos: 'CM', rating: 95 },
  { name: 'Gilberto Silva', pos: 'DM', rating: 90 },
  { name: 'Ashley Cole', pos: 'LB', rating: 93 },
  { name: 'Sol Campbell', pos: 'CB', rating: 93 },
  { name: 'Kolo Touré', pos: 'CB', rating: 89 },
  { name: 'Lauren', pos: 'RB', rating: 88 },
  { name: 'Jens Lehmann', pos: 'GK', rating: 90 }
]));

// 28. CHELSEA 2005 (Campeón Premier League de Mourinho 2005)
add(buildTeam('che_2005', 'Chelsea FC', 'CHE', 'champions', '2005', 'Campeón Premier League 2005', '🏴󠁧󠁢󠁥󠁮󠁧󠁿', 'Inglaterra', 'legendary', [
  { name: 'Didier Drogba', pos: 'ST', rating: 92, bonus: 1 },
  { name: 'Arjen Robben', pos: 'LW', rating: 91 },
  { name: 'Damien Duff', pos: 'RW', rating: 88 },
  { name: 'Frank Lampard', pos: 'CM', rating: 94 },
  { name: 'Claude Makélélé', pos: 'DM', rating: 94 },
  { name: 'Tiago Mendes', pos: 'CM', rating: 86 },
  { name: 'William Gallas', pos: 'LB', rating: 89 },
  { name: 'John Terry', pos: 'CB', rating: 94 },
  { name: 'Ricardo Carvalho', pos: 'CB', rating: 92 },
  { name: 'Paulo Ferreira', pos: 'RB', rating: 88 },
  { name: 'Petr Čech', pos: 'GK', rating: 94 }
]));

// 29. AS ROMA 2001 (Scudetto de Totti y Batistuta 2001)
add(buildTeam('rom_2001', 'AS Roma', 'ASR', 'champions', '2001', 'Campeón Serie A 2001', '🇮🇹', 'Italia', 'legendary', [
  { name: 'Gabriel Batistuta', pos: 'ST', rating: 94, bonus: 1 },
  { name: 'Francesco Totti', pos: 'AM', rating: 95 },
  { name: 'Vincenzo Montella', pos: 'ST', rating: 90 },
  { name: 'Damiano Tommasi', pos: 'CM', rating: 88 },
  { name: 'Emerson', pos: 'DM', rating: 91 },
  { name: 'Vincent Candela', pos: 'LM', rating: 89 },
  { name: 'Cafu', pos: 'RM', rating: 94 },
  { name: 'Walter Samuel (Il Muro)', pos: 'CB', rating: 93 },
  { name: 'Zago', pos: 'CB', rating: 87 },
  { name: 'Jonathan Zebina', pos: 'CB', rating: 86 },
  { name: 'Francesco Antonioli', pos: 'GK', rating: 87 }
]));

// 30. SEVILLA FC 2006 (Campeón Copa de la UEFA 2006)
add(buildTeam('sev_2006', 'Sevilla FC', 'SEV', 'champions', '2006', 'Campeón Copa de la UEFA 2006', '🇪🇸', 'España', 'legendary', [
  { name: 'Frédéric Kanouté', pos: 'ST', rating: 91, bonus: 1 },
  { name: 'Javier Saviola', pos: 'ST', rating: 88 },
  { name: 'Jesús Navas', pos: 'RW', rating: 89 },
  { name: 'Adriano Correia', pos: 'LW', rating: 88 },
  { name: 'Enzo Maresca', pos: 'CM', rating: 89 },
  { name: 'José Luis Martí', pos: 'DM', rating: 86 },
  { name: 'David Castedo', pos: 'LB', rating: 86 },
  { name: 'Javi Navarro', pos: 'CB', rating: 88 },
  { name: 'Julien Escudé', pos: 'CB', rating: 87 },
  { name: 'Dani Alves', pos: 'RB', rating: 92 },
  { name: 'Andrés Palop', pos: 'GK', rating: 90 }
]));
