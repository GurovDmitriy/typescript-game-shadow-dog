import { Config, Frames, IMapper, MapAnimation } from "./types"

class Mapper implements IMapper {
  private map: MapAnimation
  private readonly config: Config

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

export default Mapper
