import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const sortingDict = {
  'date_desc': { orderBy: 'CREATED_AT', orderDirection: 'DESC' },
  'rating_asc': { orderBy: 'RATING_AVERAGE', orderDirection: 'ASC' },
  'rating_desc': { orderBy: 'RATING_AVERAGE', orderDirection: 'DESC' },
};

const useRepositories = (sorting, queryDebounce) => {
  const { data, loading, refetch } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: { ...sortingDict[sorting], searchKeyword: queryDebounce },
  });

  const repositories = data?.repositories;

  return { repositories, loading, refetch: refetch };
};

export default useRepositories;