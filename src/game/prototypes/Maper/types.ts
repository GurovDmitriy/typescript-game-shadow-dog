export interface IMaper {
  mapAnimation: MapAnimation
  configAnimation: Config
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
