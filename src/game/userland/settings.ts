import { Background } from "./model/Background/Background"
import { AdapterCameraBackground } from "./model/Background/AdapterCameraBackground"
import { ShadowDog } from "./model/ShadowDog/ShadowDog"
import { Run } from "./skill/Run/Run"
import { Jump } from "./skill/Jump/Jump"
import { Health } from "./skill/Health/Health"
import { IContextGame } from "../types"
import { ICreatorCharacter } from "../framework/creator/CreatorCharacter/types"
import { ICreatorBackground } from "../framework/creator/CreatorBackground/types"
import { BTN } from "../../engine/types"
import { Enemy1 } from "./model/Enemy1/Enemy1"
import { AI } from "./ai/AI"
import { AdapterCameraEnemy1 } from "./model/Enemy1/AdapterCameraEnemy1"

export const settings = {
  provide: (
    context: IContextGame,
  ): Array<ICreatorCharacter | ICreatorBackground> => {
    // ******
    // background
    // ******
    const background = new Background(context)
    const adapterCameraBackground = new AdapterCameraBackground(background)

    context.camera.subscribe({
      model: adapterCameraBackground,
    })

    // ******
    // shadowDog
    // ******
    const shadowDog = new ShadowDog(context)
    shadowDog.plain()

    shadowDog.subscribe(
      "run",
      new Run(
        shadowDog,
        () => {
          context.camera.moveRight(10)
          shadowDog.run()
        },
        () => {
          context.camera.stop()
          shadowDog.plain()
        },
      ),
    )

    shadowDog.subscribe(
      "jump",
      new Jump(
        shadowDog,
        () => shadowDog.jump(),
        () => shadowDog.plain(),
      ),
    )
    shadowDog.subscribe(
      "health",
      new Health(
        shadowDog,
        () => {},
        () => {},
      ),
    )

    context.physics.subscribe({
      model: shadowDog,
      cb: () => shadowDog.fall(),
      cbEnd: () => shadowDog.plain(),
    })

    context.collision.subscribe({
      model: shadowDog,
      cb: () => {},
    })

    context.keyboard.define(
      BTN.d,
      () => {
        const run = shadowDog.subscribeList.run as Run
        run.make()
      },
      () => {
        const run = shadowDog.subscribeList.run as Run
        run.destroy()
      },
      true,
    )

    context.keyboard.define(
      BTN.w,
      () => {
        const jump = shadowDog.subscribeList.jump as Jump
        jump.make(200)
      },
      () => {
        const jump = shadowDog.subscribeList.jump as Jump
        jump.destroy()
      },
    )

    context.keyboard.define(
      BTN.q,
      () => {
        const jump = shadowDog.subscribeList.jump as Jump
        jump.make(400)
      },
      () => {
        const jump = shadowDog.subscribeList.jump as Jump
        jump.destroy()
      },
    )

    // ******
    // enemy
    // ******
    const enemy1 = new Enemy1(context)
    const adapterCameraEnemy1 = new AdapterCameraEnemy1(enemy1)

    enemy1.plain()
    enemy1.move(800, 100)

    enemy1.subscribe("ai", new AI(enemy1, "random"))

    context.destroyer.subscribe(enemy1)

    context.collision.subscribe({
      model: enemy1,
      cb: () => enemy1.plain(),
    })

    context.camera.subscribe({
      model: adapterCameraEnemy1,
      cb: () => {},
    })

    return [background, shadowDog, enemy1]
  },
}
