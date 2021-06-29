import React from 'react';
import { useParams } from 'react-router-native';
import useRepository from '../../hooks/useRepository';
import SingleRepository from './SingleRepository';

const RepositoryView = () => {
  const { id } = useParams();
  const { repository, loading } = useRepository(id);

  return loading ? null : <SingleRepository repository={repository} />;
};

export default RepositoryView;