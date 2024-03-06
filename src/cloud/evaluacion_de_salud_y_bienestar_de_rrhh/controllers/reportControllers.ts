
import { createReportService, deleteReportService, getReportByIdService, getAllReportService, updateReportService } from "../services/reportService";



  
  export function getAllReport(Parse: any) {
    return async (request: any) => {
      try {
        const { page } = request.params;
        const data = await getAllReportService(page);
  
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
  
  export function getReportById(Parse: any) {
    return async (request: any) => {
      try {
        const { objectId } = request.params;
        const data = await getReportByIdService(objectId);
  
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
  
  export function createReport(Parse: any) {
    return async (request: any) => {
      try {
        const { objectData } = request.params;
        const data = await createReportService(objectData);
  
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
  
  export function updateReport(Parse: any) {
    return async (request: any) => {
      try {
        const { objectId, objectData } = request.params;
        const data = await updateReportService(objectId, objectData);
  
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
  
  export function deleteReport(Parse: any) {
    return async (request: any) => {
      try {
        const { objectId } = request.params;
        await deleteReportService(objectId);
  
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
  