export class AccountPenalizidad {
  value: string;

  constructor(value: string) {
    this.value = value;
    this.ensureValidate();
  }
  ensureValidate() {
    if (this.value.length < 2) {
      throw Error("La Penalizidad debe tener dos caracteres como maximo");
    }
  }
}
