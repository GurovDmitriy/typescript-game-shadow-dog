export interface IPhysics {
  subscribe(subscriber: ISubscriber): void
  unsubscribe(index: number): void
  update(): void
}

export interface ISubscriber {
  model: IModel
  cb?: () => void
  cbEnd?: () => void
}

export interface IModel {
  y: number
  addUnsubscribe(unsubscribe: () => void): void
}
