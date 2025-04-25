import { WarehouseCodAlm } from "./WarehouseCodAlm";
import { WarehouseCodEmpresa } from "./WarehouseCodEmpresa";
import { WarehouseDireccion } from "./WarehouseDireccion";
import { WarehouseEstado } from "./WarehouseEstado";
import { WarehouseNomAlmacen } from "./WarehouseNomAlmacen";

export class Warehouse {
  codEmpresa: WarehouseCodEmpresa;
  codAlm: WarehouseCodAlm;
  nomAlmacen: WarehouseNomAlmacen;
  direccion: WarehouseDireccion;
  estado: WarehouseEstado;

  constructor(
    codEmpresa: WarehouseCodEmpresa,
    codAlm: WarehouseCodAlm,
    nomAlmacen: WarehouseNomAlmacen,
    direccion: WarehouseDireccion,
    estado: WarehouseEstado
  ) {
    this.codEmpresa = codEmpresa;
    this.codAlm = codAlm;
    this.nomAlmacen = nomAlmacen;
    this.direccion = direccion;
    this.estado = estado;
  }
  public mapTopPrimitives() {
    return {
      codEmpresa: this.codEmpresa.value,
      codAlm: this.codAlm.value,
      nomAlmacen: this.nomAlmacen.value,
      direccion: this.direccion.value,
      estado: this.estado.value,
    };
  }
}
