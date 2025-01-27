import { z } from 'zod';

export const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  sede: z.enum(['', 'CENTRAL', 'MARTIRES', 'ELENA LARA'], {
    required_error: 'Seleccione una sede válida',
  }).refine((value) => value !== '', {
    message: 'Seleccione una sede válida',
  }),

  nombreEstudiante: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  fechaNacimiento: z.string().nonempty("La fecha de nacimiento es obligatoria."),
  edad: z.number().min(1, { message: "Ingrese una edad válida." }),
  documento: z.enum(['', "RC", "TI", "CC"], { required_error: "Seleccione un tipo de documento." }).refine((value) => value !== '', {
    message: 'Seleccione un documento valido',
  }),
  numeroDocumento: z.number().min(5, { message: "El número de documento debe tener al menos 5 caracteres." }),
  direccion: z.string().nonempty("La dirección es obligatoria."),
  barrio: z.string().nonempty("El barrio es obligatorio."),
  comuna: z.string().nonempty("La comuna es obligatoria."),
  estrato: z.string().nonempty("El estrato es obligatorio."),
  servicioSalud: z.string().nonempty("El servicio de salud es obligatorio."),
  telefonoFijo: z.string().optional(),
  telefonoMovil: z.string().min(7, { message: "El teléfono móvil debe tener al menos 7 caracteres." }),
  correo: z.string().email({ message: "Ingrese un correo válido." }),

  acudiente: z.string().min(2, { message: "El nombre del acudiente es obligatorio." }),
  parentesco: z.string().min(2, { message: "El parentesco es obligatorio." }),

  nombrePadre: z.string().min(2, { message: "El nombre del padre es obligatorio." }),
  escolaridadPadre: z.string().min(2, { message: "La escolaridad es obligatoria." }),
  edadPadre: z.number().min(1, { message: "Ingrese una edad válida." }),
  ocupacionPadre: z.string().min(2, { message: "La ocupación es obligatoria." }),
  tipoTrabajoPadre: z.enum(["", "Independiente", "Empleado"], {
    required_error: "Seleccione una opción de tipo de trabajo."
  }).refine((value) => value !== '', {
    message: 'Seleccione una opción de tipo de trabajo.',
  }),
  nombreMadre: z.string().min(2, { message: "El nombre de la madre es obligatorio." }),
  escolaridadMadre: z.string().min(2, { message: "La escolaridad es obligatoria." }),
  edadMadre: z.number().min(1, { message: "Ingrese una edad válida." }),
  ocupacionMadre: z.string().min(2, { message: "La ocupación es obligatoria." }),
  tipoTrabajoMadre: z.enum(["", "Independiente", "Empleado"], {
    required_error: "Seleccione una opción de tipo de trabajo."
  }).refine((value) => value !== '', {
    message: 'Seleccione una opción de tipo de trabajo.',
  }),

  ingresos: z.enum(
    ["Menos de un salario mínimo", "Entre 1 y 2 salarios", "Más de 2 salarios mínimos"],
    { required_error: "Seleccione un rango de ingresos." }
  ),

  //en casa vivo con
  enCasaVivoCon: z.array(z.string()).min(1, { message: "Debe seleccionar al menos una opción." }),
    otro: z.string().optional(),
    hijoUnico: z.boolean(),
    tieneHermanosEnColegio: z.boolean(),
    totalPersonasHogar: z.number().min(1, { message: "Debe indicar el total de personas." }),
    miCasaEs: z.enum(["Propia", "Arrendada", "De familiares"], {
      required_error: "Debe seleccionar el tipo de casa."
    }),
});
