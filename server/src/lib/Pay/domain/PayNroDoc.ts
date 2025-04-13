export class PayNroDoc {
  value: string;

  constructor(value: string) {
    this.value = value;
    this.ensureValidation();
  }

  private ensureValidation() {
    if (this.value.length < 8) {
      throw new Error(
        "Documento del cliente must be at least 8 characters long."
      );
    }
  }
}
