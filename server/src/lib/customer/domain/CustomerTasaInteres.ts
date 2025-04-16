export class CustomerTasaInteres {
  value: number;
  constructor(value: number) {
    this.value = value;
    this.ensureValidate();
  }

  ensureValidate() {
    if (this.value < 0 || this.value > 100)
      throw Error("Tasa de Interes debe estar entre 0 y 100");
  }
}
