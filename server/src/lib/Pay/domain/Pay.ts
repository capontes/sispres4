import { PayCapital } from "./PayCapital";
import { PayCodEmpresa } from "./PayCodEmpresa";
import { PayCodPrestamo } from "./PayCodPrestamo";
import { PayDiasRetraso } from "./PayDiasRetraso";
import { PayFecCrea } from "./PayFecCrea";
import { PayFecPago } from "./PayFecPago";
import { PayFecVencimiento } from "./PayFecVencimiento";
import { PayGarante } from "./PayGarante";
import { PayImporte } from "./PayImporte";
import { PayInteres } from "./PayInteres";
import { PayMonto } from "./PayMonto";
import { PayMora } from "./PayMora";
import { PayNroCuota } from "./PayNroCuota";
import { PayNroCuotas } from "./PayNroCuotas";
import { PayNroDoc } from "./PayNroDoc";
import { PayObservaciones } from "./PayObservaciones";
import { PayRazonSocial } from "./PayRazonSocial";
import { PaySaldoCapital } from "./PaySaldoCapital";
import { PaySeguro } from "./PaySeguro";
import { PayTasaMora } from "./PayTasaMora";
import { PayTipoPago } from "./PayTipoPago";
import { PayTotalPagar } from "./PayTotalPagar";
import { PayUsuario } from "./PayUsuario";

export class Pay {
  codEmpresa: PayCodEmpresa;
  codPrestamo: PayCodPrestamo;
  nroCuota: PayNroCuota;
  nroCuotas: PayNroCuotas;
  nroDoc: PayNroDoc;
  razonSocial: PayRazonSocial;
  garante: PayGarante;
  monto: PayMonto;
  fecVencimiento: PayFecVencimiento;
  fecPago: PayFecPago;
  diasRetraso: PayDiasRetraso;
  capital: PayCapital;
  seguro: PaySeguro;
  interes: PayInteres;
  tasaMora: PayTasaMora;
  mora: PayMora;
  totalPagar: PayTotalPagar;
  importe: PayImporte;
  saldoCapital: PaySaldoCapital;
  tipoPago: PayTipoPago;
  observaciones: PayObservaciones;
  usuario: PayUsuario;
  fecCrea: Date;

  constructor(
    codEmpresa: PayCodEmpresa,
    codPrestamo: PayCodPrestamo,
    nroCuota: PayNroCuota,
    nroCuotas: PayNroCuotas,
    nroDoc: PayNroDoc,
    razonSocial: PayRazonSocial,
    garante: PayGarante,
    monto: PayMonto,
    fecVencimiento: PayFecVencimiento,
    fecPago: PayFecPago,
    diasRetraso: PayDiasRetraso,
    capital: PayCapital,
    seguro: PaySeguro,
    interes: PayInteres,
    tasaMora: PayTasaMora,
    mora: PayMora,
    totalPagar: PayTotalPagar,
    importe: PayImporte,
    saldoCapital: PaySaldoCapital,
    tipoPago: PayTipoPago,
    observaciones: PayObservaciones,
    usuario: PayUsuario,
    fecCrea: PayFecCrea
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
    this.fecCrea = new Date();
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
