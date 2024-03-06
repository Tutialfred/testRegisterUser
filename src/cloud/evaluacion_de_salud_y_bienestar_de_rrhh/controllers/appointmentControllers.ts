
import { createAppointmentService, deleteAppointmentService, getAppointmentByIdService, getAllAppointmentService, updateAppointmentService } from "../services/appointmentService";



  
  export function getAllAppointment(Parse: any) {
    return async (request: any) => {
      try {
        const { page } = request.params;
        const data = await getAllAppointmentService(page);
  
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
  
  export function getAppointmentById(Parse: any) {
    return async (request: any) => {
      try {
        const { objectId } = request.params;
        const data = await getAppointmentByIdService(objectId);
  
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
  
  export function createAppointment(Parse: any) {
    return async (request: any) => {
      try {
        const { objectData } = request.params;
        const data = await createAppointmentService(objectData);
  
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
  
  export function updateAppointment(Parse: any) {
    return async (request: any) => {
      try {
        const { objectId, objectData } = request.params;
        const data = await updateAppointmentService(objectId, objectData);
  
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
  
  export function deleteAppointment(Parse: any) {
    return async (request: any) => {
      try {
        const { objectId } = request.params;
        await deleteAppointmentService(objectId);
  
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
  