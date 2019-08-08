import React from 'react';
import Header from '../../layout/backlayout/Header';
import Footer from '../../layout/backlayout/Footer';

//<---- STYLE ---->
//import '../../styles/backstyles/assets/vendors/global/vendors.bundle.css'
import '../../styles/backstyles/assets/css/demo8/style.bundle.css'
import '../../styles/backstyles/assets/vendors/custom/fullcalendar/fullcalendar.bundle.css'
//<-----STYLE ---->

//<---- IMAGES --- >
import Background from '../../styles/backstyles/assets/media/demos/demo8/bg-1.jpg';
import logo8 from '../../styles/backstyles/assets/media/logos/logo-8-sm.png';

//<------Connecting the redux store ----->
import {connect} from 'react-redux';
import AssignmentList from './AssignmentList';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import PropTypes from 'prop-types'
//import { watchEvents, unWatchEvents } from './actions/query'
//import { getEventsFromInput, createCallable } from './utils'

class Dashboard extends React.Component{

    static contextTypes = {
        store: PropTypes.object.isRequired
      }
    
      componentDidMount () {
        const { firestore } = this.context.store
        firestore.get('assignments')
      }

    render(){
        
        //console.log(this.props);
        const {assignments} = this.props;

    return(  

    <body  style={{backgroundImage: `url(${Background})`}}  className="kt-quick-panel--right kt-demo-panel--right kt-offcanvas-panel--right kt-header--fixed kt-header-mobile--fixed kt-subheader--enabled kt-subheader--transparent kt-page--loading"  >
{/* <!-- begin:: Page --> */}
{/* <!-- begin:: Header Mobile --> */}
<div id="kt_header_mobile" className="kt-header-mobile  kt-header-mobile--fixed " >
    <div className="kt-header-mobile__logo">
        <a href="/">
            <img alt="Logo" src={logo8}/>
        </a>
    </div>
    <div className="kt-header-mobile__toolbar">
        <button className="kt-header-mobile__toolbar-toggler" id="kt_header_mobile_toggler"><span></span></button>
        <button className="kt-header-mobile__toolbar-topbar-toggler" id="kt_header_mobile_topbar_toggler"><i className="flaticon-more-1"></i></button>
    </div>
</div>
{/* <!-- end:: Header Mobile --> */}
<div className="kt-grid kt-grid--hor kt-grid--root">
<div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver kt-page">
    <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-wrapper" id="kt_wrapper">

       <Header/>

<div className="kt-container  kt-container--fluid  kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-grid--stretch">
<div className="kt-body kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-grid--stretch" id="kt_body">
<div className="kt-content  kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor" id="kt_content">
                            
{/* <!-- begin:: Subheader --> */}
<div className="kt-subheader   kt-grid__item" id="kt_subheader">
<div className="kt-container ">
<div className="kt-subheader__main">
    
    <h3 className="kt-subheader__title">
        Dashboard
    </h3>    
          <span className="kt-subheader__separator kt-hidden"></span>
        <div className="kt-subheader__breadcrumbs">
            <a href="/" className="kt-subheader__breadcrumbs-home">
                 <i className="flaticon2-shelter"></i>
            </a>
            <span className="kt-subheader__breadcrumbs-separator"></span>
                <a href="/" className="kt-subheader__breadcrumbs-link"> Application</a>
        {/* <!-- <span className="kt-subheader__breadcrumbs-link kt-subheader__breadcrumbs-link--active">Active link</span> --> */}
        </div>            
</div>
<div className="kt-subheader__toolbar">
    <div className="kt-subheader__wrapper">
        <a href="/dashboard/order">
            <button>New order</button>                   
        </a>                        
        <div className="dropdown dropdown-inline" data-toggle="kt-tooltip" title="Quick actions" data-placement="left">
            <a href="/" className="btn btn-icon"data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {/* <!--<i className="flaticon2-plus"></i>--> */}
            </a>
            <div className="dropdown-menu dropdown-menu-fit dropdown-menu-md dropdown-menu-right">
             </div>
        </div>
    </div>
</div>
</div>
</div>
{/* <!-- end:: Subheader --> */}
{/* <!-- begin:: Content --> */}
<div className="kt-container  kt-container--fluid  kt-grid__item kt-grid__item--fluid">
{/* <!--Begin::Dashboard 8--> */}
{/* <!--Begin::Row--> */}
<div className="row">
<div className="col-xl-4 col-lg-4 order-lg-2 order-xl-1">
{/* <!--begin:: Widgets/Daily Sales--> */}
<div className="kt-portlet kt-portlet--height-fluid">
<div className="kt-widget14">
<div className="kt-widget14__header kt-margin-b-30">
    <h3 className="kt-widget14__title">
        Notifications             
    </h3>
    <span className="kt-widget14__desc">
        No new notification
    </span>
</div>
<div className="kt-widget14__chart" style={{height:"120px"}}>
    <canvas  id="kt_chart_daily_sales"></canvas>
</div>
</div>
</div>
{/* <!--end:: Widgets/Daily Sales-->  */}
 </div>
<div className="col-xl-4 col-lg-4 order-lg-2 order-xl-1">
{/* <!--begin:: Widgets/Profit Share--> */}
<div className="kt-portlet kt-portlet--height-fluid">
<div className="kt-widget14">
<div className="kt-widget14__header">
    <h3 className="kt-widget14__title">
        Cash backs           
    </h3>
    <span className="kt-widget14__desc">
        You have no discounts at the moment
    </span>
</div>	 
<div className="kt-widget14__content">	
    <div className="kt-widget14__chart">        
        <canvas id="kt_chart_profit_share" style={{height: "140px", width: "140px"}}></canvas>
    </div> 
    <div className="kt-widget14__legends">        
    </div>			
</div> 
</div>
</div>		
{/* <!--end:: Widgets/Profit Share-->   */}
</div>
<div className="col-xl-4 col-lg-4 order-lg-2 order-xl-1">
{/* <!--begin:: Widgets/Revenue Change--> */}
<div className="kt-portlet kt-portlet--height-fluid">
<div className="kt-widget14">
<div className="kt-widget14__header">
    <h3 className="kt-widget14__title">
        Public chat            
    </h3>
    <span className="kt-widget14__desc">
        26 members online
    </span>
</div>
<div className="kt-widget14__content">
    <div className="kt-widget14__chart">
        <div id="kt_chart_revenue_change" style={{height: "150px", width: "150px"}}></div>
    </div>  		 
    <div className="kt-widget14__legends">
        <div className="kt-widget14__legend">
            <span className="kt-widget14__bullet kt-bg-success"></span>
            <span className="kt-widget14__stats">Mike just posted an assignment</span>
        </div>        
    </div>		 
</div> 	 
</div>
</div>	
{/* <!--end:: Widgets/Revenue Change-->	 */}
</div>
<div className="col-xl-8 col-lg-12 order-lg-2 order-xl-1">
{/* <!--begin:: Widgets/My latest orders--> */}
<div className="kt-portlet kt-portlet--height-fluid">
<div className="kt-portlet__head">
<div className="kt-portlet__head-label">
    <h3 className="kt-portlet__head-title">
        My latest orders
    </h3>
</div>
<div className="kt-portlet__head-toolbar">
    <ul className="nav nav-pills nav-pills-sm nav-pills-label nav-pills-bold" role="tablist">
        <li className="nav-item">
            <a className="nav-link active" data-toggle="tab" href="#kt_widget11_tab1_content" role="tab">
            Last Month
            </a>
        </li>
        <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#kt_widget11_tab2_content" role="tab">
            All Time
            </a>
        </li>
    </ul>
</div>
</div>
<div className="kt-portlet__body">
<div className="tab-content">    
    <div className="tab-pane active" id="kt_widget11_tab1_content">
        {/* <!--begin::Widget 11-->  */}
        <div className="kt-widget11">
        <div className="table-responsive">					 
                <table className="table">
                    <thead>
                        <tr>
                            <td style={{width: "1%"}}></td>
                            <td style={{width: "20%"}}>Assignment</td>
                            <td style={{width: "10%"}}>Due date</td>
                            <td style={{width: "20%"}}>Pages</td>
                            <td style={{width: "10%"}}>Status</td>
                            <td style={{width: "10%"}} className="kt-align-right">Cost</td>
                        </tr>
                    </thead>


                    <AssignmentList assignments={assignments}/>	

                    
                    								     
                </table>
            </div>
            <div className="kt-widget11__action kt-align-right">
                <button type="button" className="btn btn-label-success btn-sm btn-bold">View All Records</button>
            </div>
        </div>
        {/* <!--end::Widget 11-->  */}
    </div>    
</div>
</div>
</div>
{/* <!--end:: Widgets/My latest orders-->  */}
</div>
</div>
{/* <!--End::Row--> */}
{/* <!--End::Dashboard 8--> */}
	</div>
{/* <!-- end:: Content --> */}
</div>
</div>
</div>

        <Footer />

</div>
</div>
</div>

{/* <!-- end:: Page --> */}
                  
    </body>
);
}

}
const mapStateToProps=(state)=>{
    console.log(state);
   return{
    assignments: state.firestore.ordered.assignments
        // assignments: state.assignments.assignments
    }

}
export default compose(
    firestoreConnect(() => ['assignments']), // or { collection: 'todos' }
    connect(mapStateToProps)
   )(Dashboard)