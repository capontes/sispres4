export class PayTasaMora {
  value: number;

  constructor(value: number) {
    this.value = value;
    this.ensureIsValid();
  }
  ensureIsValid() {
    if (this.value < 0)
      throw new Error("La Tasa de Mora no puede ser menor a cero");
  }
}
