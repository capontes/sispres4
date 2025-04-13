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
  updateDoc,
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
  fecVencimiento: Timestamp;
  fecPago: Timestamp;
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
  fecCrea: Timestamp;
};

export class FirebasePayRepository implements PayRepository {
  db: Firestore;

  constructor() {
    this.db = new Firebase().getFirebase();
  }
  async create(pay: Pay): Promise<void> {
    const id = pay.codEmpresa.value + pay.codPrestamo.value;
    const docRef = doc(this.db, "pays", id);
    await setDoc(docRef, {
      codEmpresa: pay.codEmpresa.value,
      codPrestamo: pay.codPrestamo.value,
      nroCuota: pay.nroCuota.value,
      nroCuotas: pay.nroCuotas.value,
      nroDoc: pay.nroDoc.value,
      razonSocial: pay.razonSocial.value,
      garante: pay.garante.value,
      monto: pay.monto.value,
      fecVencimiento: pay.fecVencimiento.value,
      fecPago: pay.fecPago.value,
      diasRetraso: pay.diasRetraso.value,
      capital: pay.capital.value,
      seguro: pay.seguro.value,
      interes: pay.interes.value,
      tasaMora: pay.tasaMora.value,
      mora: pay.mora.value,
      totalPagar: pay.totalPagar.value,
      importe: pay.importe.value,
      saldoCapital: pay.saldoCapital.value,
      tipoPago: pay.tipoPago.value,
      observaciones: pay.observaciones.value,
      usuario: pay.usuario.value,
      fecCrea: pay.fecCrea.value,
    });
  }

  async getAll(): Promise<Pay[]> {
    const result = await getDocs(collection(this.db, "pays"));
    const tasks: PaymentAddress[] = [];
    return result.docs.map((doc): Pay => {
      return this.mapToDomain({
        ...doc.data(),
      } as FirebasePay);
    });
  }

  async getById(id: string): Promise<Pay | null> {
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
    await updateDoc(docRef, {
      nroCuota: pay.nroCuota.value,
      nroCuotas: pay.nroCuotas.value,
      nroDoc: pay.nroDoc.value,
      razonSocial: pay.razonSocial.value,
      garante: pay.garante.value,
      monto: pay.monto.value,
      fecVencimiento: pay.fecVencimiento.value,
      fecPago: pay.fecPago.value,
      diasRetraso: pay.diasRetraso.value,
      capital: pay.capital.value,
      seguro: pay.seguro.value,
      interes: pay.interes.value,
      tasaMora: pay.tasaMora.value,
      mora: pay.mora.value,
      totalPagar: pay.totalPagar.value,
      importe: pay.importe.value,
      saldoCapital: pay.saldoCapital.value,
      tipoPago: pay.tipoPago.value,
      observaciones: pay.observaciones.value,
      usuario: pay.usuario.value,
      fecCrea: pay.fecCrea.value,
    });
  }

  async delete(id: string): Promise<void> {
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
      new PayFecVencimiento(pay.fecVencimiento.toDate()),
      new PayFecPago(pay.fecPago.toDate()),
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
      new PayFecCrea(pay.fecCrea.toDate()) // Assuming fecCrea is a timestamp or date string
    );
  }
}
