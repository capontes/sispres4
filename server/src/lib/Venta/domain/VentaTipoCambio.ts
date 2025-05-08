export class VentaTipoCambio {
  value: number;

  constructor(value: number) {
    this.value = value;
    this.ensureValidate();
  }

  ensureValidate() {
    if (this.value <= 0)
      throw new Error("Tipo de cámbio debe ser mayor a cero");
  }
}
