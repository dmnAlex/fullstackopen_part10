import React from 'react';
import { useParams } from 'react-router-native';
import useRepository from '../../hooks/useRepository';
import SingleRepository from './SingleRepository';

const RepositoryView = () => {
  const { id } = useParams();
  const { repository, fetchMore } = useRepository(id);

  const onEndReached = () => {
    fetchMore();
  };

  return <SingleRepository
    repository={repository}
    onEndReached={onEndReached}
  />;
};

export default RepositoryView;