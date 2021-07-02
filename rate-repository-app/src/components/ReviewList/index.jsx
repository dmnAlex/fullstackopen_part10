import React from 'react';
import useUser from '../../hooks/useUser';
import ReviewListContainer from './ReviewListContainer';

const ReviewList = () => {
  const { authorizedUser, fetchMore, refetch } = useUser(true);
  const reviews = authorizedUser?.reviews;

  const onEndReach = () => {
    fetchMore();
  };

  return (
    <ReviewListContainer
      reviews={reviews}
      onEndReach={onEndReach}
      refetch={refetch}
    />
  );
};

export default ReviewList;