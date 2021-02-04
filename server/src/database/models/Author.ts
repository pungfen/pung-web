import { Table, Column, Model, PrimaryKey, AutoIncrement } from 'sequelize-typescript'

@Table
export class Author extends Model<Author> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number

  @Column
  uuid?: string

  static async get<T extends Author>() {
    const result = await this.findAll({
      raw: true
    })
    return result as T[]
  }
}
