import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../common/respository/base.repository';
import { UserEntity } from './user.entity';
import { UserSerializer } from './user.serializer';
import { DataSource, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class UserRepository extends BaseRepository<UserEntity, UserSerializer> {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {
    super(
      userRepository.target,
      userRepository.manager,
      userRepository.queryRunner,
    );
  }
}
