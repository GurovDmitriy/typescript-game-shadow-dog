import { getImage } from "../../../../helpers/utils/getImage"
import AnimatorCharacter from "../../prototypes/AnimatorCharacter/AnimatorCharacter"
import config from "./config"
import imageUrl from "./images/enemy2.png"

const image = getImage(imageUrl)

class Enemy2 extends AnimatorCharacter {
  constructor(ctx: CanvasRenderingContext2D, speed) {
    super(ctx, image, config, speed)
  }

  public plain(): void {
    this.animate(ActionEnemy2.plain)
  }
}

export enum ActionEnemy2 {
  plain = "plain",
}

export default Enemy2
