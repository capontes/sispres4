import { Persona } from "./Persona";
import { PersonaDni } from "./PersonaDni";

export interface PersonaRepository {
  getByDni(dni: PersonaDni): Promise<Persona | null>;
}
