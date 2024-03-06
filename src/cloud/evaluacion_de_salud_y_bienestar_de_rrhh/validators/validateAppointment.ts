import { IAppointment } from '../models/appointment.interface';
import { AppointmentSchema } from '../schemas/appointmentSchema';
import * as Yup from 'yup';

export async function validateAppointment(appointment: Partial<IAppointment>, isNew: boolean) {
  try {
    if (isNew) {
      await AppointmentSchema.validate(appointment, { abortEarly: false });
    } else {
      const schemaKeys = Object.keys(AppointmentSchema.fields);
      const validations = schemaKeys.map((key) => {
        if (key in appointment) {
          const schema = Yup.reach(AppointmentSchema, key) as Yup.AnySchema;
          const appointmentKey = key as keyof typeof appointment;
          return schema.validate(appointment[appointmentKey]);
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