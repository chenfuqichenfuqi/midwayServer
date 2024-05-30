import { Controller, Get } from '@midwayjs/core'
import { HomeOutputDto } from '../dto'
// import { getSchema } from '@midwayjs/validate'
// import { UserDTO } from '../dto/user.js'
@Controller('/')
export class HomeController {
  @Get('/', { description: '首页' })
  async home(): Promise<HomeOutputDto> {
    return { xxx: 'xxx' }
    // return getSchema(UserDTO)
  }
}
