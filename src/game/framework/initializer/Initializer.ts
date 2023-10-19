import { IInitializer, ISubscriber } from "./types"
import { ObservableCreator } from "../util/ObservableCreator/ObservableCreator"

/**
 * Initializer
 * Add or remove render game object.
 */
export class Initializer implements IInitializer {
  private _observable: ObservableCreator<ISubscriber, undefined>

  constructor() {
    this._observable = new ObservableCreator<ISubscriber, undefined>()
  }

  public update(): void {
    this._observable.notify(undefined)
  }

  public subscribe(subscriber: ISubscriber): () => void {
    return this._observable.subscribe(subscriber)
  }

  public unsubscribe(value: ISubscriber) {
    return this.unsubscribe(value)
  }
}
