import { IMover } from "../Mover/types"

class Controller<T extends IMover> {
  private x: number
  private y: number
  private angle: number
  private xPosLimit: [number, number]
  private yPosLimit: [number, number]

  public character: T

  constructor(
    character: T,
    xPosLimit: [number, number],
    yPosLimit: [number, number]
  ) {
    this.xPosLimit = xPosLimit
    this.yPosLimit = yPosLimit

    this.x = this.getRandomInteger(...xPosLimit)
    this.y = this.getRandomInteger(...yPosLimit)
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
    this.x += this.getRandomInteger(-1, 1)
    this.y += this.getRandomInteger(-1, 1)

    this.character.move(this.x, this.y)

    return this
  }

  public synAxis(axis: "x" | "y" = "x") {
    this[axis] = Math.sin(this.angle) * 20
    this.angle += 0.02

    this.move()

    // if (this.angle > 2 * Math.PI) this.angle = 0
    if (this.angle >= (5 / 2) * Math.PI) this.angle = (1 / 2) * Math.PI

    return this
  }

  public syn(vector: 1 | -1 = 1) {
    this.x = Math.sin(this.angle) * 20
    this.y = Math.sin(this.angle) * 20 * 1
    this.angle += 0.02

    this.move()

    // if (this.angle > 2 * Math.PI) this.angle = 0
    if (this.angle >= (5 / 2) * Math.PI) this.angle = (1 / 2) * Math.PI

    return this
  }

  public round(vector: 1 | -1 = 1) {
    this.x = Math.sin(this.angle) * 40
    this.y = Math.cos(this.angle) * 40 * vector
    this.angle += 0.02

    this.move()

    // if (this.angle > 2 * Math.PI) this.angle = 0
    if (this.angle >= (5 / 2) * Math.PI) this.angle = (1 / 2) * Math.PI

    return this
  }

  private move() {
    this.character.move(this.x, this.y)
  }

  private getRandomInteger(min, max): number {
    const rand = min - 0.5 + Math.random() * (max - min + 1)
    return Math.round(rand)
  }

  private getRandom(min, max): number {
    return min + Math.random() * (max - min)
  }
}

export default Controller
