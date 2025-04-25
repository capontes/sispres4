import { AccountAInteres } from "./AccountAInteres";
import { AccountASaldo } from "./AccountASaldo";
import { AccountCapital } from "./AccountCapital";
import { AccountCodEmpresa } from "./AccountCodEmpresa";
import { AccountDiaGeneraInteres } from "./AccountDiaGeneraInteres";
import { AccountEstado } from "./AccountEstado";
import { AccountFecApertura } from "./AccountFecApertura";
import { AccountFecCrea } from "./AccountFecCrea";
import { AccountFecMinCierre } from "./AccountFecMinCierre";
import { AccountFecRegenera } from "./AccountFecRegenera";
import { AccountInteres } from "./AccountInteres";
import { AccountLiquidacion } from "./AccountLiquidacion";
import { AccountModoInteres } from "./AccountModoInteres";
import { AccountMoneda } from "./AccountMoneda";
import { AccountNroCuenta } from "./AccountNroCuenta";
import { AccountNroDoc } from "./AccountNroDoc";
import { AccountObservaciones } from "./AccountObservaciones";
import { AccountPenalizidad } from "./AccountPenalizidad";
import { AccountRazonSocial } from "./AccountRazonSocial";
import { AccountSaldo } from "./AccountSaldo";
import { AccountTasaInteres } from "./AccountTasaInteres";
import { AccountTipoCuenta } from "./AccountTipoCuenta";
import { AccountUsuario } from "./AccountUsuario";

export class Account {
  codEmpresa: AccountCodEmpresa;
  nroCuenta: AccountNroCuenta;
  nroDoc: AccountNroDoc;
  razonSocial: AccountRazonSocial;
  fecApertura: AccountFecApertura;
  tipoCuenta: AccountTipoCuenta;
  moneda: AccountMoneda;
  capital: AccountCapital;
  fecRegenera: AccountFecRegenera;
  modoInteres: AccountModoInteres;
  tasaInteres: AccountTasaInteres;
  diaGeneraInteres: AccountDiaGeneraInteres;
  fecMinCierre: AccountFecMinCierre;
  interes: AccountInteres;
  aInteres: AccountAInteres;
  penalizidad: AccountPenalizidad;
  liquidacion: AccountLiquidacion;
  saldo: AccountSaldo;
  aSaldo: AccountASaldo;
  fecCrea: AccountFecCrea;
  estado: AccountEstado;
  usuario: AccountUsuario;
  observaciones: AccountObservaciones;

  constructor(
    codEmpresa: AccountCodEmpresa,
    nroCuenta: AccountNroCuenta,
    nroDoc: AccountNroDoc,
    razonSocial: AccountRazonSocial,
    fecApertura: AccountFecApertura,
    tipoCuenta: AccountTipoCuenta,
    moneda: AccountMoneda,
    capital: AccountCapital,
    fecRegenera: AccountFecRegenera,
    modoInteres: AccountModoInteres,
    tasaInteres: AccountTasaInteres,
    diaGeneraInteres: AccountDiaGeneraInteres,
    fecMinCierre: AccountFecMinCierre,
    interes: AccountInteres,
    aInteres: AccountAInteres,
    penalizidad: AccountPenalizidad,
    liquidacion: AccountLiquidacion,
    saldo: AccountSaldo,
    aSaldo: AccountASaldo,
    fecCrea: AccountFecCrea,
    estado: AccountEstado,
    usuario: AccountUsuario,
    observaciones: AccountObservaciones
  ) {
    this.codEmpresa = codEmpresa;
    this.nroCuenta = nroCuenta;
    this.nroDoc = nroDoc;
    this.razonSocial = razonSocial;
    this.fecApertura = fecApertura;
    this.tipoCuenta = tipoCuenta;
    this.moneda = moneda;
    this.capital = capital;
    this.fecRegenera = fecRegenera;
    this.modoInteres = modoInteres;
    this.tasaInteres = tasaInteres;
    this.diaGeneraInteres = diaGeneraInteres;
    this.fecMinCierre = fecMinCierre;
    this.interes = interes;
    this.aInteres = aInteres;
    this.penalizidad = penalizidad;
    this.liquidacion = liquidacion;
    this.saldo = saldo;
    this.aSaldo = aSaldo;
    this.fecCrea = fecCrea;
    this.estado = estado;
    this.usuario = usuario;
    this.observaciones = observaciones;
  }
  public mapTopPrimitives() {
    return {
      codEmpresa: this.codEmpresa.value,
      nroCuenta: this.nroCuenta.value,
      nroDoc: this.nroDoc.value,
      razonSocial: this.razonSocial.value,
      fecApertura: this.fecApertura.value,
      tipoCuenta: this.tipoCuenta.value,
      moneda: this.moneda.value,
      capital: this.capital.value,
      fecRegenera: this.fecRegenera.value,
      modoInteres: this.modoInteres.value,
      tasaInteres: this.tasaInteres.value,
      diaGeneraInteres: this.diaGeneraInteres.value,
      fecMinCierre: this.fecMinCierre.value,
      interes: this.interes.value,
      ainteres: this.aInteres.value,
      penalizidad: this.penalizidad.value,
      liquidacion: this.liquidacion.value,
      saldo: this.saldo.value,
      aSaldo: this.aSaldo.value,
      fecCrea: this.fecCrea.value,
      estado: this.estado.value,
      usuario: this.usuario.value,
      observaciones: this.observaciones.value,
    };
  }
}
