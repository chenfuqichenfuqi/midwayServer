import { Inject, Controller, Get, Query, Post, Body } from '@midwayjs/core'
import { Context } from '@midwayjs/koa'
import { UserService } from '../service/user.service.js'
import { User } from '../entity/User.js'
@Controller('/api/user')
export class UserController {
  @Inject()
  ctx: Context

  @Inject()
  userService: UserService

  @Post('/create')
  async create(@Body() user: User): Promise<User> {
    Object.assign(user, {
      regtime: new Date(),
    })
    return this.userService.create(user)
  }

  @Get('/get_user')
  async getUser(@Query('uid') uid) {
    return 'user1'
    // const user = await this.userService.getUser({ uid });
    // return { success: true, message: 'OK', data: user };
  }
}
