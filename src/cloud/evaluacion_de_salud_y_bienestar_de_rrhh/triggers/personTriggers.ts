/* eslint-disable etc/no-commented-out-code */
/* eslint-disable no-console */
import Parse from 'parse/node';
import { IPerson } from '../models/person.interface';
import { validatePerson } from '../validators/validatePerson';

Parse.Cloud.beforeSave('person', async (request) => {
  try {
    // Convert the Parse object to a JavaScript object
    const data = request.object.toJSON() as unknown as Partial<IPerson>;
    // If request.original is undefined, then the object is new
    const isNew = !request.original;
    const error = await validatePerson(data, isNew);
    if (error) {
      const errorObject = JSON.stringify(error);
      throw new Parse.Error(Parse.Error.VALIDATION_ERROR, JSON.parse(errorObject));
    }
  } catch (error) {
    console.error('Error while saving the person:', error);
    throw error;
  }
});
