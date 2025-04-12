import { Pay } from "../domain/Pay";
import { PayRepository } from "../domain/PayRepository";
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
import { PayCodPrestamo } from "../domain/PayCodPrestamo";
import { PayCodEmpresa } from "../domain/PayCodEmpresa";
import { PayNroCuota } from "../domain/PayNroCuota";
import { PayNroCuotas } from "../domain/PayNroCuotas";
import { PayNroDoc } from "../domain/PayNroDoc";
import { PayRazonSocial } from "../domain/PayRazonSocial";
import { PayGarante } from "../domain/PayGarante";
import { PayMonto } from "../domain/PayMonto";
import { PayFecVencimiento } from "../domain/PayFecVencimiento";
import { PayFecPago } from "../domain/PayFecPago";
import { PayDiasRetraso } from "../domain/PayDiasRetraso";
import { PayCapital } from "../domain/PayCapital";
import { PaySeguro } from "../domain/PaySeguro";
import { PayInteres } from "../domain/PayInteres";
import { PayTasaMora } from "../domain/PayTasaMora";
import { PayMora } from "../domain/PayMora";
import { PayTotalPagar } from "../domain/PayTotalPagar";
import { PayImporte } from "../domain/PayImporte";
import { PaySaldoCapital } from "../domain/PaySaldoCapital";
import { PayTipoPago } from "../domain/PayTipoPago";
import { PayObservaciones } from "../domain/PayObservaciones";
import { PayUsuario } from "../domain/PayUsuario";
import { PayFecCrea } from "../domain/PayFecCrea";

type FirebasePay = {
  codEmpresa: string;
  codPrestamo: number;
  nroCuota: number;
  nroCuotas: number;
  nroDoc: string;
  razonSocial: string;
  garante: string;
  monto: number;
  fecVencimiento: Date;
  fecPago: Date;
  diasRetraso: number;
  capital: number;
  seguro: number;
  interes: number;
  tasaMora: number;
  mora: number;
  totalPagar: number;
  importe: number;
  saldoCapital: number;
  tipoPago: string;
  observaciones: string;
  usuario: string;
  fecCrea: Date;
};

export class FirebasePayRepository implements PayRepository {
  db: Firestore;

  constructor() {
    this.db = new Firebase().getFirebase();
  }
  async create(pay: Pay): Promise<void> {
    const docRef = doc(this.db, "pays", pay.codPrestamo.value.toString());
    await setDoc(docRef, {
      codEmpresa: pay.codEmpresa,
      codPrestamo: pay.codPrestamo.value,
      nroCuota: pay.nroCuota,
      nroCuotas: pay.nroCuotas,
      nroDoc: pay.nroDoc,
      razonSocial: pay.razonSocial,
      garante: pay.garante,
      monto: pay.monto,
      fecVencimiento: pay.fecVencimiento.value,
      fecPago: pay.fecPago.value,
      diasRetraso: pay.diasRetraso,
      capital: pay.capital,
      seguro: pay.seguro,
      interes: pay.interes,
      tasaMora: pay.tasaMora,
      mora: pay.mora,
      totalPagar: pay.totalPagar.value,
      importe: pay.importe.value,
      saldoCapital: pay.saldoCapital.value,
      tipoPago: pay.tipoPago,
      observaciones: pay.observaciones,
      usuario: pay.usuario,
      fecCrea: pay.fecCrea,
    });
  }

  async getAll(): Promise<Pay[]> {
    const result = await getDocs(collection(this.db, "pays"));
    const tasks: PaymentAddress[] = [];
    return result.docs.map((doc): Pay => {
      return this.mapToDomain({
        codPrestamo: doc.data().codPrestamo,
        ...doc.data(),
      } as FirebasePay);
    });
  }

  async getById(
    codEmpresa: PayCodEmpresa,
    CodPrestamo: PayCodPrestamo
  ): Promise<Pay | null> {
    const id = codEmpresa.value + CodPrestamo.value;
    const docRef = doc(this.db, "pays", id);
    const result = await getDoc(docRef);
    if (!result.exists()) return null;
    return this.mapToDomain({
      codPrestamo: result.data().codPrestamo,
      ...result.data(),
    } as FirebasePay);
  }

  async update(pay: Pay): Promise<void> {
    const id = pay.codEmpresa.value + pay.codPrestamo.value;
    const docRef = doc(this.db, "pays", id);
    const result = await getDoc(docRef);
    if (!result.exists()) {
      throw new Error("Pay record not found");
    }
    // const result = await getDoc(docRef);
    await setDoc(docRef, result.data());
  }

  async delete(
    codEmpresa: PayCodEmpresa,
    CodPrestamo: PayCodPrestamo
  ): Promise<void> {
    const id = codEmpresa.value + CodPrestamo.value;
    const docRef = doc(this.db, "pays", id);
    await deleteDoc(docRef);
  }

  private mapToDomain(pay: FirebasePay): Pay {
    return new Pay(
      new PayCodEmpresa(pay.codEmpresa),
      new PayCodPrestamo(pay.codPrestamo),
      new PayNroCuota(pay.nroCuota),
      new PayNroCuotas(pay.nroCuotas),
      new PayNroDoc(pay.nroDoc),
      new PayRazonSocial(pay.razonSocial),
      new PayGarante(pay.garante),
      new PayMonto(pay.monto),
      new PayFecVencimiento(pay.fecVencimiento),
      new PayFecPago(pay.fecPago),
      new PayDiasRetraso(pay.diasRetraso),
      new PayCapital(pay.capital),
      new PaySeguro(pay.seguro),
      new PayInteres(pay.interes),
      new PayTasaMora(pay.tasaMora),
      new PayMora(pay.mora),
      new PayTotalPagar(pay.totalPagar),
      new PayImporte(pay.importe),
      new PaySaldoCapital(pay.saldoCapital),
      new PayTipoPago(pay.tipoPago),
      new PayObservaciones(pay.observaciones),
      new PayUsuario(pay.usuario),
      new PayFecCrea(pay.fecCrea) // Assuming fecCrea is a timestamp or date string
    );
  }
}
