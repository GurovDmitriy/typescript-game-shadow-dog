import Layer, { ILayer } from "../../prototypes/Layer/Layer"

/**
 * Creator for main background game
 */
class LayerPack implements ILayerPack {
  private _layerPack: ILayer[]
  private _config: LayerPackConfigType[]
  private _ctx: CanvasRenderingContext2D
  private _speedGame?: number
  private _speedModifier?: number

  constructor(
    config: LayerPackConfigType[],
    ctx: CanvasRenderingContext2D,
    speedGame = 2,
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
      (item) => new Layer(item.config, item.image, this._ctx)
    )
  }

  /**
   * Animate each layer
   */
  public animate() {
    this._layerPack.forEach((layer) => {
      layer.animate()
    })
  }
}

export interface ILayerPack {
  animate(): void
}

export type LayerPackConfigType = {
  image: HTMLImageElement
  config: { width: number; height: number }
  speedGame: number
  speedModifier: number
}

export default LayerPack
