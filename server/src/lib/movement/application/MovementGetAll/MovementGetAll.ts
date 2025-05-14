import { Movement } from "../../domain/Movement";
import { MovementCodEmpresa } from "../../domain/MovementCodEmpresa";
import { MovementRepository } from "../../domain/MovementRepository";

export class MovementGetAll {
  constructor(private movementRepository: MovementRepository) {}
  async run(codEmpresa: string, fecMovimiento: string): Promise<Movement[]> {
    return await this.movementRepository.getAll(codEmpresa, fecMovimiento);
  }
}
