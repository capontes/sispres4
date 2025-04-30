export class AccountASaldo {
  value: number;

  constructor(value: number) {
    this.value = value;
    this.ensureIsValid();
  }
  ensureIsValid() {
    if (this.value > 0) throw new Error("El ASaldo no puede ser menor a cero");
  }
}
