import Animator from "../Animator/Animator"
import { Config } from "../Maper/types"
import { ICharacter } from "./types"

class Character extends Animator implements ICharacter {
  constructor(
    ctx: CanvasRenderingContext2D,
    image: HTMLImageElement,
    config: Config,
    speed: number
  ) {
    super(ctx, image, config, speed)
  }

  public create(): void {
    this.createMap()
  }
}

export default Character
