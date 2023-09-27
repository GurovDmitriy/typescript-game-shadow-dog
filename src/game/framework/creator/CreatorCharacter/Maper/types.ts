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
