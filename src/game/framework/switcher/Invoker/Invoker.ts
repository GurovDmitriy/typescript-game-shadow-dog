import { IInvoker } from "./types"
import { ICommand } from "../types"

/**
 * Invoker
 * Register game commands.
 */
export class Invoker implements IInvoker {
  private readonly _commands: ICommand[]

  public constructor() {
    this._commands = []
  }

  public install(name: string, command: ICommand): void {
    this._commands[name] = command
  }

  public execute(name: string): void {
    if (this._commands[name]) {
      this._commands[name].execute()
    } else {
      console.error(`Not found command: ${name}`)
    }
  }
}
