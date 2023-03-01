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

  protected moveUp(speed = 1): void {
    this.x += 0 * speed
    this.y += -1 * speed
  }

  protected moveDown(speed = 1): void {
    this.x += 0 * speed
    this.y += 1 * speed
  }

  protected moveRight(speed = 1): void {
    this.x += 1 * speed
    this.y += 0 * speed
  }

  protected moveLeft(speed = 1): void {
    this.x += -1 * speed
    this.y += 0 * speed
  }
}

export default Mover
