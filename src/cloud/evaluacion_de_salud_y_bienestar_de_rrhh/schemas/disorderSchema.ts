import * as Yup from 'yup';
export const DisorderSchema = Yup.object().shape({
    dis_name: Yup.string().required('The dis_name es requerido is required'),
    dis_description: Yup.string().required('The dis_description is required')
});