/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-else-return */
import { IPerson } from '../models/person.interface';
import { PersonSchema } from '../schemas/personSchema';
import * as Yup from 'yup';

export async function validatePerson(person: Partial<IPerson>, isNew: boolean) {
  try {
    // Si la persona es nueva, validamos todos los campos
    if (isNew) {
      await PersonSchema.validate(person, { abortEarly: false });
    } else {
      // Si la persona no es nueva, validamos solo los campos presentes
      const schemaKeys = Object.keys(PersonSchema.fields);
      const validations = schemaKeys.map((key) => {
        if (key in person) {
          const schema = Yup.reach(PersonSchema, key) as Yup.AnySchema;
          const personKey = key as keyof typeof person;
          return schema.validate(person[personKey]);
        }
      });
      await Promise.all(validations);
    }
    // Si todo está bien, no devolvemos nada
    return null;
  } catch (error) {
    if (error instanceof Yup.ValidationError) {
      //? Este es un error de validación de Yup

      return {
        errors: error.errors,
        value: error.value,
      };
    } else {
      //? Esto sirve para lanzar el error personalizado
      return {
        message: error.message,
      };
    }
  }
}
