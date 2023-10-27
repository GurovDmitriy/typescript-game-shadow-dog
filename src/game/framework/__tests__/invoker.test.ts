import { Invoker } from "../switcher/Invoker/Invoker"
import { ICommand } from "../switcher/types"

describe("Framework: Switcher: Invoker", () => {
  let invoker: Invoker

  beforeEach(() => {
    invoker = new Invoker()
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  test("install command", () => {
    {
      // Arrange
      const sut = invoker
      const methodInstall = jest.spyOn(sut, "install")
      const stubCommand: ICommand = {
        execute() {},
      }

      // Act
      sut.install("start", stubCommand)

      // Assert
      expect(methodInstall).toHaveBeenCalled()
      expect(methodInstall.mock.calls[0][0]).toBe("start")
      expect(methodInstall.mock.calls[0][1]).toBe(stubCommand)
    }
  })

  test("execute command", () => {
    // Arrange
    const sut = invoker
    const mockFnExecute = jest.fn()
    const mockCommand: ICommand = {
      execute: mockFnExecute,
    }
    const name = "start"
    sut.install(name, mockCommand)

    // Act
    sut.execute(name)

    // Assert
    expect(mockFnExecute).toHaveBeenCalled()
  })

  test("logging error with not found command", () => {
    // Arrange
    const sut = invoker
    const spyConsole = jest.spyOn(console, "error")
    spyConsole.mockReturnValueOnce(undefined)

    // Act
    sut.execute("start")

    // Assert
    expect(spyConsole.mock.calls[0][0]).toMatch(/Not found command: start/)
  })
})
