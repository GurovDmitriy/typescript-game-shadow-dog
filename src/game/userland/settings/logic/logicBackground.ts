import { Background } from "../../model/Background/Background"
import { IContextGame } from "../../../types"
import { AdapterCameraBackground } from "../../model/Background/AdapterCameraBackground"
import { DisplayDistance } from "../../display/DisplayDistance/DisplayDistance"
import { AdapterCameraDisplayDistance } from "../../display/DisplayDistance/AdapterCameraDisplayDistance"

export function logicBackground(
  context: IContextGame,
  background: Background,
  displayDistance: DisplayDistance,
) {
  context.camera.init(10000)

  const adapterCameraDisplayDistance = new AdapterCameraDisplayDistance(
    displayDistance,
  )
  const adapterCameraBackground = new AdapterCameraBackground(background)

  context.camera.subscribe({
    model: adapterCameraBackground,
  })
  context.camera.subscribe({
    model: adapterCameraDisplayDistance,
  })
}
