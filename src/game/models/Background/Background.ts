import { getImage } from "../../../../helpers/utils/getImage"
import image1Url from "./images/layer-1.png"
import image2Url from "./images/layer-2.png"
import image3Url from "./images/layer-3.png"
import image4Url from "./images/layer-4.png"
import image5Url from "./images/layer-5.png"

const image1 = getImage(image1Url)
const image2 = getImage(image2Url)
const image3 = getImage(image3Url)
const image4 = getImage(image4Url)
const image5 = getImage(image5Url)

const config = {
  canvas: {
    width: 800,
    height: 700,
  },

  speedGame: 1,
}

const configBackgrounds = [
  {
    image: image1,
    speedGame: config.speedGame,
    speedModifier: 0,
  },

  {
    image: image3,
    speedGame: config.speedGame,
    speedModifier: 0.1,
  },

  {
    image: image2,
    speedGame: config.speedGame,
    speedModifier: 0.2,
  },

  {
    image: image4,
    speedGame: config.speedGame,
    speedModifier: 0.4,
  },

  {
    image: image5,
    speedGame: config.speedGame,
    speedModifier: 0.6,
  },
]

const canvas = document.getElementById("canvas") as HTMLCanvasElement
const ctx = canvas.getContext("2d")

canvas.width = config.canvas.width
canvas.height = config.canvas.height

const x = 0
const x2 = 2400

class Background {
  private _x: number
  private _y: number
  private _width: number
  private _height: number
  private _x2: number
  private _speed: number
  private _speedGame: number
  private _speedModifier: number
  private _image: HTMLImageElement

  constructor(image, speedGame, speedModifier) {
    this._x = 0
    this._y = 0
    this._width = 2400
    this._height = 700
    this._x2 = this._width
    this._image = image
    this._speed = speedGame
    this._speedGame = speedGame
    this._speedModifier = speedModifier
  }

  public update() {
    this._speed = this._speedGame * this._speedModifier

    if (this._x <= -this._width) {
      this._x = this._width + this._x2 - this._speed
    }

    if (this._x2 <= -this._width) {
      this._x2 = this._width + this._x - this._speed
    }

    this._x = this._x - this._speed
    this._x2 = this._x2 - this._speed
  }

  public draw(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(this._image, this._x, this._y, this._width, this._height)
    ctx.drawImage(this._image, this._x2, this._y, this._width, this._height)
  }

  static getBackgrounds(
    config: {
      image: HTMLImageElement
      speedGame: number
      speedModifier: number
    }[]
  ) {
    const backgrounds = config.map(
      (item) => new Background(item.image, item.speedGame, item.speedModifier)
    )

    return backgrounds
  }
}

const backgrounds = Background.getBackgrounds(configBackgrounds)

function animate() {
  if (!ctx) throw Error("Error getting context canvas")

  ctx.clearRect(0, 0, config.canvas.width, config.canvas.height)

  backgrounds.forEach((bg) => {
    bg.update()
    bg.draw(ctx)
  })

  requestAnimationFrame(animate)
}

animate()

export {}
