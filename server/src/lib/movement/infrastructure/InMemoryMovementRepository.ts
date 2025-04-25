import { Movement } from "../domain/Movement";
import { MovementCodEmpresa } from "../domain/MovementCodEmpresa";
import { MovementRepository } from "../domain/MovementRepository";

export class InMemoryMovementRepository implements MovementRepository {
  private movements: Movement[] = [];

  async create(movement: Movement): Promise<void> {
    this.movements.push(movement);
  }

  async getAll(): Promise<Movement[]> {
    return this.movements;
  }

  async getById(id: string): Promise<Movement | null> {
    const movement = this.movements.find(
      (movement) => movement.codEmpresa.value === id
    );
    return movement || null;
  }

  async update(movement: Movement): Promise<void> {
    const index = this.movements.findIndex(
      (u) => u.codEmpresa.value === movement.codEmpresa.value
    );
    if (index !== -1) {
      this.movements[index] = movement;
    } else {
      throw new Error(`Movement with id ${movement.codEmpresa} not found`);
    }
  }

  async delete(id: string): Promise<void> {
    this.movements = this.movements.filter(
      (movement) => movement.codEmpresa.value !== id
    );
  }
}
