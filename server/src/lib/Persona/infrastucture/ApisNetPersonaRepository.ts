import { PersonaRepository } from "../domain/PersonaRepository";
import { Persona } from "../domain/Persona";
import { PersonaDni } from "../domain/PersonaDni";
import { PersonaApellidoMaterno } from "../domain/PersonaApellidoMaterno";
import { PersonaApellidoPaterno } from "../domain/PersonaApellidoPaterno";
import { PersonaNombres } from "../domain/PersonaNombres";

type ApiNetPersona = {
  nombres: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  nombreCompleto: string;
  tipoDocumento: string;
  numeroDocumento: string;
  digitoVerificador: string;
};

export class ApisNetPersonaRepository implements PersonaRepository {
  async getByDni(dni: PersonaDni): Promise<Persona | null> {
    const urlFull = "http://api.apis.net.pe/v2/reniec/dni?numero=" + dni.value;
    const persona = await fetch(urlFull, {
      headers: {
        Authorization:
          "Bearer {apis-token-13191.C8hqUAui4aauRAYDoFndvPrxnfetEqqR}",
      },
    })
      .then((datos) => datos.json())
      .catch((error) => console.error("Error:", error));
    return this.mapToDomain(persona as ApiNetPersona);
  }

  private mapToDomain(persona: ApiNetPersona): Persona {
    return new Persona(
      new PersonaDni(persona.numeroDocumento),
      new PersonaNombres(persona.nombres),
      new PersonaApellidoPaterno(persona.apellidoPaterno),
      new PersonaApellidoMaterno(persona.apellidoMaterno)
    );
  }
}
