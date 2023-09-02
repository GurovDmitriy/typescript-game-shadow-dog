import { getImage } from "../../../helpers/utils/getImage"
import Character from "../../creator/Character/Character"
import config from "./config"
import imageUrl from "./images/shadow_dog.png"
import { ActionShadowDog } from "./types"

const image = getImage(imageUrl)

class ShadowDog extends Character {
  constructor(ctx: CanvasRenderingContext2D, speed: number) {
    super(ctx, image, config, speed)
  }

  public plain() {
    this.animate(ActionShadowDog.plain)
  }

  public jump() {
    this.animate(ActionShadowDog.jump)
  }

  public fall() {
    this.animate(ActionShadowDog.fall)
  }

  public run() {
    this.animate(ActionShadowDog.run)
  }

  public dizzy() {
    this.animate(ActionShadowDog.dizzy)
  }

  public sit() {
    this.animate(ActionShadowDog.sit)
  }

  public roll() {
    this.animate(ActionShadowDog.roll)
  }

  public bite() {
    this.animate(ActionShadowDog.bite)
  }

  public ko() {
    this.animate(ActionShadowDog.ko)
  }

  public struck() {
    this.animate(ActionShadowDog.struck)
  }
}

export default ShadowDog
