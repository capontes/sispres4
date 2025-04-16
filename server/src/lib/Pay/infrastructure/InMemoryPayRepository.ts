import { Pay } from "../domain/Pay";
import { PayCodEmpresa } from "../domain/PayCodEmpresa";
import { PayCodPrestamo } from "../domain/PayCodPrestamo";
import { PayRepository } from "../domain/PayRepository";

export class InMemoryPayRepository implements PayRepository {
  private pays: Pay[] = [];

  async create(pay: Pay): Promise<void> {
    this.pays.push(pay);
  }

  async getAll(codEmpresa: PayCodEmpresa): Promise<Pay[]> {
    const pay = this.pays.filter(
      (pay) => pay.codEmpresa.value === codEmpresa.value
    );
    return this.pays;
  }

  async getById(
    codEmpresa: PayCodEmpresa,
    CodPrestamo: PayCodPrestamo
  ): Promise<Pay | null> {
    const id = codEmpresa.value + CodPrestamo.value.toString();
    const pay = this.pays.find(
      (pay) => pay.codEmpresa.value + pay.codPrestamo.value === id
    );
    return pay || null;
  }

  async update(pay: Pay): Promise<void> {
    const id = pay.codEmpresa.value + pay.codPrestamo.value.toString();
    const index = this.pays.findIndex(
      (p) => p.codEmpresa.value + p.codPrestamo.value === id
    );
    if (index === -1) {
      throw new Error("Pay not found");
    }
    this.pays[index] = pay;
  }

  async delete(
    codEmpresa: PayCodEmpresa,
    CodPrestamo: PayCodPrestamo
  ): Promise<void> {
    const id = codEmpresa.value + CodPrestamo.value;
    this.pays = this.pays.filter(
      (pay) => pay.codEmpresa.value + pay.codPrestamo.value === id
    );
  }
}
