import { Field, InputType } from '@nestjs/graphql';
import { ClassType } from '../interface/class-type';
import { genPropWithSuffix } from '../operator/logic-operator';
function FilterableInputType<TItem extends ClassType>(classRef: TItem): any {
  @InputType({ isAbstract: true })
  class FilterableInput {
    @Field(() => classRef)
    where?: Partial<InstanceType<TItem>>;
  }
  return FilterableInput;
}
export function genFilterInputType(target: any): any {
  @InputType()
  class FilterInput extends FilterableInputType(target) {}
  return FilterInput;
}
