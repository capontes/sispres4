import { Pay } from "../../domain/Pay"; // Adjust the path as needed
import { PayCodEmpresa } from "../../domain/PayCodEmpresa";
import { PayCodPrestamo } from "../../domain/PayCodPrestamo"; // Adjusted the path and corrected the typo in 'PayCodPrestamop'
import { PayRepository } from "../../domain/PayRepository"; // Ensure this file exists and the path is correct

export class PayGetById {
  constructor(private payRepository: PayRepository) {}
  async run(codEmpresa: string, codPrestamo: number): Promise<Pay | null> {
    const payCodPrestamo = new PayCodPrestamo(codPrestamo);
    const payCodEmpresa = new PayCodEmpresa(codEmpresa);
    const pay = await this.payRepository.getById(payCodEmpresa, payCodPrestamo); // Adjusted the method call to match the repository interface
    if (!pay) throw new Error("Pay not found");
    return pay;
  }
}

// Ensure to adjust the import paths according to your project structure
