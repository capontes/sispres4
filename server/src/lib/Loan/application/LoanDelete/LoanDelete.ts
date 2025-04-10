import { LoanCodEmpresa } from "../../domain/LoanCodEmpresa";
import { LoanCodPrestamo } from "../../domain/LoanCodPrestamo";
import { LoanRepository } from "../../domain/LoanRepository";

export class LoanDelete {
  constructor(private toanRepository: LoanRepository) {}
  async run(codEmpresa: string, codPrestamo: number): Promise<void> {
    const loanCodEmpresa = new LoanCodEmpresa(codEmpresa);
    const loanCodPrestamo = new LoanCodPrestamo(codPrestamo);
    const loanExist = await this.toanRepository.getById(
      loanCodEmpresa,
      loanCodPrestamo
    );
    if (!loanExist) throw new Error("Préstamo not found");
    return await this.toanRepository.delete(loanCodEmpresa, loanCodPrestamo);
  }
}
