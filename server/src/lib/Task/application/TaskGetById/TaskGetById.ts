import { Task } from "../../domine/Task";
import { TaskId } from "../../domine/TaskId";
import { TaskRepository } from "../../domine/TaskRepository";

export class TaskGetById {
  constructor(private taskRepository: TaskRepository) {}
  async run(id: string): Promise<Task | null> {
    const task = await this.taskRepository.getById(new TaskId(id));
    if (!task) throw new Error("Task not found");
    return task;
  }
}
