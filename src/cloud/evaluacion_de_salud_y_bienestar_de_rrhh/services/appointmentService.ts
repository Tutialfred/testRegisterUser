
import { createAppointmentData, deleteAppointmentData, getAppointmentByIdData, getAllAppointmentData, updateAppointmentData } from "../database/appointment";


  
  export async function getAllAppointmentService(page: number) {
    try {
      const data = await getAllAppointmentData(page);
      return data;
    } catch (error) {
      throw error;
    }
  }
  export async function getAppointmentByIdService(objectId: string) {
    try {
      const data = await getAppointmentByIdData(objectId);
      return data;
    } catch (error) {
      throw error;
    }
  }
  
  export async function createAppointmentService(objectData: any) {
    try {
      const data = await createAppointmentData(objectData);
  
      return data;
    } catch (error) {
      throw error;
    }
  }
  
  export async function updateAppointmentService(objectId: string, objectData: any) {
    try {
      const data = await updateAppointmentData(objectId, objectData);
      return data;
    } catch (error) {
      throw error;
    }
  }
  
  export async function deleteAppointmentService(objectId: string) {
    try {
      await deleteAppointmentData(objectId);
    } catch (error) {
      throw error;
    }
  }
  