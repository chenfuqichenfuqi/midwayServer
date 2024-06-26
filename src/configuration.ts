import { Configuration, App } from '@midwayjs/core'
import * as koa from '@midwayjs/koa'
import * as validate from '@midwayjs/validate'
import * as info from '@midwayjs/info'
// import { DefaultErrorFilter } from './filter/default.filter.js';
// import { NotFoundFilter } from './filter/notfound.filter.js';
import { ReportMiddleware } from './middleware/report.middleware.js'
import DefaultConfig from './config/config.default.js'
import UnittestConfig from './config/config.unittest.js'
import * as typeorm from '@midwayjs/typeorm'

import { InjectDataSource } from '@midwayjs/typeorm'
import { DataSource } from 'typeorm'

@Configuration({
  imports: [
    koa,
    validate,
    typeorm,
    {
      component: info,
      enabledEnvironment: ['local'],
    },
  ],
  importConfigs: [
    {
      default: DefaultConfig,
      unittest: UnittestConfig,
    },
  ],
})
export class MainConfiguration {
  @App('koa')
  app: koa.Application
  @InjectDataSource()
  defaultDataSource: DataSource

  async onReady() {
    // add middleware
    this.app.useMiddleware([ReportMiddleware])

    // add filter
    // this.app.useFilter([NotFoundFilter, DefaultErrorFilter]);
  }
}
