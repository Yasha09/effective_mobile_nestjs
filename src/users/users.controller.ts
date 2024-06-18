import { Controller, Get, Param, Patch } from '@nestjs/common';

import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Patch(':userId')
  async update(@Param('userId') userId: string): Promise<number> {
    return this.userService.update(userId);
  }

  @Get('/')
  async get(userId: string) {
    console.log('userId', userId);
  }
}
