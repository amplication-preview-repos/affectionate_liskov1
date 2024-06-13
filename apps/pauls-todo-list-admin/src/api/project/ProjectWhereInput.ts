import { StringFilter } from "../../util/StringFilter";
import { TaskListRelationFilter } from "../task/TaskListRelationFilter";

export type ProjectWhereInput = {
  id?: StringFilter;
  tasks?: TaskListRelationFilter;
};
