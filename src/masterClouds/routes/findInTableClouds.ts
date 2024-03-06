import Parse from 'parse/node';
import { findInTable } from '../controllers/findInTableController';

Parse.Cloud.define('findInTable', findInTable(Parse));
