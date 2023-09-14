import { ShadowDog } from "../model/ShadowDog/ShadowDog"
import { BTN, TYPE_ACTION } from "../../engine/types"
import { Background } from "../model/Background/Background"
import { Jump } from "../framework/skill/Jump/Jump"
import { ISettings, ISettingsProvide } from "../framework/controller/types"

export const settings: ISettings[] = [
  {
    name: Background,
    provide: (instance: Background): ISettingsProvide => {
      return {
        prepare() {
          instance.plain()
        },

        defineInput: [
          {
            type: TYPE_ACTION.keydown,
            btn: BTN.arrowRight,
            action: () => instance.run(),
          },

          {
            type: TYPE_ACTION.keypress,
            btn: BTN.d,
            action: () => instance.run(),
            after: () => instance.plain(),
          },
        ],
      }
    },
  },

  {
    name: ShadowDog,
    provide: (instance: ShadowDog): ISettingsProvide => {
      return {
        prepare() {
          instance.plain()
        },

        skills: [Jump],

        subscribe: {
          physics: {
            cb: () => instance.fall(),
            cbEnd: () => instance.plain(),
          },
        },

        defineInput: [
          {
            type: TYPE_ACTION.keydown,
            btn: BTN.arrowRight,
            action: () => instance.run(),
            after: () => instance.plain(),
          },

          {
            type: TYPE_ACTION.keypress,
            btn: BTN.d,
            action: () => instance.run(),
          },

          {
            type: TYPE_ACTION.keydown,
            btn: BTN.arrowUp,
            action: () => {
              instance.jump()
            },
            after: () => {},
          },
        ],
      }
    },
  },
]
