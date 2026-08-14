import { buildTeam, Team } from '../teamBuilderHelper';

export const NATIONAL_TEAMS_EXTRA: Team[] = [];

function add(t: Team) {
  NATIONAL_TEAMS_EXTRA.push(t);
}

export interface NatRoster {
  country: string;
  code: string;
  flag: string;
  year: string;
  tag: string;
  tier: 'legendary' | 'gold' | 'silver' | 'bronze';
  stars: Array<{
    name: string;
    pos: 'GK' | 'RB' | 'CB' | 'LB' | 'DM' | 'CM' | 'AM' | 'RW' | 'LW' | 'ST';
    sec?: ('GK' | 'RB' | 'CB' | 'LB' | 'DM' | 'CM' | 'AM' | 'RW' | 'LW' | 'ST')[];
    rating: number;
    bonus?: number;
    num?: number;
  }>;
}

const ROSTERS: NatRoster[] = [
  // 1. ARGENTINA
  { country: 'Argentina', code: 'ARG', flag: '🇦🇷', year: '1978', tag: 'Campeón del Mundo 1978', tier: 'legendary', stars: [
    { name: 'Mario Kempes', pos: 'ST', rating: 96, bonus: 1, num: 10 },
    { name: 'Daniel Passarella', pos: 'CB', rating: 96, num: 19 },
    { name: 'Ubaldo Fillol', pos: 'GK', rating: 94, num: 5 },
    { name: 'Osvaldo Ardiles', pos: 'CM', rating: 92, num: 2 },
    { name: 'Leopoldo Luque', pos: 'ST', rating: 91, num: 14 },
    { name: 'Daniel Bertoni', pos: 'RW', rating: 91, num: 4 },
    { name: 'Alberto Tarantini', pos: 'LB', rating: 90, num: 20 },
    { name: 'Jorge Olguín', pos: 'RB', rating: 88, num: 15 },
    { name: 'Luis Galván', pos: 'CB', rating: 90, num: 7 },
    { name: 'Américo Gallego', pos: 'DM', rating: 90, num: 6 },
    { name: 'Oscar Ortiz', pos: 'LW', rating: 88, num: 16 }
  ]},
  { country: 'Argentina', code: 'ARG', flag: '🇦🇷', year: '1986', tag: 'Campeón del Mundo México 86', tier: 'legendary', stars: [
    { name: 'Diego Maradona', pos: 'AM', rating: 99, bonus: 1, num: 10 },
    { name: 'Jorge Valdano', pos: 'ST', rating: 92, num: 11 },
    { name: 'Jorge Burruchaga', pos: 'AM', rating: 92, num: 7 },
    { name: 'Sergio Batista', pos: 'DM', rating: 90, num: 2 },
    { name: 'Héctor Enrique', pos: 'CM', rating: 89, num: 12 },
    { name: 'Ricardo Giusti', pos: 'CM', rating: 88, num: 14 },
    { name: 'Julio Olarticoechea', pos: 'LB', rating: 89, num: 16 },
    { name: 'José Luis Brown', pos: 'CB', rating: 91, num: 5 },
    { name: 'Oscar Ruggeri', pos: 'CB', rating: 93, num: 19 },
    { name: 'José Luis Cuciuffo', pos: 'RB', rating: 88, num: 9 },
    { name: 'Nery Pumpido', pos: 'GK', rating: 90, num: 18 }
  ]},
  { country: 'Argentina', code: 'ARG', flag: '🇦🇷', year: '1990', tag: 'Finalista Italia 90', tier: 'legendary', stars: [
    { name: 'Diego Maradona', pos: 'AM', rating: 97, bonus: 1, num: 10 },
    { name: 'Claudio Caniggia', pos: 'ST', rating: 94, num: 8 },
    { name: 'Sergio Goycochea', pos: 'GK', rating: 94, num: 12 },
    { name: 'Oscar Ruggeri', pos: 'CB', rating: 92, num: 19 },
    { name: 'José Basualdo', pos: 'CM', rating: 88, num: 4 },
    { name: 'Jorge Burruchaga', pos: 'AM', rating: 89, num: 7 },
    { name: 'Juan Simón', pos: 'CB', rating: 90, num: 20 },
    { name: 'Pedro Monzón', pos: 'CB', rating: 87, num: 15 },
    { name: 'José Serrizuela', pos: 'RB', rating: 87, num: 18 },
    { name: 'Roberto Sensini', pos: 'LB', rating: 89, num: 17 },
    { name: 'Pedro Troglio', pos: 'CM', rating: 87, num: 21 }
  ]},
  { country: 'Argentina', code: 'ARG', flag: '🇦🇷', year: '1994', tag: 'Mundial USA 94', tier: 'legendary', stars: [
    { name: 'Diego Maradona', pos: 'AM', rating: 96, bonus: 1, num: 10 },
    { name: 'Gabriel Batistuta', pos: 'ST', rating: 95, num: 9 },
    { name: 'Claudio Caniggia', pos: 'RW', rating: 93, num: 7 },
    { name: 'Abel Balbo', pos: 'LW', rating: 89, num: 19 },
    { name: 'Fernando Redondo', pos: 'DM', rating: 96, num: 5 },
    { name: 'Diego Simeone', pos: 'CM', rating: 92, num: 8 },
    { name: 'Roberto Sensini', pos: 'RB', rating: 89, num: 4 },
    { name: 'Oscar Ruggeri', pos: 'CB', rating: 91, num: 6 },
    { name: 'Fernando Cáceres', pos: 'CB', rating: 88, num: 13 },
    { name: 'José Chamot', pos: 'LB', rating: 89, num: 3 },
    { name: 'Luis Islas', pos: 'GK', rating: 89, num: 12 }
  ]},
  { country: 'Argentina', code: 'ARG', flag: '🇦🇷', year: '1998', tag: 'Francia 98', tier: 'legendary', stars: [
    { name: 'Gabriel Batistuta', pos: 'ST', rating: 96, bonus: 1, num: 9 },
    { name: 'Ariel Ortega', pos: 'AM', rating: 94, num: 10 },
    { name: 'Claudio López', pos: 'LW', rating: 90, num: 7 },
    { name: 'Juan Sebastián Verón', pos: 'CM', rating: 93, num: 11 },
    { name: 'Diego Simeone', pos: 'DM', rating: 93, num: 8 },
    { name: 'Matías Almeyda', pos: 'DM', rating: 91, num: 5 },
    { name: 'Javier Zanetti', pos: 'RB', rating: 93, num: 22 },
    { name: 'Roberto Ayala', pos: 'CB', rating: 94, num: 2 },
    { name: 'José Chamot', pos: 'CB', rating: 89, num: 3 },
    { name: 'Nelson Vivas', pos: 'LB', rating: 88, num: 14 },
    { name: 'Carlos Roa', pos: 'GK', rating: 92, num: 1 }
  ]},
  { country: 'Argentina', code: 'ARG', flag: '🇦🇷', year: '2006', tag: 'Alemania 2006', tier: 'legendary', stars: [
    { name: 'Juan Román Riquelme', pos: 'AM', rating: 97, bonus: 1, num: 10 },
    { name: 'Hernán Crespo', pos: 'ST', rating: 93, num: 9 },
    { name: 'Javier Saviola', pos: 'ST', rating: 90, num: 7 },
    { name: 'Lionel Messi', pos: 'RW', rating: 89, num: 19 },
    { name: 'Maxi Rodríguez', pos: 'RW', rating: 91, num: 18 },
    { name: 'Javier Mascherano', pos: 'DM', rating: 92, num: 8 },
    { name: 'Esteban Cambiasso', pos: 'CM', rating: 92, num: 5 },
    { name: 'Juan Pablo Sorín', pos: 'LB', rating: 92, num: 3 },
    { name: 'Roberto Ayala', pos: 'CB', rating: 94, num: 2 },
    { name: 'Gabriel Heinze', pos: 'CB', rating: 90, num: 6 },
    { name: 'Roberto Abbondanzieri', pos: 'GK', rating: 91, num: 1 }
  ]},
  { country: 'Argentina', code: 'ARG', flag: '🇦🇷', year: '2014', tag: 'Finalista Brasil 2014', tier: 'legendary', stars: [
    { name: 'Lionel Messi', pos: 'AM', rating: 98, bonus: 1, num: 10 },
    { name: 'Gonzalo Higuaín', pos: 'ST', rating: 92, num: 9 },
    { name: 'Sergio Agüero', pos: 'ST', rating: 92, num: 20 },
    { name: 'Ángel Di María', pos: 'RW', rating: 94, num: 7 },
    { name: 'Javier Mascherano', pos: 'DM', rating: 96, num: 14 },
    { name: 'Lucas Biglia', pos: 'CM', rating: 88, num: 6 },
    { name: 'Pablo Zabaleta', pos: 'RB', rating: 90, num: 4 },
    { name: 'Martín Demichelis', pos: 'CB', rating: 89, num: 15 },
    { name: 'Ezequiel Garay', pos: 'CB', rating: 91, num: 2 },
    { name: 'Marcos Rojo', pos: 'LB', rating: 89, num: 16 },
    { name: 'Sergio Romero', pos: 'GK', rating: 92, num: 1 }
  ]},
  { country: 'Argentina', code: 'ARG', flag: '🇦🇷', year: '2022', tag: 'Tricampeón Mundial Qatar 2022', tier: 'legendary', stars: [
    { name: 'Lionel Messi', pos: 'AM', rating: 99, bonus: 1, num: 10 },
    { name: 'Julián Álvarez', pos: 'ST', rating: 93, num: 9 },
    { name: 'Ángel Di María', pos: 'RW', rating: 95, num: 11 },
    { name: 'Alexis Mac Allister', pos: 'CM', rating: 92, num: 20 },
    { name: 'Enzo Fernández', pos: 'CM', rating: 93, num: 24 },
    { name: 'Rodrigo De Paul', pos: 'CM', rating: 93, num: 7 },
    { name: 'Nahuel Molina', pos: 'RB', rating: 90, num: 26 },
    { name: 'Cristian Romero (Cuti)', pos: 'CB', rating: 94, num: 13 },
    { name: 'Nicolás Otamendi', pos: 'CB', rating: 93, num: 19 },
    { name: 'Nicolás Tagliafico', pos: 'LB', rating: 90, num: 3 },
    { name: 'Emiliano Martínez (Dibu)', pos: 'GK', rating: 97, num: 23 }
  ]},

  // 2. BRASIL
  { country: 'Brasil', code: 'BRA', flag: '🇧🇷', year: '1958', tag: 'Campeón Mundial Suecia 1958', tier: 'legendary', stars: [
    { name: 'Pelé', pos: 'ST', rating: 97, bonus: 1, num: 10 },
    { name: 'Garrincha', pos: 'RW', rating: 98, num: 11 },
    { name: 'Vavá', pos: 'ST', rating: 93, num: 20 },
    { name: 'Zagallo', pos: 'LW', rating: 92, num: 7 },
    { name: 'Didi', pos: 'CM', rating: 96, num: 6 },
    { name: 'Zito', pos: 'DM', rating: 93, num: 19 },
    { name: 'Djalma Santos', pos: 'RB', rating: 95, num: 4 },
    { name: 'Bellini', pos: 'CB', rating: 93, num: 2 },
    { name: 'Orlando Peçanha', pos: 'CB', rating: 91, num: 15 },
    { name: 'Nilton Santos', pos: 'LB', rating: 96, num: 12 },
    { name: 'Gylmar', pos: 'GK', rating: 93, num: 3 }
  ]},
  { country: 'Brasil', code: 'BRA', flag: '🇧🇷', year: '1962', tag: 'Bicampeón Mundial Chile 1962', tier: 'legendary', stars: [
    { name: 'Garrincha', pos: 'RW', rating: 99, bonus: 1, num: 7 },
    { name: 'Amarildo', pos: 'ST', rating: 93, num: 20 },
    { name: 'Vavá', pos: 'ST', rating: 93, num: 19 },
    { name: 'Zagallo', pos: 'LW', rating: 92, num: 21 },
    { name: 'Didi', pos: 'CM', rating: 96, num: 8 },
    { name: 'Zito', pos: 'DM', rating: 94, num: 4 },
    { name: 'Djalma Santos', pos: 'RB', rating: 95, num: 2 },
    { name: 'Mauro Ramos', pos: 'CB', rating: 93, num: 3 },
    { name: 'Zózimo', pos: 'CB', rating: 91, num: 5 },
    { name: 'Nilton Santos', pos: 'LB', rating: 96, num: 6 },
    { name: 'Gylmar', pos: 'GK', rating: 93, num: 1 }
  ]},
  { country: 'Brasil', code: 'BRA', flag: '🇧🇷', year: '1970', tag: 'Tricampeón México 70', tier: 'legendary', stars: [
    { name: 'Pelé', pos: 'ST', rating: 99, bonus: 1, num: 10 },
    { name: 'Jairzinho', pos: 'RW', rating: 96, num: 7 },
    { name: 'Tostão', pos: 'ST', rating: 95, num: 9 },
    { name: 'Rivellino', pos: 'LW', rating: 96, num: 11 },
    { name: 'Gérson', pos: 'CM', rating: 96, num: 8 },
    { name: 'Clodoaldo', pos: 'DM', rating: 93, num: 5 },
    { name: 'Carlos Alberto', pos: 'RB', rating: 97, num: 4 },
    { name: 'Brito', pos: 'CB', rating: 90, num: 2 },
    { name: 'Piazza', pos: 'CB', rating: 91, num: 3 },
    { name: 'Everaldo', pos: 'LB', rating: 89, num: 16 },
    { name: 'Félix', pos: 'GK', rating: 89, num: 1 }
  ]},
  { country: 'Brasil', code: 'BRA', flag: '🇧🇷', year: '1982', tag: 'El Joga Bonito España 82', tier: 'legendary', stars: [
    { name: 'Zico', pos: 'AM', rating: 98, bonus: 1, num: 10 },
    { name: 'Sócrates', pos: 'AM', rating: 97, num: 8 },
    { name: 'Paulo Roberto Falcão', pos: 'CM', rating: 96, num: 15 },
    { name: 'Éder Aleixo', pos: 'LW', rating: 93, num: 11 },
    { name: 'Serginho Chulapa', pos: 'ST', rating: 89, num: 9 },
    { name: 'Toninho Cerezo', pos: 'DM', rating: 94, num: 5 },
    { name: 'Leandro', pos: 'RB', rating: 94, num: 2 },
    { name: 'Oscar', pos: 'CB', rating: 91, num: 3 },
    { name: 'Luizinho', pos: 'CB', rating: 91, num: 4 },
    { name: 'Júnior', pos: 'LB', rating: 95, num: 6 },
    { name: 'Waldir Peres', pos: 'GK', rating: 88, num: 1 }
  ]},
  { country: 'Brasil', code: 'BRA', flag: '🇧🇷', year: '1994', tag: 'Tetracampeón USA 94', tier: 'legendary', stars: [
    { name: 'Romário', pos: 'ST', rating: 98, bonus: 1, num: 11 },
    { name: 'Bebeto', pos: 'ST', rating: 94, num: 7 },
    { name: 'Zinho', pos: 'LW', rating: 90, num: 9 },
    { name: 'Mazinho', pos: 'RW', rating: 90, num: 17 },
    { name: 'Dunga', pos: 'DM', rating: 94, num: 8 },
    { name: 'Mauro Silva', pos: 'DM', rating: 93, num: 5 },
    { name: 'Jorginho', pos: 'RB', rating: 93, num: 2 },
    { name: 'Aldair', pos: 'CB', rating: 94, num: 13 },
    { name: 'Márcio Santos', pos: 'CB', rating: 91, num: 15 },
    { name: 'Branco', pos: 'LB', rating: 92, num: 6 },
    { name: 'Cláudio Taffarel', pos: 'GK', rating: 94, num: 1 }
  ]},
  { country: 'Brasil', code: 'BRA', flag: '🇧🇷', year: '1998', tag: 'Finalista Francia 98', tier: 'legendary', stars: [
    { name: 'Ronaldo Fenômeno', pos: 'ST', rating: 99, bonus: 1, num: 9 },
    { name: 'Bebeto', pos: 'ST', rating: 92, num: 20 },
    { name: 'Rivaldo', pos: 'AM', rating: 95, num: 10 },
    { name: 'Leonardo', pos: 'LW', rating: 91, num: 18 },
    { name: 'Dunga', pos: 'DM', rating: 93, num: 8 },
    { name: 'César Sampaio', pos: 'DM', rating: 92, num: 5 },
    { name: 'Cafu', pos: 'RB', rating: 95, num: 2 },
    { name: 'Aldair', pos: 'CB', rating: 93, num: 3 },
    { name: 'Júnior Baiano', pos: 'CB', rating: 89, num: 4 },
    { name: 'Roberto Carlos', pos: 'LB', rating: 96, num: 6 },
    { name: 'Cláudio Taffarel', pos: 'GK', rating: 93, num: 1 }
  ]},
  { country: 'Brasil', code: 'BRA', flag: '🇧🇷', year: '2002', tag: 'Pentacampeón Corea-Japón 2002', tier: 'legendary', stars: [
    { name: 'Ronaldo Fenômeno', pos: 'ST', rating: 98, bonus: 1, num: 9 },
    { name: 'Rivaldo', pos: 'AM', rating: 97, num: 10 },
    { name: 'Ronaldinho Gaúcho', pos: 'AM', rating: 96, num: 11 },
    { name: 'Kléberson', pos: 'CM', rating: 90, num: 15 },
    { name: 'Gilberto Silva', pos: 'DM', rating: 92, num: 8 },
    { name: 'Cafu', pos: 'RB', rating: 96, num: 2 },
    { name: 'Lúcio', pos: 'CB', rating: 94, num: 3 },
    { name: 'Edmílson', pos: 'CB', rating: 91, num: 5 },
    { name: 'Roque Júnior', pos: 'CB', rating: 90, num: 4 },
    { name: 'Roberto Carlos', pos: 'LB', rating: 97, num: 6 },
    { name: 'Marcos', pos: 'GK', rating: 93, num: 1 }
  ]},
  { country: 'Brasil', code: 'BRA', flag: '🇧🇷', year: '2006', tag: 'El Cuadrado Mágico 2006', tier: 'legendary', stars: [
    { name: 'Ronaldo Fenômeno', pos: 'ST', rating: 95, num: 9 },
    { name: 'Adriano (El Emperador)', pos: 'ST', rating: 95, num: 7 },
    { name: 'Ronaldinho Gaúcho', pos: 'AM', rating: 98, bonus: 1, num: 10 },
    { name: 'Kaká', pos: 'AM', rating: 96, num: 8 },
    { name: 'Zé Roberto', pos: 'CM', rating: 93, num: 11 },
    { name: 'Emerson', pos: 'DM', rating: 92, num: 5 },
    { name: 'Cafu', pos: 'RB', rating: 93, num: 2 },
    { name: 'Lúcio', pos: 'CB', rating: 94, num: 3 },
    { name: 'Juan', pos: 'CB', rating: 92, num: 4 },
    { name: 'Roberto Carlos', pos: 'LB', rating: 94, num: 6 },
    { name: 'Dida', pos: 'GK', rating: 94, num: 1 }
  ]},

  // 3. ALEMANIA
  { country: 'Alemania', code: 'GER', flag: '🇩🇪', year: '1974', tag: 'Campeón Mundial Múnich 74', tier: 'legendary', stars: [
    { name: 'Franz Beckenbauer', pos: 'CB', rating: 99, bonus: 1, num: 5 },
    { name: 'Gerd Müller (Der Bomber)', pos: 'ST', rating: 98, num: 13 },
    { name: 'Wolfgang Overath', pos: 'AM', rating: 94, num: 12 },
    { name: 'Uli Hoeneß', pos: 'RW', rating: 93, num: 14 },
    { name: 'Bernd Hölzenbein', pos: 'LW', rating: 92, num: 17 },
    { name: 'Rainer Bonhof', pos: 'CM', rating: 92, num: 16 },
    { name: 'Berti Vogts', pos: 'RB', rating: 95, num: 2 },
    { name: 'Hans-Georg Schwarzenbeck', pos: 'CB', rating: 92, num: 4 },
    { name: 'Paul Breitner', pos: 'LB', rating: 96, num: 3 },
    { name: 'Herbert Wimmer', pos: 'DM', rating: 90, num: 8 },
    { name: 'Sepp Maier', pos: 'GK', rating: 95, num: 1 }
  ]},
  { country: 'Alemania', code: 'GER', flag: '🇩🇪', year: '1990', tag: 'Tricampeón Mundial Italia 90', tier: 'legendary', stars: [
    { name: 'Lothar Matthäus', pos: 'CM', rating: 98, bonus: 1, num: 10 },
    { name: 'Jürgen Klinsmann', pos: 'ST', rating: 94, num: 18 },
    { name: 'Rudi Völler', pos: 'ST', rating: 94, num: 9 },
    { name: 'Pierre Littbarski', pos: 'AM', rating: 92, num: 7 },
    { name: 'Thomas Häßler', pos: 'RW', rating: 93, num: 8 },
    { name: 'Guido Buchwald', pos: 'DM', rating: 92, num: 6 },
    { name: 'Thomas Berthold', pos: 'RB', rating: 90, num: 14 },
    { name: 'Klaus Augenthaler', pos: 'CB', rating: 93, num: 5 },
    { name: 'Jürgen Kohler', pos: 'CB', rating: 94, num: 4 },
    { name: 'Andreas Brehme', pos: 'LB', rating: 95, num: 3 },
    { name: 'Bodo Illgner', pos: 'GK', rating: 92, num: 1 }
  ]},
  { country: 'Alemania', code: 'GER', flag: '🇩🇪', year: '2014', tag: 'Tetracampeón Maracaná 2014', tier: 'legendary', stars: [
    { name: 'Toni Kroos', pos: 'CM', rating: 96, bonus: 1, num: 18 },
    { name: 'Thomas Müller', pos: 'RW', rating: 95, num: 13 },
    { name: 'Miroslav Klose', pos: 'ST', rating: 93, num: 11 },
    { name: 'Mesut Özil', pos: 'LW', rating: 93, num: 8 },
    { name: 'Bastian Schweinsteiger', pos: 'CM', rating: 96, num: 7 },
    { name: 'Sami Khedira', pos: 'DM', rating: 91, num: 6 },
    { name: 'Philipp Lahm', pos: 'RB', rating: 97, num: 16 },
    { name: 'Jérôme Boateng', pos: 'CB', rating: 93, num: 20 },
    { name: 'Mats Hummels', pos: 'CB', rating: 95, num: 5 },
    { name: 'Benedikt Höwedes', pos: 'LB', rating: 89, num: 4 },
    { name: 'Manuel Neuer', pos: 'GK', rating: 98, num: 1 }
  ]},

  // 4. ITALIA
  { country: 'Italia', code: 'ITA', flag: '🇮🇹', year: '1982', tag: 'Tricampeón Mundial España 82', tier: 'legendary', stars: [
    { name: 'Paolo Rossi', pos: 'ST', rating: 97, bonus: 1, num: 20 },
    { name: 'Bruno Conti', pos: 'RW', rating: 95, num: 16 },
    { name: 'Francesco Graziani', pos: 'LW', rating: 91, num: 19 },
    { name: 'Giancarlo Antognoni', pos: 'AM', rating: 93, num: 9 },
    { name: 'Marco Tardelli', pos: 'CM', rating: 95, num: 14 },
    { name: 'Gabriele Oriali', pos: 'DM', rating: 92, num: 13 },
    { name: 'Claudio Gentile', pos: 'RB', rating: 94, num: 6 },
    { name: 'Gaetano Scirea', pos: 'CB', rating: 97, num: 7 },
    { name: 'Fulvio Collovati', pos: 'CB', rating: 92, num: 5 },
    { name: 'Antonio Cabrini', pos: 'LB', rating: 94, num: 4 },
    { name: 'Dino Zoff', pos: 'GK', rating: 96, num: 1 }
  ]},
  { country: 'Italia', code: 'ITA', flag: '🇮🇹', year: '2006', tag: 'Tetracampeón Mundial Berlín 2006', tier: 'legendary', stars: [
    { name: 'Fabio Cannavaro (Il Muro)', pos: 'CB', rating: 98, bonus: 1, num: 5 },
    { name: 'Andrea Pirlo', pos: 'CM', rating: 97, num: 21 },
    { name: 'Francesco Totti', pos: 'AM', rating: 95, num: 10 },
    { name: 'Luca Toni', pos: 'ST', rating: 92, num: 9 },
    { name: 'Gennaro Gattuso', pos: 'DM', rating: 94, num: 8 },
    { name: 'Mauro Camoranesi', pos: 'RW', rating: 91, num: 16 },
    { name: 'Simone Perrotta', pos: 'LW', rating: 90, num: 20 },
    { name: 'Gianluca Zambrotta', pos: 'RB', rating: 94, num: 19 },
    { name: 'Marco Materazzi', pos: 'CB', rating: 92, num: 23 },
    { name: 'Fabio Grosso', pos: 'LB', rating: 93, num: 3 },
    { name: 'Gianluigi Buffon', pos: 'GK', rating: 98, num: 1 }
  ]},

  // 5. FRANCIA
  { country: 'Francia', code: 'FRA', flag: '🇫🇷', year: '1984', tag: 'Campeón Eurocopa 1984', tier: 'legendary', stars: [
    { name: 'Michel Platini', pos: 'AM', rating: 99, bonus: 1, num: 10 },
    { name: 'Alain Giresse', pos: 'CM', rating: 94, num: 12 },
    { name: 'Jean Tigana', pos: 'CM', rating: 95, num: 14 },
    { name: 'Luis Fernandez', pos: 'DM', rating: 92, num: 6 },
    { name: 'Bruno Bellone', pos: 'LW', rating: 90, num: 11 },
    { name: 'Bernard Lacombe', pos: 'ST', rating: 90, num: 17 },
    { name: 'Patrick Battiston', pos: 'RB', rating: 91, num: 5 },
    { name: 'Maxime Bossis', pos: 'CB', rating: 93, num: 4 },
    { name: 'Yvon Le Roux', pos: 'CB', rating: 89, num: 15 },
    { name: 'Jean-François Domergue', pos: 'LB', rating: 89, num: 3 },
    { name: 'Joël Bats', pos: 'GK', rating: 92, num: 1 }
  ]},
  { country: 'Francia', code: 'FRA', flag: '🇫🇷', year: '1998', tag: 'Campeón del Mundo Saint-Denis 1998', tier: 'legendary', stars: [
    { name: 'Zinedine Zidane', pos: 'AM', rating: 98, bonus: 1, num: 10 },
    { name: 'Thierry Henry', pos: 'ST', rating: 91, num: 12 },
    { name: 'Youri Djorkaeff', pos: 'AM', rating: 93, num: 6 },
    { name: 'Didier Deschamps', pos: 'DM', rating: 94, num: 7 },
    { name: 'Emmanuel Petit', pos: 'CM', rating: 92, num: 17 },
    { name: 'Christian Karembeu', pos: 'CM', rating: 90, num: 19 },
    { name: 'Lilian Thuram', pos: 'RB', rating: 96, num: 15 },
    { name: 'Marcel Desailly', pos: 'CB', rating: 96, num: 8 },
    { name: 'Laurent Blanc', pos: 'CB', rating: 95, num: 5 },
    { name: 'Bixente Lizarazu', pos: 'LB', rating: 94, num: 3 },
    { name: 'Fabien Barthez', pos: 'GK', rating: 94, num: 16 }
  ]},
  { country: 'Francia', code: 'FRA', flag: '🇫🇷', year: '2018', tag: 'Bicampeón Mundial Moscú 2018', tier: 'legendary', stars: [
    { name: 'Kylian Mbappé', pos: 'RW', rating: 97, bonus: 1, num: 10 },
    { name: 'Antoine Griezmann', pos: 'AM', rating: 95, num: 7 },
    { name: 'Olivier Giroud', pos: 'ST', rating: 90, num: 9 },
    { name: 'Paul Pogba', pos: 'CM', rating: 95, num: 6 },
    { name: 'N\'Golo Kanté', pos: 'DM', rating: 97, num: 13 },
    { name: 'Blaise Matuidi', pos: 'LW', rating: 91, num: 14 },
    { name: 'Benjamin Pavard', pos: 'RB', rating: 91, num: 2 },
    { name: 'Raphaël Varane', pos: 'CB', rating: 95, num: 4 },
    { name: 'Samuel Umtiti', pos: 'CB', rating: 93, num: 5 },
    { name: 'Lucas Hernandez', pos: 'LB', rating: 92, num: 21 },
    { name: 'Hugo Lloris', pos: 'GK', rating: 94, num: 1 }
  ]},

  // 6. ESPAÑA
  { country: 'España', code: 'ESP', flag: '🇪🇸', year: '2010', tag: 'Campeón del Mundo Sudáfrica 2010', tier: 'legendary', stars: [
    { name: 'Andrés Iniesta', pos: 'AM', rating: 98, bonus: 1, num: 6 },
    { name: 'Xavi Hernández', pos: 'CM', rating: 98, num: 8 },
    { name: 'David Villa (El Guaje)', pos: 'ST', rating: 96, num: 7 },
    { name: 'Pedro Rodríguez', pos: 'LW', rating: 91, num: 18 },
    { name: 'Sergio Busquets', pos: 'DM', rating: 96, num: 16 },
    { name: 'Xabi Alonso', pos: 'CM', rating: 95, num: 14 },
    { name: 'Sergio Ramos', pos: 'RB', rating: 96, num: 15 },
    { name: 'Carles Puyol', pos: 'CB', rating: 97, num: 5 },
    { name: 'Gerard Piqué', pos: 'CB', rating: 95, num: 3 },
    { name: 'Joan Capdevila', pos: 'LB', rating: 91, num: 11 },
    { name: 'Iker Casillas', pos: 'GK', rating: 98, num: 1 }
  ]},
  { country: 'España', code: 'ESP', flag: '🇪🇸', year: '2024', tag: 'Tetracampeón Eurocopa Berlín 2024', tier: 'legendary', stars: [
    { name: 'Rodri Hernández', pos: 'DM', rating: 98, bonus: 1, num: 16 },
    { name: 'Lamine Yamal', pos: 'RW', rating: 95, num: 19 },
    { name: 'Nico Williams', pos: 'LW', rating: 94, num: 17 },
    { name: 'Dani Olmo', pos: 'AM', rating: 93, num: 10 },
    { name: 'Fabián Ruiz', pos: 'CM', rating: 93, num: 8 },
    { name: 'Álvaro Morata', pos: 'ST', rating: 90, num: 7 },
    { name: 'Dani Carvajal', pos: 'RB', rating: 95, num: 2 },
    { name: 'Robin Le Normand', pos: 'CB', rating: 90, num: 3 },
    { name: 'Aymeric Laporte', pos: 'CB', rating: 92, num: 14 },
    { name: 'Marc Cucurella', pos: 'LB', rating: 92, num: 24 },
    { name: 'Unai Simón', pos: 'GK', rating: 93, num: 23 }
  ]},

  // 7. INGLATERRA
  { country: 'Inglaterra', code: 'ENG', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', year: '1966', tag: 'Campeón Mundial Wembley 1966', tier: 'legendary', stars: [
    { name: 'Bobby Charlton', pos: 'AM', rating: 98, bonus: 1, num: 9 },
    { name: 'Bobby Moore', pos: 'CB', rating: 98, num: 6 },
    { name: 'Geoff Hurst', pos: 'ST', rating: 94, num: 10 },
    { name: 'Roger Hunt', pos: 'ST', rating: 91, num: 21 },
    { name: 'Martin Peters', pos: 'LW', rating: 92, num: 16 },
    { name: 'Alan Ball', pos: 'RW', rating: 93, num: 7 },
    { name: 'Nobby Stiles', pos: 'DM', rating: 93, num: 4 },
    { name: 'George Cohen', pos: 'RB', rating: 92, num: 2 },
    { name: 'Jack Charlton', pos: 'CB', rating: 92, num: 5 },
    { name: 'Ray Wilson', pos: 'LB', rating: 92, num: 3 },
    { name: 'Gordon Banks', pos: 'GK', rating: 97, num: 1 }
  ]},

  // 8. PAÍSES BAJOS
  { country: 'Países Bajos', code: 'NED', flag: '🇳🇱', year: '1974', tag: 'La Naranja Mecánica 1974', tier: 'legendary', stars: [
    { name: 'Johan Cruyff', pos: 'ST', rating: 99, bonus: 1, num: 14 },
    { name: 'Rob Rensenbrink', pos: 'LW', rating: 95, num: 15 },
    { name: 'Johnny Rep', pos: 'RW', rating: 93, num: 16 },
    { name: 'Johan Neeskens', pos: 'CM', rating: 97, num: 13 },
    { name: 'Wim van Hanegem', pos: 'CM', rating: 95, num: 3 },
    { name: 'Wim Jansen', pos: 'DM', rating: 92, num: 6 },
    { name: 'Wim Suurbier', pos: 'RB', rating: 93, num: 20 },
    { name: 'Arie Haan', pos: 'CB', rating: 94, num: 2 },
    { name: 'Ruud Krol', pos: 'LB', rating: 96, num: 12 },
    { name: 'Wim Rijsbergen', pos: 'CB', rating: 90, num: 17 },
    { name: 'Jan Jongbloed', pos: 'GK', rating: 90, num: 8 }
  ]},
  { country: 'Países Bajos', code: 'NED', flag: '🇳🇱', year: '1988', tag: 'Campeón Eurocopa Múnich 88', tier: 'legendary', stars: [
    { name: 'Marco van Basten', pos: 'ST', rating: 98, bonus: 1, num: 12 },
    { name: 'Ruud Gullit', pos: 'AM', rating: 97, num: 10 },
    { name: 'Frank Rijkaard', pos: 'CB', sec: ['DM'], rating: 97, num: 17 },
    { name: 'Ronald Koeman', pos: 'CB', rating: 96, num: 4 },
    { name: 'Gerald Vanenburg', pos: 'RW', rating: 92, num: 7 },
    { name: 'Erwin Koeman', pos: 'LW', rating: 90, num: 13 },
    { name: 'Jan Wouters', pos: 'DM', rating: 92, num: 20 },
    { name: 'Arnold Mühren', pos: 'CM', rating: 91, num: 8 },
    { name: 'Berry van Aerle', pos: 'RB', rating: 89, num: 6 },
    { name: 'Adri van Tiggelen', pos: 'LB', rating: 90, num: 2 },
    { name: 'Hans van Breukelen', pos: 'GK', rating: 93, num: 1 }
  ]},

  // 9. PORTUGAL
  { country: 'Portugal', code: 'POR', flag: '🇵🇹', year: '2016', tag: 'Campeón Eurocopa París 2016', tier: 'legendary', stars: [
    { name: 'Cristiano Ronaldo', pos: 'ST', rating: 98, bonus: 1, num: 7 },
    { name: 'Pepe', pos: 'CB', rating: 96, num: 3 },
    { name: 'Nani', pos: 'LW', rating: 91, num: 17 },
    { name: 'Renato Sanches', pos: 'CM', rating: 90, num: 16 },
    { name: 'William Carvalho', pos: 'DM', rating: 90, num: 14 },
    { name: 'Adrien Silva', pos: 'CM', rating: 88, num: 23 },
    { name: 'João Mário', pos: 'RW', rating: 89, num: 10 },
    { name: 'Cédric Soares', pos: 'RB', rating: 88, num: 21 },
    { name: 'José Fonte', pos: 'CB', rating: 89, num: 4 },
    { name: 'Raphaël Guerreiro', pos: 'LB', rating: 91, num: 5 },
    { name: 'Rui Patrício', pos: 'GK', rating: 94, num: 1 }
  ]},

  // 10. URUGUAY
  { country: 'Uruguay', code: 'URU', flag: '🇺🇾', year: '1930', tag: 'Primer Campeón Mundial 1930', tier: 'legendary', stars: [
    { name: 'Héctor Scarone', pos: 'AM', rating: 96, bonus: 1 },
    { name: 'José Nasazzi (El Gran Mariscal)', pos: 'CB', rating: 97 },
    { name: 'José Leandro Andrade (La Maravilla Negra)', pos: 'DM', rating: 97 },
    { name: 'Pedro Cea', pos: 'ST', rating: 94 },
    { name: 'Héctor Castro', pos: 'ST', rating: 92 },
    { name: 'Pablo Dorado', pos: 'RW', rating: 90 },
    { name: 'Santos Iriarte', pos: 'LW', rating: 91 },
    { name: 'Lorenzo Fernández', pos: 'DM', rating: 92 },
    { name: 'Álvaro Gestido', pos: 'CM', rating: 91 },
    { name: 'Ernesto Mascheroni', pos: 'LB', rating: 91 },
    { name: 'Enrique Ballestrero', pos: 'GK', rating: 91 }
  ]},
  { country: 'Uruguay', code: 'URU', flag: '🇺🇾', year: '1950', tag: 'El Maracanazo 1950', tier: 'legendary', stars: [
    { name: 'Obdulio Varela (El Negro Jefe)', pos: 'DM', rating: 98, bonus: 1, num: 5 },
    { name: 'Juan Alberto Schiaffino', pos: 'AM', rating: 98, num: 10 },
    { name: 'Alcides Ghiggia', pos: 'RW', rating: 96, num: 7 },
    { name: 'Óscar Míguez', pos: 'ST', rating: 93, num: 9 },
    { name: 'Julio Pérez', pos: 'AM', rating: 92, num: 8 },
    { name: 'Rubén Morán', pos: 'LW', rating: 89, num: 11 },
    { name: 'Víctor Rodríguez Andrade', pos: 'LB', rating: 94, num: 6 },
    { name: 'Matías González', pos: 'CB', rating: 93, num: 2 },
    { name: 'Eusebio Tejera', pos: 'CB', rating: 92, num: 3 },
    { name: 'Schubert Gambetta', pos: 'RB', rating: 93, num: 4 },
    { name: 'Roque Máspoli', pos: 'GK', rating: 95, num: 1 }
  ]},
  { country: 'Uruguay', code: 'URU', flag: '🇺🇾', year: '2010', tag: '4to Lugar Sudáfrica 2010', tier: 'legendary', stars: [
    { name: 'Diego Forlán', pos: 'ST', sec: ['AM'], rating: 97, bonus: 1, num: 10 },
    { name: 'Luis Suárez', pos: 'ST', rating: 94, num: 9 },
    { name: 'Edinson Cavani', pos: 'LW', rating: 91, num: 7 },
    { name: 'Diego Pérez (El Ruso)', pos: 'DM', rating: 91, num: 15 },
    { name: 'Egidio Arévalo Ríos', pos: 'DM', rating: 91, num: 17 },
    { name: 'Álvaro Pereira', pos: 'LW', rating: 89, num: 11 },
    { name: 'Maxi Pereira', pos: 'RB', rating: 90, num: 16 },
    { name: 'Diego Lugano', pos: 'CB', rating: 94, num: 2 },
    { name: 'Diego Godín', pos: 'CB', rating: 93, num: 3 },
    { name: 'Jorge Fucile', pos: 'LB', rating: 89, num: 4 },
    { name: 'Fernando Muslera', pos: 'GK', rating: 92, num: 1 }
  ]},

  // 11. CROACIA
  { country: 'Croacia', code: 'CRO', flag: '🇭🇷', year: '1998', tag: 'Bronce Francia 98', tier: 'legendary', stars: [
    { name: 'Davor Šuker', pos: 'ST', rating: 97, bonus: 1, num: 9 },
    { name: 'Robert Prosinečki', pos: 'CM', rating: 94, num: 8 },
    { name: 'Zvonimir Boban', pos: 'AM', rating: 95, num: 10 },
    { name: 'Goran Vlaović', pos: 'ST', rating: 89, num: 19 },
    { name: 'Aljoša Asanović', pos: 'CM', rating: 91, num: 7 },
    { name: 'Mario Stanić', pos: 'RW', rating: 90, num: 13 },
    { name: 'Robert Jarni', pos: 'LB', rating: 93, num: 17 },
    { name: 'Dario Šimić', pos: 'RB', rating: 90, num: 20 },
    { name: 'Igor Štimac', pos: 'CB', rating: 91, num: 4 },
    { name: 'Slaven Bilić', pos: 'CB', rating: 92, num: 6 },
    { name: 'Dražen Ladić', pos: 'GK', rating: 93, num: 1 }
  ]},
  { country: 'Croacia', code: 'CRO', flag: '🇭🇷', year: '2018', tag: 'Subcampeón del Mundo Rusia 2018', tier: 'legendary', stars: [
    { name: 'Luka Modrić', pos: 'CM', rating: 98, bonus: 1, num: 10 },
    { name: 'Ivan Rakitić', pos: 'CM', rating: 95, num: 7 },
    { name: 'Mario Mandžukić', pos: 'ST', rating: 93, num: 17 },
    { name: 'Ivan Perišić', pos: 'LW', rating: 94, num: 4 },
    { name: 'Ante Rebić', pos: 'RW', rating: 90, num: 18 },
    { name: 'Marcelo Brozović', pos: 'DM', rating: 92, num: 11 },
    { name: 'Šime Vrsaljko', pos: 'RB', rating: 90, num: 2 },
    { name: 'Dejan Lovren', pos: 'CB', rating: 91, num: 6 },
    { name: 'Domagoj Vida', pos: 'CB', rating: 91, num: 21 },
    { name: 'Ivan Strinić', pos: 'LB', rating: 87, num: 3 },
    { name: 'Danijel Subašić', pos: 'GK', rating: 94, num: 23 }
  ]},

  // 12. COLOMBIA
  { country: 'Colombia', code: 'COL', flag: '🇨🇴', year: '1990', tag: 'Octavos Italia 90', tier: 'legendary', stars: [
    { name: 'Carlos Valderrama (El Pibe)', pos: 'AM', rating: 96, bonus: 1, num: 10 },
    { name: 'René Higuita', pos: 'GK', rating: 93, num: 1 },
    { name: 'Freddy Rincón', pos: 'CM', rating: 93, num: 19 },
    { name: 'Bernardo Redín', pos: 'AM', rating: 90, num: 14 },
    { name: 'Arnoldo Iguarán', pos: 'ST', rating: 90, num: 16 },
    { name: 'Leonel Álvarez', pos: 'DM', rating: 92, num: 18 },
    { name: 'Gabriel Gómez', pos: 'CM', rating: 88, num: 8 },
    { name: 'Luis Fernando Herrera', pos: 'RB', rating: 89, num: 4 },
    { name: 'Luis Carlos Perea', pos: 'CB', rating: 90, num: 2 },
    { name: 'Andrés Escobar', pos: 'CB', rating: 93, num: 15 },
    { name: 'Gildardo Gómez', pos: 'LB', rating: 88, num: 3 }
  ]},
  { country: 'Colombia', code: 'COL', flag: '🇨🇴', year: '2014', tag: 'Cuartos de Final Brasil 2014', tier: 'legendary', stars: [
    { name: 'James Rodríguez', pos: 'AM', rating: 97, bonus: 1, num: 10 },
    { name: 'Juan Guillermo Cuadrado', pos: 'RW', rating: 93, num: 11 },
    { name: 'Teófilo Gutiérrez', pos: 'ST', rating: 89, num: 9 },
    { name: 'Jackson Martínez', pos: 'ST', rating: 88, num: 21 },
    { name: 'Carlos Sánchez (La Roca)', pos: 'DM', rating: 92, num: 6 },
    { name: 'Abel Aguilar', pos: 'CM', rating: 88, num: 8 },
    { name: 'Camilo Zúñiga', pos: 'RB', rating: 90, num: 18 },
    { name: 'Cristian Zapata', pos: 'CB', rating: 89, num: 2 },
    { name: 'Mario Yepes', pos: 'CB', rating: 93, num: 3 },
    { name: 'Pablo Armero', pos: 'LB', rating: 89, num: 7 },
    { name: 'David Ospina', pos: 'GK', rating: 93, num: 1 }
  ]},

  // 13. CHILE
  { country: 'Chile', code: 'CHI', flag: '🇨🇱', year: '2015', tag: 'Campeón Copa América 2015', tier: 'legendary', stars: [
    { name: 'Alexis Sánchez', pos: 'LW', rating: 96, bonus: 1, num: 7 },
    { name: 'Arturo Vidal', pos: 'CM', rating: 96, num: 8 },
    { name: 'Eduardo Vargas', pos: 'ST', rating: 92, num: 11 },
    { name: 'Jorge Valdivia (El Mago)', pos: 'AM', rating: 93, num: 10 },
    { name: 'Charles Aránguiz', pos: 'CM', rating: 93, num: 20 },
    { name: 'Marcelo Díaz', pos: 'DM', rating: 91, num: 21 },
    { name: 'Mauricio Isla', pos: 'RB', rating: 91, num: 4 },
    { name: 'Gary Medel (El Pitbull)', pos: 'CB', rating: 94, num: 17 },
    { name: 'Gonzalo Jara', pos: 'CB', rating: 89, num: 18 },
    { name: 'Jean Beausejour', pos: 'LB', rating: 90, num: 15 },
    { name: 'Claudio Bravo', pos: 'GK', rating: 95, num: 1 }
  ]},

  // 14. MÉXICO
  { country: 'México', code: 'MEX', flag: '🇲🇽', year: '1986', tag: 'Cuartos de Final México 86', tier: 'legendary', stars: [
    { name: 'Hugo Sánchez', pos: 'ST', rating: 96, bonus: 1, num: 9 },
    { name: 'Manuel Negrete', pos: 'AM', rating: 92, num: 22 },
    { name: 'Tomás Boy', pos: 'AM', rating: 91, num: 10 },
    { name: 'Javier Aguirre', pos: 'CM', rating: 90, num: 13 },
    { name: 'Carlos Hermosillo', pos: 'ST', rating: 88, num: 15 },
    { name: 'Miguel España', pos: 'DM', rating: 89, num: 16 },
    { name: 'Mario Trejo', pos: 'RB', rating: 88, num: 2 },
    { name: 'Fernando Quirarte', pos: 'CB', rating: 92, num: 3 },
    { name: 'Felix Cruz', pos: 'CB', rating: 89, num: 14 },
    { name: 'Raúl Servín', pos: 'LB', rating: 88, num: 17 },
    { name: 'Pablo Larios', pos: 'GK', rating: 90, num: 1 }
  ]},
  { country: 'México', code: 'MEX', flag: '🇲🇽', year: '1998', tag: 'Octavos de Final Francia 98', tier: 'legendary', stars: [
    { name: 'Cuauhtémoc Blanco', pos: 'AM', rating: 94, bonus: 1, num: 11 },
    { name: 'Luis Hernández (El Matador)', pos: 'ST', rating: 94, num: 15 },
    { name: 'Alberto García Aspe', pos: 'CM', rating: 92, num: 8 },
    { name: 'Ramón Ramírez', pos: 'LW', rating: 91, num: 7 },
    { name: 'Jaime Ordiales', pos: 'CM', rating: 87, num: 13 },
    { name: 'Braulio Luna', pos: 'RW', rating: 87, num: 19 },
    { name: 'Pável Pardo', pos: 'RB', rating: 90, num: 18 },
    { name: 'Claudio Suárez (El Emperador)', pos: 'CB', rating: 93, num: 2 },
    { name: 'Duilio Davino', pos: 'CB', rating: 88, num: 5 },
    { name: 'Salvador Carmona', pos: 'LB', rating: 88, num: 22 },
    { name: 'Jorge Campos', pos: 'GK', rating: 94, num: 1 }
  ]},

  // 15. ESTADOS UNIDOS
  { country: 'Estados Unidos', code: 'USA', flag: '🇺🇸', year: '2002', tag: 'Cuartos de Final Corea-Japón 2002', tier: 'gold', stars: [
    { name: 'Landon Donovan', pos: 'RW', sec: ['AM'], rating: 92, bonus: 1, num: 21 },
    { name: 'Brian McBride', pos: 'ST', rating: 90, num: 20 },
    { name: 'Clint Mathis', pos: 'ST', rating: 87, num: 11 },
    { name: 'John O\'Brien', pos: 'CM', rating: 90, num: 5 },
    { name: 'Claudio Reyna', pos: 'CM', rating: 91, num: 10 },
    { name: 'Pablo Mastroeni', pos: 'DM', rating: 88, num: 4 },
    { name: 'Tony Sanneh', pos: 'RB', rating: 89, num: 22 },
    { name: 'Eddie Pope', pos: 'CB', rating: 90, num: 23 },
    { name: 'Gregg Berhalter', pos: 'CB', rating: 87, num: 3 },
    { name: 'Frankie Hejduk', pos: 'LB', rating: 88, num: 2 },
    { name: 'Brad Friedel', pos: 'GK', rating: 93, num: 1 }
  ]},

  // 16. MARRUECOS
  { country: 'Marruecos', code: 'MAR', flag: '🇲🇦', year: '2022', tag: 'Histórico 4to Lugar Qatar 2022', tier: 'legendary', stars: [
    { name: 'Achraf Hakimi', pos: 'RB', rating: 95, bonus: 1, num: 2 },
    { name: 'Hakim Ziyech', pos: 'RW', rating: 93, num: 7 },
    { name: 'Youssef En-Nesyri', pos: 'ST', rating: 91, num: 19 },
    { name: 'Sofiane Boufal', pos: 'LW', rating: 89, num: 17 },
    { name: 'Sofyan Amrabat', pos: 'DM', rating: 94, num: 4 },
    { name: 'Azzedine Ounahi', pos: 'CM', rating: 92, num: 8 },
    { name: 'Selim Amallah', pos: 'CM', rating: 88, num: 15 },
    { name: 'Romain Saïss', pos: 'CB', rating: 92, num: 6 },
    { name: 'Nayef Aguerd', pos: 'CB', rating: 91, num: 5 },
    { name: 'Noussair Mazraoui', pos: 'LB', rating: 90, num: 3 },
    { name: 'Yassine Bounou (Bono)', pos: 'GK', rating: 96, num: 1 }
  ]},

  // 17. NIGERIA
  { country: 'Nigeria', code: 'NGA', flag: '🇳🇬', year: '1994', tag: 'Super Eagles USA 94', tier: 'legendary', stars: [
    { name: 'Jay-Jay Okocha', pos: 'AM', rating: 94, bonus: 1, num: 10 },
    { name: 'Daniel Amokachi (El Toro)', pos: 'ST', rating: 92, num: 14 },
    { name: 'Rashidi Yekini', pos: 'ST', rating: 93, num: 9 },
    { name: 'Emmanuel Amunike', pos: 'LW', rating: 92, num: 11 },
    { name: 'Finidi George', pos: 'RW', rating: 93, num: 7 },
    { name: 'Sunday Oliseh', pos: 'DM', rating: 92, num: 15 },
    { name: 'Augustine Eguavoen', pos: 'RB', rating: 88, num: 2 },
    { name: 'Uche Okechukwu (El Gigante)', pos: 'CB', rating: 91, num: 5 },
    { name: 'Chidi Nwanu', pos: 'CB', rating: 88, num: 6 },
    { name: 'Michael Emenalo', pos: 'LB', rating: 87, num: 3 },
    { name: 'Peter Rufai', pos: 'GK', rating: 90, num: 1 }
  ]},
  { country: 'Nigeria', code: 'NGA', flag: '🇳🇬', year: '1996', tag: 'Oro Olímpico Atlanta 96', tier: 'legendary', stars: [
    { name: 'Nwankwo Kanu', pos: 'ST', rating: 95, bonus: 1, num: 4 },
    { name: 'Jay-Jay Okocha', pos: 'AM', rating: 95, num: 10 },
    { name: 'Daniel Amokachi', pos: 'ST', rating: 93, num: 11 },
    { name: 'Emmanuel Amunike', pos: 'LW', rating: 93, num: 14 },
    { name: 'Tijani Babangida', pos: 'RW', rating: 91, num: 17 },
    { name: 'Sunday Oliseh', pos: 'DM', rating: 93, num: 15 },
    { name: 'Mobi Oparaku', pos: 'RB', rating: 87, num: 2 },
    { name: 'Taribo West', pos: 'CB', rating: 93, num: 3 },
    { name: 'Uche Okechukwu', pos: 'CB', rating: 92, num: 5 },
    { name: 'Celestine Babayaro', pos: 'LB', rating: 91, num: 13 },
    { name: 'Joseph Dosu', pos: 'GK', rating: 89, num: 1 }
  ]},

  // 18. CAMERÚN
  { country: 'Camerún', code: 'CMR', flag: '🇨🇲', year: '1990', tag: 'Cuartos de Final Italia 90', tier: 'legendary', stars: [
    { name: 'Roger Milla', pos: 'ST', rating: 96, bonus: 1, num: 9 },
    { name: 'François Omam-Biyik', pos: 'ST', rating: 93, num: 7 },
    { name: 'Cyrille Makanaky', pos: 'AM', rating: 91, num: 20 },
    { name: 'Louis-Paul M\'Fédé', pos: 'CM', rating: 90, num: 10 },
    { name: 'André Kana-Biyik', pos: 'DM', rating: 90, num: 6 },
    { name: 'Emile M\'Bouh', pos: 'DM', rating: 89, num: 8 },
    { name: 'Stephen Tataw', pos: 'RB', rating: 90, num: 14 },
    { name: 'Emmanuel Kundé', pos: 'CB', rating: 91, num: 4 },
    { name: 'Victor N\'Dip', pos: 'CB', rating: 89, num: 17 },
    { name: 'Bertin Ebwellé', pos: 'LB', rating: 89, num: 5 },
    { name: 'Thomas N\'Kono', pos: 'GK', rating: 94, num: 16 }
  ]},

  // 19. SENEGAL
  { country: 'Senegal', code: 'SEN', flag: '🇸🇳', year: '2002', tag: 'Cuartos de Final Corea-Japón 2002', tier: 'legendary', stars: [
    { name: 'El Hadji Diouf', pos: 'ST', rating: 94, bonus: 1, num: 11 },
    { name: 'Henri Camara', pos: 'ST', rating: 91, num: 7 },
    { name: 'Khalilou Fadiga', pos: 'LW', rating: 92, num: 10 },
    { name: 'Papa Bouba Diop (El Armario)', pos: 'DM', rating: 93, num: 19 },
    { name: 'Salif Diao', pos: 'DM', rating: 90, num: 15 },
    { name: 'Aliou Cissé', pos: 'DM', rating: 91, num: 6 },
    { name: 'Ferdinand Coly', pos: 'RB', rating: 89, num: 17 },
    { name: 'Lamine Diatta', pos: 'CB', rating: 89, num: 13 },
    { name: 'Pape Malick Diop', pos: 'CB', rating: 88, num: 4 },
    { name: 'Omar Daf', pos: 'LB', rating: 88, num: 2 },
    { name: 'Tony Sylva', pos: 'GK', rating: 91, num: 1 }
  ]},

  // 20. DINAMARCA
  { country: 'Dinamarca', code: 'DEN', flag: '🇩🇰', year: '1992', tag: 'Campeón Eurocopa Suecia 1992', tier: 'legendary', stars: [
    { name: 'Peter Schmeichel', pos: 'GK', rating: 97, bonus: 1, num: 1 },
    { name: 'Brian Laudrup', pos: 'RW', rating: 95, num: 11 },
    { name: 'Flemming Povlsen', pos: 'ST', rating: 91, num: 9 },
    { name: 'Kim Vilfort', pos: 'CM', rating: 91, num: 18 },
    { name: 'John Jensen (Faxe)', pos: 'CM', rating: 91, num: 7 },
    { name: 'Henrik Larsen', pos: 'AM', rating: 90, num: 13 },
    { name: 'John Sivebæk', pos: 'RB', rating: 89, num: 2 },
    { name: 'Lars Olsen', pos: 'CB', rating: 92, num: 4 },
    { name: 'Torben Piechnik', pos: 'CB', rating: 88, num: 12 },
    { name: 'Kent Nielsen', pos: 'CB', rating: 89, num: 3 },
    { name: 'Kim Christofte', pos: 'LB', rating: 88, num: 6 }
  ]},

  // 21. SUECIA
  { country: 'Suecia', code: 'SWE', flag: '🇸🇪', year: '1994', tag: 'Bronce USA 94', tier: 'legendary', stars: [
    { name: 'Tomas Brolin', pos: 'AM', rating: 95, bonus: 1, num: 11 },
    { name: 'Martin Dahlin', pos: 'ST', rating: 92, num: 10 },
    { name: 'Kennet Andersson', pos: 'ST', rating: 93, num: 19 },
    { name: 'Jonas Thern', pos: 'DM', rating: 92, num: 6 },
    { name: 'Stefan Schwarz', pos: 'DM', rating: 91, num: 8 },
    { name: 'Klas Ingesson', pos: 'CM', rating: 90, num: 9 },
    { name: 'Roland Nilsson', pos: 'RB', rating: 90, num: 2 },
    { name: 'Patrik Andersson', pos: 'CB', rating: 93, num: 3 },
    { name: 'Joachim Björklund', pos: 'CB', rating: 90, num: 4 },
    { name: 'Pontus Kåmark', pos: 'LB', rating: 88, num: 14 },
    { name: 'Thomas Ravelli', pos: 'GK', rating: 94, num: 1 }
  ]},

  // 22. POLONIA
  { country: 'Polonia', code: 'POL', flag: '🇵🇱', year: '1974', tag: 'Bronce Alemania 74', tier: 'legendary', stars: [
    { name: 'Grzegorz Lato', pos: 'RW', rating: 96, bonus: 1, num: 16 },
    { name: 'Kazimierz Deyna', pos: 'AM', rating: 97, num: 12 },
    { name: 'Andrzej Szarmach', pos: 'ST', rating: 94, num: 17 },
    { name: 'Robert Gadocha', pos: 'LW', rating: 93, num: 18 },
    { name: 'Henryk Kasperczak', pos: 'CM', rating: 92, num: 13 },
    { name: 'Zygmunt Maszczyk', pos: 'DM', rating: 90, num: 14 },
    { name: 'Antoni Szymanowski', pos: 'RB', rating: 92, num: 4 },
    { name: 'Jerzy Gorgoń', pos: 'CB', rating: 94, num: 6 },
    { name: 'Władysław Żmuda', pos: 'CB', rating: 93, num: 9 },
    { name: 'Adam Musiał', pos: 'LB', rating: 90, num: 5 },
    { name: 'Jan Tomaszewski', pos: 'GK', rating: 95, num: 2 }
  ]},

  // 23. HUNGRÍA
  { country: 'Hungría', code: 'HUN', flag: '🇭🇺', year: '1954', tag: 'El Equipo de Oro (Magiares Mágicos)', tier: 'legendary', stars: [
    { name: 'Ferenc Puskás (Cañoncito Pum)', pos: 'ST', rating: 99, bonus: 1, num: 10 },
    { name: 'Sándor Kocsis (Cabeza de Oro)', pos: 'ST', rating: 97, num: 8 },
    { name: 'Nándor Hidegkuti', pos: 'AM', rating: 96, num: 9 },
    { name: 'Zoltán Czibor', pos: 'LW', rating: 95, num: 11 },
    { name: 'László Budai', pos: 'RW', rating: 92, num: 7 },
    { name: 'József Bozsik', pos: 'CM', rating: 96, num: 5 },
    { name: 'József Zakariás', pos: 'DM', rating: 93, num: 6 },
    { name: 'Jenő Buzánszky', pos: 'RB', rating: 93, num: 2 },
    { name: 'Gyula Lóránt', pos: 'CB', rating: 93, num: 3 },
    { name: 'Mihály Lantos', pos: 'LB', rating: 93, num: 4 },
    { name: 'Gyula Grosics (La Pantera Negra)', pos: 'GK', rating: 96, num: 1 }
  ]},

  // 24. BULGARIA
  { country: 'Bulgaria', code: 'BUL', flag: '🇧🇬', year: '1994', tag: 'Semifinales USA 94', tier: 'legendary', stars: [
    { name: 'Hristo Stoichkov', pos: 'ST', sec: ['LW'], rating: 97, bonus: 1, num: 8 },
    { name: 'Emil Kostadinov', pos: 'RW', rating: 92, num: 7 },
    { name: 'Krassimir Balakov', pos: 'AM', rating: 94, num: 10 },
    { name: 'Yordan Letchkov', pos: 'CM', rating: 93, num: 9 },
    { name: 'Zlatko Yankov', pos: 'DM', rating: 89, num: 6 },
    { name: 'Nasko Sirakov', pos: 'ST', rating: 89, num: 11 },
    { name: 'Emil Kremenliev', pos: 'RB', rating: 87, num: 2 },
    { name: 'Trifon Ivanov (El Lobo)', pos: 'CB', rating: 93, num: 3 },
    { name: 'Petar Hubchev', pos: 'CB', rating: 90, num: 5 },
    { name: 'Tsanko Tsvetanov', pos: 'LB', rating: 88, num: 4 },
    { name: 'Borislav Mikhailov', pos: 'GK', rating: 91, num: 1 }
  ]},

  // 25. RUMANIA
  { country: 'Rumania', code: 'ROU', flag: '🇷🇴', year: '1994', tag: 'Cuartos de Final USA 94', tier: 'legendary', stars: [
    { name: 'Gheorghe Hagi (El Maradona de los Cárpatos)', pos: 'AM', rating: 97, bonus: 1, num: 10 },
    { name: 'Florin Răducioiu', pos: 'ST', rating: 93, num: 9 },
    { name: 'Ilie Dumitrescu', pos: 'LW', rating: 93, num: 11 },
    { name: 'Dorinel Munteanu', pos: 'CM', rating: 90, num: 7 },
    { name: 'Ioan Lupescu', pos: 'CM', rating: 90, num: 5 },
    { name: 'Gheorghe Popescu', pos: 'DM', sec: ['CB'], rating: 94, num: 6 },
    { name: 'Dan Petrescu', pos: 'RB', rating: 92, num: 2 },
    { name: 'Daniel Prodan', pos: 'CB', rating: 89, num: 3 },
    { name: 'Miodrag Belodedici', pos: 'CB', rating: 93, num: 4 },
    { name: 'Tibor Selymes', pos: 'LB', rating: 88, num: 13 },
    { name: 'Bogdan Stelea', pos: 'GK', rating: 91, num: 12 }
  ]},

  // 26. TURQUÍA
  { country: 'Turquía', code: 'TUR', flag: '🇹🇷', year: '2002', tag: 'Bronce Mundial Corea-Japón 2002', tier: 'legendary', stars: [
    { name: 'Rüştü Reçber', pos: 'GK', rating: 95, bonus: 1, num: 1 },
    { name: 'Hakan Şükür', pos: 'ST', rating: 93, num: 9 },
    { name: 'İlhan Mansız', pos: 'ST', rating: 91, num: 17 },
    { name: 'Hasan Şaş', pos: 'LW', rating: 93, num: 11 },
    { name: 'Yıldıray Baştürk', pos: 'AM', rating: 92, num: 10 },
    { name: 'Emre Belözoğlu', pos: 'CM', rating: 91, num: 21 },
    { name: 'Tugay Kerimoğlu', pos: 'DM', rating: 92, num: 8 },
    { name: 'Fatih Akyel', pos: 'RB', rating: 89, num: 4 },
    { name: 'Alpay Özalan', pos: 'CB', rating: 92, num: 3 },
    { name: 'Bülent Korkmaz', pos: 'CB', rating: 91, num: 5 },
    { name: 'Ergün Penbe', pos: 'LB', rating: 89, num: 18 }
  ]},

  // 27. GRECIA
  { country: 'Grecia', code: 'GRE', flag: '🇬🇷', year: '2004', tag: 'Campeón Eurocopa Portugal 2004', tier: 'legendary', stars: [
    { name: 'Theodoros Zagorakis', pos: 'CM', rating: 94, bonus: 1, num: 7 },
    { name: 'Angelos Charisteas', pos: 'ST', rating: 93, num: 9 },
    { name: 'Angelos Basinas', pos: 'DM', rating: 91, num: 6 },
    { name: 'Kostas Katsouranis', pos: 'CM', rating: 91, num: 21 },
    { name: 'Giorgos Karagounis', pos: 'AM', rating: 92, num: 20 },
    { name: 'Zisis Vryzas', pos: 'ST', rating: 88, num: 15 },
    { name: 'Giourkas Seitaridis', pos: 'RB', rating: 92, num: 2 },
    { name: 'Traianos Dellas (El Coloso)', pos: 'CB', rating: 94, num: 5 },
    { name: 'Michalis Kapsis', pos: 'CB', rating: 91, num: 19 },
    { name: 'Takis Fyssas', pos: 'LB', rating: 89, num: 14 },
    { name: 'Antonios Nikopolidis', pos: 'GK', rating: 94, num: 1 }
  ]},

  // 28. PERÚ
  { country: 'Perú', code: 'PER', flag: '🇵🇪', year: '1970', tag: 'Cuartos de Final México 70', tier: 'legendary', stars: [
    { name: 'Teófilo Cubillas (El Nene)', pos: 'AM', rating: 97, bonus: 1, num: 10 },
    { name: 'Hugo Sotil (El Cholo)', pos: 'ST', rating: 94, num: 20 },
    { name: 'Héctor Chumpitaz (El Capitán de América)', pos: 'CB', rating: 96, num: 4 },
    { name: 'Pedro León (Perico)', pos: 'ST', rating: 92, num: 9 },
    { name: 'Julio Baylón', pos: 'RW', rating: 90, num: 7 },
    { name: 'Alberto Gallardo', pos: 'LW', rating: 91, num: 11 },
    { name: 'Ramón Mifflin', pos: 'CM', rating: 91, num: 6 },
    { name: 'Roberto Chale', pos: 'CM', rating: 92, num: 8 },
    { name: 'Eloy Campos', pos: 'RB', rating: 89, num: 2 },
    { name: 'Orlando de la Torre', pos: 'CB', rating: 89, num: 3 },
    { name: 'Luis Rubiños', pos: 'GK', rating: 90, num: 1 }
  ]},
  { country: 'Perú', code: 'PER', flag: '🇵🇪', year: '1978', tag: 'Segunda Fase Argentina 78', tier: 'legendary', stars: [
    { name: 'Teófilo Cubillas', pos: 'AM', rating: 97, bonus: 1, num: 10 },
    { name: 'César Cueto (El Poeta de la Zurda)', pos: 'CM', rating: 95, num: 8 },
    { name: 'Juan Carlos Oblitas', pos: 'LW', rating: 92, num: 11 },
    { name: 'Guillermo La Rosa', pos: 'ST', rating: 89, num: 19 },
    { name: 'José Velásquez (El Patrón)', pos: 'DM', rating: 94, num: 6 },
    { name: 'Juan José Muñante', pos: 'RW', rating: 91, num: 7 },
    { name: 'Jaime Duarte', pos: 'RB', rating: 91, num: 2 },
    { name: 'Héctor Chumpitaz', pos: 'CB', rating: 95, num: 4 },
    { name: 'Rodulfo Manzo', pos: 'CB', rating: 88, num: 3 },
    { name: 'Roberto Rojas', pos: 'LB', rating: 88, num: 5 },
    { name: 'Ramón Quiroga', pos: 'GK', rating: 91, num: 21 }
  ]},

  // 29. PARAGUAY
  { country: 'Paraguay', code: 'PAR', flag: '🇵🇾', year: '1998', tag: 'Octavos de Final Francia 98', tier: 'legendary', stars: [
    { name: 'José Luis Chilavert', pos: 'GK', rating: 96, bonus: 1, num: 1 },
    { name: 'Carlos Gamarra (El Colorado)', pos: 'CB', rating: 96, num: 4 },
    { name: 'Celso Ayala', pos: 'CB', rating: 92, num: 5 },
    { name: 'Pedro Sarabia', pos: 'RB', rating: 89, num: 2 },
    { name: 'Denis Caniza', pos: 'LB', rating: 90, num: 11 },
    { name: 'Julio César Enciso', pos: 'DM', rating: 90, num: 6 },
    { name: 'Roberto Acuña (El Toro)', pos: 'CM', rating: 92, num: 10 },
    { name: 'Carlos Humberto Paredes', pos: 'CM', rating: 89, num: 13 },
    { name: 'Miguel Ángel Benítez', pos: 'LW', rating: 90, num: 15 },
    { name: 'José Cardozo', pos: 'ST', rating: 92, num: 9 },
    { name: 'Hugo Brizuela', pos: 'RW', rating: 87, num: 17 }
  ]},
  { country: 'Paraguay', code: 'PAR', flag: '🇵🇾', year: '2010', tag: 'Cuartos de Final Sudáfrica 2010', tier: 'legendary', stars: [
    { name: 'Justo Villar', pos: 'GK', rating: 95, bonus: 1, num: 1 },
    { name: 'Paulo da Silva', pos: 'CB', rating: 92, num: 14 },
    { name: 'Antolín Alcaraz', pos: 'CB', rating: 91, num: 21 },
    { name: 'Carlos Bonet', pos: 'RB', rating: 88, num: 6 },
    { name: 'Claudio Morel Rodríguez', pos: 'LB', rating: 90, num: 3 },
    { name: 'Víctor Cáceres (El Topo)', pos: 'DM', rating: 90, num: 15 },
    { name: 'Cristian Riveros', pos: 'CM', rating: 91, num: 16 },
    { name: 'Enrique Vera', pos: 'CM', rating: 90, num: 13 },
    { name: 'Jonathan Santana', pos: 'CM', rating: 87, num: 8 },
    { name: 'Nelson Haedo Valdez', pos: 'ST', rating: 91, num: 18 },
    { name: 'Lucas Barrios', pos: 'ST', rating: 90, num: 19 }
  ]},

  // 30. COSTA RICA
  { country: 'Costa Rica', code: 'CRC', flag: '🇨🇷', year: '2014', tag: 'Cuartos de Final Invictos Brasil 2014', tier: 'legendary', stars: [
    { name: 'Keylor Navas', pos: 'GK', rating: 97, bonus: 1, num: 1 },
    { name: 'Bryan Ruiz', pos: 'AM', rating: 93, num: 10 },
    { name: 'Joel Campbell', pos: 'ST', rating: 91, num: 9 },
    { name: 'Celso Borges', pos: 'CM', rating: 91, num: 5 },
    { name: 'Yeltsin Tejeda', pos: 'DM', rating: 89, num: 17 },
    { name: 'Christian Bolaños', pos: 'RW', rating: 90, num: 7 },
    { name: 'Cristian Gamboa', pos: 'RB', rating: 90, num: 16 },
    { name: 'Giancarlo González (Pipo)', pos: 'CB', rating: 92, num: 3 },
    { name: 'Óscar Duarte', pos: 'CB', rating: 90, num: 6 },
    { name: 'Michael Umaña', pos: 'CB', rating: 89, num: 4 },
    { name: 'Júnior Díaz', pos: 'LB', rating: 89, num: 15 }
  ]}
];

ROSTERS.forEach(r => {
  add(buildTeam(
    `${r.code.toLowerCase()}_${r.year}`,
    r.country,
    r.code,
    'worldcup',
    r.year,
    r.tag,
    r.flag,
    r.country,
    r.tier,
    r.stars
  ));
});

console.log(`Generated ${NATIONAL_TEAMS_EXTRA.length} National Team squads.`);
