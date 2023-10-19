import { IDisplay, IModel, PositionType } from "./types"

/**
 * Display
 * Visualization data from model like a health level, score or other.
 * The data model can give a string or a number for reading,
 * this class can process this number as a percentage or output it directly.
 */
export abstract class Display implements IDisplay {
  public name: string
  protected _ctx: CanvasRenderingContext2D
  protected _model: IModel
  protected _value: number | string
  protected _position: PositionType
  protected _percentage: boolean
  protected _invert: boolean

  protected constructor(
    model: IModel,
    ctx: CanvasRenderingContext2D,
    position: PositionType,
    percentage: boolean = true,
    name: string = "",
    invert: boolean = false,
  ) {
    this._model = model
    this._ctx = ctx
    this._position = position
    this._percentage = percentage
    this._invert = invert
    this.name = name
  }

  public update(): void {
    this._setValue()
    this.draw()
  }

  public abstract draw(): void

  private _setValue(): void {
    const value = this._model.value
    const amount = this._model.amount

    if (typeof value === "string") {
      this._value = value
    } else if (typeof value === "number" && !this._percentage) {
      this._value = value
    } else if (
      typeof value === "number" &&
      this._percentage &&
      (amount || amount === 0)
    ) {
      if (value < 0) {
        this._value = 0
      } else {
        this._value = Math.round((value * 100) / amount)
      }
    }

    if (this._invert && typeof this._value === "number") {
      this._value = 100 - this._value
    }
  }
}
