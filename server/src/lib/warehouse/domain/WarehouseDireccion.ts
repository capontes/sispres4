export class WarehouseDireccion {
  value: string;

  constructor(value: string) {
    this.value = value;
    this.ensureValidate();
  }
  ensureValidate() {
    if (this.value.length < 3)
      throw Error("La direccion debe tener al menos 3 caracteres");
  }
}
