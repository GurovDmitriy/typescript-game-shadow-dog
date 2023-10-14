import { inputShadowDog } from "./input/inputShadowDog"
import { IContextGame } from "../../types"
import { Background } from "../model/Background/Background"
import { ShadowDog } from "../model/ShadowDog/ShadowDog"
import { logicShadowDog } from "./logic/logicShadowDog"
import { logicBackground } from "./logic/logicBackground"
import { AI } from "../ai/AI"
import { logicEnemy } from "./logic/logicEnemy"
import { Enemy1 } from "../model/Enemy1/Enemy1"
import { DisplayHealth } from "../display/DisplayHealth/DisplayHealth"
import { DisplayDistance } from "../display/DisplayDistance/DisplayDistance"
import { AdapterDisplayDistance } from "../adapters/AdapterDisplayDistance"
import { AdapterDisplayShadowDogHealth } from "../adapters/AdapterDisplayShadowDogHealth"
import { Restart } from "../commands/Restart/Restart"

export function settings(context: IContextGame): void {
  // ******
  // command
  // ******
  context.switcher.install("restart", new Restart(context.switcher))

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

  // ******
  // display
  // ******
  const displayHealth = new DisplayHealth(
    new AdapterDisplayShadowDogHealth(shadowDog),
    context.ctx,
    { x: 20, y: 20 },
  )
  const displayDistance = new DisplayDistance(
    new AdapterDisplayDistance(context.camera),
    context.ctx,
    { x: 20, y: 100 },
  )

  // init
  context.initializer.subscribe(background)
  context.initializer.subscribe(shadowDog)
  context.initializer.subscribe(enemy1)
  context.initializer.subscribe(displayHealth)
  context.initializer.subscribe(displayDistance)
}
