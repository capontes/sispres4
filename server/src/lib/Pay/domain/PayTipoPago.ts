export class PayTipoPago {
  TipoPago: string;

  constructor(TipoPago: string) {
    this.TipoPago = TipoPago;
    this.ensureIsValid();
  }
  ensureIsValid() {
    if (this.TipoPago.length < 2)
      throw new Error("El Tipo de Pago no puede ser menor a dos caracteres");
  }
}
