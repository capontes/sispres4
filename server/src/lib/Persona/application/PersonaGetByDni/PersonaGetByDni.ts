import { Persona } from "../../domain/Persona";
import { PersonaDni } from "../../domain/PersonaDni";
import { PersonaRepository } from "../../domain/PersonaRepository";

export class PersonaGetByDni {
  constructor(private personaRepository: PersonaRepository) {}
  async run(dni: string): Promise<Persona | null> {
    const persona = await this.personaRepository.getByDni(new PersonaDni(dni));
    return persona || null;
  }
}
