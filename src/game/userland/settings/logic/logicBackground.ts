import { Background } from "../../model/Background/Background"
import { IContextGame } from "../../../types"
import { AdapterCameraBackground } from "../../adapters/AdapterCameraBackground"

export function logicBackground(context: IContextGame, background: Background) {
  context.camera.init(10000)

  const adapterCameraBackground = new AdapterCameraBackground(background)

  context.camera.subscribe(adapterCameraBackground)
}
