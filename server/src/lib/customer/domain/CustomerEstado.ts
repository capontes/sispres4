export class CustomerEstado {
  value: string;

  constructor(value: string) {
    this.value = value;
    this.ensureValidate();
  }

  ensureValidate() {
    if (this.value.length > 1)
      throw Error("Estado debe tener un solo caracter");
  }
}
//   }
