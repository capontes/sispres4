import { LoanCapital } from "./LoanCapital";
import { LoanCodEmpresa } from "./LoanCodEmpresa";
import { LoanCodPrestamo } from "./LoanCodPrestamo";
import { LoanCuotas } from "./LoanCuotas";
import { LoanEstado } from "./LoanEstado";
import { LoanFecCrea } from "./LoanFecCrea";
import { LoanFecInicio } from "./LoanFecInicio";
import { LoanFecProceso } from "./LoanFecProceso";
import { LoanGarante } from "./LoanGarante";
import { LoanGastosAdministrativos } from "./LoanGastosAdministrativos";
import { LoanNroCuotas } from "./LoanNroCuotas";
import { LoanNroDoc } from "./LoanNroDoc";
import { LoanObservaciones } from "./LoanObservaciones";
import { RazonSocial } from "./LoanRazonSocial";
import { LoanSaldoCapital } from "./LoanSaldoCapital";
import { LoanSeguro } from "./LoanSeguro";
import { LoanTasaInteres } from "./LoanTasaInteres";
import { LoanUsuario } from "./LoanUsuario";

export class Loan {
  codEmpresa: LoanCodEmpresa;
  codPrestamo: LoanCodPrestamo;
  nroDoc: LoanNroDoc;
  razonSocial: RazonSocial;
  garante: LoanGarante;
  tasaInteres: LoanTasaInteres;
  capital: LoanCapital;
  nroCuotas: LoanNroCuotas;
  seguro: LoanSeguro;
  gastosAdministrativos: LoanGastosAdministrativos;
  fecProcedo: LoanFecProceso;
  fecInicio: LoanFecInicio;
  estado: LoanEstado;
  saldoCapital: LoanSaldoCapital;
  observaciones: LoanObservaciones;
  usuario: LoanUsuario;
  fecCrea: LoanFecCrea;
  cuotas: [LoanCuotas];

  constructor(
    codEmpresa: LoanCodEmpresa,
    codPrestamo: LoanCodPrestamo,
    nroDoc: LoanNroDoc,
    razonSocial: RazonSocial,
    garante: LoanGarante,
    tasaInteres: LoanTasaInteres,
    capital: LoanCapital,
    nroCuotas: LoanNroCuotas,
    seguro: LoanSeguro,
    gastosAdministrativos: LoanGastosAdministrativos,
    fecProcedo: LoanFecProceso,
    fecInicio: LoanFecInicio,
    estado: LoanEstado,
    saldoCapital: LoanSaldoCapital,
    observaciones: LoanObservaciones,
    usuario: LoanUsuario,
    fecCrea: LoanFecCrea,
    cuotas: [LoanCuotas]
  ) {
    this.codEmpresa = codEmpresa;
    this.codPrestamo = codPrestamo;
    this.nroDoc = nroDoc;
    this.razonSocial = razonSocial;
    this.garante = garante;
    this.tasaInteres = tasaInteres;
    this.capital = capital;
    this.nroCuotas = nroCuotas;
    this.seguro = seguro;
    this.gastosAdministrativos = gastosAdministrativos;
    this.fecProcedo = fecProcedo;
    this.fecInicio = fecInicio;
    this.estado = estado;
    this.saldoCapital = saldoCapital;
    this.observaciones = observaciones;
    this.usuario = usuario;
    this.fecCrea = fecCrea;
    this.cuotas = cuotas;
  }

  public mapToPrimitives() {
    return {
      codEmpresa: this.codEmpresa,
      codPrestamo: this.codPrestamo,
      nroDoc: this.nroDoc,
      razonSocial: this.razonSocial,
      garante: this.garante,
      tasaInteres: this.tasaInteres,
      capital: this.capital,
      nroCuotas: this.nroCuotas,
      seguro: this.seguro,
      gastosAdministrativos: this.gastosAdministrativos,
      fecProcedo: this.fecProcedo,
      fecInicio: this.fecInicio,
      estado: this.estado,
      saldoCapital: this.saldoCapital,
      observaciones: this.observaciones,
      usuario: this.usuario,
      fecCrea: this.fecCrea,
      cuotas: this.cuotas,
    };
  }
}
