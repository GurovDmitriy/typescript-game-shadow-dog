import { ConfigType, IMapper, MapType } from "./types"

/**
 * Mapper - create map animation from config
 */
export class Mapper implements IMapper {
  public readonly config: ConfigType
  public map: MapType

  constructor(config: ConfigType) {
    this.config = config
    this._create()
  }

  private _create(): void {
    const map = {}

    this.config.animation.forEach((state, index) => {
      const frames = {
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
