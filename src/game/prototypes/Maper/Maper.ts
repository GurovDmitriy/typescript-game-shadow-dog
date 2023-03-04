import { Config, Frames, IMaper, MapAnimation } from "./types"

class Maper implements IMaper {
  private map: MapAnimation
  private config: Config

  constructor(config: Config) {
    this.config = config
  }

  get mapAnimation() {
    return this.map
  }

  get configAnimation() {
    return this.config
  }

  protected createMap() {
    const map: MapAnimation = {}

    this.config.animation.forEach((state, index) => {
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

    this.map = map
  }
}

export default Maper
