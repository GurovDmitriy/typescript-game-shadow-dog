class Layer implements ILayer {
  private _config: LayerConfigType
  private _image: HTMLImageElement
  private _ctx: CanvasRenderingContext2D
  private _x: number
  private _y: number
  private _x2: number
  private _speed?: number
  private _speedModifier?: number

  constructor(
    config: LayerConfigType,
    image: HTMLImageElement,
    ctx: CanvasRenderingContext2D,
    speed = 2,
    speedModifier = 1
  ) {
    this._config = config
    this._image = image
    this._ctx = ctx
    this._x = 0
    this._y = 0
    this._x2 = config.width
    this._speed = speed
    this._speedModifier = speedModifier
  }

  public animate() {
    this._ctx.drawImage(
      this._image,
      this._x,
      this._y,
      this._config.width,
      this._config.height
    )
    this._ctx.drawImage(
      this._image,
      this._x2,
      this._y,
      this._config.width,
      this._config.height
    )

    if (this._x <= -this._config.width) {
      this._x = this._config.width + this._x2 - this._speed
    }

    if (this._x2 <= -this._config.width) {
      this._x2 = this._config.width + this._x - this._speed
    }

    this._x = this._x - this._speed
    this._x2 = this._x2 - this._speed
  }
}

export interface ILayer {
  animate(): void
}

export type LayerConfigType = { width: number; height: number }

export default Layer
