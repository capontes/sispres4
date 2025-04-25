export class MovementImporte {
  value: number;

  constructor(value: number) {
    this.value = value;
    this.ensureValidationImporte();
  }

  private ensureValidationImporte(): void {
    if (this.value < 0) {
      throw new Error("Importe cannot be negative.");
    }
  }
}
