import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class User extends Model {
  @Column
  firstname: string;

  @Column
  patronymic: string;

  @Column
  lastname: string;

  @Column
  phone: string;

  @Column
  email: string;

  @Column
  gender: string;
}
