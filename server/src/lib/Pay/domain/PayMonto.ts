export class PayMonto {
  monto: number;

  constructor(monto: number) {
    this.monto = monto;
    this.ensureIsValid();
  }
  ensureIsValid() {
    if (this.monto < 0) throw new Error("El Monto no puede ser menor a cero");
  }
}
