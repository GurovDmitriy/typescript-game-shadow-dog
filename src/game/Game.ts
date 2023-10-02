import { IContextEngine, IGame } from "../engine/types"
import { Physics } from "./framework/physics/Physics"
import { Collision } from "./framework/collision/Collision"
import { Camera } from "./framework/camera/Camera"
import { Initializer } from "./framework/initializer/Initializer"
import { IContextGame } from "./types"
import { Destroyer } from "./framework/destroyer/Destroyer"
import { settings } from "./userland/settings/settings"
import { Switcher } from "./framework/switcher/Switcher"

/**
 * Game - create game context and loop for engine
 */
export class Game implements IGame {
  private _contextEngine: IContextEngine
  private _context: IContextGame

  public constructor(context: IContextEngine) {
    this._contextEngine = context
    this.init()
  }

  public init() {
    this._contextEngine.keyboard.destroy()

    this._context = {
      ctx: this._contextEngine.ctx,
      canvas: this._contextEngine.canvas,
      keyboard: this._contextEngine.keyboard,
      physics: new Physics(),
      collision: new Collision(),
      camera: new Camera(),
      destroyer: new Destroyer(this._contextEngine.canvas),
      initializer: new Initializer(),
      switcher: new Switcher(this),
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
