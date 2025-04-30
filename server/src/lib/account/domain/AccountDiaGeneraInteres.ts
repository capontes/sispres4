export class AccountDiaGeneraInteres {
  value: number;

  constructor(value: number) {
    this.value = value;
    this.ensureValidate();
  }
  ensureValidate() {
    if (this.value >= 0)
      throw Error("Dia que Genera Interes debe ser mayyor o igual a cero");
  }
}
