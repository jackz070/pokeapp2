const typeChart = {
  normal: {
    noEffect: [],
    notVeryEffective: ["rock", "steel"],
    superEffective: [],
  },
  fire: {
    noEffect: [],
    notVeryEffective: ["fire", "water", "rock", "dragon"],
    superEffective: ["grass", "ice", "bug", "steel"],
  },
  water: {
    noEffect: [],
    notVeryEffective: ["water", "grass", "dragon"],
    superEffective: ["fire", "ground", "rock"],
  },
  electric: {
    noEffect: ["ground"],
    notVeryEffective: ["electric", "grass", "dragon"],
    superEffective: ["water", "flying"],
  },
  grass: {
    noEffect: [],
    notVeryEffective: [
      "fire",
      "grass",
      "poison",
      "flying",
      "bug",
      "dragon",
      "steel",
    ],
    superEffective: ["water", "ground", "rock"],
  },
  ice: {
    noEffect: [],
    notVeryEffective: ["fire", "water", "ice", "steel"],
    superEffective: ["grass", "ground", "flying", "dragon"],
  },
  fighting: {
    noEffect: ["ghost"],
    notVeryEffective: ["poison", "flying", "psychic", "bug"],
    superEffective: ["normal", "ice", "rock", "steel"],
  },
  poison: {
    noEffect: ["steel"],
    notVeryEffective: ["poison", "ground", "rock", "ghost"],
    superEffective: ["grass"],
  },
  ground: {
    noEffect: ["flying"],
    notVeryEffective: ["grass", "bug"],
    superEffective: ["fire", "electric", "poison", "rock", "steel"],
  },
  flying: {
    noEffect: [],
    notVeryEffective: ["electric", "rock", "steel"],
    superEffective: ["grass", "fighting", "bug"],
  },
  psychic: {
    noEffect: ["dark"],
    notVeryEffective: ["psychic", "steel"],
    superEffective: ["fighting", "posion"],
  },
  bug: {
    noEffect: [],
    notVeryEffective: [
      "fire",
      "fighting",
      "poison",
      "flying",
      "ghost",
      "steel",
    ],
    superEffective: ["grass", "psychic", "dark"],
  },
  rock: {
    noEffect: [],
    notVeryEffective: ["fighting", "ground", "steel"],
    superEffective: ["fire", "ice", "flying", "bug"],
  },
  ghost: {
    noEffect: ["normal"],
    notVeryEffective: ["dark", "steel"],
    superEffective: ["psychic", "ghost"],
  },
  dragon: {
    noEffect: [],
    notVeryEffective: ["steel"],
    superEffective: ["dragon"],
  },
  dark: {
    noEffect: [],
    notVeryEffective: ["fighting", "dark", "steel"],
    superEffective: ["psychic", "ghost"],
  },
  steel: {
    noEffect: [],
    notVeryEffective: ["fire", "water", "electric", "steel"],
    superEffective: ["ice", "rock"],
  },
};

export default typeChart;
