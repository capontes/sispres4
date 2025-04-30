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
>>>>>>> daca16469d4a01d8c68f696a432b10eaa370738a
  }
}
