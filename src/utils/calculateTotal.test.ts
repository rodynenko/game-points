import { calculateTotal } from './calculateTotal'

describe('utils: calculateTotal', () => {
  it('should return 0 for bonuses and totalScore when nothing', () => {
    expect(calculateTotal({})).toStrictEqual({ bonuses: 0, totalScore: 0 })
  })

  it('should not include bonuses when no enough items', () => {
    expect(calculateTotal({ a: 2 })).toStrictEqual({ bonuses: 0, totalScore: 100 })
  })

  it('should include bonuses when enough items', () => {
    expect(calculateTotal({ a: 4 })).toStrictEqual({ bonuses: 50, totalScore: 250 })
  })

  it('should calculate with multiple items', () => {
    expect(calculateTotal({ a: 4, b: 1 })).toStrictEqual({ bonuses: 50, totalScore: 280 })
  })
})