type Raritys = "legendary" | "epic" | "rare" | "uncommon" | "common"

type FateList = {[P in Raritys]: string[]}
type RarityList = {[P in Raritys]: number}

interface Omikuji {
  fate: string
  rarity: Raritys
}
