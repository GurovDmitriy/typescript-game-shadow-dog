import { getImage } from "../../../../helpers/utils/getImage"
import AnimatorCharacter from "../../prototypes/AnimatorCharacter/AnimatorCharacter"
import config from "./config"
import imageUrl from "./images/enemy1.png"

const image = getImage(imageUrl)

class Enemy1 extends AnimatorCharacter {
  constructor(ctx: CanvasRenderingContext2D, speed) {
    super(ctx, image, config, speed)
  }

  public plain(): void {
    this.animate(ActionEnemy1.plain)
  }
}

export enum ActionEnemy1 {
  plain = "plain",
}

export default Enemy1
