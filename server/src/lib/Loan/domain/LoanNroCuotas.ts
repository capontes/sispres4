export class LoanNroCuotas {
  value: number;

  constructor(value: number) {
    this.value = value;
    this.ensureValidate();
  }

  ensureValidate() {
    if (this.value <= 0) throw Error("Nro de cuotas no debe ser >= 1 ");
  }
}
