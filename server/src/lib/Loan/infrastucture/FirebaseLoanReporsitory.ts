import { Firebase } from "../../shared/infrastructure/firebase";
import {
  collection,
  deleteDoc,
  doc,
  Firestore,
  getDoc,
  getDocs,
  setDoc,
  Timestamp,
} from "firebase/firestore";
import { LoanRepository } from "../domain/LoanRepository";
import { Loan } from "../domain/Loan";
import { LoanCodEmpresa } from "../domain/LoanCodEmpresa";
import { LoanCodPrestamo } from "../domain/LoanCodPrestamo";
import { LoanNroDoc } from "../domain/LoanNroDoc";
import { LoanRazonSocial } from "../domain/LoanRazonSocial";
import { LoanCapital } from "../domain/LoanCapital";
import { LoanGarante } from "../domain/LoanGarante";
import { LoanTasaInteres } from "../domain/LoanTasaInteres";
import { LoanNroCuotas } from "../domain/LoanNroCuotas";
import { LoanSeguro } from "../domain/LoanSeguro";
import { LoanGastosAdministrativos } from "../domain/LoanGastosAdministrativos";
import { LoanFecProceso } from "../domain/LoanFecProceso";
import { LoanFecInicio } from "../domain/LoanFecInicio";
import { LoanEstado } from "../domain/LoanEstado";
import { LoanSaldoCapital } from "../domain/LoanSaldoCapital";
import { LoanObservaciones } from "../domain/LoanObservaciones";
import { LoanUsuario } from "../domain/LoanUsuario";
import { LoanFecCrea } from "../domain/LoanFecCrea";
import { LoanCuotas } from "../domain/LoanCuotas";

type FirebaseLoan = {
  codEmpresa: string;
  codPrestamo: number;
  nroDoc: string;
  razonSocial: string;
  garante: string;
  tasaInteres: number;
  capital: number;
  nroCuotas: number;
  seguro: number;
  gastosAdministrativos: number;
  fecProcedo: Timestamp;
  fecInicio: Timestamp;
  estado: string;
  saldoCapital: number;
  observaciones: string;
  usuario: string;
  fecCrea: Timestamp;
  cuotas: {
    nroCuota: number;
    fecVencimiento: Timestamp;
    monto: number;
    capital: number;
    seguro: number;
    interes: number;
    saldoCapital: number;
    mora: number;
    aInteres: number;
    aSeguro: number;
    aCapital: number;
  }[];
};

export class FirebaseLoanRepository implements LoanRepository {
  db: Firestore;

  constructor() {
    this.db = new Firebase().getFirebase();
  }

  async getAll(codEmpresa: LoanCodEmpresa): Promise<Loan[]> {
    const result = await getDocs(collection(this.db, "loans"));
    const loans: Loan[] = [];
    return result.docs.map((doc) => {
      return this.mapToDomain(doc.data() as FirebaseLoan);
    });
  }

  async getById(
    codEmpresa: LoanCodEmpresa,
    codPrestamo: LoanCodPrestamo
  ): Promise<Loan | null> {
    const id = codEmpresa.value + codPrestamo.value;
    const docRef = doc(this.db, "loans", id);
    const result = await getDoc(docRef);
    if (!result.exists()) return null;
    return this.mapToDomain({
      ...result.data(),
    } as FirebaseLoan);
  }

  async create(loan: Loan): Promise<void> {
    const id = loan.codEmpresa.value + loan.codPrestamo.value;
    const docRef = doc(this.db, "loans", id);
    await setDoc(docRef, loan);
  }
  async update(loan: Loan): Promise<void> {
    const id = loan.codEmpresa.value + loan.codPrestamo.value;
    const docRef = doc(this.db, "loans", id);
    await setDoc(docRef, loan);
  }

  async delete(
    codEmpresa: LoanCodEmpresa,
    codPrestamo: LoanCodPrestamo
  ): Promise<void> {
    const id = codEmpresa.value + codPrestamo.value;
    const docRef = doc(this.db, "loans", id);
    await deleteDoc(docRef);
  }

  private mapToDomain(loan: FirebaseLoan): Loan {
    return new Loan(
      new LoanCodEmpresa(loan.codEmpresa),
      new LoanCodPrestamo(loan.codPrestamo),
      new LoanNroDoc(loan.nroDoc),
      new LoanRazonSocial(loan.razonSocial),
      new LoanGarante(loan.garante),
      new LoanTasaInteres(loan.tasaInteres),
      new LoanCapital(loan.capital),
      new LoanNroCuotas(loan.nroCuotas),
      new LoanSeguro(loan.seguro),
      new LoanGastosAdministrativos(loan.gastosAdministrativos),
      new LoanFecProceso(loan.fecProcedo.toDate()),
      new LoanFecInicio(loan.fecInicio.toDate()),
      new LoanEstado(loan.estado),
      new LoanSaldoCapital(loan.saldoCapital),
      new LoanObservaciones(loan.observaciones),
      new LoanUsuario(loan.usuario),
      new LoanFecCrea(loan.fecCrea.toDate()),
      loan.cuotas.map(
        (c) =>
          new LoanCuotas(
            c.nroCuota,
            c.fecVencimiento.toDate(),
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
  }
}
