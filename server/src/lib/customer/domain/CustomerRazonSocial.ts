export class CustomerRazonSocial {
  value: string;

  constructor(value: string) {
    this.value = value;
    this.ensureValidate();
  }

  ensureValidate() {
    if (this.value.length > 50)
      throw Error("Razon Social debe tener menos de 50 Caracteres");
  }
}
