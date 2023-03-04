import Maper from "../Maper/Maper"
import { Config } from "../Maper/types"
import { IMover } from "./types"

class Mover extends Maper implements IMover {
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

  public move(x: number, y: number) {
    this.x = x
    this.y = y
  }
}

export default Mover
