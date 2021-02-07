import { Sequelize } from 'sequelize'
import { config } from './index'

const { root, password, host, scheme } = config.db

const define = {
  timeestamps: true,
  paranoid: true,
  underscored: false,
  charset: 'utf8',
  freezeTableName: true
}

const pool = {
  max: 10,
  min: 0,
  acquire: 30000,
  idle: 10000
}

export const sequelize = new Sequelize(scheme, root, password, { host, dialect: 'mysql', define, pool, timezone: '+08:00' })

sequelize
  .authenticate()
  .then(() => {
    console.log('数据库连接成功')
  })
  .catch((err) => {
    console.error('数据库连接失败')
  })

// export default new Sequelize('mysql://pung:pung$081214@47.114.7.50:3306/pung_web')
