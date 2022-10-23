import { calculateTotal } from './calculateTotal'

describe('utils: calculateTotal', () => {
  it('should return 0 for bonuses and totalScore', () => {
    expect(calculateTotal({})).toStrictEqual({ bonuses: 0, totalScore: 0 })
  })
})