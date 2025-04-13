import { Task } from "../../domine/Task";
import { TaskCreatedAt } from "../../domine/TaskCreatedAt";
import { TaskDescription } from "../../domine/TaskDescription";
import { TaskId } from "../../domine/TaskId";
import { TaskIsDone } from "../../domine/TaskIsDone";
import { TaskRepository } from "../../domine/TaskRepository";
import { TaskUpdatedAt } from "../../domine/TaskUpdatedAt";

export class TaskUpdate {
  constructor(private taskRepository: TaskRepository) {}
  async run(
    id: string,
    description: string,
    isDone: boolean,
    createdAt: Date,
    updatedAt: Date
  ): Promise<void> {
    const task = new Task(
      new TaskId(id),
      new TaskDescription(description),
      new TaskIsDone(isDone),
      new TaskCreatedAt(createdAt),
      new TaskUpdatedAt(updatedAt)
    );
    const taskExist = await this.taskRepository.getById(task.id);
    if (!taskExist) throw new Error("Task not found");

    return await this.taskRepository.update(task);
  }
}
