import { Collision } from "../collision/Collision"

const objAMock = jest.fn()
const objAName = "ObjA"

const objBMock = jest.fn()
const objBName = "ObjB"

const objCMock = jest.fn()
const objCName = "ObjC"

const objDMock = jest.fn()
const objDName = "ObjD"

const objA = {
  model: {
    name: objAName,
    x: 0,
    y: 0,
    width: 10,
    height: 10,
  },

  cb: objAMock,
}

const objB = {
  model: {
    name: objBName,
    x: 5,
    y: 0,
    width: 10,
    height: 10,
  },

  cb: objBMock,
}

const objC = {
  model: {
    name: objCName,
    x: 0,
    y: 0,
    width: 10,
    height: 10,
  },

  cb: objCMock,
}

const objD = {
  model: {
    name: objDName,
    x: 11,
    y: 0,
    width: 10,
    height: 10,
  },

  cb: objDMock,
}

let subscribers = []

jest.mock("../util/ObservableCreator/ObservableCreator", () => {
  return {
    ObservableCreator: jest.fn().mockImplementation(() => {
      return {
        subscribers: subscribers,
      }
    }),
  }
})

describe("Framework: Collision", () => {
  let collision: Collision

  beforeEach(() => {
    collision = new Collision()
  })

  afterEach(() => {
    jest.clearAllMocks()
    subscribers = []
  })

  it("should be define collision and call cb object with one another", () => {
    // Arrange
    const sut = collision
    subscribers.push(objA)
    subscribers.push(objB)

    // Act
    sut.update()

    // Assert
    expect(objAMock).toBeCalledTimes(1)
    expect(objBMock).toBeCalledTimes(1)
    expect(objAMock.mock.calls[0][0].model.name).toBe(objBName)
    expect(objBMock.mock.calls[0][0].model.name).toBe(objAName)
  })

  it("should be not define collision by x and not call to cb", () => {
    // Arrange
    const sut = collision
    subscribers.push(objC)
    subscribers.push(objD)

    // Act
    sut.update()

    // Assert
    expect(objCMock).toBeCalledTimes(0)
    expect(objDMock).toBeCalledTimes(0)
  })
})
