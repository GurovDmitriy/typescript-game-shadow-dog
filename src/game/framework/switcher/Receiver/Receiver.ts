import { IReceiver } from "./types"

export class Receiver implements IReceiver {
  start() {
    console.log("call to start")
  }

  stop() {
    console.log("call to end")
  }
}
