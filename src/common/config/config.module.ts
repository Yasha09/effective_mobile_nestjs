import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { configurations } from './common/validation/config';
import { validateConfig } from './common/validation/config-validation';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: configurations,
      isGlobal: true,
      validate: validateConfig,
    }),
  ],
})
export class ConfigsModule {}
