import { Background } from "../../model/Background/Background"
import { IContextGame } from "../../../types"
import { AdapterCameraBackground } from "../../adapters/camera/AdapterCameraBackground"

export function logicBackground(context: IContextGame, background: Background) {
  context.camera.init(20000)

  const adapterCameraBackground = new AdapterCameraBackground(
    background,
    context,
  )

  context.camera.subscribe(adapterCameraBackground)
}
