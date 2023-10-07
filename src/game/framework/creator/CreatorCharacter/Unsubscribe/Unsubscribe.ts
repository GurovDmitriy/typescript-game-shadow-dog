import { IUnsubscribe, UnsubscribeListType, UnsubscribeType } from "./types"

/**
 * Unsubscribe
 * Save the character's unsubscribes for proper destruction.
 */
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
