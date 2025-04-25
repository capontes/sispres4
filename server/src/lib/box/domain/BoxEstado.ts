export class BoxEstado {
  value: string;

  constructor(value: string) {
    this.value = value;
    this.ensureValidate();
  }

  ensureValidate() {
    if (this.value.length !== 3)
      throw Error("Estado de Caja debe tener 3 caracteres");
  }
}
