export class PaySaldoCapital {
  value: number;

  constructor(value: number) {
    this.value = value;
    this.ensureValidationPaySaldoCapital();
  }

  private ensureValidationPaySaldoCapital(): void {
    if (this.value < 0) {
      throw new Error("Pay saldo capital cannot be negative.");
    }
  }
}
