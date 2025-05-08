import { PersonaApellidoMaterno } from "./PersonaApellidoMaterno";
import { PersonaApellidoPaterno } from "./PersonaApellidoPaterno";
import { PersonaDni } from "./PersonaDni";
import { PersonaNombres } from "./PersonaNombres";

export class Persona {
  dni: PersonaDni;
  nombres: PersonaNombres;
  apellidoPaterno: PersonaApellidoPaterno;
  apellidoMaterno: PersonaApellidoMaterno;

  constructor(
    dni: PersonaDni,
    nombres: PersonaNombres,
    apellidoPaterno: PersonaApellidoPaterno,
    apellidoMaterno: PersonaApellidoMaterno
  ) {
    this.dni = dni;
    this.nombres = nombres;
    this.apellidoPaterno = apellidoPaterno;
    this.apellidoMaterno = apellidoMaterno;
  }

  public mapToPrimitives() {
    return {
      dni: this.dni.value,
      nombres: this.nombres.value,
      apellidoPaterno: this.apellidoPaterno.value,
      apellidoMaterno: this.apellidoMaterno.value,
    };
  }
}
