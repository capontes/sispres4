import { Enterprise } from "../../domain/Enterprise";
import { EnterpriseCodEmpresa } from "../../domain/EnterpriseCodEmpresa";
import { EnterpriseParametros } from "../../domain/EnterpriseParametros";
import { EnterpriseRazonSocial } from "../../domain/EnterpriseRazonSocial";
import { EnterpriseRepository } from "../../domain/EnterpriseRepository";

export class EnterpriseCreate {
  constructor(private enterpriseRepository: EnterpriseRepository) {}
  async run(
    codEmpresa: string,
    razonSocial: string,
    parametros: {
      codParam: string;
      desParam: string;
      tipo: string;
      valParam: string;
    }[]
  ): Promise<void> {
    const enterprise = new Enterprise(
      new EnterpriseCodEmpresa(codEmpresa),
      new EnterpriseRazonSocial(razonSocial),
      parametros.map(
        (e) =>
          new EnterpriseParametros(e.codParam, e.desParam, e.tipo, e.valParam)
      )
    );
    return await this.enterpriseRepository.create(enterprise);
  }
}
