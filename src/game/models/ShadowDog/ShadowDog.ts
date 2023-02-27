import { getImage } from "../../../../helpers/utils/getImage"
import AnimatorCharacter from "../../prototypes/AnimatorCharacter/AnimatorCharacter"
import config from "./config"
import imageUrl from "./images/shadow_dog.png"

const image = getImage(imageUrl)

class ShadowDog extends AnimatorCharacter {
  constructor(ctx: CanvasRenderingContext2D, speed) {
    super(ctx, image, config, speed)
  }

  public plain(): void {
    this.animate(ActionShadowDog.plain)
  }

  public jump(): void {
    this.animate(ActionShadowDog.jump)
  }

  public fall(): void {
    this.animate(ActionShadowDog.fall)
  }

  public run(): void {
    this.animate(ActionShadowDog.run)
  }

  public dizzy(): void {
    this.animate(ActionShadowDog.dizzy)
  }

  public sit(): void {
    this.animate(ActionShadowDog.sit)
  }

  public roll(): void {
    this.animate(ActionShadowDog.roll)
  }

  public bite(): void {
    this.animate(ActionShadowDog.bite)
  }

  public ko(): void {
    this.animate(ActionShadowDog.ko)
  }

  public struck(): void {
    this.animate(ActionShadowDog.struck)
  }
}

export enum ActionShadowDog {
  plain = "plain",
  jump = "jump",
  fall = "fall",
  run = "run",
  dizzy = "dizzy",
  sit = "sit",
  roll = "roll",
  bite = "bite",
  ko = "ko",
  struck = "struck",
}

export default ShadowDog
