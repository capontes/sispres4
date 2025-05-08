export class VentaId {
  value: string;

  constructor(value: string) {
    this.value = value;
    this.ensureValues();
  }

  ensureValues() {
    if (this.value.length != 15)
      throw new Error(
        "Id debe ser de 15 caracteres <CodEmpre*3><Serie*4><NroDoc*8>"
      );
  }
}
