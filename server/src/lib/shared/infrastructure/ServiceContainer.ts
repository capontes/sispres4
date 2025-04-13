import { InMemoryLoanRepository } from "../../Loan/infrastucture/InMemoryLoanReporsitory";
import { LoanCreate } from "../../Loan/application/LoadCreate/LoanCreate";
import { LoanDelete } from "../../Loan/application/LoanDelete/LoanDelete";
import { LoanGetAll } from "../../Loan/application/LoanGetAll/LoanGetAll";
import { LoanGetById } from "../../Loan/application/LoanGetById/LoanGetById";
import { LoanUpdate } from "../../Loan/application/LoanUpdate/TaskUpdate";
import { FirebaseLoanRepository } from "../../Loan/infrastucture/FirebaseLoanReporsitory";
import { InMemoryPayRepository } from "src/lib/Pay/infrastructure/InMemoryPayRepository";
import { PayGetAll } from "../../Pay/application/PayGetAll/PayGetAll";
import { PayCreate } from "../../Pay/application/PayCreate/PayCreate";
import { PayUpdate } from "../../Pay/application/PayUpdate/PayUpdate";
import { PayDelete } from "../../Pay/application/PayDelete/PayDelete";
import { PayGetById } from "../../Pay/application/PayGetByld/PayGetByld";
import { FirebasePayRepository } from "../../Pay/infrastructure/FirebasePayRepository";
import { TaskGetAll } from "../../Task/application/TaskGetAll/TaskGetAll";
import { TaskGetById } from "../../Task/application/TaskGetById/TaskGetById";
import { TaskCreate } from "../../Task/application/TaskCreate/TaskCreate";
import { TaskUpdate } from "../../Task/application/TaskUpdate/TaskUpdate";
import { TaskDelete } from "../../Task/application/TaskDelete/TaskDelete";
import { FirebaseTaskRepository } from "../../Task/infrastructure/FirebaseTaskReporsitory";

const loanRepository = new FirebaseLoanRepository();
//const loanRepository = new InMemoryLoanRepository();
//  const payRepository = new InMemoryPayRepository();
const payRepository = new FirebasePayRepository();
const taskRepository = new FirebaseTaskRepository();

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
  task: {
    getAll: new TaskGetAll(taskRepository),
    getById: new TaskGetById(taskRepository),
    create: new TaskCreate(taskRepository),
    edit: new TaskUpdate(taskRepository),
    delete: new TaskDelete(taskRepository),
  },
};
