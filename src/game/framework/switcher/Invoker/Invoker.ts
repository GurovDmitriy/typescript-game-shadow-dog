import { IInvoker } from "./types"
import { ICommand } from "../types"

export class Invoker implements IInvoker {
  private readonly _commands: ICommand[]

  constructor() {
    this._commands = []
  }

  install(name: string, command: ICommand) {
    this._commands[name] = command
  }

  execute(name: string) {
    if (this._commands[name]) {
      this._commands[name].execute()
    } else {
      console.error(`Not found command: ${name}`)
    }
  }
}
