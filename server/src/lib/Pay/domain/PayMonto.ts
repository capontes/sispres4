export class PayMonto {
  value: number;

  constructor(value: number) {
    this.value = value;
    this.ensureIsValid();
  }
  ensureIsValid() {
    if (this.value < 0) throw new Error("El Monto no puede ser menor a cero");
  }
}
