import { ActionShadowDog } from "./types"

const config = {
  image: {
    width: 6876,
    height: 5230,
    frameWidth: 575,
    frameHeight: 523,
    columns: 12,
    rows: 10,
  },

  animation: [
    {
      name: ActionShadowDog.plain,
      frames: 7,
    },

    {
      name: ActionShadowDog.jump,
      frames: 7,
    },

    {
      name: ActionShadowDog.fall,
      frames: 7,
    },

    {
      name: ActionShadowDog.run,
      frames: 9,
    },

    {
      name: ActionShadowDog.dizzy,
      frames: 11,
    },

    {
      name: ActionShadowDog.sit,
      frames: 5,
    },

    {
      name: ActionShadowDog.roll,
      frames: 7,
    },

    {
      name: ActionShadowDog.bite,
      frames: 7,
    },

    {
      name: ActionShadowDog.ko,
      frames: 12,
    },

    {
      name: ActionShadowDog.struck,
      frames: 4,
    },
  ],
}

export default config
