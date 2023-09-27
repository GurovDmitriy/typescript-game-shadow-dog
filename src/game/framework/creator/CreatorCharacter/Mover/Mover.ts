import { IMover } from "./types"

/**
 * Mover - control for set figure coordinates x, y
 */
export class Mover implements IMover {
  private _x: number
  private _y: number

  constructor() {
    this._x = 0
    this._y = 0
  }

  get x(): number {
    return this._x
  }

  get y(): number {
    return this._y
  }

  set x(value: number) {
    this._x += value
  }

  set y(value: number) {
    this._y -= value
  }

  public move(x: number, y: number): void {
    this._x = x
    this._y = y
  }
}
