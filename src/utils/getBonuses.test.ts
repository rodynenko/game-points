import { getBonuses } from './getBonuses'

describe('utils: getBonuses', () => {
  it('should return 0 if no bonus strategy', () => {
    expect(getBonuses(4)).toBe(0)
    expect(getBonuses(100)).toBe(0)
  })

  it('should return 0 if not enough amount for bonus', () => {
    const amount = 3
    const bonusStrategy = {
      amountForBonus: amount + 1,
      points: 10
    }

    expect(getBonuses(3, bonusStrategy)).toBe(0)
  })

  it('should return bonus point if enough amount by strategy', () => {
    const amount = 3
    const bonusPoints = 10
    const bonusStrategy = {
      amountForBonus: amount - 1,
      points: bonusPoints
    }

    expect(getBonuses(amount, bonusStrategy)).toBe(bonusPoints)
  })
})