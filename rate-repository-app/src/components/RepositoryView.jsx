import React from 'react';
import { useParams } from 'react-router-native';
import useRepository from '../hooks/useRepository';
import RepositoryItem from './RepositoryItem';

const RepositoryView = () => {
  const { id } = useParams();
  const { repository, loading } = useRepository(id);

  return loading ? null : <RepositoryItem {...repository} />;
};

export default RepositoryView;