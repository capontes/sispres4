export class BoxMes {
  value: string;

  constructor(value: string) {
    this.value = value;
    this.ensureValidate();
  }

  ensureValidate() {
    if (this.value.length !== 2) throw Error("El mes tiene 2 caracteres");
  }
}
