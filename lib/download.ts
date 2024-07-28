export function download(fileName: string, data: string) {
  const content = `data:text/plain;charset=utf-8,${encodeURIComponent(data)}`

  const element = document.createElement("a")
  element.setAttribute("href", content)
  element.setAttribute("download", fileName)

  element.style.display = "none"
  document.body.appendChild(element)

  element.click()

  document.body.removeChild(element)
}
