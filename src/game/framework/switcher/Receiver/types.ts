import { IContextEngine, IGame } from "../../../../engine/types"

export interface IReceiver {
  start(game: IGame, context: IContextEngine): void
  stop(): void
}
