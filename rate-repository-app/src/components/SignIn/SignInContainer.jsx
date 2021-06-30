import React from 'react';
import * as yup from 'yup';
import { Formik } from 'formik';
import SignInForm from './SignInForm';

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, 'Value must be at least 3 characters in length')
    .required('Username is required'),
  password: yup
    .string()
    .min(3, 'Value must be at least 3 characters in length')
    .required('Password is required'),
});

const SignInContainer = ({ onSubmit }) => {

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignInContainer;