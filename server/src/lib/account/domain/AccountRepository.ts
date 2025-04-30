import { Account } from "./Account";
import { AccountCodEmpresa } from "./AccountCodEmpresa";

export interface AccountRepository {
  getAll(codEmpresa: AccountCodEmpresa): Promise<any[]>;
  getById(id: string): Promise<any | null>;
  create(account: Account): Promise<void>;
  update(account: Account): Promise<void>;
  delete(id: string): Promise<void>;
}
