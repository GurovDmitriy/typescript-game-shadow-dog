import { ActionEnemy3 } from "./types"
import { ConfigType } from "../../framework/creator/CreatorCharacter/Maper/types"

const config: ConfigType = {
  image: {
    width: 1308,
    height: 177,
    frameWidth: 218,
    frameHeight: 177,
    columns: 6,
    rows: 1,
  },

  animation: [
    {
      name: ActionEnemy3.plain,
      frames: 6,
    },
  ],
}

export default config
