import config from "./config"
// const downloadUrl = new URL('download.zip', import.meta.url);
//
// document.body.innerHTML = `<a href="${downloadUrl}">Download</a>`;

import { getClone } from "../../../../helpers/utils/getClone"
import {
  ActionShadowDog,
  Animation,
  Config,
  Frames,
  MapAnimation,
} from "./types"

const imageUrl = new URL(
  "./shadow_dog.png",
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  import.meta.url
) as unknown as string

class ShadowDog {
  private _image: HTMLImageElement = new Image()
  private _mapAnimation: MapAnimation
  private _ctx: CanvasRenderingContext2D
  private _config: Config

  constructor(ctx: CanvasRenderingContext2D) {
    this._image.src = imageUrl
    this._config = config
    this._mapAnimation = this._getMapAnimation(config.animation)
    this._ctx = ctx
  }

  public plain(speed: number): void {
    this._animate(ActionShadowDog.plain, speed)
  }

  public jump(speed: number): void {
    this._animate(ActionShadowDog.jump, speed)
  }

  public fall(speed: number): void {
    this._animate(ActionShadowDog.fall, speed)
  }

  public run(speed: number): void {
    this._animate(ActionShadowDog.run, speed)
  }

  public dizzy(speed: number): void {
    this._animate(ActionShadowDog.dizzy, speed)
  }

  public sit(speed: number): void {
    this._animate(ActionShadowDog.sit, speed)
  }

  public roll(speed: number): void {
    this._animate(ActionShadowDog.roll, speed)
  }

  public bite(speed: number): void {
    this._animate(ActionShadowDog.bite, speed)
  }

  public ko(speed: number): void {
    this._animate(ActionShadowDog.ko, speed)
  }

  public struck(speed: number): void {
    this._animate(ActionShadowDog.struck, speed)
  }

  private _animate(name: string, speed: number): void {
    const image = this._image
    const frameWidth = this._config.image.frameWidth
    const frameHeight = this._config.image.frameHeight

    const position =
      Math.floor(speed) % this._mapAnimation[name].location.length
    const frameX = this._config.image.frameWidth * position
    const frameY = this._mapAnimation[name].location[position].y

    this._ctx.drawImage(
      image,
      frameX,
      frameY,
      frameWidth,
      frameHeight,
      0,
      0,
      frameWidth,
      frameHeight
    )
  }

  private _getMapAnimation(animation: Animation[]): MapAnimation {
    const map: MapAnimation = {}
    const animationClone = getClone<Animation[]>(animation)

    animationClone.forEach((state, index) => {
      const frames: Frames = {
        location: [],
      }

      for (let i = 0; i < state.frames; i++) {
        const x = i * this._config.image.frameWidth
        const y = index * this._config.image.frameHeight

        frames.location.push({ x, y })
      }

      map[state.name] = frames
    })

    return map
  }
}

export default ShadowDog
