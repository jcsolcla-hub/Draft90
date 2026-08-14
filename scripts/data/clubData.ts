export interface ClubYearConfig {
  club: string;
  shortCode: string;
  country: string;
  flag: string;
  years: {
    year: string;
    tag: string;
    tier: 'legendary' | 'gold' | 'silver';
    players: Array<{
      name: string;
      pos: 'GK' | 'RB' | 'CB' | 'LB' | 'DM' | 'CM' | 'AM' | 'RW' | 'LW' | 'ST';
      sec?: ('GK' | 'RB' | 'CB' | 'LB' | 'DM' | 'CM' | 'AM' | 'RW' | 'LW' | 'ST')[];
      rating: number;
      nation?: string;
      nationCode?: string;
      flag?: string;
      bonus?: number;
    }>;
  }[];
}

export const CLUBS_CONFIG: ClubYearConfig[] = [
  // 1. CA Peñarol (Uruguay) — 1960, 1961, 1966, 1982, 1987
  {
    club: 'CA Peñarol', shortCode: 'PEN', country: 'Uruguay', flag: '🇺🇾',
    years: [
      {
        year: '1960', tag: 'Libertadores 1960', tier: 'legendary',
        players: [
          { name: 'Alberto Spencer', pos: 'ST', sec: ['AM'], rating: 95, nation: 'Ecuador', nationCode: 'EC', flag: '🇪🇨', bonus: 1 },
          { name: 'José Sasía', pos: 'ST', sec: ['LW'], rating: 88 },
          { name: 'Juan Joya', pos: 'LW', sec: ['RW'], rating: 89, nation: 'Perú', nationCode: 'PE', flag: '🇵🇪' },
          { name: 'Luis Cubilla', pos: 'RW', sec: ['AM'], rating: 90 },
          { name: 'Néstor Gonçalves', pos: 'DM', sec: ['CM'], rating: 91 },
          { name: 'William Martínez', pos: 'CB', sec: ['RB'], rating: 89 },
          { name: 'Luis Maidana', pos: 'GK', rating: 87 },
          { name: 'Salvador', pos: 'CB', rating: 84 },
          { name: 'Santiago Pino', pos: 'RB', rating: 83 },
          { name: 'Walter Aguerre', pos: 'CM', rating: 85 },
          { name: 'Carlos Linazza', pos: 'AM', rating: 85 }
        ]
      },
      {
        year: '1961', tag: 'Bicampeón 1961', tier: 'legendary',
        players: [
          { name: 'Alberto Spencer', pos: 'ST', rating: 95, nation: 'Ecuador', nationCode: 'EC', flag: '🇪🇨', bonus: 1 },
          { name: 'José Sasía', pos: 'ST', rating: 89 },
          { name: 'Juan Joya', pos: 'LW', rating: 89, nation: 'Perú', nationCode: 'PE', flag: '🇵🇪' },
          { name: 'Luis Cubilla', pos: 'RW', rating: 90 },
          { name: 'Néstor Gonçalves', pos: 'DM', rating: 92 },
          { name: 'William Martínez', pos: 'CB', rating: 89 },
          { name: 'Luis Maidana', pos: 'GK', rating: 87 },
          { name: 'Edgardo González', pos: 'CM', rating: 86 },
          { name: 'Walter Aguerre', pos: 'CM', rating: 85 },
          { name: 'Núber Cano', pos: 'CB', rating: 84 },
          { name: 'Roberto Matosas', pos: 'LB', sec: ['CB'], rating: 88 }
        ]
      },
      {
        year: '1966', tag: 'Mundial de Clubes 1966', tier: 'legendary',
        players: [
          { name: 'Alberto Spencer', pos: 'ST', rating: 96, nation: 'Ecuador', nationCode: 'EC', flag: '🇪🇨', bonus: 1 },
          { name: 'Pedro Rocha', pos: 'AM', sec: ['CM', 'ST'], rating: 94 },
          { name: 'Ladislao Mazurkiewicz', pos: 'GK', rating: 94 },
          { name: 'Juan Joya', pos: 'LW', rating: 89, nation: 'Perú', nationCode: 'PE', flag: '🇵🇪' },
          { name: 'Julio César Abbadie', pos: 'RW', rating: 88 },
          { name: 'Néstor Gonçalves', pos: 'DM', rating: 91 },
          { name: 'Pablo Forlán', pos: 'RB', rating: 88 },
          { name: 'Juan Vicente Lezcano', pos: 'CB', rating: 87, nation: 'Paraguay', nationCode: 'PY', flag: '🇵🇾' },
          { name: 'Luis Varela', pos: 'CB', rating: 86 },
          { name: 'Omar Caetano', pos: 'LB', rating: 87 },
          { name: 'Julio César Cortés', pos: 'CM', rating: 87 }
        ]
      },
      {
        year: '1982', tag: 'Intercontinental 1982', tier: 'legendary',
        players: [
          { name: 'Fernando Morena', pos: 'ST', rating: 93, bonus: 1 },
          { name: 'Venancio Ramos', pos: 'RW', rating: 88 },
          { name: 'Walkir Silva', pos: 'LW', rating: 85 },
          { name: 'Mario Saralegui', pos: 'CM', sec: ['AM'], rating: 87 },
          { name: 'Miguel Bossio', pos: 'DM', rating: 86 },
          { name: 'Jair Gonçalves', pos: 'AM', rating: 88, nation: 'Brasil', nationCode: 'BR', flag: '🇧🇷' },
          { name: 'Víctor Diogo', pos: 'RB', rating: 88 },
          { name: 'Walter Olivera', pos: 'CB', rating: 88 },
          { name: 'Nelson Gutiérrez', pos: 'CB', rating: 87 },
          { name: 'Washington González', pos: 'LB', rating: 86 },
          { name: 'Gustavo Fernández', pos: 'GK', rating: 87 }
        ]
      },
      {
        year: '1987', tag: 'Libertadores 1987', tier: 'gold',
        players: [
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
        ]
      }
    ]
  },

  // 2. CA Independiente (Argentina) — 1964, 1965, 1972, 1973, 1974, 1975, 1984
  {
    club: 'CA Independiente', shortCode: 'IND', country: 'Argentina', flag: '🇦🇷',
    years: [
      {
        year: '1964', tag: 'Libertadores 1964', tier: 'legendary',
        players: [
          { name: 'Mario Rodríguez', pos: 'ST', rating: 91, bonus: 1 },
          { name: 'Raúl Bernao', pos: 'RW', rating: 90 },
          { name: 'Raúl Savoy', pos: 'LW', rating: 89 },
          { name: 'Luis Suárez', pos: 'AM', rating: 87 },
          { name: 'Jorge Maldonado', pos: 'DM', rating: 88 },
          { name: 'Roberto Ferreiro', pos: 'RB', rating: 88 },
          { name: 'Rubén Navarro', pos: 'CB', rating: 89 },
          { name: 'Tomás Rolan', pos: 'LB', rating: 87, nation: 'Uruguay', nationCode: 'UY', flag: '🇺🇾' },
          { name: 'David Acevedo', pos: 'CB', rating: 86 },
          { name: 'Osvaldo Mura', pos: 'CM', rating: 87 },
          { name: 'Miguel Ángel Santoro', pos: 'GK', rating: 91 }
        ]
      },
      {
        year: '1965', tag: 'Bicampeón 1965', tier: 'legendary',
        players: [
          { name: 'Raúl Bernao', pos: 'RW', rating: 91, bonus: 1 },
          { name: 'Roque Avallay', pos: 'ST', rating: 88 },
          { name: 'Raúl Savoy', pos: 'LW', rating: 89 },
          { name: 'Vicente de la Mata', pos: 'AM', rating: 88 },
          { name: 'Jorge Maldonado', pos: 'DM', rating: 88 },
          { name: 'Roberto Ferreiro', pos: 'RB', rating: 88 },
          { name: 'Rubén Navarro', pos: 'CB', rating: 89 },
          { name: 'Juan Carlos Guzmán', pos: 'CB', rating: 87 },
          { name: 'Ricardo Pavoni', pos: 'LB', rating: 90, nation: 'Uruguay', nationCode: 'UY', flag: '🇺🇾' },
          { name: 'Osvaldo Mura', pos: 'CM', rating: 87 },
          { name: 'Miguel Ángel Santoro', pos: 'GK', rating: 92 }
        ]
      },
      {
        year: '1972', tag: 'Tetra Rey de Copas 1972', tier: 'legendary',
        players: [
          { name: 'José Pastoriza', pos: 'AM', rating: 92, bonus: 1 },
          { name: 'Agustín Balbuena', pos: 'RW', rating: 88 },
          { name: 'Eduardo Maglioni', pos: 'ST', rating: 87 },
          { name: 'Alejandro Semenewicz', pos: 'CM', rating: 88 },
          { name: 'Miguel Ángel Raimondo', pos: 'DM', rating: 88 },
          { name: 'Eduardo Commisso', pos: 'RB', rating: 87 },
          { name: 'Francisco Sá', pos: 'CB', rating: 90 },
          { name: 'Luis Garisto', pos: 'CB', rating: 87, nation: 'Uruguay', nationCode: 'UY', flag: '🇺🇾' },
          { name: 'Ricardo Pavoni', pos: 'LB', rating: 91, nation: 'Uruguay', nationCode: 'UY', flag: '🇺🇾' },
          { name: 'Dante Mircoli', pos: 'LW', rating: 86 },
          { name: 'Miguel Ángel Santoro', pos: 'GK', rating: 92 }
        ]
      },
      {
        year: '1973', tag: 'Intercontinental 1973', tier: 'legendary',
        players: [
          { name: 'Ricardo Bochini', pos: 'AM', sec: ['ST'], rating: 96, bonus: 1 },
          { name: 'Daniel Bertoni', pos: 'LW', sec: ['RW', 'ST'], rating: 92 },
          { name: 'Agustín Balbuena', pos: 'RW', rating: 88 },
          { name: 'Eduardo Maglioni', pos: 'ST', rating: 87 },
          { name: 'Miguel Ángel Raimondo', pos: 'DM', rating: 88 },
          { name: 'Rubén Galván', pos: 'CM', rating: 89 },
          { name: 'Eduardo Commisso', pos: 'RB', rating: 87 },
          { name: 'Francisco Sá', pos: 'CB', rating: 90 },
          { name: 'Miguel Ángel López', pos: 'CB', rating: 88 },
          { name: 'Ricardo Pavoni', pos: 'LB', rating: 91, nation: 'Uruguay', nationCode: 'UY', flag: '🇺🇾' },
          { name: 'Miguel Ángel Santoro', pos: 'GK', rating: 93 }
        ]
      },
      {
        year: '1974', tag: 'Libertadores 1974', tier: 'legendary',
        players: [
          { name: 'Ricardo Bochini', pos: 'AM', rating: 96, bonus: 1 },
          { name: 'Daniel Bertoni', pos: 'LW', rating: 93 },
          { name: 'Agustín Balbuena', pos: 'RW', rating: 88 },
          { name: 'Luis Giribet', pos: 'ST', rating: 86 },
          { name: 'Rubén Galván', pos: 'DM', rating: 90 },
          { name: 'Alejandro Semenewicz', pos: 'CM', rating: 88 },
          { name: 'Eduardo Commisso', pos: 'RB', rating: 87 },
          { name: 'Francisco Sá', pos: 'CB', rating: 90 },
          { name: 'Miguel Ángel López', pos: 'CB', rating: 88 },
          { name: 'Ricardo Pavoni', pos: 'LB', rating: 91, nation: 'Uruguay', nationCode: 'UY', flag: '🇺🇾' },
          { name: 'Carlos Gay', pos: 'GK', rating: 88 }
        ]
      },
      {
        year: '1975', tag: 'Tetracampeón 1975', tier: 'legendary',
        players: [
          { name: 'Ricardo Bochini', pos: 'AM', rating: 96, bonus: 1 },
          { name: 'Daniel Bertoni', pos: 'LW', rating: 93 },
          { name: 'Agustín Balbuena', pos: 'RW', rating: 88 },
          { name: 'Percy Rojas', pos: 'ST', rating: 88, nation: 'Perú', nationCode: 'PE', flag: '🇵🇪' },
          { name: 'Rubén Galván', pos: 'DM', rating: 90 },
          { name: 'Alejandro Semenewicz', pos: 'CM', rating: 88 },
          { name: 'Eduardo Commisso', pos: 'RB', rating: 87 },
          { name: 'Francisco Sá', pos: 'CB', rating: 90 },
          { name: 'Luis Garisto', pos: 'CB', rating: 87, nation: 'Uruguay', nationCode: 'UY', flag: '🇺🇾' },
          { name: 'Ricardo Pavoni', pos: 'LB', rating: 91, nation: 'Uruguay', nationCode: 'UY', flag: '🇺🇾' },
          { name: 'José Alberto Pérez', pos: 'GK', rating: 87 }
        ]
      },
      {
        year: '1984', tag: 'Campeón Mundial 1984', tier: 'legendary',
        players: [
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
          { name: 'Carlos Goyén', pos: 'GK', rating: 89, nation: 'Uruguay', nationCode: 'UY', flag: '🇺🇾' }
        ]
      }
    ]
  },

  // 3. FC Schalke 04 (Alemania) — 1997, 2011, 2015
  {
    club: 'FC Schalke 04', shortCode: 'S04', country: 'Alemania', flag: '🇩🇪',
    years: [
      {
        year: '1997', tag: 'Copa UEFA 1997', tier: 'gold',
        players: [
          { name: 'Marc Wilmots', pos: 'AM', sec: ['ST'], rating: 90, nation: 'Bélgica', nationCode: 'BE', flag: '🇧🇪', bonus: 1 },
          { name: 'Olaf Thon', pos: 'CB', sec: ['DM'], rating: 90 },
          { name: 'Jens Lehmann', pos: 'GK', rating: 89 },
          { name: 'Martin Max', pos: 'ST', rating: 86 },
          { name: 'Youri Mulder', pos: 'ST', rating: 85, nation: 'Países Bajos', nationCode: 'NL', flag: '🇳🇱' },
          { name: 'Ingo Anderbrügge', pos: 'CM', rating: 86 },
          { name: 'Jiří Němec', pos: 'DM', rating: 87, nation: 'República Checa', nationCode: 'CZ', flag: '🇨🇿' },
          { name: 'Thomas Linke', pos: 'CB', rating: 88 },
          { name: 'Yves Eigenrauch', pos: 'CB', rating: 85 },
          { name: 'Radoslav Látal', pos: 'RB', rating: 86, nation: 'República Checa', nationCode: 'CZ', flag: '🇨🇿' },
          { name: 'Mike Büskens', pos: 'LB', rating: 85 }
        ]
      },
      {
        year: '2011', tag: 'Semifinales Champions 2011', tier: 'gold',
        players: [
          { name: 'Raúl González', pos: 'ST', sec: ['AM'], rating: 92, nation: 'España', nationCode: 'ES', flag: '🇪🇸', bonus: 1 },
          { name: 'Manuel Neuer', pos: 'GK', rating: 94 },
          { name: 'Klaas-Jan Huntelaar', pos: 'ST', rating: 88, nation: 'Países Bajos', nationCode: 'NL', flag: '🇳🇱' },
          { name: 'Jefferson Farfán', pos: 'RW', rating: 88, nation: 'Perú', nationCode: 'PE', flag: '🇵🇪' },
          { name: 'Julian Draxler', pos: 'LW', sec: ['AM'], rating: 85 },
          { name: 'José Manuel Jurado', pos: 'AM', rating: 84, nation: 'España', nationCode: 'ES', flag: '🇪🇸' },
          { name: 'Peer Kluge', pos: 'CM', rating: 82 },
          { name: 'Joel Matip', pos: 'CB', sec: ['DM'], rating: 86, nation: 'Camerún', nationCode: 'CM', flag: '🇨🇲' },
          { name: 'Benedikt Höwedes', pos: 'CB', rating: 88 },
          { name: 'Atsuto Uchida', pos: 'RB', rating: 84, nation: 'Japón', nationCode: 'JP', flag: '🇯🇵' },
          { name: 'Hans Sarpei', pos: 'LB', rating: 81, nation: 'Ghana', nationCode: 'GH', flag: '🇬🇭' }
        ]
      },
      {
        year: '2015', tag: 'Champions League 2015', tier: 'silver',
        players: [
          { name: 'Leroy Sané', pos: 'RW', rating: 87, bonus: 1 },
          { name: 'Klaas-Jan Huntelaar', pos: 'ST', rating: 87, nation: 'Países Bajos', nationCode: 'NL', flag: '🇳🇱' },
          { name: 'Max Meyer', pos: 'AM', rating: 84 },
          { name: 'Eric Maxim Choupo-Moting', pos: 'LW', rating: 84, nation: 'Camerún', nationCode: 'CM', flag: '🇨🇲' },
          { name: 'Leon Goretzka', pos: 'CM', rating: 86 },
          { name: 'Marco Höger', pos: 'DM', rating: 82 },
          { name: 'Benedikt Höwedes', pos: 'CB', rating: 87 },
          { name: 'Matija Nastasić', pos: 'CB', rating: 84, nation: 'Serbia', nationCode: 'RS', flag: '🇷🇸' },
          { name: 'Sead Kolašinac', pos: 'LB', rating: 84, nation: 'Bosnia y Herzegovina', nationCode: 'BA', flag: '🇧🇦' },
          { name: 'Tranquillo Barnetta', pos: 'RB', rating: 82, nation: 'Suiza', nationCode: 'CH', flag: '🇨🇭' },
          { name: 'Ralf Fährmann', pos: 'GK', rating: 86 }
        ]
      }
    ]
  }
];
