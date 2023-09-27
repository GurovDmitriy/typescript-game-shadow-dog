import { IContextEngine, IGame } from "../engine/types"
import { IInitializer } from "./framework/initializer/types"
import { Physics } from "./framework/physics/Physics"
import { Collision } from "./framework/collision/Collision"
import { Camera } from "./framework/camera/Camera"
import { Initializer } from "./framework/initializer/Initializer"
import { settings } from "./userland/settings"
import { IContextGame } from "./types"
import { Destroyer } from "./framework/destroyer/Destroyer"

/**
 * Game - create game context and loop for engine
 */
export class Game implements IGame {
  private readonly _context: IContextGame
  private _initializer: IInitializer

  public constructor(context: IContextEngine) {
    this._context = {
      ctx: context.ctx,
      canvas: context.canvas,
      keyboard: context.keyboard,
      physics: new Physics(),
      collision: new Collision(),
      camera: new Camera(),
      destroyer: new Destroyer(context.canvas),
    }

    this._initializer = new Initializer(settings, this._context)
  }

  public run() {
    this._context.destroyer.update()
    this._context.physics.update()
    this._initializer.update()
    this._context.collision.update()
  }
}
