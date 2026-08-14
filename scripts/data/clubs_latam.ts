import { buildTeam, Team } from '../teamBuilderHelper';

export const LATAM_CLUBS: Team[] = [];

function add(t: Team) {
  LATAM_CLUBS.push(t);
}

// 1. CA PEÑAROL (1960, 1961, 1966, 1982, 1987)
[
  { y: '1960', tag: 'Libertadores 1960', s: [
    { name: 'Alberto Spencer', pos: 'ST', sec: ['AM'], rating: 95, nation: 'Ecuador', flag: '🇪🇨', bonus: 1 },
    { name: 'José Sasía', pos: 'ST', rating: 88 },
    { name: 'Juan Joya', pos: 'LW', rating: 89, nation: 'Perú', flag: '🇵🇪' },
    { name: 'Luis Cubilla', pos: 'RW', rating: 90 },
    { name: 'Néstor Gonçalves', pos: 'DM', rating: 91 },
    { name: 'William Martínez', pos: 'CB', rating: 89 },
    { name: 'Luis Maidana', pos: 'GK', rating: 87 },
    { name: 'Salvador', pos: 'CB', rating: 84 },
    { name: 'Santiago Pino', pos: 'RB', rating: 83 },
    { name: 'Walter Aguerre', pos: 'CM', rating: 85 },
    { name: 'Carlos Linazza', pos: 'AM', rating: 85 }
  ]},
  { y: '1961', tag: 'Bicampeón 1961', s: [
    { name: 'Alberto Spencer', pos: 'ST', rating: 95, nation: 'Ecuador', flag: '🇪🇨', bonus: 1 },
    { name: 'José Sasía', pos: 'ST', rating: 89 },
    { name: 'Juan Joya', pos: 'LW', rating: 89, nation: 'Perú', flag: '🇵🇪' },
    { name: 'Luis Cubilla', pos: 'RW', rating: 90 },
    { name: 'Néstor Gonçalves', pos: 'DM', rating: 92 },
    { name: 'William Martínez', pos: 'CB', rating: 89 },
    { name: 'Luis Maidana', pos: 'GK', rating: 87 },
    { name: 'Edgardo González', pos: 'CM', rating: 86 },
    { name: 'Walter Aguerre', pos: 'CM', rating: 85 },
    { name: 'Núber Cano', pos: 'CB', rating: 84 },
    { name: 'Roberto Matosas', pos: 'LB', rating: 88 }
  ]},
  { y: '1966', tag: 'Mundial de Clubes 1966', s: [
    { name: 'Alberto Spencer', pos: 'ST', rating: 96, nation: 'Ecuador', flag: '🇪🇨', bonus: 1 },
    { name: 'Pedro Rocha', pos: 'AM', rating: 94 },
    { name: 'Ladislao Mazurkiewicz', pos: 'GK', rating: 94 },
    { name: 'Juan Joya', pos: 'LW', rating: 89, nation: 'Perú', flag: '🇵🇪' },
    { name: 'Julio César Abbadie', pos: 'RW', rating: 88 },
    { name: 'Néstor Gonçalves', pos: 'DM', rating: 91 },
    { name: 'Pablo Forlán', pos: 'RB', rating: 88 },
    { name: 'Juan Vicente Lezcano', pos: 'CB', rating: 87, nation: 'Paraguay', flag: '🇵🇾' },
    { name: 'Luis Varela', pos: 'CB', rating: 86 },
    { name: 'Omar Caetano', pos: 'LB', rating: 87 },
    { name: 'Julio César Cortés', pos: 'CM', rating: 87 }
  ]},
  { y: '1982', tag: 'Intercontinental 1982', s: [
    { name: 'Fernando Morena', pos: 'ST', rating: 93, bonus: 1 },
    { name: 'Venancio Ramos', pos: 'RW', rating: 88 },
    { name: 'Walkir Silva', pos: 'LW', rating: 85 },
    { name: 'Mario Saralegui', pos: 'CM', rating: 87 },
    { name: 'Miguel Bossio', pos: 'DM', rating: 86 },
    { name: 'Jair Gonçalves', pos: 'AM', rating: 88, nation: 'Brasil', flag: '🇧🇷' },
    { name: 'Víctor Diogo', pos: 'RB', rating: 88 },
    { name: 'Walter Olivera', pos: 'CB', rating: 88 },
    { name: 'Nelson Gutiérrez', pos: 'CB', rating: 87 },
    { name: 'Washington González', pos: 'LB', rating: 86 },
    { name: 'Gustavo Fernández', pos: 'GK', rating: 87 }
  ]},
  { y: '1987', tag: 'Libertadores 1987', s: [
    { name: 'Diego Aguirre', pos: 'ST', rating: 89, bonus: 1 },
    { name: 'Alfonso Domínguez', pos: 'LB', rating: 87 },
    { name: 'Eduardo Pereira', pos: 'GK', rating: 88 },
    { name: 'José Perdomo', pos: 'DM', rating: 88 },
    { name: 'Gustavo Matosas', pos: 'CM', rating: 87 },
    { name: 'Marcelo Rotti', pos: 'CB', rating: 85 },
    { name: 'Obdulio Trasante', pos: 'CB', rating: 86 },
    { name: 'José Herrera', pos: 'RB', rating: 86 },
    { name: 'Daniel Vidal', pos: 'RW', rating: 84 },
    { name: 'Ricardo Viera', pos: 'AM', rating: 86 },
    { name: 'Jorge Cabrera', pos: 'LW', rating: 84 }
  ]}
].forEach(i => add(buildTeam(`pen_${i.y}`, 'CA Peñarol', 'PEN', 'champions', i.y, i.tag, '🇺🇾', 'Uruguay', 'legendary', i.s)));

// 2. CA INDEPENDIENTE (1964, 1965, 1972, 1973, 1974, 1975, 1984)
[
  { y: '1964', tag: 'Libertadores 1964', s: [
    { name: 'Mario Rodríguez', pos: 'ST', rating: 91, bonus: 1 },
    { name: 'Raúl Bernao', pos: 'RW', rating: 90 },
    { name: 'Raúl Savoy', pos: 'LW', rating: 89 },
    { name: 'Luis Suárez', pos: 'AM', rating: 87 },
    { name: 'Jorge Maldonado', pos: 'DM', rating: 88 },
    { name: 'Roberto Ferreiro', pos: 'RB', rating: 88 },
    { name: 'Rubén Navarro', pos: 'CB', rating: 89 },
    { name: 'Tomás Rolan', pos: 'LB', rating: 87, nation: 'Uruguay', flag: '🇺🇾' },
    { name: 'David Acevedo', pos: 'CB', rating: 86 },
    { name: 'Osvaldo Mura', pos: 'CM', rating: 87 },
    { name: 'Miguel Ángel Santoro', pos: 'GK', rating: 91 }
  ]},
  { y: '1965', tag: 'Bicampeón 1965', s: [
    { name: 'Raúl Bernao', pos: 'RW', rating: 91, bonus: 1 },
    { name: 'Roque Avallay', pos: 'ST', rating: 88 },
    { name: 'Raúl Savoy', pos: 'LW', rating: 89 },
    { name: 'Vicente de la Mata', pos: 'AM', rating: 88 },
    { name: 'Jorge Maldonado', pos: 'DM', rating: 88 },
    { name: 'Roberto Ferreiro', pos: 'RB', rating: 88 },
    { name: 'Rubén Navarro', pos: 'CB', rating: 89 },
    { name: 'Juan Carlos Guzmán', pos: 'CB', rating: 87 },
    { name: 'Ricardo Pavoni', pos: 'LB', rating: 90, nation: 'Uruguay', flag: '🇺🇾' },
    { name: 'Osvaldo Mura', pos: 'CM', rating: 87 },
    { name: 'Miguel Ángel Santoro', pos: 'GK', rating: 92 }
  ]},
  { y: '1972', tag: 'Tetra Rey de Copas 1972', s: [
    { name: 'José Pastoriza', pos: 'AM', rating: 92, bonus: 1 },
    { name: 'Agustín Balbuena', pos: 'RW', rating: 88 },
    { name: 'Eduardo Maglioni', pos: 'ST', rating: 87 },
    { name: 'Alejandro Semenewicz', pos: 'CM', rating: 88 },
    { name: 'Miguel Ángel Raimondo', pos: 'DM', rating: 88 },
    { name: 'Eduardo Commisso', pos: 'RB', rating: 87 },
    { name: 'Francisco Sá', pos: 'CB', rating: 90 },
    { name: 'Luis Garisto', pos: 'CB', rating: 87, nation: 'Uruguay', flag: '🇺🇾' },
    { name: 'Ricardo Pavoni', pos: 'LB', rating: 91, nation: 'Uruguay', flag: '🇺🇾' },
    { name: 'Dante Mircoli', pos: 'LW', rating: 86 },
    { name: 'Miguel Ángel Santoro', pos: 'GK', rating: 92 }
  ]},
  { y: '1973', tag: 'Intercontinental 1973', s: [
    { name: 'Ricardo Bochini', pos: 'AM', sec: ['ST'], rating: 96, bonus: 1 },
    { name: 'Daniel Bertoni', pos: 'LW', sec: ['RW', 'ST'], rating: 92 },
    { name: 'Agustín Balbuena', pos: 'RW', rating: 88 },
    { name: 'Eduardo Maglioni', pos: 'ST', rating: 87 },
    { name: 'Miguel Ángel Raimondo', pos: 'DM', rating: 88 },
    { name: 'Rubén Galván', pos: 'CM', rating: 89 },
    { name: 'Eduardo Commisso', pos: 'RB', rating: 87 },
    { name: 'Francisco Sá', pos: 'CB', rating: 90 },
    { name: 'Miguel Ángel López', pos: 'CB', rating: 88 },
    { name: 'Ricardo Pavoni', pos: 'LB', rating: 91, nation: 'Uruguay', flag: '🇺🇾' },
    { name: 'Miguel Ángel Santoro', pos: 'GK', rating: 93 }
  ]},
  { y: '1974', tag: 'Libertadores 1974', s: [
    { name: 'Ricardo Bochini', pos: 'AM', rating: 96, bonus: 1 },
    { name: 'Daniel Bertoni', pos: 'LW', rating: 93 },
    { name: 'Agustín Balbuena', pos: 'RW', rating: 88 },
    { name: 'Luis Giribet', pos: 'ST', rating: 86 },
    { name: 'Rubén Galván', pos: 'DM', rating: 90 },
    { name: 'Alejandro Semenewicz', pos: 'CM', rating: 88 },
    { name: 'Eduardo Commisso', pos: 'RB', rating: 87 },
    { name: 'Francisco Sá', pos: 'CB', rating: 90 },
    { name: 'Miguel Ángel López', pos: 'CB', rating: 88 },
    { name: 'Ricardo Pavoni', pos: 'LB', rating: 91, nation: 'Uruguay', flag: '🇺🇾' },
    { name: 'Carlos Gay', pos: 'GK', rating: 88 }
  ]},
  { y: '1975', tag: 'Tetracampeón 1975', s: [
    { name: 'Ricardo Bochini', pos: 'AM', rating: 96, bonus: 1 },
    { name: 'Daniel Bertoni', pos: 'LW', rating: 93 },
    { name: 'Agustín Balbuena', pos: 'RW', rating: 88 },
    { name: 'Percy Rojas', pos: 'ST', rating: 88, nation: 'Perú', flag: '🇵🇪' },
    { name: 'Rubén Galván', pos: 'DM', rating: 90 },
    { name: 'Alejandro Semenewicz', pos: 'CM', rating: 88 },
    { name: 'Eduardo Commisso', pos: 'RB', rating: 87 },
    { name: 'Francisco Sá', pos: 'CB', rating: 90 },
    { name: 'Luis Garisto', pos: 'CB', rating: 87, nation: 'Uruguay', flag: '🇺🇾' },
    { name: 'Ricardo Pavoni', pos: 'LB', rating: 91, nation: 'Uruguay', flag: '🇺🇾' },
    { name: 'José Alberto Pérez', pos: 'GK', rating: 87 }
  ]},
  { y: '1984', tag: 'Campeón Mundial 1984', s: [
    { name: 'Ricardo Bochini', pos: 'AM', rating: 97, bonus: 1 },
    { name: 'Jorge Burruchaga', pos: 'AM', sec: ['RW'], rating: 92 },
    { name: 'José Alberto Percudani', pos: 'ST', rating: 89 },
    { name: 'Alejandro Barberón', pos: 'LW', rating: 87 },
    { name: 'Claudio Marangoni', pos: 'DM', rating: 90 },
    { name: 'Gerardo Reinoso', pos: 'CM', rating: 86 },
    { name: 'Néstor Clausen', pos: 'RB', rating: 89 },
    { name: 'Hugo Villaverde', pos: 'CB', rating: 90 },
    { name: 'Enzo Trossero', pos: 'CB', rating: 91 },
    { name: 'Carlos Enrique', pos: 'LB', rating: 88 },
    { name: 'Carlos Goyén', pos: 'GK', rating: 89, nation: 'Uruguay', flag: '🇺🇾' }
  ]}
].forEach(i => add(buildTeam(`ind_${i.y}`, 'CA Independiente', 'IND', 'champions', i.y, i.tag, '🇦🇷', 'Argentina', 'legendary', i.s)));

// 3. BOCA JUNIORS (1977, 1978, 2000, 2001, 2003, 2007)
[
  { y: '1977', tag: 'Libertadores 1977', s: [
    { name: 'Hugo Gatti', pos: 'GK', rating: 91, bonus: 1 },
    { name: 'Ernesto Mastrángelo', pos: 'ST', rating: 89 },
    { name: 'Carlos Veglio', pos: 'ST', rating: 87 },
    { name: 'Darío Felman', pos: 'LW', rating: 88 },
    { name: 'Rubén Suñé', pos: 'DM', rating: 90 },
    { name: 'Jorge Ribolzi', pos: 'CM', rating: 87 },
    { name: 'Mario Zanabria', pos: 'AM', rating: 89 },
    { name: 'Vicente Pernía', pos: 'RB', rating: 88 },
    { name: 'Francisco Sá', pos: 'CB', rating: 89 },
    { name: 'Roberto Mouzo', pos: 'CB', rating: 90 },
    { name: 'Alberto Tarantini', pos: 'LB', rating: 90 }
  ]},
  { y: '1978', tag: 'Bicampeón de América 1978', s: [
    { name: 'Hugo Gatti', pos: 'GK', rating: 92, bonus: 1 },
    { name: 'Ernesto Mastrángelo', pos: 'ST', rating: 90 },
    { name: 'Carlos Salguero', pos: 'ST', rating: 86 },
    { name: 'Hugo Perotti', pos: 'LW', rating: 88 },
    { name: 'Rubén Suñé', pos: 'DM', rating: 90 },
    { name: 'Carlos Salinas', pos: 'AM', rating: 88 },
    { name: 'Mario Zanabria', pos: 'CM', rating: 89 },
    { name: 'Vicente Pernía', pos: 'RB', rating: 88 },
    { name: 'Francisco Sá', pos: 'CB', rating: 89 },
    { name: 'Roberto Mouzo', pos: 'CB', rating: 90 },
    { name: 'Miguel Ángel Bordón', pos: 'LB', rating: 87 }
  ]},
  { y: '2000', tag: 'Intercontinental 2000', s: [
    { name: 'Juan Román Riquelme', pos: 'AM', rating: 97, bonus: 1 },
    { name: 'Martín Palermo', pos: 'ST', rating: 94 },
    { name: 'Marcelo Delgado', pos: 'RW', rating: 88 },
    { name: 'Mauricio Serna', pos: 'DM', rating: 90, nation: 'Colombia', flag: '🇨🇴' },
    { name: 'Sebastián Battaglia', pos: 'CM', rating: 88 },
    { name: 'José Basualdo', pos: 'CM', rating: 87 },
    { name: 'Hugo Ibarra', pos: 'RB', rating: 90 },
    { name: 'Jorge Bermúdez', pos: 'CB', rating: 91, nation: 'Colombia', flag: '🇨🇴' },
    { name: 'Cristian Traverso', pos: 'CB', rating: 87 },
    { name: 'Aníbal Matellán', pos: 'LB', rating: 85 },
    { name: 'Oscar Córdoba', pos: 'GK', rating: 92, nation: 'Colombia', flag: '🇨🇴' }
  ]},
  { y: '2001', tag: 'Bicampeón 2001', s: [
    { name: 'Juan Román Riquelme', pos: 'AM', rating: 98, bonus: 1 },
    { name: 'Guillermo Barros Schelotto', pos: 'RW', rating: 91 },
    { name: 'Marcelo Delgado', pos: 'ST', rating: 89 },
    { name: 'Mauricio Serna', pos: 'DM', rating: 90, nation: 'Colombia', flag: '🇨🇴' },
    { name: 'Sebastián Battaglia', pos: 'CM', rating: 88 },
    { name: 'Javier Villarreal', pos: 'CM', rating: 85 },
    { name: 'Hugo Ibarra', pos: 'RB', rating: 90 },
    { name: 'Jorge Bermúdez', pos: 'CB', rating: 91, nation: 'Colombia', flag: '🇨🇴' },
    { name: 'Nicolás Burdisso', pos: 'CB', rating: 88 },
    { name: 'Clemente Rodríguez', pos: 'LB', rating: 88 },
    { name: 'Oscar Córdoba', pos: 'GK', rating: 92, nation: 'Colombia', flag: '🇨🇴' }
  ]},
  { y: '2003', tag: 'Campeón Mundial 2003', s: [
    { name: 'Carlos Tévez', pos: 'ST', sec: ['AM'], rating: 94, bonus: 1 },
    { name: 'Guillermo Barros Schelotto', pos: 'RW', rating: 90 },
    { name: 'Pedro Iarley', pos: 'LW', rating: 88, nation: 'Brasil', flag: '🇧🇷' },
    { name: 'Raúl Cascini', pos: 'DM', rating: 88 },
    { name: 'Sebastián Battaglia', pos: 'CM', rating: 89 },
    { name: 'Diego Cagna', pos: 'CM', rating: 88 },
    { name: 'Matías Donnet', pos: 'AM', rating: 87 },
    { name: 'Rolando Schiavi', pos: 'CB', rating: 90 },
    { name: 'Nicolás Burdisso', pos: 'CB', rating: 89 },
    { name: 'Clemente Rodríguez', pos: 'LB', rating: 89 },
    { name: 'Roberto Abbondanzieri', pos: 'GK', rating: 90 }
  ]},
  { y: '2007', tag: 'Libertadores 2007', s: [
    { name: 'Juan Román Riquelme', pos: 'AM', rating: 99, bonus: 1 },
    { name: 'Martín Palermo', pos: 'ST', rating: 93 },
    { name: 'Rodrigo Palacio', pos: 'RW', rating: 91 },
    { name: 'Éver Banega', pos: 'DM', rating: 89 },
    { name: 'Pablo Ledesma', pos: 'CM', rating: 87 },
    { name: 'Neri Cardozo', pos: 'LW', rating: 87 },
    { name: 'Hugo Ibarra', pos: 'RB', rating: 89 },
    { name: 'Daniel Díaz', pos: 'CB', rating: 89 },
    { name: 'Claudio Morel Rodríguez', pos: 'LB', rating: 88, nation: 'Paraguay', flag: '🇵🇾' },
    { name: 'Matías Silvestre', pos: 'CB', rating: 85 },
    { name: 'Mauricio Caranta', pos: 'GK', rating: 87 }
  ]}
].forEach(i => add(buildTeam(`boc_${i.y}`, 'CA Boca Juniors', 'BOC', 'champions', i.y, i.tag, '🇦🇷', 'Argentina', 'legendary', i.s)));

// 4. RIVER PLATE (1986, 1996, 2015, 2018)
[
  { y: '1986', tag: 'Campeón Mundial 1986', s: [
    { name: 'Norberto Alonso', pos: 'AM', rating: 94, bonus: 1 },
    { name: 'Antonio Alzamendi', pos: 'ST', rating: 91, nation: 'Uruguay', flag: '🇺🇾' },
    { name: 'Juan Gilberto Funes', pos: 'ST', rating: 89 },
    { name: 'Roque Alfaro', pos: 'LW', rating: 87 },
    { name: 'Américo Gallego', pos: 'DM', rating: 91 },
    { name: 'Héctor Enrique', pos: 'CM', rating: 88 },
    { name: 'Jorge Gordillo', pos: 'RB', rating: 87 },
    { name: 'Nelson Gutiérrez', pos: 'CB', rating: 89, nation: 'Uruguay', flag: '🇺🇾' },
    { name: 'Oscar Ruggeri', pos: 'CB', rating: 92 },
    { name: 'Alejandro Montenegro', pos: 'LB', rating: 86 },
    { name: 'Nery Pumpido', pos: 'GK', rating: 90 }
  ]},
  { y: '1996', tag: 'Libertadores 1996', s: [
    { name: 'Enzo Francescoli', pos: 'AM', rating: 96, nation: 'Uruguay', flag: '🇺🇾', bonus: 1 },
    { name: 'Hernán Crespo', pos: 'ST', rating: 92 },
    { name: 'Ariel Ortega', pos: 'RW', rating: 94 },
    { name: 'Marcelo Gallardo', pos: 'AM', rating: 90 },
    { name: 'Matías Almeyda', pos: 'DM', rating: 90 },
    { name: 'Leonardo Astrada', pos: 'DM', rating: 88 },
    { name: 'Hernán Díaz', pos: 'RB', rating: 87 },
    { name: 'Celso Ayala', pos: 'CB', rating: 89, nation: 'Paraguay', flag: '🇵🇾' },
    { name: 'Eduardo Berizzo', pos: 'CB', rating: 88 },
    { name: 'Juan Pablo Sorín', pos: 'LB', rating: 90 },
    { name: 'Germán Burgos', pos: 'GK', rating: 89 }
  ]},
  { y: '2015', tag: 'Libertadores 2015', s: [
    { name: 'Marcelo Barovero', pos: 'GK', rating: 91, bonus: 1 },
    { name: 'Carlos Sánchez', pos: 'RW', rating: 90, nation: 'Uruguay', flag: '🇺🇾' },
    { name: 'Lucas Alario', pos: 'ST', rating: 88 },
    { name: 'Rodrigo Mora', pos: 'ST', rating: 88, nation: 'Uruguay', flag: '🇺🇾' },
    { name: 'Matías Kranevitter', pos: 'DM', rating: 89 },
    { name: 'Leonardo Ponzio', pos: 'DM', rating: 89 },
    { name: 'Gonzalo Martínez', pos: 'LW', rating: 87 },
    { name: 'Gabriel Mercado', pos: 'RB', rating: 87 },
    { name: 'Jonatan Maidana', pos: 'CB', rating: 89 },
    { name: 'Ramiro Funes Mori', pos: 'CB', rating: 88 },
    { name: 'Leonel Vangioni', pos: 'LB', rating: 88 }
  ]},
  { y: '2018', tag: 'Copa Eterna Madrid 2018', s: [
    { name: 'Gonzalo Martínez', pos: 'AM', rating: 92, bonus: 1 },
    { name: 'Lucas Pratto', pos: 'ST', rating: 90 },
    { name: 'Juan Fernando Quintero', pos: 'AM', rating: 92, nation: 'Colombia', flag: '🇨🇴' },
    { name: 'Exequiel Palacios', pos: 'CM', rating: 89 },
    { name: 'Enzo Pérez', pos: 'CM', rating: 91 },
    { name: 'Leonardo Ponzio', pos: 'DM', rating: 89 },
    { name: 'Gonzalo Montiel', pos: 'RB', rating: 88 },
    { name: 'Jonatan Maidana', pos: 'CB', rating: 89 },
    { name: 'Javier Pinola', pos: 'CB', rating: 89 },
    { name: 'Milton Casco', pos: 'LB', rating: 88 },
    { name: 'Franco Armani', pos: 'GK', rating: 93 }
  ]}
].forEach(i => add(buildTeam(`riv_${i.y}`, 'CA River Plate', 'RIV', 'champions', i.y, i.tag, '🇦🇷', 'Argentina', 'legendary', i.s)));

// 5. SANTOS FC (1962, 1963, 2011)
[
  { y: '1962', tag: 'Intercontinental 1962', s: [
    { name: 'Pelé', pos: 'ST', sec: ['AM'], rating: 99, bonus: 1 },
    { name: 'Coutinho', pos: 'ST', rating: 93 },
    { name: 'Pepe', pos: 'LW', rating: 92 },
    { name: 'Dorval', pos: 'RW', rating: 90 },
    { name: 'Mengálvio', pos: 'AM', rating: 89 },
    { name: 'Zito', pos: 'DM', rating: 93 },
    { name: 'Lima', pos: 'RB', rating: 88 },
    { name: 'Mauro Ramos', pos: 'CB', rating: 91 },
    { name: 'Calvet', pos: 'CB', rating: 88 },
    { name: 'Dalmo', pos: 'LB', rating: 88 },
    { name: 'Gylmar', pos: 'GK', rating: 93 }
  ]},
  { y: '1963', tag: 'Bicampeón Mundial 1963', s: [
    { name: 'Pelé', pos: 'ST', rating: 99, bonus: 1 },
    { name: 'Coutinho', pos: 'ST', rating: 93 },
    { name: 'Pepe', pos: 'LW', rating: 92 },
    { name: 'Dorval', pos: 'RW', rating: 90 },
    { name: 'Almir Pernambuquinho', pos: 'AM', rating: 89 },
    { name: 'Zito', pos: 'DM', rating: 93 },
    { name: 'Ismael', pos: 'RB', rating: 87 },
    { name: 'Mauro Ramos', pos: 'CB', rating: 91 },
    { name: 'Harold', pos: 'CB', rating: 86 },
    { name: 'Dalmo', pos: 'LB', rating: 88 },
    { name: 'Gylmar', pos: 'GK', rating: 93 }
  ]},
  { y: '2011', tag: 'Libertadores 2011', s: [
    { name: 'Neymar Jr', pos: 'LW', sec: ['ST', 'AM'], rating: 96, bonus: 1 },
    { name: 'Paulo Henrique Ganso', pos: 'AM', rating: 90 },
    { name: 'Elano', pos: 'CM', rating: 88 },
    { name: 'Danilo', pos: 'RB', sec: ['CM'], rating: 88 },
    { name: 'Alex Sandro', pos: 'LB', rating: 88 },
    { name: 'Arouca', pos: 'DM', rating: 87 },
    { name: 'Adriano', pos: 'DM', rating: 84 },
    { name: 'Edu Dracena', pos: 'CB', rating: 87 },
    { name: 'Durval', pos: 'CB', rating: 87 },
    { name: 'Zé Eduardo (Zé Love)', pos: 'ST', rating: 84 },
    { name: 'Rafael Cabral', pos: 'GK', rating: 87 }
  ]}
].forEach(i => add(buildTeam(`san_${i.y}`, 'Santos FC', 'SAN', 'champions', i.y, i.tag, '🇧🇷', 'Brasil', 'legendary', i.s)));

// 6. SÃO PAULO FC (1992, 1993, 2005)
[
  { y: '1992', tag: 'Intercontinental 1992', s: [
    { name: 'Raí', pos: 'AM', rating: 95, bonus: 1 },
    { name: 'Müller', pos: 'ST', rating: 92 },
    { name: 'Palhinha', pos: 'ST', rating: 90 },
    { name: 'Cafu', pos: 'RB', sec: ['RW'], rating: 94 },
    { name: 'Pintado', pos: 'DM', rating: 88 },
    { name: 'Toninho Cerezo', pos: 'CM', rating: 91 },
    { name: 'Ronaldo Luiz', pos: 'LB', rating: 86 },
    { name: 'Adílson', pos: 'CB', rating: 87 },
    { name: 'Ronaldão', pos: 'CB', rating: 88 },
    { name: 'Vítor', pos: 'RB', rating: 85 },
    { name: 'Zetti', pos: 'GK', rating: 91 }
  ]},
  { y: '1993', tag: 'Bicampeón del Mundo 1993', s: [
    { name: 'Müller', pos: 'ST', rating: 93, bonus: 1 },
    { name: 'Palhinha', pos: 'ST', rating: 91 },
    { name: 'Cafu', pos: 'RB', rating: 94 },
    { name: 'Leonardo', pos: 'LB', sec: ['AM'], rating: 92 },
    { name: 'Toninho Cerezo', pos: 'CM', rating: 92 },
    { name: 'Dinho', pos: 'DM', rating: 88 },
    { name: 'Doriva', pos: 'DM', rating: 87 },
    { name: 'Válber', pos: 'CB', rating: 88 },
    { name: 'Ronaldão', pos: 'CB', rating: 89 },
    { name: 'Gilmar', pos: 'CB', rating: 86 },
    { name: 'Zetti', pos: 'GK', rating: 92 }
  ]},
  { y: '2005', tag: 'Campeón Mundial de Clubes 2005', s: [
    { name: 'Rogério Ceni', pos: 'GK', rating: 94, bonus: 1 },
    { name: 'Cicinho', pos: 'RB', rating: 90 },
    { name: 'Diego Lugano', pos: 'CB', rating: 92, nation: 'Uruguay', flag: '🇺🇾' },
    { name: 'Fabão', pos: 'CB', rating: 87 },
    { name: 'Edcarlos', pos: 'CB', rating: 85 },
    { name: 'Júnior', pos: 'LB', rating: 88 },
    { name: 'Mineiro', pos: 'DM', rating: 90 },
    { name: 'Josué', pos: 'DM', rating: 89 },
    { name: 'Danilo', pos: 'AM', rating: 89 },
    { name: 'Amoroso', pos: 'ST', rating: 91 },
    { name: 'Aloísio Chulapa', pos: 'ST', rating: 87 }
  ]}
].forEach(i => add(buildTeam(`spfc_${i.y}`, 'São Paulo FC', 'SAO', 'champions', i.y, i.tag, '🇧🇷', 'Brasil', 'legendary', i.s)));

// 7. CLUB NACIONAL DE FOOTBALL (1971, 1980, 1988)
[
  { y: '1971', tag: 'Campeón del Mundo 1971', s: [
    { name: 'Luis Artime', pos: 'ST', rating: 94, nation: 'Argentina', flag: '🇦🇷', bonus: 1 },
    { name: 'Julio César Morales', pos: 'LW', rating: 90 },
    { name: 'Luis Cubilla', pos: 'RW', rating: 91 },
    { name: 'Víctor Espárrago', pos: 'CM', rating: 90 },
    { name: 'Julio Montero Castillo', pos: 'DM', rating: 89 },
    { name: 'Ildo Maneiro', pos: 'AM', rating: 89 },
    { name: 'Atilio Ancheta', pos: 'CB', rating: 91 },
    { name: 'Juan Masnik', pos: 'CB', rating: 88 },
    { name: 'Luis Ubiña', pos: 'RB', rating: 88 },
    { name: 'Juan Carlos Blanco', pos: 'LB', rating: 87 },
    { name: 'Manga', pos: 'GK', rating: 92, nation: 'Brasil', flag: '🇧🇷' }
  ]},
  { y: '1980', tag: 'Intercontinental 1980', s: [
    { name: 'Waldemar Victorino', pos: 'ST', rating: 92, bonus: 1 },
    { name: 'Hugo De León', pos: 'CB', rating: 93 },
    { name: 'Arsenio Luzardo', pos: 'AM', rating: 88 },
    { name: 'Víctor Espárrago', pos: 'CM', rating: 88 },
    { name: 'Alberto Bica', pos: 'RW', rating: 87 },
    { name: 'Dardo Pérez', pos: 'LW', rating: 86 },
    { name: 'Eduardo de la Peña', pos: 'DM', rating: 87 },
    { name: 'José Hermes Moreira', pos: 'RB', rating: 87 },
    { name: 'Juan Carlos Blanco', pos: 'CB', rating: 87 },
    { name: 'Washington González', pos: 'LB', rating: 87 },
    { name: 'Rodolfo Rodríguez', pos: 'GK', rating: 92 }
  ]},
  { y: '1988', tag: 'Campeón Intercontinental 1988', s: [
    { name: 'Hugo De León', pos: 'CB', rating: 93, bonus: 1 },
    { name: 'Santiago Ostolaza', pos: 'DM', rating: 90 },
    { name: 'William Castro', pos: 'LW', rating: 88 },
    { name: 'Ernesto Vargas', pos: 'RW', rating: 88 },
    { name: 'Daniel Revelez', pos: 'CB', rating: 88 },
    { name: 'Jorge Cardaccio', pos: 'CM', rating: 87 },
    { name: 'Tony Gómez', pos: 'RB', rating: 87 },
    { name: 'José Pintos Saldanha', pos: 'LB', rating: 87 },
    { name: 'Juan Carlos de Lima', pos: 'ST', rating: 88 },
    { name: 'Yubert Lemos', pos: 'AM', rating: 87 },
    { name: 'Jorge Seré', pos: 'GK', rating: 91 }
  ]}
].forEach(i => add(buildTeam(`nac_${i.y}`, 'Club Nacional de Football', 'NAC', 'champions', i.y, i.tag, '🇺🇾', 'Uruguay', 'legendary', i.s)));

// 8. FLAMENGO (1981, 2019, 2022)
[
  { y: '1981', tag: 'Mundial de Clubes 1981', s: [
    { name: 'Zico', pos: 'AM', rating: 98, bonus: 1 },
    { name: 'Nunes', pos: 'ST', rating: 91 },
    { name: 'Tita', pos: 'RW', rating: 90 },
    { name: 'Lico', pos: 'LW', rating: 88 },
    { name: 'Adílio', pos: 'CM', rating: 91 },
    { name: 'Andrade', pos: 'DM', rating: 91 },
    { name: 'Júnior', pos: 'LB', rating: 94 },
    { name: 'Leandro', pos: 'RB', rating: 93 },
    { name: 'Mozer', pos: 'CB', rating: 90 },
    { name: 'Marinho', pos: 'CB', rating: 87 },
    { name: 'Raul Plassmann', pos: 'GK', rating: 90 }
  ]},
  { y: '2019', tag: 'Libertadores 2019', s: [
    { name: 'Gabriel Barbosa (Gabigol)', pos: 'ST', rating: 92, bonus: 1 },
    { name: 'Bruno Henrique', pos: 'LW', rating: 91 },
    { name: 'Giorgian De Arrascaeta', pos: 'AM', rating: 92, nation: 'Uruguay', flag: '🇺🇾' },
    { name: 'Éverton Ribeiro', pos: 'RW', rating: 89 },
    { name: 'Gerson', pos: 'CM', rating: 89 },
    { name: 'Willian Arão', pos: 'DM', rating: 86 },
    { name: 'Rafinha', pos: 'RB', rating: 88 },
    { name: 'Rodrigo Caio', pos: 'CB', rating: 87 },
    { name: 'Pablo Marí', pos: 'CB', rating: 86, nation: 'España', flag: '🇪🇸' },
    { name: 'Filipe Luís', pos: 'LB', rating: 89 },
    { name: 'Diego Alves', pos: 'GK', rating: 89 }
  ]},
  { y: '2022', tag: 'Libertadores 2022', s: [
    { name: 'Pedro', pos: 'ST', rating: 91, bonus: 1 },
    { name: 'Gabriel Barbosa', pos: 'ST', rating: 91 },
    { name: 'Giorgian De Arrascaeta', pos: 'AM', rating: 92, nation: 'Uruguay', flag: '🇺🇾' },
    { name: 'Éverton Ribeiro', pos: 'RW', rating: 88 },
    { name: 'João Gomes', pos: 'CM', rating: 87 },
    { name: 'Thiago Maia', pos: 'DM', rating: 85 },
    { name: 'Rodinei', pos: 'RB', rating: 86 },
    { name: 'David Luiz', pos: 'CB', rating: 88 },
    { name: 'Léo Pereira', pos: 'CB', rating: 86 },
    { name: 'Filipe Luís', pos: 'LB', rating: 87 },
    { name: 'Santos', pos: 'GK', rating: 87 }
  ]}
].forEach(i => add(buildTeam(`fla_${i.y}`, 'Flamengo', 'FLA', 'champions', i.y, i.tag, '🇧🇷', 'Brasil', 'legendary', i.s)));

// 9. PALMEIRAS (1999, 2020, 2021)
[
  { y: '1999', tag: 'Libertadores 1999', s: [
    { name: 'Marcos', pos: 'GK', rating: 93, bonus: 1 },
    { name: 'Alex', pos: 'AM', rating: 93 },
    { name: 'Paulo Nunes', pos: 'RW', rating: 89 },
    { name: 'Oséas', pos: 'ST', rating: 88 },
    { name: 'Zinho', pos: 'LW', rating: 90 },
    { name: 'César Sampaio', pos: 'DM', rating: 91 },
    { name: 'Rogério', pos: 'CM', rating: 87 },
    { name: 'Francisco Arce', pos: 'RB', rating: 91, nation: 'Paraguay', flag: '🇵🇾' },
    { name: 'Roque Júnior', pos: 'CB', rating: 89 },
    { name: 'Júnior Baiano', pos: 'CB', rating: 89 },
    { name: 'Junior', pos: 'LB', rating: 89 }
  ]},
  { y: '2020', tag: 'Libertadores 2020', s: [
    { name: 'Gustavo Gómez', pos: 'CB', rating: 90, nation: 'Paraguay', flag: '🇵🇾', bonus: 1 },
    { name: 'Raphael Veiga', pos: 'AM', rating: 89 },
    { name: 'Rony', pos: 'RW', rating: 88 },
    { name: 'Luiz Adriano', pos: 'ST', rating: 86 },
    { name: 'Danilo', pos: 'DM', rating: 88 },
    { name: 'Zé Rafael', pos: 'CM', rating: 87 },
    { name: 'Gabriel Menino', pos: 'RB', rating: 85 },
    { name: 'Luan', pos: 'CB', rating: 86 },
    { name: 'Matías Viña', pos: 'LB', rating: 87, nation: 'Uruguay', flag: '🇺🇾' },
    { name: 'Willian', pos: 'LW', rating: 85 },
    { name: 'Weverton', pos: 'GK', rating: 91 }
  ]},
  { y: '2021', tag: 'Bicampeón de América 2021', s: [
    { name: 'Raphael Veiga', pos: 'AM', rating: 91, bonus: 1 },
    { name: 'Dudu', pos: 'LW', rating: 90 },
    { name: 'Rony', pos: 'RW', rating: 89 },
    { name: 'Deyverson', pos: 'ST', rating: 84 },
    { name: 'Danilo', pos: 'DM', rating: 89 },
    { name: 'Zé Rafael', pos: 'CM', rating: 88 },
    { name: 'Marcos Rocha', pos: 'RB', rating: 86 },
    { name: 'Gustavo Gómez', pos: 'CB', rating: 91, nation: 'Paraguay', flag: '🇵🇾' },
    { name: 'Luan', pos: 'CB', rating: 86 },
    { name: 'Joaquín Piquerez', pos: 'LB', rating: 87, nation: 'Uruguay', flag: '🇺🇾' },
    { name: 'Weverton', pos: 'GK', rating: 92 }
  ]}
].forEach(i => add(buildTeam(`pal_${i.y}`, 'Palmeiras', 'PAL', 'champions', i.y, i.tag, '🇧🇷', 'Brasil', 'legendary', i.s)));

// 10. GRÊMIO (1983, 1995, 2017)
[
  { y: '1983', tag: 'Campeón del Mundo 1983', s: [
    { name: 'Renato Gaúcho', pos: 'RW', rating: 94, bonus: 1 },
    { name: 'Mário Sérgio', pos: 'AM', rating: 90 },
    { name: 'Tarciso', pos: 'ST', rating: 89 },
    { name: 'Paulo Cézar Caju', pos: 'LW', rating: 89 },
    { name: 'China', pos: 'DM', rating: 88 },
    { name: 'Osvaldo', pos: 'CM', rating: 87 },
    { name: 'Paulo Roberto', pos: 'RB', rating: 87 },
    { name: 'Baidek', pos: 'CB', rating: 88 },
    { name: 'Hugo De León', pos: 'CB', rating: 93, nation: 'Uruguay', flag: '🇺🇾' },
    { name: 'Casemiro', pos: 'LB', rating: 86 },
    { name: 'Mazaropi', pos: 'GK', rating: 89 }
  ]},
  { y: '1995', tag: 'Libertadores 1995', s: [
    { name: 'Mário Jardel', pos: 'ST', rating: 93, bonus: 1 },
    { name: 'Paulo Nunes', pos: 'RW', rating: 90 },
    { name: 'Arílson', pos: 'AM', rating: 87 },
    { name: 'Carlos Miguel', pos: 'LW', rating: 86 },
    { name: 'Dinho', pos: 'DM', rating: 89 },
    { name: 'Luís Carlos Goiano', pos: 'CM', rating: 88 },
    { name: 'Francisco Arce', pos: 'RB', rating: 91, nation: 'Paraguay', flag: '🇵🇾' },
    { name: 'Catalino Rivarola', pos: 'CB', rating: 89, nation: 'Paraguay', flag: '🇵🇾' },
    { name: 'Adílson Batista', pos: 'CB', rating: 89 },
    { name: 'Roger Machado', pos: 'LB', rating: 88 },
    { name: 'Danrlei', pos: 'GK', rating: 91 }
  ]},
  { y: '2017', tag: 'Libertadores 2017', s: [
    { name: 'Luan', pos: 'AM', rating: 91, bonus: 1 },
    { name: 'Arthur Melo', pos: 'CM', rating: 90 },
    { name: 'Pedro Geromel', pos: 'CB', rating: 91 },
    { name: 'Walter Kannemann', pos: 'CB', rating: 90, nation: 'Argentina', flag: '🇦🇷' },
    { name: 'Lucas Barrios', pos: 'ST', rating: 87, nation: 'Paraguay', flag: '🇵🇾' },
    { name: 'Fernandinho', pos: 'LW', rating: 86 },
    { name: 'Ramiro', pos: 'RW', rating: 86 },
    { name: 'Jailson', pos: 'DM', rating: 85 },
    { name: 'Edílson', pos: 'RB', rating: 87 },
    { name: 'Bruno Cortez', pos: 'LB', rating: 85 },
    { name: 'Marcelo Grohe', pos: 'GK', rating: 92 }
  ]}
].forEach(i => add(buildTeam(`gre_${i.y}`, 'Grêmio', 'GRE', 'champions', i.y, i.tag, '🇧🇷', 'Brasil', 'legendary', i.s)));

// 11. CRUZEIRO (1976, 1997)
[
  { y: '1976', tag: 'Libertadores 1976', s: [
    { name: 'Jairzinho', pos: 'RW', rating: 94, bonus: 1 },
    { name: 'Palhinha', pos: 'ST', rating: 92 },
    { name: 'Joãozinho', pos: 'LW', rating: 90 },
    { name: 'Zé Carlos', pos: 'CM', rating: 89 },
    { name: 'Piazza', pos: 'DM', rating: 91 },
    { name: 'Eduardo Amorim', pos: 'AM', rating: 87 },
    { name: 'Nelinho', pos: 'RB', rating: 93 },
    { name: 'Morais', pos: 'CB', rating: 87 },
    { name: 'Darci Menezes', pos: 'CB', rating: 87 },
    { name: 'Vanderlei', pos: 'LB', rating: 86 },
    { name: 'Raul Plassmann', pos: 'GK', rating: 90 }
  ]},
  { y: '1997', tag: 'Libertadores 1997', s: [
    { name: 'Dida', pos: 'GK', rating: 93, bonus: 1 },
    { name: 'Marcelo Ramos', pos: 'ST', rating: 89 },
    { name: 'Elivélton', pos: 'LW', rating: 88 },
    { name: 'Palhinha', pos: 'AM', rating: 89 },
    { name: 'Ricardinho', pos: 'CM', rating: 88 },
    { name: 'Fabinho', pos: 'DM', rating: 87 },
    { name: 'Donizete Oliveira', pos: 'DM', rating: 87 },
    { name: 'Vitor', pos: 'RB', rating: 86 },
    { name: 'Wilson Gottardo', pos: 'CB', rating: 89 },
    { name: 'Gélson Baresi', pos: 'CB', rating: 86 },
    { name: 'Nonato', pos: 'LB', rating: 88 }
  ]}
].forEach(i => add(buildTeam(`cru_${i.y}`, 'Cruzeiro', 'CRU', 'champions', i.y, i.tag, '🇧🇷', 'Brasil', 'legendary', i.s)));

// 12. ESTUDIANTES DE LA PLATA (1968, 1969, 1970, 2009)
[
  { y: '1968', tag: 'Tricampeón Mundial 1968', s: [
    { name: 'Juan Ramón Verón', pos: 'LW', sec: ['ST'], rating: 94, bonus: 1 },
    { name: 'Carlos Bilardo', pos: 'CM', rating: 90 },
    { name: 'Marcos Conigliaro', pos: 'ST', rating: 88 },
    { name: 'Felipe Ribaudo', pos: 'RW', rating: 87 },
    { name: 'Carlos Pachamé', pos: 'DM', rating: 90 },
    { name: 'Eduardo Flores', pos: 'AM', rating: 88 },
    { name: 'Oscar Malbernat', pos: 'RB', rating: 89 },
    { name: 'Alberto Aguirre Suárez', pos: 'CB', rating: 89 },
    { name: 'Raúl Madero', pos: 'CB', rating: 89 },
    { name: 'José Hugo Medina', pos: 'LB', rating: 87 },
    { name: 'Alberto Poletti', pos: 'GK', rating: 91 }
  ]},
  { y: '1969', tag: 'Bicampeón de América 1969', s: [
    { name: 'Juan Ramón Verón', pos: 'LW', rating: 94, bonus: 1 },
    { name: 'Carlos Bilardo', pos: 'CM', rating: 90 },
    { name: 'Marcos Conigliaro', pos: 'ST', rating: 89 },
    { name: 'Christian Rudzki', pos: 'RW', rating: 86 },
    { name: 'Carlos Pachamé', pos: 'DM', rating: 90 },
    { name: 'Eduardo Flores', pos: 'AM', rating: 89 },
    { name: 'Oscar Malbernat', pos: 'RB', rating: 89 },
    { name: 'Alberto Aguirre Suárez', pos: 'CB', rating: 89 },
    { name: 'Raúl Madero', pos: 'CB', rating: 89 },
    { name: 'José Hugo Medina', pos: 'LB', rating: 87 },
    { name: 'Alberto Poletti', pos: 'GK', rating: 91 }
  ]},
  { y: '1970', tag: 'Tricampeón de América 1970', s: [
    { name: 'Juan Ramón Verón', pos: 'LW', rating: 94, bonus: 1 },
    { name: 'Carlos Bilardo', pos: 'CM', rating: 90 },
    { name: 'Marcos Conigliaro', pos: 'ST', rating: 88 },
    { name: 'Pedro Verde', pos: 'RW', rating: 86 },
    { name: 'Carlos Pachamé', pos: 'DM', rating: 90 },
    { name: 'Juan Echecopar', pos: 'AM', rating: 87 },
    { name: 'Oscar Malbernat', pos: 'RB', rating: 89 },
    { name: 'Alberto Aguirre Suárez', pos: 'CB', rating: 89 },
    { name: 'Hugo Spadaro', pos: 'CB', rating: 87 },
    { name: 'José Hugo Medina', pos: 'LB', rating: 87 },
    { name: 'Néstor Errea', pos: 'GK', rating: 88 }
  ]},
  { y: '2009', tag: 'Libertadores 2009', s: [
    { name: 'Juan Sebastián Verón', pos: 'CM', sec: ['AM'], rating: 95, bonus: 1 },
    { name: 'Mauro Boselli', pos: 'ST', rating: 91 },
    { name: 'Gastón Fernández', pos: 'ST', rating: 88 },
    { name: 'Enzo Pérez', pos: 'RW', rating: 89 },
    { name: 'Rodrigo Braña', pos: 'DM', rating: 90 },
    { name: 'Leandro Benítez', pos: 'LW', rating: 87 },
    { name: 'Christian Cellay', pos: 'RB', rating: 87 },
    { name: 'Rolando Schiavi', pos: 'CB', rating: 89 },
    { name: 'Leandro Desábato', pos: 'CB', rating: 89 },
    { name: 'Germán Ré', pos: 'LB', rating: 87 },
    { name: 'Mariano Andújar', pos: 'GK', rating: 91 }
  ]}
].forEach(i => add(buildTeam(`est_${i.y}`, 'Estudiantes de La Plata', 'EST', 'champions', i.y, i.tag, '🇦🇷', 'Argentina', 'legendary', i.s)));

// 13. SAN LORENZO DE ALMAGRO (2014)
add(buildTeam('slo_2014', 'San Lorenzo de Almagro', 'SLO', 'champions', '2014', 'Libertadores 2014', '🇦🇷', 'Argentina', 'legendary', [
  { name: 'Leandro Romagnoli', pos: 'AM', rating: 90, bonus: 1 },
  { name: 'Mauro Matos', pos: 'ST', rating: 88 },
  { name: 'Ángel Correa', pos: 'RW', rating: 89 },
  { name: 'Ignacio Piatti', pos: 'LW', rating: 90 },
  { name: 'Juan Mercier', pos: 'DM', rating: 89 },
  { name: 'Néstor Ortigoza', pos: 'CM', rating: 91, nation: 'Paraguay', flag: '🇵🇾' },
  { name: 'Julio Buffarini', pos: 'RB', rating: 88 },
  { name: 'Fabricio Fontanini', pos: 'CB', rating: 86 },
  { name: 'Santiago Gentiletti', pos: 'CB', rating: 88 },
  { name: 'Emmanuel Mas', pos: 'LB', rating: 87 },
  { name: 'Sebastián Torrico', pos: 'GK', rating: 91 }
]));

// 14. CORINTHIANS (2012)
add(buildTeam('cor_2012', 'Corinthians', 'COR', 'champions', '2012', 'Mundial de Clubes 2012', '🇧🇷', 'Brasil', 'legendary', [
  { name: 'Paolo Guerrero', pos: 'ST', rating: 92, nation: 'Perú', flag: '🇵🇪', bonus: 1 },
  { name: 'Emerson Sheik', pos: 'LW', rating: 90 },
  { name: 'Jorge Henrique', pos: 'RW', rating: 87 },
  { name: 'Danilo', pos: 'AM', rating: 89 },
  { name: 'Paulinho', pos: 'CM', rating: 92 },
  { name: 'Ralf', pos: 'DM', rating: 90 },
  { name: 'Alessandro', pos: 'RB', rating: 87 },
  { name: 'Chicão', pos: 'CB', rating: 88 },
  { name: 'Paulo André', pos: 'CB', rating: 88 },
  { name: 'Fábio Santos', pos: 'LB', rating: 88 },
  { name: 'Cássio', pos: 'GK', rating: 94 }
]));

// 15. OLIMPIA (1979, 1990, 2002)
[
  { y: '1979', tag: 'Campeón del Mundo 1979', s: [
    { name: 'Hugo Talavera', pos: 'AM', rating: 91, bonus: 1 },
    { name: 'Evaristo Isasi', pos: 'RW', rating: 89 },
    { name: 'Adriano Samaniego', pos: 'ST', rating: 88 },
    { name: 'Osvaldo Aquino', pos: 'LW', rating: 87 },
    { name: 'Carlos Kiese', pos: 'DM', rating: 90 },
    { name: 'Jorge Guasch', pos: 'CM', rating: 88 },
    { name: 'Alicio Solalinde', pos: 'RB', rating: 89 },
    { name: 'Roberto Paredes', pos: 'CB', rating: 89 },
    { name: 'Rubén Giménez', pos: 'CB', rating: 87 },
    { name: 'Alberto Piazza', pos: 'LB', rating: 88, nation: 'Argentina', flag: '🇦🇷' },
    { name: 'Éver Hugo Almeida', pos: 'GK', rating: 92 }
  ]},
  { y: '1990', tag: 'Bicampeón de América 1990', s: [
    { name: 'Raúl Vicente Amarilla', pos: 'ST', rating: 93, bonus: 1 },
    { name: 'Adriano Samaniego', pos: 'ST', rating: 90 },
    { name: 'Gabriel González', pos: 'AM', rating: 90 },
    { name: 'Fermín Balbuena', pos: 'DM', rating: 88 },
    { name: 'Jorge Guasch', pos: 'DM', rating: 89 },
    { name: 'Adolfo Jara Heyn', pos: 'CM', rating: 87 },
    { name: 'Mario Ramírez', pos: 'RB', rating: 87 },
    { name: 'Juan Zacarías Ramírez', pos: 'CB', rating: 88 },
    { name: 'Remigio Fernández', pos: 'CB', rating: 88 },
    { name: 'Silvio Suárez', pos: 'LB', rating: 88 },
    { name: 'Éver Hugo Almeida', pos: 'GK', rating: 93 }
  ]},
  { y: '2002', tag: 'Centenario 2002', s: [
    { name: 'Sergio Órteman', pos: 'CM', rating: 91, nation: 'Uruguay', flag: '🇺🇾', bonus: 1 },
    { name: 'Rodrigo López', pos: 'ST', rating: 89, nation: 'Uruguay', flag: '🇺🇾' },
    { name: 'Miguel Ángel Benítez', pos: 'LW', rating: 89 },
    { name: 'Gastón Córdoba', pos: 'AM', rating: 88, nation: 'Argentina', flag: '🇦🇷' },
    { name: 'Julio César Enciso', pos: 'DM', rating: 90 },
    { name: 'Victor Quintana', pos: 'CM', rating: 87 },
    { name: 'Néstor Isasi', pos: 'RB', rating: 87 },
    { name: 'Julio César Cáceres', pos: 'CB', rating: 89 },
    { name: 'Pedro Sarabia', pos: 'CB', rating: 88 },
    { name: 'Denis Caniza', pos: 'LB', rating: 88 },
    { name: 'Ricardo Tavarelli', pos: 'GK', rating: 91 }
  ]}
].forEach(i => add(buildTeam(`oli_${i.y}`, 'Olimpia', 'OLI', 'champions', i.y, i.tag, '🇵🇾', 'Paraguay', 'legendary', i.s)));

// 16. ATLÉTICO NACIONAL (1989, 2016)
[
  { y: '1989', tag: 'Puros Criollos 1989', s: [
    { name: 'René Higuita', pos: 'GK', rating: 93, bonus: 1 },
    { name: 'Andrés Escobar', pos: 'CB', rating: 91 },
    { name: 'Albeiro Usuriaga', pos: 'ST', rating: 90 },
    { name: 'Leonel Álvarez', pos: 'DM', rating: 91 },
    { name: 'Alexis García', pos: 'AM', rating: 90 },
    { name: 'John Jairo Tréllez', pos: 'ST', rating: 89 },
    { name: 'Jaime Arango', pos: 'LW', rating: 87 },
    { name: 'Luis Carlos Perea', pos: 'CB', rating: 89 },
    { name: 'Gildardo Gómez', pos: 'LB', rating: 88 },
    { name: 'Luis Fernando Herrera', pos: 'RB', rating: 88 },
    { name: 'Ricardo Pérez', pos: 'CM', rating: 86 }
  ]},
  { y: '2016', tag: 'Libertadores 2016', s: [
    { name: 'Franco Armani', pos: 'GK', rating: 93, nation: 'Argentina', flag: '🇦🇷', bonus: 1 },
    { name: 'Miguel Borja', pos: 'ST', rating: 90 },
    { name: 'Marlos Moreno', pos: 'LW', rating: 88 },
    { name: 'Orlando Berrío', pos: 'RW', rating: 88 },
    { name: 'Macnelly Torres', pos: 'AM', rating: 90 },
    { name: 'Alexander Mejía', pos: 'DM', rating: 89 },
    { name: 'Alejandro Guerra', pos: 'CM', rating: 89, nation: 'Venezuela', flag: '🇻🇪' },
    { name: 'Daniel Bocanegra', pos: 'RB', rating: 88 },
    { name: 'Davinson Sánchez', pos: 'CB', rating: 90 },
    { name: 'Alexis Henríquez', pos: 'CB', rating: 88 },
    { name: 'Farid Díaz', pos: 'LB', rating: 87 }
  ]}
].forEach(i => add(buildTeam(`atn_${i.y}`, 'Atlético Nacional', 'NAL', 'champions', i.y, i.tag, '🇨🇴', 'Colombia', 'legendary', i.s)));

// 17. COLO-COLO (1991)
add(buildTeam('col_1991', 'Colo-Colo', 'COL', 'champions', '1991', 'Libertadores 1991', '🇨🇱', 'Chile', 'legendary', [
  { name: 'Marcelo Barticciotto', pos: 'RW', rating: 92, nation: 'Argentina', flag: '🇦🇷', bonus: 1 },
  { name: 'Patricio Yáñez', pos: 'LW', rating: 90 },
  { name: 'Rubén Martínez', pos: 'ST', rating: 89 },
  { name: 'Jaime Pizarro', pos: 'CM', rating: 91 },
  { name: 'Eduardo Vilches', pos: 'DM', rating: 89 },
  { name: 'Gabriel Mendoza', pos: 'RB', rating: 90 },
  { name: 'Lizardo Garrido', pos: 'CB', rating: 90 },
  { name: 'Miguel Ramírez', pos: 'CB', rating: 89 },
  { name: 'Javier Margas', pos: 'CB', rating: 89 },
  { name: 'Juan Carlos Peralta', pos: 'LB', rating: 87 },
  { name: 'Daniel Morón', pos: 'GK', rating: 90, nation: 'Argentina', flag: '🇦🇷' }
]));

// 18. INTERNACIONAL DE PORTO ALEGRE (2006, 2010)
[
  { y: '2006', tag: 'Mundial de Clubes 2006', s: [
    { name: 'Fernandão', pos: 'ST', rating: 92, bonus: 1 },
    { name: 'Alexandre Pato', pos: 'ST', rating: 89 },
    { name: 'Iarley', pos: 'AM', rating: 90 },
    { name: 'Alex', pos: 'LW', rating: 89 },
    { name: 'Wellington Monteiro', pos: 'DM', rating: 87 },
    { name: 'Edinho', pos: 'DM', rating: 87 },
    { name: 'Ceará', pos: 'RB', rating: 88 },
    { name: 'Índio', pos: 'CB', rating: 89 },
    { name: 'Fabiano Eller', pos: 'CB', rating: 88 },
    { name: 'Rubens Cardoso', pos: 'LB', rating: 86 },
    { name: 'Clemer', pos: 'GK', rating: 90 }
  ]},
  { y: '2010', tag: 'Bicampeón de América 2010', s: [
    { name: 'Andrés D\'Alessandro', pos: 'AM', rating: 93, nation: 'Argentina', flag: '🇦🇷', bonus: 1 },
    { name: 'Rafael Sóbis', pos: 'ST', rating: 90 },
    { name: 'Giuliano', pos: 'AM', rating: 89 },
    { name: 'Tinga', pos: 'CM', rating: 88 },
    { name: 'Pablo Guiñazú', pos: 'DM', rating: 90, nation: 'Argentina', flag: '🇦🇷' },
    { name: 'Sandro', pos: 'DM', rating: 88 },
    { name: 'Nei', pos: 'RB', rating: 86 },
    { name: 'Bolívar', pos: 'CB', rating: 88 },
    { name: 'Índio', pos: 'CB', rating: 88 },
    { name: 'Kléber', pos: 'LB', rating: 88 },
    { name: 'Renan', pos: 'GK', rating: 88 }
  ]}
].forEach(i => add(buildTeam(`int_${i.y}`, 'Internacional de Porto Alegre', 'INT', 'champions', i.y, i.tag, '🇧🇷', 'Brasil', 'legendary', i.s)));

// 19. VÉLEZ SARSFIELD (1994)
add(buildTeam('vel_1994', 'Vélez Sarsfield', 'VEL', 'champions', '1994', 'Campeón del Mundo 1994', '🇦🇷', 'Argentina', 'legendary', [
  { name: 'José Luis Chilavert', pos: 'GK', rating: 94, nation: 'Paraguay', flag: '🇵🇾', bonus: 1 },
  { name: 'Omar Asad', pos: 'ST', rating: 92 },
  { name: 'José Flores', pos: 'ST', rating: 90 },
  { name: 'Christian Bassedas', pos: 'CM', rating: 90 },
  { name: 'José Basualdo', pos: 'RW', rating: 89 },
  { name: 'Marcelo Gómez', pos: 'DM', rating: 89 },
  { name: 'Roberto Pompei', pos: 'LW', rating: 87 },
  { name: 'Flavio Zandoná', pos: 'RB', rating: 88 },
  { name: 'Roberto Trotta', pos: 'CB', rating: 90 },
  { name: 'Víctor Sotomayor', pos: 'CB', rating: 88 },
  { name: 'Raúl Cardozo', pos: 'LB', rating: 88 }
]));

console.log(`Generated ${LATAM_CLUBS.length} LATAM clubs.`);
