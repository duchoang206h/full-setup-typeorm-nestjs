import { Expose, Type } from 'class-transformer';
import { EntitySerializer } from '../common/serializer/entiry.serializer';

export class ListSerializer extends EntitySerializer {
  @Expose()
  listId: number;
  @Expose()
  name: string;
  @Expose()
  order: number;
  @Expose()
  @Type(() => CardSerializer)
  cards: CardSerializer[];
}
