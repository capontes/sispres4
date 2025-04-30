import { Movement } from "../../domain/Movement";
import { MovementRepository } from "../../domain/MovementRepository";
import { MovementCodEmpresa } from "../../domain/MovementCodEmpresa";

export class MovementDelete {
  constructor(private movementRepository: MovementRepository) {}
  async run(id: string): Promise<void> {
    const movementExist = await this.movementRepository.getById(id);
    if (!movementExist) throw new Error("Cliente not found");
    return await this.movementRepository.delete(id);
  }
}
