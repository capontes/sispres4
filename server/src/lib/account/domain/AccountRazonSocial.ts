export class AccountRazonSocial {
  value: string;

  constructor(value: string) {
    this.value = value;
    this.ensureValidate();
  }

  ensureValidate() {
    if (this.value.length < 3)
      throw Error("Razon Soicial debe tener menos de 3 caracteres");
  }
}
