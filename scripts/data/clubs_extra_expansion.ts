import { buildTeam, Team } from '../teamBuilderHelper';

export const CLUBS_EXTRA_EXPANSION: Team[] = [];

function add(t: Team) {
  CLUBS_EXTRA_EXPANSION.push(t);
}

// ==========================================
// MASSIVE EXPANSION: ICONIC EUROPEAN CLUBS ACROSS ALL ERAS
// ==========================================

// 1. REAL MADRID 2002 (La Novena de Glasgow)
add(buildTeam('rma_2002', 'Real Madrid', 'RMA', 'champions', '2002', 'Campeón La Novena 2002', '🇪🇸', 'España', 'legendary', [
  { name: 'Raúl González', pos: 'ST', rating: 95, bonus: 1 },
  { name: 'Fernando Morientes', pos: 'ST', rating: 90 },
  { name: 'Zinedine Zidane', pos: 'AM', rating: 96 },
  { name: 'Luís Figo', pos: 'RW', rating: 95 },
  { name: 'Santiago Solari', pos: 'LW', rating: 88 },
  { name: 'Claude Makélélé', pos: 'DM', rating: 93 },
  { name: 'Roberto Carlos', pos: 'LB', rating: 95 },
  { name: 'Fernando Hierro', pos: 'CB', rating: 93 },
  { name: 'Iván Helguera', pos: 'CB', rating: 90 },
  { name: 'Míchel Salgado', pos: 'RB', rating: 90 },
  { name: 'Iker Casillas', pos: 'GK', rating: 93 }
]));

// 2. REAL MADRID 2012 (La Liga de los 100 Puntos y 121 Goles)
add(buildTeam('rma_2012', 'Real Madrid', 'RMA', 'champions', '2012', 'Liga de los 100 Puntos 2012', '🇪🇸', 'España', 'legendary', [
  { name: 'Cristiano Ronaldo', pos: 'LW', rating: 98, bonus: 1 },
  { name: 'Karim Benzema', pos: 'ST', rating: 91 },
  { name: 'Gonzalo Higuaín', pos: 'ST', rating: 90 },
  { name: 'Mesut Özil', pos: 'AM', rating: 93 },
  { name: 'Ángel Di María', pos: 'RW', rating: 91 },
  { name: 'Xabi Alonso', pos: 'CM', rating: 93 },
  { name: 'Sami Khedira', pos: 'DM', rating: 88 },
  { name: 'Marcelo', pos: 'LB', rating: 92 },
  { name: 'Sergio Ramos', pos: 'CB', rating: 94 },
  { name: 'Pepe', pos: 'CB', rating: 92 },
  { name: 'Álvaro Arbeloa', pos: 'RB', rating: 86 },
  { name: 'Iker Casillas', pos: 'GK', rating: 94 }
]));

// 3. REAL MADRID 2016 (La Undécima de Milán)
add(buildTeam('rma_2016', 'Real Madrid', 'RMA', 'champions', '2016', 'Campeón La Undécima 2016', '🇪🇸', 'España', 'legendary', [
  { name: 'Cristiano Ronaldo', pos: 'LW', rating: 96, bonus: 1 },
  { name: 'Karim Benzema', pos: 'ST', rating: 92 },
  { name: 'Gareth Bale', pos: 'RW', rating: 93 },
  { name: 'Luka Modrić', pos: 'CM', rating: 94 },
  { name: 'Toni Kroos', pos: 'CM', rating: 93 },
  { name: 'Casemiro', pos: 'DM', rating: 90 },
  { name: 'Marcelo', pos: 'LB', rating: 93 },
  { name: 'Sergio Ramos', pos: 'CB', rating: 94 },
  { name: 'Pepe', pos: 'CB', rating: 92 },
  { name: 'Dani Carvajal', pos: 'RB', rating: 89 },
  { name: 'Keylor Navas', pos: 'GK', rating: 91 }
]));

// 4. REAL MADRID 2018 (La Decimotercera de Kiev - Tricampeón)
add(buildTeam('rma_2018', 'Real Madrid', 'RMA', 'champions', '2018', 'Tricampeón Champions 2018', '🇪🇸', 'España', 'legendary', [
  { name: 'Cristiano Ronaldo', pos: 'ST', rating: 95, bonus: 1 },
  { name: 'Karim Benzema', pos: 'ST', rating: 91 },
  { name: 'Gareth Bale', pos: 'RW', rating: 92 },
  { name: 'Isco', pos: 'AM', rating: 90 },
  { name: 'Luka Modrić', pos: 'CM', rating: 95 },
  { name: 'Toni Kroos', pos: 'CM', rating: 93 },
  { name: 'Casemiro', pos: 'DM', rating: 92 },
  { name: 'Marcelo', pos: 'LB', rating: 93 },
  { name: 'Sergio Ramos', pos: 'CB', rating: 94 },
  { name: 'Raphaël Varane', pos: 'CB', rating: 92 },
  { name: 'Dani Carvajal', pos: 'RB', rating: 90 },
  { name: 'Keylor Navas', pos: 'GK', rating: 91 }
]));

// 5. FC BARCELONA 2006 (Campeón Champions de París)
add(buildTeam('bar_2006', 'FC Barcelona', 'FCB', 'champions', '2006', 'Campeón Champions París 2006', '🇪🇸', 'España', 'legendary', [
  { name: 'Ronaldinho', pos: 'LW', rating: 96, bonus: 1 },
  { name: 'Samuel Eto\'o', pos: 'ST', rating: 94 },
  { name: 'Ludovic Giuly', pos: 'RW', rating: 89 },
  { name: 'Deco', pos: 'AM', rating: 93 },
  { name: 'Mark van Bommel', pos: 'CM', rating: 88 },
  { name: 'Edmílson', pos: 'DM', rating: 88 },
  { name: 'Giovanni van Bronckhorst', pos: 'LB', rating: 89 },
  { name: 'Carles Puyol', pos: 'CB', rating: 94 },
  { name: 'Rafael Márquez', pos: 'CB', rating: 90 },
  { name: 'Oleguer', pos: 'RB', rating: 83 },
  { name: 'Víctor Valdés', pos: 'GK', rating: 90 }
]));

// 6. FC BARCELONA 2011 (El Dream Team de Wembley)
add(buildTeam('bar_2011', 'FC Barcelona', 'FCB', 'champions', '2011', 'Campeón Champions Wembley 2011', '🇪🇸', 'España', 'legendary', [
  { name: 'Lionel Messi', pos: 'ST', rating: 97, bonus: 1 },
  { name: 'David Villa', pos: 'LW', rating: 93 },
  { name: 'Pedro Rodríguez', pos: 'RW', rating: 90 },
  { name: 'Andrés Iniesta', pos: 'CM', rating: 95 },
  { name: 'Xavi Hernández', pos: 'CM', rating: 96 },
  { name: 'Sergio Busquets', pos: 'DM', rating: 92 },
  { name: 'Éric Abidal', pos: 'LB', rating: 90 },
  { name: 'Gerard Piqué', pos: 'CB', rating: 93 },
  { name: 'Javier Mascherano', pos: 'CB', rating: 91 },
  { name: 'Dani Alves', pos: 'RB', rating: 94 },
  { name: 'Víctor Valdés', pos: 'GK', rating: 91 }
]));

// 7. FC BARCELONA 2015 (Triplete MSN)
add(buildTeam('bar_2015', 'FC Barcelona', 'FCB', 'champions', '2015', 'Triplete MSN 2015', '🇪🇸', 'España', 'legendary', [
  { name: 'Lionel Messi', pos: 'RW', rating: 97, bonus: 1 },
  { name: 'Luis Suárez', pos: 'ST', rating: 95 },
  { name: 'Neymar Jr.', pos: 'LW', rating: 94 },
  { name: 'Andrés Iniesta', pos: 'CM', rating: 93 },
  { name: 'Ivan Rakitić', pos: 'CM', rating: 91 },
  { name: 'Sergio Busquets', pos: 'DM', rating: 92 },
  { name: 'Jordi Alba', pos: 'LB', rating: 91 },
  { name: 'Gerard Piqué', pos: 'CB', rating: 93 },
  { name: 'Javier Mascherano', pos: 'CB', rating: 90 },
  { name: 'Dani Alves', pos: 'RB', rating: 92 },
  { name: 'Marc-André ter Stegen', pos: 'GK', rating: 90 }
]));

// 8. FC BARCELONA 2019 (Campeón de Liga)
add(buildTeam('bar_2019', 'FC Barcelona', 'FCB', 'champions', '2019', 'Campeón LaLiga 2019', '🇪🇸', 'España', 'legendary', [
  { name: 'Lionel Messi', pos: 'RW', rating: 96, bonus: 1 },
  { name: 'Luis Suárez', pos: 'ST', rating: 92 },
  { name: 'Ousmane Dembélé', pos: 'LW', rating: 88 },
  { name: 'Arthur Melo', pos: 'CM', rating: 86 },
  { name: 'Ivan Rakitić', pos: 'CM', rating: 89 },
  { name: 'Sergio Busquets', pos: 'DM', rating: 90 },
  { name: 'Jordi Alba', pos: 'LB', rating: 90 },
  { name: 'Gerard Piqué', pos: 'CB', rating: 91 },
  { name: 'Clément Lenglet', pos: 'CB', rating: 86 },
  { name: 'Sergi Roberto', pos: 'RB', rating: 85 },
  { name: 'Marc-André ter Stegen', pos: 'GK', rating: 92 }
]));

// 9. ATLÉTICO DE MADRID 2014 (Campeón de Liga y Finalista Champions)
add(buildTeam('atm_2014', 'Atlético de Madrid', 'ATM', 'champions', '2014', 'Campeón de Liga 2014', '🇪🇸', 'España', 'legendary', [
  { name: 'Diego Costa', pos: 'ST', rating: 93, bonus: 1 },
  { name: 'David Villa', pos: 'ST', rating: 88 },
  { name: 'Koke', pos: 'LM', rating: 90 },
  { name: 'Arda Turan', pos: 'RM', rating: 90 },
  { name: 'Tiago Mendes', pos: 'DM', rating: 88 },
  { name: 'Gabi', pos: 'CM', rating: 90 },
  { name: 'Filipe Luís', pos: 'LB', rating: 91 },
  { name: 'Diego Godín', pos: 'CB', rating: 94 },
  { name: 'Miranda', pos: 'CB', rating: 91 },
  { name: 'Juanfran', pos: 'RB', rating: 89 },
  { name: 'Thibaut Courtois', pos: 'GK', rating: 93 }
]));

// 10. ATLÉTICO DE MADRID 2016 (Finalista Champions de Milán)
add(buildTeam('atm_2016', 'Atlético de Madrid', 'ATM', 'champions', '2016', 'Finalista Champions 2016', '🇪🇸', 'España', 'legendary', [
  { name: 'Antoine Griezmann', pos: 'ST', rating: 94, bonus: 1 },
  { name: 'Fernando Torres', pos: 'ST', rating: 88 },
  { name: 'Saúl Ñíguez', pos: 'RM', rating: 90 },
  { name: 'Koke', pos: 'LM', rating: 91 },
  { name: 'Gabi', pos: 'CM', rating: 89 },
  { name: 'Augusto Fernández', pos: 'DM', rating: 86 },
  { name: 'Filipe Luís', pos: 'LB', rating: 92 },
  { name: 'Diego Godín', pos: 'CB', rating: 94 },
  { name: 'Stefan Savić', pos: 'CB', rating: 87 },
  { name: 'Juanfran', pos: 'RB', rating: 89 },
  { name: 'Jan Oblak', pos: 'GK', rating: 94 }
]));

// 11. MANCHESTER UNITED 2003 (Campeón Premier League)
add(buildTeam('mun_2003', 'Manchester United', 'MUN', 'champions', '2003', 'Campeón Premier League 2003', '🏴󠁧󠁢󠁥󠁮󠁧󠁿', 'Inglaterra', 'legendary', [
  { name: 'Ruud van Nistelrooy', pos: 'ST', rating: 94, bonus: 1 },
  { name: 'Paul Scholes', pos: 'AM', rating: 94 },
  { name: 'Ryan Giggs', pos: 'LW', rating: 93 },
  { name: 'David Beckham', pos: 'RW', rating: 93 },
  { name: 'Roy Keane', pos: 'DM', rating: 94 },
  { name: 'Juan Sebastián Verón', pos: 'CM', rating: 90 },
  { name: 'Mikaël Silvestre', pos: 'LB', rating: 87 },
  { name: 'Rio Ferdinand', pos: 'CB', rating: 93 },
  { name: 'Laurent Blanc', pos: 'CB', rating: 89 },
  { name: 'Gary Neville', pos: 'RB', rating: 90 },
  { name: 'Fabien Barthez', pos: 'GK', rating: 90 }
]));

// 12. MANCHESTER UNITED 2011 (Campeón Premier y Finalista Wembley)
add(buildTeam('mun_2011', 'Manchester United', 'MUN', 'champions', '2011', 'Campeón Premier League 2011', '🏴󠁧󠁢󠁥󠁮󠁧󠁿', 'Inglaterra', 'legendary', [
  { name: 'Wayne Rooney', pos: 'ST', rating: 94, bonus: 1 },
  { name: 'Javier Hernández (Chicharito)', pos: 'ST', rating: 88 },
  { name: 'Nani', pos: 'RW', rating: 90 },
  { name: 'Ryan Giggs', pos: 'CM', rating: 89 },
  { name: 'Michael Carrick', pos: 'CM', rating: 90 },
  { name: 'Antonio Valencia', pos: 'RM', rating: 88 },
  { name: 'Patrice Evra', pos: 'LB', rating: 91 },
  { name: 'Nemanja Vidić', pos: 'CB', rating: 94 },
  { name: 'Rio Ferdinand', pos: 'CB', rating: 92 },
  { name: 'Fábio da Silva', pos: 'RB', rating: 84 },
  { name: 'Edwin van der Sar', pos: 'GK', rating: 92 }
]));

// 13. MANCHESTER CITY 2012 (El Milagro del 93:20 de Agüero)
add(buildTeam('mci_2012', 'Manchester City', 'MCI', 'champions', '2012', 'Campeón Premier League 2012', '🏴󠁧󠁢󠁥󠁮󠁧󠁿', 'Inglaterra', 'legendary', [
  { name: 'Sergio Agüero', pos: 'ST', rating: 94, bonus: 1 },
  { name: 'Carlos Tévez', pos: 'ST', rating: 91 },
  { name: 'David Silva', pos: 'AM', rating: 93 },
  { name: 'Samir Nasri', pos: 'LM', rating: 88 },
  { name: 'Yaya Touré', pos: 'CM', rating: 94 },
  { name: 'Gareth Barry', pos: 'DM', rating: 87 },
  { name: 'Gaël Clichy', pos: 'LB', rating: 87 },
  { name: 'Vincent Kompany', pos: 'CB', rating: 94 },
  { name: 'Joleon Lescott', pos: 'CB', rating: 87 },
  { name: 'Pablo Zabaleta', pos: 'RB', rating: 89 },
  { name: 'Joe Hart', pos: 'GK', rating: 90 }
]));

// 14. MANCHESTER CITY 2018 (Centurions - 100 Puntos)
add(buildTeam('mci_2018', 'Manchester City', 'MCI', 'champions', '2018', 'Los Centuriones 100 Pts 2018', '🏴󠁧󠁢󠁥󠁮󠁧󠁿', 'Inglaterra', 'legendary', [
  { name: 'Sergio Agüero', pos: 'ST', rating: 93, bonus: 1 },
  { name: 'Raheem Sterling', pos: 'RW', rating: 91 },
  { name: 'Leroy Sané', pos: 'LW', rating: 90 },
  { name: 'Kevin De Bruyne', pos: 'AM', rating: 95 },
  { name: 'David Silva', pos: 'CM', rating: 93 },
  { name: 'Fernandinho', pos: 'DM', rating: 91 },
  { name: 'Fabian Delph', pos: 'LB', rating: 84 },
  { name: 'Nicolás Otamendi', pos: 'CB', rating: 89 },
  { name: 'Aymeric Laporte', pos: 'CB', rating: 89 },
  { name: 'Kyle Walker', pos: 'RB', rating: 90 },
  { name: 'Ederson', pos: 'GK', rating: 90 }
]));

// 15. CHELSEA 2010 (Doble Premier y FA Cup de Ancelotti)
add(buildTeam('che_2010', 'Chelsea FC', 'CHE', 'champions', '2010', 'Doble Corona 2010', '🏴󠁧󠁢󠁥󠁮󠁧󠁿', 'Inglaterra', 'legendary', [
  { name: 'Didier Drogba', pos: 'ST', rating: 94, bonus: 1 },
  { name: 'Nicolas Anelka', pos: 'ST', rating: 90 },
  { name: 'Florent Malouda', pos: 'LW', rating: 90 },
  { name: 'Frank Lampard', pos: 'CM', rating: 94 },
  { name: 'Michael Ballack', pos: 'CM', rating: 91 },
  { name: 'Michael Essien', pos: 'DM', rating: 92 },
  { name: 'Ashley Cole', pos: 'LB', rating: 93 },
  { name: 'John Terry', pos: 'CB', rating: 94 },
  { name: 'Alex', pos: 'CB', rating: 88 },
  { name: 'Branislav Ivanović', pos: 'RB', rating: 90 },
  { name: 'Petr Čech', pos: 'GK', rating: 93 }
]));

// 16. CHELSEA 2015 (Campeón Premier de Mourinho)
add(buildTeam('che_2015', 'Chelsea FC', 'CHE', 'champions', '2015', 'Campeón Premier League 2015', '🏴󠁧󠁢󠁥󠁮󠁧󠁿', 'Inglaterra', 'legendary', [
  { name: 'Diego Costa', pos: 'ST', rating: 92, bonus: 1 },
  { name: 'Eden Hazard', pos: 'LW', rating: 94 },
  { name: 'Willian', pos: 'RW', rating: 88 },
  { name: 'Cesc Fàbregas', pos: 'CM', rating: 92 },
  { name: 'Nemanja Matić', pos: 'DM', rating: 91 },
  { name: 'Oscar', pos: 'AM', rating: 88 },
  { name: 'César Azpilicueta', pos: 'LB', rating: 90 },
  { name: 'John Terry', pos: 'CB', rating: 92 },
  { name: 'Gary Cahill', pos: 'CB', rating: 89 },
  { name: 'Branislav Ivanović', pos: 'RB', rating: 90 },
  { name: 'Thibaut Courtois', pos: 'GK', rating: 92 }
]));

// 17. CHELSEA 2017 (Campeón Premier de Conte 3-4-3)
add(buildTeam('che_2017', 'Chelsea FC', 'CHE', 'champions', '2017', 'Campeón Premier 3-4-3 2017', '🏴󠁧󠁢󠁥󠁮󠁧󠁿', 'Inglaterra', 'legendary', [
  { name: 'Diego Costa', pos: 'ST', rating: 91 },
  { name: 'Eden Hazard', pos: 'LW', rating: 95, bonus: 1 },
  { name: 'Pedro Rodríguez', pos: 'RW', rating: 89 },
  { name: 'N\'Golo Kanté', pos: 'CM', rating: 94 },
  { name: 'Nemanja Matić', pos: 'CM', rating: 89 },
  { name: 'Marcos Alonso', pos: 'LM', rating: 88 },
  { name: 'Victor Moses', pos: 'RM', rating: 86 },
  { name: 'Gary Cahill', pos: 'CB', rating: 89 },
  { name: 'David Luiz', pos: 'CB', rating: 90 },
  { name: 'César Azpilicueta', pos: 'CB', rating: 91 },
  { name: 'Thibaut Courtois', pos: 'GK', rating: 92 }
]));

// 18. LIVERPOOL 2005 (Milagro de Estambul)
add(buildTeam('liv_2005', 'Liverpool FC', 'LIV', 'champions', '2005', 'Milagro de Estambul 2005', '🏴󠁧󠁢󠁥󠁮󠁧󠁿', 'Inglaterra', 'legendary', [
  { name: 'Milan Baroš', pos: 'ST', rating: 88 },
  { name: 'Steven Gerrard', pos: 'AM', rating: 96, bonus: 1 },
  { name: 'Harry Kewell', pos: 'LW', rating: 88 },
  { name: 'Luis García', pos: 'RW', rating: 89 },
  { name: 'Xabi Alonso', pos: 'CM', rating: 92 },
  { name: 'Dietmar Hamann', pos: 'DM', rating: 88 },
  { name: 'John Arne Riise', pos: 'LB', rating: 89 },
  { name: 'Sami Hyypiä', pos: 'CB', rating: 92 },
  { name: 'Jamie Carragher', pos: 'CB', rating: 92 },
  { name: 'Steve Finnan', pos: 'RB', rating: 87 },
  { name: 'Jerzy Dudek', pos: 'GK', rating: 89 }
]));

// 19. LIVERPOOL 2014 (Los 101 Goles de Suárez y Sturridge)
add(buildTeam('liv_2014', 'Liverpool FC', 'LIV', 'champions', '2014', 'Temporada de los 101 Goles 2014', '🏴󠁧󠁢󠁥󠁮󠁧󠁿', 'Inglaterra', 'legendary', [
  { name: 'Luis Suárez', pos: 'ST', rating: 96, bonus: 1 },
  { name: 'Daniel Sturridge', pos: 'ST', rating: 91 },
  { name: 'Raheem Sterling', pos: 'RW', rating: 89 },
  { name: 'Philippe Coutinho', pos: 'AM', rating: 89 },
  { name: 'Steven Gerrard', pos: 'DM', rating: 92 },
  { name: 'Jordan Henderson', pos: 'CM', rating: 88 },
  { name: 'Jon Flanagan', pos: 'LB', rating: 82 },
  { name: 'Mamadou Sakho', pos: 'CB', rating: 86 },
  { name: 'Martin Škrtel', pos: 'CB', rating: 88 },
  { name: 'Glen Johnson', pos: 'RB', rating: 86 },
  { name: 'Simon Mignolet', pos: 'GK', rating: 86 }
]));

// 20. AC MILAN 2005 (Finalista de Estambul)
add(buildTeam('acm_2005', 'AC Milan', 'ACM', 'champions', '2005', 'Finalista Champions 2005', '🇮🇹', 'Italia', 'legendary', [
  { name: 'Andriy Shevchenko', pos: 'ST', rating: 95, bonus: 1 },
  { name: 'Hernán Crespo', pos: 'ST', rating: 92 },
  { name: 'Kaká', pos: 'AM', rating: 94 },
  { name: 'Clarence Seedorf', pos: 'LM', rating: 93 },
  { name: 'Andrea Pirlo', pos: 'CM', rating: 94 },
  { name: 'Gennaro Gattuso', pos: 'DM', rating: 92 },
  { name: 'Paolo Maldini', pos: 'LB', rating: 95 },
  { name: 'Alessandro Nesta', pos: 'CB', rating: 95 },
  { name: 'Jaap Stam', pos: 'CB', rating: 93 },
  { name: 'Cafu', pos: 'RB', rating: 93 },
  { name: 'Dida', pos: 'GK', rating: 92 }
]));

// 21. AC MILAN 2011 (Campeón Scudetto de Ibrahimović)
add(buildTeam('acm_2011', 'AC Milan', 'ACM', 'champions', '2011', 'Campeón Serie A 2011', '🇮🇹', 'Italia', 'legendary', [
  { name: 'Zlatan Ibrahimović', pos: 'ST', rating: 94, bonus: 1 },
  { name: 'Robinho', pos: 'ST', rating: 89 },
  { name: 'Kevin-Prince Boateng', pos: 'AM', rating: 88 },
  { name: 'Clarence Seedorf', pos: 'CM', rating: 89 },
  { name: 'Mark van Bommel', pos: 'DM', rating: 88 },
  { name: 'Gennaro Gattuso', pos: 'CM', rating: 88 },
  { name: 'Gianluca Zambrotta', pos: 'LB', rating: 88 },
  { name: 'Thiago Silva', pos: 'CB', rating: 94 },
  { name: 'Alessandro Nesta', pos: 'CB', rating: 91 },
  { name: 'Ignazio Abate', pos: 'RB', rating: 86 },
  { name: 'Christian Abbiati', pos: 'GK', rating: 88 }
]));

// 22. INTER DE MILÁN 2021 (Scudetto de Conte)
add(buildTeam('int_2021', 'Inter de Milán', 'INT', 'champions', '2021', 'Campeón Serie A 2021', '🇮🇹', 'Italia', 'legendary', [
  { name: 'Romelu Lukaku', pos: 'ST', rating: 92, bonus: 1 },
  { name: 'Lautaro Martínez', pos: 'ST', rating: 89 },
  { name: 'Christian Eriksen', pos: 'CM', rating: 88 },
  { name: 'Marcelo Brozović', pos: 'DM', rating: 90 },
  { name: 'Nicolò Barella', pos: 'CM', rating: 91 },
  { name: 'Ivan Perišić', pos: 'LM', rating: 88 },
  { name: 'Achraf Hakimi', pos: 'RM', rating: 91 },
  { name: 'Alessandro Bastoni', pos: 'CB', rating: 88 },
  { name: 'Stefan de Vrij', pos: 'CB', rating: 90 },
  { name: 'Milan Škriniar', pos: 'CB', rating: 90 },
  { name: 'Samir Handanovič', pos: 'GK', rating: 90 }
]));

// 23. JUVENTUS 2003 (Campeón Scudetto y Finalista Old Trafford)
add(buildTeam('juv_2003', 'Juventus FC', 'JUV', 'champions', '2003', 'Finalista Champions 2003', '🇮🇹', 'Italia', 'legendary', [
  { name: 'Alessandro Del Piero', pos: 'ST', rating: 94, bonus: 1 },
  { name: 'David Trezeguet', pos: 'ST', rating: 93 },
  { name: 'Pavel Nedvěd', pos: 'AM', rating: 96 },
  { name: 'Mauro Camoranesi', pos: 'RW', rating: 89 },
  { name: 'Edgar Davids', pos: 'DM', rating: 93 },
  { name: 'Alessio Tacchinardi', pos: 'CM', rating: 88 },
  { name: 'Gianluca Zambrotta', pos: 'LB', rating: 92 },
  { name: 'Paolo Montero', pos: 'CB', rating: 91 },
  { name: 'Ciro Ferrara', pos: 'CB', rating: 91 },
  { name: 'Lilian Thuram', pos: 'RB', rating: 94 },
  { name: 'Gianluigi Buffon', pos: 'GK', rating: 95 }
]));

// 24. JUVENTUS 2012 (Campeón Invicto de Serie A)
add(buildTeam('juv_2012', 'Juventus FC', 'JUV', 'champions', '2012', 'Campeón Invicto Serie A 2012', '🇮🇹', 'Italia', 'legendary', [
  { name: 'Alessandro Matri', pos: 'ST', rating: 86 },
  { name: 'Mirko Vučinić', pos: 'ST', rating: 88 },
  { name: 'Arturo Vidal', pos: 'CM', rating: 92, bonus: 1 },
  { name: 'Andrea Pirlo', pos: 'CM', rating: 95 },
  { name: 'Claudio Marchisio', pos: 'CM', rating: 91 },
  { name: 'Stephan Lichtsteiner', pos: 'RB', rating: 89 },
  { name: 'Paolo De Ceglie', pos: 'LB', rating: 83 },
  { name: 'Giorgio Chiellini', pos: 'CB', rating: 93 },
  { name: 'Leonardo Bonucci', pos: 'CB', rating: 90 },
  { name: 'Andrea Barzagli', pos: 'CB', rating: 91 },
  { name: 'Gianluigi Buffon', pos: 'GK', rating: 94 }
]));

// 25. JUVENTUS 2017 (Finalista Champions de Cardiff)
add(buildTeam('juv_2017', 'Juventus FC', 'JUV', 'champions', '2017', 'Finalista Champions 2017', '🇮🇹', 'Italia', 'legendary', [
  { name: 'Gonzalo Higuaín', pos: 'ST', rating: 93 },
  { name: 'Paulo Dybala', pos: 'AM', rating: 93, bonus: 1 },
  { name: 'Mario Mandžukić', pos: 'LW', rating: 89 },
  { name: 'Dani Alves', pos: 'RW', rating: 91 },
  { name: 'Miralem Pjanić', pos: 'CM', rating: 91 },
  { name: 'Sami Khedira', pos: 'CM', rating: 88 },
  { name: 'Alex Sandro', pos: 'LB', rating: 90 },
  { name: 'Giorgio Chiellini', pos: 'CB', rating: 94 },
  { name: 'Leonardo Bonucci', pos: 'CB', rating: 93 },
  { name: 'Andrea Barzagli', pos: 'RB', rating: 89 },
  { name: 'Gianluigi Buffon', pos: 'GK', rating: 94 }
]));

// 26. NAPOLI 2023 (El Histórico Scudetto)
add(buildTeam('nap_2023', 'SSC Napoli', 'NAP', 'champions', '2023', 'Campeón Histórico Scudetto 2023', '🇮🇹', 'Italia', 'legendary', [
  { name: 'Victor Osimhen', pos: 'ST', rating: 92, bonus: 1 },
  { name: 'Khvicha Kvaratskhelia', pos: 'LW', rating: 92 },
  { name: 'Matteo Politano', pos: 'RW', rating: 86 },
  { name: 'Piotr Zieliński', pos: 'CM', rating: 88 },
  { name: 'Stanislav Lobotka', pos: 'DM', rating: 90 },
  { name: 'André-Frank Zambo Anguissa', pos: 'CM', rating: 89 },
  { name: 'Mário Rui', pos: 'LB', rating: 85 },
  { name: 'Kim Min-jae', pos: 'CB', rating: 91 },
  { name: 'Amir Rrahmani', pos: 'CB', rating: 86 },
  { name: 'Giovanni Di Lorenzo', pos: 'RB', rating: 89 },
  { name: 'Alex Meret', pos: 'GK', rating: 87 }
]));

// 27. BORUSSIA DORTMUND 2012 (Doble Corona Bundesliga y Pokal de Klopp)
add(buildTeam('bvb_2012', 'Borussia Dortmund', 'BVB', 'champions', '2012', 'Doble Corona Bundesliga 2012', '🇩🇪', 'Alemania', 'legendary', [
  { name: 'Robert Lewandowski', pos: 'ST', rating: 92, bonus: 1 },
  { name: 'Shinji Kagawa', pos: 'AM', rating: 90 },
  { name: 'Jakub Błaszczykowski', pos: 'RW', rating: 88 },
  { name: 'Kevin Großkreutz', pos: 'LW', rating: 85 },
  { name: 'İlkay Gündoğan', pos: 'CM', rating: 89 },
  { name: 'Sebastian Kehl', pos: 'DM', rating: 87 },
  { name: 'Marcel Schmelzer', pos: 'LB', rating: 87 },
  { name: 'Mats Hummels', pos: 'CB', rating: 93 },
  { name: 'Neven Subotić', pos: 'CB', rating: 89 },
  { name: 'Łukasz Piszczek', pos: 'RB', rating: 90 },
  { name: 'Roman Weidenfeller', pos: 'GK', rating: 89 }
]));

// 28. BORUSSIA DORTMUND 2013 (Finalista Champions de Wembley)
add(buildTeam('bvb_2013', 'Borussia Dortmund', 'BVB', 'champions', '2013', 'Finalista Champions Wembley 2013', '🇩🇪', 'Alemania', 'legendary', [
  { name: 'Robert Lewandowski', pos: 'ST', rating: 94, bonus: 1 },
  { name: 'Marco Reus', pos: 'LW', rating: 92 },
  { name: 'Mario Götze', pos: 'AM', rating: 92 },
  { name: 'Jakub Błaszczykowski', pos: 'RW', rating: 88 },
  { name: 'İlkay Gündoğan', pos: 'CM', rating: 91 },
  { name: 'Sven Bender', pos: 'DM', rating: 87 },
  { name: 'Marcel Schmelzer', pos: 'LB', rating: 88 },
  { name: 'Mats Hummels', pos: 'CB', rating: 93 },
  { name: 'Neven Subotić', pos: 'CB', rating: 89 },
  { name: 'Łukasz Piszczek', pos: 'RB', rating: 90 },
  { name: 'Roman Weidenfeller', pos: 'GK', rating: 90 }
]));

// 29. BAYERN MÜNCHEN 2001 (Campeón Champions League de Milán)
add(buildTeam('bay_2001', 'Bayern de Múnich', 'BAY', 'champions', '2001', 'Campeón Champions League 2001', '🇩🇪', 'Alemania', 'legendary', [
  { name: 'Giovane Élber', pos: 'ST', rating: 93, bonus: 1 },
  { name: 'Carsten Jancker', pos: 'ST', rating: 88 },
  { name: 'Mehmet Scholl', pos: 'AM', rating: 92 },
  { name: 'Stefan Effenberg', pos: 'CM', rating: 94 },
  { name: 'Jens Jeremies', pos: 'DM', rating: 89 },
  { name: 'Hasan Salihamidžić', pos: 'RW', rating: 90 },
  { name: 'Bixente Lizarazu', pos: 'LB', rating: 93 },
  { name: 'Thomas Linke', pos: 'CB', rating: 89 },
  { name: 'Samuel Kuffour', pos: 'CB', rating: 90 },
  { name: 'Patrik Andersson', pos: 'CB', rating: 90 },
  { name: 'Oliver Kahn', pos: 'GK', rating: 96 }
]));

// 30. BAYERN MÜNCHEN 2016 (El Bayern de Guardiola)
add(buildTeam('bay_2016', 'Bayern de Múnich', 'BAY', 'champions', '2016', 'Bayern de Guardiola 2016', '🇩🇪', 'Alemania', 'legendary', [
  { name: 'Robert Lewandowski', pos: 'ST', rating: 95, bonus: 1 },
  { name: 'Thomas Müller', pos: 'AM', rating: 93 },
  { name: 'Douglas Costa', pos: 'LW', rating: 90 },
  { name: 'Kingsley Coman', pos: 'RW', rating: 88 },
  { name: 'Arturo Vidal', pos: 'CM', rating: 92 },
  { name: 'Thiago Alcântara', pos: 'CM', rating: 92 },
  { name: 'Xabi Alonso', pos: 'DM', rating: 91 },
  { name: 'David Alaba', pos: 'LB', rating: 92 },
  { name: 'Jérôme Boateng', pos: 'CB', rating: 93 },
  { name: 'Philipp Lahm', pos: 'RB', rating: 94 },
  { name: 'Manuel Neuer', pos: 'GK', rating: 95 }
]));

// 31. WOLFSBURG 2009 (Campeón Inédito Bundesliga)
add(buildTeam('wob_2009', 'VfL Wolfsburg', 'WOB', 'champions', '2009', 'Campeón Bundesliga 2009', '🇩🇪', 'Alemania', 'legendary', [
  { name: 'Edin Džeko', pos: 'ST', rating: 92, bonus: 1 },
  { name: 'Grafite', pos: 'ST', rating: 92 },
  { name: 'Zvjezdan Misimović', pos: 'AM', rating: 90 },
  { name: 'Christian Gentner', pos: 'LM', rating: 86 },
  { name: 'Josué', pos: 'DM', rating: 88 },
  { name: 'Ashkan Dejagah', pos: 'RM', rating: 85 },
  { name: 'Marcel Schäfer', pos: 'LB', rating: 87 },
  { name: 'Andrea Barzagli', pos: 'CB', rating: 90 },
  { name: 'Jan Šimůnek', pos: 'CB', rating: 85 },
  { name: 'Sascha Riether', pos: 'RB', rating: 86 },
  { name: 'Diego Benaglio', pos: 'GK', rating: 89 }
]));

// 32. SCHALKE 04 2011 (Semifinalista Champions League)
add(buildTeam('s04_2011', 'Schalke 04', 'S04', 'champions', '2011', 'Semifinal Champions 2011', '🇩🇪', 'Alemania', 'gold', [
  { name: 'Raúl González', pos: 'ST', rating: 92, bonus: 1 },
  { name: 'Klaas-Jan Huntelaar', pos: 'ST', rating: 89 },
  { name: 'Jefferson Farfán', pos: 'RW', rating: 89 },
  { name: 'José Manuel Jurado', pos: 'LW', rating: 86 },
  { name: 'Jermaine Jones', pos: 'DM', rating: 86 },
  { name: 'Joël Matip', pos: 'DM', rating: 86 },
  { name: 'Hans Sarpei', pos: 'LB', rating: 83 },
  { name: 'Christoph Metzelder', pos: 'CB', rating: 87 },
  { name: 'Benedikt Höwedes', pos: 'CB', rating: 89 },
  { name: 'Atsuto Uchida', pos: 'RB', rating: 85 },
  { name: 'Manuel Neuer', pos: 'GK', rating: 93 }
]));

// 33. WERDER BREMEN 2009 (Finalista Copa de la UEFA)
add(buildTeam('bre_2009', 'Werder Bremen', 'BRE', 'champions', '2009', 'Finalista Copa de la UEFA 2009', '🇩🇪', 'Alemania', 'gold', [
  { name: 'Claudio Pizarro', pos: 'ST', rating: 90, bonus: 1 },
  { name: 'Diego Ribas', pos: 'AM', rating: 92 },
  { name: 'Mesut Özil', pos: 'AM', rating: 89 },
  { name: 'Torsten Frings', pos: 'DM', rating: 89 },
  { name: 'Frank Baumann', pos: 'DM', rating: 86 },
  { name: 'Peter Niemeyer', pos: 'CM', rating: 83 },
  { name: 'Sebastian Boenisch', pos: 'LB', rating: 84 },
  { name: 'Naldo', pos: 'CB', rating: 90 },
  { name: 'Per Mertesacker', pos: 'CB', rating: 89 },
  { name: 'Clemens Fritz', pos: 'RB', rating: 86 },
  { name: 'Tim Wiese', pos: 'GK', rating: 87 }
]));

// 34. EINTRACHT FRANKFURT 2022 (Campeón Invicto UEFA Europa League)
add(buildTeam('sge_2022', 'Eintracht Frankfurt', 'SGE', 'champions', '2022', 'Campeón Europa League 2022', '🇩🇪', 'Alemania', 'gold', [
  { name: 'Rafael Santos Borré', pos: 'ST', rating: 87 },
  { name: 'Jesper Lindstrøm', pos: 'RW', rating: 86 },
  { name: 'Daichi Kamada', pos: 'AM', rating: 88, bonus: 1 },
  { name: 'Filip Kostić', pos: 'LM', rating: 90 },
  { name: 'Ansgar Knauff', pos: 'RM', rating: 85 },
  { name: 'Sebastian Rode', pos: 'CM', rating: 86 },
  { name: 'Djibril Sow', pos: 'CM', rating: 86 },
  { name: 'Evan Ndicka', pos: 'CB', rating: 88 },
  { name: 'Martin Hinteregger', pos: 'CB', rating: 87 },
  { name: 'Tuta', pos: 'CB', rating: 85 },
  { name: 'Kevin Trapp', pos: 'GK', rating: 90 }
]));

// 35. PARIS SAINT-GERMAIN 2016 (Cuadruplete Francés)
add(buildTeam('psg_2016', 'Paris Saint-Germain', 'PSG', 'champions', '2016', 'Cuadruplete Francés 2016', '🇫🇷', 'Francia', 'legendary', [
  { name: 'Zlatan Ibrahimović', pos: 'ST', rating: 95, bonus: 1 },
  { name: 'Edinson Cavani', pos: 'LW', rating: 91 },
  { name: 'Ángel Di María', pos: 'RW', rating: 92 },
  { name: 'Marco Verratti', pos: 'CM', rating: 92 },
  { name: 'Thiago Motta', pos: 'DM', rating: 90 },
  { name: 'Blaise Matuidi', pos: 'CM', rating: 90 },
  { name: 'Maxwell', pos: 'LB', rating: 88 },
  { name: 'Thiago Silva', pos: 'CB', rating: 94 },
  { name: 'David Luiz', pos: 'CB', rating: 89 },
  { name: 'Marquinhos', pos: 'RB', rating: 88 },
  { name: 'Kevin Trapp', pos: 'GK', rating: 88 }
]));

// 36. PARIS SAINT-GERMAIN 2020 (Finalista Champions de Lisboa)
add(buildTeam('psg_2020', 'Paris Saint-Germain', 'PSG', 'champions', '2020', 'Finalista Champions 2020', '🇫🇷', 'Francia', 'legendary', [
  { name: 'Neymar Jr.', pos: 'LW', rating: 95, bonus: 1 },
  { name: 'Kylian Mbappé', pos: 'ST', rating: 94 },
  { name: 'Ángel Di María', pos: 'RW', rating: 92 },
  { name: 'Leandro Paredes', pos: 'CM', rating: 87 },
  { name: 'Marquinhos', pos: 'DM', rating: 91 },
  { name: 'Ander Herrera', pos: 'CM', rating: 86 },
  { name: 'Juan Bernat', pos: 'LB', rating: 87 },
  { name: 'Presnel Kimpembe', pos: 'CB', rating: 88 },
  { name: 'Thiago Silva', pos: 'CB', rating: 91 },
  { name: 'Thilo Kehrer', pos: 'RB', rating: 84 },
  { name: 'Keylor Navas', pos: 'GK', rating: 92 }
]));

// 37. AS MONACO 2004 (Finalista Champions League)
add(buildTeam('mon_2004', 'AS Monaco', 'ASM', 'champions', '2004', 'Finalista Champions 2004', '🇫🇷', 'Francia', 'legendary', [
  { name: 'Fernando Morientes', pos: 'ST', rating: 93, bonus: 1 },
  { name: 'Dado Pršo', pos: 'ST', rating: 89 },
  { name: 'Ludovic Giuly', pos: 'RW', rating: 91 },
  { name: 'Jérôme Rothen', pos: 'LW', rating: 90 },
  { name: 'Édouard Cissé', pos: 'DM', rating: 86 },
  { name: 'Lucas Bernardi', pos: 'CM', rating: 87 },
  { name: 'Patrice Evra', pos: 'LB', rating: 89 },
  { name: 'Julien Rodríguez', pos: 'CB', rating: 87 },
  { name: 'Gaël Givet', pos: 'CB', rating: 87 },
  { name: 'Hugo Ibarra', pos: 'RB', rating: 87 },
  { name: 'Flavio Roma', pos: 'GK', rating: 88 }
]));

// 38. LILLE OSC 2011 (Campeón Doblete Ligue 1 con Hazard)
add(buildTeam('lil_2011', 'Lille OSC', 'LIL', 'champions', '2011', 'Campeón Ligue 1 2011', '🇫🇷', 'Francia', 'legendary', [
  { name: 'Eden Hazard', pos: 'LW', rating: 92, bonus: 1 },
  { name: 'Moussa Sow', pos: 'ST', rating: 89 },
  { name: 'Gervinho', pos: 'RW', rating: 89 },
  { name: 'Yohan Cabaye', pos: 'CM', rating: 89 },
  { name: 'Rio Mavuba', pos: 'DM', rating: 88 },
  { name: 'Florent Balmont', pos: 'CM', rating: 86 },
  { name: 'Franck Béria', pos: 'LB', rating: 85 },
  { name: 'Aurélien Chedjou', pos: 'CB', rating: 87 },
  { name: 'Adil Rami', pos: 'CB', rating: 88 },
  { name: 'Mathieu Debuchy', pos: 'RB', rating: 88 },
  { name: 'Mickaël Landreau', pos: 'GK', rating: 88 }
]));

// 39. FC PORTO 2003 (Campeón Copa de la UEFA de Mourinho)
add(buildTeam('fcp_2003', 'FC Porto', 'FCP', 'champions', '2003', 'Campeón Copa UEFA 2003', '🇵🇹', 'Portugal', 'legendary', [
  { name: 'Derlei', pos: 'ST', rating: 90, bonus: 1 },
  { name: 'Deco', pos: 'AM', rating: 93 },
  { name: 'Nuno Capucho', pos: 'RW', rating: 88 },
  { name: 'Maniche', pos: 'CM', rating: 89 },
  { name: 'Costinha', pos: 'DM', rating: 90 },
  { name: 'Dmitri Alenichev', pos: 'LM', rating: 88 },
  { name: 'Nuno Valente', pos: 'LB', rating: 88 },
  { name: 'Ricardo Carvalho', pos: 'CB', rating: 92 },
  { name: 'Jorge Costa', pos: 'CB', rating: 89 },
  { name: 'Paulo Ferreira', pos: 'RB', rating: 89 },
  { name: 'Vítor Baía', pos: 'GK', rating: 91 }
]));

// 40. FC PORTO 2011 (Campeón Europa League Invicto de Falcao)
add(buildTeam('fcp_2011', 'FC Porto', 'FCP', 'champions', '2011', 'Campeón Europa League 2011', '🇵🇹', 'Portugal', 'legendary', [
  { name: 'Radamel Falcao', pos: 'ST', rating: 95, bonus: 1 },
  { name: 'Hulk', pos: 'RW', rating: 93 },
  { name: 'Silvestre Varela', pos: 'LW', rating: 87 },
  { name: 'João Moutinho', pos: 'CM', rating: 91 },
  { name: 'Fredy Guarín', pos: 'CM', rating: 89 },
  { name: 'Fernando', pos: 'DM', rating: 89 },
  { name: 'Álvaro Pereira', pos: 'LB', rating: 88 },
  { name: 'Nicolás Otamendi', pos: 'CB', rating: 89 },
  { name: 'Rolando', pos: 'CB', rating: 87 },
  { name: 'Cristian Săpunaru', pos: 'RB', rating: 86 },
  { name: 'Helton', pos: 'GK', rating: 89 }
]));

// 41. SL BENFICA 2014 (Finalista Europa League)
add(buildTeam('slb_2014', 'SL Benfica', 'SLB', 'champions', '2014', 'Finalista Europa League 2014', '🇵🇹', 'Portugal', 'legendary', [
  { name: 'Óscar Cardozo', pos: 'ST', rating: 89, bonus: 1 },
  { name: 'Rodrigo Moreno', pos: 'ST', rating: 88 },
  { name: 'Nicolás Gaitán', pos: 'LW', rating: 90 },
  { name: 'Lazar Marković', pos: 'RW', rating: 87 },
  { name: 'Nemanja Matić', pos: 'DM', rating: 90 },
  { name: 'Enzo Pérez', pos: 'CM', rating: 90 },
  { name: 'Guilherme Siqueira', pos: 'LB', rating: 87 },
  { name: 'Ezequiel Garay', pos: 'CB', rating: 91 },
  { name: 'Luisão', pos: 'CB', rating: 90 },
  { name: 'Maxi Pereira', pos: 'RB', rating: 87 },
  { name: 'Jan Oblak', pos: 'GK', rating: 91 }
]));

// 42. AFC AJAX 2019 (La Generación Dorada Semifinalista)
add(buildTeam('aja_2019', 'AFC Ajax', 'AJA', 'champions', '2019', 'Semifinal Champions 2019', '🇳🇱', 'Países Bajos', 'legendary', [
  { name: 'Dušan Tadić', pos: 'ST', rating: 93, bonus: 1 },
  { name: 'Hakim Ziyech', pos: 'RW', rating: 92 },
  { name: 'David Neres', pos: 'LW', rating: 88 },
  { name: 'Donny van de Beek', pos: 'AM', rating: 90 },
  { name: 'Frenkie de Jong', pos: 'CM', rating: 93 },
  { name: 'Lasse Schöne', pos: 'DM', rating: 87 },
  { name: 'Nicolás Tagliafico', pos: 'LB', rating: 89 },
  { name: 'Matthijs de Ligt', pos: 'CB', rating: 93 },
  { name: 'Daley Blind', pos: 'CB', rating: 89 },
  { name: 'Noussair Mazraoui', pos: 'RB', rating: 87 },
  { name: 'André Onana', pos: 'GK', rating: 90 }
]));

// 43. PSV EINDHOVEN 2005 (Semifinalista Champions League)
add(buildTeam('psv_2005', 'PSV Eindhoven', 'PSV', 'champions', '2005', 'Semifinal Champions 2005', '🇳🇱', 'Países Bajos', 'legendary', [
  { name: 'Jan Vennegoor of Hesselink', pos: 'ST', rating: 88 },
  { name: 'Jefferson Farfán', pos: 'RW', rating: 90 },
  { name: 'Park Ji-sung', pos: 'LW', rating: 91, bonus: 1 },
  { name: 'Mark van Bommel', pos: 'CM', rating: 92 },
  { name: 'Phillip Cocu', pos: 'CM', rating: 92 },
  { name: 'Johann Vogel', pos: 'DM', rating: 88 },
  { name: 'Lee Young-pyo', pos: 'LB', rating: 89 },
  { name: 'Alex (El Tanque)', pos: 'CB', rating: 91 },
  { name: 'Wilfred Bouma', pos: 'CB', rating: 88 },
  { name: 'André Ooijer', pos: 'RB', rating: 87 },
  { name: 'Heurelho Gomes', pos: 'GK', rating: 90 }
]));

// 44. FEYENOORD 2002 (Campeón Copa de la UEFA)
add(buildTeam('fey_2002', 'Feyenoord Rotterdam', 'FEY', 'champions', '2002', 'Campeón Copa UEFA 2002', '🇳🇱', 'Países Bajos', 'legendary', [
  { name: 'Pierre van Hooijdonk', pos: 'ST', rating: 93, bonus: 1 },
  { name: 'Jon Dahl Tomasson', pos: 'ST', rating: 90 },
  { name: 'Bonaventure Kalou', pos: 'RW', rating: 88 },
  { name: 'Shinji Ono', pos: 'AM', rating: 89 },
  { name: 'Paul Bosvelt', pos: 'DM', rating: 89 },
  { name: 'Patrick Paauwe', pos: 'CM', rating: 87 },
  { name: 'Tomasz Rząsa', pos: 'LB', rating: 86 },
  { name: 'Kees van Wonderen', pos: 'CB', rating: 88 },
  { name: 'Glenn Loovens', pos: 'CB', rating: 84 },
  { name: 'Brett Emerton', pos: 'RB', rating: 88 },
  { name: 'Edwin Zoetebier', pos: 'GK', rating: 87 }
]));

// 45. CELTIC 2003 (Finalista Copa de la UEFA de Sevilla)
add(buildTeam('cel_2003', 'Celtic FC', 'CEL', 'champions', '2003', 'Finalista Copa UEFA Sevilla 2003', '🏴󠁧󠁢󠁳󠁣󠁴󠁿', 'Escocia', 'legendary', [
  { name: 'Henrik Larsson', pos: 'ST', rating: 94, bonus: 1 },
  { name: 'Chris Sutton', pos: 'ST', rating: 89 },
  { name: 'Stiliyan Petrov', pos: 'CM', rating: 90 },
  { name: 'Paul Lambert', pos: 'DM', rating: 89 },
  { name: 'Neil Lennon', pos: 'DM', rating: 88 },
  { name: 'Alan Thompson', pos: 'LM', rating: 88 },
  { name: 'Didier Agathe', pos: 'RM', rating: 88 },
  { name: 'Bobo Baldé', pos: 'CB', rating: 88 },
  { name: 'Johan Mjällby', pos: 'CB', rating: 89 },
  { name: 'Joos Valgaeren', pos: 'CB', rating: 87 },
  { name: 'Robert Douglas', pos: 'GK', rating: 86 }
]));

// 46. RANGERS 2022 (Finalista UEFA Europa League de Sevilla)
add(buildTeam('ran_2022', 'Rangers FC', 'RAN', 'champions', '2022', 'Finalista Europa League 2022', '🏴󠁧󠁢󠁳󠁣󠁴󠁿', 'Escocia', 'gold', [
  { name: 'Ryan Kent', pos: 'LW', rating: 87 },
  { name: 'Joe Aribo', pos: 'ST', rating: 87 },
  { name: 'Scott Wright', pos: 'RW', rating: 84 },
  { name: 'John Lundstram', pos: 'CM', rating: 87, bonus: 1 },
  { name: 'Glen Kamara', pos: 'CM', rating: 86 },
  { name: 'Ryan Jack', pos: 'DM', rating: 85 },
  { name: 'Borna Barišić', pos: 'LB', rating: 86 },
  { name: 'Calvin Bassey', pos: 'CB', rating: 88 },
  { name: 'Connor Goldson', pos: 'CB', rating: 87 },
  { name: 'James Tavernier', pos: 'RB', rating: 89 },
  { name: 'Allan McGregor', pos: 'GK', rating: 88 }
]));

// 47. ZENIT SAN PETERSBURGO 2008 (Campeón Copa de la UEFA)
add(buildTeam('zen_2008', 'Zenit de San Petersburgo', 'ZEN', 'champions', '2008', 'Campeón Copa UEFA 2008', '🇷🇺', 'Rusia', 'legendary', [
  { name: 'Andrei Arshavin', pos: 'AM', rating: 93, bonus: 1 },
  { name: 'Pavel Pogrebnyak', pos: 'ST', rating: 89 },
  { name: 'Danny', pos: 'LW', rating: 90 },
  { name: 'Konstantin Zyryanov', pos: 'CM', rating: 89 },
  { name: 'Anatoliy Tymoshchuk', pos: 'DM', rating: 91 },
  { name: 'Igor Denisov', pos: 'CM', rating: 88 },
  { name: 'Radek Šírl', pos: 'LB', rating: 85 },
  { name: 'Ivica Križanac', pos: 'CB', rating: 87 },
  { name: 'Sébastien Puygrenier', pos: 'CB', rating: 85 },
  { name: 'Aleksandr Anyukov', pos: 'RB', rating: 88 },
  { name: 'Vyacheslav Malafeev', pos: 'GK', rating: 88 }
]));

// 48. CSKA MOSCÚ 2005 (Campeón Copa de la UEFA)
add(buildTeam('csk_2005', 'CSKA Moscú', 'CSK', 'champions', '2005', 'Campeón Copa UEFA 2005', '🇷🇺', 'Rusia', 'legendary', [
  { name: 'Vágner Love', pos: 'ST', rating: 91, bonus: 1 },
  { name: 'Ivica Olić', pos: 'ST', rating: 89 },
  { name: 'Daniel Carvalho', pos: 'AM', rating: 91 },
  { name: 'Yuri Zhirkov', pos: 'LM', rating: 89 },
  { name: 'Elvir Rahimić', pos: 'DM', rating: 87 },
  { name: 'Evgeni Aldonin', pos: 'CM', rating: 86 },
  { name: 'Miloš Krasić', pos: 'RM', rating: 88 },
  { name: 'Sergei Ignashevich', pos: 'CB', rating: 90 },
  { name: 'Aleksei Berezutski', pos: 'CB', rating: 88 },
  { name: 'Vasili Berezutski', pos: 'RB', rating: 87 },
  { name: 'Igor Akinfeev', pos: 'GK', rating: 90 }
]));

// 49. DYNAMO KYIV 1999 (Semifinalista Champions League)
add(buildTeam('dyn_1999', 'Dynamo de Kiev', 'DYN', 'champions', '1999', 'Semifinal Champions 1999', '🇺🇦', 'Ucrania', 'legendary', [
  { name: 'Andriy Shevchenko', pos: 'ST', rating: 95, bonus: 1 },
  { name: 'Serhiy Rebrov', pos: 'ST', rating: 92 },
  { name: 'Vitaliy Kosovskyi', pos: 'LW', rating: 88 },
  { name: 'Valyantsin Byalkevich', pos: 'AM', rating: 90 },
  { name: 'Andriy Husin', pos: 'DM', rating: 89 },
  { name: 'Aliaksandr Khatskevich', pos: 'CM', rating: 88 },
  { name: 'Kakha Kaladze', pos: 'LB', rating: 91 },
  { name: 'Vladyslav Vashchuk', pos: 'CB', rating: 89 },
  { name: 'Oleksandr Holovko', pos: 'CB', rating: 89 },
  { name: 'Oleh Luzhnyi', pos: 'RB', rating: 89 },
  { name: 'Oleksandr Shovkovskyi', pos: 'GK', rating: 91 }
]));

// 50. REAL SOCIEDAD 2003 (Subcampeón Histórico de LaLiga)
add(buildTeam('rso_2003', 'Real Sociedad', 'RSO', 'champions', '2003', 'Subcampeón LaLiga 2003', '🇪🇸', 'España', 'legendary', [
  { name: 'Darko Kovačević', pos: 'ST', rating: 91 },
  { name: 'Nihat Kahveci', pos: 'ST', rating: 93, bonus: 1 },
  { name: 'Valeri Karpin', pos: 'RM', rating: 91 },
  { name: 'Javier de Pedro', pos: 'LM', rating: 90 },
  { name: 'Xabi Alonso', pos: 'CM', rating: 92 },
  { name: 'Mikel Aranburu', pos: 'DM', rating: 87 },
  { name: 'Agustín Aranzábal', pos: 'LB', rating: 88 },
  { name: 'Gabriel Schürrer', pos: 'CB', rating: 87 },
  { name: 'Bjørn Tore Kvarme', pos: 'CB', rating: 86 },
  { name: 'Aitor López Rekarte', pos: 'RB', rating: 87 },
  { name: 'Sander Westerveld', pos: 'GK', rating: 88 }
]));

// 51. MÁLAGA CF 2013 (Cuartos de Champions de Pellegrini)
add(buildTeam('mal_2013', 'Málaga CF', 'MAL', 'champions', '2013', 'Cuartos Champions 2013', '🇪🇸', 'España', 'legendary', [
  { name: 'Roque Santa Cruz', pos: 'ST', rating: 88 },
  { name: 'Isco Alarcón', pos: 'AM', rating: 93, bonus: 1 },
  { name: 'Javier Saviola', pos: 'ST', rating: 87 },
  { name: 'Joaquín Sánchez', pos: 'RW', rating: 90 },
  { name: 'Jérémy Toulalan', pos: 'DM', rating: 90 },
  { name: 'Ignacio Camacho', pos: 'CM', rating: 87 },
  { name: 'Vitorino Antunes', pos: 'LB', rating: 86 },
  { name: 'Martín Demichelis', pos: 'CB', rating: 89 },
  { name: 'Weligton', pos: 'CB', rating: 88 },
  { name: 'Jesús Gámez', pos: 'RB', rating: 87 },
  { name: 'Willy Caballero', pos: 'GK', rating: 90 }
]));

// 52. CELTA DE VIGO 2001 (EuroCelta de Mostovoi y Karpin)
add(buildTeam('cel_2001', 'RC Celta de Vigo', 'CEL', 'champions', '2001', 'EuroCelta 2001', '🇪🇸', 'España', 'legendary', [
  { name: 'Catanha', pos: 'ST', rating: 89 },
  { name: 'Aleksandr Mostovoi (El Zar)', pos: 'AM', rating: 94, bonus: 1 },
  { name: 'Valeri Karpin', pos: 'RW', rating: 91 },
  { name: 'Gustavo López', pos: 'LW', rating: 89 },
  { name: 'Vágner', pos: 'CM', rating: 87 },
  { name: 'Everton Giovanella', pos: 'DM', rating: 87 },
  { name: 'Juanfran García', pos: 'LB', rating: 87 },
  { name: 'Fernando Cáceres', pos: 'CB', rating: 88 },
  { name: 'Eduardo Berizzo', pos: 'CB', rating: 88 },
  { name: 'Míchel Salgado', pos: 'RB', rating: 88 },
  { name: 'Pablo Cavallero', pos: 'GK', rating: 87 }
]));

// 53. ESPANYOL 2007 (Finalista Copa de la UEFA de Glasgow)
add(buildTeam('esp_2007', 'RCD Espanyol', 'ESP', 'champions', '2007', 'Finalista Copa UEFA 2007', '🇪🇸', 'España', 'legendary', [
  { name: 'Raúl Tamudo', pos: 'ST', rating: 91, bonus: 1 },
  { name: 'Walter Pandiani', pos: 'ST', rating: 90 },
  { name: 'Albert Riera', pos: 'LW', rating: 89 },
  { name: 'Iván de la Peña (Lo Pelat)', pos: 'AM', rating: 91 },
  { name: 'Moisés Hurtado', pos: 'DM', rating: 87 },
  { name: 'Francisco Rufete', pos: 'RW', rating: 87 },
  { name: 'Javier Chica', pos: 'LB', rating: 85 },
  { name: 'Dani Jarque', pos: 'CB', rating: 89 },
  { name: 'Marc Torrejón', pos: 'CB', rating: 86 },
  { name: 'Pablo Zabaleta', pos: 'RB', rating: 88 },
  { name: 'Gorka Iraizoz', pos: 'GK', rating: 88 }
]));

// 54. ATHLETIC CLUB 2012 (Finalista Europa League de Bielsa)
add(buildTeam('ath_2012', 'Athletic Club', 'ATH', 'champions', '2012', 'Athletic de Bielsa 2012', '🇪🇸', 'España', 'legendary', [
  { name: 'Fernando Llorente', pos: 'ST', rating: 92, bonus: 1 },
  { name: 'Iker Muniain', pos: 'LW', rating: 90 },
  { name: 'Markel Susaeta', pos: 'RW', rating: 88 },
  { name: 'Ander Herrera', pos: 'AM', rating: 90 },
  { name: 'Óscar de Marcos', pos: 'CM', rating: 88 },
  { name: 'Ander Iturraspe', pos: 'DM', rating: 88 },
  { name: 'Jon Aurtenetxe', pos: 'LB', rating: 85 },
  { name: 'Fernando Amorebieta', pos: 'CB', rating: 87 },
  { name: 'Javi Martínez', pos: 'CB', rating: 91 },
  { name: 'Andoni Iraola', pos: 'RB', rating: 90 },
  { name: 'Gorka Iraizoz', pos: 'GK', rating: 88 }
]));

// 55. REAL BETIS 2005 (Campeón Copa del Rey y Champions)
add(buildTeam('bet_2005', 'Real Betis', 'BET', 'champions', '2005', 'Campeón Copa del Rey 2005', '🇪🇸', 'España', 'legendary', [
  { name: 'Ricardo Oliveira', pos: 'ST', rating: 92, bonus: 1 },
  { name: 'Edu Schmidt', pos: 'ST', rating: 89 },
  { name: 'Joaquín Sánchez', pos: 'RW', rating: 93 },
  { name: 'Marcos Assunção', pos: 'CM', rating: 90 },
  { name: 'Arzu', pos: 'DM', rating: 86 },
  { name: 'Alberto Rivera', pos: 'CM', rating: 86 },
  { name: 'Luis Fernández', pos: 'LB', rating: 86 },
  { name: 'Juanito Gutiérrez', pos: 'CB', rating: 90 },
  { name: 'David Rivas', pos: 'CB', rating: 86 },
  { name: 'Melli', pos: 'RB', rating: 85 },
  { name: 'Toni Doblas', pos: 'GK', rating: 87 }
]));

// 56. REAL BETIS 2022 (Campeón Copa del Rey)
add(buildTeam('bet_2022', 'Real Betis', 'BET', 'champions', '2022', 'Campeón Copa del Rey 2022', '🇪🇸', 'España', 'gold', [
  { name: 'Borja Iglesias (El Panda)', pos: 'ST', rating: 88 },
  { name: 'Nabil Fekir', pos: 'AM', rating: 91, bonus: 1 },
  { name: 'Sergio Canales', pos: 'CM', rating: 90 },
  { name: 'Juanmi Jiménez', pos: 'LW', rating: 87 },
  { name: 'Guido Rodríguez', pos: 'DM', rating: 89 },
  { name: 'William Carvalho', pos: 'CM', rating: 88 },
  { name: 'Álex Moreno', pos: 'LB', rating: 87 },
  { name: 'Marc Bartra', pos: 'CB', rating: 86 },
  { name: 'Germán Pezzella', pos: 'CB', rating: 87 },
  { name: 'Héctor Bellerín', pos: 'RB', rating: 86 },
  { name: 'Claudio Bravo', pos: 'GK', rating: 88 }
]));

// 57. WEST HAM UNITED 2023 (Campeón UEFA Europa Conference League)
add(buildTeam('whu_2023', 'West Ham United', 'WHU', 'champions', '2023', 'Campeón Conference League 2023', '🏴󠁧󠁢󠁥󠁮󠁧󠁿', 'Inglaterra', 'gold', [
  { name: 'Michail Antonio', pos: 'ST', rating: 86 },
  { name: 'Jarrod Bowen', pos: 'RW', rating: 89, bonus: 1 },
  { name: 'Saïd Benrahma', pos: 'LW', rating: 86 },
  { name: 'Lucas Paquetá', pos: 'AM', rating: 89 },
  { name: 'Declan Rice', pos: 'DM', rating: 92 },
  { name: 'Tomáš Souček', pos: 'CM', rating: 87 },
  { name: 'Emerson Palmieri', pos: 'LB', rating: 85 },
  { name: 'Nayef Aguerd', pos: 'CB', rating: 87 },
  { name: 'Kurt Zouma', pos: 'CB', rating: 87 },
  { name: 'Vladimír Coufal', pos: 'RB', rating: 85 },
  { name: 'Alphonse Areola', pos: 'GK', rating: 87 }
]));

// 58. BOLOGNA FC 2024 (La Histórica Clasificación a Champions de Thiago Motta)
add(buildTeam('bol_2024', 'Bologna FC', 'BOL', 'champions', '2024', 'Histórica Champions 2024', '🇮🇹', 'Italia', 'gold', [
  { name: 'Joshua Zirkzee', pos: 'ST', rating: 88, bonus: 1 },
  { name: 'Riccardo Orsolini', pos: 'RW', rating: 87 },
  { name: 'Alexis Saelemaekers', pos: 'LW', rating: 85 },
  { name: 'Lewis Ferguson', pos: 'AM', rating: 86 },
  { name: 'Remo Freuler', pos: 'CM', rating: 86 },
  { name: 'Michel Aebischer', pos: 'DM', rating: 84 },
  { name: 'Victor Kristiansen', pos: 'LB', rating: 84 },
  { name: 'Riccardo Calafiori', pos: 'CB', rating: 89 },
  { name: 'Sam Beukema', pos: 'CB', rating: 85 },
  { name: 'Stefan Posch', pos: 'RB', rating: 85 },
  { name: 'Łukasz Skorupski', pos: 'GK', rating: 86 }
]));

// 59. STADE BRESTOIS 2025 (Milagro Champions League)
add(buildTeam('bre_2025', 'Stade Brestois 29', 'SB29', 'champions', '2025', 'Milagro Champions 2025', '🇫🇷', 'Francia', 'silver', [
  { name: 'Ludovic Ajorque', pos: 'ST', rating: 84 },
  { name: 'Romain Del Castillo', pos: 'RW', rating: 85, bonus: 1 },
  { name: 'Mathias Pereira Lage', pos: 'LW', rating: 83 },
  { name: 'Mahdi Camara', pos: 'CM', rating: 85 },
  { name: 'Pierre Lees-Melou', pos: 'DM', rating: 86 },
  { name: 'Hugo Magnetti', pos: 'CM', rating: 84 },
  { name: 'Massadio Haïdara', pos: 'LB', rating: 82 },
  { name: 'Soumaïla Coulibaly', pos: 'CB', rating: 83 },
  { name: 'Brendan Chardonnet', pos: 'CB', rating: 84 },
  { name: 'Kenny Lala', pos: 'RB', rating: 83 },
  { name: 'Marco Bizot', pos: 'GK', rating: 85 }
]));

// 60. ATHLETIC CLUB 2024 (Campeón Copa del Rey 40 Años Después)
add(buildTeam('ath_2024', 'Athletic Club', 'ATH', 'champions', '2024', 'Campeón Copa del Rey 2024', '🇪🇸', 'España', 'legendary', [
  { name: 'Gorka Guruzeta', pos: 'ST', rating: 86 },
  { name: 'Nico Williams', pos: 'LW', rating: 91, bonus: 1 },
  { name: 'Iñaki Williams', pos: 'RW', rating: 88 },
  { name: 'Oihan Sancet', pos: 'AM', rating: 88 },
  { name: 'Beñat Prados', pos: 'CM', rating: 85 },
  { name: 'Iñigo Ruiz de Galarreta', pos: 'DM', rating: 86 },
  { name: 'Yuri Berchiche', pos: 'LB', rating: 85 },
  { name: 'Dani Vivian', pos: 'CB', rating: 87 },
  { name: 'Aitor Paredes', pos: 'CB', rating: 85 },
  { name: 'Óscar de Marcos', pos: 'RB', rating: 86 },
  { name: 'Julen Agirrezabala', pos: 'GK', rating: 87 }
]));
