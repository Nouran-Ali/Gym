import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  phoneNumber: yup.string().required('رقم الهاتف مطلوب'),
  password: yup.string().required('كلمة المرور مطلوبة'),
});
