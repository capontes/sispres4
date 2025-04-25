import { Firebase } from "../../shared/infrastructure/firebase";
import { MovementRepository } from "../domain/MovementRepository";
import {
  collection,
  deleteDoc,
  doc,
  Firestore,
  getDoc,
  getDocs,
  setDoc,
  query,
  Timestamp,
  updateDoc,
  where,
} from "firebase/firestore";
import { Movement } from "../domain/Movement";
import { MovementCodEmpresa } from "../domain/MovementCodEmpresa";
// Removed incorrect import
import { MovementImporte } from "../domain/MovementImporte";
import { MovementNroOperaciones } from "../domain/MovementNroOperaciones";
import { MovementNroCuenta } from "../domain/MovementNroCuenta";
import { MovementeTipoDoc } from "../domain/MovementeTipoDoc";
import { MovementNroDoc } from "../domain/MovementNroDoc";
import { MovementRazonSocial } from "../domain/MovementRazon Social";
import { MovementTipoCuenta } from "../domain/MovementTipoCuenta";
import { MovementTipoOperacion } from "../domain/MovementTipoOperacion";
import { MovementFecMovimiento } from "../domain/MovementFecMovimiento";
import { MovementUsuario } from "../domain/MovementUsuario";
import { MovementObservaciones } from "../domain/MovementObservaciones";
import { MovementFecCrea } from "../domain/MovementFecCrea";

type FirebaseMovement = {
  codEmpresa: string;
  nroOperacion: number;
  nroCuenta: number;
  tipoDoc: string;
  nroDoc: string;
  razonSocial: string;
  tipoCuenta: string;
  tipoOperacion: string;
  fecMovimiento: Date;
  importe: number;
  fecCrea: Date;
  usuario: string;
  observaciones: string;
};

export class FirebaseMovementRepository implements MovementRepository {
  db: Firestore;

  constructor() {
    const fb = new Firebase();
    this.db = fb.getFirebase();
  }

  async getAll(codEmpresa: string): Promise<any[]> {
    const q = query(
      collection(this.db, "movements"),
      where("codEmpresa", "==", codEmpresa)
    );
    const result = await getDocs(q);
    const movements: Movement[] = [];
    return result.docs.map((doc): Movement => {
      return this.mapToDomain(doc.data() as FirebaseMovement);
    });
  }

  async getById(id: string): Promise<Movement | null> {
    const docRef = doc(this.db, "movements", id);
    const result = await getDoc(docRef);
    if (!result.exists()) return null;
    return this.mapToDomain(result.data() as FirebaseMovement);
  }

  async create(movement: any): Promise<void> {
    const id = movement.codEmpresa.value + movement.nroDoc.value;
    const docRef = doc(this.db, "movements", id);
    await setDoc(docRef, {
      codEmpresa: movement.codEmpresa.value,
      nroOperacion: movement.nroOperacion.value,
      nroCuenta: movement.nroCuenta.value,
      tipoDoc: movement.tipoDoc.value,
      nroDoc: movement.nroDoc.value,
      razonSocial: movement.razonSocial.value,
      tipoCuenta: movement.tipoCuenta.value,
      tipoOperacion: movement.tipoOperacion.value,
      fecMovimiento: movement.fecMovimiento.value,
      importe: movement.importe.value,
      fecCrea: movement.fecCrea.value,
      usuario: movement.usuario.value,
      observaciones: movement.observaciones.value,
    });
  }

  async update(movement: Movement): Promise<void> {
    const id = movement.codEmpresa.value + movement.nroDoc.value;
    const docRef = doc(this.db, "movements", id);
    await setDoc(docRef, {
      nroOperacion: movement.nroOperacion.value,
      nroCuenta: movement.nroCuenta.value,
      tipoDoc: movement.tipoDoc.value,
      razonSocial: movement.razonSocial.value,
      tipoCuenta: movement.tipoCuenta.value,
      tipoOperacion: movement.tipoOperacion.value,
      fecMovimiento: movement.fecMovimiento.value,
      importe: movement.importe.value,
      fecCrea: movement.fecCrea.value,
      usuario: movement.usuario.value,
      observaciones: movement.observaciones.value,
    });
  }

  async delete(id: string): Promise<void> {
    const docRef = doc(this.db, "movements", id);
    await deleteDoc(docRef);
  }

  private mapToDomain(movement: FirebaseMovement): Movement {
    return new Movement(
      new MovementCodEmpresa(movement.codEmpresa),
      new MovementNroOperaciones(movement.nroOperacion),
      new MovementNroCuenta(movement.nroCuenta),
      new MovementeTipoDoc(movement.tipoDoc),
      new MovementNroDoc(movement.nroDoc),
      new MovementRazonSocial(movement.razonSocial),
      new MovementTipoCuenta(movement.tipoCuenta),
      new MovementTipoOperacion(movement.tipoOperacion),
      new MovementFecMovimiento(movement.fecMovimiento),
      new MovementImporte(movement.importe),
      new MovementFecCrea(movement.fecCrea),
      new MovementUsuario(movement.usuario),
      new MovementObservaciones(movement.observaciones)
    );
  }
}
