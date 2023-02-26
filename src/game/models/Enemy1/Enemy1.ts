import { getImage } from "../../../../helpers/utils/getImage"
import GameCharacter from "../../Prototypes/GameCharacter/GameCharacter"
import config from "./config"
import imageUrl from "./images/enemy1.png"
import { ActionEnemy1 } from "./types"

const image = getImage(imageUrl)

class Enemy1 extends GameCharacter {
  constructor(ctx: CanvasRenderingContext2D, speed) {
    super(ctx, image, config, speed)
  }

  public plain(): void {
    this.animate(ActionEnemy1.plain)
  }
}

export default Enemy1
