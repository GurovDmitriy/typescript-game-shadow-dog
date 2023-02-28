import Animator from "../Animator/Animator"
import { Config } from "../Maper/types"

class Character extends Animator {
  constructor(
    ctx: CanvasRenderingContext2D,
    image: HTMLImageElement,
    config: Config,
    speed: number
  ) {
    super(ctx, image, config, speed)
  }

  public create() {
    this.createMap()
  }
}

export default Character
