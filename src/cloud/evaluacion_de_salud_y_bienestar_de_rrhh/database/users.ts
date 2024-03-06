/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable complexity */

/* eslint-disable no-inline-comments */
/* eslint-disable no-useless-catch */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-console */

import Parse from 'parse/node';

export async function getAllUsersData(page: number) {
  try {
    // Verificar si la página es nula o indefinida
    if (page === null || page === undefined) {
      throw new Parse.Error(Parse.Error.INVALID_QUERY, 'Page number is missing.');
    }

    const User = Parse.Object.extend('User');
    const query = new Parse.Query(User);
    query.limit(5); // Limita los resultados a 5 por página
    query.skip((page - 1) * 5); // Salta los usuarios de las páginas anteriores
    const users = await query.find();

    if (!users || users.length === 0) {
      throw new Parse.Error(Parse.Error.OBJECT_NOT_FOUND, `No users found.`);
    }

    return users;
  } catch (error) {
    throw error;
  }
}

export async function getUserData(userId: string) {
  try {
    // Verificar si userId es nulo o indefinido
    if (!userId) {
      throw new Parse.Error(Parse.Error.INVALID_QUERY, 'User ID is missing.');
    }

    const User = Parse.Object.extend('User');
    const query = new Parse.Query(User);
    query.equalTo('objectId', userId);
    const user = await query.first();

    if (!user) {
      throw new Parse.Error(Parse.Error.OBJECT_NOT_FOUND, `User with ID ${userId} does not exist.`);
    }

    return user;
  } catch (error) {
    throw error;
  }
}

export async function createNewUserData(objectData: any) {
  try {
    // Verificar si objectData existe
    if (!objectData) {
      throw new Parse.Error(Parse.Error.OBJECT_NOT_FOUND, 'objectData is missing.');
    }

    const User = Parse.Object.extend('User');
    const user = new User();

    for (const key in objectData) {
      if (objectData.hasOwnProperty(key)) {
        user.set(key, objectData[key]);
      }
    }

    await user.signUp();
    return user;
  } catch (error) {
    throw error;
  }
}

export async function updateUserData(userId: string, objectData: any) {
  try {
    // Verificar si userId y objectData existen
    if (!userId || !objectData) {
      throw new Parse.Error(Parse.Error.INVALID_QUERY, 'User ID or objectData is missing.');
    }

    const User = Parse.Object.extend('User');
    const query = new Parse.Query(User);
    query.equalTo('objectId', userId);
    const user = await query.first();

    if (!user) {
      throw new Parse.Error(Parse.Error.OBJECT_NOT_FOUND, `User with ID ${userId} does not exist.`);
    }

    // Actualizar los campos permitidos
    for (const key in objectData) {
      if (key !== 'username' && key !== 'email' && key !== 'password') {
        if (Array.isArray(objectData[key])) {
          // Si el campo es un array, fusionamos con el array existente
          const existingArray = user.get(key) || [];
          user.set(key, [...existingArray, ...objectData[key]]);
        } else if (typeof objectData[key] === 'object' && objectData[key] !== null) {
          // Si el campo es un objeto, fusionamos con el objeto existente
          const existingObject = user.get(key) || {};
          if (key === 'user_demographics' && 'location' in objectData[key]) {
            // Si estamos actualizando 'location', fusionamos con el objeto 'location' existente
            const existingLocation = existingObject.location || {};
            objectData[key].location = { ...existingLocation, ...objectData[key].location };
          }
          user.set(key, { ...existingObject, ...objectData[key] });
        } else {
          // Si no es un objeto ni un array, establecemos el valor directamente
          user.set(key, objectData[key]);
        }
      }
    }

    await user.save(null, { useMasterKey: true });

    return user;
  } catch (error) {
    throw error;
  }
}

export async function deleteUserData(userId: string) {
  try {
    //? Verificar si userId es nulo o indefinido
    if (!userId) {
      throw new Parse.Error(Parse.Error.INVALID_QUERY, 'User ID is missing.');
    }

    const User = Parse.Object.extend('User');
    const query = new Parse.Query(User);
    query.equalTo('objectId', userId);
    const user = await query.first();

    if (!user) {
      throw new Parse.Error(Parse.Error.OBJECT_NOT_FOUND, `User with ID ${userId} does not exist.`);
    }

    await user.destroy({ useMasterKey: true });
  } catch (error) {
    throw error;
  }
}
