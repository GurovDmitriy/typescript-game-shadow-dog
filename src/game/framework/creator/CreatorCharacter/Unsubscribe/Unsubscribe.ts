import { IUnsubscribe, UnsubscribeListType, UnsubscribeType } from "./types"

export class Unsubscribe implements IUnsubscribe {
  private _list: UnsubscribeListType

  constructor() {
    this._list = []
  }

  add(unsubscribe: UnsubscribeType): void {
    this._list.push(unsubscribe)
  }

  destroy(): void {
    this._list.forEach((unsubscribe) => {
      unsubscribe()
    })
  }
}
