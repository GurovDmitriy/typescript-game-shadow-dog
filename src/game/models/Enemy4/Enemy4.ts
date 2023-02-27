import { getImage } from "../../../../helpers/utils/getImage"
import AnimatorCharacter from "../../prototypes/AnimatorCharacter/AnimatorCharacter"
import config from "./config"
import imageUrl from "./images/enemy4.png"

const image = getImage(imageUrl)

class Enemy4 extends AnimatorCharacter {
  constructor(ctx: CanvasRenderingContext2D, speed) {
    super(ctx, image, config, speed)
  }

  public plain(): void {
    this.animate(ActionEnemy4.plain)
  }
}

export enum ActionEnemy4 {
  plain = "plain",
}

export default Enemy4
