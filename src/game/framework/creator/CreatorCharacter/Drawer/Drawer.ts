import { IDrawer } from "./types"
import { IAnimator } from "../Animator/types"
import { IMover } from "../Mover/types"
import { IContextGame } from "../../../../types"

/**
 * Drawer - decorator draw with canvas
 */
export class Drawer implements IDrawer {
  private _animator: IAnimator
  private _mover: IMover
  private readonly _image: HTMLImageElement
  private _context: IContextGame
  private readonly _yNormalize: number

  constructor(
    animator: IAnimator,
    mover: IMover,
    image: HTMLImageElement,
    context: IContextGame,
  ) {
    this._animator = animator
    this._mover = mover
    this._image = image
    this._context = context
    this._yNormalize = 328
  }

  public draw(name: string): void {
    this._animator.run(name)

    this._context.ctx.drawImage(
      this._image,
      this._animator.sx,
      this._animator.sy,
      this._animator.sw,
      this._animator.sh,
      this._mover.x,
      this._mover.y + this._yNormalize,
      this._animator.dw,
      this._animator.dh,
    )
  }

  public updateSpeed(value: number): void {
    this._animator.updateSpeed(value)
  }
}
