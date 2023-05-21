import { IMover } from "./types"

class Mover implements IMover {
  private _x: number
  private _y: number

  constructor() {
    this._x = 0
    this._y = 0
  }

  get x() {
    return this._x
  }

  get y() {
    return this._y
  }

  public move(x, y) {
    this._x = x
    this._y = y
  }
}

export default Mover
