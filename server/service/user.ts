import { openDatabase } from '../lib/nedb'

export interface User {
  _id: string
  uuid: string
}

export const createUserService = () => {
  const db = openDatabase<User>('user')
}

export type UserService = ReturnType<typeof createUserService>
