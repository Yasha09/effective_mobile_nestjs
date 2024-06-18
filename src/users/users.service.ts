import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from '../orm/entities/User.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async update(userId: string): Promise<number> {
    await this.userRepository.update(userId, {
      problems: false,
    });

    const problemsCount = await this.userRepository.count({
      where: { problems: true },
    });

    return problemsCount;
  }
}
