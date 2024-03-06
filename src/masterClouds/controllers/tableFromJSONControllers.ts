/* eslint-disable etc/no-commented-out-code */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */

import {
    registerTableFromJSONService,
    getAllTableFromJSONService,
    getTableFromJSONByIdService,
    updateTableFromJSONService,
    deleteTableFromJSONService
} from '../services/tableFromJSONServices';

export function getAllTableFromJSON(Parse: any) {
  return async (request: any) => {
    try {
      const { page, tableName } = request.params;

      const sessionToken = request.headers['x-parse-session-token'];

      const table = await getAllTableFromJSONService(page, tableName, sessionToken);

      return {
        status: 'success',
        result: true,
        table,
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

export function getTableFromJSONById(Parse: any) {
  return async (request: any) => {
    try {
      const { tableFromJSONId, tableName } = request.params;

      const sessionToken = request.headers['x-parse-session-token'];

      const table = await getTableFromJSONByIdService(tableFromJSONId, tableName, sessionToken);

      return {
        status: 'success',
        result: true,
        table,
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

export function registerTableFromJSON(Parse: any) {
    return async (request: any) => {
      try {
        const { tableName, data } = request.params;
        
        const sessionToken = request.headers['x-parse-session-token'];
        
        const table = await registerTableFromJSONService(tableName, data, sessionToken);
  
        return {
          status: 'success',
          result: true,
          table,
          message: 'Table created successfully'
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

export function updateTableFromJSON(Parse: any) {
  return async (request: any) => {
    try {
      const { tableFromJSONId, data, tableName } = request.params;

      const sessionToken = request.headers['x-parse-session-token'];

      const table = await updateTableFromJSONService(tableFromJSONId, data, tableName, sessionToken);

      return {
        status: 'success',
        result: true,
        table,
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

export function deleteTableFromJSON(Parse: any) {
  return async (request: any) => {
    try {
      const { tableFromJSONId, tableName } = request.params;

      const sessionToken = request.headers['x-parse-session-token'];

      await deleteTableFromJSONService(tableFromJSONId, tableName, sessionToken);

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