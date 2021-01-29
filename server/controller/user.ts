import { prefix, get } from '../lib/reflect'

import data from '../src/mock/user'

@prefix('/user')
export default class User {
  @get('/')
  get() {
    return {
      code: 200,
      data
    }
  }
}
