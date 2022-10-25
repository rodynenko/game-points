import { GameItems } from 'types'

export const gameItems: GameItems = {
  a: {
    label: 'A',
    color: 'blue-1',
    points: 50,
    bonusStrategy: {
      amountForBonus: 3,
      points: 50
    }
  },
  b: {
    label: 'B',
    color: 'green-1',
    points: 30,
    bonusStrategy: {
      amountForBonus: 2,
      points: 30
    }
  },
  c: {
    label: 'C',
    color: 'red-1',
    points: 20
  },
  d: {
    label: 'D',
    color: 'orange-1',
    points: 15
  }
}