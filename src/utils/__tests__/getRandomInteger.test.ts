import { getRandomInteger } from "../getRandomInteger"

describe("Utils: getRandomInteger", () => {
  test.each([
    { input: [1, 2], expected: [1, 2] },
    { input: [1, 5], expected: [1, 5] },
    { input: [1, 1], expected: [1, 1] },
  ])(
    "$input should be return number between $expected",
    ({ input, expected }) => {
      // Arrange
      const sut = getRandomInteger

      // Act
      const actual = sut(input[0], input[1])

      // Assert
      expect(actual).toBeGreaterThanOrEqual(expected[0])
      expect(actual).toBeLessThanOrEqual(expected[1])
    },
  )
})
