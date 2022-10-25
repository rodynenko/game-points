export type ItemKey = string

export interface BonusStrategy {
  amountForBonus: number
  points: number
}

export interface GameItemConfig {
  label: string,
  points: number,
  bonusStrategy?: BonusStrategy
}

export type GameItems = {
  [key: ItemKey]: GameItemConfig
}

export interface GameStoreItem {
  amount: number
  bonuses: number
  totalPoints: number
}