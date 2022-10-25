import { addOneToItem } from './addOneToItem'
import { GameStoreItem } from 'types'

describe('utils: addOneToItem', () => {
  it('should return input gameStoreItem, if no gameConfig', () => {
    let input: GameStoreItem | undefined
    expect(addOneToItem(input)).toBe(input)
    
    input = {
      amount: 0,
      bonuses: 0,
      totalPoints: 0,
    }
    expect(addOneToItem(input)).toBe(input)
  })

  it('should return gameStoreItem when no initial item was provided', () => {
    const gameConfig = {
      label: 'label',
      color: 'color',
      points: 50,
    }
    expect(addOneToItem(null, gameConfig)).toStrictEqual({ amount: 1, bonuses: 0, totalPoints: 50 })
  })

  it('should return gameStoreItem with adjusted amount and points', () => {
    const gameConfig = {
      label: 'label',
      color: 'color',
      points: 50,
    }
    const initial = { amount: 1, bonuses: 0, totalPoints: 50 }
    expect(addOneToItem(initial, gameConfig)).toStrictEqual({ amount: 2, bonuses: 0, totalPoints: 100 })
  })
})