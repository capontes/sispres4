export class CustomerRazonSocial {
  value: string;

  constructor(value: string) {
    this.value = value;
    this.ensureValidate();
  }

  ensureValidate() {
    if (this.value.length < 3)
<<<<<<< HEAD
      throw Error("Razon Social debe tener al menos de 3 Caracteres");
=======
      throw Error("Razon Social debe tener menos de 3 Caracteres");
>>>>>>> daca16469d4a01d8c68f696a432b10eaa370738a
  }
}
