import { Pay } from "./Pay";

export interface IPayRepository {
  getAll: (codEmpresa: string, codPrestamo: number) => Promise<Pay[]>;
  getById: (
    codEmpresa: string,
    codPrestamo: number,
    codPago: number
  ) => Promise<Pay | null>;
  save: (pay: Pay) => Promise<void>;
  delete: (
    codEmpresa: string,
    codPrestamo: number,
    codPago: number
  ) => Promise<void>;
  update: (pay: Pay) => Promise<Pay | null>;
}
