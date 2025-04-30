export class AccountSaldo {
  value: number;

  constructor(value: number) {
    this.value = value;
    this.ensureIsValid();
  }
  ensureIsValid() {
    if (this.value > 0) throw new Error("El saldo no puede ser menor a cero");
  }
}
