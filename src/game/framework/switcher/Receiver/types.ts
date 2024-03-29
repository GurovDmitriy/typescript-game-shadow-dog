import { IGame } from "../../../../engine/types"

export interface IReceiver {
  start(game: IGame): void
  stop(game: IGame): void
}
