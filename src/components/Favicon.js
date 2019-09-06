import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import style from 'styled-components';

const FaviconItem = style.img`
  width: 40px;
  height: auto;
  padding: 10px;
`;

const Favicon = () => (
    <StaticQuery query={graphql`
    {   
        allWordpressWpFavicon{
            edges{
              node{
                url {
                  source_url
                }
              }
            }
          }
      }`} render={props => (
    <FaviconItem src={props.allWordpressWpFavicon.edges[0].node.url.source_url}/> 
)} />
);

export default Favicon;