import Parse from 'parse/node';
import { createAppointment, deleteAppointment, getAppointmentById, getAllAppointment, updateAppointment } from '../controllers/appointmentControllers';


Parse.Cloud.define('getAllAppointment', getAllAppointment(Parse));
Parse.Cloud.define('getAppointmentById', getAppointmentById(Parse));
Parse.Cloud.define('createAppointment', createAppointment(Parse), { requireUser: true });
Parse.Cloud.define('updateAppointment', updateAppointment(Parse), { requireUser: true });
Parse.Cloud.define('deleteAppointment', deleteAppointment(Parse), { requireUser: true });