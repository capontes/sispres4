import { Customer } from "../../domain/Customer";
import { CustomerCodEmpresa } from "../../domain/CustomerCodEmpresa";
import { CustomerRepository } from "../../domain/CustomerRepository";

export class CustomerGetById {
  constructor(private customerRepository: CustomerRepository) {}
  async run(id: string): Promise<Customer | null> {
    const customer = await this.customerRepository.getById(id);
    if (!customer) throw new Error("Cliente not found");
    return customer;
  }
}
