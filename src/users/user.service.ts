import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUser } from './dto/create-user.dto';
import { User } from './models/user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }

  findOne(id: string): Promise<User> {
    return this.userModel.findOne({
      where: {
        id,
      },
    });
  }

  create(createUser: CreateUser): Promise<User> {
    const user = new User();

    user.firstname = createUser.firstname;
    user.patronymic = createUser.patronymic;
    user.lastname = createUser.lastname;
    user.phone = createUser.phone;
    user.email = createUser.email;
    user.gender = createUser.gender;

    return user.save();
  }

  async remove(id: string): Promise<void> {
    const user = await this.findOne(id);
    await user.destroy();
  }
}
