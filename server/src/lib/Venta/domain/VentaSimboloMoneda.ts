export class VentaSimboloMoneda {
  value: string;

  constructor(value: string) {
    this.value = value;
    this.ensureValidate();
  }

  ensureValidate() {
    if (this.value.length > 3)
      throw new Error("Símbolo no debe ser mayoe a 3 caracteres");
  }
}
