import { ActionEnemy2 } from "./types"
import { ConfigType } from "../../../framework/creator/CreatorCharacter/Maper/types"

const config: ConfigType = {
  image: {
    width: 1596,
    height: 188,
    frameWidth: 266,
    frameHeight: 188,
    columns: 6,
    rows: 1,
  },

  animation: [
    {
      name: ActionEnemy2.plain,
      frames: 6,
    },
  ],
}

export default config
