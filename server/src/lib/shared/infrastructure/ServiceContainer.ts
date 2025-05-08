import { InMemoryLoanRepository } from "../../Loan/infrastucture/InMemoryLoanReporsitory";
import { LoanCreate } from "../../Loan/application/LoadCreate/LoanCreate";
import { LoanDelete } from "../../Loan/application/LoanDelete/LoanDelete";
import { LoanGetAll } from "../../Loan/application/LoanGetAll/LoanGetAll";
import { LoanGetById } from "../../Loan/application/LoanGetById/LoanGetById";
import { LoanUpdate } from "../../Loan/application/LoanUpdate/LoanUpdate";
import { FirebaseLoanRepository } from "../../Loan/infrastucture/FirebaseLoanReporsitory";
import { InMemoryPayRepository } from "../../Pay/infrastructure/InMemoryPayRepository";
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
import { CustomerGetAll } from "../../customer/application/CustomerGetAll/CustomerGetAll";
import { CustomerGetById } from "../../customer/application/CustomerGetById/CustomerGetById";
import { CustomerCreate } from "../../customer/application/CustomerCreate/CustomerCreate";
import { CustomerUpdate } from "../../customer/application/CustomerUpdate/CustomerUpdate";
import { CustomerDelete } from "../../customer/application/CustomerDelete/CustomerDelete";
import { FirebaseCustomerRepository } from "../../customer/infrastucture/FirebaseCustomerRepository";
import { PersonaGetByDni } from "../../Persona/application/PersonaGetByDni/PersonaGetByDni";
import { ApisNetPersonaRepository } from "../../Persona/infrastucture/ApisNetPersonaRepository";
import { FirebaseVentaRepository } from "../../Venta/infrastructure/FirebaseVentaRepository";
import { VentaGetAll } from "../../Venta/application/VentaGetAll/VentaGetAll";
import { VentaGetById } from "../../Venta/application/VentaGetById/VentaGetById";
import { VentaCreate } from "../../Venta/application/VentaCreate/VentaCreate";
import { VentaUpdate } from "../../Venta/application/VentaUpdate/VentaUpdate";
import { InMemoryVentaRepository } from "../../Venta/infrastructure/InMemoryVentaRepository";
import { InMemoryTaskRepository } from "../../Task/infrastructure/InMemoryTaskReporsitory";

// const loanRepository = new FirebaseLoanRepository();
const loanRepository = new InMemoryLoanRepository();
//  const payRepository = new InMemoryPayRepository();
const payRepository = new FirebasePayRepository();
const taskRepository = new InMemoryTaskRepository();
// const taskRepository = new FirebaseTaskRepository();
const customerRepository = new FirebaseCustomerRepository();
const personaRepository = new ApisNetPersonaRepository();
const ventaRepository = new FirebaseVentaRepository();
// const ventaRepository = new InMemoryVentaRepository();

export const ServiceContainer = {
  persona: { getByDni: new PersonaGetByDni(personaRepository) },
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
  customer: {
    getAll: new CustomerGetAll(customerRepository),
    getById: new CustomerGetById(customerRepository),
    create: new CustomerCreate(customerRepository),
    update: new CustomerUpdate(customerRepository),
    delete: new CustomerDelete(customerRepository),
  },
  venta: {
    getAll: new VentaGetAll(ventaRepository),
    getById: new VentaGetById(ventaRepository),
    create: new VentaCreate(ventaRepository),
    update: new VentaUpdate(ventaRepository),
  },
};
