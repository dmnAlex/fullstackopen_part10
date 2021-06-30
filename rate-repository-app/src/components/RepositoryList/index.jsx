import React, { useState } from 'react';
import useRepositories from '../../hooks/useRepositories';
import RepositoryListContainer from './RepositoryListContainer';

const RepositoryList = () => {
  const [sorting, setSorting] = useState('date_desc');
  const { repositories } = useRepositories(sorting);

  return <RepositoryListContainer
    repositories={repositories}
    sorting={sorting}
    setSorting={setSorting}
  />;
};

export default RepositoryList;