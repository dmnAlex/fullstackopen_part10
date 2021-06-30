import { gql } from '@apollo/client';
import { CORE_REPOSITORY_FIELDS } from './fragments';

export const GET_REPOSITORIES = gql`
  ${CORE_REPOSITORY_FIELDS}
  query {
    repositories {
      edges {
        node {
          id
          ...CoreRepositoryFields
        }
      }   
    }
  }
`;

export const GET_REPOSITORY = gql`
  ${CORE_REPOSITORY_FIELDS}
  query getRepository($id: ID!) {
    repository(id: $id) {
      url
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              username
            }
          }
        }
      }
      ...CoreRepositoryFields
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