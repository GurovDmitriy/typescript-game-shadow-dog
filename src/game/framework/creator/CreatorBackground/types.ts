export interface ICreatorBackground {
  update(): void
  run(): void
  plain(): void
  updateSpeed(speed: number): void
}

export type BgConfig = {
  image: HTMLImageElement
  width: number
  height: number
  speedModifier: number
}
