import { Provide } from '@midwayjs/core';
import { IUserOptions } from '../interface.js';
import { User } from '../entity/User.js';
import { Repository } from 'typeorm';
import { InjectEntityModel } from '@midwayjs/typeorm';

@Provide()
export class UserService {
  @InjectEntityModel(User)
  userModel: Repository<User>;

  async create(user: User): Promise<User> {
    this.userModel.findOne({ where: { id: 1 } });
    return this.userModel.save(user);
  }

  async getUser(options: IUserOptions) {
    return {
      uid: options.uid,
      username: 'mockedName',
      phone: '12345678901',
      email: 'xxx.xxx@xxx.com',
    };
  }
}
