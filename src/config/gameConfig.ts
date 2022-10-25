import { GameItems } from 'types'

export const gameItems: GameItems = {
  a: {
    label: 'A',
    points: 50,
    bonusStrategy: {
      amountForBonus: 3,
      points: 50
    }
  },
  b: {
    label: 'B',
    points: 30,
    bonusStrategy: {
      amountForBonus: 2,
      points: 30
    }
  },
  c: {
    label: 'C',
    points: 20
  },
  d: {
    label: 'D',
    points: 15
  }
}