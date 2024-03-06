/* eslint-disable no-inline-comments */
/* eslint-disable no-console */
import Parse from 'parse/node';
import { IUser } from '../models/user.interface';
import { validateUser } from '../validators/validateUser';

Parse.Cloud.beforeSave(Parse.User, async (request) => {
  try {
    const user = request.object.toJSON() as unknown as Partial<IUser>;
    const isNew = !request.original;
    const error = await validateUser(user, isNew);
    if (error) {
      const errorObject = JSON.stringify(error);
      throw new Parse.Error(Parse.Error.VALIDATION_ERROR, JSON.parse(errorObject));
    }
  } catch (error) {
    console.error('Error while saving the user:', error);
    throw error;
  }
});

Parse.Cloud.afterDelete(Parse.User, async (request) => {
  try {
    const user = request.object; // This is the user that has just been deleted

    // Get the roles of the user
    const roleQuery = new Parse.Query(Parse.Role);
    roleQuery.equalTo('users', user);
    const roles = await roleQuery.find({ useMasterKey: true });

    // Remove the user from the roles
    const promises = roles.map((role) => {
      role.getUsers().remove(user);
      return role.save(null, { useMasterKey: true });
    });

    await Promise.all(promises);
  } catch (error) {
    console.error('Error while deleting the user:', error);
    throw error;
  }
});
