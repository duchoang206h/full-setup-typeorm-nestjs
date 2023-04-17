import { Expose, Type } from 'class-transformer';
import { EntitySerializer } from '../common/serializer/entiry.serializer';

export class UserSerializer extends EntitySerializer {
  @Expose()
  userId: number;
  @Expose()
  email: string;
  @Expose()
  @Type(() => BoardSerializer)
  boards: BoardSerializer[];
}
