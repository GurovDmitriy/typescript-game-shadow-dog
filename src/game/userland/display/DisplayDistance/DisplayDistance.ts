import { Display } from "../Display"
import { IModel, PositionType } from "../types"

/**
 * DisplayDistance
 * Visualization of the camera distance to the end of the level
 */
export class DisplayDistance extends Display {
  public constructor(
    model: IModel,
    ctx: CanvasRenderingContext2D,
    position: PositionType,
    percentage: boolean = true,
    name: string = "Distance",
    invert: boolean = true,
  ) {
    super(model, ctx, position, percentage, name, invert)
  }

  public draw(): void {
    this._ctx.font = "16px Arial"
    this._ctx.fillText(String(this._value), this._position.x, this._position.y)
    this._ctx.fillText(this.name, this._position.x, this._position.y + 20)
  }
}
