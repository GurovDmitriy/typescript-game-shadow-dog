import { Background } from "../../model/Background/Background"
import { IContextGame } from "../../../types"
import { AdapterCameraBackground } from "../../model/Background/AdapterCameraBackground"

export function logicBackground(context: IContextGame, background: Background) {
  const adapterCameraBackground = new AdapterCameraBackground(background)

  context.camera.subscribe({
    model: adapterCameraBackground,
  })
}
