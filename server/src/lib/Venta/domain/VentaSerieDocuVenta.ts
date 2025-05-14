export class VentaSerieDocuVenta {
  value: string;

  constructor(value: string) {
    this.value = value;
    this.ensureValidate();
  }

  ensureValidate() {
    if (this.value.length != 4)
      throw new Error("Serie de Documento debe ser de 4 caracteres");
  }
}
