import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { join } from 'path';

import { ConfigsModule } from '../common/config/config.module';
import { CONFIGS } from '../common/config/common/types';

@Module({
  imports: [
    ConfigsModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigsModule],
      useFactory: (configService: ConfigService) => {
        console.log(__dirname + '/../**/*.entity{.ts,.js}');
        return {
          type: 'postgres',
          host: configService.get(CONFIGS.databaseHost),
          port: configService.get(CONFIGS.databasePort),
          username: configService.get(CONFIGS.databaseUsername),
          password: configService.get(CONFIGS.databasePassword),
          database: configService.get(CONFIGS.databaseDatabase),
          entities: [__dirname + '/../**/*.entity{.ts,.js}'],
          migrations: [join(__dirname, '../../migrations/*.ts')],
          synchronize: false,
        };
      },
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
