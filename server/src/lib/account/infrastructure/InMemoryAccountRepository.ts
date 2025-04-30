import { Account } from "../domain/Account";
import { AccountCodEmpresa } from "../domain/AccountCodEmpresa";
import { AccountRepository } from "../domain/AccountRepository";

export class InMemoryAccountRepository implements AccountRepository {
  private account: Account[] = [];

  async create(account: Account): Promise<void> {
    this.account.push(account);
  }

  async getAll(): Promise<Account[]> {
    return this.account;
  }

  async getById(id: string): Promise<Account | null> {
    const account = this.account.find(
      (account) => account.codEmpresa.value == id
    );
    return account || null;
  }

  async update(account: Account): Promise<void> {
    const index = this.account.findIndex(
      (u) => u.codEmpresa.value === account.codEmpresa.value
    );
    if (index! == -1) {
      this.account[index] = account;
    } else {
      throw new Error(`Cuenta with id ${account.codEmpresa} not found`);
    }
  }

  async delete(id: string): Promise<void> {
    this.account = this.account.filter(
      (account) => account.codEmpresa.value !== id
    );
  }
}
