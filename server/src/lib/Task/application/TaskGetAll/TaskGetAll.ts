import { Task } from "../../domine/Task";
import { TaskRepository } from "../../domine/TaskRepository";

export class TaskGetAll {
  constructor(private taskRepository: TaskRepository) {}
  async run(): Promise<Task[]> {
    return await this.taskRepository.getAll();
  }
}
