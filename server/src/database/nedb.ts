import * as Nedb from 'nedb'

import * as thenify from 'thenify'

function dbInstance(newNedb) {
  const instance = { newNedb }

  const methods = ['loadDatabase', 'insert', 'find', 'findOne', 'count', 'update', 'remove', 'ensureIndex', 'removeIndex']
  for (let i = 0; i < methods.length; ++i) {
    let m = methods[i]
    instance[m] = thenify(newNedb[m].bind(newNedb))
  }

  return instance
}

// function nedb(options: Object) {
//   const newNedb = new Nedb(options)
//   return dbInstance(newNedb)
// }

export default (options) => {
  const newNedb = new Nedb(options)
  return dbInstance(newNedb)
}
