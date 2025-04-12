export class PaySeguro {
  seguro: number;

  constructor(seguro: number) {
    this.seguro = seguro;
    this.ensureIsValid();
  }
  ensureIsValid() {
    if (this.seguro < 0) throw new Error("El Seguro no puede ser menor a cero");
  }
}
