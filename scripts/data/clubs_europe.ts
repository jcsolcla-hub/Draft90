import { buildTeam, Team } from '../teamBuilderHelper';

export const EUROPE_CLUBS: Team[] = [];

function add(t: Team) {
  EUROPE_CLUBS.push(t);
}

// 1. VALENCIA CF (2000, 2001, 2004)
[
  { y: '2000', tag: 'Final Champions 2000', s: [
    { name: 'Gaizka Mendieta', pos: 'CM', rating: 92, bonus: 1 },
    { name: 'Claudio López (Piojo)', pos: 'ST', rating: 91, nation: 'Argentina', flag: '🇦🇷' },
    { name: 'Kily González', pos: 'LW', rating: 89, nation: 'Argentina', flag: '🇦🇷' },
    { name: 'Miguel Ángel Angulo', pos: 'RW', rating: 87 },
    { name: 'Gerard López', pos: 'CM', rating: 88 },
    { name: 'Javier Farinós', pos: 'DM', rating: 88 },
    { name: 'Jocelyn Angloma', pos: 'RB', rating: 89, nation: 'Francia', flag: '🇫🇷' },
    { name: 'Miroslav Đukić', pos: 'CB', rating: 89, nation: 'Serbia', flag: '🇷🇸' },
    { name: 'Mauricio Pellegrino', pos: 'CB', rating: 88, nation: 'Argentina', flag: '🇦🇷' },
    { name: 'Amedeo Carboni', pos: 'LB', rating: 88, nation: 'Italia', flag: '🇮🇹' },
    { name: 'Santiago Cañizares', pos: 'GK', rating: 92 }
  ]},
  { y: '2001', tag: 'Final Champions 2001', s: [
    { name: 'Gaizka Mendieta', pos: 'CM', rating: 93, bonus: 1 },
    { name: 'John Carew', pos: 'ST', rating: 88, nation: 'Noruega', flag: '🇳🇴' },
    { name: 'Pablo Aimar', pos: 'AM', rating: 92, nation: 'Argentina', flag: '🇦🇷' },
    { name: 'Kily González', pos: 'LW', rating: 89, nation: 'Argentina', flag: '🇦🇷' },
    { name: 'Rubén Baraja', pos: 'DM', rating: 90 },
    { name: 'David Albelda', pos: 'DM', rating: 89 },
    { name: 'Jocelyn Angloma', pos: 'RB', rating: 88, nation: 'Francia', flag: '🇫🇷' },
    { name: 'Roberto Ayala', pos: 'CB', rating: 93, nation: 'Argentina', flag: '🇦🇷' },
    { name: 'Mauricio Pellegrino', pos: 'CB', rating: 88, nation: 'Argentina', flag: '🇦🇷' },
    { name: 'Amedeo Carboni', pos: 'LB', rating: 88, nation: 'Italia', flag: '🇮🇹' },
    { name: 'Santiago Cañizares', pos: 'GK', rating: 93 }
  ]},
  { y: '2004', tag: 'Doblete Liga y UEFA 2004', s: [
    { name: 'Roberto Ayala', pos: 'CB', rating: 94, nation: 'Argentina', flag: '🇦🇷', bonus: 1 },
    { name: 'Pablo Aimar', pos: 'AM', rating: 92, nation: 'Argentina', flag: '🇦🇷' },
    { name: 'Rubén Baraja', pos: 'CM', rating: 91 },
    { name: 'David Albelda', pos: 'DM', rating: 90 },
    { name: 'Vicente Rodríguez', pos: 'LW', rating: 91 },
    { name: 'Mista', pos: 'ST', rating: 88 },
    { name: 'Curro Torres', pos: 'RB', rating: 87 },
    { name: 'Carlos Marchena', pos: 'CB', rating: 89 },
    { name: 'Amedeo Carboni', pos: 'LB', rating: 88, nation: 'Italia', flag: '🇮🇹' },
    { name: 'Francisco Rufete', pos: 'RW', rating: 87 },
    { name: 'Santiago Cañizares', pos: 'GK', rating: 92 }
  ]}
].forEach(i => add(buildTeam(`val_${i.y}`, 'Valencia CF', 'VAL', 'champions', i.y, i.tag, '🇪🇸', 'España', 'legendary', i.s)));

// 2. FC PORTO (1987, 2003, 2004, 2011)
[
  { y: '1987', tag: 'Copa de Europa 1987', s: [
    { name: 'Rabah Madjer', pos: 'ST', rating: 93, nation: 'Argelia', flag: '🇩🇿', bonus: 1 },
    { name: 'Paulo Futre', pos: 'LW', rating: 94 },
    { name: 'Fernando Gomes', pos: 'ST', rating: 91 },
    { name: 'António André', pos: 'DM', rating: 89 },
    { name: 'Jaime Magalhães', pos: 'RW', rating: 88 },
    { name: 'António Sousa', pos: 'CM', rating: 88 },
    { name: 'João Pinto', pos: 'RB', rating: 90 },
    { name: 'Celso', pos: 'CB', rating: 88, nation: 'Brasil', flag: '🇧🇷' },
    { name: 'Eduardo Luís', pos: 'CB', rating: 87 },
    { name: 'Augusto Inácio', pos: 'LB', rating: 87 },
    { name: 'Józef Młynarczyk', pos: 'GK', rating: 90, nation: 'Polonia', flag: '🇵🇱' }
  ]},
  { y: '2003', tag: 'Copa UEFA 2003', s: [
    { name: 'Deco', pos: 'AM', rating: 94, bonus: 1 },
    { name: 'Derlei', pos: 'ST', rating: 90, nation: 'Brasil', flag: '🇧🇷' },
    { name: 'Capucho', pos: 'RW', rating: 87 },
    { name: 'Maniche', pos: 'CM', rating: 90 },
    { name: 'Costinha', pos: 'DM', rating: 90 },
    { name: 'Dmitri Alenichev', pos: 'AM', rating: 87, nation: 'Rusia', flag: '🇷🇺' },
    { name: 'Paulo Ferreira', pos: 'RB', rating: 89 },
    { name: 'Jorge Costa', pos: 'CB', rating: 89 },
    { name: 'Ricardo Carvalho', pos: 'CB', rating: 92 },
    { name: 'Nuno Valente', pos: 'LB', rating: 88 },
    { name: 'Vítor Baía', pos: 'GK', rating: 91 }
  ]},
  { y: '2004', tag: 'Champions League 2004', s: [
    { name: 'Deco', pos: 'AM', rating: 96, bonus: 1 },
    { name: 'Ricardo Carvalho', pos: 'CB', rating: 94 },
    { name: 'Derlei', pos: 'ST', rating: 89, nation: 'Brasil', flag: '🇧🇷' },
    { name: 'Carlos Alberto', pos: 'AM', rating: 88, nation: 'Brasil', flag: '🇧🇷' },
    { name: 'Maniche', pos: 'CM', rating: 91 },
    { name: 'Costinha', pos: 'DM', rating: 90 },
    { name: 'Pedro Mendes', pos: 'CM', rating: 87 },
    { name: 'Paulo Ferreira', pos: 'RB', rating: 90 },
    { name: 'Jorge Costa', pos: 'CB', rating: 89 },
    { name: 'Nuno Valente', pos: 'LB', rating: 89 },
    { name: 'Vítor Baía', pos: 'GK', rating: 92 }
  ]},
  { y: '2011', tag: 'Europa League 2011', s: [
    { name: 'Radamel Falcao', pos: 'ST', rating: 95, nation: 'Colombia', flag: '🇨🇴', bonus: 1 },
    { name: 'Hulk', pos: 'RW', rating: 93, nation: 'Brasil', flag: '🇧🇷' },
    { name: 'Silvestre Varela', pos: 'LW', rating: 86 },
    { name: 'João Moutinho', pos: 'CM', rating: 90 },
    { name: 'Fernando', pos: 'DM', rating: 89, nation: 'Brasil', flag: '🇧🇷' },
    { name: 'Fredy Guarín', pos: 'CM', rating: 88, nation: 'Colombia', flag: '🇨🇴' },
    { name: 'Cristian Săpunaru', pos: 'RB', rating: 86, nation: 'Rumania', flag: '🇷🇴' },
    { name: 'Rolando', pos: 'CB', rating: 87 },
    { name: 'Nicolás Otamendi', pos: 'CB', rating: 89, nation: 'Argentina', flag: '🇦🇷' },
    { name: 'Álvaro Pereira', pos: 'LB', rating: 87, nation: 'Uruguay', flag: '🇺🇾' },
    { name: 'Helton', pos: 'GK', rating: 89, nation: 'Brasil', flag: '🇧🇷' }
  ]}
].forEach(i => add(buildTeam(`por_${i.y}`, 'FC Porto', 'FCP', 'champions', i.y, i.tag, '🇵🇹', 'Portugal', 'legendary', i.s)));

// 3. SL BENFICA (1961, 1962, 1990)
[
  { y: '1961', tag: 'Copa de Europa 1961', s: [
    { name: 'José Águas', pos: 'ST', rating: 93, bonus: 1 },
    { name: 'Eusébio', pos: 'ST', rating: 96 },
    { name: 'Mário Coluna', pos: 'CM', rating: 94 },
    { name: 'José Augusto', pos: 'RW', rating: 90 },
    { name: 'Santana', pos: 'AM', rating: 88 },
    { name: 'Fernando Cruz', pos: 'LB', rating: 88 },
    { name: 'Mário João', pos: 'RB', rating: 87 },
    { name: 'Germano', pos: 'CB', rating: 91 },
    { name: 'Ângelo Martins', pos: 'LB', rating: 88 },
    { name: 'Cavém', pos: 'LW', rating: 89 },
    { name: 'Costa Pereira', pos: 'GK', rating: 91 }
  ]},
  { y: '1962', tag: 'Bicampeón de Europa 1962', s: [
    { name: 'Eusébio', pos: 'ST', rating: 98, bonus: 1 },
    { name: 'José Águas', pos: 'ST', rating: 93 },
    { name: 'Mário Coluna', pos: 'CM', rating: 95 },
    { name: 'José Augusto', pos: 'RW', rating: 91 },
    { name: 'Simões', pos: 'LW', rating: 90 },
    { name: 'Cavém', pos: 'DM', rating: 90 },
    { name: 'Mário João', pos: 'RB', rating: 87 },
    { name: 'Germano', pos: 'CB', rating: 92 },
    { name: 'Fernando Cruz', pos: 'CB', rating: 88 },
    { name: 'Ângelo Martins', pos: 'LB', rating: 88 },
    { name: 'Costa Pereira', pos: 'GK', rating: 92 }
  ]},
  { y: '1990', tag: 'Final Champions 1990', s: [
    { name: 'Vítor Paneira', pos: 'RW', rating: 89, bonus: 1 },
    { name: 'Magnusson', pos: 'ST', rating: 89, nation: 'Suecia', flag: '🇸🇪' },
    { name: 'Valdo', pos: 'AM', rating: 90, nation: 'Brasil', flag: '🇧🇷' },
    { name: 'António Pacheco', pos: 'LW', rating: 87 },
    { name: 'Hernâni', pos: 'CM', rating: 87 },
    { name: 'Jonas Thern', pos: 'DM', rating: 88, nation: 'Suecia', flag: '🇸🇪' },
    { name: 'José Carlos', pos: 'RB', rating: 86 },
    { name: 'Aldair', pos: 'CB', rating: 92, nation: 'Brasil', flag: '🇧🇷' },
    { name: 'Ricardo Gomes', pos: 'CB', rating: 90, nation: 'Brasil', flag: '🇧🇷' },
    { name: 'Samuel', pos: 'LB', rating: 86 },
    { name: 'Silvino Louro', pos: 'GK', rating: 88 }
  ]}
].forEach(i => add(buildTeam(`ben_${i.y}`, 'SL Benfica', 'BEN', 'champions', i.y, i.tag, '🇵🇹', 'Portugal', 'legendary', i.s)));

// 4. SPORTING CP (1964, 2002, 2021)
[
  { y: '1964', tag: 'Recopa de Europa 1964', s: [
    { name: 'Fernando Mendes', pos: 'DM', rating: 90, bonus: 1 },
    { name: 'Domingos Mascarenhas', pos: 'ST', rating: 91 },
    { name: 'Ernesto Figueiredo', pos: 'ST', rating: 89 },
    { name: 'Osvaldo Silva', pos: 'AM', rating: 88, nation: 'Brasil', flag: '🇧🇷' },
    { name: 'Géo', pos: 'CM', rating: 88, nation: 'Brasil', flag: '🇧🇷' },
    { name: 'Hilário', pos: 'LB', rating: 90 },
    { name: 'Pedro Gomes', pos: 'RB', rating: 87 },
    { name: 'Alexandre Baptista', pos: 'CB', rating: 88 },
    { name: 'José Carlos', pos: 'CB', rating: 88 },
    { name: 'Morais', pos: 'RW', rating: 86 },
    { name: 'Joaquim Carvalho', pos: 'GK', rating: 88 }
  ]},
  { y: '2002', tag: 'Doblete y Debut CR7 2002', s: [
    { name: 'Mário Jardel', pos: 'ST', rating: 94, nation: 'Brasil', flag: '🇧🇷', bonus: 1 },
    { name: 'João Pinto', pos: 'AM', rating: 91 },
    { name: 'Cristiano Ronaldo', pos: 'LW', rating: 86 },
    { name: 'Ricardo Quaresma', pos: 'RW', rating: 88 },
    { name: 'Hugo Viana', pos: 'CM', rating: 88 },
    { name: 'Paulo Bento', pos: 'DM', rating: 89 },
    { name: 'Beto', pos: 'CB', rating: 88 },
    { name: 'André Cruz', pos: 'CB', rating: 88, nation: 'Brasil', flag: '🇧🇷' },
    { name: 'Facundo Quiroga', pos: 'CB', rating: 86, nation: 'Argentina', flag: '🇦🇷' },
    { name: 'Rui Jorge', pos: 'LB', rating: 88 },
    { name: 'Nélson', pos: 'GK', rating: 86 }
  ]},
  { y: '2021', tag: 'Campeón Primeira Liga 2021', s: [
    { name: 'Pedro Gonçalves (Pote)', pos: 'AM', rating: 90, bonus: 1 },
    { name: 'Sebastián Coates', pos: 'CB', rating: 90, nation: 'Uruguay', flag: '🇺🇾' },
    { name: 'Nuno Mendes', pos: 'LB', rating: 89 },
    { name: 'Pedro Porro', pos: 'RB', rating: 88, nation: 'España', flag: '🇪🇸' },
    { name: 'João Palhinha', pos: 'DM', rating: 89 },
    { name: 'João Mário', pos: 'CM', rating: 87 },
    { name: 'Nuno Santos', pos: 'LW', rating: 86 },
    { name: 'Tiago Tomás', pos: 'ST', rating: 84 },
    { name: 'Gonçalo Inácio', pos: 'CB', rating: 86 },
    { name: 'Zouhair Feddal', pos: 'CB', rating: 85, nation: 'Marruecos', flag: '🇲🇦' },
    { name: 'Antonio Adán', pos: 'GK', rating: 88, nation: 'España', flag: '🇪🇸' }
  ]}
].forEach(i => add(buildTeam(`spo_${i.y}`, 'Sporting CP', 'SCP', 'champions', i.y, i.tag, '🇵🇹', 'Portugal', 'gold', i.s)));

// 5. PSV EINDHOVEN (1988, 2005)
[
  { y: '1988', tag: 'Triplete Copa de Europa 1988', s: [
    { name: 'Ronald Koeman', pos: 'CB', rating: 95, bonus: 1 },
    { name: 'Wim Kieft', pos: 'ST', rating: 90 },
    { name: 'Gerald Vanenburg', pos: 'AM', rating: 92 },
    { name: 'Søren Lerby', pos: 'CM', rating: 91, nation: 'Dinamarca', flag: '🇩🇰' },
    { name: 'Berry van Aerle', pos: 'RB', rating: 88 },
    { name: 'Edward Linskens', pos: 'DM', rating: 87 },
    { name: 'Hans van Breukelen', pos: 'GK', rating: 92 },
    { name: 'Ivan Nielsen', pos: 'CB', rating: 88, nation: 'Dinamarca', flag: '🇩🇰' },
    { name: 'Adick Koot', pos: 'CB', rating: 86 },
    { name: 'Jan Heintze', pos: 'LB', rating: 88, nation: 'Dinamarca', flag: '🇩🇰' },
    { name: 'Hans Gillhaus', pos: 'LW', rating: 86 }
  ]},
  { y: '2005', tag: 'Semifinales Champions 2005', s: [
    { name: 'Mark van Bommel', pos: 'CM', rating: 92, bonus: 1 },
    { name: 'Park Ji-sung', pos: 'RW', rating: 90, nation: 'Corea del Sur', flag: '🇰🇷' },
    { name: 'Jefferson Farfán', pos: 'LW', rating: 89, nation: 'Perú', flag: '🇵🇪' },
    { name: 'Jan Vennegoor of Hesselink', pos: 'ST', rating: 87 },
    { name: 'Johann Vogel', pos: 'DM', rating: 88, nation: 'Suiza', flag: '🇨🇭' },
    { name: 'Phillip Cocu', pos: 'CM', rating: 91 },
    { name: 'André Ooijer', pos: 'RB', rating: 88 },
    { name: 'Alex (El Tanque)', pos: 'CB', rating: 91, nation: 'Brasil', flag: '🇧🇷' },
    { name: 'Wilfred Bouma', pos: 'CB', rating: 88 },
    { name: 'Young-Pyo Lee', pos: 'LB', rating: 87, nation: 'Corea del Sur', flag: '🇰🇷' },
    { name: 'Heurelho Gomes', pos: 'GK', rating: 90, nation: 'Brasil', flag: '🇧🇷' }
  ]}
].forEach(i => add(buildTeam(`psv_${i.y}`, 'PSV Eindhoven', 'PSV', 'champions', i.y, i.tag, '🇳🇱', 'Países Bajos', 'legendary', i.s)));

// 6. FEYENOORD (1970, 2002)
[
  { y: '1970', tag: 'Copa de Europa 1970', s: [
    { name: 'Wim van Hanegem', pos: 'CM', rating: 94, bonus: 1 },
    { name: 'Ove Kindvall', pos: 'ST', rating: 92, nation: 'Suecia', flag: '🇸🇪' },
    { name: 'Coen Moulijn', pos: 'LW', rating: 92 },
    { name: 'Henk Wery', pos: 'RW', rating: 88 },
    { name: 'Wim Jansen', pos: 'DM', rating: 91 },
    { name: 'Franz Hasil', pos: 'AM', rating: 88, nation: 'Austria', flag: '🇦🇹' },
    { name: 'Piet Romeijn', pos: 'RB', rating: 87 },
    { name: 'Rinus Israël', pos: 'CB', rating: 91 },
    { name: 'Theo Laseroms', pos: 'CB', rating: 88 },
    { name: 'Theo van Duivenbode', pos: 'LB', rating: 87 },
    { name: 'Eddy Pieters Graafland', pos: 'GK', rating: 90 }
  ]},
  { y: '2002', tag: 'Copa UEFA 2002', s: [
    { name: 'Pierre van Hooijdonk', pos: 'ST', rating: 92, bonus: 1 },
    { name: 'Robin van Persie', pos: 'LW', rating: 87 },
    { name: 'Jon Dahl Tomasson', pos: 'ST', rating: 90, nation: 'Dinamarca', flag: '🇩🇰' },
    { name: 'Bonaventure Kalou', pos: 'RW', rating: 88, nation: 'Costa de Marfil', flag: '🇨🇮' },
    { name: 'Shinji Ono', pos: 'AM', rating: 90, nation: 'Japón', flag: '🇯🇵' },
    { name: 'Paul Bosvelt', pos: 'DM', rating: 89 },
    { name: 'Christian Gyan', pos: 'RB', rating: 85, nation: 'Ghana', flag: '🇬🇭' },
    { name: 'Kees van Wonderen', pos: 'CB', rating: 87 },
    { name: 'Patrick Paauwe', pos: 'CB', rating: 87 },
    { name: 'Tomasz Rząsa', pos: 'LB', rating: 86, nation: 'Polonia', flag: '🇵🇱' },
    { name: 'Edwin Zoetebier', pos: 'GK', rating: 87 }
  ]}
].forEach(i => add(buildTeam(`fey_${i.y}`, 'Feyenoord', 'FEY', 'champions', i.y, i.tag, '🇳🇱', 'Países Bajos', 'gold', i.s)));

// 7. CELTIC FC (1967, 2003)
[
  { y: '1967', tag: 'Lisbon Lions 1967', s: [
    { name: 'Jimmy Johnstone (Jinky)', pos: 'RW', rating: 95, bonus: 1 },
    { name: 'Bobby Lennox', pos: 'LW', rating: 91 },
    { name: 'Stevie Chalmers', pos: 'ST', rating: 90 },
    { name: 'William Wallace', pos: 'ST', rating: 89 },
    { name: 'Bobby Murdoch', pos: 'CM', rating: 92 },
    { name: 'Bertie Auld', pos: 'CM', rating: 90 },
    { name: 'Jim Craig', pos: 'RB', rating: 88 },
    { name: 'Billy McNeill', pos: 'CB', rating: 93 },
    { name: 'John Clark', pos: 'CB', rating: 88 },
    { name: 'Tommy Gemmell', pos: 'LB', rating: 91 },
    { name: 'Ronnie Simpson', pos: 'GK', rating: 90 }
  ]},
  { y: '2003', tag: 'Final Copa UEFA Sevilla 2003', s: [
    { name: 'Henrik Larsson', pos: 'ST', rating: 95, nation: 'Suecia', flag: '🇸🇪', bonus: 1 },
    { name: 'Chris Sutton', pos: 'ST', rating: 89, nation: 'Inglaterra', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
    { name: 'Stiliyan Petrov', pos: 'CM', rating: 89, nation: 'Bulgaria', flag: '🇧🇬' },
    { name: 'Neil Lennon', pos: 'DM', rating: 89, nation: 'Irlanda del Norte', flag: '🇬🇧' },
    { name: 'Paul Lambert', pos: 'CM', rating: 89 },
    { name: 'Alan Thompson', pos: 'LW', rating: 87, nation: 'Inglaterra', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
    { name: 'Didier Agathe', pos: 'RW', rating: 87, nation: 'Francia', flag: '🇫🇷' },
    { name: 'Bobo Balde', pos: 'CB', rating: 88, nation: 'Guinea', flag: '🇬🇳' },
    { name: 'Joos Valgaeren', pos: 'CB', rating: 87, nation: 'Bélgica', flag: '🇧🇪' },
    { name: 'Johan Mjällby', pos: 'CB', rating: 88, nation: 'Suecia', flag: '🇸🇪' },
    { name: 'Robert Douglas', pos: 'GK', rating: 86 }
  ]}
].forEach(i => add(buildTeam(`cel_${i.y}`, 'Celtic FC', 'CEL', 'champions', i.y, i.tag, '🏴󠁧󠁢󠁳󠁣󠁴󠁿', 'Escocia', 'legendary', i.s)));

// 8. RANGERS FC (1972, 2008, 2022)
[
  { y: '1972', tag: 'Recopa de Europa 1972', s: [
    { name: 'Colin Stein', pos: 'ST', rating: 90, bonus: 1 },
    { name: 'Willie Johnston', pos: 'LW', rating: 90 },
    { name: 'Dave Smith', pos: 'CB', rating: 89 },
    { name: 'John Greig', pos: 'CB', rating: 92 },
    { name: 'Alex MacDonald', pos: 'CM', rating: 88 },
    { name: 'Alfons Conn', pos: 'CM', rating: 87 },
    { name: 'Tommy McLean', pos: 'RW', rating: 88 },
    { name: 'Sandy Jardine', pos: 'RB', rating: 90 },
    { name: 'Derek Johnstone', pos: 'CB', rating: 88 },
    { name: 'Willie Mathieson', pos: 'LB', rating: 87 },
    { name: 'Peter McCloy', pos: 'GK', rating: 88 }
  ]},
  { y: '2008', tag: 'Final Copa UEFA 2008', s: [
    { name: 'Barry Ferguson', pos: 'CM', rating: 89, bonus: 1 },
    { name: 'Jean-Claude Darcheville', pos: 'ST', rating: 86, nation: 'Francia', flag: '🇫🇷' },
    { name: 'Steven Davis', pos: 'CM', rating: 87, nation: 'Irlanda del Norte', flag: '🇬🇧' },
    { name: 'Kevin Thomson', pos: 'DM', rating: 86 },
    { name: 'Brahim Hemdani', pos: 'DM', rating: 86, nation: 'Argelia', flag: '🇩🇿' },
    { name: 'Steven Whittaker', pos: 'LW', rating: 85 },
    { name: 'Kirk Broadfoot', pos: 'RB', rating: 84 },
    { name: 'Carlos Cuéllar', pos: 'CB', rating: 89, nation: 'España', flag: '🇪🇸' },
    { name: 'David Weir', pos: 'CB', rating: 88 },
    { name: 'Saša Papac', pos: 'LB', rating: 86, nation: 'Bosnia y Herzegovina', flag: '🇧🇦' },
    { name: 'Neil Alexander', pos: 'GK', rating: 86 }
  ]},
  { y: '2022', tag: 'Final Europa League Sevilla 2022', s: [
    { name: 'James Tavernier', pos: 'RB', rating: 90, nation: 'Inglaterra', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', bonus: 1 },
    { name: 'Ryan Kent', pos: 'LW', rating: 87, nation: 'Inglaterra', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
    { name: 'Joe Aribo', pos: 'ST', rating: 87, nation: 'Nigeria', flag: '🇳🇬' },
    { name: 'Glen Kamara', pos: 'CM', rating: 86, nation: 'Finlandia', flag: '🇫🇮' },
    { name: 'John Lundstram', pos: 'DM', rating: 87, nation: 'Inglaterra', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
    { name: 'Ryan Jack', pos: 'CM', rating: 85 },
    { name: 'Scott Wright', pos: 'RW', rating: 84 },
    { name: 'Connor Goldson', pos: 'CB', rating: 87, nation: 'Inglaterra', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
    { name: 'Calvin Bassey', pos: 'CB', rating: 88, nation: 'Nigeria', flag: '🇳🇬' },
    { name: 'Borna Barišić', pos: 'LB', rating: 86, nation: 'Croacia', flag: '🇭🇷' },
    { name: 'Allan McGregor', pos: 'GK', rating: 88 }
  ]}
].forEach(i => add(buildTeam(`ran_${i.y}`, 'Rangers FC', 'RAN', 'champions', i.y, i.tag, '🏴󠁧󠁢󠁳󠁣󠁴󠁿', 'Escocia', 'gold', i.s)));

// 9. GALATASARAY (2000)
add(buildTeam('gal_2000', 'Galatasaray', 'GAL', 'champions', '2000', 'Copa UEFA 2000', '🇹🇷', 'Turquía', 'legendary', [
  { name: 'Gheorghe Hagi', pos: 'AM', rating: 95, nation: 'Rumania', flag: '🇷🇴', bonus: 1 },
  { name: 'Hakan Şükür', pos: 'ST', rating: 92 },
  { name: 'Gheorghe Popescu', pos: 'CB', rating: 92, nation: 'Rumania', flag: '🇷🇴' },
  { name: 'Cláudio Taffarel', pos: 'GK', rating: 93, nation: 'Brasil', flag: '🇧🇷' },
  { name: 'Arif Erdem', pos: 'RW', rating: 88 },
  { name: 'Okan Buruk', pos: 'CM', rating: 88 },
  { name: 'Emre Belözoğlu', pos: 'CM', rating: 88 },
  { name: 'Suat Kaya', pos: 'DM', rating: 87 },
  { name: 'Capone', pos: 'RB', rating: 87, nation: 'Brasil', flag: '🇧🇷' },
  { name: 'Bülent Korkmaz', pos: 'CB', rating: 90 },
  { name: 'Ergün Penbe', pos: 'LB', rating: 87 }
]));

// 10. FENERBAHÇE (2008)
add(buildTeam('fen_2008', 'Fenerbahçe', 'FEN', 'champions', '2008', 'Cuartos Champions 2008', '🇹🇷', 'Turquía', 'gold', [
  { name: 'Alex de Souza', pos: 'AM', rating: 93, nation: 'Brasil', flag: '🇧🇷', bonus: 1 },
  { name: 'Roberto Carlos', pos: 'LB', rating: 92, nation: 'Brasil', flag: '🇧🇷' },
  { name: 'Deivid', pos: 'RW', rating: 88, nation: 'Brasil', flag: '🇧🇷' },
  { name: 'Mateja Kežman', pos: 'ST', rating: 88, nation: 'Serbia', flag: '🇷🇸' },
  { name: 'Aurélio', pos: 'DM', rating: 88 },
  { name: 'Uğur Boral', pos: 'LW', rating: 86 },
  { name: 'Claudio Maldonado', pos: 'CM', rating: 86, nation: 'Chile', flag: '🇨🇱' },
  { name: 'Gökhan Gönül', pos: 'RB', rating: 87 },
  { name: 'Diego Lugano', pos: 'CB', rating: 90, nation: 'Uruguay', flag: '🇺🇾' },
  { name: 'Edu Dracena', pos: 'CB', rating: 88, nation: 'Brasil', flag: '🇧🇷' },
  { name: 'Volkan Demirel', pos: 'GK', rating: 89 }
]));

// 11. BEŞIKTAŞ (2017)
add(buildTeam('bjk_2017', 'Beşiktaş', 'BJK', 'champions', '2017', 'Invictos Fase Champions 2017', '🇹🇷', 'Turquía', 'gold', [
  { name: 'Ricardo Quaresma', pos: 'RW', rating: 90, nation: 'Portugal', flag: '🇵🇹', bonus: 1 },
  { name: 'Pepe', pos: 'CB', rating: 91, nation: 'Portugal', flag: '🇵🇹' },
  { name: 'Anderson Talisca', pos: 'AM', rating: 90, nation: 'Brasil', flag: '🇧🇷' },
  { name: 'Cenk Tosun', pos: 'ST', rating: 88 },
  { name: 'Ryan Babel', pos: 'LW', rating: 87, nation: 'Países Bajos', flag: '🇳🇱' },
  { name: 'Atiba Hutchinson', pos: 'DM', rating: 87, nation: 'Canadá', flag: '🇨🇦' },
  { name: 'Oğuzhan Özyakup', pos: 'CM', rating: 86 },
  { name: 'Gökhan Gönül', pos: 'RB', rating: 86 },
  { name: 'Duško Tošić', pos: 'CB', rating: 85, nation: 'Serbia', flag: '🇷🇸' },
  { name: 'Adriano', pos: 'LB', rating: 88, nation: 'Brasil', flag: '🇧🇷' },
  { name: 'Fabri', pos: 'GK', rating: 86, nation: 'España', flag: '🇪🇸' }
]));

// 12. OLYMPIACOS (1999, 2014)
[
  { y: '1999', tag: 'Cuartos Champions 1999', s: [
    { name: 'Predrag Đorđević', pos: 'LW', rating: 90, nation: 'Serbia', flag: '🇷🇸', bonus: 1 },
    { name: 'Siniša Gogić', pos: 'ST', rating: 87, nation: 'Chipre', flag: '🇨🇾' },
    { name: 'Alexandros Alexandris', pos: 'ST', rating: 88 },
    { name: 'Stelios Giannakopoulos', pos: 'RW', rating: 89 },
    { name: 'Ilias Poursanidis', pos: 'DM', rating: 86 },
    { name: 'Vasilios Karapialas', pos: 'AM', rating: 88 },
    { name: 'Dimitris Mavrogenidis', pos: 'RB', rating: 86 },
    { name: 'Georgios Anatolakis', pos: 'CB', rating: 87 },
    { name: 'Petros Marinakis', pos: 'CB', rating: 85 },
    { name: 'Grigorios Georgatos', pos: 'LB', rating: 89 },
    { name: 'Dimitrios Eleftheropoulos', pos: 'GK', rating: 88 }
  ]},
  { y: '2014', tag: 'Octavos Champions 2014', s: [
    { name: 'Kostas Mitroglou', pos: 'ST', rating: 88, bonus: 1 },
    { name: 'Alejandro Domínguez (Chori)', pos: 'AM', rating: 89, nation: 'Argentina', flag: '🇦🇷' },
    { name: 'Joel Campbell', pos: 'RW', rating: 87, nation: 'Costa Rica', flag: '🇨🇷' },
    { name: 'Hernán Pérez', pos: 'LW', rating: 85, nation: 'Paraguay', flag: '🇵🇾' },
    { name: 'Giannis Maniatis', pos: 'DM', rating: 86 },
    { name: 'Delvin N\'Dinga', pos: 'DM', rating: 85, nation: 'Congo', flag: '🇨🇬' },
    { name: 'Leandro Salino', pos: 'RB', rating: 85, nation: 'Brasil', flag: '🇧🇷' },
    { name: 'Kostas Manolas', pos: 'CB', rating: 90 },
    { name: 'Iván Marcano', pos: 'CB', rating: 86, nation: 'España', flag: '🇪🇸' },
    { name: 'José Holebas', pos: 'LB', rating: 86 },
    { name: 'Roberto Jiménez', pos: 'GK', rating: 88, nation: 'España', flag: '🇪🇸' }
  ]}
].forEach(i => add(buildTeam(`oly_${i.y}`, 'Olympiacos', 'OLY', 'champions', i.y, i.tag, '🇬🇷', 'Grecia', 'gold', i.s)));

// 13. PANATHINAIKOS (1971, 1996)
[
  { y: '1971', tag: 'Final Copa de Europa Wembley 1971', s: [
    { name: 'Antonis Antoniadis', pos: 'ST', rating: 93, bonus: 1 },
    { name: 'Mimis Domazos', pos: 'AM', rating: 94 },
    { name: 'Charis Grammos', pos: 'RW', rating: 88 },
    { name: 'Totis Filakouris', pos: 'LW', rating: 87 },
    { name: 'Kostas Eleftherakis', pos: 'CM', rating: 90 },
    { name: 'Aristidis Kamaras', pos: 'DM', rating: 89 },
    { name: 'Giannis Tomaras', pos: 'RB', rating: 87 },
    { name: 'Frangiskos Sourpis', pos: 'CB', rating: 88 },
    { name: 'Anthimos Kapsis', pos: 'CB', rating: 89 },
    { name: 'Giorgos Vlachos', pos: 'LB', rating: 86 },
    { name: 'Takis Ikonomopoulos', pos: 'GK', rating: 90 }
  ]},
  { y: '1996', tag: 'Semifinales Champions 1996', s: [
    { name: 'Krzysztof Warzycha', pos: 'ST', rating: 92, nation: 'Polonia', flag: '🇵🇱', bonus: 1 },
    { name: 'Giorgos Donis', pos: 'RW', rating: 88 },
    { name: 'Juan José Borrelli', pos: 'AM', rating: 89, nation: 'Argentina', flag: '🇦🇷' },
    { name: 'Giorgos Georgiadis', pos: 'LW', rating: 88 },
    { name: 'Spyros Marangos', pos: 'CM', rating: 87 },
    { name: 'Stratos Apostolakis', pos: 'RB', rating: 89 },
    { name: 'Giannis Kalitzakis', pos: 'CB', rating: 89 },
    { name: 'Marinos Ouzounidis', pos: 'CB', rating: 88 },
    { name: 'Thanasis Kolitsidakis', pos: 'CB', rating: 86 },
    { name: 'Georgios Kapouranis', pos: 'LB', rating: 86 },
    { name: 'Józef Wandzik', pos: 'GK', rating: 90, nation: 'Polonia', flag: '🇵🇱' }
  ]}
].forEach(i => add(buildTeam(`pan_${i.y}`, 'Panathinaikos', 'PAO', 'champions', i.y, i.tag, '🇬🇷', 'Grecia', 'gold', i.s)));

// 14. ESTRELLA ROJA (1991)
add(buildTeam('czv_1991', 'Estrella Roja de Belgrado', 'CZV', 'champions', '1991', 'Campeón Copa de Europa 1991', '🇷🇸', 'Serbia', 'legendary', [
  { name: 'Dejan Savićević', pos: 'AM', sec: ['ST'], rating: 96, bonus: 1 },
  { name: 'Robert Prosinečki', pos: 'CM', rating: 95, nation: 'Croacia', flag: '🇭🇷' },
  { name: 'Darko Pančev', pos: 'ST', rating: 94, nation: 'Macedonia del Norte', flag: '🇲🇰' },
  { name: 'Siniša Mihajlović', pos: 'CB', sec: ['LB'], rating: 93 },
  { name: 'Vladimir Jugović', pos: 'CM', rating: 91 },
  { name: 'Dragiša Binić', pos: 'RW', rating: 89 },
  { name: 'Miodrag Belodedici', pos: 'CB', rating: 93, nation: 'Rumania', flag: '🇷🇴' },
  { name: 'Ilija Najdoski', pos: 'CB', rating: 89, nation: 'Macedonia del Norte', flag: '🇲🇰' },
  { name: 'Refik Šabanadžović', pos: 'DM', rating: 89, nation: 'Bosnia y Herzegovina', flag: '🇧🇦' },
  { name: 'Slobodan Marović', pos: 'LB', rating: 88 },
  { name: 'Stevan Stojanović', pos: 'GK', rating: 90 }
]));

// 15. PARTIZÁN DE BELGRADO (1966)
add(buildTeam('par_1966', 'Partizán de Belgrado', 'PAR', 'champions', '1966', 'Final Copa de Europa 1966', '🇷🇸', 'Serbia', 'legendary', [
  { name: 'Milan Galić', pos: 'ST', rating: 93, bonus: 1 },
  { name: 'Vladica Kovačević', pos: 'AM', rating: 92 },
  { name: 'Mustafa Hasanagić', pos: 'ST', rating: 91 },
  { name: 'Fahrudin Jusufi', pos: 'RB', rating: 91 },
  { name: 'Velibor Vasović', pos: 'CB', rating: 93 },
  { name: 'Branko Rašović', pos: 'CB', rating: 90 },
  { name: 'Radoslav Bečejac', pos: 'DM', rating: 88 },
  { name: 'Josip Pirmajer', pos: 'LW', rating: 88, nation: 'Eslovenia', flag: '🇸🇮' },
  { name: 'Mane Bajić', pos: 'RW', rating: 87 },
  { name: 'Ljubomir Mihajlović', pos: 'LB', rating: 87 },
  { name: 'Milutin Šoškić', pos: 'GK', rating: 92 }
]));

// 16. DINAMO ZAGREB (1967, 2019)
[
  { y: '1967', tag: 'Copa de Ferias 1967', s: [
    { name: 'Slaven Zambata', pos: 'ST', rating: 92, bonus: 1 },
    { name: 'Krasnodar Rora', pos: 'LW', rating: 90 },
    { name: 'Marijan Čerček', pos: 'RW', rating: 88 },
    { name: 'Stjepan Lamza', pos: 'AM', rating: 92 },
    { name: 'Filip Blašković', pos: 'DM', rating: 88 },
    { name: 'Denijal Pirić', pos: 'CM', rating: 87, nation: 'Bosnia y Herzegovina', flag: '🇧🇦' },
    { name: 'Rudolf Cvek', pos: 'RB', rating: 87 },
    { name: 'Branko Gračanin', pos: 'LB', rating: 87 },
    { name: 'Mladen Ramljak', pos: 'CB', rating: 89 },
    { name: 'Marijan Brnčić', pos: 'CB', rating: 88 },
    { name: 'Zlatko Škorić', pos: 'GK', rating: 89 }
  ]},
  { y: '2019', tag: 'Cuartos Europa League 2019', s: [
    { name: 'Dani Olmo', pos: 'AM', rating: 91, nation: 'España', flag: '🇪🇸', bonus: 1 },
    { name: 'Mislav Oršić', pos: 'LW', rating: 89 },
    { name: 'Bruno Petković', pos: 'ST', rating: 88 },
    { name: 'Izet Hajrović', pos: 'RW', rating: 86, nation: 'Bosnia y Herzegovina', flag: '🇧🇦' },
    { name: 'Arijan Ademi', pos: 'DM', rating: 88, nation: 'Macedonia del Norte', flag: '🇲🇰' },
    { name: 'Amer Gojak', pos: 'CM', rating: 86, nation: 'Bosnia y Herzegovina', flag: '🇧🇦' },
    { name: 'Petar Stojanović', pos: 'RB', rating: 85, nation: 'Eslovenia', flag: '🇸🇮' },
    { name: 'Emir Dilaver', pos: 'CB', rating: 86, nation: 'Austria', flag: '🇦🇹' },
    { name: 'Kévin Théophile-Catherine', pos: 'CB', rating: 86, nation: 'Francia', flag: '🇫🇷' },
    { name: 'Marin Leovac', pos: 'LB', rating: 85 },
    { name: 'Dominik Livaković', pos: 'GK', rating: 91 }
  ]}
].forEach(i => add(buildTeam(`dzg_${i.y}`, 'Dinamo Zagreb', 'DZG', 'champions', i.y, i.tag, '🇭🇷', 'Croacia', 'gold', i.s)));

// 17. DINAMO KIEV (1975, 1986, 1999)
[
  { y: '1975', tag: 'Supercopa de Europa 1975', s: [
    { name: 'Oleg Blokhin', pos: 'ST', rating: 97, bonus: 1 },
    { name: 'Volodymyr Onyshchenko', pos: 'ST', rating: 90 },
    { name: 'Leonid Buryak', pos: 'AM', rating: 92 },
    { name: 'Volodymyr Muntyan', pos: 'CM', rating: 92 },
    { name: 'Viktor Kolotov', pos: 'CM', rating: 93 },
    { name: 'Volodymyr Troshkin', pos: 'RB', rating: 89 },
    { name: 'Mykhaylo Fomenko', pos: 'CB', rating: 90 },
    { name: 'Stefan Reshko', pos: 'CB', rating: 89 },
    { name: 'Viktor Matviyenko', pos: 'LB', rating: 89 },
    { name: 'Anatoliy Konkov', pos: 'DM', rating: 90 },
    { name: 'Yevhen Rudakov', pos: 'GK', rating: 93 }
  ]},
  { y: '1986', tag: 'Recopa de Europa 1986', s: [
    { name: 'Igor Belanov', pos: 'ST', rating: 96, bonus: 1 },
    { name: 'Oleg Blokhin', pos: 'LW', rating: 94 },
    { name: 'Oleksandr Zavarov', pos: 'AM', rating: 94 },
    { name: 'Vasyl Rats', pos: 'LM', sec: ['LB'], rating: 90 },
    { name: 'Ivan Yaremchuk', pos: 'RW', rating: 90 },
    { name: 'Pavlo Yakovenko', pos: 'CM', rating: 90 },
    { name: 'Volodymyr Bezsonov', pos: 'RB', rating: 92 },
    { name: 'Serhiy Baltacha', pos: 'CB', rating: 90 },
    { name: 'Oleg Kuznetsov', pos: 'CB', rating: 92 },
    { name: 'Anatoliy Demyanenko', pos: 'LB', rating: 93 },
    { name: 'Viktor Chanov', pos: 'GK', rating: 91 }
  ]},
  { y: '1999', tag: 'Semifinales Champions 1999', s: [
    { name: 'Andriy Shevchenko', pos: 'ST', rating: 97, bonus: 1 },
    { name: 'Serhiy Rebrov', pos: 'ST', rating: 93 },
    { name: 'Vitaliy Kosovskyi', pos: 'LW', rating: 89 },
    { name: 'Aliaksandr Khatskevich', pos: 'CM', rating: 88, nation: 'Bielorrusia', flag: '🇧🇾' },
    { name: 'Andriy Husin', pos: 'DM', rating: 90 },
    { name: 'Valiantsin Bialkevich', pos: 'AM', rating: 91, nation: 'Bielorrusia', flag: '🇧🇾' },
    { name: 'Oleh Luzhnyi', pos: 'RB', rating: 91 },
    { name: 'Vladyslav Vashchuk', pos: 'CB', rating: 90 },
    { name: 'Oleksandr Holovko', pos: 'CB', rating: 90 },
    { name: 'Yuriy Dmytrulin', pos: 'LB', rating: 88 },
    { name: 'Oleksandr Shovkovskyi', pos: 'GK', rating: 93 }
  ]}
].forEach(i => add(buildTeam(`dkv_${i.y}`, 'Dinamo Kiev', 'DKV', 'champions', i.y, i.tag, '🇺🇦', 'Ucrania', 'legendary', i.s)));

// 18. SHAKHTAR DONETSK (2009)
add(buildTeam('shk_2009', 'Shakhtar Donetsk', 'SHK', 'champions', '2009', 'Copa UEFA 2009', '🇺🇦', 'Ucrania', 'legendary', [
  { name: 'Fernandinho', pos: 'CM', rating: 92, nation: 'Brasil', flag: '🇧🇷', bonus: 1 },
  { name: 'Willian', pos: 'LW', rating: 91, nation: 'Brasil', flag: '🇧🇷' },
  { name: 'Jádson', pos: 'AM', rating: 90, nation: 'Brasil', flag: '🇧🇷' },
  { name: 'Luiz Adriano', pos: 'ST', rating: 89, nation: 'Brasil', flag: '🇧🇷' },
  { name: 'Ilsinho', pos: 'RW', rating: 88, nation: 'Brasil', flag: '🇧🇷' },
  { name: 'Mariusz Lewandowski', pos: 'DM', rating: 87, nation: 'Polonia', flag: '🇵🇱' },
  { name: 'Darijo Srna', pos: 'RB', rating: 93, nation: 'Croacia', flag: '🇭🇷' },
  { name: 'Dmytro Chygrynskiy', pos: 'CB', rating: 90 },
  { name: 'Oleksandr Kucher', pos: 'CB', rating: 88 },
  { name: 'Răzvan Raț', pos: 'LB', rating: 88, nation: 'Rumania', flag: '🇷🇴' },
  { name: 'Andriy Pyatov', pos: 'GK', rating: 90 }
]));

// 19. RSC ANDERLECHT (1976, 1978, 1983)
[
  { y: '1976', tag: 'Recopa de Europa 1976', s: [
    { name: 'Rob Rensenbrink', pos: 'LW', rating: 96, nation: 'Países Bajos', flag: '🇳🇱', bonus: 1 },
    { name: 'Paul Van Himst', pos: 'ST', rating: 92 },
    { name: 'François Van der Elst', pos: 'RW', rating: 91 },
    { name: 'Peter Ressel', pos: 'ST', rating: 88, nation: 'Países Bajos', flag: '🇳🇱' },
    { name: 'Ludo Coeck', pos: 'CM', rating: 92 },
    { name: 'Arie Haan', pos: 'DM', rating: 93, nation: 'Países Bajos', flag: '🇳🇱' },
    { name: 'Gilbert Van Binst', pos: 'RB', rating: 89 },
    { name: 'Hugo Broos', pos: 'CB', rating: 89 },
    { name: 'Erwin Vandendaele', pos: 'CB', rating: 88 },
    { name: 'Jean Thissen', pos: 'LB', rating: 88 },
    { name: 'Jan Ruiter', pos: 'GK', rating: 89, nation: 'Países Bajos', flag: '🇳🇱' }
  ]},
  { y: '1978', tag: 'Supercopa de Europa 1978', s: [
    { name: 'Rob Rensenbrink', pos: 'LW', rating: 96, nation: 'Países Bajos', flag: '🇳🇱', bonus: 1 },
    { name: 'François Van der Elst', pos: 'RW', rating: 91 },
    { name: 'Benny Nielsen', pos: 'ST', rating: 88, nation: 'Dinamarca', flag: '🇩🇰' },
    { name: 'Arie Haan', pos: 'DM', rating: 93, nation: 'Países Bajos', flag: '🇳🇱' },
    { name: 'Ludo Coeck', pos: 'CM', rating: 92 },
    { name: 'Frank Vercauteren', pos: 'AM', rating: 91 },
    { name: 'Gilbert Van Binst', pos: 'RB', rating: 89 },
    { name: 'Hugo Broos', pos: 'CB', rating: 90 },
    { name: 'Johnny Dusbaba', pos: 'CB', rating: 87, nation: 'Países Bajos', flag: '🇳🇱' },
    { name: 'Jean Thissen', pos: 'LB', rating: 88 },
    { name: 'Nico de Bree', pos: 'GK', rating: 88, nation: 'Países Bajos', flag: '🇳🇱' }
  ]},
  { y: '1983', tag: 'Copa UEFA 1983', s: [
    { name: 'Frank Vercauteren', pos: 'AM', rating: 93, bonus: 1 },
    { name: 'Erwin Vandenbergh', pos: 'ST', rating: 92 },
    { name: 'Kenneth Brylle', pos: 'ST', rating: 88, nation: 'Dinamarca', flag: '🇩🇰' },
    { name: 'Juan Lozano', pos: 'AM', rating: 90, nation: 'España', flag: '🇪🇸' },
    { name: 'Ludo Coeck', pos: 'CM', rating: 92 },
    { name: 'Per Frimann', pos: 'LM', rating: 87, nation: 'Dinamarca', flag: '🇩🇰' },
    { name: 'Wim Hofkens', pos: 'RB', rating: 87, nation: 'Países Bajos', flag: '🇳🇱' },
    { name: 'Morten Olsen', pos: 'CB', rating: 93, nation: 'Dinamarca', flag: '🇩🇰' },
    { name: 'Luka Peruzović', pos: 'CB', rating: 89, nation: 'Croacia', flag: '🇭🇷' },
    { name: 'Michel De Groote', pos: 'LB', rating: 87 },
    { name: 'Jacky Munaron', pos: 'GK', rating: 89 }
  ]}
].forEach(i => add(buildTeam(`and_${i.y}`, 'RSC Anderlecht', 'AND', 'champions', i.y, i.tag, '🇧🇪', 'Bélgica', 'legendary', i.s)));

// 20. CLUB BRUGGE (1978)
add(buildTeam('bru_1978', 'Club Brugge', 'BRU', 'champions', '1978', 'Final Copa de Europa Wembley 1978', '🇧🇪', 'Bélgica', 'legendary', [
  { name: 'Jan Ceulemans', pos: 'AM', rating: 93, bonus: 1 },
  { name: 'René Vandereycken', pos: 'CM', rating: 91 },
  { name: 'Jan Sørensen', pos: 'LW', rating: 89, nation: 'Dinamarca', flag: '🇩🇰' },
  { name: 'Raoul Lambert', pos: 'ST', rating: 90 },
  { name: 'Julien Cools', pos: 'RW', rating: 89 },
  { name: 'Georges Leekens', pos: 'CB', rating: 89 },
  { name: 'Fons Bastijns', pos: 'RB', rating: 88 },
  { name: 'Eduard Krieger', pos: 'CB', rating: 88, nation: 'Austria', flag: '🇦🇹' },
  { name: 'Gino Maes', pos: 'LB', rating: 86 },
  { name: 'Dirk De Cock', pos: 'DM', rating: 86 },
  { name: 'Birger Jensen', pos: 'GK', rating: 91, nation: 'Dinamarca', flag: '🇩🇰' }
]));

// 21. ATHLETIC CLUB (1984, 2012)
[
  { y: '1984', tag: 'Doblete Histórico 1984', s: [
    { name: 'Andoni Goikoetxea', pos: 'CB', rating: 93, bonus: 1 },
    { name: 'Manu Sarabia', pos: 'ST', rating: 90 },
    { name: 'Dani', pos: 'RW', rating: 91 },
    { name: 'Estanislao Argote', pos: 'LW', rating: 90 },
    { name: 'José Ramón Gallego', pos: 'CM', rating: 88 },
    { name: 'Miguel de Andrés', pos: 'DM', rating: 89 },
    { name: 'Santiago Urquiaga', pos: 'RB', rating: 89 },
    { name: 'Íñigo Liceranzu', pos: 'CB', rating: 88 },
    { name: 'José María Núñez', pos: 'LB', rating: 87 },
    { name: 'Ismael Urtubi', pos: 'CM', rating: 88 },
    { name: 'Andoni Zubizarreta', pos: 'GK', rating: 93 }
  ]},
  { y: '2012', tag: 'Final Europa League Bielsa 2012', s: [
    { name: 'Fernando Llorente', pos: 'ST', rating: 92, bonus: 1 },
    { name: 'Iker Muniain', pos: 'LW', rating: 90 },
    { name: 'Markel Susaeta', pos: 'RW', rating: 89 },
    { name: 'Ander Herrera', pos: 'AM', rating: 90 },
    { name: 'Javi Martínez', pos: 'CB', sec: ['DM'], rating: 92 },
    { name: 'Óscar de Marcos', pos: 'CM', rating: 88 },
    { name: 'Ander Iturraspe', pos: 'DM', rating: 88 },
    { name: 'Andoni Iraola', pos: 'RB', rating: 90 },
    { name: 'Fernando Amorebieta', pos: 'CB', rating: 88, nation: 'Venezuela', flag: '🇻🇪' },
    { name: 'Jon Aurtenetxe', pos: 'LB', rating: 86 },
    { name: 'Gorka Iraizoz', pos: 'GK', rating: 89 }
  ]}
].forEach(i => add(buildTeam(`ath_${i.y}`, 'Athletic Club', 'ATH', 'champions', i.y, i.tag, '🇪🇸', 'España', 'legendary', i.s)));

// 22. REAL SOCIEDAD (1982, 2003)
[
  { y: '1982', tag: 'Bicampeón de Liga 1982', s: [
    { name: 'Luis Arconada', pos: 'GK', rating: 95, bonus: 1 },
    { name: 'Jesús María Satrústegui', pos: 'ST', rating: 92 },
    { name: 'Roberto López Ufarte', pos: 'LW', rating: 93 },
    { name: 'Pedro Uralde', pos: 'ST', rating: 90 },
    { name: 'Jesús María Zamora', pos: 'AM', rating: 93 },
    { name: 'Diego', pos: 'DM', rating: 89 },
    { name: 'Periko Alonso', pos: 'CM', rating: 91 },
    { name: 'Genaro Celayeta', pos: 'RB', rating: 88 },
    { name: 'Inaxio Kortabarria', pos: 'CB', rating: 91 },
    { name: 'Alberto Górriz', pos: 'CB', rating: 89 },
    { name: 'Julio Olaizola', pos: 'LB', rating: 88 }
  ]},
  { y: '2003', tag: 'Subcampeón de Liga 2003', s: [
    { name: 'Nihat Kahveci', pos: 'ST', rating: 93, nation: 'Turquía', flag: '🇹🇷', bonus: 1 },
    { name: 'Darko Kovačević', pos: 'ST', rating: 92, nation: 'Serbia', flag: '🇷🇸' },
    { name: 'Valeri Karpin', pos: 'RW', rating: 92, nation: 'Rusia', flag: '🇷🇺' },
    { name: 'Javi de Pedro', pos: 'LW', rating: 90 },
    { name: 'Xabi Alonso', pos: 'DM', rating: 94 },
    { name: 'Mikel Aranburu', pos: 'CM', rating: 88 },
    { name: 'Aitor López Rekarte', pos: 'RB', rating: 88 },
    { name: 'Gabriel Schürrer', pos: 'CB', rating: 88, nation: 'Argentina', flag: '🇦🇷' },
    { name: 'Igor Jauregi', pos: 'CB', rating: 87 },
    { name: 'Agustín Aranzábal', pos: 'LB', rating: 88 },
    { name: 'Sander Westerveld', pos: 'GK', rating: 88, nation: 'Países Bajos', flag: '🇳🇱' }
  ]}
].forEach(i => add(buildTeam(`rso_${i.y}`, 'Real Sociedad', 'RSO', 'champions', i.y, i.tag, '🇪🇸', 'España', 'legendary', i.s)));

// 23. SEVILLA FC (2006, 2007, 2014, 2015, 2016, 2020, 2023)
[
  { y: '2006', tag: 'Copa UEFA Eindhoven 2006', s: [
    { name: 'Dani Alves', pos: 'RB', rating: 93, nation: 'Brasil', flag: '🇧🇷', bonus: 1 },
    { name: 'Javier Saviola', pos: 'ST', rating: 90, nation: 'Argentina', flag: '🇦🇷' },
    { name: 'Luís Fabiano', pos: 'ST', rating: 91, nation: 'Brasil', flag: '🇧🇷' },
    { name: 'Jesús Navas', pos: 'RW', rating: 90 },
    { name: 'Adriano', pos: 'LW', rating: 89, nation: 'Brasil', flag: '🇧🇷' },
    { name: 'Enzo Maresca', pos: 'CM', rating: 90, nation: 'Italia', flag: '🇮🇹' },
    { name: 'Christian Poulsen', pos: 'DM', rating: 89, nation: 'Dinamarca', flag: '🇩🇰' },
    { name: 'Javi Navarro', pos: 'CB', rating: 90 },
    { name: 'Julien Escudé', pos: 'CB', rating: 88, nation: 'Francia', flag: '🇫🇷' },
    { name: 'David Castedo', pos: 'LB', rating: 87 },
    { name: 'Andrés Palop', pos: 'GK', rating: 92 }
  ]},
  { y: '2007', tag: 'Bicampeón Copa UEFA 2007', s: [
    { name: 'Frédéric Kanouté', pos: 'ST', rating: 94, nation: 'Mali', flag: '🇲🇱', bonus: 1 },
    { name: 'Luís Fabiano', pos: 'ST', rating: 92, nation: 'Brasil', flag: '🇧🇷' },
    { name: 'Dani Alves', pos: 'RB', rating: 94, nation: 'Brasil', flag: '🇧🇷' },
    { name: 'Jesús Navas', pos: 'RW', rating: 90 },
    { name: 'Antonio Puerta', pos: 'LB', rating: 90 },
    { name: 'Renato', pos: 'CM', rating: 89, nation: 'Brasil', flag: '🇧🇷' },
    { name: 'Christian Poulsen', pos: 'DM', rating: 89, nation: 'Dinamarca', flag: '🇩🇰' },
    { name: 'Javi Navarro', pos: 'CB', rating: 90 },
    { name: 'Julien Escudé', pos: 'CB', rating: 88, nation: 'Francia', flag: '🇫🇷' },
    { name: 'Adriano', pos: 'LW', rating: 89, nation: 'Brasil', flag: '🇧🇷' },
    { name: 'Andrés Palop', pos: 'GK', rating: 93 }
  ]},
  { y: '2014', tag: 'Europa League Turín 2014', s: [
    { name: 'Ivan Rakitić', pos: 'AM', rating: 93, nation: 'Croacia', flag: '🇭🇷', bonus: 1 },
    { name: 'Carlos Bacca', pos: 'ST', rating: 91, nation: 'Colombia', flag: '🇨🇴' },
    { name: 'José Antonio Reyes', pos: 'RW', rating: 88 },
    { name: 'Vitolo', pos: 'LW', rating: 88 },
    { name: 'Stéphane Mbia', pos: 'DM', rating: 89, nation: 'Camerún', flag: '🇨🇲' },
    { name: 'Daniel Carriço', pos: 'DM', rating: 88, nation: 'Portugal', flag: '🇵🇹' },
    { name: 'Coke', pos: 'RB', rating: 87 },
    { name: 'Nicolás Pareja', pos: 'CB', rating: 88, nation: 'Argentina', flag: '🇦🇷' },
    { name: 'Federico Fazio', pos: 'CB', rating: 88, nation: 'Argentina', flag: '🇦🇷' },
    { name: 'Alberto Moreno', pos: 'LB', rating: 88 },
    { name: 'Beto', pos: 'GK', rating: 90, nation: 'Portugal', flag: '🇵🇹' }
  ]},
  { y: '2015', tag: 'Bicampeón Europa League Varsovia 2015', s: [
    { name: 'Carlos Bacca', pos: 'ST', rating: 92, nation: 'Colombia', flag: '🇨🇴', bonus: 1 },
    { name: 'Éver Banega', pos: 'CM', rating: 92, nation: 'Argentina', flag: '🇦🇷' },
    { name: 'Aleix Vidal', pos: 'RW', rating: 88 },
    { name: 'Vitolo', pos: 'LW', rating: 89 },
    { name: 'Grzegorz Krychowiak', pos: 'DM', rating: 90, nation: 'Polonia', flag: '🇵🇱' },
    { name: 'Stéphane Mbia', pos: 'DM', rating: 88, nation: 'Camerún', flag: '🇨🇲' },
    { name: 'Coke', pos: 'RB', rating: 87 },
    { name: 'Daniel Carriço', pos: 'CB', rating: 88, nation: 'Portugal', flag: '🇵🇹' },
    { name: 'Timothée Kolodziejczak', pos: 'CB', rating: 87, nation: 'Francia', flag: '🇫🇷' },
    { name: 'Benoît Trémoulinas', pos: 'LB', rating: 88, nation: 'Francia', flag: '🇫🇷' },
    { name: 'Sergio Rico', pos: 'GK', rating: 88 }
  ]},
  { y: '2016', tag: 'Tricampeón Europa League Basilea 2016', s: [
    { name: 'Kevin Gameiro', pos: 'ST', rating: 91, nation: 'Francia', flag: '🇫🇷', bonus: 1 },
    { name: 'Éver Banega', pos: 'AM', rating: 93, nation: 'Argentina', flag: '🇦🇷' },
    { name: 'Coke', pos: 'RW', rating: 90 },
    { name: 'Vitolo', pos: 'LW', rating: 89 },
    { name: 'Grzegorz Krychowiak', pos: 'DM', rating: 90, nation: 'Polonia', flag: '🇵🇱' },
    { name: 'Steven Nzonzi', pos: 'DM', rating: 90, nation: 'Francia', flag: '🇫🇷' },
    { name: 'Mariano Ferreira', pos: 'RB', rating: 88, nation: 'Brasil', flag: '🇧🇷' },
    { name: 'Adil Rami', pos: 'CB', rating: 89, nation: 'Francia', flag: '🇫🇷' },
    { name: 'Daniel Carriço', pos: 'CB', rating: 88, nation: 'Portugal', flag: '🇵🇹' },
    { name: 'Sergio Escudero', pos: 'LB', rating: 87 },
    { name: 'David Soria', pos: 'GK', rating: 87 }
  ]},
  { y: '2020', tag: 'Hexacampeón Europa League Colonia 2020', s: [
    { name: 'Luuk de Jong', pos: 'ST', rating: 90, nation: 'Países Bajos', flag: '🇳🇱', bonus: 1 },
    { name: 'Lucas Ocampos', pos: 'LW', rating: 90, nation: 'Argentina', flag: '🇦🇷' },
    { name: 'Suso', pos: 'RW', rating: 88 },
    { name: 'Éver Banega', pos: 'CM', rating: 93, nation: 'Argentina', flag: '🇦🇷' },
    { name: 'Fernando Reges', pos: 'DM', rating: 91, nation: 'Brasil', flag: '🇧🇷' },
    { name: 'Joan Jordán', pos: 'CM', rating: 88 },
    { name: 'Jesús Navas', pos: 'RB', rating: 91 },
    { name: 'Jules Koundé', pos: 'CB', rating: 91, nation: 'Francia', flag: '🇫🇷' },
    { name: 'Diego Carlos', pos: 'CB', rating: 91, nation: 'Brasil', flag: '🇧🇷' },
    { name: 'Sergio Reguilón', pos: 'LB', rating: 89 },
    { name: 'Yassine Bounou (Bono)', pos: 'GK', rating: 92, nation: 'Marruecos', flag: '🇲🇦' }
  ]},
  { y: '2023', tag: 'Heptacampeón Europa League Budapest 2023', s: [
    { name: 'Youssef En-Nesyri', pos: 'ST', rating: 90, nation: 'Marruecos', flag: '🇲🇦', bonus: 1 },
    { name: 'Lucas Ocampos', pos: 'LW', rating: 89, nation: 'Argentina', flag: '🇦🇷' },
    { name: 'Bryan Gil', pos: 'RW', rating: 87 },
    { name: 'Ivan Rakitić', pos: 'CM', rating: 90, nation: 'Croacia', flag: '🇭🇷' },
    { name: 'Fernando Reges', pos: 'DM', rating: 89, nation: 'Brasil', flag: '🇧🇷' },
    { name: 'Óliver Torres', pos: 'AM', rating: 87 },
    { name: 'Jesús Navas', pos: 'RB', rating: 90 },
    { name: 'Loïc Badé', pos: 'CB', rating: 88, nation: 'Francia', flag: '🇫🇷' },
    { name: 'Nemanja Gudelj', pos: 'CB', rating: 88, nation: 'Serbia', flag: '🇷🇸' },
    { name: 'Alex Telles', pos: 'LB', rating: 87, nation: 'Brasil', flag: '🇧🇷' },
    { name: 'Yassine Bounou (Bono)', pos: 'GK', rating: 93, nation: 'Marruecos', flag: '🇲🇦' }
  ]}
].forEach(i => add(buildTeam(`sev_${i.y}`, 'Sevilla FC', 'SEV', 'champions', i.y, i.tag, '🇪🇸', 'España', 'legendary', i.s)));

// 24. VILLARREAL CF (2006, 2021)
[
  { y: '2006', tag: 'Semifinales Champions 2006', s: [
    { name: 'Juan Román Riquelme', pos: 'AM', rating: 97, nation: 'Argentina', flag: '🇦🇷', bonus: 1 },
    { name: 'Diego Forlán', pos: 'ST', rating: 93, nation: 'Uruguay', flag: '🇺🇾' },
    { name: 'Guillermo Franco', pos: 'ST', rating: 87, nation: 'México', flag: '🇲🇽' },
    { name: 'Juan Pablo Sorín', pos: 'LM', rating: 90, nation: 'Argentina', flag: '🇦🇷' },
    { name: 'Marcos Senna', pos: 'DM', rating: 92 },
    { name: 'Josico', pos: 'DM', rating: 87 },
    { name: 'Javi Venta', pos: 'RB', rating: 87 },
    { name: 'Gonzalo Rodríguez', pos: 'CB', rating: 89, nation: 'Argentina', flag: '🇦🇷' },
    { name: 'Quique Álvarez', pos: 'CB', rating: 87 },
    { name: 'Rodolfo Arruabarrena', pos: 'LB', rating: 89, nation: 'Argentina', flag: '🇦🇷' },
    { name: 'Mariano Barbosa', pos: 'GK', rating: 87, nation: 'Argentina', flag: '🇦🇷' }
  ]},
  { y: '2021', tag: 'Campeón Europa League Gdansk 2021', s: [
    { name: 'Gerard Moreno', pos: 'ST', rating: 93, bonus: 1 },
    { name: 'Carlos Bacca', pos: 'ST', rating: 88, nation: 'Colombia', flag: '🇨🇴' },
    { name: 'Yeremy Pino', pos: 'RW', rating: 87 },
    { name: 'Dani Parejo', pos: 'CM', rating: 91 },
    { name: 'Étienne Capoue', pos: 'DM', rating: 90, nation: 'Francia', flag: '🇫🇷' },
    { name: 'Manu Trigueros', pos: 'CM', rating: 88 },
    { name: 'Juan Foyth', pos: 'RB', rating: 89, nation: 'Argentina', flag: '🇦🇷' },
    { name: 'Raúl Albiol', pos: 'CB', rating: 90 },
    { name: 'Pau Torres', pos: 'CB', rating: 91 },
    { name: 'Alfonso Pedraza', pos: 'LB', rating: 88 },
    { name: 'Gerónimo Rulli', pos: 'GK', rating: 90, nation: 'Argentina', flag: '🇦🇷' }
  ]}
].forEach(i => add(buildTeam(`vil_${i.y}`, 'Villarreal CF', 'VIL', 'champions', i.y, i.tag, '🇪🇸', 'España', 'legendary', i.s)));

// 25. OLYMPIQUE DE MARSELLA (1993)
add(buildTeam('mar_1993', 'Olympique de Marsella', 'OM', 'champions', '1993', 'Campeón Champions League 1993', '🇫🇷', 'Francia', 'legendary', [
  { name: 'Abedi Pelé', pos: 'AM', rating: 94, nation: 'Ghana', flag: '🇬🇭', bonus: 1 },
  { name: 'Rudi Völler', pos: 'ST', rating: 93, nation: 'Alemania', flag: '🇩🇪' },
  { name: 'Alen Bokšić', pos: 'ST', rating: 92, nation: 'Croacia', flag: '🇭🇷' },
  { name: 'Didier Deschamps', pos: 'DM', rating: 93 },
  { name: 'Franck Sauzée', pos: 'CM', rating: 91 },
  { name: 'Jean-Jacques Eydelie', pos: 'CM', rating: 87 },
  { name: 'Jocelyn Angloma', pos: 'RB', rating: 90 },
  { name: 'Marcel Desailly', pos: 'CB', rating: 94 },
  { name: 'Basile Boli', pos: 'CB', rating: 92 },
  { name: 'Éric Di Meco', pos: 'LB', rating: 89 },
  { name: 'Fabien Barthez', pos: 'GK', rating: 93 }
]));

// 26. OLYMPIQUE DE LYON (2004, 2005, 2006, 2010)
[
  { y: '2004', tag: 'Campeón Ligue 1 2004', s: [
    { name: 'Juninho Pernambucano', pos: 'AM', rating: 94, nation: 'Brasil', flag: '🇧🇷', bonus: 1 },
    { name: 'Giovane Élber', pos: 'ST', rating: 91, nation: 'Brasil', flag: '🇧🇷' },
    { name: 'Sidney Govou', pos: 'RW', rating: 88 },
    { name: 'Florent Malouda', pos: 'LW', rating: 89 },
    { name: 'Michael Essien', pos: 'DM', rating: 91, nation: 'Ghana', flag: '🇬🇭' },
    { name: 'Mahamadou Diarra', pos: 'DM', rating: 90, nation: 'Mali', flag: '🇲🇱' },
    { name: 'Anthony Réveillère', pos: 'RB', rating: 87 },
    { name: 'Edmílson', pos: 'CB', rating: 90, nation: 'Brasil', flag: '🇧🇷' },
    { name: 'Patrick Müller', pos: 'CB', rating: 88, nation: 'Suiza', flag: '🇨🇭' },
    { name: 'Eric Abidal', pos: 'LB', rating: 90 },
    { name: 'Grégory Coupet', pos: 'GK', rating: 91 }
  ]},
  { y: '2005', tag: 'Dominio Absoluto Ligue 1 2005', s: [
    { name: 'Juninho Pernambucano', pos: 'AM', rating: 95, nation: 'Brasil', flag: '🇧🇷', bonus: 1 },
    { name: 'Sylvain Wiltord', pos: 'ST', rating: 90 },
    { name: 'Florent Malouda', pos: 'LW', rating: 90 },
    { name: 'Sidney Govou', pos: 'RW', rating: 89 },
    { name: 'Michael Essien', pos: 'CM', rating: 93, nation: 'Ghana', flag: '🇬🇭' },
    { name: 'Mahamadou Diarra', pos: 'DM', rating: 91, nation: 'Mali', flag: '🇲🇱' },
    { name: 'Lamine Diatta', pos: 'RB', rating: 86, nation: 'Senegal', flag: '🇸🇳' },
    { name: 'Cris (El Policía)', pos: 'CB', rating: 92, nation: 'Brasil', flag: '🇧🇷' },
    { name: 'Cláudio Caçapa', pos: 'CB', rating: 88, nation: 'Brasil', flag: '🇧🇷' },
    { name: 'Eric Abidal', pos: 'LB', rating: 91 },
    { name: 'Grégory Coupet', pos: 'GK', rating: 92 }
  ]},
  { y: '2006', tag: 'Pentacampeón Ligue 1 2006', s: [
    { name: 'Juninho Pernambucano', pos: 'AM', rating: 95, nation: 'Brasil', flag: '🇧🇷', bonus: 1 },
    { name: 'Fred', pos: 'ST', rating: 90, nation: 'Brasil', flag: '🇧🇷' },
    { name: 'Florent Malouda', pos: 'LW', rating: 91 },
    { name: 'Sylvain Wiltord', pos: 'RW', rating: 89 },
    { name: 'Tiago Mendes', pos: 'CM', rating: 89, nation: 'Portugal', flag: '🇵🇹' },
    { name: 'Mahamadou Diarra', pos: 'DM', rating: 91, nation: 'Mali', flag: '🇲🇱' },
    { name: 'François Clerc', pos: 'RB', rating: 87 },
    { name: 'Cris', pos: 'CB', rating: 92, nation: 'Brasil', flag: '🇧🇷' },
    { name: 'Cláudio Caçapa', pos: 'CB', rating: 88, nation: 'Brasil', flag: '🇧🇷' },
    { name: 'Eric Abidal', pos: 'LB', rating: 91 },
    { name: 'Grégory Coupet', pos: 'GK', rating: 92 }
  ]},
  { y: '2010', tag: 'Semifinales Champions 2010', s: [
    { name: 'Lisandro López', pos: 'ST', rating: 92, nation: 'Argentina', flag: '🇦🇷', bonus: 1 },
    { name: 'Michel Bastos', pos: 'LW', rating: 89, nation: 'Brasil', flag: '🇧🇷' },
    { name: 'César Delgado (Chelito)', pos: 'RW', rating: 88, nation: 'Argentina', flag: '🇦🇷' },
    { name: 'Miralem Pjanić', pos: 'AM', rating: 89, nation: 'Bosnia y Herzegovina', flag: '🇧🇦' },
    { name: 'Jérémy Toulalan', pos: 'DM', rating: 90 },
    { name: 'Kim Källström', pos: 'CM', rating: 88, nation: 'Suecia', flag: '🇸🇪' },
    { name: 'Anthony Réveillère', pos: 'RB', rating: 88 },
    { name: 'Cris', pos: 'CB', rating: 90, nation: 'Brasil', flag: '🇧🇷' },
    { name: 'Jean-Alain Boumsong', pos: 'CB', rating: 87 },
    { name: 'Aly Cissokho', pos: 'LB', rating: 88 },
    { name: 'Hugo Lloris', pos: 'GK', rating: 93 }
  ]}
].forEach(i => add(buildTeam(`lyo_${i.y}`, 'Olympique de Lyon', 'OL', 'champions', i.y, i.tag, '🇫🇷', 'Francia', 'legendary', i.s)));

// 27. AS MONACO (2004, 2017)
[
  { y: '2004', tag: 'Final Champions League 2004', s: [
    { name: 'Fernando Morientes', pos: 'ST', rating: 93, nation: 'España', flag: '🇪🇸', bonus: 1 },
    { name: 'Ludovic Giuly', pos: 'RW', rating: 92 },
    { name: 'Dado Pršo', pos: 'ST', rating: 90, nation: 'Croacia', flag: '🇭🇷' },
    { name: 'Jérôme Rothen', pos: 'LW', rating: 90 },
    { name: 'Lucas Bernardi', pos: 'DM', rating: 89, nation: 'Argentina', flag: '🇦🇷' },
    { name: 'Akis Zikos', pos: 'DM', rating: 88, nation: 'Grecia', flag: '🇬🇷' },
    { name: 'Hugo Ibarra', pos: 'RB', rating: 89, nation: 'Argentina', flag: '🇦🇷' },
    { name: 'Julien Rodriguez', pos: 'CB', rating: 88 },
    { name: 'Gaël Givet', pos: 'CB', rating: 88 },
    { name: 'Patrice Evra', pos: 'LB', rating: 91 },
    { name: 'Flavio Roma', pos: 'GK', rating: 89, nation: 'Italia', flag: '🇮🇹' }
  ]},
  { y: '2017', tag: 'Campeón Ligue 1 y Semis Champions 2017', s: [
    { name: 'Kylian Mbappé', pos: 'ST', rating: 93, bonus: 1 },
    { name: 'Radamel Falcao', pos: 'ST', rating: 93, nation: 'Colombia', flag: '🇨🇴' },
    { name: 'Bernardo Silva', pos: 'RW', rating: 93, nation: 'Portugal', flag: '🇵🇹' },
    { name: 'Thomas Lemar', pos: 'LW', rating: 90 },
    { name: 'Fabinho', pos: 'DM', rating: 92, nation: 'Brasil', flag: '🇧🇷' },
    { name: 'Tiemoué Bakayoko', pos: 'DM', rating: 89 },
    { name: 'Djibril Sidibé', pos: 'RB', rating: 88 },
    { name: 'Kamil Glik', pos: 'CB', rating: 89, nation: 'Polonia', flag: '🇵🇱' },
    { name: 'Jemerson', pos: 'CB', rating: 87, nation: 'Brasil', flag: '🇧🇷' },
    { name: 'Benjamin Mendy', pos: 'LB', rating: 90 },
    { name: 'Danijel Subašić', pos: 'GK', rating: 91, nation: 'Croacia', flag: '🇭🇷' }
  ]}
].forEach(i => add(buildTeam(`mon_${i.y}`, 'AS Monaco', 'ASM', 'champions', i.y, i.tag, '🇲🇨', 'Mónaco', 'legendary', i.s)));

// 28. PARIS SAINT-GERMAIN (1996, 2015, 2020)
[
  { y: '1996', tag: 'Recopa de Europa 1996', s: [
    { name: 'Raí', pos: 'AM', rating: 94, nation: 'Brasil', flag: '🇧🇷', bonus: 1 },
    { name: 'Youri Djorkaeff', pos: 'AM', rating: 93 },
    { name: 'Patrice Loko', pos: 'ST', rating: 89 },
    { name: 'Julio Dely Valdés', pos: 'ST', rating: 89, nation: 'Panamá', flag: '🇵🇦' },
    { name: 'Vincent Guérin', pos: 'CM', rating: 90 },
    { name: 'Daniel Bravo', pos: 'DM', rating: 88 },
    { name: 'Laurent Fournier', pos: 'RB', rating: 87 },
    { name: 'Alain Roche', pos: 'CB', rating: 90 },
    { name: 'Paul Le Guen', pos: 'CB', rating: 90 },
    { name: 'Patrick Colleter', pos: 'LB', rating: 87 },
    { name: 'Bernard Lama', pos: 'GK', rating: 93 }
  ]},
  { y: '2015', tag: 'Cuadruplete Francés 2015', s: [
    { name: 'Zlatan Ibrahimović', pos: 'ST', rating: 96, nation: 'Suecia', flag: '🇸🇪', bonus: 1 },
    { name: 'Edinson Cavani', pos: 'ST', rating: 93, nation: 'Uruguay', flag: '🇺🇾' },
    { name: 'Lucas Moura', pos: 'RW', rating: 88, nation: 'Brasil', flag: '🇧🇷' },
    { name: 'Javier Pastore', pos: 'AM', rating: 90, nation: 'Argentina', flag: '🇦🇷' },
    { name: 'Marco Verratti', pos: 'CM', rating: 92, nation: 'Italia', flag: '🇮🇹' },
    { name: 'Thiago Motta', pos: 'DM', rating: 91, nation: 'Italia', flag: '🇮🇹' },
    { name: 'Gregory van der Wiel', pos: 'RB', rating: 87, nation: 'Países Bajos', flag: '🇳🇱' },
    { name: 'Thiago Silva', pos: 'CB', rating: 95, nation: 'Brasil', flag: '🇧🇷' },
    { name: 'David Luiz', pos: 'CB', rating: 90, nation: 'Brasil', flag: '🇧🇷' },
    { name: 'Maxwell', pos: 'LB', rating: 89, nation: 'Brasil', flag: '🇧🇷' },
    { name: 'Salvatore Sirigu', pos: 'GK', rating: 89, nation: 'Italia', flag: '🇮🇹' }
  ]},
  { y: '2020', tag: 'Final Champions League Lisboa 2020', s: [
    { name: 'Neymar Jr', pos: 'LW', rating: 97, nation: 'Brasil', flag: '🇧🇷', bonus: 1 },
    { name: 'Kylian Mbappé', pos: 'ST', rating: 96 },
    { name: 'Ángel Di María', pos: 'RW', rating: 94, nation: 'Argentina', flag: '🇦🇷' },
    { name: 'Leandro Paredes', pos: 'CM', rating: 89, nation: 'Argentina', flag: '🇦🇷' },
    { name: 'Marquinhos', pos: 'DM', sec: ['CB'], rating: 93, nation: 'Brasil', flag: '🇧🇷' },
    { name: 'Ander Herrera', pos: 'CM', rating: 88, nation: 'España', flag: '🇪🇸' },
    { name: 'Thilo Kehrer', pos: 'RB', rating: 86, nation: 'Alemania', flag: '🇩🇪' },
    { name: 'Thiago Silva', pos: 'CB', rating: 94, nation: 'Brasil', flag: '🇧🇷' },
    { name: 'Presnel Kimpembe', pos: 'CB', rating: 89 },
    { name: 'Juan Bernat', pos: 'LB', rating: 88, nation: 'España', flag: '🇪🇸' },
    { name: 'Keylor Navas', pos: 'GK', rating: 94, nation: 'Costa Rica', flag: '🇨🇷' }
  ]}
].forEach(i => add(buildTeam(`psg_${i.y}`, 'Paris Saint-Germain', 'PSG', 'champions', i.y, i.tag, '🇫🇷', 'Francia', 'legendary', i.s)));

// 29. GIRONDINS DE BORDEAUX (1996, 2009)
[
  { y: '1996', tag: 'Final Copa UEFA 1996', s: [
    { name: 'Zinedine Zidane', pos: 'AM', rating: 95, bonus: 1 },
    { name: 'Christophe Dugarry', pos: 'ST', rating: 90 },
    { name: 'Richard Witschge', pos: 'CM', rating: 89, nation: 'Países Bajos', flag: '🇳🇱' },
    { name: 'Daniel Dutuel', pos: 'CM', rating: 87 },
    { name: 'Jean-Luc Dogon', pos: 'DM', rating: 87 },
    { name: 'Anthony Bancarel', pos: 'ST', rating: 86 },
    { name: 'François Grenet', pos: 'RB', rating: 87 },
    { name: 'Jakob Friis-Hansen', pos: 'CB', rating: 87, nation: 'Dinamarca', flag: '🇩🇰' },
    { name: 'Bixente Lizarazu', pos: 'LB', rating: 92 },
    { name: 'Laurent Croci', pos: 'CB', rating: 86 },
    { name: 'Gaëtan Huard', pos: 'GK', rating: 89 }
  ]},
  { y: '2009', tag: 'Campeón Ligue 1 Laurent Blanc 2009', s: [
    { name: 'Yoann Gourcuff', pos: 'AM', rating: 93, bonus: 1 },
    { name: 'Marouane Chamakh', pos: 'ST', rating: 90, nation: 'Marruecos', flag: '🇲🇦' },
    { name: 'Fernando Cavenaghi', pos: 'ST', rating: 89, nation: 'Argentina', flag: '🇦🇷' },
    { name: 'Wendel', pos: 'LW', rating: 88, nation: 'Brasil', flag: '🇧🇷' },
    { name: 'Alou Diarra', pos: 'DM', rating: 90 },
    { name: 'Fernando Menegazzo', pos: 'CM', rating: 89, nation: 'Brasil', flag: '🇧🇷' },
    { name: 'Matthieu Chalmé', pos: 'RB', rating: 87 },
    { name: 'Souleymane Diawara', pos: 'CB', rating: 89, nation: 'Senegal', flag: '🇸🇳' },
    { name: 'Marc Planus', pos: 'CB', rating: 88 },
    { name: 'Benoît Trémoulinas', pos: 'LB', rating: 88 },
    { name: 'Ulrich Ramé', pos: 'GK', rating: 89 }
  ]}
].forEach(i => add(buildTeam(`bor_${i.y}`, 'Girondins de Bordeaux', 'FCGB', 'champions', i.y, i.tag, '🇫🇷', 'Francia', 'gold', i.s)));

// 30. HAMBURGO SV (1983)
add(buildTeam('hsv_1983', 'Hamburgo SV', 'HSV', 'champions', '1983', 'Campeón Copa de Europa Atenas 1983', '🇩🇪', 'Alemania', 'legendary', [
  { name: 'Felix Magath', pos: 'AM', rating: 95, bonus: 1 },
  { name: 'Horst Hrubesch', pos: 'ST', rating: 93 },
  { name: 'Lars Bastrup', pos: 'ST', rating: 89, nation: 'Dinamarca', flag: '🇩🇰' },
  { name: 'Wolfgang Rolff', pos: 'DM', rating: 90 },
  { name: 'Jürgen Groh', pos: 'CM', rating: 88 },
  { name: 'Jimmy Hartwig', pos: 'CM', rating: 89 },
  { name: 'Manfred Kaltz', pos: 'RB', rating: 94 },
  { name: 'Holger Hieronymus', pos: 'CB', rating: 90 },
  { name: 'Ditmar Jakobs', pos: 'CB', rating: 91 },
  { name: 'Bernd Wehmeyer', pos: 'LB', rating: 88 },
  { name: 'Uli Stein', pos: 'GK', rating: 92 }
]));

// 31. WERDER BREMEN (1992, 2004, 2009)
[
  { y: '1992', tag: 'Recopa de Europa Lisboa 1992', s: [
    { name: 'Klaus Allofs', pos: 'ST', rating: 92, bonus: 1 },
    { name: 'Wynton Rufer', pos: 'ST', rating: 92, nation: 'Nueva Zelanda', flag: '🇳🇿' },
    { name: 'Marco Bode', pos: 'LW', rating: 89 },
    { name: 'Stefan Kohn', pos: 'RW', rating: 87 },
    { name: 'Miroslav Votava', pos: 'DM', rating: 90 },
    { name: 'Dieter Eilts', pos: 'DM', rating: 90 },
    { name: 'Manfred Bockenfeld', pos: 'RB', rating: 87 },
    { name: 'Rune Bratseth', pos: 'CB', rating: 92, nation: 'Noruega', flag: '🇳🇴' },
    { name: 'Ulrich Borowka', pos: 'CB', rating: 88 },
    { name: 'Thorsten Legat', pos: 'LB', rating: 87 },
    { name: 'Oliver Reck', pos: 'GK', rating: 89 }
  ]},
  { y: '2004', tag: 'Doblete Bundesliga y Copa 2004', s: [
    { name: 'Aílton', pos: 'ST', rating: 94, nation: 'Brasil', flag: '🇧🇷', bonus: 1 },
    { name: 'Ivan Klasnić', pos: 'ST', rating: 90, nation: 'Croacia', flag: '🇭🇷' },
    { name: 'Johan Micoud', pos: 'AM', rating: 93, nation: 'Francia', flag: '🇫🇷' },
    { name: 'Fabian Ernst', pos: 'CM', rating: 89 },
    { name: 'Frank Baumann', pos: 'DM', rating: 89 },
    { name: 'Krisztián Lisztes', pos: 'CM', rating: 87, nation: 'Hungría', flag: '🇭🇺' },
    { name: 'Paul Stalteri', pos: 'RB', rating: 87, nation: 'Canadá', flag: '🇨🇦' },
    { name: 'Valérien Ismaël', pos: 'CB', rating: 90, nation: 'Francia', flag: '🇫🇷' },
    { name: 'Mladen Krstajić', pos: 'CB', rating: 89, nation: 'Serbia', flag: '🇷🇸' },
    { name: 'Christian Schulz', pos: 'LB', rating: 87 },
    { name: 'Andreas Reinke', pos: 'GK', rating: 88 }
  ]},
  { y: '2009', tag: 'Final Copa UEFA Estambul 2009', s: [
    { name: 'Diego Ribas', pos: 'AM', rating: 94, nation: 'Brasil', flag: '🇧🇷', bonus: 1 },
    { name: 'Claudio Pizarro', pos: 'ST', rating: 92, nation: 'Perú', flag: '🇵🇪' },
    { name: 'Mesut Özil', pos: 'AM', rating: 91 },
    { name: 'Aaron Hunt', pos: 'LW', rating: 86 },
    { name: 'Torsten Frings', pos: 'DM', rating: 91 },
    { name: 'Frank Baumann', pos: 'DM', rating: 88 },
    { name: 'Clemens Fritz', pos: 'RB', rating: 88 },
    { name: 'Per Mertesacker', pos: 'CB', rating: 91 },
    { name: 'Naldo', pos: 'CB', rating: 91, nation: 'Brasil', flag: '🇧🇷' },
    { name: 'Sebastian Boenisch', pos: 'LB', rating: 86 },
    { name: 'Tim Wiese', pos: 'GK', rating: 90 }
  ]}
].forEach(i => add(buildTeam(`wer_${i.y}`, 'Werder Bremen', 'SVW', 'champions', i.y, i.tag, '🇩🇪', 'Alemania', 'gold', i.s)));

// 32. BAYER LEVERKUSEN (2002, 2024)
[
  { y: '2002', tag: 'Final Champions Glasgow 2002', s: [
    { name: 'Michael Ballack', pos: 'CM', rating: 96, bonus: 1 },
    { name: 'Lucio', pos: 'CB', rating: 94, nation: 'Brasil', flag: '🇧🇷' },
    { name: 'Oliver Neuville', pos: 'ST', rating: 90 },
    { name: 'Dimitar Berbatov', pos: 'ST', rating: 90, nation: 'Bulgaria', flag: '🇧🇬' },
    { name: 'Yıldıray Baştürk', pos: 'AM', rating: 90, nation: 'Turquía', flag: '🇹🇷' },
    { name: 'Bernd Schneider', pos: 'RW', rating: 92 },
    { name: 'Carsten Ramelow', pos: 'DM', rating: 90 },
    { name: 'Zoltán Sebescen', pos: 'RB', rating: 86 },
    { name: 'Boris Živković', pos: 'CB', rating: 87, nation: 'Croacia', flag: '🇭🇷' },
    { name: 'Diego Placente', pos: 'LB', rating: 89, nation: 'Argentina', flag: '🇦🇷' },
    { name: 'Hans-Jörg Butt', pos: 'GK', rating: 90 }
  ]},
  { y: '2024', tag: 'Invictus Campeón Bundesliga 2024', s: [
    { name: 'Florian Wirtz', pos: 'AM', rating: 95, bonus: 1 },
    { name: 'Victor Boniface', pos: 'ST', rating: 90, nation: 'Nigeria', flag: '🇳🇬' },
    { name: 'Jeremie Frimpong', pos: 'RB', rating: 92, nation: 'Países Bajos', flag: '🇳🇱' },
    { name: 'Alejandro Grimaldo', pos: 'LB', rating: 92, nation: 'España', flag: '🇪🇸' },
    { name: 'Granit Xhaka', pos: 'CM', rating: 93, nation: 'Suiza', flag: '🇨🇭' },
    { name: 'Exequiel Palacios', pos: 'CM', rating: 91, nation: 'Argentina', flag: '🇦🇷' },
    { name: 'Robert Andrich', pos: 'DM', rating: 89 },
    { name: 'Jonathan Tah', pos: 'CB', rating: 91 },
    { name: 'Edmond Tapsoba', pos: 'CB', rating: 90, nation: 'Burkina Faso', flag: '🇧🇫' },
    { name: 'Piero Hincapié', pos: 'CB', rating: 89, nation: 'Ecuador', flag: '🇪🇨' },
    { name: 'Lukáš Hrádecký', pos: 'GK', rating: 91, nation: 'Finlandia', flag: '🇫🇮' }
  ]}
].forEach(i => add(buildTeam(`lev_${i.y}`, 'Bayer 04 Leverkusen', 'B04', 'champions', i.y, i.tag, '🇩🇪', 'Alemania', 'legendary', i.s)));

// 33. BORUSSIA MÖNCHENGLADBACH (1975, 1977, 1979)
[
  { y: '1975', tag: 'Copa UEFA 1975', s: [
    { name: 'Jupp Heynckes', pos: 'ST', rating: 95, bonus: 1 },
    { name: 'Allan Simonsen', pos: 'RW', rating: 94, nation: 'Dinamarca', flag: '🇩🇰' },
    { name: 'Henning Jensen', pos: 'ST', rating: 90, nation: 'Dinamarca', flag: '🇩🇰' },
    { name: 'Rainer Bonhof', pos: 'CM', rating: 93 },
    { name: 'Herbert Wimmer', pos: 'CM', rating: 91 },
    { name: 'Christian Kulik', pos: 'AM', rating: 88 },
    { name: 'Berti Vogts', pos: 'RB', rating: 94 },
    { name: 'Hans-Jürgen Wittkamp', pos: 'CB', rating: 88 },
    { name: 'Frank Schäffer', pos: 'CB', rating: 87 },
    { name: 'Ulrich Surau', pos: 'LB', rating: 87 },
    { name: 'Wolfgang Kleff', pos: 'GK', rating: 91 }
  ]},
  { y: '1977', tag: 'Final Copa de Europa Roma 1977', s: [
    { name: 'Allan Simonsen', pos: 'RW', rating: 96, nation: 'Dinamarca', flag: '🇩🇰', bonus: 1 },
    { name: 'Jupp Heynckes', pos: 'ST', rating: 94 },
    { name: 'Uli Stielike', pos: 'DM', rating: 93 },
    { name: 'Rainer Bonhof', pos: 'CM', rating: 93 },
    { name: 'Herbert Wimmer', pos: 'CM', rating: 90 },
    { name: 'Christian Kulik', pos: 'AM', rating: 88 },
    { name: 'Berti Vogts', pos: 'RB', rating: 94 },
    { name: 'Hans-Jürgen Wittkamp', pos: 'CB', rating: 88 },
    { name: 'Frank Schäffer', pos: 'CB', rating: 88 },
    { name: 'Hans Klinkhammer', pos: 'LB', rating: 87 },
    { name: 'Wolfgang Kneib', pos: 'GK', rating: 89 }
  ]},
  { y: '1979', tag: 'Copa UEFA 1979', s: [
    { name: 'Allan Simonsen', pos: 'RW', rating: 95, nation: 'Dinamarca', flag: '🇩🇰', bonus: 1 },
    { name: 'Ewald Lienen', pos: 'LW', rating: 89 },
    { name: 'Christian Kulik', pos: 'AM', rating: 89 },
    { name: 'Winfried Schäfer', pos: 'CM', rating: 88 },
    { name: 'Carsten Nielsen', pos: 'CM', rating: 88, nation: 'Dinamarca', flag: '🇩🇰' },
    { name: 'Rudi Gores', pos: 'DM', rating: 87 },
    { name: 'Berti Vogts', pos: 'RB', rating: 93 },
    { name: 'Frank Schäffer', pos: 'CB', rating: 88 },
    { name: 'Norbert Ringels', pos: 'CB', rating: 87 },
    { name: 'Norbert Meier', pos: 'LB', rating: 86 },
    { name: 'Wolfgang Kneib', pos: 'GK', rating: 89 }
  ]}
].forEach(i => add(buildTeam(`bmg_${i.y}`, 'Borussia Mönchengladbach', 'BMG', 'champions', i.y, i.tag, '🇩🇪', 'Alemania', 'legendary', i.s)));

// 34. EINTRACHT FRANKFURT (1980, 2022)
[
  { y: '1980', tag: 'Copa UEFA 1980', s: [
    { name: 'Cha Bum-kun', pos: 'ST', rating: 93, nation: 'Corea del Sur', flag: '🇰🇷', bonus: 1 },
    { name: 'Bernd Hölzenbein', pos: 'LW', rating: 92 },
    { name: 'Bernd Nickel', pos: 'AM', rating: 90 },
    { name: 'Norbert Nachtweih', pos: 'CM', rating: 88 },
    { name: 'Wolfgang Trapp', pos: 'DM', rating: 87 },
    { name: 'Ronny Borchers', pos: 'CM', rating: 88 },
    { name: 'Willi Neuberger', pos: 'RB', rating: 88 },
    { name: 'Charly Körbel', pos: 'CB', rating: 92 },
    { name: 'Bruno Pezzey', pos: 'CB', rating: 92, nation: 'Austria', flag: '🇦🇹' },
    { name: 'Horst Ehrmantraut', pos: 'LB', rating: 87 },
    { name: 'Jürgen Pahl', pos: 'GK', rating: 89 }
  ]},
  { y: '2022', tag: 'Campeón Europa League Sevilla 2022', s: [
    { name: 'Filip Kostić', pos: 'LW', rating: 92, nation: 'Serbia', flag: '🇷🇸', bonus: 1 },
    { name: 'Rafael Santos Borré', pos: 'ST', rating: 89, nation: 'Colombia', flag: '🇨🇴' },
    { name: 'Daichi Kamada', pos: 'AM', rating: 90, nation: 'Japón', flag: '🇯🇵' },
    { name: 'Jesper Lindstrøm', pos: 'RW', rating: 87, nation: 'Dinamarca', flag: '🇩🇰' },
    { name: 'Sebastian Rode', pos: 'CM', rating: 88 },
    { name: 'Djibril Sow', pos: 'CM', rating: 88, nation: 'Suiza', flag: '🇨🇭' },
    { name: 'Ansgar Knauff', pos: 'RB', rating: 87 },
    { name: 'Tuta', pos: 'CB', rating: 87, nation: 'Brasil', flag: '🇧🇷' },
    { name: 'Martin Hinteregger', pos: 'CB', rating: 89, nation: 'Austria', flag: '🇦🇹' },
    { name: 'Evan Ndicka', pos: 'CB', rating: 89, nation: 'Francia', flag: '🇫🇷' },
    { name: 'Kevin Trapp', pos: 'GK', rating: 92 }
  ]}
].forEach(i => add(buildTeam(`sge_${i.y}`, 'Eintracht Frankfurt', 'SGE', 'champions', i.y, i.tag, '🇩🇪', 'Alemania', 'legendary', i.s)));

// 35. AS ROMA (1984, 2001, 2018, 2022)
[
  { y: '1984', tag: 'Final Copa de Europa Roma 1984', s: [
    { name: 'Paulo Roberto Falcão', pos: 'CM', rating: 96, nation: 'Brasil', flag: '🇧🇷', bonus: 1 },
    { name: 'Bruno Conti', pos: 'RW', rating: 94 },
    { name: 'Roberto Pruzzo', pos: 'ST', rating: 93 },
    { name: 'Francesco Graziani', pos: 'ST', rating: 91 },
    { name: 'Toninho Cerezo', pos: 'DM', rating: 93, nation: 'Brasil', flag: '🇧🇷' },
    { name: 'Agostino Di Bartolomei', pos: 'CB', rating: 93 },
    { name: 'Michele Nappi', pos: 'RB', rating: 87 },
    { name: 'Sebastiano Nela', pos: 'LB', rating: 90 },
    { name: 'Dario Bonetti', pos: 'CB', rating: 88 },
    { name: 'Ubaldo Righetti', pos: 'CB', rating: 88 },
    { name: 'Franco Tancredi', pos: 'GK', rating: 91 }
  ]},
  { y: '2001', tag: 'Scudetto Histórico Capello 2001', s: [
    { name: 'Francesco Totti', pos: 'AM', rating: 97, bonus: 1 },
    { name: 'Gabriel Batistuta', pos: 'ST', rating: 95, nation: 'Argentina', flag: '🇦🇷' },
    { name: 'Vincenzo Montella', pos: 'ST', rating: 91 },
    { name: 'Cafu', pos: 'RB', rating: 95, nation: 'Brasil', flag: '🇧🇷' },
    { name: 'Vincent Candela', pos: 'LB', rating: 91, nation: 'Francia', flag: '🇫🇷' },
    { name: 'Damiano Tommasi', pos: 'DM', rating: 90 },
    { name: 'Emerson', pos: 'DM', rating: 92, nation: 'Brasil', flag: '🇧🇷' },
    { name: 'Hidetoshi Nakata', pos: 'AM', rating: 90, nation: 'Japón', flag: '🇯🇵' },
    { name: 'Walter Samuel (Il Muro)', pos: 'CB', rating: 94, nation: 'Argentina', flag: '🇦🇷' },
    { name: 'Aldair', pos: 'CB', rating: 93, nation: 'Brasil', flag: '🇧🇷' },
    { name: 'Francesco Antonioli', pos: 'GK', rating: 89 }
  ]},
  { y: '2018', tag: 'Remontada Semifinales Champions 2018', s: [
    { name: 'Edin Džeko', pos: 'ST', rating: 93, nation: 'Bosnia y Herzegovina', flag: '🇧🇦', bonus: 1 },
    { name: 'Radja Nainggolan', pos: 'CM', rating: 92, nation: 'Bélgica', flag: '🇧🇪' },
    { name: 'Daniele De Rossi', pos: 'DM', rating: 92 },
    { name: 'Cengiz Ünder', pos: 'RW', rating: 87, nation: 'Turquía', flag: '🇹🇷' },
    { name: 'Stephan El Shaarawy', pos: 'LW', rating: 88 },
    { name: 'Kevin Strootman', pos: 'CM', rating: 89, nation: 'Países Bajos', flag: '🇳🇱' },
    { name: 'Alessandro Florenzi', pos: 'RB', rating: 89 },
    { name: 'Kostas Manolas', pos: 'CB', rating: 92, nation: 'Grecia', flag: '🇬🇷' },
    { name: 'Federico Fazio', pos: 'CB', rating: 89, nation: 'Argentina', flag: '🇦🇷' },
    { name: 'Aleksandar Kolarov', pos: 'LB', rating: 90, nation: 'Serbia', flag: '🇷🇸' },
    { name: 'Alisson Becker', pos: 'GK', rating: 94, nation: 'Brasil', flag: '🇧🇷' }
  ]},
  { y: '2022', tag: 'Campeón Conference League Tirana 2022', s: [
    { name: 'Lorenzo Pellegrini', pos: 'AM', rating: 91, bonus: 1 },
    { name: 'Tammy Abraham', pos: 'ST', rating: 90, nation: 'Inglaterra', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
    { name: 'Nicolò Zaniolo', pos: 'RW', rating: 89 },
    { name: 'Henrikh Mkhitaryan', pos: 'CM', rating: 89, nation: 'Armenia', flag: '🇦🇲' },
    { name: 'Bryan Cristante', pos: 'DM', rating: 88 },
    { name: 'Sérgio Oliveira', pos: 'CM', rating: 87, nation: 'Portugal', flag: '🇵🇹' },
    { name: 'Rick Karsdorp', pos: 'RB', rating: 87, nation: 'Países Bajos', flag: '🇳🇱' },
    { name: 'Chris Smalling', pos: 'CB', rating: 91, nation: 'Inglaterra', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
    { name: 'Gianluca Mancini', pos: 'CB', rating: 89 },
    { name: 'Nicola Zalewski', pos: 'LB', rating: 86, nation: 'Polonia', flag: '🇵🇱' },
    { name: 'Rui Patrício', pos: 'GK', rating: 89, nation: 'Portugal', flag: '🇵🇹' }
  ]}
].forEach(i => add(buildTeam(`rom_${i.y}`, 'AS Roma', 'ASR', 'champions', i.y, i.tag, '🇮🇹', 'Italia', 'legendary', i.s)));

// 36. SS LAZIO (1999, 2000)
[
  { y: '1999', tag: 'Última Recopa de Europa Birmingham 1999', s: [
    { name: 'Christian Vieri', pos: 'ST', rating: 95, bonus: 1 },
    { name: 'Marcelo Salas', pos: 'ST', rating: 94, nation: 'Chile', flag: '🇨🇱' },
    { name: 'Pavel Nedvěd', pos: 'LW', rating: 94, nation: 'República Checa', flag: '🇨🇿' },
    { name: 'Dejan Stanković', pos: 'CM', rating: 90, nation: 'Serbia', flag: '🇷🇸' },
    { name: 'Matías Almeyda', pos: 'DM', rating: 91, nation: 'Argentina', flag: '🇦🇷' },
    { name: 'Roberto Mancini', pos: 'AM', rating: 92 },
    { name: 'Giuseppe Pancaro', pos: 'RB', rating: 88 },
    { name: 'Alessandro Nesta', pos: 'CB', rating: 96 },
    { name: 'Siniša Mihajlović', pos: 'CB', rating: 93, nation: 'Serbia', flag: '🇷🇸' },
    { name: 'Giuseppe Favalli', pos: 'LB', rating: 88 },
    { name: 'Luca Marchegiani', pos: 'GK', rating: 91 }
  ]},
  { y: '2000', tag: 'Doblete Scudetto y Coppa 2000', s: [
    { name: 'Alessandro Nesta', pos: 'CB', rating: 97, bonus: 1 },
    { name: 'Juan Sebastián Verón', pos: 'CM', rating: 95, nation: 'Argentina', flag: '🇦🇷' },
    { name: 'Marcelo Salas', pos: 'ST', rating: 93, nation: 'Chile', flag: '🇨🇱' },
    { name: 'Simone Inzaghi', pos: 'ST', rating: 89 },
    { name: 'Pavel Nedvěd', pos: 'LW', rating: 94, nation: 'República Checa', flag: '🇨🇿' },
    { name: 'Diego Simeone', pos: 'DM', rating: 93, nation: 'Argentina', flag: '🇦🇷' },
    { name: 'Sérgio Conceição', pos: 'RW', rating: 90, nation: 'Portugal', flag: '🇵🇹' },
    { name: 'Paolo Negro', pos: 'RB', rating: 88 },
    { name: 'Siniša Mihajlović', pos: 'CB', rating: 93, nation: 'Serbia', flag: '🇷🇸' },
    { name: 'Giuseppe Favalli', pos: 'LB', rating: 88 },
    { name: 'Luca Marchegiani', pos: 'GK', rating: 91 }
  ]}
].forEach(i => add(buildTeam(`laz_${i.y}`, 'SS Lazio', 'LAZ', 'champions', i.y, i.tag, '🇮🇹', 'Italia', 'legendary', i.s)));

console.log(`Generated ${EUROPE_CLUBS.length} European clubs.`);
