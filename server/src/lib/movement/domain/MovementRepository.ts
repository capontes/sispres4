import { Movement } from "./Movement"; // Asegúrate de que la ruta sea correcta
import { MovementCodEmpresa } from "./MovementCodEmpresa";

export interface MovementRepository {
  getAll(codEmpresa: string, fecMovimiento: string): Promise<Movement[]>; // Cambia el tipo de retorno según tu modelo de datos
  getById(id: string): Promise<Movement | null>; // Cambia el tipo de retorno según tu modelo de datos
  create(movement: Movement): Promise<void>; // Cambia el tipo de parámetro según tu modelo de datos
  update(movement: Movement): Promise<void>; // Cambia el tipo de parámetro según tu modelo de datos
  delete(id: string): Promise<void>;
}

// export interface MovementRepository {
