import { PriorityWhereUniqueInput } from "../priority/PriorityWhereUniqueInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type TaskCreateInput = {
  assignedUser?: string | null;
  description?: string | null;
  dueDate?: Date | null;
  isCompleted?: boolean | null;
  name?: string | null;
  priority?: PriorityWhereUniqueInput | null;
  project?: ProjectWhereUniqueInput | null;
};
