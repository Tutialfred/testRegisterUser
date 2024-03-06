/* eslint-disable no-console */
/* eslint-disable etc/no-commented-out-code */
/* eslint-disable no-useless-catch */

/* eslint-disable @typescript-eslint/no-explicit-any */

// import Parse from 'parse/node';
import {
  createPersonData,
  deletePersonData,
  getAllPeopleData,
  getPersonByIdData,
  updatePersonData,
} from '../database/persons';
// import { assignRoleToUser } from '../utils/assignRoles';
// import { checkUserRole } from '../utils/accesControl';

export async function getAllPeopleService(page: number) {
  try {
    const persons = await getAllPeopleData(page);
    return persons;
  } catch (error) {
    throw error;
  }
}

export async function getPersonByIdService(personId: string) {
  try {
    const person = await getPersonByIdData(personId);
    return person;
  } catch (error) {
    throw error;
  }
}

export async function createPersonService(objectData: any) {
  try {
    const person = await createPersonData(objectData);

    //Asignar un rol por defecto al nuevo usuario
    // await assignRoleToUser(person, 'user');
    return person;
  } catch (error) {
    throw error;
  }
}

export async function updatePersonService(personId: string, objectData: any) {
  try {
    const person = await updatePersonData(personId, objectData);
    return person;
  } catch (error) {
    throw error;
  }
}

export async function deletePersonService(objectIdPerson: string) {
  try {
    await deletePersonData(objectIdPerson);
  } catch (error) {
    throw error;
  }
}
