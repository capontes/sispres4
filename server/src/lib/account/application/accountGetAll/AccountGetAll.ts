import { Account } from "../../domain/Account";
import { AccountCodEmpresa } from "../../domain/AccountCodEmpresa";
import { AccountRepository } from "../../domain/AccountRepository";

export class AccountGetAll {
  constructor(private accountRepository: AccountRepository) {}
  async run(id: string): Promise<Account[]> {
    const accountCodEmpresa = new AccountCodEmpresa(id);
    return await this.accountRepository.getAll(accountCodEmpresa);
  }
}
