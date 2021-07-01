import React from 'react';
import useUser from '../../hooks/useUser';
import ReviewListContainer from './ReviewListContainer';

const ReviewList = () => {
  const { authorizedUser, fetchMore } = useUser(true);
  const reviews = authorizedUser?.reviews;

  const onEndReach = () => {
    fetchMore();
  };

  return (
    <ReviewListContainer reviews={reviews} onEndReach={onEndReach} />
  );
};

export default ReviewList;