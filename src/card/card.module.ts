import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardEntity } from './card.entity';
import { CardRepository } from './card.repository';

@Module({
  imports: [TypeOrmModule.forFeature([CardEntity])],
  providers: [CardRepository],
  exports: [CardRepository],
})
export class CardModule {}
