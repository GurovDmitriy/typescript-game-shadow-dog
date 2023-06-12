import { getImage } from "../../../helpers/utils/getImage"
import LayerPack from "../../creator/LayerPack/LayerPack"
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

const width = 2400
const height = 700

export const config = [
  {
    image: image1,
    speedModifier: 0,
    width,
    height,
  },

  {
    image: image3,
    speedModifier: 0.1,
    width,
    height,
  },

  {
    image: image2,
    speedModifier: 0.2,
    width,
    height,
  },

  {
    image: image4,
    speedModifier: 0.4,
    width,
    height,
  },

  {
    image: image5,
    speedModifier: 0.6,
    width,
    height,
  },
]

class Background extends LayerPack {
  constructor(ctx: CanvasRenderingContext2D) {
    super(config, ctx)
  }
}

export default Background
