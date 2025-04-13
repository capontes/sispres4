import { PayRepository } from "../../domain/PayRepository";

export class PayDelete {
  constructor(private payRepository: PayRepository) {}
  async run(id: string): Promise<void> {
    const codPagoExist = await this.payRepository.getById(id);
    if (!codPagoExist) throw new Error("Pay not found");
    return await this.payRepository.delete(id);
  }
}
