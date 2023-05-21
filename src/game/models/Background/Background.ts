import LayerPack from "../../prototypes/LayerPack/LayerPack"
import { config } from "./config"

class Background extends LayerPack {
  constructor(ctx: CanvasRenderingContext2D) {
    super(config, ctx)
  }
}

export default Background
