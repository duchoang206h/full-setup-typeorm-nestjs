import { Repository } from 'typeorm';
import { BaseRepository } from '../common/respository/base.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { ListEntity } from './list.entity';
import { ListSerializer } from './list.serializer';

export class ListRepository extends BaseRepository<ListEntity, ListSerializer> {
  constructor(
    @InjectRepository(ListEntity)
    private listRepository: Repository<ListEntity>,
  ) {
    super(
      listRepository.target,
      listRepository.manager,
      listRepository.queryRunner,
    );
  }
}
