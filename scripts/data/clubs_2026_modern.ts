import { buildTeam, Team } from '../teamBuilderHelper';

export const CLUBS_2026_MODERN: Team[] = [];

function add(t: Team) {
  CLUBS_2026_MODERN.push(t);
}

// ==========================================
// 2026 MODERN ELITE CLUBS (CURRENT ERA)
// ==========================================

// 1. REAL MADRID 2026
add(buildTeam('rma_2026', 'Real Madrid', 'RMA', 'champions', '2026', 'Plantilla Actual 2026', '🇪🇸', 'España', 'legendary', [
  { name: 'Kylian Mbappé', pos: 'ST', rating: 93, bonus: 1 },
  { name: 'Vinícius Jr.', pos: 'LW', rating: 92 },
  { name: 'Rodrygo', pos: 'RW', rating: 88 },
  { name: 'Jude Bellingham', pos: 'AM', rating: 92 },
  { name: 'Federico Valverde', pos: 'CM', rating: 89 },
  { name: 'Eduardo Camavinga', pos: 'DM', rating: 87 },
  { name: 'Ferland Mendy', pos: 'LB', rating: 84 },
  { name: 'Antonio Rüdiger', pos: 'CB', rating: 88 },
  { name: 'Éder Militão', pos: 'CB', rating: 87 },
  { name: 'Dani Carvajal', pos: 'RB', rating: 87 },
  { name: 'Thibaut Courtois', pos: 'GK', rating: 91 }
]));

// 2. FC BARCELONA 2026
add(buildTeam('bar_2026', 'FC Barcelona', 'FCB', 'champions', '2026', 'Plantilla Actual 2026', '🇪🇸', 'España', 'legendary', [
  { name: 'Robert Lewandowski', pos: 'ST', rating: 90, bonus: 1 },
  { name: 'Lamine Yamal', pos: 'RW', rating: 91 },
  { name: 'Raphinha', pos: 'LW', rating: 89 },
  { name: 'Dani Olmo', pos: 'AM', rating: 88 },
  { name: 'Pedri', pos: 'CM', rating: 89 },
  { name: 'Gavi', pos: 'CM', rating: 87 },
  { name: 'Alejandro Balde', pos: 'LB', rating: 84 },
  { name: 'Pau Cubarsí', pos: 'CB', rating: 85 },
  { name: 'Ronald Araújo', pos: 'CB', rating: 88 },
  { name: 'Jules Koundé', pos: 'RB', rating: 87 },
  { name: 'Marc-André ter Stegen', pos: 'GK', rating: 89 }
]));

// 3. MANCHESTER CITY 2026
add(buildTeam('mci_2026', 'Manchester City', 'MCI', 'champions', '2026', 'Plantilla Actual 2026', '🏴󠁧󠁢󠁥󠁮󠁧󠁿', 'Inglaterra', 'legendary', [
  { name: 'Erling Haaland', pos: 'ST', rating: 93, bonus: 1 },
  { name: 'Phil Foden', pos: 'RW', rating: 90 },
  { name: 'Jérémy Doku', pos: 'LW', rating: 86 },
  { name: 'Kevin De Bruyne', pos: 'AM', rating: 92 },
  { name: 'Rodri', pos: 'DM', rating: 93 },
  { name: 'Bernardo Silva', pos: 'CM', rating: 89 },
  { name: 'Joško Gvardiol', pos: 'LB', rating: 87 },
  { name: 'Rúben Dias', pos: 'CB', rating: 89 },
  { name: 'Manuel Akanji', pos: 'CB', rating: 86 },
  { name: 'Kyle Walker', pos: 'RB', rating: 85 },
  { name: 'Ederson', pos: 'GK', rating: 88 }
]));

// 4. ARSENAL 2026
add(buildTeam('ars_2026', 'Arsenal FC', 'ARS', 'champions', '2026', 'Plantilla Actual 2026', '🏴󠁧󠁢󠁥󠁮󠁧󠁿', 'Inglaterra', 'legendary', [
  { name: 'Kai Havertz', pos: 'ST', rating: 87 },
  { name: 'Bukayo Saka', pos: 'RW', rating: 91, bonus: 1 },
  { name: 'Gabriel Martinelli', pos: 'LW', rating: 87 },
  { name: 'Martin Ødegaard', pos: 'AM', rating: 90 },
  { name: 'Declan Rice', pos: 'DM', rating: 89 },
  { name: 'Mikel Merino', pos: 'CM', rating: 86 },
  { name: 'Riccardo Calafiori', pos: 'LB', rating: 85 },
  { name: 'Gabriel Magalhães', pos: 'CB', rating: 88 },
  { name: 'William Saliba', pos: 'CB', rating: 89 },
  { name: 'Ben White', pos: 'RB', rating: 86 },
  { name: 'David Raya', pos: 'GK', rating: 87 }
]));

// 5. LIVERPOOL 2026
add(buildTeam('liv_2026', 'Liverpool FC', 'LIV', 'champions', '2026', 'Plantilla Actual 2026', '🏴󠁧󠁢󠁥󠁮󠁧󠁿', 'Inglaterra', 'legendary', [
  { name: 'Mohamed Salah', pos: 'RW', rating: 91, bonus: 1 },
  { name: 'Luis Díaz', pos: 'LW', rating: 88 },
  { name: 'Darwin Núñez', pos: 'ST', rating: 86 },
  { name: 'Dominik Szoboszlai', pos: 'AM', rating: 87 },
  { name: 'Alexis Mac Allister', pos: 'CM', rating: 88 },
  { name: 'Ryan Gravenberch', pos: 'DM', rating: 86 },
  { name: 'Andy Robertson', pos: 'LB', rating: 85 },
  { name: 'Virgil van Dijk', pos: 'CB', rating: 91 },
  { name: 'Ibrahima Konaté', pos: 'CB', rating: 87 },
  { name: 'Trent Alexander-Arnold', pos: 'RB', rating: 88 },
  { name: 'Alisson Becker', pos: 'GK', rating: 90 }
]));

// 6. BAYERN MÜNCHEN 2026
add(buildTeam('bay_2026', 'Bayern de Múnich', 'BAY', 'champions', '2026', 'Plantilla Actual 2026', '🇩🇪', 'Alemania', 'legendary', [
  { name: 'Harry Kane', pos: 'ST', rating: 92, bonus: 1 },
  { name: 'Jamal Musiala', pos: 'AM', rating: 91 },
  { name: 'Michael Olise', pos: 'RW', rating: 88 },
  { name: 'Leroy Sané', pos: 'LW', rating: 87 },
  { name: 'Joshua Kimmich', pos: 'DM', rating: 89 },
  { name: 'João Palhinha', pos: 'DM', rating: 86 },
  { name: 'Alphonso Davies', pos: 'LB', rating: 86 },
  { name: 'Dayot Upamecano', pos: 'CB', rating: 86 },
  { name: 'Kim Min-jae', pos: 'CB', rating: 86 },
  { name: 'Sacha Boey', pos: 'RB', rating: 82 },
  { name: 'Manuel Neuer', pos: 'GK', rating: 88 }
]));

// 7. BAYER LEVERKUSEN 2026
add(buildTeam('lev_2026', 'Bayer Leverkusen', 'B04', 'champions', '2026', 'Plantilla Actual 2026', '🇩🇪', 'Alemania', 'legendary', [
  { name: 'Victor Boniface', pos: 'ST', rating: 87 },
  { name: 'Florian Wirtz', pos: 'AM', rating: 91, bonus: 1 },
  { name: 'Martin Terrier', pos: 'LW', rating: 84 },
  { name: 'Granit Xhaka', pos: 'CM', rating: 88 },
  { name: 'Exequiel Palacios', pos: 'CM', rating: 86 },
  { name: 'Álex Grimaldo', pos: 'LB', rating: 88 },
  { name: 'Jeremie Frimpong', pos: 'RB', rating: 87 },
  { name: 'Jonathan Tah', pos: 'CB', rating: 87 },
  { name: 'Edmond Tapsoba', pos: 'CB', rating: 86 },
  { name: 'Piero Hincapié', pos: 'CB', rating: 85 },
  { name: 'Lukáš Hrádecký', pos: 'GK', rating: 86 }
]));

// 8. PARIS SAINT-GERMAIN 2026
add(buildTeam('psg_2026', 'Paris Saint-Germain', 'PSG', 'champions', '2026', 'Plantilla Actual 2026', '🇫🇷', 'Francia', 'legendary', [
  { name: 'Bradley Barcola', pos: 'LW', rating: 87 },
  { name: 'Ousmane Dembélé', pos: 'RW', rating: 88, bonus: 1 },
  { name: 'Gonçalo Ramos', pos: 'ST', rating: 84 },
  { name: 'Vitinha', pos: 'CM', rating: 88 },
  { name: 'João Neves', pos: 'CM', rating: 86 },
  { name: 'Warren Zaïre-Emery', pos: 'CM', rating: 85 },
  { name: 'Nuno Mendes', pos: 'LB', rating: 86 },
  { name: 'Willian Pacho', pos: 'CB', rating: 85 },
  { name: 'Marquinhos', pos: 'CB', rating: 87 },
  { name: 'Achraf Hakimi', pos: 'RB', rating: 88 },
  { name: 'Gianluigi Donnarumma', pos: 'GK', rating: 89 }
]));

// 9. INTER DE MILÁN 2026
add(buildTeam('int_2026', 'Inter de Milán', 'INT', 'champions', '2026', 'Plantilla Actual 2026', '🇮🇹', 'Italia', 'legendary', [
  { name: 'Lautaro Martínez', pos: 'ST', rating: 91, bonus: 1 },
  { name: 'Marcus Thuram', pos: 'ST', rating: 87 },
  { name: 'Hakan Çalhanoğlu', pos: 'DM', rating: 88 },
  { name: 'Nicolò Barella', pos: 'CM', rating: 89 },
  { name: 'Henrikh Mkhitaryan', pos: 'CM', rating: 85 },
  { name: 'Federico Dimarco', pos: 'LB', rating: 87 },
  { name: 'Denzel Dumfries', pos: 'RB', rating: 85 },
  { name: 'Alessandro Bastoni', pos: 'CB', rating: 88 },
  { name: 'Francesco Acerbi', pos: 'CB', rating: 84 },
  { name: 'Benjamin Pavard', pos: 'CB', rating: 86 },
  { name: 'Yann Sommer', pos: 'GK', rating: 87 }
]));

// 10. JUVENTUS 2026
add(buildTeam('juv_2026', 'Juventus FC', 'JUV', 'champions', '2026', 'Plantilla Actual 2026', '🇮🇹', 'Italia', 'gold', [
  { name: 'Dušan Vlahović', pos: 'ST', rating: 88, bonus: 1 },
  { name: 'Kenan Yıldız', pos: 'LW', rating: 85 },
  { name: 'Nicolás González', pos: 'RW', rating: 84 },
  { name: 'Teun Koopmeiners', pos: 'AM', rating: 87 },
  { name: 'Douglas Luiz', pos: 'CM', rating: 86 },
  { name: 'Khéphren Thuram', pos: 'DM', rating: 84 },
  { name: 'Andrea Cambiaso', pos: 'LB', rating: 85 },
  { name: 'Gleison Bremer', pos: 'CB', rating: 88 },
  { name: 'Federico Gatti', pos: 'CB', rating: 84 },
  { name: 'Pierre Kalulu', pos: 'RB', rating: 83 },
  { name: 'Michele Di Gregorio', pos: 'GK', rating: 86 }
]));

// 11. AC MILAN 2026
add(buildTeam('acm_2026', 'AC Milan', 'ACM', 'champions', '2026', 'Plantilla Actual 2026', '🇮🇹', 'Italia', 'gold', [
  { name: 'Álvaro Morata', pos: 'ST', rating: 85 },
  { name: 'Rafael Leão', pos: 'LW', rating: 89, bonus: 1 },
  { name: 'Christian Pulisic', pos: 'RW', rating: 87 },
  { name: 'Tijjani Reijnders', pos: 'CM', rating: 86 },
  { name: 'Youssouf Fofana', pos: 'DM', rating: 85 },
  { name: 'Ruben Loftus-Cheek', pos: 'CM', rating: 83 },
  { name: 'Theo Hernández', pos: 'LB', rating: 88 },
  { name: 'Strahinja Pavlović', pos: 'CB', rating: 84 },
  { name: 'Fikayo Tomori', pos: 'CB', rating: 85 },
  { name: 'Emerson Royal', pos: 'RB', rating: 82 },
  { name: 'Mike Maignan', pos: 'GK', rating: 89 }
]));

// 12. ATLÉTICO DE MADRID 2026
add(buildTeam('atm_2026', 'Atlético de Madrid', 'ATM', 'champions', '2026', 'Plantilla Actual 2026', '🇪🇸', 'España', 'legendary', [
  { name: 'Julián Álvarez', pos: 'ST', rating: 89, bonus: 1 },
  { name: 'Antoine Griezmann', pos: 'AM', rating: 90 },
  { name: 'Alexander Sørloth', pos: 'ST', rating: 85 },
  { name: 'Rodrigo De Paul', pos: 'CM', rating: 87 },
  { name: 'Conor Gallagher', pos: 'CM', rating: 85 },
  { name: 'Koke', pos: 'DM', rating: 85 },
  { name: 'Samuel Lino', pos: 'LM', rating: 85 },
  { name: 'Robin Le Normand', pos: 'CB', rating: 86 },
  { name: 'José María Giménez', pos: 'CB', rating: 86 },
  { name: 'Marcos Llorente', pos: 'RB', rating: 86 },
  { name: 'Jan Oblak', pos: 'GK', rating: 89 }
]));

// 13. CHELSEA 2026
add(buildTeam('che_2026', 'Chelsea FC', 'CHE', 'champions', '2026', 'Plantilla Actual 2026', '🏴󠁧󠁢󠁥󠁮󠁧󠁿', 'Inglaterra', 'gold', [
  { name: 'Nicolas Jackson', pos: 'ST', rating: 85 },
  { name: 'Cole Palmer', pos: 'AM', rating: 90, bonus: 1 },
  { name: 'Christopher Nkunku', pos: 'LW', rating: 86 },
  { name: 'Noni Madueke', pos: 'RW', rating: 84 },
  { name: 'Moisés Caicedo', pos: 'DM', rating: 87 },
  { name: 'Enzo Fernández', pos: 'CM', rating: 87 },
  { name: 'Marc Cucurella', pos: 'LB', rating: 85 },
  { name: 'Levi Colwill', pos: 'CB', rating: 85 },
  { name: 'Wesley Fofana', pos: 'CB', rating: 84 },
  { name: 'Reece James', pos: 'RB', rating: 86 },
  { name: 'Robert Sánchez', pos: 'GK', rating: 83 }
]));

// 14. TOTTENHAM HOTSPUR 2026
add(buildTeam('tot_2026', 'Tottenham Hotspur', 'TOT', 'champions', '2026', 'Plantilla Actual 2026', '🏴󠁧󠁢󠁥󠁮󠁧󠁿', 'Inglaterra', 'gold', [
  { name: 'Dominic Solanke', pos: 'ST', rating: 85 },
  { name: 'Son Heung-min', pos: 'LW', rating: 89, bonus: 1 },
  { name: 'Dejan Kulusevski', pos: 'RW', rating: 86 },
  { name: 'James Maddison', pos: 'AM', rating: 87 },
  { name: 'Rodrigo Bentancur', pos: 'CM', rating: 85 },
  { name: 'Yves Bissouma', pos: 'DM', rating: 84 },
  { name: 'Destiny Udogie', pos: 'LB', rating: 85 },
  { name: 'Micky van de Ven', pos: 'CB', rating: 86 },
  { name: 'Cristian Romero', pos: 'CB', rating: 88 },
  { name: 'Pedro Porro', pos: 'RB', rating: 86 },
  { name: 'Guglielmo Vicario', pos: 'GK', rating: 86 }
]));

// 15. ASTON VILLA 2026
add(buildTeam('avl_2026', 'Aston Villa', 'AVL', 'champions', '2026', 'Plantilla Actual 2026', '🏴󠁧󠁢󠁥󠁮󠁧󠁿', 'Inglaterra', 'gold', [
  { name: 'Ollie Watkins', pos: 'ST', rating: 88, bonus: 1 },
  { name: 'Leon Bailey', pos: 'RW', rating: 85 },
  { name: 'Morgan Rogers', pos: 'AM', rating: 84 },
  { name: 'Youri Tielemans', pos: 'CM', rating: 86 },
  { name: 'Amadou Onana', pos: 'DM', rating: 85 },
  { name: 'John McGinn', pos: 'CM', rating: 85 },
  { name: 'Lucas Digne', pos: 'LB', rating: 84 },
  { name: 'Pau Torres', pos: 'CB', rating: 86 },
  { name: 'Ezri Konsa', pos: 'CB', rating: 86 },
  { name: 'Matty Cash', pos: 'RB', rating: 83 },
  { name: 'Emiliano Martínez (Dibu)', pos: 'GK', rating: 90 }
]));

// 16. NEWCASTLE UNITED 2026
add(buildTeam('new_2026', 'Newcastle United', 'NEW', 'champions', '2026', 'Plantilla Actual 2026', '🏴󠁧󠁢󠁥󠁮󠁧󠁿', 'Inglaterra', 'gold', [
  { name: 'Alexander Isak', pos: 'ST', rating: 89, bonus: 1 },
  { name: 'Anthony Gordon', pos: 'LW', rating: 87 },
  { name: 'Jacob Murphy', pos: 'RW', rating: 82 },
  { name: 'Bruno Guimarães', pos: 'CM', rating: 88 },
  { name: 'Sandro Tonali', pos: 'CM', rating: 86 },
  { name: 'Joelinton', pos: 'CM', rating: 85 },
  { name: 'Lewis Hall', pos: 'LB', rating: 83 },
  { name: 'Fabian Schär', pos: 'CB', rating: 85 },
  { name: 'Sven Botman', pos: 'CB', rating: 85 },
  { name: 'Kieran Trippier', pos: 'RB', rating: 85 },
  { name: 'Nick Pope', pos: 'GK', rating: 85 }
]));

// 17. BORUSSIA DORTMUND 2026
add(buildTeam('bvb_2026', 'Borussia Dortmund', 'BVB', 'champions', '2026', 'Plantilla Actual 2026', '🇩🇪', 'Alemania', 'gold', [
  { name: 'Serhou Guirassy', pos: 'ST', rating: 87, bonus: 1 },
  { name: 'Karim Adeyemi', pos: 'LW', rating: 85 },
  { name: 'Julian Brandt', pos: 'AM', rating: 87 },
  { name: 'Marcel Sabitzer', pos: 'CM', rating: 86 },
  { name: 'Pascal Groß', pos: 'CM', rating: 85 },
  { name: 'Emre Can', pos: 'DM', rating: 84 },
  { name: 'Julian Ryerson', pos: 'LB', rating: 84 },
  { name: 'Nico Schlotterbeck', pos: 'CB', rating: 87 },
  { name: 'Waldemar Anton', pos: 'CB', rating: 85 },
  { name: 'Yan Couto', pos: 'RB', rating: 83 },
  { name: 'Gregor Kobel', pos: 'GK', rating: 88 }
]));

// 18. RB LEIPZIG 2026
add(buildTeam('rbl_2026', 'RB Leipzig', 'RBL', 'champions', '2026', 'Plantilla Actual 2026', '🇩🇪', 'Alemania', 'gold', [
  { name: 'Benjamin Šeško', pos: 'ST', rating: 87 },
  { name: 'Loïs Openda', pos: 'ST', rating: 87, bonus: 1 },
  { name: 'Xavi Simons', pos: 'AM', rating: 88 },
  { name: 'Christoph Baumgartner', pos: 'AM', rating: 84 },
  { name: 'Amadou Haidara', pos: 'CM', rating: 84 },
  { name: 'Nicolas Seiwald', pos: 'DM', rating: 83 },
  { name: 'David Raum', pos: 'LB', rating: 85 },
  { name: 'Castello Lukeba', pos: 'CB', rating: 85 },
  { name: 'Willi Orbán', pos: 'CB', rating: 86 },
  { name: 'Lutsharel Geertruida', pos: 'RB', rating: 84 },
  { name: 'Péter Gulácsi', pos: 'GK', rating: 85 }
]));

// 19. NAPOLI 2026
add(buildTeam('nap_2026', 'SSC Napoli', 'NAP', 'champions', '2026', 'Plantilla Actual 2026', '🇮🇹', 'Italia', 'gold', [
  { name: 'Romelu Lukaku', pos: 'ST', rating: 87 },
  { name: 'Khvicha Kvaratskhelia', pos: 'LW', rating: 89, bonus: 1 },
  { name: 'Matteo Politano', pos: 'RW', rating: 84 },
  { name: 'Scott McTominay', pos: 'CM', rating: 86 },
  { name: 'Stanislav Lobotka', pos: 'DM', rating: 87 },
  { name: 'André-Frank Zambo Anguissa', pos: 'CM', rating: 86 },
  { name: 'Mathías Olivera', pos: 'LB', rating: 83 },
  { name: 'Alessandro Buongiorno', pos: 'CB', rating: 86 },
  { name: 'Amir Rrahmani', pos: 'CB', rating: 85 },
  { name: 'Giovanni Di Lorenzo', pos: 'RB', rating: 86 },
  { name: 'Alex Meret', pos: 'GK', rating: 85 }
]));

// 20. AS ROMA 2026
add(buildTeam('rom_2026', 'AS Roma', 'ASR', 'champions', '2026', 'Plantilla Actual 2026', '🇮🇹', 'Italia', 'gold', [
  { name: 'Artem Dovbyk', pos: 'ST', rating: 87 },
  { name: 'Paulo Dybala', pos: 'AM', rating: 88, bonus: 1 },
  { name: 'Matías Soulé', pos: 'RW', rating: 84 },
  { name: 'Lorenzo Pellegrini', pos: 'CM', rating: 86 },
  { name: 'Manu Koné', pos: 'CM', rating: 84 },
  { name: 'Bryan Cristante', pos: 'DM', rating: 84 },
  { name: 'Angeliño', pos: 'LB', rating: 83 },
  { name: 'Gianluca Mancini', pos: 'CB', rating: 86 },
  { name: 'Evan Ndicka', pos: 'CB', rating: 85 },
  { name: 'Zeki Çelik', pos: 'RB', rating: 82 },
  { name: 'Mile Svilar', pos: 'GK', rating: 85 }
]));

// 21. ATALANTA 2026
add(buildTeam('ata_2026', 'Atalanta BC', 'ATA', 'champions', '2026', 'Plantilla Actual 2026', '🇮🇹', 'Italia', 'gold', [
  { name: 'Mateo Retegui', pos: 'ST', rating: 86 },
  { name: 'Ademola Lookman', pos: 'LW', rating: 89, bonus: 1 },
  { name: 'Charles De Ketelaere', pos: 'AM', rating: 86 },
  { name: 'Mario Pašalić', pos: 'CM', rating: 85 },
  { name: 'Marten de Roon', pos: 'DM', rating: 85 },
  { name: 'Éderson', pos: 'CM', rating: 87 },
  { name: 'Matteo Ruggeri', pos: 'LB', rating: 84 },
  { name: 'Sead Kolašinac', pos: 'CB', rating: 84 },
  { name: 'Isak Hien', pos: 'CB', rating: 85 },
  { name: 'Berat Djimsiti', pos: 'CB', rating: 84 },
  { name: 'Marco Carnesecchi', pos: 'GK', rating: 86 }
]));

// 22. SPORTING CP 2026
add(buildTeam('scp_2026', 'Sporting CP', 'SCP', 'champions', '2026', 'Plantilla Actual 2026', '🇵🇹', 'Portugal', 'gold', [
  { name: 'Viktor Gyökeres', pos: 'ST', rating: 90, bonus: 1 },
  { name: 'Francisco Trincão', pos: 'RW', rating: 86 },
  { name: 'Pedro Gonçalves (Pote)', pos: 'AM', rating: 87 },
  { name: 'Morten Hjulmand', pos: 'DM', rating: 87 },
  { name: 'Hidemasa Morita', pos: 'CM', rating: 85 },
  { name: 'Geny Catamo', pos: 'RM', rating: 83 },
  { name: 'Nuno Santos', pos: 'LM', rating: 84 },
  { name: 'Gonçalo Inácio', pos: 'CB', rating: 86 },
  { name: 'Ousmane Diomande', pos: 'CB', rating: 86 },
  { name: 'Eduardo Quaresma', pos: 'CB', rating: 83 },
  { name: 'Franco Israel', pos: 'GK', rating: 83 }
]));

// 23. SL BENFICA 2026
add(buildTeam('slb_2026', 'SL Benfica', 'SLB', 'champions', '2026', 'Plantilla Actual 2026', '🇵🇹', 'Portugal', 'gold', [
  { name: 'Vangelis Pavlidis', pos: 'ST', rating: 86 },
  { name: 'Ángel Di María', pos: 'RW', rating: 88, bonus: 1 },
  { name: 'Kerem Aktürkoğlu', pos: 'LW', rating: 86 },
  { name: 'Orkun Kökçü', pos: 'AM', rating: 86 },
  { name: 'Florentino Luís', pos: 'DM', rating: 85 },
  { name: 'Fredrik Aursnes', pos: 'CM', rating: 85 },
  { name: 'Álvaro Carreras', pos: 'LB', rating: 83 },
  { name: 'Nicolás Otamendi', pos: 'CB', rating: 86 },
  { name: 'António Silva', pos: 'CB', rating: 86 },
  { name: 'Alexander Bah', pos: 'RB', rating: 84 },
  { name: 'Anatoliy Trubin', pos: 'GK', rating: 86 }
]));

// 24. FC PORTO 2026
add(buildTeam('fcp_2026', 'FC Porto', 'FCP', 'champions', '2026', 'Plantilla Actual 2026', '🇵🇹', 'Portugal', 'gold', [
  { name: 'Samu Omorodion', pos: 'ST', rating: 86 },
  { name: 'Galeno', pos: 'LW', rating: 86, bonus: 1 },
  { name: 'Pepê', pos: 'RW', rating: 85 },
  { name: 'Nico González', pos: 'CM', rating: 85 },
  { name: 'Alan Varela', pos: 'DM', rating: 86 },
  { name: 'Stephen Eustáquio', pos: 'CM', rating: 83 },
  { name: 'Francisco Moura', pos: 'LB', rating: 82 },
  { name: 'Otávio', pos: 'CB', rating: 84 },
  { name: 'Zé Pedro', pos: 'CB', rating: 82 },
  { name: 'João Mário', pos: 'RB', rating: 84 },
  { name: 'Diogo Costa', pos: 'GK', rating: 88 }
]));

// 25. ATHLETIC CLUB 2026
add(buildTeam('ath_2026', 'Athletic Club', 'ATH', 'champions', '2026', 'Plantilla Actual 2026', '🇪🇸', 'España', 'gold', [
  { name: 'Gorka Guruzeta', pos: 'ST', rating: 85 },
  { name: 'Nico Williams', pos: 'LW', rating: 89, bonus: 1 },
  { name: 'Iñaki Williams', pos: 'RW', rating: 87 },
  { name: 'Oihan Sancet', pos: 'AM', rating: 87 },
  { name: 'Beñat Prados', pos: 'CM', rating: 84 },
  { name: 'Iñigo Ruiz de Galarreta', pos: 'DM', rating: 85 },
  { name: 'Yuri Berchiche', pos: 'LB', rating: 84 },
  { name: 'Dani Vivian', pos: 'CB', rating: 86 },
  { name: 'Aitor Paredes', pos: 'CB', rating: 84 },
  { name: 'Óscar de Marcos', pos: 'RB', rating: 84 },
  { name: 'Unai Simón', pos: 'GK', rating: 89 }
]));

// 26. REAL SOCIEDAD 2026
add(buildTeam('rso_2026', 'Real Sociedad', 'RSO', 'champions', '2026', 'Plantilla Actual 2026', '🇪🇸', 'España', 'gold', [
  { name: 'Mikel Oyarzabal', pos: 'ST', rating: 88, bonus: 1 },
  { name: 'Takefusa Kubo', pos: 'RW', rating: 87 },
  { name: 'Sergio Gómez', pos: 'LW', rating: 84 },
  { name: 'Brais Méndez', pos: 'AM', rating: 86 },
  { name: 'Martín Zubimendi', pos: 'DM', rating: 88 },
  { name: 'Luka Sučić', pos: 'CM', rating: 84 },
  { name: 'Javi López', pos: 'LB', rating: 83 },
  { name: 'Nayef Aguerd', pos: 'CB', rating: 85 },
  { name: 'Igor Zubeldia', pos: 'CB', rating: 85 },
  { name: 'Hamari Traoré', pos: 'RB', rating: 83 },
  { name: 'Álex Remiro', pos: 'GK', rating: 87 }
]));

// 27. REAL BETIS 2026
add(buildTeam('bet_2026', 'Real Betis', 'BET', 'champions', '2026', 'Plantilla Actual 2026', '🇪🇸', 'España', 'gold', [
  { name: 'Vitor Roque', pos: 'ST', rating: 84 },
  { name: 'Giovani Lo Celso', pos: 'AM', rating: 87, bonus: 1 },
  { name: 'Ez Abde', pos: 'LW', rating: 84 },
  { name: 'Pablo Fornals', pos: 'RW', rating: 84 },
  { name: 'Johnny Cardoso', pos: 'DM', rating: 85 },
  { name: 'Marc Roca', pos: 'CM', rating: 84 },
  { name: 'Romain Perraud', pos: 'LB', rating: 82 },
  { name: 'Natan', pos: 'CB', rating: 83 },
  { name: 'Diego Llorente', pos: 'CB', rating: 85 },
  { name: 'Héctor Bellerín', pos: 'RB', rating: 83 },
  { name: 'Rui Silva', pos: 'GK', rating: 84 }
]));

// 28. VILLARREAL CF 2026
add(buildTeam('vil_2026', 'Villarreal CF', 'VIL', 'champions', '2026', 'Plantilla Actual 2026', '🇪🇸', 'España', 'gold', [
  { name: 'Ayoze Pérez', pos: 'ST', rating: 87, bonus: 1 },
  { name: 'Thierno Barry', pos: 'ST', rating: 84 },
  { name: 'Álex Baena', pos: 'AM', rating: 87 },
  { name: 'Yéremy Pino', pos: 'RW', rating: 85 },
  { name: 'Dani Parejo', pos: 'CM', rating: 86 },
  { name: 'Santi Comesaña', pos: 'CM', rating: 84 },
  { name: 'Sergi Cardona', pos: 'LB', rating: 83 },
  { name: 'Raúl Albiol', pos: 'CB', rating: 84 },
  { name: 'Eric Bailly', pos: 'CB', rating: 84 },
  { name: 'Kiko Femenía', pos: 'RB', rating: 82 },
  { name: 'Diego Conde', pos: 'GK', rating: 84 }
]));

// 29. GIRONA FC 2026
add(buildTeam('gir_2026', 'Girona FC', 'GIR', 'champions', '2026', 'Plantilla Actual 2026', '🇪🇸', 'España', 'gold', [
  { name: 'Bojan Miovski', pos: 'ST', rating: 84 },
  { name: 'Viktor Tsygankov', pos: 'RW', rating: 86, bonus: 1 },
  { name: 'Bryan Gil', pos: 'LW', rating: 84 },
  { name: 'Iván Martín', pos: 'CM', rating: 85 },
  { name: 'Yangel Herrera', pos: 'CM', rating: 85 },
  { name: 'Oriol Romeu', pos: 'DM', rating: 83 },
  { name: 'Miguel Gutiérrez', pos: 'LB', rating: 86 },
  { name: 'Daley Blind', pos: 'CB', rating: 85 },
  { name: 'David López', pos: 'CB', rating: 84 },
  { name: 'Arnau Martínez', pos: 'RB', rating: 84 },
  { name: 'Paulo Gazzaniga', pos: 'GK', rating: 85 }
]));

// 30. OLYMPIQUE MARSEILLE 2026
add(buildTeam('om_2026', 'Olympique de Marsella', 'OM', 'champions', '2026', 'Plantilla Actual 2026', '🇫🇷', 'Francia', 'gold', [
  { name: 'Elye Wahi', pos: 'ST', rating: 85 },
  { name: 'Mason Greenwood', pos: 'RW', rating: 87, bonus: 1 },
  { name: 'Luis Henrique', pos: 'LW', rating: 84 },
  { name: 'Adrien Rabiot', pos: 'CM', rating: 87 },
  { name: 'Pierre-Emile Højbjerg', pos: 'DM', rating: 86 },
  { name: 'Valentin Rongier', pos: 'CM', rating: 84 },
  { name: 'Quentin Merlin', pos: 'LB', rating: 83 },
  { name: 'Leonardo Balerdi', pos: 'CB', rating: 85 },
  { name: 'Geoffrey Kondogbia', pos: 'CB', rating: 84 },
  { name: 'Michael Murillo', pos: 'RB', rating: 83 },
  { name: 'Gerónimo Rulli', pos: 'GK', rating: 85 }
]));

// 31. GALATASARAY 2026
add(buildTeam('gal_2026', 'Galatasaray SK', 'GAL', 'champions', '2026', 'Plantilla Actual 2026', '🇹🇷', 'Turquía', 'gold', [
  { name: 'Victor Osimhen', pos: 'ST', rating: 90, bonus: 1 },
  { name: 'Mauro Icardi', pos: 'ST', rating: 88 },
  { name: 'Dries Mertens', pos: 'AM', rating: 86 },
  { name: 'Lucas Torreira', pos: 'DM', rating: 86 },
  { name: 'Gabriel Sara', pos: 'CM', rating: 85 },
  { name: 'Barış Alper Yılmaz', pos: 'RW', rating: 85 },
  { name: 'Ismail Jakobs', pos: 'LB', rating: 83 },
  { name: 'Davinson Sánchez', pos: 'CB', rating: 86 },
  { name: 'Abdülkerim Bardakcı', pos: 'CB', rating: 85 },
  { name: 'Kaan Ayhan', pos: 'RB', rating: 83 },
  { name: 'Fernando Muslera', pos: 'GK', rating: 86 }
]));

// 32. FENERBAHÇE 2026
add(buildTeam('fen_2026', 'Fenerbahçe SK', 'FEN', 'champions', '2026', 'Plantilla Actual 2026', '🇹🇷', 'Turquía', 'gold', [
  { name: 'Edin Džeko', pos: 'ST', rating: 86 },
  { name: 'Youssef En-Nesyri', pos: 'ST', rating: 86, bonus: 1 },
  { name: 'Dušan Tadić', pos: 'LW', rating: 86 },
  { name: 'Sebastian Szymański', pos: 'AM', rating: 85 },
  { name: 'Sofyan Amrabat', pos: 'DM', rating: 85 },
  { name: 'Fred', pos: 'CM', rating: 86 },
  { name: 'Jayden Oosterwolde', pos: 'LB', rating: 84 },
  { name: 'Çağlar Söyüncü', pos: 'CB', rating: 85 },
  { name: 'Alexander Djiku', pos: 'CB', rating: 84 },
  { name: 'Mert Müldür', pos: 'RB', rating: 83 },
  { name: 'Dominik Livaković', pos: 'GK', rating: 87 }
]));

// 33. PSV EINDHOVEN 2026
add(buildTeam('psv_2026', 'PSV Eindhoven', 'PSV', 'champions', '2026', 'Plantilla Actual 2026', '🇳🇱', 'Países Bajos', 'gold', [
  { name: 'Luuk de Jong', pos: 'ST', rating: 86, bonus: 1 },
  { name: 'Johan Bakayoko', pos: 'RW', rating: 87 },
  { name: 'Noa Lang', pos: 'LW', rating: 85 },
  { name: 'Guus Til', pos: 'AM', rating: 84 },
  { name: 'Joey Veerman', pos: 'CM', rating: 86 },
  { name: 'Jerdy Schouten', pos: 'DM', rating: 86 },
  { name: 'Mauro Júnior', pos: 'LB', rating: 83 },
  { name: 'Olivier Boscagli', pos: 'CB', rating: 85 },
  { name: 'Ryan Flamingo', pos: 'CB', rating: 83 },
  { name: 'Rick Karsdorp', pos: 'RB', rating: 83 },
  { name: 'Walter Benítez', pos: 'GK', rating: 85 }
]));

// 34. FEYENOORD 2026
add(buildTeam('fey_2026', 'Feyenoord Rotterdam', 'FEY', 'champions', '2026', 'Plantilla Actual 2026', '🇳🇱', 'Países Bajos', 'gold', [
  { name: 'Santiago Giménez', pos: 'ST', rating: 87, bonus: 1 },
  { name: 'Igor Paixão', pos: 'LW', rating: 85 },
  { name: 'Calvin Stengs', pos: 'RW', rating: 85 },
  { name: 'Quinten Timber', pos: 'CM', rating: 86 },
  { name: 'Hwang In-beom', pos: 'CM', rating: 85 },
  { name: 'Antoni Milambo', pos: 'AM', rating: 84 },
  { name: 'Hugo Bueno', pos: 'LB', rating: 83 },
  { name: 'Dávid Hancko', pos: 'CB', rating: 87 },
  { name: 'Gernot Trauner', pos: 'CB', rating: 84 },
  { name: 'Givairo Read', pos: 'RB', rating: 81 },
  { name: 'Timon Wellenreuther', pos: 'GK', rating: 84 }
]));

// 35. AJAX 2026
add(buildTeam('aja_2026', 'AFC Ajax', 'AJA', 'champions', '2026', 'Plantilla Actual 2026', '🇳🇱', 'Países Bajos', 'gold', [
  { name: 'Brian Brobbey', pos: 'ST', rating: 85 },
  { name: 'Mika Godts', pos: 'LW', rating: 84 },
  { name: 'Bertrand Traoré', pos: 'RW', rating: 84 },
  { name: 'Davy Klaassen', pos: 'AM', rating: 84, bonus: 1 },
  { name: 'Kenneth Taylor', pos: 'CM', rating: 85 },
  { name: 'Jordan Henderson', pos: 'DM', rating: 85 },
  { name: 'Jorrel Hato', pos: 'LB', rating: 85 },
  { name: 'Youri Baas', pos: 'CB', rating: 83 },
  { name: 'Josip Šutalo', pos: 'CB', rating: 85 },
  { name: 'Devyne Rensch', pos: 'RB', rating: 83 },
  { name: 'Remko Pasveer', pos: 'GK', rating: 84 }
]));
