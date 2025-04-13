export class PaySeguro {
  value: number;

  constructor(value: number) {
    this.value = value;
    this.ensureIsValid();
  }
  ensureIsValid() {
    if (this.value < 0) throw new Error("El Seguro no puede ser menor a cero");
  }
}
