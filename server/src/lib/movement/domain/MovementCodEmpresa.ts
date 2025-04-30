export class MovementCodEmpresa {
  value: string;

  constructor(value: string) {
    this.value = value;
    this.ensurevalidate();
  }
  ensurevalidate() {
    console.log(this.value.length);
    if (this.value.length != 3)
      throw Error("Codido de Empresa debe tener 3 Caracteres");
  }
}
