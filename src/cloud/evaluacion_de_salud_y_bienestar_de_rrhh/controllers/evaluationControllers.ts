
import { createEvaluationService, deleteEvaluationService, getEvaluationByIdService, getAllEvaluationService, updateEvaluationService } from "../services/evaluationService";



  
  export function getAllEvaluation(Parse: any) {
    return async (request: any) => {
      try {
        const { page } = request.params;
        const data = await getAllEvaluationService(page);
  
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
  
  export function getEvaluationById(Parse: any) {
    return async (request: any) => {
      try {
        const { objectId } = request.params;
        const data = await getEvaluationByIdService(objectId);
  
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
  
  export function createEvaluation(Parse: any) {
    return async (request: any) => {
      try {
        const { objectData } = request.params;
        const data = await createEvaluationService(objectData);
  
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
  
  export function updateEvaluation(Parse: any) {
    return async (request: any) => {
      try {
        const { objectId, objectData } = request.params;
        const data = await updateEvaluationService(objectId, objectData);
  
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
  
  export function deleteEvaluation(Parse: any) {
    return async (request: any) => {
      try {
        const { objectId } = request.params;
        await deleteEvaluationService(objectId);
  
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
  