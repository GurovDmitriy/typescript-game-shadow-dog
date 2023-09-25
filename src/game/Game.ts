import { IContextEngine, IGame } from "../engine/Engine"
import { IPhysics, Physics } from "./framework/physics/Physics"
import { Collision, ICollision } from "./framework/collision/Collision"
import { Camera, ICamera } from "./framework/camera/Camera"
import { IInitializer, Initializer } from "./framework/initializer/Initializer"
import { settings } from "./userland/settings"

export interface IContextGame extends IContextEngine {
  physics: IPhysics
  collision: ICollision
  camera: ICamera
}

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
    }

    this._initializer = new Initializer(settings, this._context)
  }

  public run() {
    this._context.physics.update()
    this._initializer.update()
    this._context.collision.update()
  }
}
