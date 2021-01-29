import { Model, Optional, DataTypes } from 'sequelize'

import sequelize from '../database'

import { Controller, get, post } from '../util/reflect'

interface UserAttributes {
  id: number
  name: string
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}
interface UserInstance extends Model<UserAttributes, UserCreationAttributes>, UserAttributes {}

const UserModel = sequelize.define<UserInstance>('User', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER.UNSIGNED
  },
  name: {
    type: DataTypes.STRING
  }
})

UserModel.sync()

@Controller('/user')
export default class User {
  @get('/')
  async get(ctx) {
    // const {} =
    ctx.body = await UserModel.findAll()
  }

  @post('/')
  async post(ctx) {}
}
