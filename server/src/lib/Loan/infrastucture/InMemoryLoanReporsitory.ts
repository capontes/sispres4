import { Loan } from "../domain/Loan";
import { LoanCodEmpresa } from "../domain/LoanCodEmpresa";
import { LoanCodPrestamo } from "../domain/LoanCodPrestamo";
import { LoanRepository } from "../domain/LoanRepository";

//update 12-04-25
export class InMemoryLoanRepository implements LoanRepository {
  private loans: Loan[] = [];

  async create(loan: Loan): Promise<void> {
    this.loans.push(loan);
  }

  async getAll(codEmpresa: LoanCodEmpresa): Promise<Loan[]> {
    const loan = this.loans.filter(
      (l) => l.codEmpresa.value == codEmpresa.value
    );
    return loan;
  }

  async getById(
    codEmpresa: LoanCodEmpresa,
    codPrestamo: LoanCodPrestamo
  ): Promise<Loan | null> {
    const id = codEmpresa.value + codPrestamo.value;
    const loan = this.loans.find(
      (loan) => loan.codEmpresa.value + loan.codPrestamo.value === id
    );
    return loan || null;
  }

  async update(loan: Loan): Promise<void> {
    const id = loan.codEmpresa.value + loan.codPrestamo.value;
    const index = this.loans.findIndex(
      (u) => u.codEmpresa.value + u.codPrestamo.value === id
    );
    if (index !== -1) {
      this.loans[index] = loan;
    } else {
      throw new Error(`Préstamo not found`);
    }
  }

  async delete(
    codEmpresa: LoanCodEmpresa,
    codPrestamo: LoanCodPrestamo
  ): Promise<void> {
    const id = codEmpresa.value + codPrestamo.value;
    this.loans = this.loans.filter(
      (l) => l.codEmpresa.value + l.codPrestamo.value !== id
    );
  }
}
