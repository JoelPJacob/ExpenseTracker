import * as Yup from 'yup';

export const transactionValidationSchema = Yup.object({
  title: Yup.string().required('Title is required'),
  amount: Yup.number().typeError('Amount must be a number').required('Amount is required'),
  date: Yup.date().required('Date is required'),
});