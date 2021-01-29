import nedb from '../database/nedb'

const lookupDB = nedb({
  filename: 'data/user.db',
  autoload: true,
  timestampData: true
})

export default async (lookupType: string) => {
  return await lookupDB['find']({ type: lookupType })
}
