import * as Nedb from 'nedb'

var thenify = require('thenify')

function dbInstance(newNedb) {
  const newDB = { newNedb }

  const methods = [
    'loadDatabase',
    'insert',
    'find',
    'findOne',
    'count',
    'update',
    'remove',
    'ensureIndex',
    'removeIndex',
  ]
  for (let i = 0; i < methods.length; ++i) {
    let m = methods[i]
    newDB[m] = thenify(newNedb[m].bind(newNedb))
  }

  return newDB
}

function nedb(options: Object) {
  const newNedb = new Nedb(options)
  return dbInstance(newNedb)
}

module.exports = nedb
