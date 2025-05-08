import { Pay } from "../../domain/Pay";
import { PayCodEmpresa } from "../../domain/PayCodEmpresa";
import { PayRepository } from "../../domain/PayRepository";

export class PayGetAll {
  constructor(private payRepository: PayRepository) {}
  async run(codEmpresa: string): Promise<Pay[]> {
    const payCodEmpresa = new PayCodEmpresa(codEmpresa);
    return await this.payRepository.getAll(payCodEmpresa);
  }
}
