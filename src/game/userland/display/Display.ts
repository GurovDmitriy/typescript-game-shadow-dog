import { IDisplay } from "./types"

export abstract class Display implements IDisplay {
  protected _ctx: CanvasRenderingContext2D
  protected _canvas: HTMLCanvasElement
  protected _value: number

  protected constructor(
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
  ) {
    this._ctx = ctx
    this._canvas = canvas
    this._value = 100
  }

  public setValue(value: number) {
    if (this._value < 0) {
      this._value = 0
    } else if (this._value > 100) {
      this._value = 100
    } else {
      this._value = value
    }
  }

  public update(): void {
    this.draw()
  }

  public abstract draw(): void
}
