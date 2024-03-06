/* eslint-disable prefer-destructuring */
/* eslint-disable etc/no-commented-out-code */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */

import {
  createPersonService,
  deletePersonService,
  getAllPeopleService,
  getPersonByIdService,
  updatePersonService,
} from '../services/personService';
import { sendToIaEndpoint } from '../utils/sendToIaEndpoint';
import { deleteAdvice } from './adviceControllers';

export function getAllPeople(Parse: any) {
  return async (request: any) => {
    try {
      const { page } = request.params;
      const persons = await getAllPeopleService(page);

      return {
        status: 'success',
        result: true,
        persons,
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

export function getPersonById(Parse: any) {
  return async (request: any) => {
    try {
      const { personId } = request.params;
      const person = await getPersonByIdService(personId);

      return {
        status: 'success',
        result: true,
        person,
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

export function createPerson(Parse: any) {
  return async (request: any) => {
    try {
      const { objectData } = request.params;

      const person = await createPersonService(objectData);

      //obtengo el objectId de person
      const objectIdPerson = person.id;

      sendToIaEndpoint(objectData, Parse, objectIdPerson);
      return {
        status: 'success',
        result: true,
        person,
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

export function updatePerson(Parse: any) {
  return async (request: any) => {
    try {
      const { personId, objectData } = request.params;
      const person = await updatePersonService(personId, objectData);

      return {
        status: 'success',
        result: true,
        person,
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

export function deletePerson(Parse: any) {
  return async (request: any) => {
    try {
      const { personId } = request.params;
      //const sessionToken = request.headers.authorization;

      await deletePersonService(personId);

      // Llama a deleteAdvice después de eliminar la Persona
      await deleteAdvice(Parse)({ params: { objectIdPerson: personId } });

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
