export class PayFecCrea {
  fecCrea: Date;

  constructor(fecCrea: Date) {
    this.fecCrea = fecCrea;
  }
  ensureIsValid() {
    if (!(this.fecCrea instanceof Date)) {
      throw new Error("Invalid date format.");
    }
  }
  ensureIsValidFecCrea() {
    if (this.fecCrea.getTime() > Date.now()) {
      throw new Error("La fecha de creación no puede ser futura.");
    }
  }
}
//export class PayFecCrea {
//fecCrea: Date;

//constructor(fecCrea: Date) {
//this.fecCrea = fecCrea;
//}
//}
