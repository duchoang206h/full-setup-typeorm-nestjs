import { ILike, Repository } from 'typeorm';
import { BaseRepository } from '../common/respository/base.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { CardEntity } from './card.entity';
import { CardSerializer } from './card.serializer';

export class CardRepository extends BaseRepository<CardEntity, CardSerializer> {
  constructor(
    @InjectRepository(CardEntity)
    private cardRepository: Repository<CardEntity>,
  ) {
    super(
      cardRepository.target,
      cardRepository.manager,
      cardRepository.queryRunner,
    );
  }
}
