import { Body, Controller, Post } from '@midwayjs/core'
import { HomeOutputDto } from '../dto/homeTest.js'
// import { getSchema } from '@midwayjs/validate'
// import { UserDTO } from '../dto/user.js'
@Controller('/')
export class HomeController {
  @Post('/', { description: '首页' })
  async home(@Body('id') id: string): Promise<HomeOutputDto> {
    return { xxx: 'xxx' + id }
    // return getSchema(UserDTO)
  }
}
