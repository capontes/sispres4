import { Task } from "./Task";
import { TaskId } from "./TaskId";

export interface TaskRepository {
  getAll(): Promise<Task[]>;
  getById(id: TaskId): Promise<Task | null>;
  create(task: Task): Promise<void>;
  update(task: Task): Promise<void>;
  delete(id: TaskId): Promise<void>;
}
