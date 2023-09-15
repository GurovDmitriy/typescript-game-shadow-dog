import { IContextGame } from "../types"
import { BTN, TYPE_ACTION } from "../../engine/types"
import { ShadowDog } from "./model/ShadowDog/ShadowDog"
import { Jump } from "./skill/Jump/Jump"

export const settings = [
  {
    provide: (context: IContextGame): ShadowDog => {
      // create and set init animation
      const shadowDog = new ShadowDog(context)
      shadowDog.plain()

      // create and bind jump skill
      const jump = new Jump(shadowDog)
      shadowDog.subscribe(jump)

      // physics bind
      context.physics.subscribe({
        model: shadowDog,
        cb: () => shadowDog.fall(),
        cbEnd: () => shadowDog.plain(),
      })

      // define user input
      context.keyboard.define(
        TYPE_ACTION.keydown,
        BTN.arrowRight,
        () => shadowDog.run(),
        () => shadowDog.plain(),
      )

      context.keyboard.define(TYPE_ACTION.keypress, BTN.d, () =>
        shadowDog.run(),
      )

      context.keyboard.define(TYPE_ACTION.keydown, BTN.arrowUp, () => {
        jump.make()
        shadowDog.jump()
      })

      return shadowDog
    },
  },
]
