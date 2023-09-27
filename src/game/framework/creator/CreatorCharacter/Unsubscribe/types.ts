export interface IUnsubscribe {
  add(unsubscribe: UnsubscribeType): void
  destroy(): void
}

export type UnsubscribeListType = Array<() => void>

export type UnsubscribeType = () => void
