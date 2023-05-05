import { CRUDResolver } from '@nestjs-query/query-graphql';
import { QueryService } from '@nestjs-query/core';
import { ClassType } from '../../interface/class-type';
import { BaseEntity } from 'typeorm';
import { EntitySerializer } from '../../serializer/entiry.serializer';
export function BaseResolver<T extends BaseEntity>(TSerializer: ClassType) {
  return class extends CRUDResolver(TSerializer) {
    constructor(public readonly queryService: QueryService<T>) {
      super(queryService);
    }
  };
}
