import { Display } from "../Display"

export class DisplayDistance extends Display {
  public name: string
  private _padding: { x: number; y: number }

  public constructor(
    name: string = "Distance",
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
  ) {
    super(canvas, ctx)

    this.name = name
    this._padding = { x: this._canvas.width - 100, y: 40 }
  }

  public draw(): void {
    this._ctx.font = "15px Arial"
    this._ctx.fillText(String(this._value), this._padding.x, this._padding.y)
    this._ctx.fillText(this.name, this._padding.x, 60)
  }
}
