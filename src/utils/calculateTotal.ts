import { gameItems, itemBonusStrategies, BonusStrategy, GameItemKeys } from 'config/gameConfig'

interface CalculateTotalResult {
  bonuses: number,
  totalScore: number
}

const getBonus = (amount: number, bonusStrategy?: BonusStrategy): number => {
  if (!bonusStrategy) {
    return 0
  }

  const [amountForBonus, bonusScore] = bonusStrategy
  const fullBonuses = Math.floor(amount / amountForBonus)

  return fullBonuses * bonusScore
} 

//TODO: unify items types with reducer
export const calculateTotal = (items: Partial<Record<GameItemKeys, number>>): CalculateTotalResult => {
  const initialResult: CalculateTotalResult = {
    bonuses: 0,
    totalScore: 0
  }

  const result = (Object.keys(items) as Array<GameItemKeys>).reduce((prev, currItem) => {
    const amount = items[currItem] || 0
    const bonusStrategy = itemBonusStrategies[currItem]
    const bonuses = getBonus(amount, bonusStrategy)
    prev.bonuses += bonuses
    prev.totalScore += bonuses + amount * gameItems[currItem]

    return prev
  }, initialResult)

  return result
}