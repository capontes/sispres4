export class CustomerEstado {
  value: string;

  constructor(value: string) {
    this.value = value;
    this.ensureValidate();
  }

  ensureValidate() {
<<<<<<< HEAD
    if (this.value.length != 3) throw Error("Estado debe tener 3 caracteres");
=======
    if (this.value.length !== 3) throw Error("Estado debe tener tres caracter");
>>>>>>> daca16469d4a01d8c68f696a432b10eaa370738a
  }
}
//   }
