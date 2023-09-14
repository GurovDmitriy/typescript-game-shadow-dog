import { ActionEnemy4 } from "./types"
import { ConfigType } from "../../framework/creator/CreatorCharacter/Maper/types"

const config: ConfigType = {
  image: {
    width: 1917,
    height: 212,
    frameWidth: 213,
    frameHeight: 212,
    columns: 6,
    rows: 1,
  },

  animation: [
    {
      name: ActionEnemy4.plain,
      frames: 6,
    },
  ],
}

export default config
