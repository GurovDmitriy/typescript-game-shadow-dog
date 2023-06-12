export interface ILayer {
  animate(): void
  updateSpeed(speed: number): void
}

export interface ILayerPack {
  animate(): void
  updateSpeed(speed: number): void
}

export type LayerConfigType = {
  image: HTMLImageElement
  width: number
  height: number
  speedModifier: number
}
