import React from 'react';

//<----STYLES---->
import '../../styles/backstyles/assets/css/demo8/style.bundle.css';
import '../../styles/backstyles/assets/vendors/custom/fullcalendar/fullcalendar.bundle.css';
//<---STYLES ----->

const Footer = () =>{
    return(        

<div class="kt-footer  kt-grid__item" id="kt_footer">
<div class="kt-container  kt-container--fluid ">
<div class="kt-footer__wrapper">
    <div class="kt-footer__copyright">
        2019&nbsp;&copy;&nbsp;<a href="/" target="_blank" class="kt-link">Study Counter</a>
    </div>
    <div class="kt-footer__menu">
        <a href="/" target="_blank" class="kt-link">About</a>
        <a href="/" target="_blank" class="kt-link">Team</a>
        <a href="/" target="_blank" class="kt-link">Contact</a>
    </div>
</div>
</div>
</div>

    )
}

export default Footer;