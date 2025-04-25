export class MovementNroCuenta {
  value: number;

  constructor(value: number) {
    this.value = value;
    this.ensureValidate();
  }
  ensureValidate() {
    if (this.value.toString().length < 9)
      throw Error("Nro de Cuenta debe tener 9 Caracteres");
  }
}
