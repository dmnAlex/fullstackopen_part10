import { useQuery } from '@apollo/client';
import { GET_AUTHORIZED_USER } from '../graphql/queries';

const useUser = (includeReviews = false) => {
  const variables = { includeReviews, first: 4 };
  const { data, loading, fetchMore, refetch, ...result } = useQuery(GET_AUTHORIZED_USER, {
    variables,
    fetchPolicy: 'cache-and-network',
  });

  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data?.authorizedUser.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data?.authorizedUser.reviews.pageInfo.endCursor,
        ...variables,
      },
    });
  };

  return {
    authorizedUser: data?.authorizedUser,
    fetchMore: handleFetchMore,
    loading,
    refetch,
    ...result,
  };

};

export default useUser;