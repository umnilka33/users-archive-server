import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  SequelizeModuleOptions,
  SequelizeOptionsFactory,
} from '@nestjs/sequelize';
import { User } from '../users/models/user.model';
import { EnumConfig } from './enumConfig/enumConfig';

@Injectable()
export class SequelizeConfigService implements SequelizeOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createSequelizeOptions(): SequelizeModuleOptions {
    const {
      pg: { dialect, logging, host, port, username, password, database },
    } = this.configService.get(EnumConfig.DATABASE);
    return {
      dialect,
      logging,
      host,
      port,
      username,
      password,
      database,
      models: [User],
      autoLoadModels: true,
      synchronize: true,
    };
  }
}
