import { Warehouse } from "./Warehouse";
import { WarehouseCodEmpresa } from "./WarehouseCodEmpresa";

export interface WarehouseRepository {
  getAll(codEmpresa: WarehouseCodEmpresa): Promise<Warehouse[]>;
  getById(id: string): Promise<any | null>;
  create(warehouse: Warehouse): Promise<void>;
  update(warehouse: Warehouse): Promise<void>;
  delete(id: string): Promise<void>;
}
