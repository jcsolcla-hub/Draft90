import { buildTeam, Team } from '../teamBuilderHelper';

export const CLUBS_REACH_300: Team[] = [];

function add(t: Team) {
  CLUBS_REACH_300.push(t);
}

// 1. REAL BETIS 1997 (Finalista Copa del Rey de Serra Ferrer)
add(buildTeam('bet_1997', 'Real Betis', 'BET', 'champions', '1997', 'Betis de Serra Ferrer 1997', '🇪🇸', 'España', 'legendary', [
  { name: 'Alfonso Pérez (Bota Blanca)', pos: 'ST', rating: 92, bonus: 1 },
  { name: 'Finidi George', pos: 'RW', rating: 91 },
  { name: 'Robert Jarni', pos: 'LW', rating: 90 },
  { name: 'Alexis Trujillo', pos: 'CM', rating: 87 },
  { name: 'Juan José Cañas', pos: 'DM', rating: 86 },
  { name: 'Juan Merino', pos: 'CM', rating: 86 },
  { name: 'Josete', pos: 'LB', rating: 85 },
  { name: 'Risto Vidaković', pos: 'CB', rating: 87 },
  { name: 'Jaime Quesada', pos: 'RB', rating: 86 },
  { name: 'Juan Ureña', pos: 'CB', rating: 85 },
  { name: 'Toni Prats', pos: 'GK', rating: 88 }
]));

// 2. RCD MALLORCA 2003 (Campeón Copa del Rey con Eto'o)
add(buildTeam('mal_2003', 'RCD Mallorca', 'MAL', 'champions', '2003', 'Campeón Copa del Rey 2003', '🇪🇸', 'España', 'legendary', [
  { name: 'Samuel Eto\'o', pos: 'ST', rating: 93, bonus: 1 },
  { name: 'Walter Pandiani', pos: 'ST', rating: 89 },
  { name: 'Ariel Ibagaza (El Caño)', pos: 'AM', rating: 91 },
  { name: 'Albert Riera', pos: 'LW', rating: 88 },
  { name: 'Harold Lozano', pos: 'DM', rating: 87 },
  { name: 'Álvaro Novo', pos: 'RW', rating: 86 },
  { name: 'Poli', pos: 'LB', rating: 85 },
  { name: 'Miguel Ángel Nadal', pos: 'CB', rating: 89 },
  { name: 'Fernando Niño', pos: 'CB', rating: 86 },
  { name: 'David Cortés', pos: 'RB', rating: 86 },
  { name: 'Leo Franco', pos: 'GK', rating: 88 }
]));

// 3. DEPORTIVO ALAVÉS 2001 (Finalista Épico Copa UEFA 4-5)
add(buildTeam('ala_2001', 'Deportivo Alavés', 'ALA', 'champions', '2001', 'Final Épica de Dortmund 2001', '🇪🇸', 'España', 'legendary', [
  { name: 'Javi Moreno', pos: 'ST', rating: 91, bonus: 1 },
  { name: 'Iván Alonso', pos: 'ST', rating: 88 },
  { name: 'Jordi Cruyff', pos: 'AM', rating: 89 },
  { name: 'Ivan Tomić', pos: 'CM', rating: 87 },
  { name: 'Hermes Desio', pos: 'DM', rating: 87 },
  { name: 'Martín Astudillo', pos: 'CM', rating: 86 },
  { name: 'Delfí Geli', pos: 'RB', rating: 86 },
  { name: 'Antonio Karmona', pos: 'CB', rating: 87 },
  { name: 'Óscar Téllez', pos: 'CB', rating: 87 },
  { name: 'Dan Eggen', pos: 'CB', rating: 86 },
  { name: 'Martín Herrera', pos: 'GK', rating: 88 }
]));

// 4. REAL ZARAGOZA 1995 (Campeón Recopa de Europa del Gol de Nayim)
add(buildTeam('zar_1995', 'Real Zaragoza', 'ZAR', 'champions', '1995', 'Campeón Recopa Gol de Nayim 1995', '🇪🇸', 'España', 'legendary', [
  { name: 'Juan Eduardo Esnáider', pos: 'ST', rating: 92, bonus: 1 },
  { name: 'Miguel Pardeza', pos: 'ST', rating: 89 },
  { name: 'Gustavo Poyet', pos: 'AM', rating: 91 },
  { name: 'Nayim (Gol desde el Centro del Campo)', pos: 'RW', rating: 90 },
  { name: 'Santiago Aragón', pos: 'CM', rating: 88 },
  { name: 'Francisco Higuera', pos: 'LW', rating: 87 },
  { name: 'Alberto Belsué', pos: 'RB', rating: 88 },
  { name: 'Xavier Aguado', pos: 'CB', rating: 89 },
  { name: 'Fernando Cáceres', pos: 'CB', rating: 89 },
  { name: 'Jesús Solana', pos: 'LB', rating: 87 },
  { name: 'Andoni Cedrún', pos: 'GK', rating: 88 }
]));

// 5. BLACKBURN ROVERS 1995 (Campeón de la Premier League)
add(buildTeam('bla_1995', 'Blackburn Rovers', 'BLA', 'champions', '1995', 'Campeón Premier League 1995', '🏴󠁧󠁢󠁥󠁮󠁧󠁿', 'Inglaterra', 'legendary', [
  { name: 'Alan Shearer (34 Goles)', pos: 'ST', rating: 95, bonus: 1 },
  { name: 'Chris Sutton (SAS)', pos: 'ST', rating: 90 },
  { name: 'Jason Wilcox', pos: 'LW', rating: 87 },
  { name: 'Stuart Ripley', pos: 'RW', rating: 88 },
  { name: 'Tim Sherwood', pos: 'CM', rating: 89 },
  { name: 'Mark Atkins', pos: 'CM', rating: 86 },
  { name: 'Graeme Le Saux', pos: 'LB', rating: 90 },
  { name: 'Colin Hendry', pos: 'CB', rating: 90 },
  { name: 'Henning Berg', pos: 'CB', rating: 88 },
  { name: 'Paul Warhurst', pos: 'RB', rating: 86 },
  { name: 'Tim Flowers', pos: 'GK', rating: 89 }
]));

// 6. LEICESTER CITY 2021 (Campeón de la FA Cup de Wembley)
add(buildTeam('lei_2021', 'Leicester City', 'LEI', 'champions', '2021', 'Campeón FA Cup 2021', '🏴󠁧󠁢󠁥󠁮󠁧󠁿', 'Inglaterra', 'legendary', [
  { name: 'Jamie Vardy', pos: 'ST', rating: 90 },
  { name: 'Kelechi Iheanacho', pos: 'ST', rating: 87 },
  { name: 'James Maddison', pos: 'AM', rating: 89 },
  { name: 'Youri Tielemans (Golazo Wembley)', pos: 'CM', rating: 90, bonus: 1 },
  { name: 'Wilfred Ndidi', pos: 'DM', rating: 88 },
  { name: 'Marc Albrighton', pos: 'RM', rating: 85 },
  { name: 'Timothy Castagne', pos: 'LB', rating: 86 },
  { name: 'Çağlar Söyüncü', pos: 'CB', rating: 87 },
  { name: 'Wesley Fofana', pos: 'CB', rating: 87 },
  { name: 'Jonny Evans', pos: 'CB', rating: 86 },
  { name: 'Kasper Schmeichel', pos: 'GK', rating: 90 }
]));

// 7. SOUTHAMPTON 2016 (El Southampton de Van Dijk, Mané y Tadić)
add(buildTeam('sou_2016', 'Southampton FC', 'SOU', 'champions', '2016', 'Era Dorada Koeman 2016', '🏴󠁧󠁢󠁥󠁮󠁧󠁿', 'Inglaterra', 'gold', [
  { name: 'Graziano Pellè', pos: 'ST', rating: 87 },
  { name: 'Sadio Mané', pos: 'RW', rating: 90, bonus: 1 },
  { name: 'Dušan Tadić', pos: 'LW', rating: 88 },
  { name: 'Steven Davis', pos: 'CM', rating: 85 },
  { name: 'Victor Wanyama', pos: 'DM', rating: 88 },
  { name: 'Jordy Clasie', pos: 'CM', rating: 84 },
  { name: 'Ryan Bertrand', pos: 'LB', rating: 86 },
  { name: 'Virgil van Dijk', pos: 'CB', rating: 91 },
  { name: 'José Fonte', pos: 'CB', rating: 87 },
  { name: 'Cédric Soares', pos: 'RB', rating: 85 },
  { name: 'Fraser Forster', pos: 'GK', rating: 87 }
]));

// 8. UDINESE 2011 (Di Natale y Alexis Sánchez en Champions)
add(buildTeam('udi_2011', 'Udinese Calcio', 'UDI', 'champions', '2011', 'Dupla Di Natale-Alexis 2011', '🇮🇹', 'Italia', 'legendary', [
  { name: 'Antonio Di Natale (Capocannoniere)', pos: 'ST', rating: 94, bonus: 1 },
  { name: 'Alexis Sánchez (Niño Maravilla)', pos: 'ST', rating: 92 },
  { name: 'Kwadwo Asamoah', pos: 'LM', rating: 88 },
  { name: 'Gökhan Inler', pos: 'CM', rating: 89 },
  { name: 'Giampiero Pinzi', pos: 'CM', rating: 86 },
  { name: 'Mauricio Isla', pos: 'RM', rating: 88 },
  { name: 'Pablo Armero', pos: 'LB', rating: 87 },
  { name: 'Mehdi Benatia', pos: 'CB', rating: 89 },
  { name: 'Cristián Zapata', pos: 'CB', rating: 87 },
  { name: 'Maurizio Domizzi', pos: 'CB', rating: 85 },
  { name: 'Samir Handanovič', pos: 'GK', rating: 91 }
]));

// 9. ATALANTA 2020 (Goleadores Históricos de Champions)
add(buildTeam('ata_2020', 'Atalanta BC', 'ATA', 'champions', '2020', 'Cuartos Champions Lisboa 2020', '🇮🇹', 'Italia', 'legendary', [
  { name: 'Duván Zapata', pos: 'ST', rating: 90 },
  { name: 'Josip Iličić (Póker en Valencia)', pos: 'RW', rating: 92, bonus: 1 },
  { name: 'Alejandro Papu Gómez', pos: 'AM', rating: 92 },
  { name: 'Mario Pašalić', pos: 'CM', rating: 87 },
  { name: 'Remo Freuler', pos: 'CM', rating: 87 },
  { name: 'Marten de Roon', pos: 'DM', rating: 87 },
  { name: 'Robin Gosens', pos: 'LB', rating: 89 },
  { name: 'Hans Hateboer', pos: 'RB', rating: 87 },
  { name: 'Rafael Tolói', pos: 'CB', rating: 87 },
  { name: 'José Luis Palomino', pos: 'CB', rating: 86 },
  { name: 'Pierluigi Gollini', pos: 'GK', rating: 86 }
]));

// 10. MONTPELLIER 2012 (Campeón Histórico de Ligue 1 con Giroud)
add(buildTeam('mpl_2012', 'Montpellier HSC', 'MPL', 'champions', '2012', 'Campeón Histórico Ligue 1 2012', '🇫🇷', 'Francia', 'legendary', [
  { name: 'Olivier Giroud (Máximo Goleador)', pos: 'ST', rating: 91, bonus: 1 },
  { name: 'John Utaka', pos: 'RW', rating: 86 },
  { name: 'Rémy Cabella', pos: 'LW', rating: 86 },
  { name: 'Younès Belhanda', pos: 'AM', rating: 90 },
  { name: 'Benjamin Stambouli', pos: 'DM', rating: 86 },
  { name: 'Jamel Saihi', pos: 'CM', rating: 85 },
  { name: 'Henri Bedimo', pos: 'LB', rating: 87 },
  { name: 'Mapou Yanga-Mbiwa', pos: 'CB', rating: 88 },
  { name: 'Hilton', pos: 'CB', rating: 87 },
  { name: 'Garry Bocaly', pos: 'RB', rating: 85 },
  { name: 'Geoffrey Jourdren', pos: 'GK', rating: 86 }
]));

// 11. GIRONDINS BORDEAUX 2009 (Campeón de Francia de Laurent Blanc)
add(buildTeam('bor_2009', 'Girondins de Burdeos', 'BOR', 'champions', '2009', 'Campeón Ligue 1 2009', '🇫🇷', 'Francia', 'legendary', [
  { name: 'Marouane Chamakh', pos: 'ST', rating: 89 },
  { name: 'Yoann Gourcuff', pos: 'AM', rating: 93, bonus: 1 },
  { name: 'Wendel', pos: 'LM', rating: 88 },
  { name: 'Yoan Gouffran', pos: 'RM', rating: 86 },
  { name: 'Alou Diarra', pos: 'DM', rating: 89 },
  { name: 'Fernando Menegazzo', pos: 'CM', rating: 87 },
  { name: 'Benoît Trémoulinas', pos: 'LB', rating: 88 },
  { name: 'Souleymane Diawara', pos: 'CB', rating: 88 },
  { name: 'Marc Planus', pos: 'CB', rating: 87 },
  { name: 'Mathieu Chalmé', pos: 'RB', rating: 86 },
  { name: 'Ulrich Ramé', pos: 'GK', rating: 88 }
]));

// 12. SAINT-ÉTIENNE 1976 (Finalista Copa de Europa)
add(buildTeam('ste_1976', 'AS Saint-Étienne', 'ASSE', 'champions', '1976', 'Finalista Copa de Europa 1976', '🇫🇷', 'Francia', 'legendary', [
  { name: 'Hervé Revelli', pos: 'ST', rating: 91, bonus: 1 },
  { name: 'Dominique Rocheteau (L\'Ange Vert)', pos: 'RW', rating: 92 },
  { name: 'Jean-Michel Larqué', pos: 'CM', rating: 91 },
  { name: 'Christian Sarramagna', pos: 'LW', rating: 88 },
  { name: 'Dominique Bathenay', pos: 'DM', rating: 90 },
  { name: 'Jacques Santini', pos: 'CM', rating: 88 },
  { name: 'Gérard Janvion', pos: 'RB', rating: 89 },
  { name: 'Oswaldo Piazza', pos: 'CB', rating: 90 },
  { name: 'Christian Lopez', pos: 'CB', rating: 89 },
  { name: 'Gérard Farison', pos: 'LB', rating: 87 },
  { name: 'Ivan Ćurković', pos: 'GK', rating: 91 }
]));

// 13. BORUSSIA MÖNCHENGLADBACH 2015 (3º Puesto Bundesliga y Champions)
add(buildTeam('bmg_2015', 'Borussia Mönchengladbach', 'BMG', 'champions', '2015', 'Clasificación Champions 2015', '🇩🇪', 'Alemania', 'gold', [
  { name: 'Max Kruse', pos: 'ST', rating: 88 },
  { name: 'Raffael', pos: 'ST', rating: 88, bonus: 1 },
  { name: 'Patrick Herrmann', pos: 'RW', rating: 87 },
  { name: 'Thorgan Hazard', pos: 'LW', rating: 86 },
  { name: 'Granit Xhaka', pos: 'CM', rating: 88 },
  { name: 'Christoph Kramer', pos: 'DM', rating: 87 },
  { name: 'Oscar Wendt', pos: 'LB', rating: 85 },
  { name: 'Tony Jantschke', pos: 'RB', rating: 85 },
  { name: 'Martin Stranzl', pos: 'CB', rating: 87 },
  { name: 'Álvaro Domínguez', pos: 'CB', rating: 86 },
  { name: 'Yann Sommer', pos: 'GK', rating: 89 }
]));

// 14. SPORTING BRAGA 2011 (Finalista Europa League de Dublín)
add(buildTeam('bra_2011', 'SC Braga', 'SCB', 'champions', '2011', 'Finalista Europa League Dublín 2011', '🇵🇹', 'Portugal', 'legendary', [
  { name: 'Lima', pos: 'ST', rating: 88, bonus: 1 },
  { name: 'Alan Osório', pos: 'RW', rating: 88 },
  { name: 'Paulo César', pos: 'LW', rating: 85 },
  { name: 'Hugo Viana', pos: 'CM', rating: 88 },
  { name: 'Custódio', pos: 'DM', rating: 87 },
  { name: 'Vandinho', pos: 'DM', rating: 86 },
  { name: 'Sílvio', pos: 'LB', rating: 86 },
  { name: 'Alberto Rodríguez', pos: 'CB', rating: 87 },
  { name: 'Paulão', pos: 'CB', rating: 85 },
  { name: 'Miguel Garcia', pos: 'RB', rating: 85 },
  { name: 'Artur Moraes', pos: 'GK', rating: 88 }
]));

// 15. BOAVISTA 2001 (Campeón Inédito Liga de Portugal)
add(buildTeam('boa_2001', 'Boavista FC', 'BOA', 'champions', '2001', 'Campeón Inédito Liga 2001', '🇵🇹', 'Portugal', 'legendary', [
  { name: 'Elpídio Silva', pos: 'ST', rating: 89, bonus: 1 },
  { name: 'Duda', pos: 'LW', rating: 88 },
  { name: 'Martelinho', pos: 'RW', rating: 86 },
  { name: 'Erwin Sánchez (Platini de Bolivia)', pos: 'AM', rating: 91 },
  { name: 'Petit', pos: 'DM', rating: 89 },
  { name: 'Rui Bento', pos: 'CM', rating: 86 },
  { name: 'Erivan', pos: 'LB', rating: 85 },
  { name: 'Litos', pos: 'CB', rating: 88 },
  { name: 'Pedro Emanuel', pos: 'CB', rating: 87 },
  { name: 'Frechaut', pos: 'RB', rating: 86 },
  { name: 'Ricardo Pereira', pos: 'GK', rating: 89 }
]));

// 16. AZ ALKMAAR 2009 (Campeón Eredivisie de Louis van Gaal)
add(buildTeam('az_2009', 'AZ Alkmaar', 'AZ', 'champions', '2009', 'Campeón Eredivisie Van Gaal 2009', '🇳🇱', 'Países Bajos', 'legendary', [
  { name: 'Mounir El Hamdaoui (Bota de Oro Holanda)', pos: 'ST', rating: 91, bonus: 1 },
  { name: 'Mousa Dembélé', pos: 'ST', rating: 90 },
  { name: 'Maarten Martens', pos: 'LW', rating: 87 },
  { name: 'Demy de Zeeuw', pos: 'CM', rating: 89 },
  { name: 'Stijn Schaars', pos: 'DM', rating: 88 },
  { name: 'David Mendes da Silva', pos: 'DM', rating: 86 },
  { name: 'Sébastien Pocognoli', pos: 'LB', rating: 86 },
  { name: 'Niklas Moisander', pos: 'CB', rating: 87 },
  { name: 'Héctor Moreno', pos: 'CB', rating: 87 },
  { name: 'Gill Swerts', pos: 'RB', rating: 85 },
  { name: 'Sergio Romero (Chiquito)', pos: 'GK', rating: 89 }
]));

// 17. FC TWENTE 2010 (Campeón Eredivisie de Steve McClaren y Bryan Ruiz)
add(buildTeam('twe_2010', 'FC Twente', 'TWE', 'champions', '2010', 'Campeón Eredivisie 2010', '🇳🇱', 'Países Bajos', 'legendary', [
  { name: 'Blaise Nkufo', pos: 'ST', rating: 89 },
  { name: 'Bryan Ruiz (La Comadreja)', pos: 'RW', rating: 92, bonus: 1 },
  { name: 'Miroslav Stoch', pos: 'LW', rating: 87 },
  { name: 'Theo Janssen', pos: 'CM', rating: 89 },
  { name: 'Wout Brama', pos: 'DM', rating: 87 },
  { name: 'Kenneth Perez', pos: 'AM', rating: 87 },
  { name: 'Dwight Tiendalli', pos: 'LB', rating: 85 },
  { name: 'Douglas Franco', pos: 'CB', rating: 89 },
  { name: 'Peter Wisgerhof', pos: 'CB', rating: 86 },
  { name: 'Ronnie Stam', pos: 'RB', rating: 86 },
  { name: 'Sander Boschker', pos: 'GK', rating: 88 }
]));
