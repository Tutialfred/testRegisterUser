import * as Yup from 'yup';
export const HistorySchema = Yup.object().shape({
    his_person_id: Yup.string().required('The his_person_id is required'),
    his_start_date: Yup.string().required('The his_start_date is required'),
    his_end_date: Yup.string().required('The his_end_date is required'),
    his_overall_result: Yup.string().required('The his_overall_result is required'),
    his_details: Yup.string().required('The his_details is required'),
});