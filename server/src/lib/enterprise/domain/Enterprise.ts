import { EnterpriseCodEmpresa } from "./EnterpriseCodEmpresa";
import { EnterpriseParametros } from "./EnterpriseParametros";
import { EnterpriseRazonSocial } from "./EnterpriseRazonSocial";

export class Enterprise {
  codEmpresa: EnterpriseCodEmpresa;
  razonSocial: EnterpriseRazonSocial;
  parametros: EnterpriseParametros[];

  constructor(
    codEmpresa: EnterpriseCodEmpresa,
    razonSocial: EnterpriseRazonSocial,
    parametros: EnterpriseParametros[] = []
  ) {
    this.codEmpresa = codEmpresa;
    this.razonSocial = razonSocial;
    this.parametros = parametros;
  }

  public mapTopPrimitives() {
    return {
      codEmpresa: this.codEmpresa.value,
      razonSocial: this.razonSocial.value,
      parametros: this.parametros,
    };
  }
}
