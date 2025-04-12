export class PayNroCuotas {
  NroCuotas: number;

  constructor(NroCuotas: number) {
    this.NroCuotas = NroCuotas;
    this.ensureIsValid();
  }
  ensureIsValid() {
    if (this.NroCuotas < 0)
      throw new Error("El Numero de Cuotas no puede ser menor a cero");
  }
}
