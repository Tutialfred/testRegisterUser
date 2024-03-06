import { IHistory } from '../models/history.interface';
import { HistorySchema } from '../schemas/historySchema';
import * as Yup from 'yup';

export async function validateHistory(history: Partial<IHistory>, isNew: boolean) {
  try {
    if (isNew) {
      await HistorySchema.validate(history, { abortEarly: false });
    } else {
      const schemaKeys = Object.keys(HistorySchema.fields);
      const validations = schemaKeys.map((key) => {
        if (key in history) {
          const schema = Yup.reach(HistorySchema, key) as Yup.AnySchema;
          const historyKey = key as keyof typeof history;
          return schema.validate(history[historyKey]);
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