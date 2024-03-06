/* eslint-disable guard-for-in */
/* eslint-disable no-useless-catch */
/* eslint-disable no-inline-comments */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-throw-literal */
import Parse from 'parse/node';

export async function getAllAdvicesData(page: number) {
  try {
    // Verificar si la página es nula o indefinida
    if (page === null || page === undefined) {
      throw new Parse.Error(Parse.Error.INVALID_QUERY, 'Page number is missing.');
    }

    const Advice = Parse.Object.extend('advice');
    const query = new Parse.Query(Advice);
    query.limit(5); // Limita los resultados a 5 por página
    query.skip((page - 1) * 5); // Salta los drinks de las páginas anteriores
    const data = await query.find();

    if (!data || data.length === 0) {
      throw new Parse.Error(Parse.Error.OBJECT_NOT_FOUND, `No advices found.`);
    }

    return data;
  } catch (error) {
    throw error;
  }
}

export async function getAdviceByIdData(objectId: string) {
  try {
    // Verificar si drinkId es nulo o indefinido
    if (!objectId) {
      throw new Parse.Error(Parse.Error.INVALID_QUERY, 'Advice ID is missing.');
    }

    const Advice = Parse.Object.extend('advice');
    const query = new Parse.Query(Advice);
    query.equalTo('objectId', objectId);
    const data = await query.first();

    if (!data) {
      throw new Parse.Error(Parse.Error.OBJECT_NOT_FOUND, `Advice with ID ${objectId} does not exist.`);
    }

    return data;
  } catch (error) {
    throw error;
  }
}
export async function createAdviceData(objectData: any) {
  try {
    // Verificar si objectData existe
    if (!objectData) {
      throw {
        code: Parse.Error.OBJECT_NOT_FOUND,
        message: 'objectData is missing.',
      };
    }

    const Advice = Parse.Object.extend('advice');
    const advice = new Advice();

    for (const key in objectData) {
      if (objectData.hasOwnProperty(key)) {
        advice.set(key, objectData[key]);
      }
    }

    await advice.save();
    return advice;
  } catch (error) {
    throw {
      code: error.code || Parse.Error.INTERNAL_SERVER_ERROR,
      message: error.message,
    };
  }
}

export async function updateAdviceData(objectId: string, objectData: any) {
  try {
    // Verificar si drinkId y objectData existen
    if (!objectId || !objectData) {
      throw new Parse.Error(Parse.Error.INVALID_QUERY, 'Advice ID or objectData is missing.');
    }

    const Advice = Parse.Object.extend('advice');
    const query = new Parse.Query(Advice);
    query.equalTo('objectId', objectId);
    const data = await query.first();

    if (!data) {
      throw new Parse.Error(Parse.Error.OBJECT_NOT_FOUND, `Advice with ID ${objectId} does not exist.`);
    }

    // Actualizar los campos permitidos
    for (const key in objectData) {
      data.set(key, objectData[key]);
    }
    await data.save(null, { useMasterKey: true });

    return data;
  } catch (error) {
    throw error;
  }
}

export async function deleteAdviceData(objectIdPerson: string) {
  try {
    // Verificar si objectIdPerson es nulo o indefinido
    if (!objectIdPerson) {
      throw new Parse.Error(Parse.Error.INVALID_QUERY, 'Person ID is missing.');
    }

    const Advice = Parse.Object.extend('advice');
    const query = new Parse.Query(Advice);
    query.equalTo('objectIdPerson', objectIdPerson); // Buscar por objectIdPerson
    const data = await query.first();

    if (!data) {
      throw new Parse.Error(Parse.Error.OBJECT_NOT_FOUND, `Advice with Person ID ${objectIdPerson} does not exist.`);
    }

    await data.destroy();
  } catch (error) {
    throw error;
  }
}
