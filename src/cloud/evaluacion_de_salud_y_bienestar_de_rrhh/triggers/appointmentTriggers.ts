import Parse from 'parse/node';
import { IAppointment } from '../models/appointment.interface';
import { validateAppointment } from '../validators/validateAppointment';

Parse.Cloud.beforeSave('appointment', async (request) => {
  try{
  // verificando si el usuario esta autenticado
  // Convertimos el objeto Parse a un objeto JavaScript
  const data = request.object.toJSON() as unknown as Partial<IAppointment>;
  // Si request.original es undefined, entonces el objeto es nuevo
  const isNew = !request.original;
  const error = await validateAppointment(data, isNew);
  if (error) {
    const errorObject = JSON.stringify(error);
    throw new Parse.Error(Parse.Error.VALIDATION_ERROR, JSON.parse(errorObject));
  }
} catch (error) {
  console.error('Error while saving the appointment:', error);
  throw error;
}
});

