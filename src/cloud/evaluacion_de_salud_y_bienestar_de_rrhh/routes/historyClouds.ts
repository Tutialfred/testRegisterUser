import Parse from 'parse/node';
import { createHistory, deleteHistory, getHistoryById, getAllHistory, updateHistory } from '../controllers/historyControllers';


Parse.Cloud.define('getAllHistory', getAllHistory(Parse));
Parse.Cloud.define('getHistoryById', getHistoryById(Parse));
Parse.Cloud.define('createHistory', createHistory(Parse), { requireUser: true });
Parse.Cloud.define('updateHistory', updateHistory(Parse), { requireUser: true });
Parse.Cloud.define('deleteHistory', deleteHistory(Parse), { requireUser: true });