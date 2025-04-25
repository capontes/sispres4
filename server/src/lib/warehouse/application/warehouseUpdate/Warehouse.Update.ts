import { Warehouse } from "../../domain/Warehouse";
import { WarehouseCodAlm } from "../../domain/WarehouseCodAlm";
import { WarehouseCodEmpresa } from "../../domain/WarehouseCodEmpresa";
import { WarehouseDireccion } from "../../domain/WarehouseDireccion";
import { WarehouseEstado } from "../../domain/WarehouseEstado";
import { WarehouseNomAlmacen } from "../../domain/WarehouseNomAlmacen";
import { WarehouseRepository } from "../../domain/WarehouseRepository";

export class WarehouseUpdate {
  constructor(private warehouseRepository: WarehouseRepository) {}
  async run(
    codEmpresa: string,
    codAlm: string,
    nomAlmacen: string,
    direccion: string,
    estado: string
  ): Promise<void> {
    const warehouse = new Warehouse(
      new WarehouseCodEmpresa(codEmpresa),
      new WarehouseCodAlm(codAlm),
      new WarehouseNomAlmacen(nomAlmacen),
      new WarehouseDireccion(direccion),
      new WarehouseEstado(estado)
    );
    const id = warehouse.codEmpresa.value + warehouse.codAlm.value;
    const warehouseExist = await this.warehouseRepository.getById(id);
    if (!warehouseExist) throw new Error("Almacen not found");
  }
}
