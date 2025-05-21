export class VentaNroDoc {
  value: string;

  constructor(value: string) {
    this.value = value;
    this.ensureValidate();
  }

  ensureValidate() {
    if (this.value.length != 8)
      throw new Error("Número de comprobante debe ser de 8 caracteres");
  }
}
