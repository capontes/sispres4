export class CustomerNomComercialCli {
  value: string;

  constructor(value: string) {
    this.value = value;
    this.ensureValidate();
  }

  ensureValidate() {
    if (this.value.length > 50)
      throw Error("Nombre Comercial Cliente debe tener menos de 50 caracteres");
  }
}
