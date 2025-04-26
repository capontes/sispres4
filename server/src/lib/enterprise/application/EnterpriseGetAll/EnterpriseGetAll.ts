import { Enterprise } from "../../domain/Enterprise";
import { EnterpriseCodEmpresa } from "../../domain/EnterpriseCodEmpresa";
import { EnterpriseRepository } from "../../domain/EnterpriseRepository";

export class EnterpriseGetAll {
  constructor(private enterpriseRepository: EnterpriseRepository) {}
  async run(codEmpresa: string): Promise<Enterprise[]> {
    const enterpriseCodEmpresa = new EnterpriseCodEmpresa(codEmpresa);
    return await this.enterpriseRepository.getAll(enterpriseCodEmpresa);
  }
}
