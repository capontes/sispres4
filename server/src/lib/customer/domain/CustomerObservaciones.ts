export class CustomerObservaciones {
  value: string;

  constructor(value: string) {
    this.value = value;
    this.ensureValidate();
  }

  ensureValidate() {
    if (this.value.length > 200)
      throw Error("Observaciones debe tener menos de 200 caracteres");
  }
}
