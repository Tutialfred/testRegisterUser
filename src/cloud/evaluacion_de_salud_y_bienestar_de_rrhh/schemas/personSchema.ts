import * as Yup from 'yup';

export const PersonSchema = Yup.object().shape({
  per_user_id: Yup.object()
    .shape({
      __type: Yup.string().required(),
      className: Yup.string().required(),
      objectId: Yup.string().required(),
    })
    .required('The per_user_id is required'),
  per_interests: Yup.string().required('The per_interests is required'),
});
