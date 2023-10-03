import { IInvoker } from "./Invoker/types"
import { IReceiver } from "./Receiver/types"
import { Invoker } from "./Invoker/Invoker"
import { Receiver } from "./Receiver/Receiver"
import { Start } from "./Start/Start"
import { COMMAND_GAME, ISwitcher } from "./types"
import { Stop } from "./Stop/Stop"
import { IContextEngine, IGame } from "../../../engine/types"

export class Switcher implements ISwitcher {
  private _invoker: IInvoker
  private readonly _receiver: IReceiver

  constructor(game: IGame, context: IContextEngine) {
    this._invoker = new Invoker()
    this._receiver = new Receiver()

    this._invoker.install(
      COMMAND_GAME.start,
      new Start(this._receiver, game, context),
    )
    this._invoker.install(COMMAND_GAME.stop, new Stop(this._receiver))
  }

  public start(cb?: () => void): void {
    this._invoker.execute(COMMAND_GAME.start)

    if (cb) cb()
  }

  public stop(cb?: () => void): void {
    this._invoker.execute(COMMAND_GAME.stop)

    if (cb) cb()
  }
}
