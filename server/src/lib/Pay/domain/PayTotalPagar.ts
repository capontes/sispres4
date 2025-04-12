export class PayTotalPagar {
  value: number;

  constructor(value: number) {
    this.value = value;
    this.ensureValidationTotalPagar();
  }

  private ensureValidationTotalPagar(): void {
    if (this.value < 0) {
      throw new Error("Total to pay cannot be negative.");
    }
  }
}
