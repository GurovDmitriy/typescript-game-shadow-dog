import LayerPack from "../../prototypes/LayerPack/LayerPack"
import { config } from "./config"

class Background extends LayerPack {
  constructor(speedGame: number, speedModifier: number) {
    super(config, speedGame, speedModifier)
  }
}

export default Background
