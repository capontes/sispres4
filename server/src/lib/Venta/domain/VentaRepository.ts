import { Venta } from "./Venta";
import { VentaCodEmpresa } from "./VentaCodEmpresa";
import { VentaFecEmision } from "./VentaFecEmision";
import { VentaId } from "./VentaId";

export interface VentaRepository {
  getAll(
    codEmpresa: VentaCodEmpresa,
    fecEmision: VentaFecEmision
  ): Promise<Venta[]>;
  getById(id: VentaId): Promise<Venta | null>;
  create(venta: Venta): Promise<void>;
  update(venta: Venta): Promise<void>;
}
