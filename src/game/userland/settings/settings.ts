import { inputShadowDog } from "./input/inputShadowDog"
import { IContextGame } from "../../types"
import { Background } from "../model/Background/Background"
import { ShadowDog } from "../model/ShadowDog/ShadowDog"
import { logicShadowDog } from "./logic/logicShadowDog"
import { logicBackground } from "./logic/logicBackground"
import { DisplayHealth } from "../display/DisplayHealth/DisplayHealth"
import { DisplayDistance } from "../display/DisplayDistance/DisplayDistance"
import { AdapterDisplayDistance } from "../adapters/display/AdapterDisplayDistance"
import { AdapterDisplayShadowDogHealth } from "../adapters/display/AdapterDisplayShadowDogHealth"
import { Restart } from "../commands/Restart/Restart"
import { generateEnemy } from "./generate/generateEnemy"

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
  generateEnemy(context)

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
    {
      x: 20,
      y: 100,
    },
  )

  // init
  context.initializer.subscribe(background)
  context.initializer.subscribe(shadowDog)
  context.initializer.subscribe(displayHealth)
  context.initializer.subscribe(displayDistance)
}
