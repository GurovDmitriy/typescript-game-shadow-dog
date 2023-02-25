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

  gameSpeed: 5,
}

const canvas = document.getElementById("canvas") as HTMLCanvasElement
const ctx = canvas.getContext("2d")

canvas.width = config.canvas.width
canvas.height = config.canvas.height

function animate() {
  if (!ctx) throw Error("Error getting context canvas")

  ctx.drawImage(image5, 0, 0)

  requestAnimationFrame(animate)
}

animate()

export {}
