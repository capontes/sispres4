import { Pay } from "../../domain/Pay"; // Adjust the path as needed
import { PayCodEmpresa } from "../../domain/PayCodEmpresa";
import { PayCodPrestamo } from "../../domain/PayCodPrestamo"; // Adjusted the path and corrected the typo in 'PayCodPrestamop'
import { PayRepository } from "../../domain/PayRepository"; // Ensure this file exists and the path is correct

export class PayGetById {
  constructor(private payRepository: PayRepository) {}
  async run(id: string): Promise<Pay | null> {
    const pay = await this.payRepository.getById(id); // Adjusted the method call to match the repository interface
    // if (!pay) throw new Error("Pay not found");
    return pay || null;
  }
}

// Ensure to adjust the import paths according to your project structure
