import { IMover } from "../../prototypes/Mover/types"

class Controller<T extends IMover> {
  private _x: number
  private _y: number
  private _angle: number
  private _character: T

  constructor(character: T) {
    this._x = 0
    this._y = 0
    this._angle = 0
    this._character = character
  }

  get x() {
    return this._x
  }

  get y() {
    return this._y
  }

  public random() {
    this._x += this.getRandomInteger(-1, 1)
    this._y += this.getRandomInteger(-1, 1)

    this.move()
  }

  private move() {
    this._character.move(this._x, this._y)
  }

  private getRandomInteger(min, max): number {
    const rand = min - 0.5 + Math.random() * (max - min + 1)
    return Math.round(rand)
  }
}

export default Controller
