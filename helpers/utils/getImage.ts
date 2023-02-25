function getImage(url: string): HTMLImageElement {
  const image = new Image()
  image.src = url

  return image
}

export { getImage }
