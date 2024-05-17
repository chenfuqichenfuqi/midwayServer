import { Repository } from 'typeorm'
import { InjectEntityModel } from '@midwayjs/typeorm'
import { Provide } from '@midwayjs/core'
import { User } from '../entity/User.js'

@Provide()
export class BaseServer {
  @InjectEntityModel(User)
  userModel: Repository<User>
}
