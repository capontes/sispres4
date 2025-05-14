export class CustomerEstado {
  value: string;

  constructor(value: string) {
    this.value = value;
    this.ensureValidate();
  }

  ensureValidate() {
    if (this.value.length != 3) throw Error("Estado debe tener 3 caracteres");
  }
}
//   }
