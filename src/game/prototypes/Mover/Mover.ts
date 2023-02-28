import Maper from "../Maper/Maper"
import { Config } from "../Maper/types"

class Mover extends Maper {
  private x: number
  private y: number

  constructor(config: Config) {
    super(config)

    this.x = 0
    this.y = 0
  }

  get moveX() {
    return this.x
  }

  get moveY() {
    return this.y
  }

  public move(x: number, y: number, speed = 1): void {
    this.x += x * speed
    this.y += y * speed
  }

  public moveUp(speed = 1): void {
    this.x += 0 * speed
    this.y += -1 * speed
  }

  public moveDown(speed = 1): void {
    this.x += 0 * speed
    this.y += 1 * speed
  }

  public moveRight(speed = 1): void {
    this.x += 1 * speed
    this.y += 0 * speed
  }

  public moveLeft(speed = 1): void {
    this.x += -1 * speed
    this.y += 0 * speed
  }
}

export default Mover
