import {
  collection,
  Firestore,
  getDocs,
  where,
  query,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { EnterpriseRepository } from "../domain/EnterpriseRepository";
import { Firebase } from "../../shared/infrastructure/firebase";
import { Enterprise } from "../domain/Enterprise";
import { EnterpriseCodEmpresa } from "../domain/EnterpriseCodEmpresa";
import { EnterpriseRazonSocial } from "../domain/EnterpriseRazonSocial";
import { EnterpriseParametros } from "../domain/EnterpriseParametros";

type FirebaseEnterprise = {
  codEmpresa: string;
  razonSocial: string;
  parametros: {
    codParam: string;
    desParam: string;
    tipo: string;
    valParam: string;
  }[];
};

export class FirebaseEnterpriseRepository implements EnterpriseRepository {
  db: Firestore;

  constructor() {
    this.db = new Firebase().getFirebase();
  }

  async getAll(codEmpresa: EnterpriseCodEmpresa): Promise<Enterprise[]> {
    const q = query(
      collection(this.db, "Enterprise"),
      where("codEmpresa", "==", codEmpresa.value)
    );
    const result = await getDocs(q);
    const enterprise: Enterprise[] = [];
    return result.docs.map((doc) => {
      return this.mapToDomain(doc.data() as FirebaseEnterprise);
    });
  }

  async getById(codEmpresa: EnterpriseCodEmpresa): Promise<Enterprise | null> {
    const id = codEmpresa.value;
    const docRef = doc(this.db, "enterprise", id);
    const result = await getDoc(docRef);
    if (!result.exists()) return null;
    return this.mapToDomain({
      ...result.data(),
    } as FirebaseEnterprise);
  }

  async create(enterprise: Enterprise): Promise<void> {
    const id = enterprise.codEmpresa.value;
    const docRef = doc(this.db, "enterprise", id);
    await setDoc(docRef, {
      codEmpresa: enterprise.codEmpresa.value,
      razonSocial: enterprise.razonSocial.value,
      parametros: enterprise.parametros.map((e) => ({
        codParam: e.codParam,
        desParam: e.desParam,
        tipo: e.tipo,
        valParam: e.valParam,
      })),
    });
  }

  async update(enterprise: Enterprise): Promise<void> {
    const id = enterprise.codEmpresa.value;
    const docRef = doc(this.db, "enterprise", id);
    await updateDoc(docRef, {
      razonSocial: enterprise.razonSocial.value,
      parametros: enterprise.parametros.map((e) => ({
        codParam: e.codParam,
        desParam: e.desParam,
        tipo: e.tipo,
        valParam: e.valParam,
      })),
    });
  }

  async delete(codEmpresa: EnterpriseCodEmpresa): Promise<void> {
    const id = codEmpresa.value;
    const docRef = doc(this.db, "enterprise", id);
    await deleteDoc(docRef);
  }

  private mapToDomain(enterprise: FirebaseEnterprise): Enterprise {
    return new Enterprise(
      new EnterpriseCodEmpresa(enterprise.codEmpresa),
      new EnterpriseRazonSocial(enterprise.razonSocial),
      enterprise.parametros.map(
        (e) =>
          new EnterpriseParametros(e.codParam, e.desParam, e.tipo, e.valParam)
      )
    );
  }
}
