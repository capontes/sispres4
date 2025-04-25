import { Movement } from "../../domain/Movement";
import { MovementRepository } from "../../domain/MovementRepository";

export class MovementGetById {
  constructor(private movementRepository: MovementRepository) {}
  async run(id: string): Promise<Movement | null> {
    const movement = await this.movementRepository.getById(id);
    if (!movement) throw new Error("Movimiento not found");
    return movement;
  }
}
