import { Customer } from "../domain/Customer";
import { CustomerRepository } from "../domain/CustomerRepository";
import { Firebase } from "../../shared/infrastructure/firebase";
import { CustomerCodEmpresa } from "../domain/CustomerCodEmpresa";
import { CustomerNroDoc } from "../domain/CustomerNroDoc";
import { CustomerNomComercialCli } from "../domain/CustomerNomComercialCli";
import { CustomerRazonSocial } from "../domain/CustomerRazonSocial";
import { CustomerDireccion } from "../domain/CustomerDireccion";
import { CustomerPhone } from "../domain/CustomerPhone";
import { CustomerEmail } from "../domain/CustomerEmail";
import { CustomerGarante } from "../domain/CustomerGarante";
import { CustomerEvaluacion } from "../domain/CustomerEvaluacion";
import { CustomerTasaInteres } from "../domain/CustomerTasaInteres";
import { CustomerGetAll } from "../application/CustomerGetAll/CustomerGetAll";
import { CustomerTasaMora } from "../domain/CustomerTasaMora";
import { CustomerEstado } from "../domain/CustomerEstado";
import { CustomerGarantia } from "../domain/CustomerGarantia";
import { CustomerUsuario } from "../domain/CustomerUsuario";
import { CustomerObservaciones } from "../domain/CustomerObservaciones";
import { CustomerTipoDoc } from "../domain/CustomerTipoDoc";
import {
  collection,
  deleteDoc,
  doc,
  Firestore,
  getDoc,
  getDocs,
  query,
  setDoc,
  Timestamp,
  where,
} from "firebase/firestore";

type FirebaseCustomer = {
  codEmpresa: string;
  tipoDoc: string;
  nroDoc: number;
  nomComercialCli: string;
  razonSocial: string;
  direccion: string;
  phone: number;
  email: string;
  garante: string;
  evaluacion: string;
  tasaInteres: number;
  tasaMora: number;
  estado: string;
  garantia: string;
  usuario: string;
  observaciones: string;
};

export class FirebaseCustomerRepository implements CustomerRepository {
  db: Firestore;

  constructor() {
    const fb = new Firebase();
    this.db = fb.getFirebase();
  }

  async getAll(codEmpresa: CustomerCodEmpresa): Promise<Customer[]> {
    const q = query(
      collection(this.db, "customers"),
      where("codEmpresa", "==", codEmpresa.value)
    );
    const result = await getDocs(q);
    const customers: Customer[] = [];
    return result.docs.map((doc) => {
      return this.mapToDomain(doc.data() as FirebaseCustomer);
    });
  }

  async getById(id: string): Promise<Customer | null> {
    const docRef = doc(this.db, "customers", id);
    const result = await getDoc(docRef);
    if (!result.exists()) return null;
    return this.mapToDomain({
      codEmpresa: result.id,
      ...result.data(),
    } as FirebaseCustomer);
  }

  async create(customer: Customer): Promise<void> {
    const docRef = doc(this.db, "customers", customer.codEmpresa.value);
    await setDoc(docRef, {
      codEmpresa: customer.codEmpresa.value,
      tipoDoc: customer.tipoDoc.value,
      nroDoc: customer.nroDoc.value,
      nomComercialCli: customer.nomComercialCli.value,
      razonSocial: customer.RazónSocial.value,
      direccion: customer.dirección.value,
      phone: customer.phone.value,
      email: customer.Email.value,
      garante: customer.garante.value,
      evaluacion: customer.evaluación.value,
      tasaInteres: customer.tasaInteres.value,
      tasaMora: customer.tasaMora.value,
      estado: customer.estado.value,
      garantia: customer.garantía.value,
      usuario: customer.usuario.value,
      observaciones: customer.observaciones.value,
    });
  }
  async update(customer: Customer): Promise<void> {
    const docRef = doc(this.db, "customers", customer.codEmpresa.value);
    await setDoc(docRef, {
      codEmpresa: customer.codEmpresa.value,
      tipoDoc: customer.tipoDoc.value,
      nroDoc: customer.nroDoc.value,
      nomComercialCli: customer.nomComercialCli.value,
      razonSocial: customer.RazónSocial.value,
      direccion: customer.dirección.value,
      phone: customer.phone.value,
      email: customer.Email.value,
      garante: customer.garante.value,
      evaluacion: customer.evaluación.value,
      tasaInteres: customer.tasaInteres.value,
      tasaMora: customer.tasaMora.value,
      estado: customer.estado.value,
      garantia: customer.garantía.value,
      usuario: customer.usuario.value,
      observaciones: customer.observaciones.value,
    });
  }
  async delete(id: string): Promise<void> {
    const docRef = doc(this.db, "customers", id);
    await deleteDoc(docRef);
  }

  private mapToDomain(customer: FirebaseCustomer): Customer {
    return new Customer(
      new CustomerCodEmpresa(customer.codEmpresa),
      new CustomerTipoDoc(customer.tipoDoc),
      new CustomerNroDoc(customer.nroDoc.toString()),
      new CustomerNomComercialCli(customer.nomComercialCli),
      new CustomerRazonSocial(customer.razonSocial),
      new CustomerDireccion(customer.direccion),
      new CustomerPhone(customer.phone.toString()),
      new CustomerEmail(customer.email),
      new CustomerGarante(customer.garante),
      new CustomerEvaluacion(customer.evaluacion),
      new CustomerTasaInteres(customer.tasaInteres),
      new CustomerTasaMora(customer.tasaMora),
      new CustomerEstado(customer.estado),
      new CustomerGarantia(customer.garantia),
      new CustomerUsuario(customer.usuario),
      new CustomerObservaciones(customer.observaciones)
    );
  }
}
