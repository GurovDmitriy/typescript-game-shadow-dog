import Layer from "../Layer/Layer"

export interface ILayerPack {
  layers: Layer[]
  create(): void
}

export type Config = {
  image: HTMLImageElement
  config: { width: number; height: number }
  speedGame: number
  speedModifier: number
}
