import React from 'react';
import Layout from '../components/layout';
import styled from 'styled-components';
import Logo from '../components/Logo'


const FeaturedImage = styled.img`
    max-width: 300px;
    margin: 16px 0;
`

export default ({pageContext}) => (
  <Layout>
        <Logo/>
        <h1 dangerouslySetInnerHTML={{__html: pageContext.title}} />
        <strong>
            Website url:
        </strong>
        <a href={pageContext.acf.portfolio_url} target="_blank" rel="noopener noreferrer">
        {pageContext.acf.portfolio_url}
        </a>
        <div>
            <FeaturedImage src={pageContext.featured_media.source_url} />
        </div>
        <div dangerouslySetInnerHTML={{__html: pageContext.content}} />
  </Layout>
);
