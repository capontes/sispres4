import { Loan } from "./Loan";
import { LoanCodEmpresa } from "./LoanCodEmpresa";
import { LoanCodPrestamo } from "./LoanCodPrestamo";

export interface LoanReporitory {
  getAll(codEmpresa: LoanCodEmpresa): Promise<Loan[]>;
  getById(
    codEmpresa: LoanCodEmpresa,
    codPrestamo: LoanCodPrestamo
  ): Promise<Loan | null>;
  create(loan: Loan): Promise<void>;
  update(loan: Loan): Promise<void>;
  delete(
    codEmpresa: LoanCodEmpresa,
    codPrestamo: LoanCodPrestamo
  ): Promise<void>;
}
