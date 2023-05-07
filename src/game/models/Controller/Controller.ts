import { IMover } from "../../prototypes/Mover/types"

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
    this.x += this.getRandomInteger(-1, 1)
    this.y += this.getRandomInteger(-1, 1)

    this.character.move(this.x, this.y)

    return this
  }

  public synX(speed = 0.02, deviation = 30, limits = [0, 800]) {
    this.y = Math.sin(this.angle) * deviation
    this.x -= 1
    this.angle += speed

    this.move()

    // if (this.angle > 2 * Math.PI) this.angle = 0
    if (this.angle >= (5 / 2) * Math.PI) this.angle = (1 / 2) * Math.PI
    if (this.x < limits[0]) this.x = limits[1]

    return this
  }

  public round(vector: 1 | -1 = 1, r = 60, speed = 0.02) {
    this.x = Math.sin(this.angle) * r
    this.y = Math.cos(this.angle) * r * vector
    this.angle += speed

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
