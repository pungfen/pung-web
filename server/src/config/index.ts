export const config =
  process.env.NODE_ENV === 'production'
    ? {
        port: 3000,
        db: {
          root: 'pung',
          password: 'pung$081214',
          host: 'pung-rds.mysql.rds.aliyuncs.com',
          scheme: 'pung_web'
        }
      }
    : {
        port: 3000,
        db: {
          root: 'pung',
          password: 'pung$081214',
          host: 'rm-bp14i1nrqrt558j68mo.mysql.rds.aliyuncs.com',
          scheme: 'pung_web_test'
        }
      }

export * from './sequelize'
