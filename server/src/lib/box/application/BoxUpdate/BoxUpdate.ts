import { Box } from "../../domain/Box";
import { BoxMes } from "../../domain/Box;Mes";
import { BoxAnio } from "../../domain/BoxAnio";
import { BoxCapitalCobrado } from "../../domain/BoxCapitalCobrado";
import { BoxCapitalPrestado } from "../../domain/BoxCapitalPrestado";
import { BoxCierreDiario } from "../../domain/BoxCierreDiario";
import { BoxCodEmpresa } from "../../domain/BoxCodEmpresa";
import { BoxEstado } from "../../domain/BoxEstado";
import { BoxFecApertura } from "../../domain/BoxFecApertura";
import { BoxFecCierre } from "../../domain/BoxfecCierre";
import { BoxInteresCobrado } from "../../domain/BoxInteresCobrado";
import { BoxMoraCobrado } from "../../domain/BoxMoraCobrado";
import { BoxNroMovimientos } from "../../domain/BoxNroMovimientos";
import { BoxRepository } from "../../domain/BoxRepository";
import { BoxSaldoFinal } from "../../domain/BoxSaldoFinal";
import { BoxSaldoInicial } from "../../domain/BoxSaldoInicial";
import { BoxSeguroCobrado } from "../../domain/BoxSeguroCobrado";
import { BoxUsuApertura } from "../../domain/BoxUsuApertura";
import { BoxUsuCierra } from "../../domain/BoxUsuCierra";

export class BoxUpdate {
  constructor(private boxRepository: BoxRepository) {}
  async run(
    codEmpresa: string,
    anio: string,
    mes: string,
    estado: string,
    nroMovimientos: number,
    saldoInicial: number,
    capitalPrestado: number,
    capitalCobrado: number,
    seguroCobrado: number,
    interesCobrado: number,
    moraCobrado: number,
    saldoFinal: number,
    usuApertura: string,
    usuCierra: string,
    fecApertura: Date,
    fecCierre: Date,
    cierreDiario: {
      diametro: string;
      estadoDia: string; //A=APERTURADO, C=CERRADO
      nroMovientosDia: number;
      saldoInicialDia: number;
      capitalPrestadoDia: number;
      capitalCobradoDia: number;
      seguroCobradoDia: number;
      interesCobradoDia: number;
      moraCobradoDia: number;
      saldoFinalDia: number;
      usuAperturaDia: string;
      usuCierraDia: string;
      fecAperturaDia: Date;
      fecCierreDia: Date;
    }[]
  ): Promise<void> {
    const box = new Box(
      new BoxCodEmpresa(codEmpresa),
      new BoxAnio(anio),
      new BoxMes(mes),
      new BoxEstado(estado),
      new BoxNroMovimientos(nroMovimientos),
      new BoxSaldoInicial(saldoInicial),
      new BoxCapitalPrestado(capitalPrestado),
      new BoxCapitalCobrado(capitalCobrado),
      new BoxSeguroCobrado(seguroCobrado),
      new BoxInteresCobrado(interesCobrado),
      new BoxMoraCobrado(moraCobrado),
      new BoxSaldoFinal(saldoFinal),
      new BoxUsuApertura(usuApertura),
      new BoxUsuCierra(usuCierra),
      new BoxFecApertura(fecApertura),
      new BoxFecCierre(fecCierre),
      cierreDiario.map(
        (c) =>
          new BoxCierreDiario(
            c.diametro,
            c.estadoDia, //A=APERTURADO, C=CERRADO
            c.nroMovientosDia,
            c.saldoInicialDia,
            c.capitalPrestadoDia,
            c.capitalCobradoDia,
            c.seguroCobradoDia,
            c.interesCobradoDia,
            c.moraCobradoDia,
            c.saldoFinalDia,
            c.usuAperturaDia,
            c.usuCierraDia,
            c.fecAperturaDia
          )
      )
    );
    const boxCodEmpresa = new BoxCodEmpresa(codEmpresa);
    const boxAnio = new BoxAnio(anio);
    const boxMes = new BoxMes(mes);
    const boxExist = await this.boxRepository.getById(
      boxCodEmpresa,
      boxAnio,
      boxMes
    );
    if (!boxExist) throw new Error("Caje not found");
    return await this.boxRepository.update(box);
  }
}
