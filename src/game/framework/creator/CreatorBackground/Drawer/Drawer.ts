import { IDrawer } from "./types"
import { IAnimator } from "../Animator/types"

/**
 * Drawer
 * Draw background layer on canvas.
 */
export class Drawer implements IDrawer {
  private readonly _image: HTMLImageElement
  private _ctx: CanvasRenderingContext2D
  private _animator: IAnimator

  constructor(
    animator: IAnimator,
    image: HTMLImageElement,
    ctx: CanvasRenderingContext2D,
  ) {
    this._animator = animator
    this._image = image
    this._ctx = ctx
  }

  public draw(): void {
    this._animator.run()

    this._ctx.drawImage(
      this._image,
      this._animator.x,
      this._animator.y,
      this._animator.width,
      this._animator.height,
    )
    this._ctx.drawImage(
      this._image,
      this._animator.x2,
      this._animator.y,
      this._animator.width,
      this._animator.height,
    )
  }

  updateSpeed(speed: number): void {
    this._animator.updateSpeed(speed)
  }
}
