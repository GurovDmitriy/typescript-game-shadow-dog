import { IAI } from "./types"
import { ICreatorCharacter } from "../../framework/creator/CreatorCharacter/types"

export class AI implements IAI {
  private _x: number
  private _y: number
  private _angle: number
  private _character: ICreatorCharacter
  private readonly _mode: "random"

  constructor(character: ICreatorCharacter, mode: "random") {
    this._x = character.x
    this._y = character.y
    this._angle = 0
    this._character = character
    this._mode = mode
  }

  public update() {
    this[`_${this._mode}`]()
  }

  private _random() {
    this._x = this._character.x + this.getRandomInteger(-1, 1)
    this._y = this._character.y + this.getRandomInteger(-1, 1)

    this._move()
  }

  private _move() {
    this._character.move(this._x, this._y)
  }

  private getRandomInteger(min: number, max: number): number {
    const rand = min - 0.5 + Math.random() * (max - min + 1)
    return Math.round(rand)
  }
}
