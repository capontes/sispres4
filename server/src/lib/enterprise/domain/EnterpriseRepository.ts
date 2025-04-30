import { Enterprise } from "./Enterprise";
import { EnterpriseCodEmpresa } from "./EnterpriseCodEmpresa";

export interface EnterpriseRepository {
  getAll(codEmpresa: EnterpriseCodEmpresa): Promise<Enterprise[]>;
  getById(codEmpresa: EnterpriseCodEmpresa): Promise<Enterprise | null>;
  create(enterprise: Enterprise): Promise<void>;
  update(enterprise: Enterprise): Promise<void>;
  delete(codEmpresa: EnterpriseCodEmpresa): Promise<void>;
}
