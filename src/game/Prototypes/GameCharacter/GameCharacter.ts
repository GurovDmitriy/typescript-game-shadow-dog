import { getClone } from "../../../../helpers/utils/getClone"

class GameCharacter {
  private mapAnimation: MapAnimation
  private counter: number

  constructor(
    private ctx: CanvasRenderingContext2D,
    private image: HTMLImageElement,
    readonly config: Config,
    private speed: number
  ) {
    this.mapAnimation = this.getMapAnimation(config.animation)
    this.counter = 0
  }

  public animate(name: string): void {
    const position =
      Math.floor(this.counter * this.speed) %
      this.mapAnimation[name].location.length
    const frameX = this.config.image.frameWidth * position
    const frameY = this.mapAnimation[name].location[position].y

    this.ctx.drawImage(
      this.image,
      frameX,
      frameY,
      this.config.image.frameWidth,
      this.config.image.frameHeight,
      0,
      0,
      this.config.image.frameWidth,
      this.config.image.frameHeight
    )

    this.counter += 1
  }

  public update(speed) {
    this.speed = speed
  }

  private getMapAnimation(animation: Animation[]): MapAnimation {
    const map: MapAnimation = {}
    const animationClone = getClone<Animation[]>(animation)

    animationClone.forEach((state, index) => {
      const frames: Frames = {
        location: [],
      }

      for (let i = 0; i < state.frames; i++) {
        const x = i * this.config.image.frameWidth
        const y = index * this.config.image.frameHeight

        frames.location.push({ x, y })
      }

      map[state.name] = frames
    })

    return map
  }
}

export type Config = {
  image: {
    width: number
    height: number
    frameWidth: number
    frameHeight: number
    columns: number
    rows: number
  }

  animation: Animation[]
}

export type Animation = {
  name: string
  frames: number
}

export type MapAnimation = {
  [key: string]: Frames
}

export type Frames = {
  location: Location[]
}

export type Location = {
  x: number
  y: number
}

export default GameCharacter
