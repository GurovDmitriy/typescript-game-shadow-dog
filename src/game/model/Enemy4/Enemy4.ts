import { getImage } from "../../../utils/getImage"
import config from "./config"
import imageUrl from "./images/enemy4.png"
import { ActionEnemy4, IEnemy4 } from "./types"
import { CreatorCharacter } from "../../framework/creator/CreatorCharacter/CreatorCharacter"
import { IContextGame } from "../../types"

const image = getImage(imageUrl)

export class Enemy4 extends CreatorCharacter implements IEnemy4 {
  constructor(context: IContextGame) {
    super(config, image, context)
  }

  public plain(): void {
    this.animate(ActionEnemy4.plain)
  }
}
