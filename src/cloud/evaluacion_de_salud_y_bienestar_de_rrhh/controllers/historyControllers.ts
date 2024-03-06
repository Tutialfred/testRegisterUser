
import { createHistoryService, deleteHistoryService, getHistoryByIdService, getAllHistoryService, updateHistoryService } from "../services/historySchema";



  
  export function getAllHistory(Parse: any) {
    return async (request: any) => {
      try {
        const { page } = request.params;
        const data = await getAllHistoryService(page);
  
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
  
  export function getHistoryById(Parse: any) {
    return async (request: any) => {
      try {
        const { objectId } = request.params;
        const data = await getHistoryByIdService(objectId);
  
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
  
  export function createHistory(Parse: any) {
    return async (request: any) => {
      try {
        const { objectData } = request.params;
        const data = await createHistoryService(objectData);
  
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
  
  export function updateHistory(Parse: any) {
    return async (request: any) => {
      try {
        const { objectId, objectData } = request.params;
        const data = await updateHistoryService(objectId, objectData);
  
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
  
  export function deleteHistory(Parse: any) {
    return async (request: any) => {
      try {
        const { objectId } = request.params;
        await deleteHistoryService(objectId);
  
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
  