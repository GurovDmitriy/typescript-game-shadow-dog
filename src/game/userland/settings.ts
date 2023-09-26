import { Background } from "./model/Background/Background"
import { type IContextGame } from "../Game"
import { type ICreatorCharacter } from "../framework/creator/CreatorCharacter/CreatorCharacter"
import { ICreatorBackground } from "../framework/creator/CreatorBackground/CreatorBackground"
import { AdapterCameraBackground } from "./model/Background/AdapterCameraBackground"
import { ShadowDog } from "./model/ShadowDog/ShadowDog"
import { Run } from "./skill/Run/Run"
import { Jump } from "./skill/Jump/Jump"
import { Health } from "./skill/Health/Health"

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
          context.camera.moveRight(6)
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
      "d",
      () => {
        const run = shadowDog.subscribeList.run as Run
        run.make()
      },
      () => {
        const run = shadowDog.subscribeList.run as Run
        run.destroy()
      },
    )

    context.keyboard.define(
      "d",
      () => {
        const run = shadowDog.subscribeList.run as Run
        run.make()
      },
      null,
      true,
    )

    context.keyboard.define(
      "w",
      () => {
        const jump = shadowDog.subscribeList.jump as Jump
        jump.make()
      },
      () => {
        const jump = shadowDog.subscribeList.jump as Jump
        jump.destroy()
      },
    )

    // context.keyboard.define(
    //   "q",
    //   () => {
    //     const jump = shadowDog.subscribeList.jump as Jump
    //     jump.make(400)
    //   },
    //   () => {},
    // )

    // ******
    // enemy
    // ******
    // const enemy1 = new Enemy1(context)
    // enemy1.plain()
    // enemy1.move(500, 100)

    // add AI control
    // enemy1.subscribe("ai", new AI(enemy1, "random"))

    // collision bind
    // context.collision.subscribe({
    //   model: enemy1,
    //   cb: () => enemy1.plain(),
    // })

    // movement bind
    // context.movement.subscribe({
    //   model: enemy1,
    //   cb: () => {},
    // })

    // keyboardBinding(context, background, shadowDog)

    // return [background, shadowDog, enemy1]
    return [background, shadowDog]
  },
}
