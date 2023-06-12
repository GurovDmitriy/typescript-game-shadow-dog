import { ILayer } from "../../creator/LayerPack/types"

/**
 * Create layer for background
 */
class Layer implements ILayer {
  private _width: number
  private _height: number
  private _image: HTMLImageElement
  private _ctx: CanvasRenderingContext2D
  private _x: number
  private _y: number
  private _x2: number
  private _speed?: number
  private _speedModifier?: number

  constructor(
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    image: HTMLImageElement,
    speedModifier = 1,
    speed = 0
  ) {
    this._height = height
    this._width = width
    this._image = image
    this._ctx = ctx
    this._x = 0
    this._y = 0
    this._x2 = width
    this._speed = speed
    this._speedModifier = speedModifier
  }

  /**
   * Animate layer
   */
  public animate() {
    this._ctx.drawImage(
      this._image,
      this._x,
      this._y,
      this._width,
      this._height
    )
    this._ctx.drawImage(
      this._image,
      this._x2,
      this._y,
      this._width,
      this._height
    )

    if (this._x <= -this._width) {
      this._x = this._width + this._x2 - this._speed * this._speedModifier
    }

    if (this._x2 <= -this._width) {
      this._x2 = this._width + this._x - this._speed * this._speedModifier
    }

    this._x = this._x - this._speed * this._speedModifier
    this._x2 = this._x2 - this._speed * this._speedModifier
  }

  public updateSpeed(speed: number) {
    this._speed = speed
  }
}

export default Layer
