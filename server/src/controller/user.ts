import { prefix, get, post } from '../util/reflect'

@prefix('/user')
export default class User {
  @get('/')
  async get(ctx) {
    // const {} =
    console.log(ctx)
    ctx.body = 'Hello! Pung'
  }
}
