import { Config, ILayer } from "./types"

class Layer implements ILayer {
  private x: number
  private y: number
  private x2: number
  private config: Config
  private speed: number
  private speedGame: number
  private speedModifier: number
  private image: HTMLImageElement

  constructor(
    image: HTMLImageElement,
    config: Config,
    speedGame: number,
    speedModifier: number
  ) {
    this.x = 0
    this.y = 0
    this.config = config
    this.x2 = config.width
    this.image = image
    this.speed = speedGame
    this.speedGame = speedGame
    this.speedModifier = speedModifier
  }

  public animate(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(
      this.image,
      this.x,
      this.y,
      this.config.width,
      this.config.height
    )
    ctx.drawImage(
      this.image,
      this.x2,
      this.y,
      this.config.width,
      this.config.height
    )

    if (this.x <= -this.config.width) {
      this.x = this.config.width + this.x2 - this.speed
    }

    if (this.x2 <= -this.config.width) {
      this.x2 = this.config.width + this.x - this.speed
    }

    this.x = this.x - this.speed
    this.x2 = this.x2 - this.speed
  }

  public updateSpeed(speedGame: number, speedModifier: number) {
    this.speedGame = speedGame
    this.speedModifier = speedModifier
  }
}

export default Layer
