import { Priority } from "../priority/Priority";
import { Project } from "../project/Project";

export type Task = {
  assignedUser: string | null;
  createdAt: Date;
  description: string | null;
  dueDate: Date | null;
  id: string;
  isCompleted: boolean | null;
  name: string | null;
  priority?: Priority | null;
  project?: Project | null;
  updatedAt: Date;
};
