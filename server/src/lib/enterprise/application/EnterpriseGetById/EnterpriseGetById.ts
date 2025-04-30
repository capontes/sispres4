import { Enterprise } from "../../domain/Enterprise";
import { EnterpriseCodEmpresa } from "../../domain/EnterpriseCodEmpresa";
import { EnterpriseRepository } from "../../domain/EnterpriseRepository";

export class EnterpriseGetById {
  constructor(private enterpriseRepository: EnterpriseRepository) {}
  async run(codEmpresa: string): Promise<Enterprise | null> {
    const enterppriseCodEmpresa = new EnterpriseCodEmpresa(codEmpresa);
    const enterprise = await this.enterpriseRepository.getById(
      enterppriseCodEmpresa
    );
    if (!enterprise) throw new Error("Empresa not found");
    return enterprise;
  }
}
