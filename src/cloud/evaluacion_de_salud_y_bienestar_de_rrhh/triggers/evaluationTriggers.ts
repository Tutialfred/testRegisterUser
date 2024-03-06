import Parse from 'parse/node';
import { IEvaluation } from '../models/evaluation.interface';
import { validateEvaluation } from '../validators/validateEvaluation';

Parse.Cloud.beforeSave('evaluation', async (request) => {
  try{
  // verificando si el usuario esta autenticado
  // Convertimos el objeto Parse a un objeto JavaScript
  const data = request.object.toJSON() as unknown as Partial<IEvaluation>;
  // Si request.original es undefined, entonces el objeto es nuevo
  const isNew = !request.original;
  const error = await validateEvaluation(data, isNew);
  if (error) {
    const errorObject = JSON.stringify(error);
    throw new Parse.Error(Parse.Error.VALIDATION_ERROR, JSON.parse(errorObject));
  }
}catch (error) {
  console.error('Error while saving the evaluation:', error);
  throw error;
}
});

