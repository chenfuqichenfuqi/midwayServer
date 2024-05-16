import { MidwayConfig } from '@midwayjs/core'

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1715681574040_2674',
  koa: {
    port: 7001,
  },
  typeorm: {
    dataSource: {
      default: {
        /**
         * 单数据库实例
         */
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '123456',
        database: 'midway',
        synchronize: true, // 如果第一次使用，不存在表，有同步的需求可以写 true，注意会丢数据
        logging: false,

        entities: ['entity'], // 特定目录
      },
    },
  },
} as MidwayConfig
