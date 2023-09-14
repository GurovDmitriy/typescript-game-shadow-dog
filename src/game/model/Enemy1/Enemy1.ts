import { getImage } from "../../../utils/getImage"
import config from "./config"
import imageUrl from "./images/enemy1.png"
import { ActionEnemy1, IEnemy1 } from "./types"
import { CreatorCharacter } from "../../framework/creator/CreatorCharacter/CreatorCharacter"
import { IContextGame } from "../../types"

const image = getImage(imageUrl)

export class Enemy1 extends CreatorCharacter implements IEnemy1 {
  constructor(context: IContextGame) {
    super(config, image, context)
  }

  public plain(): void {
    this.animate(ActionEnemy1.plain)
  }
}
