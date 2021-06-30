import React from 'react';
import * as yup from 'yup';
import { Formik } from 'formik';
import SignUpForm from './SignUpForm';

const initialValues = {
  username: '',
  password: '',
  confirmation: '',
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .max(30, 'Value must be at most 30 characters in length')
    .required('Username is required'),
  password: yup
    .string()
    .min(5, 'Value must be at least 5 characters in length')
    .max(50, 'Value must be at most 50 characters in length')
    .required('Password is required'),
  confirmation: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords don\'t match')
    .required('Password confirmation is required'),
});

const SignUpContainer = ({ onSubmit }) => {

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignUpContainer;