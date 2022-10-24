export const gameItems = {
  'a': 50,
  'b': 30,
  'c': 20,
  'd': 15
}

export type GameItemKeys = keyof typeof gameItems

type BonusPoints = number
type ItemAmount = number

export type BonusStrategy = [ItemAmount, BonusPoints]
type ItemBonusStrategies = Partial<Record<GameItemKeys, BonusStrategy>>

export const itemBonusStrategies = {
  'a': [3, 50],
  'b': [2, 30]
} as ItemBonusStrategies