export class BoxAnio {
  value: string;

  constructor(value: string) {
    this.value = value;
    this.ensureValidate();
  }

  ensureValidate() {
    if (this.value.length !== 4) throw Error("El anio debe tener 4 caracteres");
  }
}
