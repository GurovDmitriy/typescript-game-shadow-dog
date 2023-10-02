export enum COMMAND_GAME {
  start = "start",
  stop = "stop",
}

export interface ICommand {
  execute(): void
}

export interface ISwitcher {
  start(cb?: () => void): void
  stop(cb?: () => void): void
}
