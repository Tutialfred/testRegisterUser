
import { createHistoryData, deleteHistoryData, getHistoryByIdData, getAllHistoryData, updateHistoryData } from "../database/history";


  
  export async function getAllHistoryService(page: number) {
    try {
      const data = await getAllHistoryData(page);
      return data;
    } catch (error) {
      throw error;
    }
  }
  export async function getHistoryByIdService(objectId: string) {
    try {
      const data = await getHistoryByIdData(objectId);
      return data;
    } catch (error) {
      throw error;
    }
  }
  
  export async function createHistoryService(objectData: any) {
    try {
      const data = await createHistoryData(objectData);
  
      return data;
    } catch (error) {
      throw error;
    }
  }
  
  export async function updateHistoryService(objectId: string, objectData: any) {
    try {
      const data = await updateHistoryData(objectId, objectData);
      return data;
    } catch (error) {
      throw error;
    }
  }
  
  export async function deleteHistoryService(objectId: string) {
    try {
      await deleteHistoryData(objectId);
    } catch (error) {
      throw error;
    }
  }
  