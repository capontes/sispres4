export class TaskCreatedAt {
  value: Date;

  constructor(value: Date) {
    this.value = value;
    this.ensureValidationCreatedAt();
  }

  private ensureValidationCreatedAt(): void {
    if (this.value > new Date()) {
      throw new Error("Creation date cannot be in the future.");
    }
  }
}
