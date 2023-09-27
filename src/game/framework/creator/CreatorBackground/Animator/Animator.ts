import { IAnimator } from "./types"

/**
 * Animator - algorithm for create data for draw bg infinity on canvas
 */
export class Animator implements IAnimator {
  private readonly _width: number
  private readonly _height: number
  private _x: number
  private readonly _y: number
  private _x2: number
  private _speed: number
  private readonly _speedModifier: number

  constructor(width: number, height: number, speedModifier: number) {
    this._width = width
    this._height = height
    this._x = 0
    this._y = 0
    this._x2 = 0
    this._speed = 0
    this._speedModifier = speedModifier
  }

  get width(): number {
    return this._width
  }

  get height(): number {
    return this._height
  }

  get x(): number {
    return this._x
  }

  get y(): number {
    return this._y
  }

  get x2(): number {
    return this._x2
  }

  run(): void {
    if (this._x <= -this._width) {
      this._x = this._width + this._x2 - this._speed * this._speedModifier
    }

    if (this._x2 <= -this._width) {
      this._x2 = this._width + this._x - this._speed * this._speedModifier
    }

    this._x = this._x - this._speed * this._speedModifier
    this._x2 = this._x2 - this._speed * this._speedModifier
  }

  updateSpeed(speed: number): void {
    this._speed = speed
  }
}
