import { Customer } from "../../domain/Customer";
import { CustomerCodEmpresa } from "../../domain/CustomerCodEmpresa";
import { CustomerRepository } from "../../domain/CustomerRepository";

export class CustomerGetAll {
  constructor(private customerRepository: CustomerRepository) {}
  async run(codEmpresa: string): Promise<Customer[]> {
    const customerCodEmpresa = new CustomerCodEmpresa(codEmpresa);
    return await this.customerRepository.getAll(customerCodEmpresa);
  }
}
