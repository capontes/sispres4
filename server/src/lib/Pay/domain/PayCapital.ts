export class PayCapital {
  capital: number;

  constructor(capital: number) {
    this.capital = capital;
    this.ensureIsValid();
  }
  ensureIsValid() {
    if (this.capital < 0)
      throw new Error("El Capital no puede ser menor a cero");
  }
}
