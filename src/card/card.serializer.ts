import { Expose } from 'class-transformer';
import { EntitySerializer } from '../common/serializer/entiry.serializer';

export class CardSerializer extends EntitySerializer {
  @Expose()
  cardId: number;
  @Expose()
  order: number;
  @Expose()
  content: string;
}
