export class BoxCierreDiario {
  diametro: string;
  estadoDia: string;
  nroMovientosDia: number;
  saldoInicialDia: number;
  capitalPrestadoDia: number;
  capitalCobradoDia: number;
  interesCobradoDia: number;
  moraCobradoDia: number;
  saldoFinalDia: number;
  usuAperturaDia: string;
  usuCierraDia: string;
  fecAperturaDia: Date;
  fecCierreDia: Date;
  constructor(
    diametro: string,
    estadoDia: string,
    nroMovientosDia: number,
    saldoInicialDia: number,
    capitalPrestadoDia: number,
    capitalCobradoDia: number,
    interesCobradoDia: number,
    moraCobradoDia: number,
    saldoFinalDia: number,
    usuAperturaDia: string,
    usuCierraDia: string,
    fecAperturaDia: Date,
    fecCierreDia: Date
  ) {
    this.diametro = diametro;
    this.estadoDia = estadoDia;
    this.nroMovientosDia = nroMovientosDia;
    this.saldoInicialDia = saldoInicialDia;
    this.capitalPrestadoDia = capitalPrestadoDia;
    this.capitalCobradoDia = capitalCobradoDia;
    this.interesCobradoDia = interesCobradoDia;
    this.moraCobradoDia = moraCobradoDia;
    this.saldoFinalDia = saldoFinalDia;
    this.usuAperturaDia = usuAperturaDia;
    this.usuCierraDia = usuCierraDia;
    this.fecAperturaDia = fecAperturaDia;
    this.fecCierreDia = fecCierreDia;
    this.validatorNroMovimientoDia();
    this.validatorInteresCobradoDia();
  }
  validatorNroMovimientoDia() {
    if (this.nroMovientosDia <= 0)
      throw Error("Nro de Movimiento Dia debe ser mayor a 0");
  }
  validatorInteresCobradoDia() {
    if (this.interesCobradoDia <= 0)
      throw Error("Interes Cobrado en el dia debe ser mayor a 0");
  }
}
