export class AccountMoneda {
  value: string;

  constructor(value: string) {
    this.value = value;
    this.ensureValidate();
  }
  ensureValidate() {
    if (this.value.length < 1) {
      throw Error("Tipo de Moneda debe tener un caracter como minimo");
    }
  }
}
