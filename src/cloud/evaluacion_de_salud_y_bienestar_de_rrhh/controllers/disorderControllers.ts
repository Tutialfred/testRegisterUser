
import { createDisorderService, deleteDisorderService, getDisorderByIdService, getAllDisorderService, updateDisorderService } from "../services/disorderService";



  
  export function getAllDisorder(Parse: any) {
    return async (request: any) => {
      try {
        const { page } = request.params;
        const data = await getAllDisorderService(page);
  
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
  
  export function getDisorderById(Parse: any) {
    return async (request: any) => {
      try {
        const { objectId } = request.params;
        const data = await getDisorderByIdService(objectId);
  
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
  
  export function createDisorder(Parse: any) {
    return async (request: any) => {
      try {
        const { objectData } = request.params;
        const data = await createDisorderService(objectData);
  
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
  
  export function updateDisorder(Parse: any) {
    return async (request: any) => {
      try {
        const { objectId, objectData } = request.params;
        const data = await updateDisorderService(objectId, objectData);
  
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
  
  export function deleteDisorder(Parse: any) {
    return async (request: any) => {
      try {
        const { objectId } = request.params;
        await deleteDisorderService(objectId);
  
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
  