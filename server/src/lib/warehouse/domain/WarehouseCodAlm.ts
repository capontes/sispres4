export class WarehouseCodAlm {
  value: string;

  constructor(value: string) {
    this.value = value;
    this.ensureValidate();
  }
  ensureValidate() {
    if (this.value.length < 4)
      throw Error("El Codigo de Almacen deber tener 4 caracteres");
  }
}
