const { Sequelize, DataTypes, Model, Deferrable } = require('sequelize')

const sequelize = new Sequelize('mysql://pung:pung$081214@47.114.7.50:3306/pung_web')

sequelize
  .authenticate()
  .then(() => {
    console.log('数据库连接成功')
  })
  .catch((err) => {
    console.error('数据库连接失败', err)
  })

class DemoA extends Model {}
DemoA.init(
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize
  }
)

class DemoB extends Model {}
DemoB.init(
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING
    }
    // demo_a_id: {
    //   type: DataTypes.INTEGER.UNSIGNED,
    //   references: {
    //     model: DemoA,
    //     key: 'id',
    //     deferrable: Deferrable.INITIALLY_IMMEDIATE
    //   }
    // }
  },
  {
    sequelize
  }
)

DemoB.hasOne(DemoA, { foreignKey: 'demo_a_id' })

DemoB.findAll({ include: DemoA }).then((res) => console.log(JSON.stringify(res)))
