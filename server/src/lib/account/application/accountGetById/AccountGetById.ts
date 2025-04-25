import { Account } from "../../domain/Account";
import { AccountRepository } from "../../domain/AccountRepository";

export class AccountGetById {
  constructor(private accountRepository: AccountRepository) {}
  async run(id: string): Promise<Account | null> {
    const account = await this.accountRepository.getById(id);
    if (!account) throw new Error("Cuenta not Found");
    return account;
  }
}
