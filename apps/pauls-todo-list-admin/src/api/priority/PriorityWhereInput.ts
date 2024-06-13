import { StringFilter } from "../../util/StringFilter";
import { TaskListRelationFilter } from "../task/TaskListRelationFilter";

export type PriorityWhereInput = {
  id?: StringFilter;
  tasks?: TaskListRelationFilter;
};
