import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import style from 'styled-components';

const LogoItem = style.img`
  width: 40px;
  height: auto;
  padding: 10px;
`;

const Logo = () => (
    <StaticQuery query={graphql`
    {   
        allWordpressWpLogo{
            edges{
              node{
                url {
                  source_url
                }
              }
            }
          }
      }
`} render={props => (
    <LogoItem src={props.allWordpressWpLogo.edges[0].node.url.source_url}/> 
)} />
);

export default Logo;