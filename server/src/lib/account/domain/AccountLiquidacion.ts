export class AccountLiquidacion {
  value: number;

  constructor(value: number) {
    this.value = value;
    this.ensureIsValid();
  }
  ensureIsValid() {
    if (this.value < 0)
      throw new Error("La Liquidacion no puede ser menor a cero");
  }
}
