import { Sequelize, DataTypes, Utils, DataTypeAbstract } from 'sequelize'

import { config } from '../config'

const { root, password, host, scheme } = config.db

const sequelize = new Sequelize(scheme, root, password, { host, dialect: 'mysql' })

sequelize
  .authenticate()
  .then(() => {
    console.log('数据库连接成功')
  })
  .catch((err) => {
    console.error('数据库连接失败')
  })

export default new Sequelize('mysql://pung:pung$081214@47.114.7.50:3306/pung_web')
