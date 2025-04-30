import { Movement } from "../../domain/Movement";
import { MovementCodEmpresa } from "../../domain/MovementCodEmpresa";
import { MovementRepository } from "../../domain/MovementRepository";

export class MovementGetAll {
  constructor(private movementRepository: MovementRepository) {}
  async run(id: string): Promise<Movement[]> {
    const movementCodEmpresa = new MovementCodEmpresa(id);
    return await this.movementRepository.getAll(id);
  }
}
