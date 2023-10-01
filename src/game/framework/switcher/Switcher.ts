import { IInvoker } from "./Invoker/types"
import { IReceiver } from "./Receiver/types"
import { Invoker } from "./Invoker/Invoker"
import { Receiver } from "./Receiver/Receiver"
import { Start } from "./Start/Start"
import { COMMAND_GAME, ISwitcher } from "./types"
import { Stop } from "./Stop/Stop"

export class Switcher implements ISwitcher {
  private _invoker: IInvoker
  private readonly _receiver: IReceiver

  constructor() {
    this._invoker = new Invoker()
    this._receiver = new Receiver()

    this._invoker.install(COMMAND_GAME.start, new Start(this._receiver))
    this._invoker.install(COMMAND_GAME.stop, new Stop(this._receiver))
  }

  public start() {
    this._invoker.execute(COMMAND_GAME.start)
  }

  public stop() {
    this._invoker.execute(COMMAND_GAME.stop)
  }
}
