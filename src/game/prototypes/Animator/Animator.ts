import { Config } from "../Maper/types"
import Mover from "../Mover/Mover"
import { IAnimator } from "./types"

class Animator extends Mover implements IAnimator {
  private ctx: CanvasRenderingContext2D
  private image: HTMLImageElement
  private speed: number
  private counter: number
  private gap: number

  constructor(
    ctx: CanvasRenderingContext2D,
    image: HTMLImageElement,
    config: Config,
    speed: number
  ) {
    super(config)

    this.ctx = ctx
    this.image = image
    this.speed = speed
    this.counter = 0
  }

  public updateSpeed(speed: number) {
    this.speed = speed
  }

  public updateSize() {
    console.log("update size")
  }

  protected animate(name: string): void {
    const gap =
      Math.floor(this.counter / this.speed) %
      this.mapAnimation[name].location.length

    this.ctx.drawImage(
      this.image,
      this.configAnimation.image.frameWidth * gap,
      this.mapAnimation[name].location[gap].y,
      this.configAnimation.image.frameWidth,
      this.configAnimation.image.frameHeight,
      this.moveX,
      this.moveY,
      this.configAnimation.image.frameWidth,
      this.configAnimation.image.frameHeight
    )

    this.counter += 1

    if (gap === this.mapAnimation[name].location.length - 1) {
      this.counter = 0
    }
  }
}

export default Animator
