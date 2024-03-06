import { IEvaluation } from '../models/evaluation.interface';
import { EvaluationSchema } from '../schemas/evaluationSchema';
import * as Yup from 'yup';

export async function validateEvaluation(evaluation: Partial<IEvaluation>, isNew: boolean) {
  try {
    if (isNew) {
      await EvaluationSchema.validate(evaluation, { abortEarly: false });
    } else {
      const schemaKeys = Object.keys(EvaluationSchema.fields);
      const validations = schemaKeys.map((key) => {
        if (key in evaluation) {
          const schema = Yup.reach(EvaluationSchema, key) as Yup.AnySchema;
          const evaluationKey = key as keyof typeof evaluation;
          return schema.validate(evaluation[evaluationKey]);
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