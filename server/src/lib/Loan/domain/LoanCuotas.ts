export class LoanCuotas {
  nroCuota: number;
  fecVencimiento: Date;
  monto: number;
  capital: number;
  seguro: number;
  interes: number;
  saldoCapital: number;
  mora: number;
  aInteres: number;
  aSeguro: number;
  aCapital: number;
  constructor(
    nroCuota: number,
    fecVencimiento: Date,
    monto: number,
    capital: number,
    seguro: number,
    interes: number,
    saldoCapital: number,
    mora: number,
    aInteres: number,
    aSeguro: number,
    aCapital: number
  ) {
    this.nroCuota = nroCuota;
    this.fecVencimiento = fecVencimiento;
    this.monto = monto;
    this.capital = capital;
    this.seguro = seguro;
    this.interes = interes;
    this.saldoCapital = saldoCapital;
    this.mora = mora;
    this.aInteres = aInteres;
    this.aSeguro = aSeguro;
    this.aCapital = aCapital;
    this.validatorNroCuota();
    this.validatorMonto();
  }

  validatorNroCuota() {
    if (this.nroCuota <= 0) throw Error("Nro de Cuota debe ser mayor a 0");
  }
  validatorMonto() {
    if (this.monto <= 0) throw Error("Monto a pagar debe ser mayor a 0");
  }
}
