import { getImage } from "../../../helpers/utils/getImage"
import Character from "../../creator/Character/Character"
import config from "./config"
import imageUrl from "./images/enemy2.png"
import { ActionEnemy2 } from "./types"

const image = getImage(imageUrl)

class Enemy2 extends Character {
  constructor(ctx: CanvasRenderingContext2D, speed) {
    super(ctx, image, config, speed)
  }

  public plain(): void {
    this.animate(ActionEnemy2.plain)
  }
}

export default Enemy2
