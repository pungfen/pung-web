import Note from '../database/models/note'

export const controller = {
  Note: {
    async getNote(ctx: any) {
      const { pageSize = 20, pageCurrent = 1, uuid } = ctx.request.body
      // const result = await Note.findAndCountAll({
      //   limit: pageSize,
      //   offset: pageSize * (pageCurrent - 1)
      // })
      const res = await Note.getAll()
      const result = {
        rows: [1, 2],
        count: 1
      }
      const { rows, count } = result
      return { data: rows, meta: { count, pageCurrent, pageSize } }
    }
  }
}
