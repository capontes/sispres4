export class LoanRazonSocial {
  value: string;

  constructor(value: string) {
    this.value = value;
    this.ensureValidate();
  }

  ensureValidate() {
    if (this.value.length < 3)
      throw Error("Razon social debe tener al menos 3 Caracteres");
  }
}
