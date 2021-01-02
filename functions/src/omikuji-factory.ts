function randomToInt(value: number, max: number): number {
  return Math.floor(value * max)
}

export function getRarity(rarityList: RarityList, value: number): Raritys {
  let accum = 0
  for(const rarity of Object.keys(rarityList) as Raritys[]) {
    accum += rarityList[rarity]
    if (accum > value) {
      return rarity
    }
  }
  return "common"
}


// TODO 天井
export function getFate(fateList: FateList, rarity: Raritys, value: number): string {
  const list = fateList[rarity]
  const idx = randomToInt(value, list.length)
  return list[idx]
}
