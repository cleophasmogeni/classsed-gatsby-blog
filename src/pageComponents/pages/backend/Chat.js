import React from 'react';
import Header from '../../layout/backlayout/Header';
import Footer from '../../layout/backlayout/Footer';


//<---- STYLE ---->
//import '../../styles/backstyles/assets/vendors/global/vendors.bundle.css'
import '../../styles/backstyles/assets/css/demo8/style.bundle.css'
import '../../styles/backstyles/assets/vendors/custom/fullcalendar/fullcalendar.bundle.css'
//<-----STYLE ---->

//<------IMAGES ------->
import Background from '../../styles/backstyles/assets/media/demos/demo8/bg-1.jpg';
import logo8 from '../../styles/backstyles/assets/media/logos/logo-8-sm.png';

class Chat extends React.Component{


    render(){
        return(


    <body  style={{backgroundImage: `url(${Background})`}}  class="kt-app__aside--left kt-quick-panel--right kt-demo-panel--right kt-offcanvas-panel--right kt-header--fixed kt-header-mobile--fixed kt-subheader--transparent kt-page--loading"  >

       
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
                        
{/* <!-- begin:: Content --> */}
<div class="kt-container  kt-container--fluid  kt-grid__item kt-grid__item--fluid">
{/* <!--Begin::App--> */}
<div class="kt-grid kt-grid--desktop kt-grid--ver kt-grid--ver-desktop kt-app">
{/* <!--Begin:: App Aside Mobile Toggle--> */}
<button class="kt-app__aside-close" id="kt_chat_aside_close">
<i class="la la-close"></i>
</button>
{/* <!--End:: App Aside Mobile Toggle--> */}

{/* <!--Begin:: App Aside--> */}
<div class="kt-grid__item kt-app__toggle kt-app__aside kt-app__aside--lg kt-app__aside--fit" id="kt_chat_aside">
{/* <!--begin::Portlet--> */}
<div class="kt-portlet kt-portlet--last">
    <div class="kt-portlet__body">
        <div class="kt-searchbar">
            <div class="input-group">

                <input type="text" class="form-control" placeholder="Search" aria-describedby="basic-addon1"/>
            </div>
        </div>
        <div class="kt-widget kt-widget--users kt-mt-20">
            <div class="kt-scroll kt-scroll--pull">
                <div class="kt-widget__items">
                    <div class="kt-widget__item">
                        <span class="kt-userpic kt-userpic--circle"> 
                            <img src="assets/media/users/300_9.jpg" alt="userimage"/>   
                        </span>
                        <div class="kt-widget__info">
                            <div class="kt-widget__section">
                                <a href="/" class="kt-widget__username">Matt Pears</a>
                                <span class="kt-badge kt-badge--success kt-badge--dot"></span>
                            </div>

                            <span class="kt-widget__desc">
                                Head of Development 
                            </span>
                        </div>
                        <div class="kt-widget__action">
                            <span class="kt-widget__date">36 Mines</span>
                            <span class="kt-badge kt-badge--success kt-font-bold">7</span>
                        </div>
                    </div>

                    

                    <div class="kt-widget__item">
                        <span class="kt-userpic kt-userpic--circle"> 
                            <img src="assets/media/users/100_12.jpg" alt="userimage"/>   
                        </span>

                        <div class="kt-widget__info">
                            <div class="kt-widget__section">
                                <a href="/" class="kt-widget__username">Jason Muller</a>
                                <span class="kt-badge kt-badge--success kt-badge--dot"></span>
                            </div>

                            <span class="kt-widget__desc">
                                Python Developer
                            </span>
                        </div>

                        <div class="kt-widget__action">
                            <span class="kt-widget__date">2 Days</span>
                        </div>
                    </div>

                                       
                   
                </div>
            </div>
        </div>
    </div>
</div>
{/* <!--end::Portlet--> */}
</div>
{/* <!--End:: App Aside--> */}

{/* <!--Begin:: App Content--> */}
<div class="kt-grid__item kt-grid__item--fluid kt-app__content" id="kt_chat_content">
<div class="kt-chat">
    <div class="kt-portlet kt-portlet--head-lg kt-portlet--last">
        <div class="kt-portlet__head">
            <div class="kt-chat__head ">
                <div class="kt-chat__left">
                    {/* <!--begin:: Aside Mobile Toggle --> */}
                    <button type="button" class="btn btn-clean btn-sm btn-icon btn-icon-md kt-hidden-desktop" id="kt_chat_aside_mobile_toggle">
                        <i class="flaticon2-open-text-book"></i>
                    </button>
                    {/* <!--end:: Aside Mobile Toggle--> */}

                    <div class="dropdown dropdown-inline">
                        <button type="button" class="btn btn-clean btn-sm btn-icon btn-icon-md" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="flaticon-more-1"></i>
                        </button>
                        <div class="dropdown-menu dropdown-menu-fit dropdown-menu-left dropdown-menu-md">
                            {/* <!--begin::Nav--> */}
                            <ul class="kt-nav">
                                <li class="kt-nav__item">
                                    <a href="/" class="kt-nav__link">
                                        <i class="kt-nav__link-icon flaticon2-group"></i>
                                        <span class="kt-nav__link-text">New Group</span>
                                    </a>
                                </li>
                                <li class="kt-nav__item">
                                    <a href="/" class="kt-nav__link">
                                        <i class="kt-nav__link-icon flaticon2-open-text-book"></i>
                                        <span class="kt-nav__link-text">Contacts</span>
                                    </a>
                                </li>
                                <li class="kt-nav__item">
                                    <a href="/" class="kt-nav__link">
                                        <i class="kt-nav__link-icon flaticon2-rocket-1"></i>
                                        <span class="kt-nav__link-text">Groups</span>
                                        <span class="kt-nav__link-badge">
                                                <span class="kt-badge kt-badge--brand kt-badge--inline">new</span>
                                        </span>
                                    </a>
                                </li>
                                <li class="kt-nav__item">
                                    <a href="/" class="kt-nav__link">
                                        <i class="kt-nav__link-icon flaticon2-bell-2"></i>
                                        <span class="kt-nav__link-text">Calls</span>
                                    </a>
                                </li>
                                <li class="kt-nav__item">
                                    <a href="/" class="kt-nav__link">
                                        <i class="kt-nav__link-icon flaticon2-dashboard"></i>
                                        <span class="kt-nav__link-text">Settings</span>
                                    </a>
                                </li>
                                <li class="kt-nav__separator"></li>
                                <li class="kt-nav__item">
                                    <a href="/" class="kt-nav__link">
                                        <i class="kt-nav__link-icon flaticon2-protected"></i>
                                        <span class="kt-nav__link-text">Help</span>
                                    </a>
                                </li>
                                <li class="kt-nav__item">
                                    <a href="/" class="kt-nav__link">
                                        <i class="kt-nav__link-icon flaticon2-bell-2"></i>
                                        <span class="kt-nav__link-text">Privacy</span>
                                    </a>
                                </li>
                            </ul>
                            {/* <!--end::Nav--> */}
                        </div>
                    </div>
                </div>
                
                <div class="kt-chat__center">
                    <div class="kt-chat__label">
                        <a href="/" class="kt-chat__title">Jason Muller</a>
                        <span class="kt-chat__status">
                            <span class="kt-badge kt-badge--dot kt-badge--success"></span> Active
                        </span>
                    </div>

                    <div class="kt-chat__pic kt-hidden">
                        <span class="kt-userpic kt-userpic--sm kt-userpic--circle" data-toggle="kt-tooltip" data-placement="right" title="Jason Muller" data-original-title="Tooltip title">                              
                            <img src="assets/media/users/300_12.jpg" alt="userimage"/>               
                        </span>
                        <span class="kt-userpic kt-userpic--sm kt-userpic--circle" data-toggle="kt-tooltip" data-placement="right" title="Nick Bold" data-original-title="Tooltip title">                              
                            <img src="assets/media/users/300_11.jpg" alt="userimage"/>               
                        </span>
                        <span class="kt-userpic kt-userpic--sm kt-userpic--circle" data-toggle="kt-tooltip" data-placement="right" title="Milano Esco" data-original-title="Tooltip title">                              
                            <img src="assets/media/users/100_14.jpg" alt="userimage"/>               
                        </span>
                        <span class="kt-userpic kt-userpic--sm kt-userpic--circle" data-toggle="kt-tooltip" data-placement="right" title="Teresa Fox" data-original-title="Tooltip title">                              
                            <img src="assets/media/users/100_4.jpg" alt="userimage"/>               
                        </span>
                    </div>
                </div>

                <div class="kt-chat__right">
                    <div class="dropdown dropdown-inline">
                        <button type="button" class="btn btn-clean btn-sm btn-icon btn-icon-md" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="flaticon2-add-1"></i>
                        </button>
                        <div class="dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-md">
                            {/* <!--begin::Nav--> */}
                            <ul class="kt-nav">
                                <li class="kt-nav__head">
                                    Messaging
                                    <i class="flaticon2-information" data-toggle="kt-tooltip" data-placement="right" title="Click to learn more..."></i>
                                </li>
                                <li class="kt-nav__separator"></li>
                                <li class="kt-nav__item">
                                    <a href="/" class="kt-nav__link">
                                        <i class="kt-nav__link-icon flaticon2-group"></i>
                                        <span class="kt-nav__link-text">New Group</span>
                                    </a>
                                </li>
                                <li class="kt-nav__item">
                                    <a href="/" class="kt-nav__link">
                                        <i class="kt-nav__link-icon flaticon2-open-text-book"></i>
                                        <span class="kt-nav__link-text">Contacts</span>
                                        <span class="kt-nav__link-badge">
                                                <span class="kt-badge kt-badge--brand  kt-badge--rounded-">5</span>
                                        </span>
                                    </a>
                                </li>
                                <li class="kt-nav__item">
                                    <a href="/" class="kt-nav__link">
                                        <i class="kt-nav__link-icon flaticon2-bell-2"></i>
                                        <span class="kt-nav__link-text">Calls</span>
                                    </a>
                                </li>
                                <li class="kt-nav__item">
                                    <a href="/" class="kt-nav__link">
                                        <i class="kt-nav__link-icon flaticon2-dashboard"></i>
                                        <span class="kt-nav__link-text">Settings</span>
                                    </a>
                                </li>
                                <li class="kt-nav__item">
                                    <a href="/" class="kt-nav__link">
                                        <i class="kt-nav__link-icon flaticon2-protected"></i>
                                        <span class="kt-nav__link-text">Help</span>
                                    </a>
                                </li>
                                <li class="kt-nav__separator"></li>
                                <li class="kt-nav__foot">
                                    <a class="btn btn-label-brand btn-bold btn-sm" href="/">Upgrade plan</a>
                                    <a class="btn btn-clean btn-bold btn-sm" href="/" data-toggle="kt-tooltip" data-placement="right" title="Click to learn more...">Learn more</a>
                                </li>
                            </ul>
                            {/* <!--end::Nav--> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="kt-portlet__body">
            <div class="kt-scroll kt-scroll--pull" data-mobile-height="300">
                <div class="kt-chat__messages">                    
                    
                    <div class="kt-chat__message">
                        <div class="kt-chat__user">
                            <span class="kt-userpic kt-userpic--circle kt-userpic--sm"> 
                                <img src="assets/media/users/100_12.jpg" alt="userimage"/>   
                            </span>
                            <a href="/" class="kt-chat__username">Jason Muller<span></span></a>
                            <span class="kt-chat__datetime">30 Seconds</span>
                        </div>
                        <div class="kt-chat__text kt-bg-light-success">
                            Discover what students who viewed Learn Figma - UI/UX Design <br/>Essential Training also viewed
                        </div>
                    </div>
                    <div class="kt-chat__message kt-chat__message--right">
                        <div class="kt-chat__user">
                            <span class="kt-chat__datetime">Just Now</span>
                            <a href="/" class="kt-chat__username">You<span></span></a>
                            <span class="kt-userpic kt-userpic--circle kt-userpic--sm"> 
                                <img src="assets/media/users/300_21.jpg" alt="userimage"/>   
                            </span>
                        </div>
                        <div class="kt-chat__text kt-bg-light-brand">
                            Most purchased Business courses during this sale!
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="kt-portlet__foot">
            <div class="kt-chat__input">
                <div class="kt-chat__editor">
                    <textarea style={{height: "50px"}} placeholder="Type here..."></textarea>
                </div>
                <div class="kt-chat__toolbar">
                    <div class="kt_chat__tools">
                        <a href="/"><i class="flaticon2-link"></i></a>
                        <a href="/"><i class="flaticon2-photograph"></i></a>
                        <a href="/"><i class="flaticon2-photo-camera"></i></a>
                    </div>
                    <div class="kt_chat__actions">
                        <button type="button" class="btn btn-brand btn-md btn-upper btn-bold kt-chat__reply">reply</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
{/* <!--End:: App Content--> */}
</div>
{/* <!--End::App--> */}
	</div>
{/* <!-- end:: Content -->	 */}
</div>
</div>
</div>



        <Footer />

        
		</div>
</div>
</div>

{/* <!-- end:: Page --> */}


{/* <!--Begin:: Chat--> */}
<div class="modal fade- modal-sticky-bottom-right" id="kt_chat_modal" role="dialog" data-backdrop="false">
<div class="modal-dialog" role="document">
<div class="modal-content">
    <div class="kt-chat">
        <div class="kt-portlet kt-portlet--last">
            <div class="kt-portlet__head">
                <div class="kt-chat__head ">
                    <div class="kt-chat__left">
                        <div class="kt-chat__label">
                            <a href="/" class="kt-chat__title">Jason Muller</a>
                            <span class="kt-chat__status">
                                <span class="kt-badge kt-badge--dot kt-badge--success"></span> Active
                            </span>
                        </div>                                
                    </div>
                    <div class="kt-chat__right">   
                        <div class="dropdown dropdown-inline">
                            <button type="button" class="btn btn-clean btn-sm btn-icon btn-icon-md" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="flaticon-more-1"></i>
                            </button>
                            <div class="dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-md">
                                {/* <!--begin::Nav--> */}
                                <ul class="kt-nav">
                                    <li class="kt-nav__head">
                                        Messaging
                                        <i class="flaticon2-information" data-toggle="kt-tooltip" data-placement="right" title="Click to learn more..."></i>
                                    </li>
                                    <li class="kt-nav__separator"></li>
                                    <li class="kt-nav__item">
                                        <a href="/" class="kt-nav__link">
                                            <i class="kt-nav__link-icon flaticon2-group"></i>
                                            <span class="kt-nav__link-text">New Group</span>
                                        </a>
                                    </li>
                                    <li class="kt-nav__item">
                                        <a href="/" class="kt-nav__link">
                                            <i class="kt-nav__link-icon flaticon2-open-text-book"></i>
                                            <span class="kt-nav__link-text">Contacts</span>
                                            <span class="kt-nav__link-badge">
                                                <span class="kt-badge kt-badge--brand  kt-badge--rounded-">5</span>
                                            </span>
                                        </a>
                                    </li>
                                    <li class="kt-nav__item">
                                        <a href="/" class="kt-nav__link">
                                            <i class="kt-nav__link-icon flaticon2-bell-2"></i>
                                            <span class="kt-nav__link-text">Calls</span>
                                        </a>
                                    </li>
                                    <li class="kt-nav__item">
                                        <a href="/" class="kt-nav__link">
                                            <i class="kt-nav__link-icon flaticon2-dashboard"></i>
                                            <span class="kt-nav__link-text">Settings</span>
                                        </a>
                                    </li>
                                    <li class="kt-nav__item">
                                        <a href="/" class="kt-nav__link">
                                            <i class="kt-nav__link-icon flaticon2-protected"></i>
                                            <span class="kt-nav__link-text">Help</span>
                                        </a>
                                    </li>
                                    <li class="kt-nav__separator"></li>
                                    <li class="kt-nav__foot">
                                        <a class="btn btn-label-brand btn-bold btn-sm" href="/">Upgrade plan</a>
                                        <a class="btn btn-clean btn-bold btn-sm" href="/" data-toggle="kt-tooltip" data-placement="right" title="Click to learn more...">Learn more</a>
                                    </li>
                                </ul>
                                {/* <!--end::Nav--> */}
                            </div>
                        </div>
                        
                        <button type="button" class="btn btn-clean btn-sm btn-icon" data-dismiss="modal">
                            <i class="flaticon2-cross"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div class="kt-portlet__body">
                <div class="kt-scroll kt-scroll--pull" data-height="410" data-mobile-height="300">
                    <div class="kt-chat__messages kt-chat__messages--solid">
                        <div class="kt-chat__message kt-chat__message--success">
                            <div class="kt-chat__user">
                                <span class="kt-userpic kt-userpic--circle kt-userpic--sm"> 
                                    <img src="assets/media/users/100_12.jpg" alt="userimage"/>   
                                </span>
                                <a href="/" class="kt-chat__username">Jason Muller<span></span></a>
                                <span class="kt-chat__datetime">2 Hours</span>
                            </div>                                    
                            <div class="kt-chat__text">
                                How likely are you to recommend our company<br/> to your friends and family?
                            </div>
                        </div>
                        <div class="kt-chat__message kt-chat__message--right kt-chat__message--brand">
                            <div class="kt-chat__user">                                
                                <span class="kt-chat__datetime">30 Seconds</span>
                                <a href="/" class="kt-chat__username">You<span></span></a>                                
                                <span class="kt-userpic kt-userpic--circle kt-userpic--sm"> 
                                    <img src="assets/media/users/300_21.jpg" alt="userimage"/>   
                                </span>
                            </div>                                   
                            <div class="kt-chat__text">
                                Hey there, we’re just writing to let you know that you’ve<br/> been subscribed to a repository on GitHub.
                            </div>
                        </div>
                        <div class="kt-chat__message kt-chat__message--success">
                            <div class="kt-chat__user">
                                <span class="kt-userpic kt-userpic--circle kt-userpic--sm"> 
                                    <img src="assets/media/users/100_12.jpg" alt="userimage"/>   
                                </span>
                                <a href="/" class="kt-chat__username">Jason Muller<span></span></a>                               
                                <span class="kt-chat__datetime">30 Seconds</span>
                            </div>
                            <div class="kt-chat__text">
                                Ok, Understood!
                            </div>
                        </div>
                        <div class="kt-chat__message kt-chat__message--right kt-chat__message--brand">
                            <div class="kt-chat__user">                                
                                <span class="kt-chat__datetime">Just Now</span>
                                <a href="/" class="kt-chat__username">You<span></span></a>                                
                                <span class="kt-userpic kt-userpic--circle kt-userpic--sm"> 
                                    <img src="assets/media/users/300_21.jpg" alt="userimage"/>   
                                </span>
                            </div>
                            <div class="kt-chat__text">
                                You’ll receive notifications for all issues, pull requests!
                            </div>
                        </div>
                        <div class="kt-chat__message kt-chat__message--success">
                            <div class="kt-chat__user">
                                <span class="kt-userpic kt-userpic--circle kt-userpic--sm"> 
                                    <img src="assets/media/users/100_12.jpg" alt="userimage"/>   
                                </span>
                                <a href="/" class="kt-chat__username">Jason Muller<span></span></a>
                                <span class="kt-chat__datetime">2 Hours</span>
                            </div>                                    
                            <div class="kt-chat__text">
                                You were automatically <b class="kt-font-brand">subscribed</b> <br/>because you’ve been given access to the repository
                            </div>
                        </div>
                        <div class="kt-chat__message kt-chat__message--right kt-chat__message--brand">
                            <div class="kt-chat__user">                                
                                <span class="kt-chat__datetime">30 Seconds</span>
                                <a href="/" class="kt-chat__username">You<span></span></a>                                
                                <span class="kt-userpic kt-userpic--circle kt-userpic--sm"> 
                                    <img src="assets/media/users/300_21.jpg" alt="userimage"/>   
                                </span>
                            </div>
                          
                            <div class="kt-chat__text">
                                You can unwatch this repository immediately <br/>by clicking here: <a href="/" class="kt-font-bold kt-link"></a>
                            </div>
                        </div>
                        <div class="kt-chat__message kt-chat__message--success">
                            <div class="kt-chat__user">
                                <span class="kt-userpic kt-userpic--circle kt-userpic--sm"> 
                                    <img src="assets/media/users/100_12.jpg" alt="userimage"/>   
                                </span>
                                <a href="/" class="kt-chat__username">Jason Muller<span></span></a>                               
                                <span class="kt-chat__datetime">30 Seconds</span>
                            </div>                                  
                            <div class="kt-chat__text">
                                Discover what students who viewed Learn <br/>Figma - UI/UX Design Essential Training also viewed
                            </div>
                        </div>
                        <div class="kt-chat__message kt-chat__message--right kt-chat__message--brand">
                            <div class="kt-chat__user">                                
                                <span class="kt-chat__datetime">Just Now</span>
                                <a href="/" class="kt-chat__username">You<span></span></a>                                
                                <span class="kt-userpic kt-userpic--circle kt-userpic--sm"> 
                                    <img src="assets/media/users/300_21.jpg" alt="userimage"/>   
                                </span>
                            </div>
                            <div class="kt-chat__text">
                                Most purchased Business courses during this sale!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="kt-portlet__foot">
                <div class="kt-chat__input">
                    <div class="kt-chat__editor">
                        <textarea placeholder="Type here..." style={{height: "50px"}}></textarea>
                    </div>
                    <div class="kt-chat__toolbar">
                        <div class="kt_chat__tools">
                            <a href="/"><i class="flaticon2-link"></i></a>
                            <a href="/"><i class="flaticon2-photograph"></i></a>
                            <a href="/"><i class="flaticon2-photo-camera"></i></a>
                        </div>                           
                        <div class="kt_chat__actions">
                            <button type="button" class="btn btn-brand btn-md  btn-font-sm btn-upper btn-bold kt-chat__reply">reply</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</div>
{/* <!--ENd:: Chat--> */}
            
   
    </body>
       
 
     

        )
    }
}

export default Chat;