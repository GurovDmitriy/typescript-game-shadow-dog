import { type IAnimator } from "../Animator/Animator"
import { type IMover } from "../Mover/Mover"
import { type IContextGame } from "../../../../Game"

/**
 * Drawer - decorator draw with canvas
 */
export class Drawer implements IDrawer {
  private _animator: IAnimator
  private _mover: IMover
  private readonly _image: HTMLImageElement
  private _context: IContextGame
  private readonly _yNormalize: number
  private _name: string = ""

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

  public setName(name: string) {
    this._name = name
  }

  public draw(): void {
    this._animator.run(this._name)

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

export interface IDrawer {
  draw(): void
  setName(name: string): void
  updateSpeed(speed: number): void
}
