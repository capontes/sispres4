export class CustomerNroDoc {
  value: string;

  constructor(value: string) {
    this.value = value;
    this.ensureValidate();
  }
  ensureValidate() {
    if (this.value.length < 8)
<<<<<<< HEAD
      throw Error("Nro de Documento debe tener al menos 8 Caracteres");
=======
      throw Error("Nro de Documento debe tener 8 Caracteres");
>>>>>>> 3da75999d642963958dd9a6d7345c614d73bdfd3
  }
}
