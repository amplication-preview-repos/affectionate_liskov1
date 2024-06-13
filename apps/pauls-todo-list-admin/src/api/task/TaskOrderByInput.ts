import { SortOrder } from "../../util/SortOrder";

export type TaskOrderByInput = {
  assignedUser?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  dueDate?: SortOrder;
  id?: SortOrder;
  isCompleted?: SortOrder;
  name?: SortOrder;
  priorityId?: SortOrder;
  projectId?: SortOrder;
  updatedAt?: SortOrder;
};
