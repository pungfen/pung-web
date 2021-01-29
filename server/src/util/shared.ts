const _toString = Object.prototype.toString

export const isPlainObject = (obj) => {
  return _toString.call(obj) === '[object Object]'
}
