export class BoxCodEmpresa {
  value: string;

  constructor(value: string) {
    this.value = value;
    this.ensureValidate();
  }

  ensureValidate() {
    if (this.value.length !== 3)
      throw Error("Codigo de Empresa debe tener 3 caracteres");
  }
}
