import { getImage } from "../../../../helpers/utils/getImage"
import AnimatorCharacter from "../../prototypes/AnimatorCharacter/AnimatorCharacter"
import config from "./config"
import imageUrl from "./images/enemy3.png"

const image = getImage(imageUrl)

class Enemy3 extends AnimatorCharacter {
  constructor(ctx: CanvasRenderingContext2D, speed) {
    super(ctx, image, config, speed)
  }

  public plain(): void {
    this.animate(ActionEnemy3.plain)
  }
}

export enum ActionEnemy3 {
  plain = "plain",
}

export default Enemy3
