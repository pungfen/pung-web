import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../config'

interface UserInstance extends Model {
  id: number
  name: string
  uuid: string
  password: string
}

export const UserModel = sequelize.define<UserInstance>('User', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING
  },
  uuid: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  }
})

const attributes = ['id', 'name', 'uuid', 'createdAt', 'updatedAt']

export default class User {
  async get(ctx: any) {
    const { pageSize = 20, pageCurrent = 1 } = ctx.request.body
    const result = await UserModel.findAndCountAll({
      attributes,
      limit: pageSize,
      offset: pageSize * (pageCurrent - 1)
    })
    const { rows, count } = result
    return { data: rows, meta: { count, pageCurrent, pageSize } }
  }

  async post(ctx: any) {
    let user = await UserModel.create(ctx.request.body)
    return {
      data: user
    }
  }

  async delete(ctx: any) {
    const { id } = ctx.params
    if (!id) return { code: 400 }
    let user = await UserModel.update(
      { isdeleted: 1 },
      {
        where: {
          id
        }
      }
    )
    if (!user[0]) return { code: 400, message: '删除失败' }
    else return { message: '删除成功' }
  }
}
