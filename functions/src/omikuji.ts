import {getFate, getRarity} from './omikuji-factory'


// ["大吉", "吉", "中吉", "小吉", "半吉", "末吉", "末小吉", "平", "凶", "小凶", "半凶", "末凶", "大凶"]
// legendary: 1% / epic: 4% / rare: 20% / uncommon: 35% / common: 40%

const fateList: FateList = {
  legendary: [
    "大吉", "大凶",
  ],

  epic: [
    "中吉", "末凶",
  ],

  rare: [
    "小吉", "半凶",
  ],

  uncommon: [
    "吉", "半吉", "小凶",
  ],

  common: [
    "末吉", "末小吉", "平", "凶",
  ],
}

const rarityList: RarityList = {
  legendary: 0.01,
  epic: 0.04,
  rare: 0.2,
  uncommon: 0.35,
  common: 0.4,
}

export function getOmikuji(): Omikuji {
  const rarity = getRarity(rarityList, Math.random())
  const ret = getFate(fateList, rarity, Math.random())
  return {
    fate: ret,
    rarity,
  }
}
