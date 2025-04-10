export class PayCodPrestamo {
  value: number;

  constructor(value: number) {
    this.value = value;
    this.ensureValidation();
  }

  private ensureValidation(): void {
    if (this.value < 0) {
      throw new Error("CodPrestamo must be a number.");
    }
  }
}
