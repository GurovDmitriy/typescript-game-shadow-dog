import { ICommand } from "../types"

export interface IInvoker {
  install(name: string, command: ICommand): void
  execute(name: string): void
}
