import {
  collection,
  deleteDoc,
  query,
  doc,
  Firestore,
  getDoc,
  getDocs,
  setDoc,
  where,
} from "firebase/firestore";
import { WarehouseRepository } from "../domain/WarehouseRepository";
import { Firebase } from "../../shared/infrastructure/firebase";
import { WarehouseCodEmpresa } from "../domain/WarehouseCodEmpresa";
import { Warehouse } from "../domain/Warehouse";
import { WarehouseCodAlm } from "../domain/WarehouseCodAlm";
import { WarehouseNomAlmacen } from "../domain/WarehouseNomAlmacen";
import { WarehouseDireccion } from "../domain/WarehouseDireccion";
import { WarehouseEstado } from "../domain/WarehouseEstado";

type FirebaseWarehouse = {
  codEmpresa: string;
  codAlm: string;
  nomAlmacen: string;
  direccion: string;
  estado: string;
};

export class FirebaseWarehouseRepository implements WarehouseRepository {
  db: Firestore;

  constructor() {
    const fb = new Firebase();
    this.db = fb.getFirebase();
  }

  async getAll(codEmpresa: WarehouseCodEmpresa): Promise<any[]> {
    const q = query(
      collection(this.db, "warehouse"),
      where("codEmpleado", "==", codEmpresa)
    );
    const result = await getDocs(q);
    const warehouse: Warehouse[] = [];
    return result.docs.map((doc) => {
      return this.mapToDomain(doc.data() as FirebaseWarehouse);
    });
  }

  async getById(id: string): Promise<any | null> {
    const docRef = doc(this.db, "warehouse", id);
    const result = await getDoc(docRef);
    if (!result.exists()) return null;
    return this.mapToDomain(result.data() as FirebaseWarehouse);
  }

  async create(warehouse: Warehouse): Promise<void> {
    const id = warehouse.codEmpresa.value + warehouse.codAlm.value;
    const docRef = doc(this.db, "warehouse", id);
    await setDoc(docRef, {
      codEmpresa: warehouse.codEmpresa.value,
      codAlm: warehouse.codAlm.value,
      nomAlmacen: warehouse.nomAlmacen.value,
      direccion: warehouse.direccion.value,
      estado: warehouse.estado.value,
    });
  }

  async update(warehouse: Warehouse): Promise<void> {
    const id = warehouse.codEmpresa.value + warehouse.codAlm.value;
    const docRef = doc(this.db, "warehouse", id);
    await setDoc(docRef, {
      nomAlmacen: warehouse.nomAlmacen.value,
      direccion: warehouse.direccion.value,
      estado: warehouse.estado.value,
    });
  }

  async delete(id: string): Promise<void> {
    const docRef = doc(this.db, "warehouse", id);
    await deleteDoc(docRef);
  }

  private mapToDomain(warehouse: FirebaseWarehouse): Warehouse {
    return new Warehouse(
      new WarehouseCodEmpresa(warehouse.codEmpresa),
      new WarehouseCodAlm(warehouse.codAlm),
      new WarehouseNomAlmacen(warehouse.nomAlmacen),
      new WarehouseDireccion(warehouse.direccion),
      new WarehouseEstado(warehouse.estado)
    );
  }
}
