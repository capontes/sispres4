import { TaskCreatedAt } from "./TaskCreatedAt";
import { TaskDescription } from "./TaskDescription";
import { TaskId } from "./TaskId";
import { TaskUpdatedAt } from "./TaskUpdatedAt";
import { TaskIsDone } from "./TaskIsDone";

export class Task {
  id: TaskId;
  description: TaskDescription;
  isDone: TaskIsDone;
  createdAt: TaskCreatedAt;
  updatedAt: TaskUpdatedAt;

  constructor(
    id: TaskId,
    description: TaskDescription,
    isDone: TaskIsDone,
    createdAt: TaskCreatedAt,
    updatedAt: TaskUpdatedAt
  ) {
    this.id = id;
    this.description = description;
    this.isDone = isDone;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  public mapToPrimitives() {
    return {
      id: this.id.value,
      description: this.description.value,
      isDone: this.isDone.value,
      createdAt: this.createdAt.value,
      updatedAt: this.updatedAt.value,
    };
  }
}
