export class PayMora {
  mora: number;

  constructor(mora: number) {
    this.mora = mora;
    this.ensureIsValid();
  }
  ensureIsValid() {
    if (this.mora < 0) throw new Error("La Mora no puede ser menor a cero");
  }
}
