import Layer from "../Layer/Layer"
import { Config, ILayerPack } from "./types"

class LayerPack implements ILayerPack {
  private layerPack: Layer[]
  private config: Config[]
  private speedGame: number
  private speedModifier: number

  constructor(config: Config[], speedGame: number, speedModifier: number) {
    this.config = config
    this.speedGame = speedGame
    this.speedModifier = speedModifier
  }

  get layers() {
    return this.layerPack
  }

  public create() {
    const layerPack = this.config.map(
      (item) =>
        new Layer(item.image, item.config, item.speedGame, item.speedModifier)
    )

    this.layerPack = layerPack
  }
}

export default LayerPack
