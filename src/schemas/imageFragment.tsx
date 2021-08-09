import { graphql } from 'gatsby';

export const getImageData = graphql`
  fragment getImageData on ImageContentJsonConnection {
    nodes {
      category
      id
      name
      description
      src {
        childImageSharp {
          gatsbyImageData(
            height: 800
            quality: 100
            webpOptions: { quality: 90 }
            jpgOptions: { quality: 100 }
          )
        }
      }
    }
  }
`;
