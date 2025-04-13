import { Task } from "../domine/Task";
import { TaskId } from "../domine/TaskId";
import { TaskRepository } from "../domine/TaskRepository";

export class InMemoryTaskRepository implements TaskRepository {
  private tasts: Task[] = [];

  async create(task: Task): Promise<void> {
    this.tasts.push(task);
  }

  async getAll(): Promise<Task[]> {
    return this.tasts;
  }

  async getById(id: TaskId): Promise<Task | null> {
    const task = this.tasts.find((task) => task.id.value === id.value);
    return task || null;
  }
  async update(task: Task): Promise<void> {
    const index = this.tasts.findIndex((u) => u.id.value === task.id.value);
    if (index !== -1) {
      this.tasts[index] = task;
    } else {
      throw new Error(`Task with id ${task.id} not found`);
    }
  }

  async delete(id: TaskId): Promise<void> {
    this.tasts = this.tasts.filter((task) => task.id.value !== id.value);
  }
}
