export class PayNroCuota {
  NroCuota: number;

  constructor(NroCuota: number) {
    this.NroCuota = NroCuota;
    this.ensureIsValid();
  }
  ensureIsValid() {
    if (this.NroCuota < 0)
      throw new Error("El Numero de Cuota no puede ser menor a cero");
  }
}
