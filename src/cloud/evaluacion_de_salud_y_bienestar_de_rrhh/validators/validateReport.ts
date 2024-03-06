import { IReport } from '../models/report.interface';
import { ReportSchema } from '../schemas/reportSchema';
import * as Yup from 'yup';

export async function validateReport(report: Partial<IReport>, isNew: boolean) {
  try {
    if (isNew) {
      await ReportSchema.validate(report, { abortEarly: false });
    } else {
      const schemaKeys = Object.keys(ReportSchema.fields);
      const validations = schemaKeys.map((key) => {
        if (key in report) {
          const schema = Yup.reach(ReportSchema, key) as Yup.AnySchema;
          const reportKey = key as keyof typeof report;
          return schema.validate(report[reportKey]);
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