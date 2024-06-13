import { TaskCreateNestedManyWithoutProjectsInput } from "./TaskCreateNestedManyWithoutProjectsInput";

export type ProjectCreateInput = {
  tasks?: TaskCreateNestedManyWithoutProjectsInput;
};
