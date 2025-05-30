export class CustomerTasaMora {
  value: number;

  constructor(value: number) {
    this.value = value;
    this.ensureValidate();
  }

  ensureValidate() {
    if (this.value < 0)
      throw Error("Tasa de Mora debe ser mayor o igual a cero");
  }
}
