import { getClone } from "../getClone"
import { getRandomInteger } from "../getRandomInteger"

describe("Utils", () => {
  test("get simple clone object", () => {
    expect(getClone({ name: "name", id: 123 })).toStrictEqual({
      name: "name",
      id: 123,
    })
  })

  test("get random integer", () => {
    const result = getRandomInteger(1, 5)
    expect(result).toBeGreaterThanOrEqual(1)
    expect(result).toBeLessThanOrEqual(5)
  })
})
