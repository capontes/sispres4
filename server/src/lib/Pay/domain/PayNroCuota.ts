export class PayNroCuota {
  value: number;

  constructor(value: number) {
    this.value = value;
    this.ensureIsValid();
  }
  ensureIsValid() {
    if (this.value <= 0)
      throw new Error("El Numero de Cuota no puede ser menor o igual a cero");
  }
}
