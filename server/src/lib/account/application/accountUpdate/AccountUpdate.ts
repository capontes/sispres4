import { Account } from "../../domain/Account";
import { AccountAInteres } from "../../domain/AccountAInteres";
import { AccountASaldo } from "../../domain/AccountASaldo";
import { AccountCapital } from "../../domain/AccountCapital";
import { AccountCodEmpresa } from "../../domain/AccountCodEmpresa";
import { AccountDiaGeneraInteres } from "../../domain/AccountDiaGeneraInteres";
import { AccountEstado } from "../../domain/AccountEstado";
import { AccountFecApertura } from "../../domain/AccountFecApertura";
import { AccountFecCrea } from "../../domain/AccountFecCrea";
import { AccountFecMinCierre } from "../../domain/AccountFecMinCierre";
import { AccountFecRegenera } from "../../domain/AccountFecRegenera";
import { AccountInteres } from "../../domain/AccountInteres";
import { AccountLiquidacion } from "../../domain/AccountLiquidacion";
import { AccountModoInteres } from "../../domain/AccountModoInteres";
import { AccountMoneda } from "../../domain/AccountMoneda";
import { AccountNroCuenta } from "../../domain/AccountNroCuenta";
import { AccountNroDoc } from "../../domain/AccountNroDoc";
import { AccountObservaciones } from "../../domain/AccountObservaciones";
import { AccountPenalizidad } from "../../domain/AccountPenalizidad";
import { AccountRazonSocial } from "../../domain/AccountRazonSocial";
import { AccountRepository } from "../../domain/AccountRepository";
import { AccountSaldo } from "../../domain/AccountSaldo";
import { AccountTasaInteres } from "../../domain/AccountTasaInteres";
import { AccountTipoCuenta } from "../../domain/AccountTipoCuenta";
import { AccountUsuario } from "../../domain/AccountUsuario";

export class AccountUpdate {
  constructor(private accountRepository: AccountRepository) {}
  async run(
    codEmpresa: string,
    nroCuenta: number,
    nroDoc: string,
    razonSocial: string,
    fecApertura: Date,
    tipoCuenta: string,
    moneda: string,
    capital: number,
    fecRegenera: Date,
    modoInteres: string,
    tasaInteres: number,
    diaGeneraInteres: number,
    fecMinCierre: Date,
    interes: number,
    aInteres: number,
    penalizidad: string,
    liquidacion: number,
    saldo: number,
    aSaldo: number,
    fecCrea: Date,
    estado: string,
    usuario: string,
    observaciones: string
  ): Promise<void> {
    const account = new Account(
      new AccountCodEmpresa(codEmpresa),
      new AccountNroCuenta(nroCuenta),
      new AccountNroDoc(nroDoc),
      new AccountRazonSocial(razonSocial),
      new AccountFecApertura(fecApertura),
      new AccountTipoCuenta(tipoCuenta),
      new AccountMoneda(moneda),
      new AccountCapital(capital),
      new AccountFecRegenera(fecRegenera),
      new AccountModoInteres(modoInteres),
      new AccountTasaInteres(tasaInteres),
      new AccountDiaGeneraInteres(diaGeneraInteres),
      new AccountFecMinCierre(fecMinCierre),
      new AccountInteres(interes),
      new AccountAInteres(aInteres),
      new AccountPenalizidad(penalizidad),
      new AccountLiquidacion(liquidacion),
      new AccountSaldo(saldo),
      new AccountASaldo(aSaldo),
      new AccountFecCrea(fecCrea),
      new AccountEstado(estado),
      new AccountUsuario(usuario),
      new AccountObservaciones(observaciones)
    );
    const id = account.codEmpresa.value + account.nroDoc.value;
    const accountExist = await this.accountRepository.getById(id);
    if (!accountExist) throw new Error("Cuenta not Found");
    return await this.accountRepository.update(account);
  }
}
