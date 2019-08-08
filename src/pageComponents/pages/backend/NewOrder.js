import React from 'react';
import Header from '../../layout/backlayout/Header';
import Footer from '../../layout/backlayout/Footer';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';

//MarkDown editor
//import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

//<---- STYLE ---->
//import '../../styles/backstyles/assets/vendors/global/vendors.bundle.css'
import '../../styles/backstyles/assets/css/demo8/style.bundle.css';
import '../../styles/backstyles/assets/vendors/custom/fullcalendar/fullcalendar.bundle.css';
//<-----STYLE ---->

//<------ JS ----->
import '../../styles/backstyles/assets/js/demo8/pages/newOrder/bootstrap-markdown.js';
//<------ JS ----->

//<---- IMAGES --- >
import Background from '../../styles/backstyles/assets/media/demos/demo8/bg-1.jpg';
import logo8 from '../../styles/backstyles/assets/media/logos/logo-8-sm.png';

import {connect} from 'react-redux';
import * as actions from '../../../store/actions';
//import {firestoreConnect} from 'react-redux-firebase';
//import {compose} from 'redux';

const orderSchema = Yup.object().shape({
    title: Yup.string()
      .required('title is required')
      .min(3, 'Title too short')
      .max(50, 'Title too long'),
    pages:Yup.string()
    .min(0,'Enter numner of pages')
    .required('number of pages is required'),
    deadline: Yup.string()
    .required('timeline is required'),    
    category:Yup.string()    
    .required('Inter category'),
    details:Yup.string(),
    spacing:Yup.string()
    
    
  })

const NewOrder = ({createAssignment, loading}) =>{
    const loadingText ='Adding...';
    return(
        <Formik
        initialValues={{
      spacing:'',
      title:'',
      pages:'0',
      category:'',
      details:'',
      deadline:''
    }} 
    validationSchema={orderSchema}
    onSubmit={async (values,  { setSubmitting })=>{
        await createAssignment(values);
            setSubmitting(false);          
      
    }}
        >
            {
                ({isValid, isSubmitting})=>(
                    <body  style={{backgroundImage: `url(${Background})`}} class="kt-quick-panel--right kt-demo-panel--right kt-offcanvas-panel--right kt-header--fixed kt-header-mobile--fixed kt-subheader--enabled kt-subheader--transparent kt-page--loading"  >

       
{/* <!-- begin:: Page --> */}
{/* <!-- begin:: Header Mobile --> */}
<div name="kt_header_mobile" class="kt-header-mobile  kt-header-mobile--fixed " >
<div class="kt-header-mobile__logo">
<a href="/dashboard">
    <img alt="Logo" src={logo8}/>
</a>
</div>
<div class="kt-header-mobile__toolbar">

<button class="kt-header-mobile__toolbar-toggler" name="kt_header_mobile_toggler"><span></span></button>
<button class="kt-header-mobile__toolbar-topbar-toggler" name="kt_header_mobile_topbar_toggler">
    <i class="flaticon-more-1"></i></button>
</div>
</div>
{/* <!-- end:: Header Mobile */}
<div class="kt-grid kt-grid--hor kt-grid--root">
<div class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver kt-page">
    <div class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-wrapper" name="kt_wrapper">        
        
        <Header />

<div class="kt-container  kt-container--fluid  kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-grid--stretch">
    <div class="kt-body kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-grid--stretch" name="kt_body">
        <div class="kt-content  kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor" name="kt_content">
                            
{/* <!-- begin:: Subheader --> */}
<div class="kt-subheader   kt-grid__item" name="kt_subheader">
<div class="kt-container ">
<div class="kt-subheader__main">         
    <span class="kt-subheader__separator kt-hidden"></span>
</div>
<div class="kt-subheader__toolbar">
    <div class="kt-subheader__wrapper">
        <a href="/" class="btn kt-subheader__btn-primary">
            Actions &nbsp;                       
        </a>
    </div>
</div>
</div>
</div>
{/* <!-- end:: Subheader --> */}
{/* <!-- begin:: Content --> */}
<div class="kt-container  kt-container--fluid  kt-grid__item kt-grid__item--fluid">
<div class="row">
<div class="col-lg-12">
{/* <!--begin::Portlet--> */}
<div class="kt-portlet">
    <div class="kt-portlet__head">
        <div class="kt-portlet__head-label">
            <h3 class="kt-portlet__head-title">
            Fill the form to create a new order 
            </h3>
        </div>
    </div>
    {/* <!--begin::Form--> */}
    <Form class="kt-form kt-form--label-right">
        <div class="kt-portlet__body">
            <div class="form-group row">
                <div class="col-lg-6">
                    <label>Title</label>
                    <Field type="text" class="form-control" required placeholder="Enter Assignment title" name="title" />
                </div>
                <div class="col-lg-6">
                    <label class="">Number of pages</label>
                    <Field type="number" class="form-control" placeholder="Enter number of pages" name="pages"  />
                </div>
            </div>	 
            <div class="form-group row">
                <div class="col-lg-6">
                <label className="control-label">Category</label>
                    <Field component="select" className="form-control custom-select" data-placeholder="Choose a Category" name="category" >
                            <option value="Writing">----Select category---</option>
                            <option value="Writing">Writing</option>
                            <option value="Editing">Editing</option>
                            <option value="Proofreading">Proofreading</option>
                            <option value="Rewrite">Rewrite</option>
                            <option value="Problem solving">Problem solving</option>
                    </Field>                    
                </div>
                <div class="col-lg-6">
                    <label>Deadline</label>
                    <div class="kt-input-icon">
                    <Field component="select" className="form-control custom-select" name="deadline" >
                            <option>--Select Deadline--</option>
                            <option>3 Hours</option>
                           <option>6 Hours</option>
                            <option>12 Hours</option>
                           <option>24 Hours</option>
                           <option>48 Hours</option>
                           <option>3 Days</option>
                           <option>7 Days</option>
                           <option>14 Days</option>
                           <option>21 days</option>
                           <option>30 Days</option>
                    </Field>
                    </div>                  
                </div>
            </div>	 
            <div class="form-group row">
                <div class="col-lg-6">                
                    <label>Line spacing</label>
                    <div class="kt-radio-inline">
                        <label class="kt-radio kt-radio--solid">
                            <Field type="radio" name="example_2" value="Double" name="spacing" /> Double spacing
                            <span></span>
                        </label>
                        <label class="kt-radio kt-radio--solid">
                            <Field type="radio" name="example_2" value="Single" name="spacing" /> Single spacing
                            <span></span>
                        </label>
                    </div>
                </div>
            </div>
            <div class="form-group row">


            {/* Markdown editor start */}
            {/* <SimpleMDE 
            name="details"
           
            />; */}
            {/* Markdown editor end */}


			</div>	                
        </div>
        <div class="kt-portlet__foot">
            <div class="kt-form__actions">
                <div class="row">
                    <div class="col-lg-6">
                    <button contain
                  color="main"
                  type="submit"
                  
                  loading={loading ? loadingText : null}                
                   class="btn btn-primary" >Submit
                   </button>
                    <button type="reset" class="btn btn-secondary">Cancel</button>
                    </div>                   
                </div>
            </div>
        </div>
    </Form>
    {/* <!--end::Form--> */}
</div>
{/* <!--end::Portlet--> */}
</div>
</div>	
</div>
{/* <!-- end:: Content -->			 */}
</div>
</div>
</div>
        <Footer />		
</div>
</div>
</div>

{/* <!-- end:: Page -->*/}

</body>

                )
            }

        </Formik>
    )
}


const mapStateToProps = ({ assignments }) => ({
    loading: assignments.loading,
    error: assignments.error,
  });
  
  const mapDispatchToProps = {
    createAssignment: actions.createAssignment
    
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(NewOrder);
  