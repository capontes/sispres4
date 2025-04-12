export class PayCodPrestamo {
  value: number;
  constructor(value: number) {
    this.value = value;
  }
  ensureIsValid() {
    if (this.value <= 0) {
      throw new Error("El valor del código de préstamo debe ser mayor a 0.");
    }
  }
}
