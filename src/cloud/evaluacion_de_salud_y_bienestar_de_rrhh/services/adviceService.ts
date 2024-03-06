/* eslint-disable no-useless-catch */
/* eslint-disable etc/no-commented-out-code */
/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  createAdviceData,
  deleteAdviceData,
  getAdviceByIdData,
  getAllAdvicesData,
  updateAdviceData,
} from '../database/advice';

export async function getAllAdvicesService(page: number) {
  try {
    const data = await getAllAdvicesData(page);
    return data;
  } catch (error) {
    throw error;
  }
}
export async function getAdviceByIdService(objectId: string) {
  try {
    const data = await getAdviceByIdData(objectId);
    return data;
  } catch (error) {
    throw error;
  }
}

/* eslint-disable no-useless-catch */
export async function createAdviceService(objectData: any) {
  try {
    // Guarda los datos en la tabla ADVICE
    const advice = await createAdviceData(objectData);

    // Envía los datos a tu endpoint de IA y obtén la respuesta

    return advice;
  } catch (error) {
    throw error;
  }
}

export async function updateAdviceService(objectId: string, objectData: any) {
  try {
    const data = await updateAdviceData(objectId, objectData);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function deleteAdviceService(objectId: string) {
  try {
    await deleteAdviceData(objectId);
  } catch (error) {
    throw error;
  }
}
