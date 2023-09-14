import { getImage } from "../../../utils/getImage"
import config from "./config"
import imageUrl from "./images/enemy3.png"
import { ActionEnemy3, IEnemy3 } from "./types"
import { CreatorCharacter } from "../../framework/creator/CreatorCharacter/CreatorCharacter"
import { IContextGame } from "../../types"

const image = getImage(imageUrl)

export class Enemy3 extends CreatorCharacter implements IEnemy3 {
  constructor(context: IContextGame) {
    super(config, image, context)
  }

  public plain(): void {
    this.animate(ActionEnemy3.plain)
  }
}
