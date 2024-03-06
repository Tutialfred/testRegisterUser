/* eslint-disable @typescript-eslint/no-explicit-any */

/* eslint-disable no-console */

import {
  createAdviceService,
  deleteAdviceService,
  getAdviceByIdService,
  getAllAdvicesService,
  updateAdviceService,
} from '../services/adviceService';

export function getAllAdvices(Parse: any) {
  return async (request: any) => {
    try {
      const { page } = request.params;
      const data = await getAllAdvicesService(page);

      return {
        status: 'success',
        result: true,
        data,
      };
    } catch (error) {
      console.error(`Error code: ${error.code}, Error message: ${error.message}`);
      return {
        status: 'error',
        result: false,
        errorDetails: {
          code: error.code || Parse.Error.INTERNAL_SERVER_ERROR,
          message: error.message,
        },
      };
    }
  };
}

export function getAdviceById(Parse: any) {
  return async (request: any) => {
    try {
      const { objectId } = request.params;
      const data = await getAdviceByIdService(objectId);

      return {
        status: 'success',
        result: true,
        data,
      };
    } catch (error) {
      console.error(`Error code: ${error.code}, Error message: ${error.message}`);
      return {
        status: 'error',
        result: false,
        errorDetails: {
          code: error.code || Parse.Error.INTERNAL_SERVER_ERROR,
          message: error.message,
        },
      };
    }
  };
}
export function createAdvice(Parse: any) {
  return async (request: any) => {
    try {
      const objectData = request.params;
      const adviceResponse = await createAdviceService(objectData);

      return {
        status: 'success',
        result: true,
        adviceResponse,
      };
    } catch (error) {
      console.error(`Error code: ${error.code}, Error message: ${error.message}`);
      return {
        status: 'error',
        result: false,
        errorDetails: {
          code: error.code || Parse.Error.INTERNAL_SERVER_ERROR,
          message: error.message,
        },
      };
    }
  };
}

export function updateAdvice(Parse: any) {
  return async (request: any) => {
    try {
      const { objectId, objectData } = request.params;
      const data = await updateAdviceService(objectId, objectData);

      return {
        status: 'success',
        result: true,
        data,
      };
    } catch (error) {
      console.error(`Error code: ${error.code}, Error message: ${error.message}`);
      return {
        status: 'error',
        result: false,
        errorDetails: {
          code: error.code || Parse.Error.INTERNAL_SERVER_ERROR,
          message: error.message,
        },
      };
    }
  };
}

export function deleteAdvice(Parse: any) {
  return async (request: any) => {
    try {
      const { objectIdPerson } = request.params;

      await deleteAdviceService(objectIdPerson);

      return {
        status: 'success',
        result: true,
      };
    } catch (error) {
      console.error(`Error code: ${error.code}, Error message: ${error.message}`);
      return {
        status: 'error',
        result: false,
        errorDetails: {
          code: error.code || Parse.Error.INTERNAL_SERVER_ERROR,
          message: error.message,
        },
      };
    }
  };
}
