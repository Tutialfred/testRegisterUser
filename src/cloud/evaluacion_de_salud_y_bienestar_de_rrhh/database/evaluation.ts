import Parse from 'parse/node';

export async function getAllEvaluationData(page: number) {
  try {
    // Verificar si la página es nula o indefinida
    if (page === null || page === undefined) {
      throw new Parse.Error(Parse.Error.INVALID_QUERY, 'Page number is missing.');
    }

    const evaluation = Parse.Object.extend('evaluation');
    const query = new Parse.Query(evaluation);
    query.limit(5); // Limita los resultados a 5 por página
    query.skip((page - 1) * 5); // Salta los drinks de las páginas anteriores
    const data = await query.find();

    if (!data || data.length === 0) {
      throw new Parse.Error(Parse.Error.OBJECT_NOT_FOUND, `No Evaluation found.`);
    }

    return data;
  } catch (error) {
    throw error;
  }
}

export async function getEvaluationByIdData(objectId: string) {
  try {
    // Verificar si drinkId es nulo o indefinido
    if (!objectId) {
      throw new Parse.Error(Parse.Error.INVALID_QUERY, 'Evaluation ID is missing.');
    }

    const evaluation = Parse.Object.extend('evaluation');
    const query = new Parse.Query(evaluation);
    query.equalTo('objectId', objectId);
    const data = await query.first();

    if (!data) {
      throw new Parse.Error(Parse.Error.OBJECT_NOT_FOUND, `Evaluation with ID ${objectId} does not exist.`);
    }

    return data;
  } catch (error) {
    throw error;
  }
}

export async function createEvaluationData(objectData: any) {
  try {
    // Verificar si objectData existe
    if (!objectData) {
      throw {
        code: Parse.Error.OBJECT_NOT_FOUND,
        message: 'objectData is missing.',
      };
    }

    const evaluation = Parse.Object.extend('evaluation');
    const data = new evaluation();

    for (const key in objectData) {
      if (objectData.hasOwnProperty(key)) {
        data.set(key, objectData[key]);
      }
    }

    await data.save();
    return data;
  } catch (error) {
    throw {
      code: error.code || Parse.Error.INTERNAL_SERVER_ERROR,
      message: error.message,
    };
  }
}

export async function updateEvaluationData(objectId: string, objectData: any) {
  try {
    // Verificar si drinkId y objectData existen
    if (!objectId || !objectData) {
      throw new Parse.Error(Parse.Error.INVALID_QUERY, 'Evaluation ID or objectData is missing.');
    }

    const evaluation = Parse.Object.extend('evaluation');
    const query = new Parse.Query(evaluation);
    query.equalTo('objectId', objectId);
    const data = await query.first();

    if (!data) {
      throw new Parse.Error(Parse.Error.OBJECT_NOT_FOUND, `Evaluation with ID ${objectId} does not exist.`);
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

export async function deleteEvaluationData(objectId: string) {
  try {
    // Verificar si drinkId es nulo o indefinido
    if (!objectId) {
      throw new Parse.Error(Parse.Error.INVALID_QUERY, 'Evaluation ID is missing.');
    }

    const evaluation = Parse.Object.extend('evaluation');
    const query = new Parse.Query(evaluation);
    query.equalTo('objectId', objectId);
    const data = await query.first();

    if (!data) {
      throw new Parse.Error(Parse.Error.OBJECT_NOT_FOUND, `Evaluation with ID ${objectId} does not exist.`);
    }

    await data.destroy();
  } catch (error) {
    throw error;
  }
}