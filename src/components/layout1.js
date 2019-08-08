import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header1'
import Footer from './Footer1'
// import Sidebar from './Sidebar'
import '../styles/index.scss'

import '../styles/assets/css/demo8/style.bundle.css';
//<---- STYLES ----->

//<-----IMAGES ---->

import Background from '../styles/assets/media/demos/demo8/bg-1.jpg';
import logo8 from '../styles/assets/media/logos/logo-8-sm.png';
import studycounter from '../styles/assets/media/logos/studycounter.png';

import { Row, Col } from 'reactstrap'

const Layout = ({ authorImageFluid, children, pageTitle, postAuthor }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <body  style={{backgroundImage: `url(${Background})`}}  class="kt-app__aside--left kt-quick-panel--right kt-demo-panel--right kt-offcanvas-panel--right kt-header--fixed kt-header-mobile--fixed kt-subheader--enabled kt-subheader--transparent kt-page--loading"  >

        {/* <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
          integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
          crossOrigin="anonymous"
        /> */}
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className="container" id="content">
          <h1>{pageTitle}</h1>
          <Row>
            <Col >{children}</Col>
            {/* <Col md="4">
              <Sidebar author={postAuthor} authorFluid={authorImageFluid} />
            </Col> */}
          </Row>
        </div>
        <Footer />
      </body>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
