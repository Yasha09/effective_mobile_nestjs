import { MigrationInterface, QueryRunner } from 'typeorm';
import * as _ from 'lodash';
import { User } from '../entities/User.entity';

export class InsertUsers1718628187358 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const { manager } = queryRunner;

    const userRepository = manager.getRepository(User);

    const generateUsers = (count: number) => {
      return _.times(count, () => ({
        name: 'John',
        surname: 'Doe',
        age: _.random(18, 80),
        gender: _.sample(['male', 'female']),
        problems: _.sample([true, false]),
      }));
    };

    const BATCH_SIZE = 1000;
    const TOTAL_USERS = 1000000;

    async function insertUsersInBatches() {
      for (let i = 0; i < TOTAL_USERS; i += BATCH_SIZE) {
        const userBatch = generateUsers(BATCH_SIZE);
        await userRepository.save(userBatch);
      }
    }

    await insertUsersInBatches();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
