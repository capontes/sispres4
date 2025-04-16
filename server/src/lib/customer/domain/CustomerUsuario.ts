export class CustomerUsuario {
  value: string;

  constructor(value: string) {
    this.value = value;
    this.ensureValidate();
  }

  ensureValidate() {
    if (this.value.length !== 3) throw Error("Usuario debe tener 3 Caracteres");
  }
}
