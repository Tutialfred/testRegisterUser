import * as Yup from 'yup';
export const EvaluationSchema = Yup.object().shape({
    eva_date: Yup.string().required('The eva_date is required'),
    eva_person_id: Yup.string().required('The eva_person_id is required'),
    eva_specialist: Yup.string().required('The eva_specialist is required'),
    eva_result: Yup.string().required('The eva_result is required'),
    eva_comments: Yup.string().required('The eva_comments is required'),
});