
import { createDisorderData, deleteDisorderData, getDisorderByIdData, getAllDisorderData, updateDisorderData } from "../database/disorder";


  
  export async function getAllDisorderService(page: number) {
    try {
      const data = await getAllDisorderData(page);
      return data;
    } catch (error) {
      throw error;
    }
  }
  export async function getDisorderByIdService(objectId: string) {
    try {
      const data = await getDisorderByIdData(objectId);
      return data;
    } catch (error) {
      throw error;
    }
  }
  
  export async function createDisorderService(objectData: any) {
    try {
      const data = await createDisorderData(objectData);
  
      return data;
    } catch (error) {
      throw error;
    }
  }
  
  export async function updateDisorderService(objectId: string, objectData: any) {
    try {
      const data = await updateDisorderData(objectId, objectData);
      return data;
    } catch (error) {
      throw error;
    }
  }
  
  export async function deleteDisorderService(objectId: string) {
    try {
      await deleteDisorderData(objectId);
    } catch (error) {
      throw error;
    }
  }
  