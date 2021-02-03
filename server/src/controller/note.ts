import { Model, DataTypes } from 'sequelize'

import sequelize from '../database'

import User, { UserModel } from './user'

import { Controller, GET, POST, PUT, DELETE } from '../util/reflect'

interface NoteInstance extends Model {
  id: number
  title: string
  content: string
  category: string
  isdeleted: string
}

const NoteModel = sequelize.define<NoteInstance>('Note', {
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
  },
  category: {
    type: DataTypes.STRING
  },
  isdeleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
})

NoteModel.belongsTo(UserModel, { foreignKey: 'userId' })

NoteModel.sync()

NoteModel.addScope('unDeleted', {
  where: {
    isdeleted: 0
  }
})

const attributes = ['id', 'title', 'content', 'category']

@Controller('/note')
export default class Note {
  @GET('/')
  async get(ctx: any) {
    const { pageSize = 20, pageCurrent = 1, uuid } = ctx.request.body
    const result = await NoteModel.scope('unDeleted').findAndCountAll({
      attributes,
      limit: pageSize,
      offset: pageSize * (pageCurrent - 1),
      include: {
        model: UserModel,
        as: 'user'
      }
    })
    const { rows, count } = result
    return { data: rows, meta: { count, pageCurrent, pageSize } }
  }

  @POST('/')
  async post(ctx: any) {
    let data = await NoteModel.create(ctx.request.body)
    return {
      data
    }
  }

  @PUT('/')
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
