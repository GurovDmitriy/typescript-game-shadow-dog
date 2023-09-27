export interface IPhysics {
  subscribe(subscriber: ISubscriber): void
  unsubscribe(index: number): void
  update(): void
}

export interface ISubscriber {
  model: IMover
  cb?: () => void
  cbEnd?: () => void
}

export interface IMover {
  y: number
}
