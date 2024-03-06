/* eslint-disable etc/no-commented-out-code */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */

import {
  createUserService,
  deleteUserService,
  getAllUsersService,
  getUserService,
  updateUserService,
} from '../services/userService';

export function getAllUsers(Parse: any) {
  return async (request: any) => {
    try {
      const { page } = request.params;
      const users = await getAllUsersService(page);

      return {
        status: 'success',
        result: true,
        users,
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

export function getUserById(Parse: any) {
  return async (request: any) => {
    try {
      const { userId } = request.params;
      const user = await getUserService(userId);

      return {
        status: 'success',
        result: true,
        user,
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

export function createUserNew(Parse: any) {
  return async (request: any) => {
    try {
      const { objectData } = request.params;
      const user = await createUserService(objectData);

      return {
        status: 'success',
        result: true,
        user,
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

export function updateUser(Parse: any) {
  return async (request: any) => {
    try {
      const { userId, objectData } = request.params;
      const user = await updateUserService(userId, objectData);

      return {
        status: 'success',
        result: true,
        user,
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

export function deleteUser(Parse: any) {
  return async (request: any) => {
    console.log(request);

    try {
      const { userId } = request.params;
      const sessionToken = request.headers['x-parse-session-token'];

      await deleteUserService(userId, sessionToken);

      return {
        status: 'success',
        result: true,
        message: 'User deleted successfully',
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
