import { Controller, Get } from '@midwayjs/core';
import { getSchema } from '@midwayjs/validate';
import { UserDTO } from '../dto/user.js';
@Controller('/')
export class HomeController {
  @Get('/')
  async home(): Promise<any> {
    return getSchema(UserDTO);
  }
}
