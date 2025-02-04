import * as Yup from 'yup';

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  password: Yup.string()
    .min(7, 'Password must be at least 7 characters')
    .matches(/[A-Z]/, 'Must include at least one uppercase letter')
    .matches(/[a-z]/, 'Must include at least one lowercase letter')
    .matches(/\d/, 'Must include at least one number')
    .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Must include at least one special character')
    .required('Password is required'),
});
