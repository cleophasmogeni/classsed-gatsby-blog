import React from 'react';

//<--- IMAGES ->

//import logo8 from ../../styles/backstyles/assets/media/logos/logo-8.png
import logo8a from '../../styles/backstyles/assets/media/logos/studycounterflier.png';
import logo8b from '../../styles/backstyles/assets/media/logos/logo-8-inverse.png';
import user30021 from '../../styles/backstyles/assets/media/users/300_21.jpg';
//import user30025 from '../../styles/backstyles/assets/media/users/300_25.jpg';
//<--- IMAGES ---->

//<----STYLES---->
import '../../styles/backstyles/assets/css/demo8/style.bundle.css'
import '../../styles/backstyles/assets/vendors/custom/fullcalendar/fullcalendar.bundle.css'
//<---STYLES ----->

const Header = ()=>{
    return(
         
        
<div id="kt_header" class="kt-header kt-grid__item  kt-header--fixed "  data-ktheader-minimize="on" >
<div class="kt-header__top">
<div class="kt-container  kt-container--fluid ">
    {/* <!-- begin:: Brand --> */}
<div class="kt-header__brand   kt-grid__item" id="kt_header_brand">
<div class="kt-header__brand-logo">
<a href="/dashboard">
    <img alt="Logo" src={logo8a} class="kt-header__brand-logo-default"/>
    <img alt="Logo" src={logo8b} class="kt-header__brand-logo-sticky"/>			
</a>		
</div> 
</div>
{/* <!-- end:: Brand -->			 */}
{/* <!-- begin:: Header Topbar --> */}
<div class="kt-header__topbar">

{/* <!--begin: User bar --> */}
<div class="kt-header__topbar-item kt-header__topbar-item--user">
<div class="kt-header__topbar-wrapper" data-toggle="dropdown" data-offset="0px,10px">
    <span class="kt-header__topbar-welcome kt-visible-desktop">Hi,</span>
    <span class="kt-header__topbar-username kt-visible-desktop"></span>
    <img alt="Pic" src={user30021}/>			
    <span class="kt-header__topbar-icon kt-bg-brand kt-font-lg kt-font-bold kt-font-light kt-hidden">S</span>
    <span class="kt-header__topbar-icon kt-hidden"><i class="flaticon2-user-outline-symbol"></i></span>			
</div>

</div>
{/* <!--end: User bar --> */}
    
</div>
{/* <!-- end:: Header Topbar --> */}
</div>
</div>
<div class="kt-header__bottom">
<div class="kt-container  kt-container--fluid ">
    {/* <!-- begin: Header Menu --> */}
<button class="kt-header-menu-wrapper-close" id="kt_header_menu_mobile_close_btn"><i class="la la-close"></i></button>
<div class="kt-header-menu-wrapper" id="kt_header_menu_wrapper">
<div id="kt_header_menu" class="kt-header-menu kt-header-menu-mobile ">
<ul class="kt-menu__nav ">
    <li class="kt-menu__item  kt-menu__item--active "  aria-haspopup="true">
        <a  href="/dashboard" class="kt-menu__link ">
        <span class="kt-menu__link-text">Home</span>
    </a>
    </li>
    <li class="kt-menu__item  kt-menu__item--submenu kt-menu__item--rel"  data-ktmenu-submenu-toggle="click" aria-haspopup="true">
        <a  href="/orders" class="kt-menu__link kt-menu__toggle">
            <span class="kt-menu__link-text">My orders</span>
            <i class="kt-menu__hor-arrow la la-angle-down"></i>
            <i class="kt-menu__ver-arrow la la-angle-right"></i>
        </a>
    </li>
    <li class="kt-menu__item  kt-menu__item--submenu kt-menu__item--rel"  data-ktmenu-submenu-toggle="click" aria-haspopup="true">
            <a  href="/dashboard/order" class="kt-menu__link kt-menu__toggle">
                <span class="kt-menu__link-text">New order</span>
                <i class="kt-menu__hor-arrow la la-angle-down"></i>
                <i class="kt-menu__ver-arrow la la-angle-right"></i>
            </a>    
    </li>        
    <li class="kt-menu__item  kt-menu__item--submenu kt-menu__item--rel"  data-ktmenu-submenu-toggle="click" aria-haspopup="true">
        <a  href="/chat" class="kt-menu__link kt-menu__toggle">
            <span class="kt-menu__link-text">Chat</span>
            <i class="kt-menu__hor-arrow la la-angle-down"></i>
            <i class="kt-menu__ver-arrow la la-angle-right"></i>
        </a>
        
    </li>      
    <li class="kt-menu__item  kt-menu__item--submenu kt-menu__item--rel"  data-ktmenu-submenu-toggle="click" aria-haspopup="true">
                <a  href="/user/profile" class="kt-menu__link kt-menu__toggle">
                    <span class="kt-menu__link-text">Profile</span>
                    <i class="kt-menu__hor-arrow la la-angle-down"></i>
                    <i class="kt-menu__ver-arrow la la-angle-right"></i>
                </a>
    </li>
    </ul>
</div>
</div>
{/* <!-- end: Header Menu --> */}
</div>
</div>
</div>

    )
}

export default Header;