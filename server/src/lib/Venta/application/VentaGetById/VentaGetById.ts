import { Venta } from "../../domain/Venta";
import { VentaId } from "../../domain/VentaId";
import { VentaRepository } from "../../domain/VentaRepository";

export class VentaGetById {
  constructor(private ventaRepository: VentaRepository) {}
  async run(id: VentaId): Promise<Venta> {
    const venta = await this.ventaRepository.getById(id);
    if (!venta) throw new Error("Venta no encontada");
    return venta;
  }
}
