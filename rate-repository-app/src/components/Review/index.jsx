import React from 'react';
import useReview from '../../hooks/useReview';
import ReviewContainer from './ReviewContainer';

const Review = () => {
  const [createReview] = useReview();

  const onSubmit = async (values) => {
    const { ownerName, repositoryName, reviewRating, reviewText } = values;
    const review = {
      repositoryName: repositoryName,
      ownerName: ownerName,
      rating: Number(reviewRating),
      text: reviewText,
    };

    try {
      await createReview(review);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ReviewContainer onSubmit={onSubmit} />
  );

};

export default Review;