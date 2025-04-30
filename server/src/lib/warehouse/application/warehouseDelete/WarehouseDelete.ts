import { WarehouseRepository } from "../../domain/WarehouseRepository";

export class WarehouseDelete {
  constructor(private warehouseRepository: WarehouseRepository) {}
  async run(id: string): Promise<void> {
    const warehouseExist = await this.warehouseRepository.getById(id);
    if (!warehouseExist) throw new Error("Almacen not found");
    return await this.warehouseRepository.delete(id);
  }
}
