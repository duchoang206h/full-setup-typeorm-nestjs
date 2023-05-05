import {
  Repository,
  FindOptionsWhere,
  FindOptionsSelect,
  EntityManager,
  EntityTarget,
  QueryRunner,
} from 'typeorm';
import { EntitySerializer } from '../serializer/entiry.serializer';
import { QueryService, InjectQueryService } from '@nestjs-query/core';

import {
  MAX_RETURN_RECORD,
  getMaxRecordReturn,
} from '../constants/entity.constant';
import { plainToClass } from 'class-transformer';

type SelectOption<Entity> = {
  [key in keyof Entity]: boolean;
};
type PaginateResult<Serializer> = {
  total: number;
  limit: number;
  skip: number;
  result: Serializer[];
};
type PaginateOption = {
  skip: number;
  limit: number;
};
export class BaseRepository<
  TEntity,
  TSerializer extends EntitySerializer,
> extends Repository<TEntity> {
  constructor(
    entity: EntityTarget<TEntity>,
    manager: EntityManager,
    queryRunner: QueryRunner,
  ) {
    super(entity, manager, queryRunner);
  }
  async paginate(
    filter: FindOptionsWhere<TEntity>,
    select: FindOptionsSelect<TEntity>,
    options: PaginateOption = { skip: 0, limit: MAX_RETURN_RECORD },
    relations: string[] = [],
    transformOptions = {},
  ): Promise<PaginateResult<TSerializer>> {
    const { skip, limit } = options;
    const [result, total] = await this.findAndCount({
      where: filter,
      select,
      relations,
      skip: skip,
      take: getMaxRecordReturn(limit),
    });
    return {
      total,
      result: this.transformMany(result, transformOptions),
      skip,
      limit: getMaxRecordReturn(limit),
    };
  }
  transform(entity: TEntity, transformOptions = {}): TSerializer {
    return plainToClass(
      EntitySerializer,
      entity,
      transformOptions,
    ) as TSerializer;
  }
  transformMany(entities: TEntity[], transformOptions = {}): TSerializer[] {
    return entities.map((e) => this.transform(e, transformOptions));
  }
}
