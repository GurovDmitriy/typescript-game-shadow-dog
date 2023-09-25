import { type IContextGame } from "../Game"
import { Background } from "./model/Background/Background"
import { ShadowDog } from "./model/ShadowDog/ShadowDog"
import { BTN, TYPE_ACTION } from "../../engine/Engine"

export function keyboardBinding(
  context: IContextGame,
  background: Background,
  shadowDog: ShadowDog,
) {
  // ******
  // background
  // ******
  context.keyboard.define(
    TYPE_ACTION.keydown,
    BTN.arrowRight,
    () => {
      context.camera.move()
      background.run()
    },
    () => background.plain(),
  )

  context.keyboard.define(
    TYPE_ACTION.keypress,
    BTN.d,
    () => {
      context.camera.move()
      background.run()
    },
    () => background.plain(),
  )

  // ******
  // shadowDog
  // ******
  context.keyboard.define(
    TYPE_ACTION.keydown,
    BTN.arrowRight,
    () => shadowDog.run(),
    () => shadowDog.plain(),
  )

  context.keyboard.define(
    TYPE_ACTION.keydown,
    BTN.d,
    () => shadowDog.run(),
    () => shadowDog.plain(),
  )

  context.keyboard.define(TYPE_ACTION.keydown, BTN.arrowUp, () => {
    shadowDog.subscribeList.jump.make()
    shadowDog.jump()
  })

  context.keyboard.define(
    TYPE_ACTION.keydown,
    BTN.z,
    () => shadowDog.roll(),
    () => shadowDog.plain(),
  )

  context.keyboard.define(
    TYPE_ACTION.keydown,
    BTN.x,
    () => shadowDog.bite(),
    () => shadowDog.plain(),
  )

  context.keyboard.define(
    TYPE_ACTION.keydown,
    BTN.arrowDown,
    () => shadowDog.sit(),
    () => shadowDog.plain(),
  )
}
