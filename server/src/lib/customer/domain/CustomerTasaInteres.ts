export class CustomerTasaInteres {
  value: number;
  constructor(value: number) {
    this.value = value;
    this.ensureValidate();
  }

  ensureValidate() {
<<<<<<< HEAD
    if (this.value < 0) throw Error("Tasa de Interes debe se mayor que cero");
=======
    if (this.value < 0)
      throw Error("Tasa de Interes debe ser mayor o igual a 0");
>>>>>>> daca16469d4a01d8c68f696a432b10eaa370738a
  }
}
