import { Provide } from '@midwayjs/core'
import { IUserOptions } from '../interface'
import { User } from '../entity'
import { BaseServer } from './'

@Provide()
export class UserService extends BaseServer {
  async create(user: User): Promise<User> {
    return this.userModel.save(user)
  }

  async getUser(options: IUserOptions) {
    return {
      uid: options.uid,
      username: 'mockedName',
      phone: '12345678901',
      email: 'xxx.xxx@xxx.com',
    }
  }
}
