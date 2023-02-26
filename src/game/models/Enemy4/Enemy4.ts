import { getImage } from "../../../../helpers/utils/getImage"
import GameCharacter from "../../Prototypes/GameCharacter/GameCharacter"
import config from "./config"
import imageUrl from "./images/enemy4.png"
import { ActionEnemy4 } from "./types"

const image = getImage(imageUrl)

class Enemy4 extends GameCharacter {
  constructor(ctx: CanvasRenderingContext2D, speed) {
    super(ctx, image, config, speed)
  }

  public plain(): void {
    this.animate(ActionEnemy4.plain)
  }
}

export default Enemy4
