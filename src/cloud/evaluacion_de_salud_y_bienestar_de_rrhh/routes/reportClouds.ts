import Parse from 'parse/node';
import { createReport, deleteReport, getReportById, getAllReport, updateReport } from '../controllers/reportControllers';


Parse.Cloud.define('getAllReport', getAllReport(Parse));
Parse.Cloud.define('getReportById', getReportById(Parse));
Parse.Cloud.define('createReport', createReport(Parse), { requireUser: true });
Parse.Cloud.define('updateReport', updateReport(Parse), { requireUser: true });
Parse.Cloud.define('deleteReport', deleteReport(Parse), { requireUser: true });