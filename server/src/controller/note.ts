import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../config'

import User, { UserModel } from './user'

interface NoteInstance extends Model {
  id: number
  title: string
  content: string
}

export const NoteModel = sequelize.define<NoteInstance>('Note', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING
  },
  content: {
    type: DataTypes.STRING
  }
})

NoteModel.belongsTo(UserModel, { as: 'user', foreignKey: { allowNull: false } })

// UserModel.sync({ force: true })
// NoteModel.sync({ force: true })

const attributes = ['id', 'title', 'content', 'createdAt', 'updatedAt']
export default class Note {
  async get(ctx: any) {
    const { pageSize = 20, pageCurrent = 1, uuid } = ctx.query

    let result: any = { rows: [], count: 0 }
    const user = await UserModel.findOne({ where: { uuid } })
    if (user) {
      result = await NoteModel.findAndCountAll({
        limit: pageSize,
        offset: pageSize * (pageCurrent - 1),
        where: {
          userId: user.id
        },
        include: {
          model: UserModel,
          as: 'user',
          attributes: ['id', 'name', 'uuid']
        },
        attributes
      })
    }
    const { rows, count } = result
    return { data: rows, meta: { count, pageCurrent, pageSize } }
  }

  async getUuid(ctx: any) {
    const { pageSize = 20, pageCurrent = 1 } = ctx.request.body
    const { uuid } = ctx.request.params
    if (!uuid) return { statusCode: 400, message: '请传入正确的uuid' }
    const [user, created] = await UserModel.findOrCreate({
      where: { uuid },
      defaults: { uuid }
    })
    let result: any = { rows: [], count: 0 }
    if (!created) {
      result = await NoteModel.findAndCountAll({
        limit: pageSize,
        offset: pageSize * (pageCurrent - 1),
        where: {
          userId: user.id
        },
        include: {
          model: UserModel,
          as: 'user',
          attributes: ['id', 'name', 'uuid']
        },
        attributes
      })
    }
    const { rows, count } = result
    return { data: rows, meta: { count, pageCurrent, pageSize } }
  }

  async postUuid(ctx: any) {
    const { data } = ctx.request.body
    const { uuid } = ctx.request.params
    const [user, created] = await UserModel.findOrCreate({
      where: { uuid },
      defaults: { uuid }
    })
    let result: any = []
    let state = data.map((item: any) => {
      item.userId = user.id
      return item
    })
    if (!created) result = await NoteModel.bulkCreate(state)
    return {
      data: result ? result.map((r) => r.id) : []
    }
  }

  async putUuid(ctx: any) {
    const { data } = ctx.request.body
    let state = data.map((item: any) => {
      item.userId = item.user.id
      return item
    })
    let result = await NoteModel.bulkCreate(state, { updateOnDuplicate: ['title', 'content', 'userId'] })
    return {
      data: result ? result.map((r) => r.id) : []
    }
  }
}
