import React from 'react';
import { PageProps, graphql } from 'gatsby';
import recordEvent from 'utilities/recordEvents';
import Header from '@/components/Header/Header';
import ErrorBoundary from '@/components/ErrorBoundary/ErrorBoundary';

const NotFound: React.FC<PageProps> = ({
  data: { bioDescription },
  location,
}) => {
  const url = location.pathname.replace(`/`, ``);
  return (
    <>
      <Header bioDescription={bioDescription.edges[0].node} />

      <main>
        {recordEvent(`Photo: 404 Page`, `User found the 404 Page!!!`)}
        <ErrorBoundary url={url} />
      </main>
    </>
  );
};

export default NotFound;

export const query = graphql`
  query {
    bioDescription: allBioJson {
      edges {
        node {
          id
          bio
          quote
        }
      }
    }
  }
`;
