import { Box } from "../domain/Box";
import { BoxMes } from "../domain/Box;Mes";
import { BoxAnio } from "../domain/BoxAnio";
import { BoxCodEmpresa } from "../domain/BoxCodEmpresa";
import { BoxRepository } from "../domain/BoxRepository";

export class InMemoryBoxRepository implements BoxRepository {
  private box: Box[] = [];

  async create(box: Box): Promise<void> {
    this.box.push(box);
  }

  async getAll(codEmpresa: BoxCodEmpresa): Promise<Box[]> {
    const box = this.box.filter((b) => b.codEmpresa.value == codEmpresa.value);
    return box;
  }

  async getById(
    codEmpresa: BoxCodEmpresa,
    mes: BoxMes,
    anio: BoxAnio
  ): Promise<Box | null> {
    const id = codEmpresa.value + mes.value + anio.value;
    const box = this.box.find(
      (box) => box.codEmpresa.value + box.mes.value + box.anio.value === id
    );
    return box || null;
  }

  async update(box: Box): Promise<void> {
    const id = box.codEmpresa.value + box.mes.value + box.anio.value;
    const index = this.box.findIndex(
      (u) => u.codEmpresa.value + u.mes.value + u.anio.value === id
    );
    if (index !== -1) {
      this.box[index] = box;
    } else {
      throw new Error("Caja not found");
    }
  }

  async delete(
    codEmpresa: BoxCodEmpresa,

    mes: BoxMes,
    anio: BoxAnio
  ): Promise<void> {
    const id = codEmpresa.value + mes.value + anio.value;
    this.box = this.box.filter(
      (b) => b.codEmpresa.value + b.mes.value + b.anio.value === id
    );
  }
}
