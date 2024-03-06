/* eslint-disable no-console */
/* eslint-disable etc/no-commented-out-code */
/* eslint-disable no-useless-catch */
/* eslint-disable @typescript-eslint/no-explicit-any */

import Parse from 'parse/node';
import { registerTableFromJSONData, deleteTableFromJSONData, getAllTableFromJSONData, getTableFromJSONByIdData, updateTableFromJSONData } from '../database/tableFromJSON';
import { checkUserRole } from '../../cloud/evaluacion_de_salud_y_bienestar_de_rrhh/utils/accesControl';

export async function getAllTableFromJSONService(page: number, tableName:string, sessionToken:string) {
  try {
    const permission = await checkUserRole(sessionToken, ['superuser', 'admin', "ia"]);
  
    if (!permission) {
      throw new Parse.Error(Parse.Error.OPERATION_FORBIDDEN, `User does not have permission to delete users.`);
    }

    const tables = await getAllTableFromJSONData(page, tableName);
    return tables;
  } catch (error) {
    throw error;
  }
}

export async function getTableFromJSONByIdService(tableFromJSONId: string, tableName:string, sessionToken:string) {
  try {
    const permission = await checkUserRole(sessionToken, ['superuser', 'admin', "ia"]);
  
    if (!permission) {
      throw new Parse.Error(Parse.Error.OPERATION_FORBIDDEN, `User does not have permission to delete users.`);
    }

    const table = await getTableFromJSONByIdData(tableFromJSONId, tableName);
    return table;
  } catch (error) {
    throw error;
  }
}

export async function registerTableFromJSONService(tablename:string , data: any, sessionToken: string) {
    try {
      const permission = await checkUserRole(sessionToken, ['superuser', 'admin', "ia"]);
  
      if (!permission) {
        throw new Parse.Error(Parse.Error.OPERATION_FORBIDDEN, `User does not have permission to delete users.`);
      }
  
      const table = await registerTableFromJSONData(tablename ,data);
  
      return table
    } catch (error) {
      throw error;
    }
}

export async function updateTableFromJSONService(tableFromJSONId: string, data: any, tableName:string, sessionToken:string) {
  try {
    const permission = await checkUserRole(sessionToken, ['superuser', 'admin', "ia"]);
  
    if (!permission) {
      throw new Parse.Error(Parse.Error.OPERATION_FORBIDDEN, `User does not have permission to delete users.`);
    }

    const table = await updateTableFromJSONData(tableFromJSONId, data, tableName);
    return table;
  } catch (error) {
    throw error;
  }
}

export async function deleteTableFromJSONService(tableFromJSONId: string, tableName:string, sessionToken:string) {
  try {
    const permission = await checkUserRole(sessionToken, ['superuser', 'admin', "ia"]);
  
    if (!permission) {
      throw new Parse.Error(Parse.Error.OPERATION_FORBIDDEN, `User does not have permission to delete users.`);
    }

    await deleteTableFromJSONData(tableFromJSONId, tableName);
  } catch (error) {
    throw error;
  }
}