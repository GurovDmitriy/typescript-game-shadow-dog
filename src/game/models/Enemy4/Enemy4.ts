import { getImage } from "../../../../helpers/utils/getImage"
import Character from "../../prototypes/Character/Character"
import config from "./config"
import imageUrl from "./images/enemy4.png"
import { ActionEnemy4 } from "./types"

const image = getImage(imageUrl)

class Enemy4 extends Character {
  constructor(ctx: CanvasRenderingContext2D, speed) {
    super(ctx, image, config, speed)
  }

  public plain(): void {
    this.animate(ActionEnemy4.plain)
  }
}

export default Enemy4
