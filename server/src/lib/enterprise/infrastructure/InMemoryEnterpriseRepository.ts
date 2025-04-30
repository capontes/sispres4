import { Enterprise } from "../domain/Enterprise";
import { EnterpriseCodEmpresa } from "../domain/EnterpriseCodEmpresa";
import { EnterpriseRepository } from "../domain/EnterpriseRepository";

export class InMemoryEnterpriseRepository implements EnterpriseRepository {
  private enterprise: Enterprise[] = [];

  async create(enterprise: Enterprise): Promise<void> {
    this.enterprise.push(enterprise);
  }

  async getAll(codEmpresa: EnterpriseCodEmpresa): Promise<Enterprise[]> {
    const loan = this.enterprise.filter(
      (e) => e.codEmpresa.value == codEmpresa.value
    );
    return this.enterprise;
  }

  async getById(codEmpresa: EnterpriseCodEmpresa): Promise<Loan | null> {
    const id = codEmpresa.value;
    const enterprise = this.enterprise.find(
      (enterprise) => enterprise.codEmpresa.value === id
    );
    return enterprise || null;
  }

  async update(enterprise: Enterprise): Promise<void> {
    const id = enterprise.codEmpresa.value;
    const index = this.enterprise.findIndex((u) => u.codEmpresa.value === id);
    if (index !== -1) {
      this.enterprise[index] = enterprise;
    } else {
      throw new Error(`Almacen not found`);
    }
  }

  async delete(codEmpresa: EnterpriseCodEmpresa): Promise<void> {
    const id = codEmpresa.value;
    this.enterprise = this.enterprise.filter((l) => l.codEmpresa.value !== id);
  }
}
