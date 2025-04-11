import { InMemoryLoanRepository } from "../../Loan/infrastucture/InMemoryLoanReporsitory";
import { LoanCreate } from "../../Loan/application/LoadCreate/LoanCreate";
import { LoanDelete } from "../../Loan/application/LoanDelete/LoanDelete";
import { LoanGetAll } from "../../Loan/application/LoanGetAll/LoanGetAll";
import { LoanGetById } from "../../Loan/application/LoanGetById/LoanGetById";
import { LoanUpdate } from "../../Loan/application/LoanUpdate/TaskUpdate";
import { FirebaseLoanRepository } from "../../Loan/infrastucture/FirebaseLoanReporsitory";

// const loanRepository = new FirebaseLoanRepository();
const loanRepository = new InMemoryLoanRepository();

export const ServiceContainer = {
  loan: {
    getAll: new LoanGetAll(loanRepository),
    getById: new LoanGetById(loanRepository),
    create: new LoanCreate(loanRepository),
    update: new LoanUpdate(loanRepository),
    delete: new LoanDelete(loanRepository),
  },
};
