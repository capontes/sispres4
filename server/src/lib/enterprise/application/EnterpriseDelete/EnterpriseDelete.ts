import { EnterpriseCodEmpresa } from "../../domain/EnterpriseCodEmpresa";
import { EnterpriseRepository } from "../../domain/EnterpriseRepository";

export class EnterpriseDelete {
  constructor(private enterpriseRepository: EnterpriseRepository) {}
  async run(codEmpresa: string): Promise<void> {
    const enterpriseCodEmpresa = new EnterpriseCodEmpresa(codEmpresa);
    const enterpriseExist = await this.enterpriseRepository.getById(
      enterpriseCodEmpresa
    );
    if (!enterpriseExist) throw new Error("Empresa not found");
    return await this.enterpriseRepository.delete(enterpriseCodEmpresa);
  }
}
