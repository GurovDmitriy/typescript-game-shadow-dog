import { IInvoker } from "./Invoker/types"

export enum COMMAND_GAME {
  start = "start",
  stop = "stop",
}

export interface ICommand {
  execute(): void
}

export interface ISwitcher extends IInvoker {
  status: string
}
