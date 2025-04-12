import { InMemoryLoanRepository } from "../../Loan/infrastucture/InMemoryLoanReporsitory";
import { LoanCreate } from "../../Loan/application/LoadCreate/LoanCreate";
import { LoanDelete } from "../../Loan/application/LoanDelete/LoanDelete";
import { LoanGetAll } from "../../Loan/application/LoanGetAll/LoanGetAll";
import { LoanGetById } from "../../Loan/application/LoanGetById/LoanGetById";
import { LoanUpdate } from "../../Loan/application/LoanUpdate/TaskUpdate";
import { FirebaseLoanRepository } from "../../Loan/infrastucture/FirebaseLoanReporsitory";
import { InMemoryPayRepository } from "src/lib/Pay/infrastructure/InMemoryPayRepository";
import { PayGetAll } from "src/lib/Pay/application/PayGetAll/PayGetAll";
import { PayCreate } from "src/lib/Pay/application/PayCreate/PayCreate";
import { PayUpdate } from "src/lib/Pay/application/PayUpdate/PayUpdate";
import { PayDelete } from "src/lib/Pay/application/PayDelete/PayDelete";
import { PayGetById } from "src/lib/Pay/application/PayGetByld/PayGetByld";
import { FirebasePayRepository } from "src/lib/Pay/infrastructure/FirebasePayRepository";

const loanRepository = new FirebaseLoanRepository();
//const loanRepository = new InMemoryLoanRepository();
//  const payRepository = new InMemoryPayRepository();
 const payRepository = new FirebasePayRepository

export const ServiceContainer = {
  loan: {
    getAll: new LoanGetAll(loanRepository),
    getById: new LoanGetById(loanRepository),
    create: new LoanCreate(loanRepository),
    update: new LoanUpdate(loanRepository),
    delete: new LoanDelete(loanRepository),
  },
  pay: {
    getAll: new PayGetAll(payRepository),
    getById: new PayGetById(payRepository),
    create: new PayCreate(payRepository),
    update: new PayUpdate(payRepository),
    delete: new PayDelete(payRepository),
  },
};
