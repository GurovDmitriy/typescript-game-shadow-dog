import { IMover } from "../Mover/types"

class Controller<T extends IMover> {
  private x: number
  private y: number
  private angle: number

  public character: T

  constructor(character: T) {
    this.x = 0
    this.y = 0
    this.angle = 0

    this.character = character
  }

  get xMove() {
    return this.x
  }

  get yMove() {
    return this.y
  }

  public random() {
    this.x += this.randomIntegerC(-1, 1)
    this.y += this.randomIntegerC(-1, 1)

    this.character.move(this.x, this.y)

    return this
  }

  public ySyn() {
    this.y = Math.sin(this.angle) * 20
    this.angle += 0.02

    this.move()

    // if (this.angle > 2 * Math.PI) this.angle = 0
    if (this.angle >= (5 / 2) * Math.PI) this.angle = (1 / 2) * Math.PI

    return this
  }

  public xSyn() {
    this.x = Math.sin(this.angle) * 20
    this.angle += 0.02

    this.move()

    // if (this.angle > 2 * Math.PI) this.angle = 0
    if (this.angle >= (5 / 2) * Math.PI) this.angle = (1 / 2) * Math.PI

    return this
  }

  private move() {
    this.character.move(this.x, this.y)
  }

  private randomIntegerC(min, max): number {
    const rand = min - 0.5 + Math.random() * (max - min + 1)
    return Math.round(rand)
  }

  private randomC(min, max): number {
    return min + Math.random() * (max - min)
  }
}

export default Controller
