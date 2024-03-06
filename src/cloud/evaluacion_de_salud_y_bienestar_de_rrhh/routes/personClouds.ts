import Parse from 'parse/node';
import {
  createPerson,
  deletePerson,
  getAllPeople,
  getPersonById,
  updatePerson,
} from '../controllers/personControllers';

Parse.Cloud.define('getAllPeople', getAllPeople(Parse));
Parse.Cloud.define('getPersonById', getPersonById(Parse));
Parse.Cloud.define('createPerson', createPerson(Parse));
Parse.Cloud.define('updatePerson', updatePerson(Parse), { requireUser: true });
Parse.Cloud.define('deletePerson', deletePerson(Parse));
