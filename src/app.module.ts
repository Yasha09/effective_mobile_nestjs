import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './orm/database.module';
import { ConfigsModule } from './common/config/config.module';

@Module({
  imports: [UsersModule, DatabaseModule, ConfigsModule],
})
export class AppModule {}
