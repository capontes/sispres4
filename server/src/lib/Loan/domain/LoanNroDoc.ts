export class LoanNroDoc {
  value: string;

  constructor(value: string) {
    this.value = value;
    this.ensureValidate();
  }

  ensureValidate() {
    if (this.value.length < 8)
      throw Error(
        "Nro de documento de identidad debe tener al menos 3 Caracteres"
      );
  }
}
