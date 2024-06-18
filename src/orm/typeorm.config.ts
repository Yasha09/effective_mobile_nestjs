import { ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';
import { User } from './entities/User.entity';
import { config } from 'dotenv';

config();

const configService = new ConfigService();

export default new DataSource({
  type: 'postgres',
  host: configService.get('DATABASE_HOST'),
  port: configService.get('DATABASE_PORT'),
  database: configService.get('DATABASE'),
  username: configService.get('DATABASE_USERNAME'),
  password: configService.get('DATABASE_PASSWORD'),
  migrations: ['src/orm/migrations/*.ts'],
  entities: [User],
});
