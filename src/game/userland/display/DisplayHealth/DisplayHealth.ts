import { Display } from "../Display"

export class DisplayHealth extends Display {
  public name: string
  private _padding: { x: number; y: number }

  public constructor(
    name: string = "Health",
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
  ) {
    super(canvas, ctx)

    this.name = name
    this._padding = { x: 20, y: 20 }
  }

  public draw(): void {
    this._ctx.rect(this._padding.x, this._padding.y, 100, 20)
    this._ctx.stroke()

    this._ctx.fillRect(20, 20, this._value, 20)

    this._ctx.font = "16px Arial"
    this._ctx.fillText("Health", 20, 60)
  }
}
