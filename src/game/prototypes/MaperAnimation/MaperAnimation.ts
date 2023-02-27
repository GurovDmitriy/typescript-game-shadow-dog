class MaperAnimation {
  protected map: MapAnimation
  protected config: Config

  constructor(config: Config) {
    this.config = config
  }

  public create() {
    this.setMap()
  }

  private setMap() {
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

export default MaperAnimation
