import { inputShadowDog } from "./input/inputShadowDog"
import { IContextGame } from "../../types"
import { Background } from "../model/Background/Background"
import { ShadowDog } from "../model/ShadowDog/ShadowDog"
import { logicShadowDog } from "./logic/logicShadowDog"
import { logicBackground } from "./logic/logicBackground"
import { AI } from "../ai/AI"
import { logicEnemy } from "./logic/logicEnemy"
import { Enemy1 } from "../model/Enemy1/Enemy1"

export function settings(context: IContextGame): void {
  // ******
  // background
  // ******
  const background = new Background(context)
  logicBackground(context, background)

  // ******
  // shadowDog
  // ******
  const shadowDog = new ShadowDog(context)
  shadowDog.plain()

  logicShadowDog(context, shadowDog)
  inputShadowDog(context, shadowDog)

  // ******
  // enemy
  // ******
  const enemy1 = new Enemy1(context)
  enemy1.plain()
  enemy1.move(800, 100)

  enemy1.subscribe("ai", new AI(enemy1, "random"))

  logicEnemy(context, enemy1)

  // init
  context.initializer.subscribe(background)
  context.initializer.subscribe(shadowDog)
  context.initializer.subscribe(enemy1)
}
