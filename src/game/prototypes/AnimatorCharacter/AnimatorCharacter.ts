import MaperAnimation, { Config } from "../MaperAnimation/MaperAnimation"

class AnimatorCharacter extends MaperAnimation {
  private ctx: CanvasRenderingContext2D
  private image: HTMLImageElement
  private speed: number
  private counter: number

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

  protected animate(name: string): void {
    const gap =
      Math.floor(this.counter / this.speed) % this.map[name].location.length

    this.ctx.drawImage(
      this.image,
      this.config.image.frameWidth * gap,
      this.map[name].location[gap].y,
      this.config.image.frameWidth,
      this.config.image.frameHeight,
      0,
      0,
      this.config.image.frameWidth,
      this.config.image.frameHeight
    )

    this.counter += 1

    if (gap === this.map[name].location.length - 1) {
      this.counter = 0
    }
  }

  public updateSpeed(speed: number) {
    this.speed = speed
  }

  public updateSize() {
    console.log("update size")
  }

  public move() {
    console.log("move")
  }
}

export default AnimatorCharacter
