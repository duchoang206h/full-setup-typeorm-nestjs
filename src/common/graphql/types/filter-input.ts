import { InputType } from '@nestjs/graphql';

@InputType()
export class FilterType {
  [key: string]: any;
}
