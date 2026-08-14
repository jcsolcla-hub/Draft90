import { buildTeam, Team } from '../teamBuilderHelper';

export const EXTRA_VARIETIES_TEAMS: Team[] = [];

function add(t: Team) {
  EXTRA_VARIETIES_TEAMS.push(t);
}

// 1. COSTA RICA 2014 (Cuartos de final)
add(buildTeam('crc_2014', 'Costa Rica', 'CRC', 'worldcup', '2014', 'Mundial Brasil 2014', '🇨🇷', 'Costa Rica', 'silver', [
  { name: 'Keylor Navas', pos: 'GK', rating: 92, bonus: 1, num: 1 },
  { name: 'Bryan Ruiz', pos: 'AM', rating: 86, num: 10 },
  { name: 'Joel Campbell', pos: 'ST', rating: 84, num: 9 },
  { name: 'Celso Borges', pos: 'CM', rating: 82, num: 5 },
  { name: 'Yeltsin Tejeda', pos: 'DM', rating: 80, num: 17 },
  { name: 'Christian Bolaños', pos: 'RW', rating: 82, num: 7 },
  { name: 'Júnior Díaz', pos: 'LB', rating: 80, num: 15 },
  { name: 'Giancarlo González', pos: 'CB', rating: 83, num: 3 },
  { name: 'Óscar Duarte', pos: 'CB', rating: 82, num: 6 },
  { name: 'Michael Umaña', pos: 'CB', rating: 81, num: 4 },
  { name: 'Cristian Gamboa', pos: 'RB', rating: 82, num: 16 }
]));

// 2. GHANA 2010 (Cuartos de final)
add(buildTeam('gha_2010', 'Ghana', 'GHA', 'worldcup', '2010', 'Mundial Sudáfrica 2010', '🇬🇭', 'Ghana', 'silver', [
  { name: 'Asamoah Gyan', pos: 'ST', rating: 89, bonus: 1, num: 3 },
  { name: 'Kevin-Prince Boateng', pos: 'AM', rating: 86, num: 23 },
  { name: 'Sulley Muntari', pos: 'CM', rating: 86, num: 11 },
  { name: 'André Ayew', pos: 'LW', rating: 84, num: 13 },
  { name: 'Anthony Annan', pos: 'DM', rating: 82, num: 6 },
  { name: 'Kwadwo Asamoah', pos: 'CM', rating: 84, num: 21 },
  { name: 'John Pantsil', pos: 'RB', rating: 82, num: 4 },
  { name: 'John Mensah', pos: 'CB', rating: 84, num: 5 },
  { name: 'Isaac Vorsah', pos: 'CB', rating: 82, num: 15 },
  { name: 'Hans Sarpei', pos: 'LB', rating: 81, num: 2 },
  { name: 'Richard Kingson', pos: 'GK', rating: 83, num: 22 }
]));

// 3. SENEGAL 2002 (Cuartos de final)
add(buildTeam('sen_2002', 'Senegal', 'SEN', 'worldcup', '2002', 'Mundial Corea-Japón 2002', '🇸🇳', 'Senegal', 'silver', [
  { name: 'El Hadji Diouf', pos: 'ST', rating: 89, bonus: 1, num: 11 },
  { name: 'Papa Bouba Diop', pos: 'DM', rating: 86, num: 19 },
  { name: 'Khalilou Fadiga', pos: 'AM', rating: 86, num: 10 },
  { name: 'Henri Camara', pos: 'ST', rating: 85, num: 7 },
  { name: 'Salif Diao', pos: 'DM', rating: 83, num: 15 },
  { name: 'Aliou Cissé', pos: 'CM', rating: 84, num: 6 },
  { name: 'Ferdinand Coly', pos: 'RB', rating: 82, num: 17 },
  { name: 'Lamine Diatta', pos: 'CB', rating: 83, num: 13 },
  { name: 'Pape Malick Diop', pos: 'CB', rating: 82, num: 4 },
  { name: 'Omar Daf', pos: 'LB', rating: 81, num: 2 },
  { name: 'Tony Sylva', pos: 'GK', rating: 84, num: 1 }
]));

// 4. BULGARIA 1994 (Semifinales USA 94)
add(buildTeam('bul_1994', 'Bulgaria', 'BUL', 'worldcup', '1994', 'Mundial USA 94', '🇧🇬', 'Bulgaria', 'legendary', [
  { name: 'Hristo Stoichkov', pos: 'ST', rating: 96, bonus: 1, num: 8 },
  { name: 'Krassimir Balakov', pos: 'AM', rating: 91, num: 10 },
  { name: 'Emil Kostadinov', pos: 'RW', rating: 89, num: 7 },
  { name: 'Yordan Lechkov', pos: 'CM', rating: 90, num: 9 },
  { name: 'Zlatko Yankov', pos: 'DM', rating: 85, num: 6 },
  { name: 'Nasko Sirakov', pos: 'ST', rating: 86, num: 11 },
  { name: 'Petar Hubchev', pos: 'CB', rating: 87, num: 5 },
  { name: 'Trifon Ivanov', pos: 'CB', rating: 88, num: 3 },
  { name: 'Emil Kremenliev', pos: 'RB', rating: 84, num: 16 },
  { name: 'Tsanko Tsvetanov', pos: 'LB', rating: 84, num: 4 },
  { name: 'Borislav Mikhailov', pos: 'GK', rating: 88, num: 1 }
]));

// 5. RUMANIA 1994 (Cuartos de final USA 94)
add(buildTeam('rou_1994', 'Rumania', 'ROU', 'worldcup', '1994', 'Mundial USA 94', '🇷🇴', 'Rumania', 'legendary', [
  { name: 'Gheorghe Hagi', pos: 'AM', rating: 96, bonus: 1, num: 10 },
  { name: 'Florin Răducioiu', pos: 'ST', rating: 90, num: 9 },
  { name: 'Ilie Dumitrescu', pos: 'LW', rating: 90, num: 11 },
  { name: 'Gheorghe Popescu', pos: 'DM', rating: 90, num: 6 },
  { name: 'Ioan Lupescu', pos: 'CM', rating: 86, num: 5 },
  { name: 'Dorinel Munteanu', pos: 'LM', rating: 86, num: 7 },
  { name: 'Dan Petrescu', pos: 'RB', rating: 88, num: 2 },
  { name: 'Daniel Prodan', pos: 'CB', rating: 85, num: 3 },
  { name: 'Miodrag Belodedici', pos: 'CB', rating: 89, num: 4 },
  { name: 'Tibor Selymes', pos: 'LB', rating: 84, num: 13 },
  { name: 'Bogdan Stelea', pos: 'GK', rating: 86, num: 12 }
]));

// 6. COREA DEL SUR 2002 (Semifinal 2002)
add(buildTeam('kor_2002', 'Corea del Sur', 'KOR', 'worldcup', '2002', 'Mundial Corea-Japón 2002', '🇰🇷', 'Corea del Sur', 'silver', [
  { name: 'Park Ji-sung', pos: 'RW', rating: 89, bonus: 1, num: 21 },
  { name: 'Ahn Jung-hwan', pos: 'ST', rating: 87, num: 19 },
  { name: 'Seol Ki-hyeon', pos: 'LW', rating: 85, num: 9 },
  { name: 'Yoo Sang-chul', pos: 'CM', rating: 86, num: 6 },
  { name: 'Kim Nam-il', pos: 'DM', rating: 84, num: 5 },
  { name: 'Song Chong-gug', pos: 'RB', rating: 85, num: 22 },
  { name: 'Hong Myung-bo', pos: 'CB', rating: 89, num: 20 },
  { name: 'Choi Jin-cheul', pos: 'CB', rating: 84, num: 4 },
  { name: 'Kim Tae-young', pos: 'CB', rating: 84, num: 7 },
  { name: 'Lee Young-pyo', pos: 'LB', rating: 86, num: 10 },
  { name: 'Lee Woon-jae', pos: 'GK', rating: 86, num: 1 }
]));

// 7. TURQUÍA 2002 (3er Lugar Mundial 2002)
add(buildTeam('tur_2002', 'Turquía', 'TUR', 'worldcup', '2002', 'Mundial Corea-Japón 2002', '🇹🇷', 'Turquía', 'silver', [
  { name: 'Hakan Şükür', pos: 'ST', rating: 89, bonus: 1, num: 9 },
  { name: 'Hasan Şaş', pos: 'LW', rating: 88, num: 11 },
  { name: 'Yıldıray Baştürk', pos: 'AM', rating: 87, num: 10 },
  { name: 'Emre Belözoğlu', pos: 'CM', rating: 87, num: 21 },
  { name: 'Tugay Kerimoğlu', pos: 'DM', rating: 87, num: 8 },
  { name: 'Ümit Davala', pos: 'RW', rating: 86, num: 22 },
  { name: 'Alpay Özalan', pos: 'CB', rating: 87, num: 5 },
  { name: 'Bülent Korkmaz', pos: 'CB', rating: 86, num: 3 },
  { name: 'Fatih Akyel', pos: 'RB', rating: 84, num: 4 },
  { name: 'Ergün Penbe', pos: 'LB', rating: 84, num: 18 },
  { name: 'Rüştü Reçber', pos: 'GK', rating: 90, num: 1 }
]));

// 8. SUECIA 1994 (3er Lugar USA 94)
add(buildTeam('swe_1994', 'Suecia', 'SWE', 'worldcup', '1994', 'Mundial USA 94', '🇸🇪', 'Suecia', 'legendary', [
  { name: 'Tomas Brolin', pos: 'AM', rating: 92, bonus: 1, num: 11 },
  { name: 'Martin Dahlin', pos: 'ST', rating: 90, num: 10 },
  { name: 'Kennet Andersson', pos: 'ST', rating: 89, num: 19 },
  { name: 'Henrik Larsson', pos: 'LW', rating: 88, num: 7 },
  { name: 'Jonas Thern', pos: 'CM', rating: 88, num: 9 },
  { name: 'Stefan Schwarz', pos: 'DM', rating: 87, num: 6 },
  { name: 'Roland Nilsson', pos: 'RB', rating: 86, num: 2 },
  { name: 'Patrik Andersson', pos: 'CB', rating: 89, num: 3 },
  { name: 'Joachim Björklund', pos: 'CB', rating: 86, num: 4 },
  { name: 'Pontus Kåmark', pos: 'LB', rating: 84, num: 5 },
  { name: 'Thomas Ravelli', pos: 'GK', rating: 90, num: 1 }
]));

// 9. NIGERIA 1994 & 1996
add(buildTeam('nga_1994', 'Nigeria', 'NGA', 'worldcup', '1994', 'Mundial USA 94', '🇳🇬', 'Nigeria', 'gold', [
  { name: 'Jay-Jay Okocha', pos: 'AM', rating: 91, bonus: 1, num: 10 },
  { name: 'Rashidi Yekini', pos: 'ST', rating: 90, num: 9 },
  { name: 'Daniel Amokachi', pos: 'ST', rating: 88, num: 14 },
  { name: 'Finidi George', pos: 'RW', rating: 89, num: 7 },
  { name: 'Emmanuel Amunike', pos: 'LW', rating: 88, num: 11 },
  { name: 'Sunday Oliseh', pos: 'DM', rating: 88, num: 15 },
  { name: 'Mutiu Adepoju', pos: 'CM', rating: 84, num: 8 },
  { name: 'Uche Okechukwu', pos: 'CB', rating: 87, num: 5 },
  { name: 'Chidi Nwanu', pos: 'CB', rating: 84, num: 6 },
  { name: 'Augustine Eguavoen', pos: 'RB', rating: 84, num: 2 },
  { name: 'Peter Rufai', pos: 'GK', rating: 86, num: 1 }
]));

// 10. DINAMARCA 1992 (Campeón Euro 92)
add(buildTeam('den_1992', 'Dinamarca', 'DEN', 'worldcup', '1992', 'Campeón Euro 1992', '🇩🇰', 'Dinamarca', 'legendary', [
  { name: 'Peter Schmeichel', pos: 'GK', rating: 94, bonus: 1, num: 1 },
  { name: 'Brian Laudrup', pos: 'ST', rating: 93, num: 11 },
  { name: 'Flemming Povlsen', pos: 'ST', rating: 87, num: 9 },
  { name: 'Kim Vilfort', pos: 'CM', rating: 87, num: 18 },
  { name: 'John Jensen', pos: 'CM', rating: 87, num: 7 },
  { name: 'Henrik Larsen', pos: 'AM', rating: 86, num: 13 },
  { name: 'Lars Olsen', pos: 'CB', rating: 88, num: 4 },
  { name: 'Torben Piechnik', pos: 'CB', rating: 84, num: 12 },
  { name: 'Kent Nielsen', pos: 'CB', rating: 85, num: 3 },
  { name: 'John Sivebæk', pos: 'RB', rating: 85, num: 2 },
  { name: 'Kim Christofte', pos: 'LB', rating: 84, num: 6 }
]));

// 11. CAMERÚN 1990 (Cuartos de final Italia 90)
add(buildTeam('cmr_1990', 'Camerún', 'CMR', 'worldcup', '1990', 'Mundial Italia 90', '🇨🇲', 'Camerún', 'gold', [
  { name: 'Roger Milla', pos: 'ST', rating: 92, bonus: 1, num: 9 },
  { name: 'François Omam-Biyik', pos: 'ST', rating: 88, num: 7 },
  { name: 'Cyrille Makanaky', pos: 'AM', rating: 86, num: 20 },
  { name: 'Louis-Paul Mfédé', pos: 'LW', rating: 85, num: 10 },
  { name: 'Émile Mbouh', pos: 'CM', rating: 84, num: 8 },
  { name: 'André Kana-Biyik', pos: 'DM', rating: 85, num: 6 },
  { name: 'Emmanuel Kundé', pos: 'CB', rating: 86, num: 14 },
  { name: 'Stephen Tataw', pos: 'RB', rating: 85, num: 4 },
  { name: 'Victor N\'Dip', pos: 'CB', rating: 84, num: 5 },
  { name: 'Bertin Ebwellé', pos: 'LB', rating: 84, num: 3 },
  { name: 'Thomas N\'Kono', pos: 'GK', rating: 90, num: 16 }
]));

// 12. COLOMBIA 1994
add(buildTeam('col_1994', 'Colombia', 'COL', 'worldcup', '1994', 'Mundial USA 94', '🇨🇴', 'Colombia', 'legendary', [
  { name: 'Carlos Valderrama', pos: 'AM', rating: 94, bonus: 1, num: 10 },
  { name: 'Faustino Asprilla', pos: 'ST', rating: 91, num: 11 },
  { name: 'Freddy Rincón', pos: 'CM', rating: 90, num: 19 },
  { name: 'Adolfo Valencia (Tren)', pos: 'ST', rating: 88, num: 14 },
  { name: 'Leonel Álvarez', pos: 'DM', rating: 89, num: 14 },
  { name: 'Gabriel Gómez', pos: 'CM', rating: 84, num: 6 },
  { name: 'Luis Fernando Herrera', pos: 'RB', rating: 85, num: 2 },
  { name: 'Andrés Escobar', pos: 'CB', rating: 88, num: 2 },
  { name: 'Luis Carlos Perea', pos: 'CB', rating: 86, num: 15 },
  { name: 'Wilson Pérez', pos: 'LB', rating: 84, num: 20 },
  { name: 'Óscar Córdoba', pos: 'GK', rating: 88, num: 1 }
]));

// 13. POLONIA 1974 (3er Lugar 1974)
add(buildTeam('pol_1974', 'Polonia', 'POL', 'worldcup', '1974', 'Mundial Alemania 74', '🇵🇱', 'Polonia', 'legendary', [
  { name: 'Grzegorz Lato', pos: 'RW', rating: 94, bonus: 1, num: 16 },
  { name: 'Kazimierz Deyna', pos: 'AM', rating: 94, num: 10 },
  { name: 'Andrzej Szarmach', pos: 'ST', rating: 91, num: 17 },
  { name: 'Robert Gadocha', pos: 'LW', rating: 90, num: 18 },
  { name: 'Henryk Kasperczak', pos: 'CM', rating: 88, num: 12 },
  { name: 'Zygmunt Maszczyk', pos: 'DM', rating: 86, num: 14 },
  { name: 'Antoni Szymanowski', pos: 'RB', rating: 88, num: 4 },
  { name: 'Jerzy Gorgoń', pos: 'CB', rating: 90, num: 6 },
  { name: 'Władysław Żmuda', pos: 'CB', rating: 89, num: 9 },
  { name: 'Adam Musiał', pos: 'LB', rating: 86, num: 5 },
  { name: 'Jan Tomaszewski', pos: 'GK', rating: 91, num: 2 }
]));

// 14. PERÚ 1970 (Cuartos de final México 70)
add(buildTeam('per_1970', 'Perú', 'PER', 'worldcup', '1970', 'Mundial México 70', '🇵🇪', 'Perú', 'legendary', [
  { name: 'Teófilo Cubillas', pos: 'AM', rating: 95, bonus: 1, num: 10 },
  { name: 'Héctor Chumpitaz', pos: 'CB', rating: 93, num: 4 },
  { name: 'Hugo Sotil', pos: 'ST', rating: 90, num: 20 },
  { name: 'Alberto Gallardo', pos: 'LW', rating: 89, num: 11 },
  { name: 'Julio Baylón', pos: 'RW', rating: 86, num: 7 },
  { name: 'Roberto Challe', pos: 'CM', rating: 88, num: 6 },
  { name: 'Ramón Mifflin', pos: 'DM', rating: 86, num: 8 },
  { name: 'Eloy Campos', pos: 'RB', rating: 85, num: 2 },
  { name: 'Orlando de la Torre', pos: 'CB', rating: 86, num: 3 },
  { name: 'Nicolás Fuentes', pos: 'LB', rating: 86, num: 5 },
  { name: 'Luis Rubiños', pos: 'GK', rating: 86, num: 1 }
]));

// 15. HUNGRÍA 1954 (Equipo de Oro)
add(buildTeam('hun_1954', 'Hungría', 'HUN', 'worldcup', '1954', 'Mundial Suiza 54', '🇭🇺', 'Hungría', 'legendary', [
  { name: 'Ferenc Puskás', pos: 'ST', rating: 98, bonus: 1, num: 10 },
  { name: 'Sándor Kocsis', pos: 'ST', rating: 95, num: 8 },
  { name: 'Zoltán Czibor', pos: 'LW', rating: 93, num: 11 },
  { name: 'Nándor Hidegkuti', pos: 'AM', rating: 93, num: 9 },
  { name: 'József Bozsik', pos: 'CM', rating: 93, num: 5 },
  { name: 'László Budai', pos: 'RW', rating: 89, num: 7 },
  { name: 'József Zakariás', pos: 'DM', rating: 88, num: 6 },
  { name: 'Jenő Buzánszky', pos: 'RB', rating: 88, num: 2 },
  { name: 'Gyula Lóránt', pos: 'CB', rating: 89, num: 3 },
  { name: 'Mihály Lantos', pos: 'LB', rating: 88, num: 4 },
  { name: 'Gyula Grosics', pos: 'GK', rating: 92, num: 1 }
]));

// 16. VILLARREAL CF 2006 (Semifinal Champions 2006)
add(buildTeam('vil_2006', 'Villarreal CF', 'VIL', 'champions', '2006', 'Champions League 2006', '🇪🇸', 'España', 'legendary', [
  { name: 'Juan Román Riquelme', pos: 'AM', rating: 94, bonus: 1 },
  { name: 'Diego Forlán', pos: 'ST', rating: 91 },
  { name: 'Marcos Senna', pos: 'DM', rating: 90 },
  { name: 'Juan Pablo Sorín', pos: 'LM', rating: 89 },
  { name: 'Josico', pos: 'DM', rating: 84 },
  { name: 'Guillermo Franco', pos: 'ST', rating: 83 },
  { name: 'Rodolfo Arruabarrena', pos: 'LB', rating: 86 },
  { name: 'Gonzalo Rodríguez', pos: 'CB', rating: 88 },
  { name: 'Quique Álvarez', pos: 'CB', rating: 84 },
  { name: 'Javi Venta', pos: 'RB', rating: 84 },
  { name: 'Mariano Barbosa', pos: 'GK', rating: 85 }
]));

// 17. AS MONACO 2017 (Campeón Ligue 1 y Semis Champions)
add(buildTeam('mon_2017', 'AS Monaco', 'ASM', 'champions', '2017', 'Champions League 2017', '🇫🇷', 'Francia', 'legendary', [
  { name: 'Kylian Mbappé', pos: 'ST', rating: 92, bonus: 1 },
  { name: 'Radamel Falcao', pos: 'ST', rating: 91 },
  { name: 'Bernardo Silva', pos: 'RW', rating: 91 },
  { name: 'Thomas Lemar', pos: 'LW', rating: 88 },
  { name: 'Fabinho', pos: 'DM', rating: 89 },
  { name: 'Tiémoué Bakayoko', pos: 'CM', rating: 86 },
  { name: 'Benjamin Mendy', pos: 'LB', rating: 86 },
  { name: 'Djibril Sidibé', pos: 'RB', rating: 85 },
  { name: 'Kamil Glik', pos: 'CB', rating: 87 },
  { name: 'Jemerson', pos: 'CB', rating: 85 },
  { name: 'Danijel Subašić', pos: 'GK', rating: 88 }
]));

// 18. OLYMPIQUE LYON 2005 (Heptacampeón Francia)
add(buildTeam('lyo_2005', 'Olympique Lyonnais', 'OL', 'champions', '2005', 'Champions League 2005', '🇫🇷', 'Francia', 'legendary', [
  { name: 'Juninho Pernambucano', pos: 'AM', rating: 93, bonus: 1 },
  { name: 'Michael Essien', pos: 'CM', rating: 91 },
  { name: 'Florent Malouda', pos: 'LW', rating: 89 },
  { name: 'Sidney Govou', pos: 'RW', rating: 87 },
  { name: 'Sylvain Wiltord', pos: 'ST', rating: 88 },
  { name: 'Mahamadou Diarra', pos: 'DM', rating: 88 },
  { name: 'Éric Abidal', pos: 'LB', rating: 89 },
  { name: 'Cris (El Policía)', pos: 'CB', rating: 89 },
  { name: 'Cláudio Caçapa', pos: 'CB', rating: 86 },
  { name: 'Anthony Réveillère', pos: 'RB', rating: 86 },
  { name: 'Grégory Coupet', pos: 'GK', rating: 90 }
]));

// 19. LEICESTER CITY 2016 (Milagro Premier League 2016)
add(buildTeam('lei_2016', 'Leicester City', 'LEI', 'champions', '2016', 'Campeón Premier League 2016', '🏴󠁧󠁢󠁥󠁮󠁧󠁿', 'Inglaterra', 'legendary', [
  { name: 'Jamie Vardy', pos: 'ST', rating: 91, bonus: 1 },
  { name: 'Riyad Mahrez', pos: 'RW', rating: 92 },
  { name: 'N\'Golo Kanté', pos: 'DM', rating: 92 },
  { name: 'Danny Drinkwater', pos: 'CM', rating: 85 },
  { name: 'Marc Albrighton', pos: 'LW', rating: 83 },
  { name: 'Shinji Okazaki', pos: 'ST', rating: 83 },
  { name: 'Wes Morgan', pos: 'CB', rating: 86 },
  { name: 'Robert Huth', pos: 'CB', rating: 86 },
  { name: 'Danny Simpson', pos: 'RB', rating: 83 },
  { name: 'Christian Fuchs', pos: 'LB', rating: 84 },
  { name: 'Kasper Schmeichel', pos: 'GK', rating: 89 }
]));

// 20. PARMA 1999 (Campeón Copa UEFA 1999)
add(buildTeam('par_1999', 'Parma AC', 'PAR', 'champions', '1999', 'Copa de la UEFA 1999', '🇮🇹', 'Italia', 'legendary', [
  { name: 'Hernán Crespo', pos: 'ST', rating: 93, bonus: 1 },
  { name: 'Juan Sebastián Verón', pos: 'AM', rating: 93 },
  { name: 'Enrico Chiesa', pos: 'ST', rating: 90 },
  { name: 'Dino Baggio', pos: 'CM', rating: 89 },
  { name: 'Alain Boghossian', pos: 'DM', rating: 86 },
  { name: 'Diego Fuser', pos: 'RM', rating: 86 },
  { name: 'Paolo Vanoli', pos: 'LM', rating: 84 },
  { name: 'Lilian Thuram', pos: 'RB', rating: 94 },
  { name: 'Fabio Cannavaro', pos: 'CB', rating: 94 },
  { name: 'Roberto Sensini', pos: 'CB', rating: 89 },
  { name: 'Gianluigi Buffon', pos: 'GK', rating: 93 }
]));

// 21. SS LAZIO 2000 (Scudetto 2000)
add(buildTeam('laz_2000', 'SS Lazio', 'LAZ', 'champions', '2000', 'Campeón Serie A 2000', '🇮🇹', 'Italia', 'legendary', [
  { name: 'Pavel Nedvěd', pos: 'LM', rating: 93, bonus: 1 },
  { name: 'Marcelo Salas', pos: 'ST', rating: 91 },
  { name: 'Juan Sebastián Verón', pos: 'AM', rating: 93 },
  { name: 'Diego Simeone', pos: 'CM', rating: 89 },
  { name: 'Matías Almeyda', pos: 'DM', rating: 89 },
  { name: 'Sérgio Conceição', pos: 'RM', rating: 88 },
  { name: 'Alessandro Nesta', pos: 'CB', rating: 95 },
  { name: 'Siniša Mihajlović', pos: 'CB', rating: 91 },
  { name: 'Giuseppe Pancaro', pos: 'LB', rating: 85 },
  { name: 'Paolo Negro', pos: 'RB', rating: 86 },
  { name: 'Luca Marchegiani', pos: 'GK', rating: 89 }
]));

// 22. GALATASARAY 2000 (Campeón Copa UEFA 2000)
add(buildTeam('gal_2000', 'Galatasaray SK', 'GAL', 'champions', '2000', 'Copa de la UEFA 2000', '🇹🇷', 'Turquía', 'legendary', [
  { name: 'Gheorghe Hagi', pos: 'AM', rating: 95, bonus: 1 },
  { name: 'Hakan Şükür', pos: 'ST', rating: 90 },
  { name: 'Arif Erdem', pos: 'ST', rating: 86 },
  { name: 'Okan Buruk', pos: 'RW', rating: 86 },
  { name: 'Emre Belözoğlu', pos: 'CM', rating: 86 },
  { name: 'Suat Kaya', pos: 'DM', rating: 84 },
  { name: 'Gheorghe Popescu', pos: 'CB', rating: 90 },
  { name: 'Bülent Korkmaz', pos: 'CB', rating: 87 },
  { name: 'Capone', pos: 'RB', rating: 84 },
  { name: 'Ergün Penbe', pos: 'LB', rating: 85 },
  { name: 'Cláudio Taffarel', pos: 'GK', rating: 91 }
]));

// 23. SHAKHTAR DONETSK 2009 (Campeón Copa UEFA 2009)
add(buildTeam('sha_2009', 'Shakhtar Donetsk', 'SHK', 'champions', '2009', 'Copa de la UEFA 2009', '🇺🇦', 'Ucrania', 'legendary', [
  { name: 'Fernandinho', pos: 'CM', rating: 89, bonus: 1 },
  { name: 'Willian', pos: 'LW', rating: 88 },
  { name: 'Jádson', pos: 'AM', rating: 88 },
  { name: 'Ilsinho', pos: 'RW', rating: 86 },
  { name: 'Luiz Adriano', pos: 'ST', rating: 86 },
  { name: 'Mariusz Lewandowski', pos: 'DM', rating: 84 },
  { name: 'Darijo Srna', pos: 'RB', rating: 90 },
  { name: 'Dmytro Chygrynskiy', pos: 'CB', rating: 86 },
  { name: 'Oleksandr Kucher', pos: 'CB', rating: 84 },
  { name: 'Răzvan Raț', pos: 'LB', rating: 85 },
  { name: 'Andriy Pyatov', pos: 'GK', rating: 86 }
]));

// 24. RED STAR BELGRADE 1991 (Campeón Copa de Europa 1991)
add(buildTeam('rsb_1991', 'Estrella Roja', 'CZV', 'champions', '1991', 'Campeón Copa de Europa 1991', '🇷🇸', 'Serbia', 'legendary', [
  { name: 'Dejan Savićević', pos: 'AM', rating: 94, bonus: 1 },
  { name: 'Robert Prosinečki', pos: 'CM', rating: 93 },
  { name: 'Darko Pančev', pos: 'ST', rating: 93 },
  { name: 'Siniša Mihajlović', pos: 'LM', rating: 90 },
  { name: 'Vladimir Jugović', pos: 'CM', rating: 89 },
  { name: 'Dragiša Binić', pos: 'RW', rating: 87 },
  { name: 'Ilija Najdoski', pos: 'CB', rating: 87 },
  { name: 'Miodrag Belodedici', pos: 'CB', rating: 91 },
  { name: 'Refik Šabanadžović', pos: 'RB', rating: 86 },
  { name: 'Slobodan Marović', pos: 'LB', rating: 85 },
  { name: 'Stevan Stojanović', pos: 'GK', rating: 88 }
]));

// 25. BAYER LEVERKUSEN 2024 (Campeón Invicto Bundesliga 2024)
add(buildTeam('lev_2024', 'Bayer Leverkusen', 'B04', 'champions', '2024', 'Bundesliga Invicto 2024', '🇩🇪', 'Alemania', 'legendary', [
  { name: 'Florian Wirtz', pos: 'AM', rating: 91, bonus: 1 },
  { name: 'Granit Xhaka', pos: 'CM', rating: 88 },
  { name: 'Álex Grimaldo', pos: 'LB', rating: 88 },
  { name: 'Jeremie Frimpong', pos: 'RB', rating: 87 },
  { name: 'Victor Boniface', pos: 'ST', rating: 86 },
  { name: 'Exequiel Palacios', pos: 'CM', rating: 86 },
  { name: 'Robert Andrich', pos: 'DM', rating: 85 },
  { name: 'Jonathan Tah', pos: 'CB', rating: 87 },
  { name: 'Edmond Tapsoba', pos: 'CB', rating: 86 },
  { name: 'Piero Hincapié', pos: 'CB', rating: 85 },
  { name: 'Lukáš Hrádecký', pos: 'GK', rating: 86 }
]));
