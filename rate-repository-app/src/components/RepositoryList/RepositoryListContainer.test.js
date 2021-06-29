import React from 'react';
import RepositoryListContainer from './RepositoryListContainer';
import { render } from '@testing-library/react-native';

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      };

      const toPrescision = (number) => number >= 1000 ? (number / 1000).toFixed(1) + 'k' : number;

      const { getAllByTestId } = render(<RepositoryListContainer repositories={repositories} />);

      repositories.edges.forEach((object, index) => {
        const node = object.node;
        expect(getAllByTestId('fullName')[index]).toHaveTextContent(node.fullName);
        expect(getAllByTestId('description')[index]).toHaveTextContent(node.description);
        expect(getAllByTestId('language')[index]).toHaveTextContent(node.language);
        expect(getAllByTestId('forksCount')[index]).toHaveTextContent(toPrescision(node.forksCount));
        expect(getAllByTestId('stargazersCount')[index]).toHaveTextContent(toPrescision(node.stargazersCount));
        expect(getAllByTestId('ratingAverage')[index]).toHaveTextContent(toPrescision(node.ratingAverage));
        expect(getAllByTestId('reviewCount')[index]).toHaveTextContent(toPrescision(node.reviewCount));
      });

    });
  });
});