const _toString = Object.prototype.toString

export const isPlainObject = obj => {
  return _toString.call(obj) === '[object Object]'
}

const cached = fn => {
  const cache = Object.create(null)
  return str => cache[str] || (cache[str] = fn(str))
}
const path2PascalCase = path =>
  path
    .substring(1)
    .split('/')
    .map(
      item =>
        item
          .replace(/[^a-zA-z]/g, '')
          .substring(0, 1)
          .toUpperCase() + item.replace(/[^a-zA-z]/g, '').substring(1)
    )
    .join('')

export const path2PascalCaseCached = cached(path2PascalCase)
