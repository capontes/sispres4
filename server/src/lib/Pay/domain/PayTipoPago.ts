export class PayTipoPago {
  value: string;

  constructor(value: string) {
    this.value = value;
    this.ensureIsValid();
  }
  ensureIsValid() {
    if (this.value.length < 2)
      throw new Error("El Tipo de Pago no puede ser menor a dos caracteres");
  }
}
