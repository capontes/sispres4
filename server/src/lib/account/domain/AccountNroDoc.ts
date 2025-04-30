export class AccountNroDoc {
  value: string;

  constructor(value: string) {
    this.value = value;
    this.ensureValidate();
  }
  ensureValidate() {
    if (this.value.length < 8)
      throw Error("Nro de Documento debe tener 8 caracteres");
  }
}
