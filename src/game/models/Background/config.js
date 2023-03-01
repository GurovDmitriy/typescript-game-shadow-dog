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

const sizeBg = {
  width: 2400,
  height: 700,
}

export const config = [
  {
    image: image1,
    speedGame: config.speedGame,
    speedModifier: 0,
    config: sizeBg,
  },

  {
    image: image3,
    speedGame: config.speedGame,
    speedModifier: 0.1,
    config: sizeBg,
  },

  {
    image: image2,
    speedGame: config.speedGame,
    speedModifier: 0.2,
    config: sizeBg,
  },

  {
    image: image4,
    speedGame: config.speedGame,
    speedModifier: 0.4,
    config: sizeBg,
  },

  {
    image: image5,
    speedGame: config.speedGame,
    speedModifier: 0.6,
    config: sizeBg,
  },
]
