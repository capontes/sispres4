export class LoanCodPrestamo {
  value: number;

  constructor(value: number) {
    this.value = value;
    this.ensureValidate();
  }

  ensureValidate() {
    if (this.value <= 0) throw Error("Codido de Préstamo debe ser mayor a 0");
  }
}
