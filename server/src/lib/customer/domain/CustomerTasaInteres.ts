export class CustomerTasaInteres {
  value: number;
  constructor(value: number) {
    this.value = value;
    this.ensureValidate();
  }

  ensureValidate() {
    if (this.value < 0)
      throw Error("Tasa de Interes debe ser mayor o igual a 0");
  }
}
