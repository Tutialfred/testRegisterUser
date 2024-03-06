import Parse from 'parse/node';
import { IHistory } from '../models/history.interface';
import { validateHistory } from '../validators/validateHistory';

Parse.Cloud.beforeSave('history', async (request) => {
  try{
  // verificando si el usuario esta autenticado
  // Convertimos el objeto Parse a un objeto JavaScript
  const data = request.object.toJSON() as unknown as Partial<IHistory>;
  // Si request.original es undefined, entonces el objeto es nuevo
  const isNew = !request.original;
  const error = await validateHistory(data, isNew);
  if (error) {
    const errorObject = JSON.stringify(error);
    throw new Parse.Error(Parse.Error.VALIDATION_ERROR, JSON.parse(errorObject));
  }
}catch (error) {
  console.error('Error while saving the history:', error);
  throw error;
}
});