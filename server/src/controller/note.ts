import { Model, DataTypes } from 'sequelize'

import sequelize from '../database'

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

NoteModel.sync()

NoteModel.addScope('unDeleted', {
  where: {
    isdeleted: 0
  }
})

@Controller('/note')
export default class Note {
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
