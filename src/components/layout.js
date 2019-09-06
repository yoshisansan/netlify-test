import React from "react"
import MainMenu from './MainMenu'
import styled, {createGlobalStyle} from 'styled-components'
import {Helmet} from "react-helmet";

import { graphql, StaticQuery } from 'gatsby';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,400i,600,600i,700,700i,800,800i&display=swap');

  body, html{
    font-family: 'Open Sans', sans-serif;
    margin: 0 !important;
    padding: 0 !important;
  }
`

const LayoutWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
`


const Layout = ({ children }) => (
  <div>
    <StaticQuery query={graphql`
        {
          allWordpressWpFavicon{
            edges{
              node{
                url{
                  source_url
                }
              }
            }
          }
        }
    `} render={props => (
      <Helmet>
        <meta charSet="utf-8" />
        <title>iPhoneVPN学部</title>
        <link rel="shortcut icon" type="image/ico" href={props.allWordpressWpFavicon.edges[0].node.url.source_url} sizes="16x16" />
      </Helmet>
    )} />
    <GlobalStyles />
    <MainMenu />
    <LayoutWrapper>
    {children}
    </LayoutWrapper>
 </div>
)

export default Layout;