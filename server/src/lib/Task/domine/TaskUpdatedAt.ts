export class TaskUpdatedAt {
  value: Date;

  constructor(value: Date) {
    this.value = value;
    this.ensureValidationUpdatedAt();
  }

  private ensureValidationUpdatedAt(): void {
    if (this.value > new Date()) {
      throw new Error("Updated date cannot be in the future.");
    }
  }
}
