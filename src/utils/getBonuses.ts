import { BonusStrategy } from 'types'

export const getBonuses = (amount: number, bonusStrategy?: BonusStrategy): number => {
  if (!bonusStrategy) {
    return 0
  }

  const { amountForBonus, points } = bonusStrategy
  const fullBonuses = Math.floor(amount / amountForBonus)

  return fullBonuses * points
} 