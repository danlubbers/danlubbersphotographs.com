import { graphql } from 'gatsby';

export const getImageDataFragment = graphql`
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
            webpOptions: { quality: 85 }
            jpgOptions: { quality: 85 }
          )
        }
      }
    }
  }
`;

export const bioImageFragment = graphql`
  fragment bioImage on ImageSharpConnection {
    nodes {
      gatsbyImageData(
        height: 300
        quality: 100
        webpOptions: { quality: 85 }
        jpgOptions: { quality: 85 }
      )
    }
  }
`;
