import { GameStoreItem, GameItemConfig } from "types";
import { getBonuses } from "./getBonuses";

export const addOneToItem = (gameStoreItem: GameStoreItem, gameItemConfig?: GameItemConfig): GameStoreItem => {
  if (!gameItemConfig) {
    return gameStoreItem
  }

  const amount = gameStoreItem?.amount || 0 + 1
  const bonuses = getBonuses(amount, gameItemConfig.bonusStrategy)
  const totalPoints = amount * gameItemConfig.points + bonuses

  return {
    amount,
    bonuses,
    totalPoints
  }
}