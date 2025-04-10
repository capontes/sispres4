export class Pay {
  codEmpresa: string;
  codPrestamo: number;
  nroCuota: string;
  nroCuotas: string;
  nroDoc: string;
  razonSocial: string;
  garante: string;
  monto: number;
  fecVencimiento: string;
  fecPago: string;
  diasRetraso: number;
  capital: number;
  seguro: number;
  interes: number;
  tasaMora: number;
  mora: number;
  totalPagar: number;
  importe: number;
  saldoCapital: number;
  tipoPago: string;
  observaciones: string;
  usuario: string;
  fecCrea: Date;

  constructor(
    codEmpresa: string,
    codPrestamo: number,
    nroCuota: string,
    nroCuotas: string,
    nroDoc: string,
    razonSocial: string,
    garante: string,
    monto: number,
    fecVencimiento: string,
    fecPago: string,
    diasRetraso: number,
    capital: number,
    seguro: number,
    interes: number,
    tasaMora: number,
    mora: number,
    totalPagar: number,
    importe: number,
    saldoCapital: number,
    tipoPago: string,
    observaciones: string,
    usuario: string,
    fecCrea: Date
  ) {
    this.codEmpresa = codEmpresa;
    this.codPrestamo = codPrestamo;
    this.nroCuota = nroCuota;
    this.nroCuotas = nroCuotas;
    this.nroDoc = nroDoc;
    this.razonSocial = razonSocial;
    this.garante = garante;
    this.monto = monto;
    this.fecVencimiento = fecVencimiento;
    this.fecPago = fecPago;
    this.diasRetraso = diasRetraso;
    this.capital = capital;
    this.seguro = seguro;
    this.interes = interes;
    this.tasaMora = tasaMora;
    this.mora = mora;
    this.totalPagar = totalPagar;
    this.importe = importe;
    this.saldoCapital = saldoCapital;
    this.tipoPago = tipoPago;
    this.observaciones = observaciones;
    this.usuario = usuario;
    this.fecCrea = new Date(fecCrea);
  }

  public mapToPrimitives() {
    return {
      codEmpresa: this.codEmpresa,
      codPrestamo: this.codPrestamo,
      nroCuota: this.nroCuota,
      nroCuotas: this.nroCuotas,
      nroDoc: this.nroDoc,
      razonSocial: this.razonSocial,
      garante: this.garante,
      monto: this.monto,
      fecVencimiento: this.fecVencimiento,
      fecPago: this.fecPago,
      diasRetraso: this.diasRetraso,
      capital: this.capital,
      seguro: this.seguro,
      interes: this.interes,
      tasaMora: this.tasaMora,
      mora: this.mora,
      totalPagar: this.totalPagar,
      importe: this.importe,
      saldoCapital: this.saldoCapital,
      tipoPago: this.tipoPago,
      observaciones: this.observaciones,
      usuario: this.usuario,
      fecCrea: this.fecCrea,
    };
  }
}
