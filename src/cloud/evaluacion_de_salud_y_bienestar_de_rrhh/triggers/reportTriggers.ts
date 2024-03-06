import Parse from 'parse/node';
import { IReport } from '../models/report.interface';
import { validateReport } from '../validators/validateReport';

Parse.Cloud.beforeSave('report', async (request) => {
  try{ 
  // verificando si el usuario esta autenticado
  // Convertimos el objeto Parse a un objeto JavaScript
  const data = request.object.toJSON() as unknown as Partial<IReport>;
  // Si request.original es undefined, entonces el objeto es nuevo
  const isNew = !request.original;
  const error = await validateReport(data, isNew);
  if (error) {
    const errorObject = JSON.stringify(error);
    throw new Parse.Error(Parse.Error.VALIDATION_ERROR, JSON.parse(errorObject));
  }
}catch (error) {
  console.error('Error while saving the report:', error);
  throw error;
}
});

