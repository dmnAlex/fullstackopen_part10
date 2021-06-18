import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          id
          ownerName
          description
          language
          forksCount
          stargazersCount
          reviewCount
          ratingAverage
          ownerAvatarUrl
        }
      }   
    }
  }
`;


export const USER_INFO = gql`
  query {
    authorizedUser {
      id
      username
    }
  }
`;