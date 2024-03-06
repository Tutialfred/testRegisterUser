import * as Yup from 'yup';
export const AppointmentSchema = Yup.object().shape({
    app_datatime: Yup.string().required('The app_datatime is required'),
    app_person_id: Yup.string().required('The app_person_id is required'),
    app_specialist: Yup.string().required('The app_specialist is required')
});