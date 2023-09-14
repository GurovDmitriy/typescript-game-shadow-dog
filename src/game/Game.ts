import { Controller } from "./framework/controller/Controller"
import { IContextEngine, IGame } from "../engine/types"
import { IContextGame } from "./types"
import { Physics } from "./framework/physics/Physics"
import { settings } from "./settings/settings"
import { IController } from "./framework/controller/types"

/**
 * Game - create game context and loop for engine
 */
export class Game implements IGame {
  private readonly _context: IContextGame
  private _controller: IController

  public constructor(context: IContextEngine) {
    this._context = {
      ctx: context.ctx,
      canvas: context.canvas,
      keyboard: context.keyboard,
      physics: new Physics(),
    }

    this._controller = new Controller(settings, this._context)
  }

  public run() {
    // this._context.collision.update()
    this._context.physics.update()
    this._controller.update()
  }
}
