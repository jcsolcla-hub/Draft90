import { buildTeam, Team } from '../teamBuilderHelper';

export const CLUBS_MORE_EUROPEAN_HISTORY: Team[] = [];

function add(t: Team) {
  CLUBS_MORE_EUROPEAN_HISTORY.push(t);
}

// 1. LEEDS UNITED 2001 (Semifinalista Champions League)
add(buildTeam('lee_2001', 'Leeds United', 'LEE', 'champions', '2001', 'Semifinal Champions 2001', '🏴󠁧󠁢󠁥󠁮󠁧󠁿', 'Inglaterra', 'legendary', [
  { name: 'Mark Viduka', pos: 'ST', rating: 91, bonus: 1 },
  { name: 'Alan Smith', pos: 'ST', rating: 88 },
  { name: 'Harry Kewell', pos: 'LW', rating: 91 },
  { name: 'Lee Bowyer', pos: 'RM', rating: 89 },
  { name: 'Olivier Dacourt', pos: 'DM', rating: 88 },
  { name: 'David Batty', pos: 'CM', rating: 87 },
  { name: 'Ian Harte', pos: 'LB', rating: 88 },
  { name: 'Rio Ferdinand', pos: 'CB', rating: 93 },
  { name: 'Lucas Radebe', pos: 'CB', rating: 89 },
  { name: 'Danny Mills', pos: 'RB', rating: 86 },
  { name: 'Nigel Martyn', pos: 'GK', rating: 89 }
]));

// 2. NEWCASTLE UNITED 2003 (Champions League de Sir Bobby Robson)
add(buildTeam('new_2003', 'Newcastle United', 'NEW', 'champions', '2003', 'Era Sir Bobby Robson 2003', '🏴󠁧󠁢󠁥󠁮󠁧󠁿', 'Inglaterra', 'legendary', [
  { name: 'Alan Shearer', pos: 'ST', rating: 94, bonus: 1 },
  { name: 'Craig Bellamy', pos: 'ST', rating: 88 },
  { name: 'Laurent Robert', pos: 'LW', rating: 89 },
  { name: 'Nolberto Solano', pos: 'RW', rating: 88 },
  { name: 'Kieron Dyer', pos: 'AM', rating: 88 },
  { name: 'Gary Speed', pos: 'CM', rating: 89 },
  { name: 'Olivier Bernard', pos: 'LB', rating: 85 },
  { name: 'Jonathan Woodgate', pos: 'CB', rating: 89 },
  { name: 'Andy O\'Brien', pos: 'CB', rating: 85 },
  { name: 'Aaron Hughes', pos: 'RB', rating: 85 },
  { name: 'Shay Given', pos: 'GK', rating: 90 }
]));

// 3. FIORENTINA 1999 (La Viola de Batistuta y Rui Costa)
add(buildTeam('fio_1999', 'ACF Fiorentina', 'FIO', 'champions', '1999', 'La Viola Mágica 1999', '🇮🇹', 'Italia', 'legendary', [
  { name: 'Gabriel Batistuta (Batigol)', pos: 'ST', rating: 96, bonus: 1 },
  { name: 'Edmundo (O Animal)', pos: 'ST', rating: 90 },
  { name: 'Rui Costa', pos: 'AM', rating: 94 },
  { name: 'Jörg Heinrich', pos: 'LM', rating: 87 },
  { name: 'Sandro Cois', pos: 'DM', rating: 86 },
  { name: 'Mauro Bressan', pos: 'CM', rating: 85 },
  { name: 'Moreno Torricelli', pos: 'RB', rating: 88 },
  { name: 'Tomáš Řepka', pos: 'CB', rating: 88 },
  { name: 'Pasquale Padalino', pos: 'CB', rating: 87 },
  { name: 'Giulio Falcone', pos: 'LB', rating: 86 },
  { name: 'Francesco Toldo', pos: 'GK', rating: 92 }
]));

// 4. PARMA 1995 (Campeón Copa de la UEFA)
add(buildTeam('par_1995', 'Parma AC', 'PAR', 'champions', '1995', 'Campeón Copa UEFA 1995', '🇮🇹', 'Italia', 'legendary', [
  { name: 'Gianfranco Zola', pos: 'ST', rating: 94, bonus: 1 },
  { name: 'Faustino Asprilla', pos: 'ST', rating: 92 },
  { name: 'Dino Baggio', pos: 'CM', rating: 91 },
  { name: 'Massimo Crippa', pos: 'CM', rating: 88 },
  { name: 'Roberto Sensini', pos: 'DM', rating: 91 },
  { name: 'Antonio Benarrivo', pos: 'LB', rating: 89 },
  { name: 'Alberto Di Chiara', pos: 'LM', rating: 87 },
  { name: 'Lorenzo Minotti', pos: 'CB', rating: 89 },
  { name: 'Fernando Couto', pos: 'CB', rating: 90 },
  { name: 'Luigi Apolloni', pos: 'CB', rating: 88 },
  { name: 'Luca Bucci', pos: 'GK', rating: 88 }
]));

// 5. LAZIO 2000 (Campeón Histórico Scudetto)
add(buildTeam('laz_2000', 'SS Lazio', 'LAZ', 'champions', '2000', 'Campeón Scudetto Centenario 2000', '🇮🇹', 'Italia', 'legendary', [
  { name: 'Marcelo Salas (El Matador)', pos: 'ST', rating: 92, bonus: 1 },
  { name: 'Simone Inzaghi', pos: 'ST', rating: 88 },
  { name: 'Pavel Nedvěd', pos: 'LM', rating: 93 },
  { name: 'Juan Sebastián Verón (La Brujita)', pos: 'CM', rating: 94 },
  { name: 'Diego Simeone (El Cholo)', pos: 'CM', rating: 91 },
  { name: 'Sérgio Conceição', pos: 'RM', rating: 89 },
  { name: 'Giuseppe Pancaro', pos: 'LB', rating: 87 },
  { name: 'Alessandro Nesta', pos: 'CB', rating: 95 },
  { name: 'Siniša Mihajlović', pos: 'CB', rating: 92 },
  { name: 'Paolo Negro', pos: 'RB', rating: 88 },
  { name: 'Luca Marchegiani', pos: 'GK', rating: 90 }
]));

// 6. VILLARREAL 2006 (Semifinalista Champions League)
add(buildTeam('vil_2006', 'Villarreal CF', 'VIL', 'champions', '2006', 'Semifinal Champions 2006', '🇪🇸', 'España', 'legendary', [
  { name: 'Diego Forlán', pos: 'ST', rating: 92 },
  { name: 'Guillermo Franco', pos: 'ST', rating: 86 },
  { name: 'Juan Román Riquelme', pos: 'AM', rating: 95, bonus: 1 },
  { name: 'Juan Pablo Sorín', pos: 'LM', rating: 90 },
  { name: 'Marcos Senna', pos: 'DM', rating: 92 },
  { name: 'Josico', pos: 'CM', rating: 86 },
  { name: 'Rodolfo Arruabarrena', pos: 'LB', rating: 88 },
  { name: 'Gonzalo Rodríguez', pos: 'CB', rating: 88 },
  { name: 'Quique Álvarez', pos: 'CB', rating: 86 },
  { name: 'Javi Venta', pos: 'RB', rating: 86 },
  { name: 'Mariano Barbosa', pos: 'GK', rating: 86 }
]));

// 7. VILLARREAL 2021 (Campeón UEFA Europa League de Emery)
add(buildTeam('vil_2021', 'Villarreal CF', 'VIL', 'champions', '2021', 'Campeón Europa League 2021', '🇪🇸', 'España', 'legendary', [
  { name: 'Gerard Moreno', pos: 'ST', rating: 92, bonus: 1 },
  { name: 'Carlos Bacca', pos: 'ST', rating: 86 },
  { name: 'Yéremy Pino', pos: 'RW', rating: 86 },
  { name: 'Manu Trigueros', pos: 'CM', rating: 87 },
  { name: 'Dani Parejo', pos: 'CM', rating: 90 },
  { name: 'Étienne Capoue', pos: 'DM', rating: 88 },
  { name: 'Alfonso Pedraza', pos: 'LB', rating: 86 },
  { name: 'Pau Torres', pos: 'CB', rating: 89 },
  { name: 'Raúl Albiol', pos: 'CB', rating: 88 },
  { name: 'Juan Foyth', pos: 'RB', rating: 87 },
  { name: 'Gerónimo Rulli', pos: 'GK', rating: 88 }
]));

// 8. BAYER LEVERKUSEN 2024 (Campeón Invicto Bundesliga y DFB Pokal)
add(buildTeam('lev_2024', 'Bayer Leverkusen', 'B04', 'champions', '2024', 'Invictus Doblete 2024', '🇩🇪', 'Alemania', 'legendary', [
  { name: 'Victor Boniface', pos: 'ST', rating: 88 },
  { name: 'Florian Wirtz', pos: 'AM', rating: 93, bonus: 1 },
  { name: 'Jonas Hofmann', pos: 'RW', rating: 86 },
  { name: 'Granit Xhaka', pos: 'CM', rating: 90 },
  { name: 'Robert Andrich', pos: 'DM', rating: 87 },
  { name: 'Álex Grimaldo', pos: 'LB', rating: 90 },
  { name: 'Jeremie Frimpong', pos: 'RB', rating: 89 },
  { name: 'Jonathan Tah', pos: 'CB', rating: 88 },
  { name: 'Edmond Tapsoba', pos: 'CB', rating: 87 },
  { name: 'Piero Hincapié', pos: 'CB', rating: 86 },
  { name: 'Lukáš Hrádecký', pos: 'GK', rating: 88 }
]));

// 9. ATALANTA 2024 (Campeón UEFA Europa League de Gasperini)
add(buildTeam('ata_2024', 'Atalanta BC', 'ATA', 'champions', '2024', 'Campeón Europa League 2024', '🇮🇹', 'Italia', 'legendary', [
  { name: 'Gianluca Scamacca', pos: 'ST', rating: 87 },
  { name: 'Ademola Lookman (Hat-trick Final)', pos: 'LW', rating: 91, bonus: 1 },
  { name: 'Charles De Ketelaere', pos: 'RW', rating: 87 },
  { name: 'Teun Koopmeiners', pos: 'AM', rating: 89 },
  { name: 'Éderson', pos: 'CM', rating: 88 },
  { name: 'Marten de Roon', pos: 'DM', rating: 87 },
  { name: 'Matteo Ruggeri', pos: 'LB', rating: 85 },
  { name: 'Sead Kolašinac', pos: 'CB', rating: 86 },
  { name: 'Isak Hien', pos: 'CB', rating: 86 },
  { name: 'Berat Djimsiti', pos: 'CB', rating: 85 },
  { name: 'Juan Musso', pos: 'GK', rating: 87 }
]));

// 10. OLYMPIACOS 2024 (Campeón Histórico UEFA Europa Conference League)
add(buildTeam('oly_2024', 'Olympiacos FC', 'OLY', 'champions', '2024', 'Campeón Conference League 2024', '🇬🇷', 'Grecia', 'legendary', [
  { name: 'Ayoub El Kaabi (Goleador Europeo)', pos: 'ST', rating: 90, bonus: 1 },
  { name: 'Daniel Podence', pos: 'LW', rating: 87 },
  { name: 'Kostas Fortounis', pos: 'AM', rating: 88 },
  { name: 'Chiquinho', pos: 'CM', rating: 86 },
  { name: 'Santiago Hezze', pos: 'DM', rating: 86 },
  { name: 'Vicente Iborra', pos: 'CM', rating: 85 },
  { name: 'Francisco Ortega', pos: 'LB', rating: 84 },
  { name: 'David Carmo', pos: 'CB', rating: 86 },
  { name: 'Panagiotis Retsos', pos: 'CB', rating: 85 },
  { name: 'Rodinei', pos: 'RB', rating: 86 },
  { name: 'Konstantinos Tzolakis', pos: 'GK', rating: 87 }
]));

// 11. SEVILLA FC 2015 (Bicampeón Europa League de Emery)
add(buildTeam('sev_2015', 'Sevilla FC', 'SEV', 'champions', '2015', 'Campeón Europa League Varsovia 2015', '🇪🇸', 'España', 'legendary', [
  { name: 'Carlos Bacca', pos: 'ST', rating: 91, bonus: 1 },
  { name: 'Kevin Gameiro', pos: 'ST', rating: 87 },
  { name: 'Vitolo', pos: 'LW', rating: 88 },
  { name: 'Aleix Vidal', pos: 'RW', rating: 87 },
  { name: 'Éver Banega', pos: 'AM', rating: 91 },
  { name: 'Grzegorz Krychowiak', pos: 'DM', rating: 89 },
  { name: 'Benoît Trémoulinas', pos: 'LB', rating: 86 },
  { name: 'Daniel Carriço', pos: 'CB', rating: 87 },
  { name: 'Timothée Kolodziejczak', pos: 'CB', rating: 85 },
  { name: 'Coke Andújar', pos: 'RB', rating: 86 },
  { name: 'Sergio Rico', pos: 'GK', rating: 87 }
]));

// 12. SEVILLA FC 2020 (Campeón Europa League Colonia de Lopetegui)
add(buildTeam('sev_2020', 'Sevilla FC', 'SEV', 'champions', '2020', 'Campeón Europa League Colonia 2020', '🇪🇸', 'España', 'legendary', [
  { name: 'Luuk de Jong', pos: 'ST', rating: 88, bonus: 1 },
  { name: 'Lucas Ocampos', pos: 'RW', rating: 89 },
  { name: 'Suso', pos: 'LW', rating: 87 },
  { name: 'Éver Banega', pos: 'CM', rating: 91 },
  { name: 'Fernando Reges', pos: 'DM', rating: 90 },
  { name: 'Joan Jordán', pos: 'CM', rating: 86 },
  { name: 'Sergio Reguilón', pos: 'LB', rating: 88 },
  { name: 'Diego Carlos', pos: 'CB', rating: 90 },
  { name: 'Jules Koundé', pos: 'CB', rating: 90 },
  { name: 'Jesús Navas', pos: 'RB', rating: 89 },
  { name: 'Yassine Bounou (Bono)', pos: 'GK', rating: 91 }
]));

// 13. SEVILLA FC 2023 (Séptima Europa League de Budapest)
add(buildTeam('sev_2023', 'Sevilla FC', 'SEV', 'champions', '2023', 'La Séptima Europa League 2023', '🇪🇸', 'España', 'legendary', [
  { name: 'Youssef En-Nesyri', pos: 'ST', rating: 88 },
  { name: 'Lucas Ocampos', pos: 'RW', rating: 88 },
  { name: 'Bryan Gil', pos: 'LW', rating: 85 },
  { name: 'Ivan Rakitić', pos: 'CM', rating: 89, bonus: 1 },
  { name: 'Fernando Reges', pos: 'DM', rating: 88 },
  { name: 'Óliver Torres', pos: 'CM', rating: 85 },
  { name: 'Alex Telles', pos: 'LB', rating: 85 },
  { name: 'Nemanja Gudelj', pos: 'CB', rating: 86 },
  { name: 'Loïc Badé', pos: 'CB', rating: 87 },
  { name: 'Jesús Navas', pos: 'RB', rating: 88 },
  { name: 'Yassine Bounou (Bono)', pos: 'GK', rating: 91 }
]));

// 14. NAPOLI 1989 (Campeón Copa de la UEFA de Maradona)
add(buildTeam('nap_1989', 'SSC Napoli', 'NAP', 'champions', '1989', 'Campeón Copa UEFA Maradona 1989', '🇮🇹', 'Italia', 'legendary', [
  { name: 'Diego Armando Maradona', pos: 'AM', rating: 98, bonus: 1 },
  { name: 'Careca', pos: 'ST', rating: 94 },
  { name: 'Andrea Carnevale', pos: 'ST', rating: 88 },
  { name: 'Alemão', pos: 'DM', rating: 90 },
  { name: 'Fernando De Napoli', pos: 'CM', rating: 89 },
  { name: 'Massimo Crippa', pos: 'CM', rating: 87 },
  { name: 'Giovanni Francini', pos: 'LB', rating: 88 },
  { name: 'Alessandro Renica', pos: 'CB', rating: 88 },
  { name: 'Giancarlo Corradini', pos: 'CB', rating: 87 },
  { name: 'Ciro Ferrara', pos: 'RB', rating: 92 },
  { name: 'Giuliano Giuliani', pos: 'GK', rating: 88 }
]));

// 15. AC MILAN 1994 (El 4-0 al Dream Team en Atenas)
add(buildTeam('acm_1994', 'AC Milan', 'ACM', 'champions', '1994', 'Campeón Champions Atenas 1994', '🇮🇹', 'Italia', 'legendary', [
  { name: 'Daniele Massaro', pos: 'ST', rating: 92, bonus: 1 },
  { name: 'Dejan Savićević (Il Genio)', pos: 'AM', rating: 95 },
  { name: 'Zvonimir Boban', pos: 'AM', rating: 93 },
  { name: 'Roberto Donadoni', pos: 'RW', rating: 92 },
  { name: 'Demetrio Albertini', pos: 'CM', rating: 93 },
  { name: 'Marcel Desailly', pos: 'DM', rating: 94 },
  { name: 'Paolo Maldini', pos: 'CB', rating: 96 },
  { name: 'Filippo Galli', pos: 'CB', rating: 89 },
  { name: 'Christian Panucci', pos: 'LB', rating: 89 },
  { name: 'Mauro Tassotti', pos: 'RB', rating: 91 },
  { name: 'Sebastiano Rossi', pos: 'GK', rating: 91 }
]));

// 16. AC MILAN 2003 (Campeón Champions de Manchester)
add(buildTeam('acm_2003', 'AC Milan', 'ACM', 'champions', '2003', 'Campeón Champions Manchester 2003', '🇮🇹', 'Italia', 'legendary', [
  { name: 'Andriy Shevchenko', pos: 'ST', rating: 94, bonus: 1 },
  { name: 'Filippo Inzaghi (SuperPippo)', pos: 'ST', rating: 92 },
  { name: 'Rui Costa', pos: 'AM', rating: 93 },
  { name: 'Clarence Seedorf', pos: 'LM', rating: 92 },
  { name: 'Andrea Pirlo', pos: 'CM', rating: 93 },
  { name: 'Gennaro Gattuso', pos: 'DM', rating: 92 },
  { name: 'Kakha Kaladze', pos: 'LB', rating: 89 },
  { name: 'Paolo Maldini', pos: 'CB', rating: 95 },
  { name: 'Alessandro Nesta', pos: 'CB', rating: 95 },
  { name: 'Alessandro Costacurta', pos: 'RB', rating: 90 },
  { name: 'Dida', pos: 'GK', rating: 92 }
]));

// 17. INTER DE MILÁN 1998 (Campeón Copa UEFA de Ronaldo Nazário en París)
add(buildTeam('int_1998', 'Inter de Milán', 'INT', 'champions', '1998', 'Campeón Copa UEFA Fenómeno 1998', '🇮🇹', 'Italia', 'legendary', [
  { name: 'Ronaldo Nazário (El Fenómeno)', pos: 'ST', rating: 97, bonus: 1 },
  { name: 'Iván Zamorano', pos: 'ST', rating: 90 },
  { name: 'Youri Djorkaeff', pos: 'AM', rating: 92 },
  { name: 'Diego Simeone', pos: 'CM', rating: 91 },
  { name: 'Zé Elias', pos: 'DM', rating: 87 },
  { name: 'Aron Winter', pos: 'CM', rating: 88 },
  { name: 'Javier Zanetti', pos: 'LB', rating: 93 },
  { name: 'Salvatore Fresi', pos: 'CB', rating: 86 },
  { name: 'Taribo West', pos: 'CB', rating: 88 },
  { name: 'Francesco Colonnese', pos: 'RB', rating: 87 },
  { name: 'Gianluca Pagliuca', pos: 'GK', rating: 93 }
]));

// 18. JUVENTUS 1998 (Campeón Scudetto y Finalista Ámsterdam)
add(buildTeam('juv_1998', 'Juventus FC', 'JUV', 'champions', '1998', 'Finalista Champions 1998', '🇮🇹', 'Italia', 'legendary', [
  { name: 'Alessandro Del Piero', pos: 'ST', rating: 95, bonus: 1 },
  { name: 'Filippo Inzaghi', pos: 'ST', rating: 91 },
  { name: 'Zinedine Zidane', pos: 'AM', rating: 96 },
  { name: 'Edgar Davids', pos: 'DM', rating: 93 },
  { name: 'Didier Deschamps', pos: 'CM', rating: 92 },
  { name: 'Angelo Di Livio', pos: 'RM', rating: 88 },
  { name: 'Gianluca Pessotto', pos: 'LB', rating: 89 },
  { name: 'Mark Iuliano', pos: 'CB', rating: 88 },
  { name: 'Paolo Montero', pos: 'CB', rating: 92 },
  { name: 'Moreno Torricelli', pos: 'RB', rating: 89 },
  { name: 'Angelo Peruzzi', pos: 'GK', rating: 93 }
]));

// 19. OLYMPIQUE LYONNAIS 2005 (Tetracampeón Francés)
add(buildTeam('lyo_2005', 'Olympique de Lyon', 'OL', 'champions', '2005', 'Era Dorada Juninho 2005', '🇫🇷', 'Francia', 'legendary', [
  { name: 'Sylvain Wiltord', pos: 'ST', rating: 89 },
  { name: 'Florent Malouda', pos: 'LW', rating: 89 },
  { name: 'Sidney Govou', pos: 'RW', rating: 88 },
  { name: 'Juninho Pernambucano (Rey de las Faltas)', pos: 'AM', rating: 94, bonus: 1 },
  { name: 'Michael Essien', pos: 'DM', rating: 92 },
  { name: 'Mahamadou Diarra', pos: 'CM', rating: 89 },
  { name: 'Éric Abidal', pos: 'LB', rating: 90 },
  { name: 'Cris (El Policía)', pos: 'CB', rating: 90 },
  { name: 'Caçapa', pos: 'CB', rating: 87 },
  { name: 'Anthony Réveillère', pos: 'RB', rating: 88 },
  { name: 'Grégory Coupet', pos: 'GK', rating: 91 }
]));

// 20. AS MONACO 2017 (Campeón Ligue 1 de Mbappé y Bernardo)
add(buildTeam('mon_2017', 'AS Monaco', 'ASM', 'champions', '2017', 'Campeón Ligue 1 Goleador 2017', '🇫🇷', 'Francia', 'legendary', [
  { name: 'Radamel Falcao (El Tigre)', pos: 'ST', rating: 92 },
  { name: 'Kylian Mbappé', pos: 'ST', rating: 92, bonus: 1 },
  { name: 'Thomas Lemar', pos: 'LW', rating: 89 },
  { name: 'Bernardo Silva', pos: 'RW', rating: 92 },
  { name: 'Fabinho', pos: 'DM', rating: 90 },
  { name: 'Tiémoué Bakayoko', pos: 'CM', rating: 88 },
  { name: 'Benjamin Mendy', pos: 'LB', rating: 88 },
  { name: 'Jemerson', pos: 'CB', rating: 86 },
  { name: 'Kamil Glik', pos: 'CB', rating: 88 },
  { name: 'Djibril Sidibé', pos: 'RB', rating: 87 },
  { name: 'Danijel Subašić', pos: 'GK', rating: 89 }
]));

// 21. BORUSSIA DORTMUND 2024 (Finalista Champions League de Wembley)
add(buildTeam('bvb_2024', 'Borussia Dortmund', 'BVB', 'champions', '2024', 'Finalista Champions Wembley 2024', '🇩🇪', 'Alemania', 'legendary', [
  { name: 'Niclas Füllkrug', pos: 'ST', rating: 87 },
  { name: 'Jadon Sancho', pos: 'RW', rating: 89 },
  { name: 'Karim Adeyemi', pos: 'LW', rating: 86 },
  { name: 'Julian Brandt', pos: 'AM', rating: 88, bonus: 1 },
  { name: 'Marcel Sabitzer', pos: 'CM', rating: 88 },
  { name: 'Emre Can', pos: 'DM', rating: 86 },
  { name: 'Ian Maatsen', pos: 'LB', rating: 86 },
  { name: 'Nico Schlotterbeck', pos: 'CB', rating: 88 },
  { name: 'Mats Hummels', pos: 'CB', rating: 91 },
  { name: 'Julian Ryerson', pos: 'RB', rating: 85 },
  { name: 'Gregor Kobel', pos: 'GK', rating: 90 }
]));

// 22. VFB STUTTGART 2007 (Campeón de la Bundesliga)
add(buildTeam('vfb_2007', 'VfB Stuttgart', 'VFB', 'champions', '2007', 'Campeón Bundesliga 2007', '🇩🇪', 'Alemania', 'gold', [
  { name: 'Mario Gómez', pos: 'ST', rating: 91, bonus: 1 },
  { name: 'Cacau', pos: 'ST', rating: 87 },
  { name: 'Thomas Hitzlsperger (The Hammer)', pos: 'CM', rating: 88 },
  { name: 'Pável Pardo', pos: 'DM', rating: 89 },
  { name: 'Sami Khedira', pos: 'CM', rating: 87 },
  { name: 'Roberto Hilbert', pos: 'RM', rating: 86 },
  { name: 'Arthur Boka', pos: 'LB', rating: 85 },
  { name: 'Fernando Meira', pos: 'CB', rating: 88 },
  { name: 'Matthieu Delpierre', pos: 'CB', rating: 87 },
  { name: 'Ricardo Osorio', pos: 'RB', rating: 87 },
  { name: 'Timo Hildebrand', pos: 'GK', rating: 89 }
]));

// 23. SPORTING CP 2024 (Campeón Liga de Amorim y Gyökeres)
add(buildTeam('scp_2024', 'Sporting CP', 'SCP', 'champions', '2024', 'Campeón Liga Portugal 2024', '🇵🇹', 'Portugal', 'legendary', [
  { name: 'Viktor Gyökeres (29 Goles)', pos: 'ST', rating: 91, bonus: 1 },
  { name: 'Francisco Trincão', pos: 'RW', rating: 86 },
  { name: 'Pedro Gonçalves (Pote)', pos: 'AM', rating: 88 },
  { name: 'Morten Hjulmand', pos: 'DM', rating: 88 },
  { name: 'Hidemasa Morita', pos: 'CM', rating: 86 },
  { name: 'Geny Catamo', pos: 'RM', rating: 84 },
  { name: 'Nuno Santos', pos: 'LM', rating: 85 },
  { name: 'Gonçalo Inácio', pos: 'CB', rating: 87 },
  { name: 'Sebastián Coates', pos: 'CB', rating: 88 },
  { name: 'Ousmane Diomande', pos: 'CB', rating: 87 },
  { name: 'Franco Israel', pos: 'GK', rating: 84 }
]));

// 24. FEYENOORD 2023 (Campeón Eredivisie de Arne Slot)
add(buildTeam('fey_2023', 'Feyenoord Rotterdam', 'FEY', 'champions', '2023', 'Campeón Eredivisie 2023', '🇳🇱', 'Países Bajos', 'gold', [
  { name: 'Santiago Giménez (Bebote)', pos: 'ST', rating: 88, bonus: 1 },
  { name: 'Igor Paixão', pos: 'LW', rating: 86 },
  { name: 'Alireza Jahanbakhsh', pos: 'RW', rating: 84 },
  { name: 'Sebastian Szymański', pos: 'AM', rating: 86 },
  { name: 'Orkun Kökçü', pos: 'CM', rating: 89 },
  { name: 'Mats Wieffer', pos: 'DM', rating: 87 },
  { name: 'Quilindschy Hartman', pos: 'LB', rating: 85 },
  { name: 'Dávid Hancko', pos: 'CB', rating: 88 },
  { name: 'Gernot Trauner', pos: 'CB', rating: 86 },
  { name: 'Lutsharel Geertruida', pos: 'RB', rating: 87 },
  { name: 'Justin Bijlow', pos: 'GK', rating: 86 }
]));

// 25. SHAKHTAR DONETSK 2009 (Campeón Copa de la UEFA)
add(buildTeam('sha_2009', 'Shakhtar Donetsk', 'SHA', 'champions', '2009', 'Campeón Copa UEFA 2009', '🇺🇦', 'Ucrania', 'legendary', [
  { name: 'Luiz Adriano', pos: 'ST', rating: 89, bonus: 1 },
  { name: 'Willian', pos: 'LW', rating: 90 },
  { name: 'Ilsinho', pos: 'RW', rating: 88 },
  { name: 'Jádson', pos: 'AM', rating: 90 },
  { name: 'Fernandinho', pos: 'CM', rating: 91 },
  { name: 'Mariusz Lewandowski', pos: 'DM', rating: 87 },
  { name: 'Răzvan Raț', pos: 'LB', rating: 88 },
  { name: 'Dmytro Chygrynskiy', pos: 'CB', rating: 89 },
  { name: 'Oleksandr Kucher', pos: 'CB', rating: 86 },
  { name: 'Darijo Srna (Capitán)', pos: 'RB', rating: 92 },
  { name: 'Andriy Pyatov', pos: 'GK', rating: 88 }
]));
