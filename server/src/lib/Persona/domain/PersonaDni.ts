export class PersonaDni {
  value: string;

  constructor(value: string) {
    this.value = value;
    this.ensureIsValid();
  }

  ensureIsValid() {
    if (this.value.length != 8) throw new Error("Dni debe tener 8 dígitos");
  }
}
