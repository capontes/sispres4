export class CustomerTipoDoc {
  value: string;

  constructor(value: string) {
    this.value = value;
    this.ensureValidate();
  }

  ensureValidate() {
    if (this.value.length !== 1)
      throw Error("Tipo de Documento debe tener 1 Caracteres");
  }
}
