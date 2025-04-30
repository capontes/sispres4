export class CustomerTasaMora {
  value: number;

  constructor(value: number) {
    this.value = value;
    this.ensureValidate();
  }

  ensureValidate() {
<<<<<<< HEAD
    if (this.value < 0)
      throw Error("Tasa de Mora debe ser mayor o igual a cero");
=======
    if (this.value < 0 || this.value < 0)
      throw Error("Tasa de Mora debe ser mayor e igual 0");
>>>>>>> 3da75999d642963958dd9a6d7345c614d73bdfd3
  }
}
