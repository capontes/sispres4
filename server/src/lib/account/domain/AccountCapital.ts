export class AccountCapital {
  value: number;

  constructor(value: number) {
    this.value = value;
    this.ensureValidate();
  }

  ensureValidate() {
    if (this.value < 0) throw Error("Capital no debe ser negativo");
  }
}
