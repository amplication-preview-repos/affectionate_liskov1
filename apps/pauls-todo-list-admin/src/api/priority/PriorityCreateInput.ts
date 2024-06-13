import { TaskCreateNestedManyWithoutPrioritiesInput } from "./TaskCreateNestedManyWithoutPrioritiesInput";

export type PriorityCreateInput = {
  tasks?: TaskCreateNestedManyWithoutPrioritiesInput;
};
