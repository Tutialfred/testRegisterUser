/* eslint-disable no-console */
/* eslint-disable etc/no-commented-out-code */
/* eslint-disable no-useless-catch */

/* eslint-disable @typescript-eslint/no-explicit-any */

import Parse from 'parse/node';
import { createNewUserData, deleteUserData, getAllUsersData, getUserData, updateUserData } from '../database/users';
import { assignRoleToUser } from '../utils/assignRoles';
import { checkUserRole } from '../utils/accesControl';

export async function getAllUsersService(page: number) {
  try {
    const users = await getAllUsersData(page);
    return users;
  } catch (error) {
    throw error;
  }
}

export async function getUserService(userId: string) {
  try {
    const user = await getUserData(userId);
    return user;
  } catch (error) {
    throw error;
  }
}

export async function createUserService(objectData: any) {
  try {
    const user = await createNewUserData(objectData);

    //Asignar un rol por defecto al nuevo usuario
    await assignRoleToUser(user, 'user');
    return user;
  } catch (error) {
    throw error;
  }
}

export async function updateUserService(userId: string, objectData: any) {
  try {
    const user = await updateUserData(userId, objectData);
    return user;
  } catch (error) {
    throw error;
  }
}

export async function deleteUserService(userId: string, sessionToken: string) {
  try {
    const permission = await checkUserRole(sessionToken, ['superuser', 'admin']);

    if (!permission) {
      throw new Parse.Error(Parse.Error.OPERATION_FORBIDDEN, `User does not have permission to delete users.`);
    }

    await deleteUserData(userId);

    return {
      success: true,
      message: 'User deleted successfully',
    };
  } catch (error) {
    throw error;
  }
}
