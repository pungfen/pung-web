import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../config'

import { UserModel } from './user'

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

NoteModel.belongsTo(UserModel, { foreignKey: { allowNull: false } })

// NoteModel.sync({ force: true })

const attributes = ['id', 'title', 'content']
export default class Note {
  async get(ctx: any) {
    const { pageSize = 20, pageCurrent = 1, uuid } = ctx.request.body
    const result = await NoteModel.findAndCountAll({
      attributes,
      limit: pageSize,
      offset: pageSize * (pageCurrent - 1)
    })
    const { rows, count } = result
    return { data: rows, meta: { count, pageCurrent, pageSize } }
  }

  async post(ctx: any) {
    let data = await NoteModel.create(ctx.request.body)
    return {
      data
    }
  }

  async put(ctx: any) {
    let data = await NoteModel.update(ctx.request.body, {
      where: {
        lastName: null
      }
    })
    return {
      data
    }
  }
}
