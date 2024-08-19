import * as Yup from 'yup';
import { Gender, SubscriptionStatus, SubscriptionType } from '../types';

// Custom date format validation
// const dateFormat = 'YYYY-MM-DD';
const isDateFormat = (value) => {
  const datePattern = /^\d{4}-\d{2}-\d{2}$/;
  return datePattern.test(value);
};

export const CreateTraineeSchema = Yup.object().shape({
  parcode: Yup.string().required('Parcode is required'),
  phoneNumber: Yup.string().required('Phone number is required'),
  fullName: Yup.string().required('Full name is required'),
  gender: Yup.mixed()
    .oneOf(Object.values(Gender))
    .required('Gender is required'),
  dob: Yup.string().required('Date of birth is required'),
  subscriptionType: Yup.mixed()
    .oneOf(Object.values(SubscriptionType))
    .required('Subscription type is required'),
  subscriptionStatus: Yup.mixed()
    .oneOf(Object.values(SubscriptionStatus))
    .required('Subscription status is required'),
  subscriptionDate: Yup.string()
    .required('Subscription start date is required'),
  subscriptionStartDate: Yup.string()
    .required('Subscription start date is required'),
  subscriptionMonths: Yup.number()
    .integer('Subscription months must be an integer')
    .required('Subscription months is required'),
  subscriptionClasses: Yup.number()
    .integer('Subscription classes must be an integer')
    .required('Subscription classes is required'),
  paid: Yup.number()
    .integer('Paid must be an integer')
    .required('Paid is required'),
  reminder: Yup.number()
    .integer('Reminder must be an integer')
    .required('Reminder is required'),
  idFace: Yup.mixed().required('ID face is required'),
  idBack: Yup.mixed().required('ID back is required'),
  trainingName: Yup.string().nullable(),
  offerName: Yup.string().nullable(),
  medicalProblem: Yup.string().nullable(),
  surgeries: Yup.boolean().nullable(),
  goal: Yup.string().nullable(),
  sundayNote: Yup.string().nullable(),
  mondayNote: Yup.string().nullable(),
  tuesdayNote: Yup.string().nullable(),
  wednesdayNote: Yup.string().nullable(),
  thursdayNote: Yup.string().nullable(),
  fridayNote: Yup.string().nullable(),
  saturdayNote: Yup.string().nullable(),
  generalNote: Yup.string().nullable(),
});

export const UpdateTraineeSchema = Yup.object().shape({
  parcode: Yup.string().required('Parcode is required'),
  phoneNumber: Yup.string().required('Phone number is required'),
  fullName: Yup.string().nullable(),
  gender: Yup.mixed().oneOf(Object.values(Gender)).nullable(),
  dob: Yup.string().required('Date of birth is required'),
  subscriptionType: Yup.mixed()
    .oneOf(Object.values(SubscriptionType))
    .nullable(),
  // subscriptionStatus: Yup.mixed()
  //   .oneOf(Object.values(SubscriptionStatus))
  //   .nullable(),
  //   subscriptionStartDate: Yup.string()
  //   .required('Subscription start date is required'),
  //   subscriptionDate: Yup.string()
  //   .required('subscription date is required'),
  // subscriptionMonths: Yup.number()
  //   .integer('Subscription months must be an integer')
  //   .nullable(),
  // subscriptionClasses: Yup.number()
  //   .integer('Subscription classes must be an integer')
  //   .nullable(),
  // remainingClasses: Yup.number()
  //   .integer('Remaining classes must be an integer')
  //   .nullable(),
  // paid: Yup.number().integer('Paid must be an integer').nullable(),
  // reminder: Yup.number().integer('Reminder must be an integer').nullable(),
  // trainingName: Yup.string().nullable(),
  // offerName: Yup.string().nullable(),
  goal: Yup.string().nullable(),
  medicalProblem: Yup.string().nullable(),
  surgeries: Yup.boolean().nullable(),
  sundayNote: Yup.string().nullable(),
  mondayNote: Yup.string().nullable(),
  tuesdayNote: Yup.string().nullable(),
  wednesdayNote: Yup.string().nullable(),
  thursdayNote: Yup.string().nullable(),
  fridayNote: Yup.string().nullable(),
  saturdayNote: Yup.string().nullable(),
  generalNote: Yup.string().nullable(),
});
