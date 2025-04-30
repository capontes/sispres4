export class CustomerTipoDoc {
  value: string;

  constructor(value: string) {
    this.value = value;
    this.ensureValidate();
  }

  ensureValidate() {
<<<<<<< HEAD
    if (this.value.length !== 2)
      throw Error("Tipo de Documento debe tener 2 Caracteres");
=======
    if (this.value.length < 1) {
      throw Error("Tipo de Documento debe tener 1 Caracteres como minimo");
    }
>>>>>>> daca16469d4a01d8c68f696a432b10eaa370738a
  }
}
