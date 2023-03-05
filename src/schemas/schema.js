import * as yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
    email: yup.string().email('Please enter a valid email').required('required'),
    password: yup.string().min(5).matches(passwordRules, { message: 'please create a stronger password' }).required('required'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'password must match').required('required')
});