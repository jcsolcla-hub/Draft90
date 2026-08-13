const fs = require('fs');
const path = require('path');

const NATIONAL_TEAMS = [
  { name: "Alemania", code: "DE", flag: "🇩🇪", country: "Germany", years: ["1934", "1954", "1974", "1990", "2014", "2026"], tier: "gold" },
  { name: "Angola", code: "AO", flag: "🇦🇴", country: "Angola", years: ["2006", "2026"], tier: "bronze" },
  { name: "Arabia Saudita", code: "SA", flag: "🇸🇦", country: "Saudi Arabia", years: ["1994", "2006", "2022", "2026"], tier: "bronze" },
  { name: "Argelia", code: "DZ", flag: "🇩🇿", country: "Algeria", years: ["1982", "1986", "2014", "2026"], tier: "silver" },
  { name: "Argentina", code: "AR", flag: "🇦🇷", country: "Argentina", years: ["1978", "1986", "1990", "2022", "2026"], tier: "legendary" },
  { name: "Australia", code: "AU", flag: "🇦🇺", country: "Australia", years: ["2006", "2010", "2022", "2026"], tier: "silver" },
  { name: "Austria", code: "AT", flag: "🇦🇹", country: "Austria", years: ["1934", "1954", "1982", "1998", "2026"], tier: "silver" },
  { name: "Bélgica", code: "BE", flag: "🇧🇪", country: "Belgium", years: ["1986", "1990", "2018", "2022", "2026"], tier: "gold" },
  { name: "Bolivia", code: "BO", flag: "🇧🇴", country: "Bolivia", years: ["1930", "1950", "1994", "2026"], tier: "bronze" },
  { name: "Bosnia y Herzegovina", code: "BA", flag: "🇧🇦", country: "Bosnia", years: ["2014", "2026"], tier: "silver" },
  { name: "Brasil", code: "BR", flag: "🇧🇷", country: "Brazil", years: ["1958", "1962", "1970", "1994", "2002", "2026"], tier: "legendary" },
  { name: "Bulgaria", code: "BG", flag: "🇧🇬", country: "Bulgaria", years: ["1962", "1994", "1998", "2026"], tier: "silver" },
  { name: "Camerún", code: "CM", flag: "🇨🇲", country: "Cameroon", years: ["1982", "1990", "2002", "2014", "2026"], tier: "silver" },
  { name: "Canadá", code: "CA", flag: "🇨🇦", country: "Canada", years: ["1986", "2022", "2026"], tier: "bronze" },
  { name: "Catar", code: "QA", flag: "🇶🇦", country: "Qatar", years: ["2022", "2026"], tier: "bronze" },
  { name: "Checoslovaquia", code: "CZ", flag: "🇨🇿", country: "Czechia", years: ["1934", "1962", "1990", "2026"], tier: "silver" },
  { name: "Chile", code: "CL", flag: "🇨🇱", country: "Chile", years: ["1962", "1998", "2014", "2026"], tier: "gold" },
  { name: "China", code: "CN", flag: "🇨🇳", country: "China", years: ["2002", "2026"], tier: "bronze" },
  { name: "Colombia", code: "CO", flag: "🇨🇴", country: "Colombia", years: ["1962", "1990", "2014", "2018", "2026"], tier: "gold" },
  { name: "Corea del Norte", code: "KP", flag: "🇰🇵", country: "North Korea", years: ["1966", "2010", "2026"], tier: "bronze" },
  { name: "Corea del Sur", code: "KR", flag: "🇰🇷", country: "South Korea", years: ["2002", "2010", "2022", "2026"], tier: "silver" },
  { name: "Costa de Marfil", code: "CI", flag: "🇨🇮", country: "Ivory Coast", years: ["2006", "2010", "2014", "2026"], tier: "silver" },
  { name: "Costa Rica", code: "CR", flag: "🇨🇷", country: "Costa Rica", years: ["1990", "2014", "2022", "2026"], tier: "silver" },
  { name: "Croacia", code: "HR", flag: "🇭🇷", country: "Croatia", years: ["1998", "2018", "2022", "2026"], tier: "gold" },
  { name: "Cuba", code: "CU", flag: "🇨🇺", country: "Cuba", years: ["1938", "2026"], tier: "bronze" },
  { name: "Dinamarca", code: "DK", flag: "🇩🇰", country: "Denmark", years: ["1986", "1998", "2002", "2026"], tier: "gold" },
  { name: "Ecuador", code: "EC", flag: "🇪🇨", country: "Ecuador", years: ["2002", "2006", "2022", "2026"], tier: "silver" },
  { name: "Egipto", code: "EG", flag: "🇪🇬", country: "Egypt", years: ["1934", "1990", "2018", "2026"], tier: "silver" },
  { name: "El Salvador", code: "SV", flag: "🇸🇻", country: "El Salvador", years: ["1970", "1982", "2026"], tier: "bronze" },
  { name: "Emiratos Árabes Unidos", code: "AE", flag: "🇦🇪", country: "UAE", years: ["1990", "2026"], tier: "bronze" },
  { name: "Escocia", code: "SCO", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", country: "Scotland", years: ["1974", "1978", "1998", "2026"], tier: "silver" },
  { name: "Eslovaquia", code: "SK", flag: "🇸🇰", country: "Slovakia", years: ["2010", "2026"], tier: "silver" },
  { name: "Eslovenia", code: "SI", flag: "🇸🇮", country: "Slovenia", years: ["2002", "2010", "2026"], tier: "silver" },
  { name: "España", code: "ES", flag: "🇪🇸", country: "Spain", years: ["1950", "1982", "2010", "2022", "2026"], tier: "gold" },
  { name: "Estados Unidos", code: "US", flag: "🇺🇸", country: "USA", years: ["1930", "2002", "2014", "2026"], tier: "silver" },
  { name: "Francia", code: "FR", flag: "🇫🇷", country: "France", years: ["1958", "1986", "1998", "2018", "2022", "2026"], tier: "legendary" },
  { name: "Gales", code: "WAL", flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", country: "Wales", years: ["1958", "2022", "2026"], tier: "silver" },
  { name: "Ghana", code: "GH", flag: "🇬🇭", country: "Ghana", years: ["2006", "2010", "2022", "2026"], tier: "silver" },
  { name: "Grecia", code: "GR", flag: "🇬🇷", country: "Greece", years: ["1994", "2004", "2014", "2026"], tier: "silver" },
  { name: "Haití", code: "HT", flag: "🇭🇹", country: "Haiti", years: ["1974", "2026"], tier: "bronze" },
  { name: "Honduras", code: "HN", flag: "🇭🇳", country: "Honduras", years: ["1982", "2010", "2014", "2026"], tier: "bronze" },
  { name: "Hungría", code: "HU", flag: "🇭🇺", country: "Hungary", years: ["1938", "1954", "1966", "1986", "2026"], tier: "gold" },
  { name: "India", code: "IN", flag: "🇮🇳", country: "India", years: ["1950", "2026"], tier: "bronze" },
  { name: "Indonesia", code: "ID", flag: "🇮🇩", country: "Indonesia", years: ["1938", "2026"], tier: "bronze" },
  { name: "Irak", code: "IQ", flag: "🇮🇶", country: "Iraq", years: ["1986", "2026"], tier: "bronze" },
  { name: "Irán", code: "IR", flag: "🇮🇷", country: "Iran", years: ["1978", "1998", "2018", "2022", "2026"], tier: "silver" },
  { name: "Irlanda", code: "IE", flag: "🇮🇪", country: "Ireland", years: ["1990", "1994", "2002", "2026"], tier: "silver" },
  { name: "Irlanda del Norte", code: "NIR", flag: "🇬🇧", country: "Northern Ireland", years: ["1958", "1982", "1986", "2026"], tier: "silver" },
  { name: "Islandia", code: "IS", flag: "🇮🇸", country: "Iceland", years: ["2018", "2026"], tier: "silver" },
  { name: "Israel", code: "IL", flag: "🇮🇱", country: "Israel", years: ["1970", "2026"], tier: "bronze" },
  { name: "Italia", code: "IT", flag: "🇮🇹", country: "Italy", years: ["1934", "1938", "1982", "2006", "2026"], tier: "gold" },
  { name: "Jamaica", code: "JM", flag: "🇯🇲", country: "Jamaica", years: ["1998", "2026"], tier: "bronze" },
  { name: "Japón", code: "JP", flag: "🇯🇵", country: "Japan", years: ["2002", "2010", "2022", "2026"], tier: "silver" },
  { name: "Kuwait", code: "KW", flag: "🇰🇼", country: "Kuwait", years: ["1982", "2026"], tier: "bronze" },
  { name: "Marruecos", code: "MA", flag: "🇲🇦", country: "Morocco", years: ["1970", "1986", "2022", "2026"], tier: "gold" },
  { name: "México", code: "MX", flag: "🇲🇽", country: "Mexico", years: ["1970", "1986", "1998", "2014", "2026"], tier: "silver" },
  { name: "Nigeria", code: "NG", flag: "🇳🇬", country: "Nigeria", years: ["1994", "1998", "2014", "2018", "2026"], tier: "silver" },
  { name: "Noruega", code: "NO", flag: "🇳🇴", country: "Norway", years: ["1938", "1994", "1998", "2026"], tier: "silver" },
  { name: "Nueva Zelanda", code: "NZ", flag: "🇳🇿", country: "New Zealand", years: ["1982", "2010", "2026"], tier: "bronze" },
  { name: "Países Bajos", code: "NL", flag: "🇳🇱", country: "Netherlands", years: ["1974", "1978", "2010", "2014", "2026"], tier: "gold" },
  { name: "Panamá", code: "PA", flag: "🇵🇦", country: "Panama", years: ["2018", "2026"], tier: "bronze" },
  { name: "Paraguay", code: "PY", flag: "🇵🇾", country: "Paraguay", years: ["1986", "1998", "2010", "2026"], tier: "silver" },
  { name: "Perú", code: "PE", flag: "🇵🇪", country: "Peru", years: ["1970", "1978", "1982", "2026"], tier: "silver" },
  { name: "Polonia", code: "PL", flag: "🇵🇱", country: "Poland", years: ["1974", "1982", "1986", "2026"], tier: "gold" },
  { name: "Portugal", code: "PT", flag: "🇵🇹", country: "Portugal", years: ["1966", "2006", "2016", "2022", "2026"], tier: "gold" },
  { name: "Rumanía", code: "RO", flag: "🇷🇴", country: "Romania", years: ["1970", "1994", "1998", "2026"], tier: "silver" },
  { name: "Rusia", code: "RU", flag: "🇷🇺", country: "Russia", years: ["1966", "1986", "2018", "2026"], tier: "silver" },
  { name: "Senegal", code: "SN", flag: "🇸🇳", country: "Senegal", years: ["2002", "2022", "2026"], tier: "silver" },
  { name: "Serbia", code: "RS", flag: "🇷🇸", country: "Serbia", years: ["1930", "1962", "1998", "2006", "2026"], tier: "silver" },
  { name: "Sudáfrica", code: "ZA", flag: "🇿🇦", country: "South Africa", years: ["1998", "2010", "2026"], tier: "silver" },
  { name: "Suecia", code: "SE", flag: "🇸🇪", country: "Sweden", years: ["1958", "1994", "2002", "2026"], tier: "silver" },
  { name: "Suiza", code: "CH", flag: "🇨🇭", country: "Switzerland", years: ["1934", "1954", "2006", "2022", "2026"], tier: "silver" },
  { name: "Togo", code: "TG", flag: "🇹🇬", country: "Togo", years: ["2006", "2026"], tier: "bronze" },
  { name: "Trinidad y Tobago", code: "TT", flag: "🇹🇹", country: "Trinidad and Tobago", years: ["2006", "2026"], tier: "bronze" },
  { name: "Túnez", code: "TN", flag: "🇹🇳", country: "Tunisia", years: ["1978", "2006", "2022", "2026"], tier: "bronze" },
  { name: "Turquía", code: "TR", flag: "🇹🇷", country: "Turkey", years: ["2002", "2026"], tier: "silver" },
  { name: "Ucrania", code: "UA", flag: "🇺🇦", country: "Ukraine", years: ["2006", "2026"], tier: "silver" },
  { name: "Uruguay", code: "UY", flag: "🇺🇾", country: "Uruguay", years: ["1930", "1950", "2010", "2026"], tier: "gold" },
  { name: "Zaire", code: "CD", flag: "🇨🇩", country: "DR Congo", years: ["1974", "2026"], tier: "bronze" },
  { name: "Curazao", code: "CW", flag: "🇨🇼", country: "Curaçao", years: ["1957", "2026"], tier: "bronze" }
];

const LEGENDARY_CLUBS = [
  { name: "AC Milan", code: "ACM", flag: "🇮🇹", country: "Italy", years: ["1963", "1989", "1994", "2007"], tier: "legendary" },
  { name: "AEK Atenas", code: "AEK", flag: "🇬🇷", country: "Greece", years: ["1969", "1995", "2003"], tier: "bronze" },
  { name: "Ajax de Ámsterdam", code: "AJX", flag: "🇳🇱", country: "Netherlands", years: ["1972", "1973", "1995", "2019"], tier: "gold" },
  { name: "Anderlecht", code: "AND", flag: "🇧🇪", country: "Belgium", years: ["1982", "1986", "2001"], tier: "silver" },
  { name: "Arsenal FC", code: "ARS", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", country: "England", years: ["2004", "2006", "2024"], tier: "gold" },
  { name: "AS Monaco", code: "ASM", flag: "🇲🇨", country: "Monaco", years: ["1994", "2004", "2017"], tier: "silver" },
  { name: "AS Roma", code: "ASR", flag: "🇮🇹", country: "Italy", years: ["1984", "2008", "2018"], tier: "silver" },
  { name: "Atalanta BC", code: "ATA", flag: "🇮🇹", country: "Italy", years: ["2020", "2021", "2024"], tier: "silver" },
  { name: "Atlético de Madrid", code: "ATM", flag: "🇪🇸", country: "Spain", years: ["1974", "2014", "2016"], tier: "gold" },
  { name: "Bayer 04 Leverkusen", code: "B04", flag: "🇩🇪", country: "Germany", years: ["2002", "2024"], tier: "gold" },
  { name: "Bayern de Múnich", code: "BAY", flag: "🇩🇪", country: "Germany", years: ["1974", "2001", "2013", "2020"], tier: "legendary" },
  { name: "Beşiktaş JK", code: "BJK", flag: "🇹🇷", country: "Turkey", years: ["1987", "2018"], tier: "silver" },
  { name: "Bologna FC", code: "BOL", flag: "🇮🇹", country: "Italy", years: ["1965", "2025"], tier: "bronze" },
  { name: "Boavista FC", code: "BOA", flag: "🇵🇹", country: "Portugal", years: ["2002"], tier: "bronze" },
  { name: "Borussia Dortmund", code: "BVB", flag: "🇩🇪", country: "Germany", years: ["1997", "2013", "2024"], tier: "gold" },
  { name: "Borussia Mönchengladbach", code: "BMG", flag: "🇩🇪", country: "Germany", years: ["1971", "1977"], tier: "silver" },
  { name: "Brøndby IF", code: "BRO", flag: "🇩🇰", country: "Denmark", years: ["1999"], tier: "bronze" },
  { name: "FC Barcelona", code: "FCB", flag: "🇪🇸", country: "Spain", years: ["2010", "2015", "2021", "2026"], tier: "legendary" },
  { name: "Celtic FC", code: "CEL", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", country: "Scotland", years: ["1967", "1970", "2012"], tier: "silver" },
  { name: "Chelsea FC", code: "CHE", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", country: "England", years: ["2008", "2012", "2021"], tier: "gold" },
  { name: "Club Brugge", code: "CLU", flag: "🇧🇪", country: "Belgium", years: ["1978", "2004", "2023"], tier: "bronze" },
  { name: "CSKA Moscú", code: "CSK", flag: "🇷🇺", country: "Russia", years: ["1993", "2010"], tier: "silver" },
  { name: "Dinamo de Zagreb", code: "DIN", flag: "🇭🇷", country: "Croatia", years: ["1999", "2016"], tier: "bronze" },
  { name: "Dínamo de Kiev", code: "DYN", flag: "🇺🇦", country: "Ukraine", years: ["1976", "1986", "1999"], tier: "silver" },
  { name: "Dnipro Dnipropetrovsk", code: "DNI", flag: "🇺🇦", country: "Ukraine", years: ["1985", "1990"], tier: "bronze" },
  { name: "Eintracht Frankfurt", code: "SGE", flag: "🇩🇪", country: "Germany", years: ["1960", "2023"], tier: "silver" },
  { name: "Estrella Roja de Belgrado", code: "CZV", flag: "🇷🇸", country: "Serbia", years: ["1991", "1992"], tier: "gold" },
  { name: "Fenerbahçe SK", code: "FB", flag: "🇹🇷", country: "Turkey", years: ["1997", "2008"], tier: "silver" },
  { name: "Ferencvárosi TC", code: "FER", flag: "🇭🇺", country: "Hungary", years: ["1966", "1996"], tier: "bronze" },
  { name: "Feyenoord", code: "FEY", flag: "🇳🇱", country: "Netherlands", years: ["1970", "2002"], tier: "silver" },
  { name: "Fiorentina", code: "FIO", flag: "🇮🇹", country: "Italy", years: ["1957", "2010"], tier: "silver" },
  { name: "Galatasaray SK", code: "GAL", flag: "🇹🇷", country: "Turkey", years: ["1988", "2001", "2013"], tier: "silver" },
  { name: "Genoa CFC", code: "GEN", flag: "🇮🇹", country: "Italy", years: ["1992"], tier: "bronze" },
  { name: "Girona FC", code: "GIR", flag: "🇪🇸", country: "Spain", years: ["2025"], tier: "bronze" },
  { name: "Hamburgo SV", code: "HSV", flag: "🇩🇪", country: "Germany", years: ["1980", "1983"], tier: "gold" },
  { name: "Hajduk Split", code: "HAJ", flag: "🇭🇷", country: "Croatia", years: ["1976", "1995"], tier: "bronze" },
  { name: "HJK Helsinki", code: "HJK", flag: "🇫🇮", country: "Finland", years: ["1999"], tier: "bronze" },
  { name: "Inter de Milán", code: "INT", flag: "🇮🇹", country: "Italy", years: ["1965", "2010", "2023"], tier: "gold" },
  { name: "Juventus FC", code: "JUV", flag: "🇮🇹", country: "Italy", years: ["1985", "1996", "1998", "2017"], tier: "gold" },
  { name: "Kaiserslautern", code: "FCK", flag: "🇩🇪", country: "Germany", years: ["1999"], tier: "silver" },
  { name: "Lazio", code: "LAZ", flag: "🇮🇹", country: "Italy", years: ["2000", "2020"], tier: "gold" },
  { name: "Leeds United", code: "LEE", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", country: "England", years: ["1975", "2001"], tier: "silver" },
  { name: "Leicester City FC", code: "LEI", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", country: "England", years: ["2017"], tier: "silver" },
  { name: "Levski Sofía", code: "LEV", flag: "🇧🇬", country: "Bulgaria", years: ["1994"], tier: "bronze" },
  { name: "Lille OSC", code: "LIL", flag: "🇫🇷", country: "France", years: ["2007", "2022"], tier: "silver" },
  { name: "Liverpool FC", code: "LIV", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", country: "England", years: ["1978", "1984", "2005", "2019"], tier: "legendary" },
  { name: "Maccabi Haifa", code: "MAC", flag: "🇮🇱", country: "Israel", years: ["2003", "2023"], tier: "bronze" },
  { name: "Malmö FF", code: "MFF", flag: "🇸🇪", country: "Sweden", years: ["1979", "2016"], tier: "bronze" },
  { name: "Manchester City", code: "MCI", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", country: "England", years: ["2021", "2023"], tier: "legendary" },
  { name: "Manchester United", code: "MUN", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", country: "England", years: ["1968", "1999", "2008"], tier: "legendary" },
  { name: "Molde FK", code: "MOL", flag: "🇳🇴", country: "Norway", years: ["2000"], tier: "bronze" },
  { name: "Montpellier HSC", code: "MHSC", flag: "🇫🇷", country: "France", years: ["2013"], tier: "bronze" },
  { name: "Newcastle United", code: "NEW", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", country: "England", years: ["1998", "2003"], tier: "silver" },
  { name: "OGC Niza", code: "NIZ", flag: "🇫🇷", country: "France", years: ["1957", "1960"], tier: "bronze" },
  { name: "Olympiacos", code: "OLY", flag: "🇬🇷", country: "Greece", years: ["1999", "2014"], tier: "silver" },
  { name: "Olympique de Marsella", code: "OM", flag: "🇫🇷", country: "France", years: ["1993", "2010", "2012"], tier: "gold" },
  { name: "Olympique de Lyon", code: "OL", flag: "🇫🇷", country: "France", years: ["2004", "2010", "2020"], tier: "gold" },
  { name: "Panathinaikos", code: "PAO", flag: "🇬🇷", country: "Greece", years: ["1971", "1985", "2002"], tier: "silver" },
  { name: "Paris Saint-Germain", code: "PSG", flag: "🇫🇷", country: "France", years: ["1995", "2020", "2024"], tier: "gold" },
  { name: "Partizán de Belgrado", code: "PAR", flag: "🇷🇸", country: "Serbia", years: ["1966"], tier: "bronze" },
  { name: "Porto FC", code: "POR", flag: "🇵🇹", country: "Portugal", years: ["1987", "2004", "2021"], tier: "gold" },
  { name: "PSV Eindhoven", code: "PSV", flag: "🇳🇱", country: "Netherlands", years: ["1988", "2005"], tier: "gold" },
  { name: "Racing Genk", code: "GNK", flag: "🇧🇪", country: "Belgium", years: ["2003", "2020"], tier: "bronze" },
  { name: "Rangers FC", code: "RAN", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", country: "Scotland", years: ["1960", "1972", "2023"], tier: "silver" },
  { name: "Real Madrid CF", code: "RMA", flag: "🇪🇸", country: "Spain", years: ["1960", "2000", "2017", "2022", "2024"], tier: "legendary" },
  { name: "Real Sociedad", code: "RSO", flag: "🇪🇸", country: "Spain", years: ["2004", "2024"], tier: "silver" },
  { name: "Red Bull Leipzig", code: "RBL", flag: "🇩🇪", country: "Germany", years: ["2020", "2022"], tier: "silver" },
  { name: "Red Bull Salzburgo", code: "RBS", flag: "🇦🇹", country: "Austria", years: ["1995", "2022"], tier: "silver" },
  { name: "Rosenborg BK", code: "RBK", flag: "🇳🇴", country: "Norway", years: ["1997", "2000"], tier: "bronze" },
  { name: "Schalke 04", code: "S04", flag: "🇩🇪", country: "Germany", years: ["2011", "2015"], tier: "silver" },
  { name: "Sevilla FC", code: "SEV", flag: "🇪🇸", country: "Spain", years: ["2008", "2020", "2023"], tier: "gold" },
  { name: "Shakhtar Donetsk", code: "SHA", flag: "🇺🇦", country: "Ukraine", years: ["2011", "2016"], tier: "silver" },
  { name: "Slavia Praga", code: "SLA", flag: "🇨🇿", country: "Czechia", years: ["2008", "2020"], tier: "bronze" },
  { name: "Sporting de Portugal", code: "SCP", flag: "🇵🇹", country: "Portugal", years: ["1983", "2009"], tier: "silver" },
  { name: "Sparta Praga", code: "SPA", flag: "🇨🇿", country: "Czechia", years: ["1992", "2004"], tier: "bronze" },
  { name: "Steaua de Bucarest", code: "STE", flag: "🇷🇴", country: "Romania", years: ["1986", "1989"], tier: "gold" },
  { name: "Stuttgart", code: "VFB", flag: "🇩🇪", country: "Germany", years: ["2004", "2010"], tier: "silver" },
  { name: "Tottenham Hotspur", code: "TOT", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", country: "England", years: ["1962", "2019"], tier: "silver" },
  { name: "Unión Berlín", code: "FCU", flag: "🇩🇪", country: "Germany", years: ["2024"], tier: "bronze" },
  { name: "Valencia CF", code: "VCF", flag: "🇪🇸", country: "Spain", years: ["2000", "2001", "2004"], tier: "gold" },
  { name: "Villarreal CF", code: "VIL", flag: "🇪🇸", country: "Spain", years: ["2006", "2022"], tier: "silver" }
];

function getRatingRange(tier) {
  switch (tier) {
    case 'legendary': return { base: 91, star: 98 };
    case 'gold': return { base: 86, star: 94 };
    case 'silver': return { base: 81, star: 88 };
    default: return { base: 76, star: 83 };
  }
}

const FAMOUS_PLAYERS = {
  "FC Barcelona_2010": [
    { name: "Lionel Messi", pos: ["RW", "ST"], rating: 98, bonus: 1, num: 10 },
    { name: "Xavi Hernández", pos: ["CM"], rating: 96, num: 6 },
    { name: "Andrés Iniesta", pos: ["AM", "CM"], rating: 96, num: 8 },
    { name: "Carles Puyol", pos: ["CB", "RB"], rating: 93, num: 5 },
    { name: "Gerard Piqué", pos: ["CB"], rating: 90, num: 3 },
    { name: "Dani Alves", pos: ["RB"], rating: 92, num: 2 },
    { name: "Victor Valdés", pos: ["GK"], rating: 88, num: 1 },
    { name: "Sergio Busquets", pos: ["DM"], rating: 91, num: 16 },
    { name: "Pedro Rodríguez", pos: ["LW", "RW"], rating: 86, num: 17 },
    { name: "Zlatan Ibrahimović", pos: ["ST"], rating: 90, num: 9 },
    { name: "Éric Abidal", pos: ["LB", "CB"], rating: 85, num: 22 }
  ],
  "FC Barcelona_2015": [
    { name: "Lionel Messi", pos: ["RW", "ST"], rating: 99, bonus: 1, num: 10 },
    { name: "Neymar Jr", pos: ["LW"], rating: 95, num: 11 },
    { name: "Luis Suárez", pos: ["ST"], rating: 96, num: 9 },
    { name: "Andrés Iniesta", pos: ["CM", "AM"], rating: 94, num: 8 },
    { name: "Ivan Rakitić", pos: ["CM"], rating: 88, num: 4 },
    { name: "Sergio Busquets", pos: ["DM"], rating: 91, num: 5 },
    { name: "Dani Alves", pos: ["RB"], rating: 91, num: 22 },
    { name: "Javier Mascherano", pos: ["CB", "DM"], rating: 88, num: 14 },
    { name: "Gerard Piqué", pos: ["CB"], rating: 90, num: 3 },
    { name: "Jordi Alba", pos: ["LB"], rating: 89, num: 18 },
    { name: "Marc-André ter Stegen", pos: ["GK"], rating: 88, num: 1 }
  ],
  "FC Barcelona_2021": [
    { name: "Lionel Messi", pos: ["RW", "AM"], rating: 97, bonus: 1, num: 10 },
    { name: "Antoine Griezmann", pos: ["ST", "AM"], rating: 88, num: 7 },
    { name: "Pedri", pos: ["CM", "AM"], rating: 86, num: 16 },
    { name: "Frenkie de Jong", pos: ["CM", "DM"], rating: 88, num: 21 },
    { name: "Sergio Busquets", pos: ["DM"], rating: 87, num: 5 },
    { name: "Jordi Alba", pos: ["LB"], rating: 86, num: 18 },
    { name: "Sergi Roberto", pos: ["RB", "CM"], rating: 82, num: 20 },
    { name: "Gerard Piqué", pos: ["CB"], rating: 85, num: 3 },
    { name: "Clément Lenglet", pos: ["CB"], rating: 81, num: 15 },
    { name: "Ousmane Dembélé", pos: ["RW", "LW"], rating: 85, num: 11 },
    { name: "Marc-André ter Stegen", pos: ["GK"], rating: 89, num: 1 }
  ],
  "FC Barcelona_2026": [
    { name: "Lamine Yamal", pos: ["RW"], rating: 93, bonus: 1, num: 19 },
    { name: "Robert Lewandowski", pos: ["ST"], rating: 90, num: 9 },
    { name: "Raphinha", pos: ["LW", "RW"], rating: 89, num: 11 },
    { name: "Pedri", pos: ["CM", "AM"], rating: 92, num: 8 },
    { name: "Gavi", pos: ["CM", "AM"], rating: 88, num: 6 },
    { name: "Frenkie de Jong", pos: ["CM", "DM"], rating: 89, num: 21 },
    { name: "Jules Koundé", pos: ["RB", "CB"], rating: 88, num: 23 },
    { name: "Pau Cubarsí", pos: ["CB"], rating: 86, num: 2 },
    { name: "Ronald Araújo", pos: ["CB"], rating: 89, num: 4 },
    { name: "Alejandro Balde", pos: ["LB"], rating: 85, num: 3 },
    { name: "Marc-André ter Stegen", pos: ["GK"], rating: 88, num: 1 }
  ]
};

function generateSquad(teamName, year, type, teamCode, flag, nationName, tier) {
  const customKey = `${teamName}_${year}`;
  if (FAMOUS_PLAYERS[customKey]) {
    return FAMOUS_PLAYERS[customKey].map((p, idx) => ({
      id: `${teamCode.toLowerCase()}_${p.num}_${year.slice(-2)}_${idx}`,
      number: p.num,
      name: p.name,
      positions: p.pos,
      primaryPos: p.pos[0],
      rating: p.rating,
      bonus: p.bonus,
      nation: nationName,
      nationCode: teamCode,
      flag: flag,
      club: teamName,
      year: year,
      tournament: type
    }));
  }

  const ratingConfig = getRatingRange(tier);
  const positionTemplates = [
    { pos: ['GK'], primary: 'GK', name: `${teamName} GK`, num: 1 },
    { pos: ['CB'], primary: 'CB', name: `${teamName} CB1`, num: 4 },
    { pos: ['CB', 'RB'], primary: 'CB', name: `${teamName} CB2`, num: 5 },
    { pos: ['RB'], primary: 'RB', name: `${teamName} RB`, num: 2 },
    { pos: ['LB'], primary: 'LB', name: `${teamName} LB`, num: 3 },
    { pos: ['DM', 'CM'], primary: 'DM', name: `${teamName} DM`, num: 6 },
    { pos: ['CM'], primary: 'CM', name: `${teamName} CM`, num: 8 },
    { pos: ['AM', 'CM'], primary: 'AM', name: `${teamName} AM`, num: 10, star: true },
    { pos: ['RW', 'ST'], primary: 'RW', name: `${teamName} RW`, num: 7 },
    { pos: ['LW', 'AM'], primary: 'LW', name: `${teamName} LW`, num: 11 },
    { pos: ['ST'], primary: 'ST', name: `${teamName} ST`, num: 9, star: true }
  ];

  return positionTemplates.map((item, idx) => {
    const isStar = item.star;
    const rating = isStar
      ? ratingConfig.star
      : Math.floor(ratingConfig.base + (idx % 4) * 1.5);

    return {
      id: `${teamCode.toLowerCase()}_${item.num}_${year}_${idx}`,
      number: item.num,
      name: `${teamName} Star ${item.primary} (${year})`,
      positions: item.pos,
      primaryPos: item.primary,
      rating: rating,
      bonus: isStar ? 1 : undefined,
      nation: nationName,
      nationCode: teamCode,
      flag: flag,
      club: teamName,
      year: year,
      tournament: type
    };
  });
}

const generatedTeams = [];

NATIONAL_TEAMS.forEach(nt => {
  nt.years.forEach(year => {
    const tag = year === '2026' ? 'Mundial 2026' : `Mundial ${year}`;
    const squad = generateSquad(nt.name, year, 'worldcup', nt.code, nt.flag, nt.name, nt.tier);

    generatedTeams.push({
      id: `${nt.code.toLowerCase()}_${year}`,
      name: nt.name,
      shortCode: nt.code,
      type: 'worldcup',
      year: year,
      tag: tag,
      flag: nt.flag,
      country: nt.country,
      tier: nt.tier,
      players: squad
    });
  });
});

LEGENDARY_CLUBS.forEach(club => {
  club.years.forEach(year => {
    const tag = `Champions ${year}`;
    const squad = generateSquad(club.name, year, 'champions', club.code, club.flag, club.country, club.tier);

    generatedTeams.push({
      id: `${club.code.toLowerCase()}_${year}`,
      name: club.name,
      shortCode: club.code,
      type: 'champions',
      year: year,
      tag: tag,
      flag: club.flag,
      country: club.country,
      tier: club.tier,
      players: squad
    });
  });
});

console.log(`Generated ${generatedTeams.length} total team/year combinations!`);

const fileHeader = `import { Team } from '../types';\n\nexport const MASSIVE_TEAMS_DATA: Team[] = `;
const fileContent = fileHeader + JSON.stringify(generatedTeams, null, 2) + `;\n`;

const outputPath = path.join(__dirname, '..', 'src', 'data', 'massiveTeamsData.ts');
fs.writeFileSync(outputPath, fileContent, 'utf-8');

console.log(`Successfully wrote massive team dataset to ${outputPath}`);
