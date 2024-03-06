import { IDisorder } from '../models/disorder.interface';
import { DisorderSchema } from '../schemas/disorderSchema';
import * as Yup from 'yup';

export async function validateDisorder(disorder: Partial<IDisorder>, isNew: boolean) {
  try {
    if (isNew) {
      await DisorderSchema.validate(disorder, { abortEarly: false });
    } else {
      const schemaKeys = Object.keys(DisorderSchema.fields);
      const validations = schemaKeys.map((key) => {
        if (key in disorder) {
          const schema = Yup.reach(DisorderSchema, key) as Yup.AnySchema;
          const disorderKey = key as keyof typeof disorder;
          return schema.validate(disorder[disorderKey]);
        }
      });
      await Promise.all(validations);
    }

    return null;
  } catch (error) {
    if (error instanceof Yup.ValidationError) {
      return {
        errors: error.errors,
        value: error.value,
      };
    } else {
      return {
        message: error.message,
      };
    }
  }
}