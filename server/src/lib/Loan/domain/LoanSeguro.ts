export class LoanSeguro {
  value: number;

  constructor(value: number) {
    this.value = value;
    this.ensureValidate();
  }

  ensureValidate() {
    if (this.value < 0) throw Error("Seguro no debe ser negativo ");
  }
}
