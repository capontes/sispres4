import { Loan } from "../../domain/Loan";
import { LoanCapital } from "../../domain/LoanCapital";
import { LoanCodEmpresa } from "../../domain/LoanCodEmpresa";
import { LoanCodPrestamo } from "../../domain/LoanCodPrestamo";
import { LoanCuotas } from "../../domain/LoanCuotas";
import { LoanEstado } from "../../domain/LoanEstado";
import { LoanFecCrea } from "../../domain/LoanFecCrea";
import { LoanFecInicio } from "../../domain/LoanFecInicio";
import { LoanFecProceso } from "../../domain/LoanFecProceso";
import { LoanGarante } from "../../domain/LoanGarante";
import { LoanGastosAdministrativos } from "../../domain/LoanGastosAdministrativos";
import { LoanNroCuotas } from "../../domain/LoanNroCuotas";
import { LoanNroDoc } from "../../domain/LoanNroDoc";
import { LoanObservaciones } from "../../domain/LoanObservaciones";
import { LoanRazonSocial } from "../../domain/LoanRazonSocial";
import { LoanRepository } from "../../domain/LoanRepository";
import { LoanSaldoCapital } from "../../domain/LoanSaldoCapital";
import { LoanSeguro } from "../../domain/LoanSeguro";
import { LoanTasaInteres } from "../../domain/LoanTasaInteres";
import { LoanUsuario } from "../../domain/LoanUsuario";

export class LoanUpdate {
  constructor(private loanRepository: LoanRepository) {}
  async run(
    codEmpresa: string,
    codPrestamo: number,
    nroDoc: string,
    razonSocial: string,
    garante: string,
    tasaInteres: number,
    capital: number,
    nroCuotas: number,
    seguro: number,
    gastosAdministrativos: number,
    fecProcedo: Date,
    fecInicio: Date,
    estado: string,
    saldoCapital: number,
    observaciones: string,
    usuario: string,
    fecCrea: Date,
    cuotas: {
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
    }[]
  ): Promise<void> {
    const loan = new Loan(
      new LoanCodEmpresa(codEmpresa),
      new LoanCodPrestamo(codPrestamo),
      new LoanNroDoc(nroDoc),
      new LoanRazonSocial(razonSocial),
      new LoanGarante(garante),
      new LoanTasaInteres(tasaInteres),
      new LoanCapital(capital),
      new LoanNroCuotas(nroCuotas),
      new LoanSeguro(seguro),
      new LoanGastosAdministrativos(gastosAdministrativos),
      new LoanFecProceso(fecProcedo),
      new LoanFecInicio(fecInicio),
      new LoanEstado(estado),
      new LoanSaldoCapital(saldoCapital),
      new LoanObservaciones(observaciones),
      new LoanUsuario(usuario),
      new LoanFecCrea(fecCrea),
      cuotas.map(
        (c) =>
          new LoanCuotas(
            c.nroCuota,
            c.fecVencimiento,
            c.monto,
            c.capital,
            c.seguro,
            c.interes,
            c.saldoCapital,
            c.mora,
            c.aInteres,
            c.aSeguro,
            c.aCapital
          )
      )
    );
    const loanCodEmpresa = new LoanCodEmpresa(codEmpresa);
    const loanCodPrestamo = new LoanCodPrestamo(codPrestamo);
    const loanExist = await this.loanRepository.getById(
      loanCodEmpresa,
      loanCodPrestamo
    );
    if (!loanExist) throw new Error("Préstamo not found");

    return await this.loanRepository.update(loan);
  }
}
