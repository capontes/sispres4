export class PayCodEmpresa {
  value: string;

  constructor(value: string) {
    this.value = value;
    this.ensureValidation();
  }

  private ensureValidation() {
    if (this.value.length < 3) {
      throw new Error("Cod Empresa must be at least 3 characters long.");
    }
  }
}
