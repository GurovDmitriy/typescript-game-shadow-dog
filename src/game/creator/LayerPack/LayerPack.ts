import Layer from "../../prototypes/Layer/Layer"
import { ILayer, ILayerPack, LayerConfigType } from "./types"

/**
 * Creator for main background game
 */
class LayerPack implements ILayerPack {
  private _layerPack: ILayer[]
  private _config: LayerConfigType[]
  private _ctx: CanvasRenderingContext2D
  private _speedGame?: number
  private _speedModifier?: number

  constructor(
    config: LayerConfigType[],
    ctx: CanvasRenderingContext2D,
    speedGame = 1,
    speedModifier = 1
  ) {
    this._config = config
    this._speedGame = speedGame
    this._speedModifier = speedModifier
    this._ctx = ctx

    /**
     * Create background layers instance
     */
    this._layerPack = this._config.map(
      (item) =>
        new Layer(
          this._ctx,
          item.width,
          item.height,
          item.image,
          item.speedModifier
        )
    )
  }

  /**
   * Animate each layer
   */
  public animate() {
    this._layerPack.forEach((layer) => {
      layer.animate()
    })

    return this
  }

  public updateSpeed(speed: number) {
    this._layerPack.forEach((layer) => {
      layer.updateSpeed(speed)
    })

    return this
  }
}

export default LayerPack
