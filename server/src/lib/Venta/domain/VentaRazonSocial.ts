export class VentaRazonSocial {
  value: string;

  constructor(value: string) {
    this.value = value;
    this.ensureValidate();
  }

  ensureValidate() {
    if (this.value.length < 2)
      throw new Error("Razon social debe ser de al menos 2 caracteres");
  }
}
