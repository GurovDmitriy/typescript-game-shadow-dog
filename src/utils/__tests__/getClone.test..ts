import { getClone } from "../getClone"

describe("Utils: getClone", () => {
  test("should do returns simple clone object", () => {
    // arrange:
    const sut = getClone
    const expected = { name: "name", id: 123 }

    // act:
    const actual = sut({ name: "name", id: 123 })

    // assert:
    expect(actual).toStrictEqual(expected)
  })

  test("should do returns simple clone array", () => {
    // arrange:
    const sut = getClone
    const expected = [1, 2, 3]

    // act:
    const actual = sut([1, 2, 3])

    // assert:
    expect(actual).toStrictEqual(expected)
  })
})
