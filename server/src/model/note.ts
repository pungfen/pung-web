import { Table, Column, Model, PrimaryKey, AutoIncrement, HasOne } from 'sequelize-typescript'

@Table
export default class Note extends Model<Note> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number

  @Column
  title?: string

  @Column
  content?: string

  @Column
  category?: string

  @Column
  isdeleted?: boolean

  static async getAll<T extends Note>() {
    const result = await this.findAll({
      raw: true
    })
    return result as T[]
  }
}
