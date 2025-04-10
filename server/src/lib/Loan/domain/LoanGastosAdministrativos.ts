export class LoanGastosAdministrativos {
  value: number;

  constructor(value: number) {
    this.value = value;
    this.ensureValidate();
  }

  ensureValidate() {
    if (this.value < 0)
      throw Error("Gastos Administrativos no debe ser negativo ");
  }
}
