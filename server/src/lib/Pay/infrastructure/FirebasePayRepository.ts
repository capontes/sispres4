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

type FirebaseTask = {
    codEmpresa: string,
    codPrestamo: number,
    nroCuota: number,
    nroCuotas: number,
    nroDoc: string,
    razonSocial: string,
    garante: string,
    monto: number,
    fecVencimiento: Date,
    fecPago: Date,
    diasRetraso: number,
    capital: number,
    seguro: number,
    interes: number,
    tasaMora: number,
    mora: number,
    totalPagar: number,
    importe: number,
    saldoCapital: number,
    tipoPago: string,
    observaciones: string,
    usuario: string,
    fecCrea: Date
 
};


export class FirebasePayRepository implements PayRepository {
  db: Firestore;

  constructor() {
    this.db = new Firebase().getFirebase();
  }
    async create(pay: Pay): Promise<void> {
        const docRef = doc(this.db, "Pays", pay.codPrestamo.value.toString());
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
    getAll(): Promise<Pay[]> {
        throw new Error("Method not implemented.");
    }
    getById(CodPrestamo: PayCodPrestamo): Promise<Pay | null> {
        throw new Error("Method not implemented.");
    }
    update(Pay: PayCodPrestamo): Promise<void> {
        throw new Error("Method not implemented.");
    }
    delete(CodPrestamo: PayCodPrestamo): Promise<void> {
        throw new Error("Method not implemented.");
    }
}
  async getAll(): Promise<Pay[]> {
    const result = await getDocs(collection(this.db, "Pays"));
    const tasks: PaymentAddress[] = [];
    return result.docs.map((doc): Pay => {
      return this.mapToDomain({ codPrestamo: doc.data().codPrestamo, ...doc.data() } as FirebaseTask);
    });
  }

  async getById(CodPrestamo: PayCodPrestamo): Promise<Pay | null> {
    const docRef = doc(this.db, "Pays", CodPrestamo.value.toString());
    const result = await getDoc(docRef);
    if (!result.exists()) return null;
    return this.mapToDomain({
     codPrestamo: result.data().codPrestamo,
      ...result.data(),
    } as FirebaseTask
    );
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
        capital: pay.capital, // Ensure 'pay.capital' is the correct property or adjust as needed
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
  async update(payCodPrestamo: PayCodPrestamo): Promise<void> {
    const docRef = doc(this.db, "Pays", payCodPrestamo.value.toString());
    const result = await getDoc(docRef);
    if (!result.exists()) {
      throw new Error("Pay record not found");
    }
    const result = await getDoc(docRef);
    const payData = result.data();
    await setDoc(docRef, {
        ...payData,
        updatedAt: new Date(), // Example of updating a timestamp field
    });
  }

  async delete(codPrestamo: PayCodPrestamo): Promise<void> {
    const docRef = doc(this.db, "tasks", codPrestamo.value.toString());
    await deleteDoc(docRef);
  }

  private mapToDomain(pay: FirebasePay): Pay {
    return new Pay( 
        new   pay.codEmpresa,
        new   pay.codPrestamo,
        new   pay.nroCuota,
        new   pay.nroCuotas,
        new   pay.nroDoc,
        new   pay.razonSocial,
        new   pay.garante,
        new   pay.monto,
        new   pay.fecVencimiento,
        new   pay.fecPago,
        new   pay.diasRetraso,
        new   pay.capital,
        new   pay.seguro,
        new   pay.interes,
        new   pay.tasaMora,
        new   pay.mora,
        new   pay.totalPagar,
        new   pay.importe,
        new   pay.saldoCapital,
        new   pay.tipoPago,
        new   pay.observaciones,
        new   pay.usuario,
        new  Date(pay.fecCrea), // Assuming fecCrea is a timestamp or date string
      
    );
}
    function mapToDomain(pay: any, FirebasePayRepository: typeof FirebasePayRepository) {
        throw new Error("Function not implemented.");
    }

