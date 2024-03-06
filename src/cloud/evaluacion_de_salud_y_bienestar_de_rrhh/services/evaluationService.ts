
import { createEvaluationData, deleteEvaluationData, getEvaluationByIdData, getAllEvaluationData, updateEvaluationData } from "../database/evaluation";


  
  export async function getAllEvaluationService(page: number) {
    try {
      const data = await getAllEvaluationData(page);
      return data;
    } catch (error) {
      throw error;
    }
  }
  export async function getEvaluationByIdService(objectId: string) {
    try {
      const data = await getEvaluationByIdData(objectId);
      return data;
    } catch (error) {
      throw error;
    }
  }
  
  export async function createEvaluationService(objectData: any) {
    try {
      const data = await createEvaluationData(objectData);
  
      return data;
    } catch (error) {
      throw error;
    }
  }
  
  export async function updateEvaluationService(objectId: string, objectData: any) {
    try {
      const data = await updateEvaluationData(objectId, objectData);
      return data;
    } catch (error) {
      throw error;
    }
  }
  
  export async function deleteEvaluationService(objectId: string) {
    try {
      await deleteEvaluationData(objectId);
    } catch (error) {
      throw error;
    }
  }
  