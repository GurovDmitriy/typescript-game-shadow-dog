import { getImage } from "../../../../helpers/utils/getImage"
import Character from "../../prototypes/Character/Character"
import config from "./config"
import imageUrl from "./images/enemy1.png"
import { ActionEnemy1 } from "./types"

const image = getImage(imageUrl)

class Enemy1 extends Character {
  constructor(ctx: CanvasRenderingContext2D, speed) {
    super(ctx, image, config, speed)
  }

  public plain(): void {
    this.animate(ActionEnemy1.plain)
  }
}

export default Enemy1
