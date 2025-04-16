export class CustomerPhone {
  value: string;
  constructor(value: string) {
    this.value = value;
    this.ensureValidate();
  }

  ensureValidate() {
    if (this.value.length < 7 || this.value.length > 15)
      throw Error("Telefono debe tener entre 7 y 15 caracteres");
  }
}
