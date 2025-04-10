import { Loan } from "../../domain/Loan";
import { LoanCodEmpresa } from "../../domain/LoanCodEmpresa";
import { LoanRepository } from "../../domain/LoanRepository";

export class LoanGetAll {
  constructor(private loanRepository: LoanRepository) {}
  async run(codEmpresa: string): Promise<Loan[]> {
    const loanCodEmpresa = new LoanCodEmpresa(codEmpresa);
    return await this.loanRepository.getAll(loanCodEmpresa);
  }
}
