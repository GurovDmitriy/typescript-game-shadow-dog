import { config } from "./config"
import imageUrl from "./images/shadow_dog.png"
import { ActionShadowDog, IShadowDog } from "./types"
import { getImage } from "../../../../utils/getImage"
import { CreatorCharacter } from "../../../framework/creator/CreatorCharacter/CreatorCharacter"
import { IContextGame } from "../../../types"

const image: HTMLImageElement = getImage(imageUrl)

export class ShadowDog extends CreatorCharacter implements IShadowDog {
  constructor(context: IContextGame) {
    super(config, image, context)
  }

  plain(): void {
    this.animate(ActionShadowDog.plain)
  }

  jump(): void {
    this.animate(ActionShadowDog.jump)
  }

  fall(): void {
    this.animate(ActionShadowDog.fall)
  }

  run(): void {
    this.animate(ActionShadowDog.run)
  }

  dizzy(): void {
    this.animate(ActionShadowDog.dizzy)
  }

  sit(): void {
    this.animate(ActionShadowDog.sit)
  }

  roll(): void {
    this.animate(ActionShadowDog.roll)
  }

  bite(): void {
    this.animate(ActionShadowDog.bite)
  }

  ko(): void {
    this.animate(ActionShadowDog.ko)
  }

  struck(): void {
    this.animate(ActionShadowDog.struck)
  }
}
