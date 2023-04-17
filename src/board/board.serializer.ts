import { Expose, Type } from 'class-transformer';
import { EntitySerializer } from '../common/serializer/entiry.serializer';
import { ListSerializer } from '../list/list.serializer';

export class BoardSerializer extends EntitySerializer {
  @Expose()
  boardId: number;
  @Expose()
  name: string;
  @Expose()
  @Type(() => ListSerializer)
  lists: ListSerializer[];
}
