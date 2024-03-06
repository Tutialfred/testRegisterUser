import Parse from 'parse/node';
import { createDisorder, deleteDisorder, getDisorderById, getAllDisorder, updateDisorder } from '../controllers/disorderControllers';


Parse.Cloud.define('getAllDisorder', getAllDisorder(Parse));
Parse.Cloud.define('getDisorderById', getDisorderById(Parse));
Parse.Cloud.define('createDisorder', createDisorder(Parse), { requireUser: true });
Parse.Cloud.define('updateDisorder', updateDisorder(Parse), { requireUser: true });
Parse.Cloud.define('deleteDisorder', deleteDisorder(Parse), { requireUser: true });