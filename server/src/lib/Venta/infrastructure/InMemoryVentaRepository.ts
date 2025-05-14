import { Venta } from "../domain/Venta";
import { VentaCodEmpresa } from "../domain/VentaCodEmpresa";
import { VentaFecEmision } from "../domain/VentaFecEmision";
import { VentaId } from "../domain/VentaId";
import { VentaRepository } from "../domain/VentaRepository";

export class InMemoryVentaRepository implements VentaRepository {
  private ventas: Venta[] = [];

  async create(venta: Venta): Promise<void> {
    this.ventas.push(venta);
  }

  async getAll(
    codEmpresa: VentaCodEmpresa,
    fecEmision: VentaFecEmision
  ): Promise<Venta[]> {
    const venta = this.ventas.filter(
      (l) =>
        l.codEmpresa.value == codEmpresa.value &&
        l.fecEmision.value == fecEmision.value
    );
    return venta;
  }

  async getById(id: VentaId): Promise<Venta | null> {
    const venta = this.ventas.find((venta) => venta.id === id.value);
    return venta || null;
  }

  async update(venta: Venta): Promise<void> {
    const id = venta.id;
    const index = this.ventas.findIndex((u) => u.id === id);
    if (index !== -1) {
      this.ventas[index] = venta;
    } else {
      throw new Error(`Venta not found`);
    }
  }
}
