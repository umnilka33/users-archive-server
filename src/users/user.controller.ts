import { encode } from '@msgpack/msgpack';
import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { CreateUser } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  @Header('Content-Type', 'application/x-msgpack')
  async getAllUsers() {
    const allUsers = await this.userService.findAll();
    let allUsersInfo = [];
    allUsers.forEach((element) => {
      allUsersInfo.push(element['dataValues']);
    });
    const enc = encode(allUsersInfo);
    return enc;
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Content-Type', 'application/x-msgpack')
  async createUser(@Body() createUser: CreateUser) {
    const newUser = await this.userService.create(createUser);
    const enc = encode(newUser['dataValues']);
    return enc;
  }

  @Delete(':id')
  deleteUserById(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
