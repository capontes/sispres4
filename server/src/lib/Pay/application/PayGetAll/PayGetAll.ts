import { Pay } from "../../domain/Pay";
import { PayCodEmpresa } from "../../domain/PayCodEmpresa";
import { PayCodPrestamo } from "../../domain/PayCodPrestamo";
import { PayRepository } from "../../domain/PayRepository";

export class PayGetAll {
  constructor(private payRepository: PayRepository) {}
  async run(codEmpresa: string, codPrestamo: number): Promise<Pay[]> {
    const payCodEmpresa = new PayCodEmpresa(codEmpresa);
    const payCodPrestamo = new PayCodPrestamo(codPrestamo);
    return await this.payRepository.getAll(payCodEmpresa, payCodPrestamo);
  }
}
