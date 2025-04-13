export class TaskDescription {
  value: string;

  constructor(value: string) {
    this.value = value;
    this.ensureValidationDescription();
  }

  private ensureValidationDescription(): void {
    if (this.value.length < 3) {
      throw new Error("Description must be at least 3 characters long.");
    }
  }
}
