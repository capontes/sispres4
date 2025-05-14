export class VentaTipDocCli {
  value: string;

  constructor(value: string) {
    this.value = value;
    this.ensureValidate();
  }

  ensureValidate() {
    if (this.value.length != 3)
      throw new Error("Tipo de Doc. del cliente debe ser de 3 caracteres");
  }
}
