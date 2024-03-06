import * as Yup from 'yup';
export const ReportSchema = Yup.object().shape({
    rep_evaluation_id: Yup.string().required('The rep_evaluation_id is required'),
    rep_disorder_id: Yup.string().required('The rep_disorder_id is required'),
    rep_details: Yup.string().required('The rep_details is required'),
    rep_recommendations: Yup.string().required('The rep_recommendations is required')
});