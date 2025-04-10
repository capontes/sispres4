export class LoanEstado {
  value: string;

  constructor(value: string) {
    this.value = value;
    this.ensureValidate();
  }

  ensureValidate() {
    if (this.value.length !== 3)
      throw Error("Estado de Préstamo debe tener 3 Caracteres");
  }
}
