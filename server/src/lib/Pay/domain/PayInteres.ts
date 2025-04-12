export class PayInteres {
  interes: number;

  constructor(interes: number) {
    this.interes = interes;
    this.ensureIsValid();
  }
  ensureIsValid() {
    if (this.interes < 0)
      throw new Error("El Interes no puede ser menor a cero");
  }
}
