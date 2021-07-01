import React, { useState } from 'react';
import useRepositories from '../../hooks/useRepositories';
import RepositoryListContainer from './RepositoryListContainer';
import { useDebounce } from 'use-debounce';

const RepositoryList = () => {
  const [sorting, setSorting] = useState('date_desc');
  const [query, setQuery] = useState('');
  const [queryDebounce] = useDebounce(query, 500);
  const { repositories, fetchMore } = useRepositories(sorting, queryDebounce);

  const onEndReach = () => {
    fetchMore();
  };

  return <RepositoryListContainer
    repositories={repositories}
    sorting={sorting}
    setSorting={setSorting}
    query={query}
    setQuery={setQuery}
    onEndReach={onEndReach}
  />;
};

export default RepositoryList;