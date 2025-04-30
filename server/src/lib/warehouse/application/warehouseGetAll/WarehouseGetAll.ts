import { Warehouse } from "../../domain/Warehouse";
import { WarehouseCodEmpresa } from "../../domain/WarehouseCodEmpresa";
import { WarehouseRepository } from "../../domain/WarehouseRepository";

export class WarehouseGetAll {
  constructor(private warehouseRepository: WarehouseRepository) {}
  async run(id: string): Promise<Warehouse[]> {
    const warehoseCodEmpresa = new WarehouseCodEmpresa(id);
    return await this.warehouseRepository.getAll(warehoseCodEmpresa);
  }
}
