export class CustomerEvaluacion {
  value: string;

  constructor(value: string) {
    this.value = value;
<<<<<<< HEAD
    this.ensureValidate();
  }

  ensureValidate() {
    if (this.value.length < 3)
      throw Error("Estado debe tener al menos 3 caracter");
=======
>>>>>>> daca16469d4a01d8c68f696a432b10eaa370738a
  }
}
