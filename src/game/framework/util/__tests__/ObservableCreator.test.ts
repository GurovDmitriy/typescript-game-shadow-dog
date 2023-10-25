import { ObservableCreator } from "../ObservableCreator/ObservableCreator"
import { IObservableCreator } from "../ObservableCreator/types"

describe("Utils Framework: ObservableCreator", () => {
  type TSubscriber = { name: string; update?: () => void }
  let subscriber: TSubscriber
  let observableCreator: IObservableCreator<TSubscriber, undefined>

  beforeEach(() => {
    subscriber = { name: "John" }
    observableCreator = new ObservableCreator<TSubscriber, undefined>()
  })

  test("should be add subscribe in list", () => {
    // Arrange
    const sut = observableCreator
    const subscribers = sut.subscribers

    // Act
    sut.subscribe(subscriber)

    // Assert
    expect(subscribers).toContain(subscriber)
    expect(subscribers.size).toBe(1)
  })

  test("should be available unsubscribe with value", () => {
    // Arrange
    const sut = observableCreator
    const subscribers = sut.subscribers
    sut.subscribe(subscriber)

    // Act
    sut.unsubscribe(subscriber)

    // Assert
    expect(subscribers.size).toBe(0)
  })

  test("should be available unsubscribe with returns function", () => {
    // Arrange
    const sut = observableCreator
    const subscribers = sut.subscribers
    const unsubscribe: () => void = sut.subscribe(subscriber)

    // Act
    unsubscribe()

    // Assert
    expect(subscribers.size).toBe(0)
  })

  test("should be call subscriber with data", () => {
    // Arrange
    const update = jest.fn()
    const data = { data: "data" }
    const subscriber = { name: "John", update: update }
    const sut = new ObservableCreator<typeof subscriber, typeof data>()
    sut.subscribe(subscriber)

    // Act
    sut.notify(data)

    // Assert
    expect(update).toBeCalledWith(data)
    expect(update).toBeCalledTimes(1)
  })
})
