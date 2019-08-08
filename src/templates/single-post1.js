import React from 'react'
import Layout from '../components/layout1'
import { graphql, Link } from 'gatsby'
import SEO from '../components/seo'
import { Badge, Card, CardBody, CardSubtitle } from 'reactstrap'
import Img from 'gatsby-image'
import { slugify } from '../util/utilityFunctions'
import authors from '../util/authors'
import Header from '../components/header1';
import Footer from '../components/Footer1';
// import { DiscussionEmbed } from 'disqus-react'

import '../styles/assets/css/demo8/style.bundle.css';
//<---- STYLES ----->

//<-----IMAGES ---->

import Background from '../styles/assets/media/demos/demo8/bg-1.jpg';
import logo8 from '../styles/assets/media/logos/logo-8-sm.png';
import studycounter from '../styles/assets/media/logos/studycounter.png';

const SinglePost = ({ data, pageContext, location }) => {
  const post = data.markdownRemark.frontmatter
  const author = authors.find(x => x.name === post.author)

  const baseUrl = 'https://gatsbytutorial.co.uk/'

  // const disqusShortname = 'https-gatsbytutorial-co-uk'
  // const disqusConfig = {
  //   identifier: data.markdownRemark.id,
  //   title: post.title,
  //   url: baseUrl + pageContext.slug,
  // }

  return(
   
        <body  style={{backgroundImage: `url(${Background})`}}  class="kt-app__aside--left kt-quick-panel--right kt-demo-panel--right kt-offcanvas-panel--right kt-header--fixed kt-header-mobile--fixed kt-subheader--enabled kt-subheader--transparent kt-page--loading"  >
   
   {/* <!-- begin:: Page --> */}
   {/* <!-- begin:: Header Mobile --> */}
   <div id="kt_header_mobile" class="kt-header-mobile  kt-header-mobile--fixed " >
   <div class="kt-header-mobile__logo">
   <a href="/dashboard">
       <img alt="Logo" src={logo8}/>
   </a>
   </div>
   <div class="kt-header-mobile__toolbar">
   
   <button class="kt-header-mobile__toolbar-toggler" id="kt_header_mobile_toggler"><span></span></button>
   <button class="kt-header-mobile__toolbar-topbar-toggler" id="kt_header_mobile_topbar_toggler"><i class="flaticon-more-1"></i></button>
   </div>
   </div>
   {/* <!-- end:: Header Mobile --> */}
   <div class="kt-grid kt-grid--hor kt-grid--root">
   <div class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver kt-page">
       <div class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-wrapper" id="kt_wrapper">
                  
   
   <Header />
   
   
   <div class="kt-container  kt-container--fluid  kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-grid--stretch">
       <div class="kt-body kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-grid--stretch" id="kt_body">
           <div class="kt-content  kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor" id="kt_content">
                   {/* <!-- begin:: Content Head --> */}
   <div class="kt-subheader   kt-grid__item" id="kt_subheader">
   <div class="kt-container ">
   <div class="kt-subheader__main">
       
       <h3 class="kt-subheader__title">
       Question                           
       </h3>
   
       <span class="kt-subheader__separator kt-subheader__separator--v"></span>
       
       <div class="kt-subheader__group" id="kt_subheader_search">
           <span class="kt-subheader__desc" id="kt_subheader_total">{post.title}</span>
       </div>
       
               </div>        
   <div class="kt-subheader__toolbar">
   
       <a href="/" class=""> </a>
       
       <a href="/" class="btn btn-label-info btn-bold">Give feedback </a>
           
    </div>
   </div>
   </div>
   {/* <!-- end:: Content Head --> */}
   {/* <!-- begin:: Content --> */}
   <div class="kt-container  kt-container--fluid  kt-grid__item kt-grid__item--fluid">
   {/* <!--begin:: Portlet--> */}
   <div class="kt-portlet ">
   <div class="kt-portlet__body">
   <div class="kt-widget kt-widget--user-profile-3">
       <div class="kt-widget__top">
           <div class="kt-widget__media kt-hidden-">
               <img src={studycounter} alt="study Counter"/>
           </div>               
           <div class="kt-widget__content">
               <div class="kt-widget__head">                      
   
                   <div class="kt-widget__title">{post.title}</div>
   
                   <div class="kt-widget__action">
                       <button type="button" class="btn btn-sm btn-upper" style={{background: "#edeff6"}}>edit</button>&nbsp;
                       <button type="button" class="btn btn-brand btn-sm btn-upper">Add files</button>
                   </div>
               </div>
   
               <div class="kt-widget__info">
                   <div class="kt-widget__desc">
                   {post.tags.map(tag => (
                    <li key={tag}>
                        <Link to={`/tag/${slugify(tag)}`}>
                        <Badge color="primary">{tag}</Badge>
                        </Link>
                    </li>
                    ))}
                   </div>                       
   
                   <div class="kt-widget__stats d-flex align-items-center flex-fill">
                       
   
                       <div class="kt-widget__item">
                           <span class="kt-widget__date">
                               Due Date
                           </span>
                           <div class="kt-widget__label">
                               <span class="btn btn-label-danger btn-sm btn-bold btn-upper">{post.date}</span>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>
   
           
       </div>
   </div>
   </div>
   </div>
   {/* <!--end:: Portlet--> */}
   
   
   {/* <!-- begin:: Section --> */}
   <div class="kt-container ">
   <div class="kt-portlet">
   <div class="kt-portlet__body">
       <div class="kt-infobox">
           <div class="kt-infobox__header">
               <h2 class="kt-infobox__title">{post.title}</h2>
           </div>
            
           <div class="kt-infobox__body" >
               <div class="kt-infobox__section">                       
                   <div class="kt-infobox__content">
                   <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
                   </div>
               </div>                   
           </div>
       </div>
   </div>
   </div>
   </div>
   {/* <!-- end:: Section --> */}
   
   </div>	
   </div>
   {/* <!-- end:: Content -->		 */}
   </div>
   </div>
   </div>
   
           <Footer />
   
       </div>
   
   {/* <!-- end:: Page --> */}
       
       </body>
       
       )
       
}

export const postQuery = graphql`
  query blogPostBySlug($slug: String!, $imageUrl: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        author
        date(formatString: "MMM Do YYYY")
        tags
        image {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    file(relativePath: { eq: $imageUrl }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default SinglePost
