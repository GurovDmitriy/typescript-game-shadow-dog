import { Camera } from "../camera/Camera"

jest.mock("../util/ObservableCreator/ObservableCreator", () => {
  return {
    ObservableCreator: jest.fn().mockImplementation(() => {
      return {
        notify() {
          return undefined
        },
      }
    }),
  }
})

describe("Framework: Camera", () => {
  let camera: Camera

  beforeEach(() => {
    camera = new Camera()
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it("should be call init method and set state with property end to false", () => {
    // Arrange
    const sut = camera

    // Act
    sut.init(1000, 0)

    // Assert
    expect(sut.end).toBeFalsy()
  })

  it("should be call init method and set state with property end to true", () => {
    // Arrange
    const sut = camera

    // Act
    sut.init(0, 1)

    // Assert
    expect(sut.end).toBeFalsy()
  })

  it("should be set new position left", () => {
    // Arrange
    const sut = camera
    const distance = 1000
    const speed = 5
    const expected = -5
    sut.init(distance)

    // Act
    sut.moveLeft(speed)

    // Assert
    expect(sut.distance).toBe(distance)
    expect(sut.distanceCurrent).toBe(expected)
  })

  it("should be set new position right", () => {
    // Arrange
    const sut = camera
    const distance = 1000
    const speed = 5
    const expected = 5
    sut.init(distance)

    // Act
    sut.moveRight(speed)

    // Assert
    expect(sut.distance).toBe(distance)
    expect(sut.distanceCurrent).toBe(expected)
  })

  it("should be set right state for stop event", () => {
    // Arrange
    const sut = camera
    const distance = 1000
    const speed = 5
    sut.init(distance)
    sut.moveRight(speed)

    // Act
    sut.stop()

    // Assert
    expect(sut.speed).toBe(0)
  })

  it("should be set right state for end event", () => {
    // Arrange
    const sut = camera
    const distance = 1000
    const speed = 5
    sut.init(distance)
    sut.moveRight(speed)

    // Act
    sut.stop()

    // Assert
    expect(sut.speed).toBe(0)
  })

  it("should be right check end distance", () => {
    // Arrange
    const sut = camera
    const distance = 1000
    const speed = 5
    sut.init(distance)
    sut.moveLeft(speed)

    // Act
    sut.setEnd()

    // Assert
    expect(sut.speed).toBe(0)
    expect(sut.end).toBeTruthy()
  })
})
