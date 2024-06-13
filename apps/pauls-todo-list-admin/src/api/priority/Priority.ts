import { Task } from "../task/Task";

export type Priority = {
  createdAt: Date;
  id: string;
  tasks?: Array<Task>;
  updatedAt: Date;
};
