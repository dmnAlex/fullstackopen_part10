import { gql } from '@apollo/client';

export const AUTHORIZE_USER = gql`
  mutation authorizeUser($username: String!, $password: String!) {
    authorize(credentials: { username: $username, password: $password }) {
      accessToken
    }
  }
`;

export const CREATE_REVIEW = gql`
  mutation createReview($review: CreateReviewInput!) {
    createReview(review: $review) {
      user {
        username
        reviewCount
      }
      createdAt
      text
      repositoryId
    }
  }
`;