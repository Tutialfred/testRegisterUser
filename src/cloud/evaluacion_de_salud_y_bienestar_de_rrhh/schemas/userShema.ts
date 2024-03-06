import * as Yup from 'yup';

export const UserSchema = Yup.object()
  .shape({
    username: Yup.string()
      .required('The username is required')
      .matches(/^[a-zA-Z0-9_]*$/, 'Only letters, numbers, and underscores are allowed'),
    password: Yup.string()
      .required('The password is required')
      .min(6, 'The password must be at least 6 characters long'),
    email: Yup.string().email('The email format is invalid').required('The email is required'),
    phone: Yup.string().notRequired().nullable(),
    user_interests: Yup.array()
      .of(
        Yup.object().shape({
          category: Yup.string().notRequired().nullable(),
          subcategory: Yup.string().notRequired().nullable(),
          additionalField1: Yup.string().notRequired().nullable(),
          additionalField2: Yup.string().notRequired().nullable(),
        }),
      )
      .notRequired()
      .nullable(),
    user_birthdate: Yup.mixed()
      .notRequired()
      .nullable()
      .transform((value, originalValue) => {
        if (typeof originalValue === 'string') {
          return new Date(originalValue);
        }
        return value;
      }),
    user_demographics: Yup.object().shape({
      age: Yup.number().notRequired().nullable(),
      gender: Yup.string().notRequired().nullable(),
      location: Yup.object().shape({
        country: Yup.string().notRequired(),
        province: Yup.string().notRequired(),
      }),
    }),
  })
  .strict();
