export class CustomerTasaInteres {
  value: number;
  constructor(value: number) {
    this.value = value;
    this.ensureValidate();
  }

  ensureValidate() {
<<<<<<< HEAD
    if (this.value < 0) throw Error("Tasa de Interes debe se mayor que cero");}

=======
    if (this.value < 0) throw Error("Tasa de Interes debe se mayor que cero");
  }
>>>>>>> 3da75999d642963958dd9a6d7345c614d73bdfd3
}
