export class AccountAInteres {
  value: number;

  constructor(value: number) {
    this.value = value;
    this.ensureValidate();
  }
  ensureValidate() {
    if (this.value < 0)
      throw new Error("El a Interes no puede ser menor a cero");
  }
}
