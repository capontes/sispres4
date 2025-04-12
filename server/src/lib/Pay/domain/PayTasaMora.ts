export class PayTasaMora {
  tasaMora: number;

  constructor(tasaMora: number) {
    this.tasaMora = tasaMora;
    this.ensureIsValid();
  }
  ensureIsValid() {
    if (this.tasaMora < 0)
      throw new Error("La Tasa de Mora no puede ser menor a cero");
  }
}
