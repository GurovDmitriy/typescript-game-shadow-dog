import { Display } from "../Display"
import { IModel, PositionType } from "../types"

/**
 * DisplayHealth
 * Visualization level health.
 */
export class DisplayHealth extends Display {
  private readonly _width: number
  private readonly _height: number

  public constructor(
    model: IModel,
    ctx: CanvasRenderingContext2D,
    position: PositionType,
    percentage: boolean = true,
    name: string = "Health",
    width: number = 100,
    height: number = 20,
  ) {
    super(model, ctx, position, percentage, name)

    this._width = width
    this._height = height
  }

  public draw(): void {
    this._ctx.rect(
      this._position.x,
      this._position.y,
      this._width,
      this._height,
    )
    this._ctx.stroke()

    this._ctx.fillRect(
      this._position.x,
      this._position.y,
      this._value as number,
      this._height,
    )

    this._ctx.font = "16px Arial"
    this._ctx.fillText(this.name, this._position.x, this._position.y + 20)
  }
}
