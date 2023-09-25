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

export interface IMapper {
  config: ConfigType
  map: MapType
}

export type ConfigType = {
  image: {
    width: number
    height: number
    frameWidth: number
    frameHeight: number
    columns: number
    rows: number
  }

  animation: AnimationType[]
}

export type AnimationType = {
  name: string
  frames: number
}

export type MapType = {
  [key: string]: FrameType
}

export type FrameType = {
  location: LocationType[]
}

export type LocationType = {
  x: number
  y: number
}
