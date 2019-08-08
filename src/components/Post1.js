import React from 'react'
//<----STYLES---->
import '../styles/assets/css/demo8/style.bundle.css';
import '../styles/assets/vendors/custom/fullcalendar/fullcalendar.bundle.css';
//<---STYLES ----->
import {
  Badge,
  Card,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody,
} from 'reactstrap'
import { Link } from 'gatsby'
// import Img from 'gatsby-image'
import { slugify } from '../util/utilityFunctions'

const Post = ({ title, author, slug, date, body, fluid, tags }) => (
  
            <Card style={{
                borderRadius: "20px", 
                text:"black",                
                border: "2px solid #73AD21"
            }}>
            <CardBody>
            <div class="kt-portlet__body">
                {/* <!--begin::Widget --> */}
                <div class="kt-widget kt-widget--user-profile-2">
                    
                    <div class="kt-widget__body">
                        <div class="kt-widget__section">
                        <Link to={slug}><h3>{title}</h3></Link>                                                  
                        </div>  
                        <ul className="post-tags">
                            {tags.map(tag => (
                            <li key={tag}>
                                <Link to={`/tag/${slugify(tag)}`}>
                                <Badge color="primary" className="text-uppercase">
                                    {tag}
                                </Badge>
                                </Link>
                            </li>
                            ))}
                        </ul>                                      

                        <div class="kt-widget__item">                            
                            <div class="kt-widget__contact">
                                <span class="kt-widget__label">Author</span>
                                <a href="#" class="kt-widget__data">{author}</a>
                            </div>
                            <div class="kt-widget__contact">
                                <span class="kt-widget__label">Due Date:</span>
                                <span class="kt-widget__data">{date}</span>
                            </div>
                        </div>
                    </div>
                    <Link to={slug}>
                    <div class="kt-widget__footer">
                        <button 
                            style={{borderRadius:"30px"}} 
                            type="button" 
                            class="btn btn-label-success btn-lg btn-upper"
                            >
                            view Question
                        </button>
                    </div>
                    </Link>

                </div>              
                 
                {/* <!--end::Widget --> */}
            </div>
            </CardBody>
        </Card>
        
    
)

export default Post

