export interface ICreatorBackground {
  update(): void
  updateSpeed(speed: number): void
}

export type BgConfig = {
  image: HTMLImageElement
  width: number
  height: number
  speedModifier: number
}
