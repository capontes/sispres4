import { Warehouse } from "../../domain/Warehouse";
import { WarehouseRepository } from "../../domain/WarehouseRepository";

export class WarehouseGetById {
  constructor(private warehouseRepository: WarehouseRepository) {}
  async run(id: string): Promise<Warehouse | null> {
    const warehouse = await this.warehouseRepository.getById(id);
    if (!warehouse) throw new Error("Almacem not found");
    return warehouse;
  }
}
