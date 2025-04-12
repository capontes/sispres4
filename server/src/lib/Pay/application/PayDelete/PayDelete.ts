import { PayCodEmpresa } from "../../domain/PayCodEmpresa";
import { PayCodPrestamo } from "../../domain/PayCodPrestamo";
import { PayRepository } from "../../domain/PayRepository";

export class PayDelete {
  constructor(private payRepository: PayRepository) {}
  async run(codEmpresa: string, codPrestamo: number): Promise<void> {
    const payCodEmpresa: PayCodEmpresa = new PayCodEmpresa(codEmpresa);
    const payCodPrestamo: PayCodPrestamo = new PayCodPrestamo(codPrestamo); // Create an instance of PayCodPrestamo
    const codPagoExist = await this.payRepository.getById(
      payCodEmpresa,
      payCodPrestamo
    );
    if (!codPagoExist) throw new Error("Pay not found");
    const payCodPrestamoToDelete: PayCodPrestamo = new PayCodPrestamo(
      codPrestamo
    );
    return await this.payRepository.delete(payCodEmpresa, payCodPrestamo);
  }
}
