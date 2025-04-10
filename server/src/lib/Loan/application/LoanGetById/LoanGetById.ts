import { Loan } from "../../domain/Loan";
import { LoanCodEmpresa } from "../../domain/LoanCodEmpresa";
import { LoanCodPrestamo } from "../../domain/LoanCodPrestamo";
import { LoanRepository } from "../../domain/LoanRepository";

export class LoanGetById {
  constructor(private loanRepository: LoanRepository) {}
  async run(codEmpresa: string, codPrestamo: number): Promise<Loan | null> {
    const loanCodEmpresa = new LoanCodEmpresa(codEmpresa);
    const loanCodPrestamo = new LoanCodPrestamo(codPrestamo);
    const loan = await this.loanRepository.getById(
      loanCodEmpresa,
      loanCodPrestamo
    );
    if (!loan) throw new Error("Préstamo not found");
    return loan;
  }
}
