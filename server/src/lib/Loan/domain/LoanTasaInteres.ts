export class LoanTasaInteres {
  value: number;

  constructor(value: number) {
    this.value = value;
    this.ensureValidate();
  }

  ensureValidate() {
    if (this.value < 0) throw Error("Tasa de interes no debe ser negativo ");
  }
}
