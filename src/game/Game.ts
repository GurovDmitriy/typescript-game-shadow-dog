import { IContextEngine, IGame } from "../engine/types"
import { Physics } from "./framework/physics/Physics"
import { Collision } from "./framework/collision/Collision"
import { Camera } from "./framework/camera/Camera"
import { Initializer } from "./framework/initializer/Initializer"
import { IContextGame } from "./types"
import { Destroyer } from "./framework/destroyer/Destroyer"
import { settings } from "./userland/settings/settings"

/**
 * Game - create game context and loop for engine
 */
export class Game implements IGame {
  private readonly _context: IContextGame

  public constructor(context: IContextEngine) {
    this._context = {
      ctx: context.ctx,
      canvas: context.canvas,
      keyboard: context.keyboard,
      physics: new Physics(),
      collision: new Collision(),
      camera: new Camera(),
      destroyer: new Destroyer(context.canvas),
      initializer: new Initializer(),
    }

    settings(this._context)
  }

  public run() {
    this._context.destroyer.update()
    this._context.physics.update()
    this._context.collision.update()
    this._context.initializer.update()
  }
}
