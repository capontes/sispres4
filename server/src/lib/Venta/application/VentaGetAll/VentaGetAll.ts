import { Venta } from "../../domain/Venta";
import { VentaCodEmpresa } from "../../domain/VentaCodEmpresa";
import { VentaFecEmision } from "../../domain/VentaFecEmision";
import { VentaRepository } from "../../domain/VentaRepository";

export class VentaGetAll {
  constructor(private ventaRepository: VentaRepository) {}
  async run(
    codEmpresa: VentaCodEmpresa,
    VentaFecEmision: VentaFecEmision
  ): Promise<Venta[]> {
    return await this.ventaRepository.getAll(codEmpresa, VentaFecEmision);
  }
}
