import { IsNotEmpty } from '@nestjs/class-validator';

export class CreateUser {
  @IsNotEmpty()
  readonly firstname: string;
  @IsNotEmpty()
  readonly patronymic: string;
  @IsNotEmpty()
  readonly lastname: string;
  @IsNotEmpty()
  readonly phone: string;
  @IsNotEmpty()
  readonly email: string;
  @IsNotEmpty()
  readonly gender: string;
}
