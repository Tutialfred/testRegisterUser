
import { createReportData, deleteReportData, getReportByIdData, getAllReportData, updateReportData } from "../database/report";


  
  export async function getAllReportService(page: number) {
    try {
      const data = await getAllReportData(page);
      return data;
    } catch (error) {
      throw error;
    }
  }
  export async function getReportByIdService(objectId: string) {
    try {
      const data = await getReportByIdData(objectId);
      return data;
    } catch (error) {
      throw error;
    }
  }
  
  export async function createReportService(objectData: any) {
    try {
      const data = await createReportData(objectData);
  
      return data;
    } catch (error) {
      throw error;
    }
  }
  
  export async function updateReportService(objectId: string, objectData: any) {
    try {
      const data = await updateReportData(objectId, objectData);
      return data;
    } catch (error) {
      throw error;
    }
  }
  
  export async function deleteReportService(objectId: string) {
    try {
      await deleteReportData(objectId);
    } catch (error) {
      throw error;
    }
  }
  