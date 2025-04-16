export class CustomerDireccion {
  value: string;

  constructor(value: string) {
    this.value = value;
    this.ensureValidate();
  }

  ensureValidate() {
    if (this.value.length < 5)
      throw Error("La dirección debe tener al menos 5 caracteres");
  }
}
