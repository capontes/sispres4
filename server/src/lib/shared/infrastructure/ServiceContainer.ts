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
import { CustomerGetAll } from "../../customer/application/CustomerGetAll/CustomerGetAll";
import { CustomerGetById } from "../../customer/application/CustomerGetById/CustomerGetById";
import { CustomerCreate } from "../../customer/application/CustomerCreate/CustomerCreate";
import { CustomerUpdate } from "../../customer/application/CustomerUpdate/CustomerUpdate";
import { CustomerDelete } from "../../customer/application/CustomerDelete/CustomerDelete";
import { FirebaseCustomerRepository } from "../../customer/infrastucture/FirebaseCustomerRepository";
import { MovementGetAll } from "../../movement/application/MovementGetAll/MovementGetAll";
import { MovementGetById } from "../../movement/application/MovementGetById/MovementGetById";
import { MovementCreate } from "../../movement/application/MovementCreate/MovementCreate";
import { MovementDelete } from "../../movement/application/MovementDelete/MovementDelete";
import { MovementUpdate } from "../../movement/application/MovementUpdate/MovementUpdate";
import { FirebaseMovementRepository } from "../../movement/infrastructure/FirebaseMovementRepository";
import { Account } from "../../account/domain/Account";
import { AccountGetAll } from "../../account/application/accountGetAll/AccountGetAll";
import { AccountGetById } from "../../account/application/accountGetById/AccountGetById";
import { AccountCreate } from "../../account/application/accountCreate/AccountCreate";
import { AccountUpdate } from "../../account/application/accountUpdate/AccountUpdate";
import { AccountDelete } from "../../account/application/accountDelete/AccountDelete";
import { FirebaseAccountRepository } from "src/lib/account/infrastructure/FirebaseAccountRepository";
import { WarehouseGetAll } from "../../warehouse/application/warehouseGetAll/WarehouseGetAll";
import { WarehouseGetById } from "../../warehouse/application/warehouse.GetById/WarehouseGetById";
import { WarehouseCreate } from "../../warehouse/application/warehouse.Create/WarehouseCreate";
import { WarehouseUpdate } from "../../warehouse/application/warehouseUpdate/Warehouse.Update";
import { WarehouseDelete } from "../../warehouse/application/warehouseDelete/WarehouseDelete";
import { FirebaseWarehouseRepository } from "src/lib/warehouse/infrastructure/FirebaseWarehouseRepository";
import { BoxGetAll } from "../../box/application/BoxGetAll/BoxGetAll";
import { BoxGetById } from "../../box/application/BoxGetById/BoxGetById";
import { BoxCreate } from "../../box/application/BoxCreate/BoxCreate";
import { BoxUpdate } from "../../box/application/BoxUpdate/BoxUpdate";
import { BoxDelete } from "../../box/application/BoxDelete/BoxDelete";
import { FirebaseBoxRepository } from "../../box/infrastructure/FirebaseBoxRepository";

const loanRepository = new FirebaseLoanRepository();
//const loanRepository = new InMemoryLoanRepository();
//  const payRepository = new InMemoryPayRepository();
const payRepository = new FirebasePayRepository();
const taskRepository = new FirebaseTaskRepository();
const customerRepository = new FirebaseCustomerRepository();
const movementRepository = new FirebaseMovementRepository();
const accountRepository = new FirebaseAccountRepository();
const warehouseRepository = new FirebaseWarehouseRepository();
const boxRepository = new FirebaseBoxRepository();

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
  customer: {
    getAll: new CustomerGetAll(customerRepository),
    getById: new CustomerGetById(customerRepository),
    create: new CustomerCreate(customerRepository),
    update: new CustomerUpdate(customerRepository),
    delete: new CustomerDelete(customerRepository),
  },
  movement: {
    getAll: new MovementGetAll(movementRepository),
    getById: new MovementGetById(movementRepository),
    create: new MovementCreate(movementRepository),
    update: new MovementUpdate(movementRepository),
    delete: new MovementDelete(movementRepository),
  },
  account: {
    getAll: new AccountGetAll(accountRepository),
    getById: new AccountGetById(accountRepository),
    create: new AccountCreate(accountRepository),
    update: new AccountUpdate(accountRepository),
    delete: new AccountDelete(accountRepository),
  },
  warehouse: {
    getAll: new WarehouseGetAll(warehouseRepository),
    getById: new WarehouseGetById(warehouseRepository),
    create: new WarehouseCreate(warehouseRepository),
    update: new WarehouseUpdate(warehouseRepository),
    delete: new WarehouseDelete(warehouseRepository),
  },
  box: {
    getAll: new BoxGetAll(boxRepository),
    getById: new BoxGetById(boxRepository),
    create: new BoxCreate(boxRepository),
    update: new BoxUpdate(boxRepository),
    delete: new BoxDelete(boxRepository),
  },
};
