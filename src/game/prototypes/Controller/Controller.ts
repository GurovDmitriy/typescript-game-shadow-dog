import { IMover } from "../Mover/types"

class Controller<T extends IMover> {
  private x: number
  private y: number
  public character: T

  constructor(character: T) {
    this.x = 0
    this.y = 0

    this.character = character
  }

  get xMove() {
    return this.x
  }

  get yMove() {
    return this.y
  }

  public random() {
    this.x += this.randomIntegerT(-1, 1)
    this.y += this.randomIntegerT(-1, 1)

    this.character.move(this.x, this.y)

    return this
  }

  // public xSyn() {
  //   console.log("xSyn")
  // }

  private randomIntegerT(min, max): number {
    const rand = min - 0.5 + Math.random() * (max - min + 1)
    return Math.round(rand)
  }

  private randomT(min, max): number {
    return min + Math.random() * (max - min)
  }
}

export default Controller
