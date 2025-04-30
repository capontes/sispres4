import { Warehouse } from "../domain/Warehouse";
import { WarehouseRepository } from "../domain/WarehouseRepository";

export class InMemoryWarehouseRepository implements WarehouseRepository {
  private warehouses: Warehouse[] = [];

  private warehouse: Warehouse[] = [];

  async create(warehouse: Warehouse): Promise<void> {
    this.warehouse.push(warehouse);
  }

  async getAll(): Promise<Warehouse[]> {
    return this.warehouse;
  }

  async getById(id: string): Promise<Warehouse | null> {
    const warehouse = this.warehouse.find(
      (warehouse) => warehouse.codEmpresa.value == id
    );
    return warehouse || null;
  }

  async update(warehouse: Warehouse): Promise<void> {
    const index = this.warehouse.findIndex(
      (u) => u.codEmpresa.value === warehouse.codEmpresa.value
    );
    if (index! == -1) {
    } else {
      throw new Error(`Àlmacen with id ${warehouse.codEmpresa} not found`);
    }
  }

  async delete(id: string): Promise<void> {
    this.warehouse = this.warehouse.filter(
      (warehouse) => warehouse.codEmpresa.value !== id
    );
  }
}
