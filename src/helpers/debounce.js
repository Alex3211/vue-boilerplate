export default function debounce (_, func, wait) {
  let timer
  let diff

  return function (...arg) {
    if (timer === undefined) {
      func(...arg)
      timer = Date.now()
    } else {
      diff = Date.now() - timer
      if (diff > wait) {
        func(...arg)
        timer = Date.now()
      }
    }
  }
}

export { debounce }
