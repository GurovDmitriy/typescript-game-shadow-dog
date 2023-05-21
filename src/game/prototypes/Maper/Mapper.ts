import { ConfigType, IMapper, MapType } from "./types"

class Mapper implements IMapper {
  private _map: MapType
  private readonly _config: ConfigType

  constructor(config: ConfigType) {
    this._config = config
  }

  get map() {
    return this._map
  }

  get config() {
    return this._config
  }

  public create() {
    const map = {}

    this._config.animation.forEach((state, index) => {
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

    this._map = map

    return this
  }
}

export default Mapper
