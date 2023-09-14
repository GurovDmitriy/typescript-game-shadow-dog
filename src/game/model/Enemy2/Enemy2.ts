import { getImage } from "../../../utils/getImage"
import config from "./config"
import imageUrl from "./images/enemy2.png"
import { ActionEnemy2, IEnemy2 } from "./types"
import { CreatorCharacter } from "../../framework/creator/CreatorCharacter/CreatorCharacter"
import { IContextGame } from "../../types"

const image = getImage(imageUrl)

export class Enemy2 extends CreatorCharacter implements IEnemy2 {
  constructor(context: IContextGame) {
    super(config, image, context)
  }

  public plain(): void {
    this.animate(ActionEnemy2.plain)
  }
}
