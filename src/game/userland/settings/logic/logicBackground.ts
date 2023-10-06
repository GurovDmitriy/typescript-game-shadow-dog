import { Background } from "../../model/Background/Background"
import { IContextGame } from "../../../types"
import { AdapterCameraBackground } from "../../model/Background/AdapterCameraBackground"

export function logicBackground(context: IContextGame, background: Background) {
  context.camera.init(10000)

  const adapterCameraBackground = new AdapterCameraBackground(background)

  context.camera.subscribe({
    model: adapterCameraBackground,
  })
}
