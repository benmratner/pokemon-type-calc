const FIRE      = 'fire'
const WATER     = 'water'
const GRASS     = 'grass'
const ELECTRIC  = 'electric'
const GROUND    = 'ground'
const ROCK      = 'rock'
const POISON    = 'posion'
const GHOST     = 'ghost'
const NORMAL    = 'normal'
const FLYING    = 'flying'
const PSYCHIC   = 'psychic'
const DARK      = 'dark'
const FIGHTING  = 'fighting'
const ICE       = 'ice'
const STEEL     = 'steel'
const BUG       = 'bug'
const DRAGON    = 'dragon'
const FAIRY     = 'fairy'

const types = {
    fire: {
        strengths: [BUG, GRASS, ICE, STEEL],
        resists: [BUG, FAIRY, FIRE, GRASS, ICE, STEEL],
        immunities: [],
        displayText: 'Fire',
        symbolImage: '',
    },
    water: {
        strengths: [FIRE, GROUND, ROCK],
        resists: [FIRE, ICE, STEEL, WATER],
        immunities: [],
        displayText: 'Water',
        symbolImage: '',
    },
     grass: {
        strengths: [GROUND, ROCK, WATER],
        resists: [ELECTRIC, GRASS, GROUND, WATER],
        immunities: [],
        displayText: 'Grass',
        symbolImage: '',
    },
     electric: {
        strengths: [FLYING, WATER],
        resists: [ELECTRIC, FLYING, STEEL],
        immunities: [],
        displayText: 'Electric',
        symbolImage: '',
    },
     ground: {
        strengths: [ELECTRIC, FIRE, POISON, ROCK, STEEL],
        resists: [POISON, ROCK],
        immunities: [ELECTRIC],
        displayText: 'Ground',
        symbolImage: '',
    },
     rock: {
        strengths: [BUG, FIRE, FLYING, ICE],
        resists: [FIRE, FLYING, NORMAL, POISON],
        immunities: [],
        displayText: 'Rock',
        symbolImage: '',
    },
     poison: {
        strengths: [FAIRY, GRASS],
        resists: [FIGHTING, POISON, BUG, GRASS, FAIRY],
        immunities: [],
        displayText: 'Poison',
        symbolImage: '',
    },
     ghost: {
        strengths: [GHOST, PSYCHIC],
        resists: [BUG, POISON],
        immunities: [NORMAL, FIGHTING],
        displayText: 'Ghost',
        symbolImage: '',
    },
     normal: {
        strengths: [],
        resists: [],
        immunities: [GHOST],
        displayText: 'Normal',
        symbolImage: '',
    },
     flying: {
        strengths: [BUG, FIGHTING, GRASS],
        resists: [BUG, FIGHTING, GRASS],
        immunities: [GROUND],
        displayText: 'Flying',
        symbolImage: '',
    },
     psychic: {
        strengths: [FIGHTING, POISON],
        resists: [FIGHTING, PSYCHIC],
        immunities: [],
        displayText: 'Psychic',
        symbolImage: '',
    },
     dark: {
        strengths: [GHOST, PSYCHIC],
        resists: [DARK, GHOST],
        immunities: [PSYCHIC],
        displayText: 'Dark',
        symbolImage: '',
    },
     fighting: {
        strengths: [DARK, ICE, NORMAL, ROCK, STEEL],
        resists: [BUG, DARK, ROCK],
        immunities: [],
        displayText: 'Fighting',
        symbolImage: '',
    },
     ice: {
        strengths: [DRAGON, FLYING, GRASS, GROUND],
        resists: [ICE],
        immunities: [],
        displayText: 'Ice',
        symbolImage: '',
    },
     steel: {
        strengths: [FAIRY, ICE, ROCK],
        resists: [BUG, DRAGON, FLYING, GHOST, GRASS, ICE, NORMAL, PSYCHIC, ROCK, STEEL],
        immunities: [POISON],
        displayText: 'Steel',
        symbolImage: '',
    },
     bug: {
        strengths: [DARK, GRASS, PSYCHIC],
        resists: [FIGHTING, GRASS, GROUND],
        immunities: [],
        displayText: 'Bug',
        symbolImage: '',
    },
     dragon: {
        strengths: [DRAGON],
        resists: [ELECTRIC, FIRE, GRASS, WATER],
        immunities: [],
        displayText: 'Dragon',
        symbolImage: '',
    },
     fairy: {
        strengths: [DARK, DRAGON, FIGHTING],
        resists: [BUG,  DARK, FIGHTING],
        immunities: [DRAGON],
        displayText: 'Fairy',
        symbolImage: '',
    },
}

export default types