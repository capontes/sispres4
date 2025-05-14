import { Account } from "../domain/Account";
import {
  collection,
  query,
  doc,
  Firestore,
  getDoc,
  where,
  setDoc,
  deleteDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { AccountRepository } from "../domain/AccountRepository";
import { Firebase } from "../../shared/infrastructure/firebase";
import { AccountCodEmpresa } from "../domain/AccountCodEmpresa";
import { AccountNroCuenta } from "../domain/AccountNroCuenta";
import { AccountNroDoc } from "../domain/AccountNroDoc";
import { AccountRazonSocial } from "../domain/AccountRazonSocial";
import { AccountFecApertura } from "../domain/AccountFecApertura";
import { AccountTipoCuenta } from "../domain/AccountTipoCuenta";
import { AccountMoneda } from "../domain/AccountMoneda";
import { AccountCapital } from "../domain/AccountCapital";
import { AccountFecRegenera } from "../domain/AccountFecRegenera";
import { AccountModoInteres } from "../domain/AccountModoInteres";
import { AccountTasaInteres } from "../domain/AccountTasaInteres";
import { AccountDiaGeneraInteres } from "../domain/AccountDiaGeneraInteres";
import { AccountFecMinCierre } from "../domain/AccountFecMinCierre";
import { AccountInteres } from "../domain/AccountInteres";
import { AccountAInteres } from "../domain/AccountAInteres";
import { AccountPenalizidad } from "../domain/AccountPenalizidad";
import { AccountLiquidacion } from "../domain/AccountLiquidacion";
import { AccountSaldo } from "../domain/AccountSaldo";
import { AccountASaldo } from "../domain/AccountASaldo";
import { AccountFecCrea } from "../domain/AccountFecCrea";
import { AccountEstado } from "../domain/AccountEstado";
import { AccountUsuario } from "../domain/AccountUsuario";
import { AccountObservaciones } from "../domain/AccountObservaciones";

type FirebaseAccount = {
  codEmpresa: string;
  nroCuenta: number;
  nroDoc: string;
  razonSocial: string;
  fecApertura: Date;
  tipoCuenta: string;
  moneda: string;
  capital: number;
  fecRegenera: Date;
  modoInteres: string;
  tasaInteres: number;
  diaGeneraInteres: number;
  fecMinCierre: Date;
  interes: number;
  aInteres: number;
  penalizidad: string;
  liquidacion: number;
  saldo: number;
  aSaldo: number;
  fecCrea: Date;
  estado: string;
  usuario: string;
  observaciones: string;
};

export class FirebaseAccountRepository implements AccountRepository {
  db: Firestore;

  constructor() {
    const fb = new Firebase();
    this.db = fb.getFirebase();
  }

  async getAll(codEmpresa: AccountCodEmpresa): Promise<any[]> {
    const q = query(
      collection(this.db, "accounts"),
      where("codEmpresa", "==", codEmpresa.value)
    );
    const result = await getDocs(q);
    const accounts: Account[] = [];
    return result.docs.map((doc) => {
      return this.mapToDomain(doc.data() as FirebaseAccount);
    });
  }

  async getById(id: string): Promise<Account | null> {
    const docRef = doc(this.db, "accounts", id);
    const result = await getDoc(docRef);
    if (!result.exists()) return null;
    return this.mapToDomain(result.data() as FirebaseAccount);
  }

  async create(account: Account): Promise<void> {
    const id = account.codEmpresa.value + account.nroDoc.value;
    const docRef = doc(this.db, "accounts", id);
    await setDoc(docRef, {
      codEmpresa: account.codEmpresa.value,
      nroCuenta: account.nroCuenta.value,
      nroDoc: account.nroDoc.value,
      razonSocial: account.razonSocial.value,
      fecApertura: account.fecApertura.value,
      tipoCuenta: account.tipoCuenta.value,
      moneda: account.moneda.value,
      capital: account.aSaldo.value,
      fecRegenera: account.fecRegenera.value,
      modoInteres: account.modoInteres.value,
      tasaInteres: account.tasaInteres.value,
      diaGeneraInteres: account.diaGeneraInteres.value,
      fecMinCierre: account.fecMinCierre.value,
      interes: account.interes.value,
      aInteres: account.aInteres.value,
      penalizidad: account.penalizidad.value,
      liquidacion: account.liquidacion.value,
      saldo: account.saldo.value,
      aSaldo: account.aSaldo.value,
      fecCrea: account.fecCrea.value,
      estado: account.estado.value,
      usuario: account.usuario.value,
      observaciones: account.observaciones.value,
    });
  }

  async update(account: Account): Promise<void> {
    const id = account.codEmpresa.value + account.nroDoc.value;
    const docRef = doc(this.db, "accounts", id);
    await updateDoc(docRef, {
      nroCuenta: account.nroCuenta.value,
      razonSocial: account.razonSocial.value,
      fecApertura: account.fecApertura.value,
      tipoCuenta: account.tipoCuenta.value,
      moneda: account.moneda.value,
      capital: account.aSaldo.value,
      fecRegenera: account.fecRegenera.value,
      modoInteres: account.modoInteres.value,
      tasaInteres: account.tasaInteres.value,
      diaGeneraInteres: account.diaGeneraInteres.value,
      fecMinCierre: account.fecMinCierre.value,
      interes: account.interes.value,
      aInteres: account.aInteres.value,
      penalizidad: account.penalizidad.value,
      liquidacion: account.liquidacion.value,
      saldo: account.saldo.value,
      aSaldo: account.aSaldo.value,
      fecCrea: account.fecCrea.value,
      estado: account.estado.value,
      usuario: account.usuario.value,
      observaciones: account.observaciones.value,
    });
  }

  async delete(id: string): Promise<void> {
    const docRef = doc(this.db, "accounts", id);
    await deleteDoc(docRef);
  }

  private mapToDomain(account: FirebaseAccount): Account {
    return new Account(
      new AccountCodEmpresa(account.codEmpresa),
      new AccountNroCuenta(account.nroCuenta),
      new AccountNroDoc(account.nroDoc),
      new AccountRazonSocial(account.razonSocial),
      new AccountFecApertura(account.fecApertura),
      new AccountTipoCuenta(account.tipoCuenta),
      new AccountMoneda(account.moneda),
      new AccountCapital(account.capital),
      new AccountFecRegenera(account.fecRegenera),
      new AccountModoInteres(account.modoInteres),
      new AccountTasaInteres(account.tasaInteres),
      new AccountDiaGeneraInteres(account.diaGeneraInteres),
      new AccountFecMinCierre(account.fecMinCierre),
      new AccountInteres(account.interes),
      new AccountAInteres(account.aInteres),
      new AccountPenalizidad(account.penalizidad),
      new AccountLiquidacion(account.liquidacion),
      new AccountSaldo(account.saldo),
      new AccountASaldo(account.aSaldo),
      new AccountFecCrea(account.fecCrea),
      new AccountEstado(account.estado),
      new AccountUsuario(account.usuario),
      new AccountObservaciones(account.observaciones)
    );
  }
}
