import { IPayRepository } from "../domain/IPayRepository";
import { Pay } from "../domain/Pay";

export class LocalStoragePayRepository implements IPayRepository {
  private pays: Pay[] = [];

  async getAll(codEmpresa: string, codPrestamo: number) {
    const pays = this.pays.filter(
      (t) => t.codEmpresa === codEmpresa && t.codPrestamo === codPrestamo
    );
    return pays;
  }

  async getById(codEmpresa: string, codPrestamo: number, codPago: number) {
    const pay = this.pays.find(
      (t) =>
        t.codEmpresa == codEmpresa &&
        t.codPrestamo == codPrestamo &&
        t.codPago == codPago
    );
    if (!pay) return null;
    return pay;
  }

  async save(pay: Pay) {
    this.pays.push(pay);
  }

  async delete(codEmpresa: string, codPrestamo: number, codPago: number) {
    const index = this.pays.findIndex(
      (t) =>
        t.codEmpresa == codEmpresa &&
        t.codPrestamo == codPrestamo &&
        t.codPago == codPago
    );
    if (index == -1) return;
    this.pays.slice(index, 1);
  }

  async update(pay: Pay) {
    const index = this.pays.findIndex(
      (t) =>
        t.codEmpresa == pay.codEmpresa &&
        t.codPrestamo == pay.codPrestamo &&
        t.codPago == pay.codPago
    );
    if (index == -1) return null;
    this.pays[index] = pay;
    return this.pays[index];
  }
}
