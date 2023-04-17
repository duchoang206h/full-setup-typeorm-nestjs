import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { UserEntity } from '../../user/user.entity';

export default class CreateUsers implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(UserEntity)
      .values([
        {
          email: 'duchoang206h@gmail.com',
          password:
            '$2a$10$Qw1CNh8US.1h.zkQfyrj1u9PEt59qYTQ67ENQ9xnCM.2zFF7exod6', //123456
        },
      ])
      .execute();
  }
}
