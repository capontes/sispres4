import { Customer } from "../../domain/Customer";
import { CustomerRepository } from "../../domain/CustomerRepository";
import { CustomerCodEmpresa } from "../../domain/CustomerCodEmpresa";

export class CustomerDelete {
  constructor(private customerRepository: CustomerRepository) {}
  async run(id: string): Promise<void> {
    const customerExist = await this.customerRepository.getById(id);
    if (!customerExist) throw new Error("Cliente not found");
    return await this.customerRepository.delete(id);
  }
}
