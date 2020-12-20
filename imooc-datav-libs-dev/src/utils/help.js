export function debounce (delay, callback) {
  let task
  return function () {
    clearTimeout(task)
    task = setTimeout(() => {
      callback.apply(this,arguments)
    }, delay)
  }
}
