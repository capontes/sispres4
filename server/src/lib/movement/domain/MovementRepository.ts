import { Movement } from "./Movement"; // Asegúrate de que la ruta sea correcta
import { MovementCodEmpresa } from "./MovementCodEmpresa";

export interface MovementRepository {
  getAll(codEmpresa: string): Promise<any[]>; // Cambia el tipo de retorno según tu modelo de datos
  getById(id: string): Promise<any | null>; // Cambia el tipo de retorno según tu modelo de datos
  create(movement: any): Promise<void>; // Cambia el tipo de parámetro según tu modelo de datos
  update(movement: any): Promise<void>; // Cambia el tipo de parámetro según tu modelo de datos
  delete(id: string): Promise<void>;
}

// export interface MovementRepository {
