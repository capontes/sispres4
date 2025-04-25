import { AccountRepository } from "../../domain/AccountRepository";

export class AccountDelete {
  constructor(private accountRepository: AccountRepository) {}
  async run(id: string): Promise<void> {
    const accountExist = await this.accountRepository.getById(id);
    if (!accountExist) throw new Error("Cliente not Found");
    return await this.accountRepository.delete(id);
  }
}
