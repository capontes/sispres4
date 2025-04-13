export class PayNroCuotas {
  value: number;

  constructor(value: number) {
    this.value = value;
    this.ensureIsValid();
  }
  ensureIsValid() {
    if (this.value <= 0)
      throw new Error("El Numero de Cuotas no puede ser menor o igual a cero");
  }
}
