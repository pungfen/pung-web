import { Table, Column, Model, PrimaryKey, AutoIncrement, HasOne } from 'sequelize-typescript'

import { Author } from './Author'

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

  @HasOne(() => Author, 'author_id')
  author?: Author
}
