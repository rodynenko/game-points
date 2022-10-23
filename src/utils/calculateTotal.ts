import { GameItemKeys } from 'config/gameConfig'
import { itemBonusStrategies } from 'config/gameConfig'

interface CalculateTotalResult {
  bonuses: number,
  totalScore: number
}

//TODO: unify items types with reducer
export const calculateTotal = (items: Partial<Record<GameItemKeys, number>>): CalculateTotalResult => {
  let bonuses = 0
  let totalScore = 0

  return {
    bonuses,
    totalScore
  }
}