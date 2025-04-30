import { BoxMes } from "./Box;Mes";
import { BoxAnio } from "./BoxAnio";
import { BoxCapitalCobrado } from "./BoxCapitalCobrado";
import { BoxCapitalPrestado } from "./BoxCapitalPrestado";
import { BoxCierreDiario } from "./BoxCierreDiario";
import { BoxCodEmpresa } from "./BoxCodEmpresa";
import { BoxEstado } from "./BoxEstado";
import { BoxFecApertura } from "./BoxFecApertura";
import { BoxFecCierre } from "./BoxfecCierre";
import { BoxInteresCobrado } from "./BoxInteresCobrado";
import { BoxMoraCobrado } from "./BoxMoraCobrado";
import { BoxNroMovimientos } from "./BoxNroMovimientos";
import { BoxSaldoFinal } from "./BoxSaldoFinal";
import { BoxSaldoInicial } from "./BoxSaldoInicial";
import { BoxSeguroCobrado } from "./BoxSeguroCobrado";
import { BoxUsuApertura } from "./BoxUsuApertura";
import { BoxUsuCierra } from "./BoxUsuCierra";

export class Box {
  codEmpresa: BoxCodEmpresa;
  anio: BoxAnio;
  mes: BoxMes;
  estado: BoxEstado;
  nroMovimientos: BoxNroMovimientos;
  saldoInicial: BoxSaldoInicial;
  capitalPrestado: BoxCapitalPrestado;
  capitalCobrado: BoxCapitalCobrado;
  seguroCobrado: BoxSeguroCobrado;
  interesCobrado: BoxInteresCobrado;
  moraCobrado: BoxMoraCobrado;
  saldoFinal: BoxSaldoFinal;
  usuApertura: BoxUsuApertura;
  usuCierra: BoxUsuCierra;
  fecApertura: BoxFecApertura;
  fecCierre: BoxFecCierre;
  cierreDiario: BoxCierreDiario[];

  constructor(
    codEmpresa: BoxCodEmpresa,
    anio: BoxAnio,
    mes: BoxMes,
    estado: BoxEstado,
    nroMovimientos: BoxNroMovimientos,
    saldoInicial: BoxSaldoInicial,
    capitalPrestado: BoxCapitalPrestado,
    capitalCobrado: BoxCapitalCobrado,
    seguroCobrado: BoxSeguroCobrado,
    interesCobrado: BoxInteresCobrado,
    moraCobrado: BoxMoraCobrado,
    saldoFinal: BoxSaldoFinal,
    usuApertura: BoxUsuApertura,
    usuCierra: BoxUsuCierra,
    fecApertura: BoxFecApertura,
    fecCierre: BoxFecCierre,
    cierreDiario: BoxCierreDiario[] = []
  ) {
    this.codEmpresa = codEmpresa;
    this.anio = anio;
    this.mes = mes;
    this.estado = estado;
    this.nroMovimientos = nroMovimientos;
    this.saldoInicial = saldoInicial;
    this.capitalPrestado = capitalPrestado;
    this.capitalCobrado = capitalCobrado;
    this.seguroCobrado = seguroCobrado;
    this.interesCobrado = interesCobrado;
    this.moraCobrado = moraCobrado;
    this.saldoFinal = saldoFinal;
    this.usuApertura = usuApertura;
    this.usuCierra = usuCierra;
    this.fecApertura = fecApertura;
    this.fecCierre = fecCierre;
    this.cierreDiario = cierreDiario;
  }

  public mapToPrimitives() {
    return {
      codEmpresa: this.codEmpresa.value,
      anio: this.anio.value,
      mes: this.mes.value,
      estado: this.estado.value,
      nroMovimientos: this.nroMovimientos.value,
      saldoInicial: this.saldoInicial.value,
      capitalPrestado: this.capitalPrestado.value,
      capitalCobrado: this.capitalCobrado.value,
      seguroCobrado: this.seguroCobrado.value,
      interesCobrado: this.interesCobrado.value,
      moraCobrado: this.moraCobrado.value,
      saldoFinal: this.saldoFinal.value,
      usuApertura: this.usuApertura.value,
      usuCierra: this.usuCierra.value,
      fecApertura: this.fecApertura.value,
      fecCierre: this.fecCierre.value,
      cierreDiario: this.cierreDiario,
    };
  }
}
