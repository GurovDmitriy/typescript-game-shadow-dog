import { ActionEnemy1 } from "./types"
import { ConfigType } from "../../../framework/creator/CreatorCharacter/Maper/types"

const config: ConfigType = {
  image: {
    width: 1768,
    height: 155,
    frameWidth: 293,
    frameHeight: 155,
    columns: 6,
    rows: 1,
  },

  animation: [
    {
      name: ActionEnemy1.plain,
      frames: 6,
    },
  ],
}

export default config
