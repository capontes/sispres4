export class TaskId {
  value: string;

  constructor(value: string) {
    this.value = value;
    this.ensureValidationId();
  }

  private ensureValidationId(): void {
    if (this.value.length < 3) {
      throw new Error("ID must be at least 3 characters long.");
    }
  }
}
