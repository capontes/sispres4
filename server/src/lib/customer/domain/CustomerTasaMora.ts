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
>>>>>>> daca16469d4a01d8c68f696a432b10eaa370738a
  }
}
