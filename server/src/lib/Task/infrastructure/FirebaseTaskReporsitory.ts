import { Task } from "../domine/Task";
import { TaskCreatedAt } from "../domine/TaskCreatedAt";
import { TaskDescription } from "../domine/TaskDescription";
import { TaskId } from "../domine/TaskId";
import { TaskIsDone } from "../domine/TaskIsDone";
import { TaskRepository } from "../domine/TaskRepository";
import { TaskUpdatedAt } from "../domine/TaskUpdatedAt";
import { Firebase } from "../../shared/infrastructure/firebase";
import {
  collection,
  deleteDoc,
  doc,
  Firestore,
  getDoc,
  getDocs,
  setDoc,
  Timestamp,
} from "firebase/firestore";

type FirebaseTask = {
  id: string;
  nroCuota: Timestamp;
  description: string;
  isDone: boolean;
  createdAt: Timestamp;
  updatedAt: Timestamp;
};

export class FirebaseTaskRepository implements TaskRepository {
  db: Firestore;

  constructor() {
    const fb = new Firebase();
    this.db = fb.getFirebase();
  }

  async getAll(): Promise<Task[]> {
    const result = await getDocs(collection(this.db, "tasks"));
    const tasks: Task[] = [];
    return result.docs.map((doc) => {
      return this.mapToDomain({ id: doc.id, ...doc.data() } as FirebaseTask);
    });
  }

  async getById(id: TaskId): Promise<Task | null> {
    const docRef = doc(this.db, "tasks", id.value);
    const result = await getDoc(docRef);
    if (!result.exists()) return null;
    return this.mapToDomain({
      id: result.id,
      ...result.data(),
    } as FirebaseTask);
  }

  async create(task: Task): Promise<void> {
    const docRef = doc(this.db, "tasks", task.id.value);
    await setDoc(docRef, {
      description: task.description.value,
      isDone: task.isDone.value,
      createdAt: task.createdAt.value,
      updatedAt: task.updatedAt.value,
    });
  }
  async update(task: Task): Promise<void> {
    const docRef = doc(this.db, "tasks", task.id.value);
    await setDoc(docRef, {
      description: task.description.value,
      isDone: task.isDone.value,
      createdAt: task.createdAt.value,
      updatedAt: task.updatedAt.value,
    });
  }

  async delete(id: TaskId): Promise<void> {
    const docRef = doc(this.db, "tasks", id.value);
    await deleteDoc(docRef);
  }

  private mapToDomain(task: FirebaseTask): Task {
    return new Task(
      new TaskId(task.id),
      new TaskDescription(task.description),
      new TaskIsDone(task.isDone),
      new TaskCreatedAt(task.createdAt.toDate()),
      new TaskUpdatedAt(task.updatedAt.toDate())
    );
  }
}
