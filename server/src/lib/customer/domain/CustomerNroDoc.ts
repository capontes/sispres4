export class CustomerNroDoc {
  value: string;

  constructor(value: string) {
    this.value = value;
    this.ensureValidate();
  }

  ensureValidate() {
    if (this.value.length < 8)
      throw Error("Nro de Documento debe tener al menos 8 Caracteres");
  }
}
