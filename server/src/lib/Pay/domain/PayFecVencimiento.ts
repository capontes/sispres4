export class PayFecVencimiento {
  value: Date;

  constructor(value: Date) {
    this.value = value;
    this.ensureValidation();
  }

  private ensureValidation(): void {
    if (!(this.value instanceof Date)) {
      throw new Error("FecVencimiento must be a Date object.");
    }
  }
}
