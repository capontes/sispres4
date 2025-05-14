export class VentaCodEmpresa {
  value: string;

  constructor(value: string) {
    this.value = value;
    this.ensureValidate();
  }

  ensureValidate() {
    if (this.value.length != 3)
      throw new Error("Código de Empresa debe ser de 3 caracteres");
  }
}
