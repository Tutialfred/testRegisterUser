import Parse from 'parse/node';
import { createEvaluation, deleteEvaluation, getEvaluationById, getAllEvaluation, updateEvaluation } from '../controllers/evaluationControllers';


Parse.Cloud.define('getAllEvaluation', getAllEvaluation(Parse));
Parse.Cloud.define('getEvaluationById', getEvaluationById(Parse));
Parse.Cloud.define('createEvaluation', createEvaluation(Parse), { requireUser: true });
Parse.Cloud.define('updateEvaluation', updateEvaluation(Parse), { requireUser: true });
Parse.Cloud.define('deleteEvaluation', deleteEvaluation(Parse), { requireUser: true });