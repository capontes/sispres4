import { Customer } from "../domain/Customer";
import { CustomerCodEmpresa } from "../domain/CustomerCodEmpresa";
import { CustomerRepository } from "../domain/CustomerRepository";

export class InMemoryCustomerRepository implements CustomerRepository {
  private customers: Customer[] = [];

  async create(customer: Customer): Promise<void> {
    this.customers.push(customer);
  }

  async getAll(): Promise<Customer[]> {
    return this.customers;
  }

  async getById(codEmpleado: CustomerCodEmpresa): Promise<Customer | null> {
    const customer = this.customers.find(
      (customer) => customer.codEmpresa.value === codEmpleado.value
    );
    return customer || null;
  }

  async update(customer: Customer): Promise<void> {
    const index = this.customers.findIndex(
      (u) => u.codEmpresa.value === customer.codEmpresa.value
    );
    if (index !== -1) {
      this.customers[index] = customer;
    } else {
      throw new Error(`Customer with id ${customer.codEmpresa} not found`);
    }
  }

  async delete(id: CustomerCodEmpresa): Promise<void> {
    this.customers = this.customers.filter(
      (customer) => customer.codEmpresa.value !== id.value
    );
  }
}
