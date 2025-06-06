export class VentaCodMoneda {
  value: string;

  constructor(value: string) {
    this.value = value;
    this.ensureValidate();
  }

  ensureValidate() {
    if (this.value.length != 3)
      throw new Error("Código de Moneda debe ser de 3 caracteres");
  }
}
