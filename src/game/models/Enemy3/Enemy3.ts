import { getImage } from "../../../helpers/utils/getImage"
import Character from "../../creator/Character/Character"
import config from "./config"
import imageUrl from "./images/enemy3.png"
import { ActionEnemy3 } from "./types"

const image = getImage(imageUrl)

class Enemy3 extends Character {
  constructor(ctx: CanvasRenderingContext2D, speed) {
    super(ctx, image, config, speed)
  }

  public plain(): void {
    this.animate(ActionEnemy3.plain)
  }
}

export default Enemy3
