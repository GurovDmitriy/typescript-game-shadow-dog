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

export type Animation = {
  name: ActionShadowDog
  frames: number
}

export enum ActionShadowDog {
  plain = "plain",
  jump = "jump",
  fall = "fall",
  run = "run",
  dizzy = "dizzy",
  sit = "sit",
  roll = "roll",
  bite = "bite",
  ko = "ko",
  struck = "struck",
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
