import { Task } from "../task/Task";

export type Project = {
  createdAt: Date;
  id: string;
  tasks?: Array<Task>;
  updatedAt: Date;
};
