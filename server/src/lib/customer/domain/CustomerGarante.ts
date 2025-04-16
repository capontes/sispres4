export class CustomerGarante {
  value: string;

  constructor(value: string) {
    this.value = value;
    this.ensureValidate();
  }

  ensureValidate() {
    if (this.value.length !== 3)
      throw Error("Codido de Empresa debe tener 3 Caracteres");
  }
}
