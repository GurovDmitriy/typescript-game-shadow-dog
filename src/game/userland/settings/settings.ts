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
import { ICamera } from "../../framework/camera/types"
import { Enemy2 } from "../model/Enemy2/Enemy2"
import { Enemy3 } from "../model/Enemy3/Enemy3"
import { Enemy4 } from "../model/Enemy4/Enemy4"
import { getRandomInteger } from "../../../utils/getRandomInteger"

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
  const enemyType = [Enemy1, Enemy2, Enemy3, Enemy4]
  const enemyFrequency = (distance: number, distanceCurrent: number): boolean =>
    (distance - distanceCurrent) % 400 === 0
  const getRandomEnemy = () =>
    new enemyType[getRandomInteger(0, enemyType.length - 1)](context)
  const getRandomPositionEnemy = (): [x: number, y: number] => [
    getRandomInteger(context.canvas.width - 50, context.canvas.width - 100),
    getRandomInteger(-150, 200),
  ]

  context.camera.subscribe({
    update(data: ICamera) {
      if (enemyFrequency(data.distance, data.distanceCurrent)) {
        const enemy = getRandomEnemy()
        enemy.plain()
        enemy.move(...getRandomPositionEnemy())

        enemy.subscribe("ai", new AI(enemy, "random"))

        logicEnemy(context, enemy)

        context.initializer.subscribe(enemy)
      }
    },
  })

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
  context.initializer.subscribe(displayHealth)
  context.initializer.subscribe(displayDistance)
}
