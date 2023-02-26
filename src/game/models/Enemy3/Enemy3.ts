import { getImage } from "../../../../helpers/utils/getImage"
import GameCharacter from "../../Prototypes/GameCharacter/GameCharacter"
import config from "./config"
import imageUrl from "./images/enemy3.png"
import { ActionEnemy3 } from "./types"

const image = getImage(imageUrl)

class Enemy3 extends GameCharacter {
  constructor(ctx: CanvasRenderingContext2D, speed) {
    super(ctx, image, config, speed)
  }

  public plain(): void {
    this.animate(ActionEnemy3.plain)
  }
}

export default Enemy3
