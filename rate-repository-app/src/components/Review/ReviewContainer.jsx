import { Formik } from 'formik';
import React from 'react';
import ReviewForm from './ReviewForm';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  ownerName: yup
    .string()
    .required('Repository owner name is required'),
  repositoryName: yup
    .string()
    .required('Repository name is required'),
  reviewRating: yup
    .number()
    .typeError('Value must be a number')
    .required('Rating is required')
    .min(0, 'Value must be between 0 and 100')
    .max(100, 'Value must be between 0 and 100'),
  reviewText: yup
    .string(),
});

const initialValues = {
  ownerName: '',
  repositoryName: '',
  reviewRating: '',
  reviewText: '',
};

const ReviewContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default ReviewContainer;