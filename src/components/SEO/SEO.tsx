import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultLang: lang
        titleTemplate
        defaultDescription: description
        defaultKeywords: keywords
        siteUrl: url
        defaultImage: image
        twitterUsername
      }
    }
  }
`;

const SEO = ({ title, lang, description, image, article, keywords }) => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(query);
  const {
    defaultTitle,
    defaultLang,
    titleTemplate,
    defaultDescription,
    defaultKeywords,
    siteUrl,
    defaultImage,
    twitterUsername,
  } = site.siteMetadata;
  const seo = {
    title: title || defaultTitle,
    lang: lang || defaultLang,
    description: description || defaultDescription,
    keywords: keywords || defaultKeywords,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  };
  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      <html lang={seo.lang} />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="robots" content="noindex" />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {(article ? true : null) && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.keywords && <meta name="keywords" content={seo.keywords} />}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  );
};
export default SEO;

SEO.propTypes = {
  title: PropTypes.string,
  lang: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
};

SEO.defaultProps = {
  title: null,
  lang: null,
  description: null,
  keywords: null,
  image: null,
  article: false,
};
