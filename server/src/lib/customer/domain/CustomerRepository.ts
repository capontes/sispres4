import { Customer } from "./Customer";
import { CustomerCodEmpresa } from "./CustomerCodEmpresa";

export interface CustomerRepository {
  getAll(codEmpresa: CustomerCodEmpresa): Promise<any[]>; // Cambia el tipo de retorno según tu modelo de datos
  getById(id: string): Promise<any | null>; // Cambia el tipo de retorno según tu modelo de datos
  create(customer: Customer): Promise<void>; // Cambia el tipo de parámetro según tu modelo de datos
  update(customer: Customer): Promise<void>; // Cambia el tipo de parámetro según tu modelo de datos
  delete(id: string): Promise<void>;
}
