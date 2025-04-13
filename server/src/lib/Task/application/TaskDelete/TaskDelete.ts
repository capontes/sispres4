import { TaskId } from "../../domine/TaskId";
import { TaskRepository } from "../../domine/TaskRepository";

export class TaskDelete {
  constructor(private taskRepository: TaskRepository) {}
  async run(id: string): Promise<void> {
    const taskId = new TaskId(id);
    const taskExist = await this.taskRepository.getById(taskId);
    if (!taskExist) throw new Error("Task not found");
    return await this.taskRepository.delete(taskId);
  }
}
