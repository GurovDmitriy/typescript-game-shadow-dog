import { getClone } from "../getClone"

describe("Utils: getClone", () => {
  test("should do returns simple clone object", () => {
    // Arrange
    const sut = getClone
    const expected = { name: "name", id: 123 }

    // Act
    const actual = sut({ name: "name", id: 123 })

    // Assert
    expect(actual).toStrictEqual(expected)
  })

  test("should do returns simple clone array", () => {
    // Arrange
    const sut = getClone
    const expected = [1, 2, 3]

    // Act
    const actual = sut([1, 2, 3])

    // Assert
    expect(actual).toStrictEqual(expected)
  })
})
