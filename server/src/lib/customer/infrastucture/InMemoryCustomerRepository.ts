import { Customer } from "../domain/Customer";
import { CustomerCodEmpresa } from "../domain/CustomerCodEmpresa";
import { CustomerRepository } from "../domain/CustomerRepository";

export class InMemoryCustomerRepository implements CustomerRepository {
  private customers: Customer[] = [];

  async create(customer: Customer): Promise<void> {
    this.customers.push(customer);
  }

  async getAll(codEmpresa: CustomerCodEmpresa): Promise<Customer[]> {
    const customer = this.customers.filter(
      (c) => c.codEmpresa.value == codEmpresa.value
    );
    return this.customers;
  }

  async getById(id: string): Promise<Customer | null> {
    const customer = this.customers.find(
      (customer) => customer.codEmpresa.value === id
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

  async delete(id: string): Promise<void> {
    this.customers = this.customers.filter((c) => c.codEmpresa.value !== id);
  }
}
