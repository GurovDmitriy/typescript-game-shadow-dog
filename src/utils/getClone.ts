function getClone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj)) as T
}

export { getClone }
