import Parse from 'parse/node';
import { createDataController } from '../controllers/seederControllers';

Parse.Cloud.define('createData', createDataController(Parse));