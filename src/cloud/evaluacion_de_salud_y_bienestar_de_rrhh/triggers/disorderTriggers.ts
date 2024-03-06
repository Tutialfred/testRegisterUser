import Parse from 'parse/node';
import { IDisorder } from '../models/disorder.interface';
import { validateDisorder } from '../validators/validateDisorder';

Parse.Cloud.beforeSave('disorder', async (request) => {
  try{
  // verificando si el usuario esta autenticado
  // Convertimos el objeto Parse a un objeto JavaScript
  const data = request.object.toJSON() as unknown as Partial<IDisorder>;
  // Si request.original es undefined, entonces el objeto es nuevo
  const isNew = !request.original;
  const error = await validateDisorder(data, isNew);
  if (error) {
    const errorObject = JSON.stringify(error);
    throw new Parse.Error(Parse.Error.VALIDATION_ERROR, JSON.parse(errorObject));
  }
}catch (error) {
  console.error('Error while saving the disorder:', error);
  throw error;
}
});