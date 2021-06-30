import { useMutation } from "@apollo/client";
import { useHistory } from "react-router-native";
import { CREATE_REVIEW } from "../graphql/mutations";


const useReview = () => {
  const [mutate, result] = useMutation(CREATE_REVIEW);
  const history = useHistory();

  const createReview = async (review) => {
    const { data } = await mutate({variables: { review }});

    history.push(`/repository/${data.createReview.repositoryId}`);
  };

  return [createReview, result];
};

export default useReview;